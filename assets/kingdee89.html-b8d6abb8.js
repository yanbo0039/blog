import{_ as l,X as s,Y as a,a1 as d,Z as e,$ as i,a2 as r,a0 as t,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_89_1.png",o="/blog/assets/Kingdee_89_2.png",u="/blog/assets/Kingdee_89_3.png",m="/blog/assets/Kingdee_89_4.png",b={},p={id:"_89-金蝶云苍穹工具栏上提示消息事件案例-md",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_89-金蝶云苍穹工具栏上提示消息事件案例-md","aria-hidden":"true"},"#",-1),_={href:"http://xn--89--x28d3w8az1di1bo4ie92bm3ftkly0n7wa042dxy6b1oepq9burs3k1c.md",target:"_blank",rel:"noopener noreferrer"},h=t('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h3><blockquote><p>新建请假申请单单据</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>新建请假类型基础资料</p></blockquote><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>新建请假天数初始表</p></blockquote><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>新建完成记得授权</p></blockquote><h3 id="添加数据" tabindex="-1"><a class="header-anchor" href="#添加数据" aria-hidden="true">#</a> 添加数据</h3><blockquote><p>在请假天数初始表里添加多条数据，记得剩余天数字段也要添加数据</p></blockquote><h3 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

import kd.bos.bill.AbstractBillPlugIn;
import kd.bos.dataentity.entity.DynamicObject;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.entity.datamodel.IDataModel;
import kd.bos.entity.datamodel.events.PropertyChangedArgs;
import kd.bos.orm.query.QCP;
import kd.bos.orm.query.QFilter;
import kd.bos.servicehelper.QueryServiceHelper;

/**
 * &lt;p&gt;Title: LeaveBillPopWindowPlugin&lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    试验成功
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月21日
 * @version 1.0
 */
public class LeaveBillPopWindowPlugin extends AbstractBillPlugIn {

	//请假申请单中的请假类型的标识
    private final String KEY_LEAVE_TYPE = &quot;leavetype&quot;;
    //请假申请单中的请假人的标识
    private final String KEY_PERSON = &quot;person&quot;;
    //请假剩余天数基础资料的页面编码
//    private final String KEY_LEAVE_DAYS_PAGE = &quot;9z8e_gjt_hr_qjts&quot;;
    private final String KEY_LEAVE_DAYS_PAGE = &quot;op_qjtscsb&quot;;
    //请假剩余天数基础资料中的剩余天数的标识
    private final String KEY_UNUSE_DAYS = &quot;unusedays&quot;;
    //提醒天数
    private final Integer REMIND_DAYS = 3;

    /**
     * &lt;p&gt;Title: propertyChanged&lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * 控件改变事件，在页面上打开即时触发值更新即可，不需要注册监听
     * 选择请假类型之后判断该用户该类型下的剩余天数，如果小于3天则弹框提醒
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年3月21日
     * @param param the bare_field_name
     * @param e
     * @see kd.bos.entity.datamodel.events.IDataModelChangeListener#propertyChanged(kd.bos.entity.datamodel.events.PropertyChangedArgs)
     * @version 1.0
     */
    @Override
    public void propertyChanged(PropertyChangedArgs e) {
        super.propertyChanged(e);
        //获取改变的控件的标识名，如果是请假类型，则去获取剩余请假天数
        String name = e.getProperty().getName();
        if (StringUtils.equals(KEY_LEAVE_TYPE, name)) {
            //获取页面数据模型
            IDataModel model = this.getModel();
            //获取页面person和leavetype对应的动态数据模型对象
            DynamicObject personObj = (DynamicObject) model.getValue(KEY_PERSON);
            DynamicObject leaveTypeObj = (DynamicObject) model.getValue(KEY_LEAVE_TYPE);
            if (null != personObj &amp;&amp; null != leaveTypeObj) {
                //获取person和leavetype对应的主键id
                Long personID = (Long) personObj.getPkValue();
                Long leaveTypeID = (Long) leaveTypeObj.getPkValue();
                //组装查询条件，条件对象QFilter，参数：属性名，相关条件，属性值（类似于sql的单个适配条件）
                QFilter person = new QFilter(KEY_PERSON, QCP.equals, personID);
                QFilter leaveType = new QFilter(KEY_LEAVE_TYPE, QCP.equals, leaveTypeID);
                //组装两个条件为同时成立的关系（类似于sql几个条件之间的关系）
                QFilter[] qFilters = {person.and(leaveType)};
                //根据组装好的用户和请假类型去用户请假天数基础资料中获取剩余天数
                // 参数为：1.请假天数基础资料的编码；2.需查询的属性；3.查询条件
                // 返回的是请假天数基础资料对象，只包含了需查询的属性
                DynamicObject leaveDays = QueryServiceHelper.queryOne(KEY_LEAVE_DAYS_PAGE, KEY_UNUSE_DAYS, qFilters);
                //根据返回的用户剩余请假天数对象获取假期剩余天数
                int unuseDays = leaveDays.getInt(KEY_UNUSE_DAYS);
                if (0 &lt; unuseDays &amp;&amp; REMIND_DAYS &gt; unuseDays) {
                    //如果大于0天小于3天则弹出提示消息
                    this.getView().showTipNotification(&quot;您的假期天数少于3天了，要省着用哦~&quot;);
                } else if (unuseDays &lt;= 0) {
                    //如果小于等于0天则弹出错误提示
                    this.getView().showErrorNotification(&quot;您的假期天数剩余0天，不允许休假哦！&quot;);
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预览测试" tabindex="-1"><a class="header-anchor" href="#预览测试" aria-hidden="true">#</a> 预览测试</h3><blockquote><p>在请假申请单中预览测试，在填写到请假类型时则触发事件</p></blockquote><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>金蝶云苍穹工具栏上提示消息事件案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',20);function y(f,E){const n=v("ExternalLinkIcon");return s(),a("div",null,[d(" more "),e("h1",p,[g,i(),e("a",_,[i("89-金蝶云苍穹工具栏上提示消息事件案例.md"),r(n)])]),h])}const k=l(b,[["render",y],["__file","kingdee89.html.vue"]]);export{k as default};
