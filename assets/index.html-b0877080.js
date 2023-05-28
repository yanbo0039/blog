import{_ as l,X as s,Y as d,a1 as t,Z as i,$ as e,a2 as a,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_94_1.png",u="/blog/assets/Kingdee_94_2.png",m="/blog/assets/Kingdee_94_3.png",o="/blog/assets/Kingdee_94_4.png",b="/blog/assets/Kingdee_94_5.png",p="/blog/assets/Kingdee_94_6.png",g="/blog/assets/Kingdee_94_7.png",_="/blog/assets/Kingdee_94_1.gif",h={},f={id:"_94-金蝶云苍穹弹出自定义列表案例-md",tabindex:"-1"},E=i("a",{class:"header-anchor",href:"#_94-金蝶云苍穹弹出自定义列表案例-md","aria-hidden":"true"},"#",-1),k={href:"http://xn--94--498dxm53ct0hxgq52f2ii72zs23cwhuy0ci5y5rd198c.md",target:"_blank",rel:"noopener noreferrer"},P=r('<hr><p>宫崎骏说: “当陪你的人要下车时，即使再不舍也要心存感激笑着挥手告别。终有弱水替沧海，再无相思寄巫山。”</p><hr><h4 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h4><blockquote><p>新建请假天数初始表基础资料</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>新建请假类型 基础资料</p></blockquote><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>新建请假类型2 基础资料</p></blockquote><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>新建请假申请单单据</p></blockquote><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h4><blockquote><p>单据插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

import java.util.EventObject;

import kd.bos.bill.AbstractBillPlugIn;
import kd.bos.dataentity.entity.DynamicObject;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.CloseCallBack;
import kd.bos.form.ShowType;
import kd.bos.form.StyleCss;
import kd.bos.form.control.Control;
import kd.bos.form.events.ClosedCallBackEvent;
import kd.bos.list.ListShowParameter;
import kd.bos.servicehelper.BusinessDataServiceHelper;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    试验成功
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月21日
 * @version 1.0
 */
public class PopBillListParentPlugin extends AbstractBillPlugIn {
	//父页面请假类型--弹出列表控件标识
    private static final String KEY_POP_LEAVE_TYPE = &quot;popleavetype&quot;;
    //子页面请假类型单据标识
//    private static final String KEY_POP_LEAVE_TYPE_PAGE = &quot;wlzy_for_leavetype&quot;;
    private static final String KEY_POP_LEAVE_TYPE_PAGE = &quot;op_qjlx2_test&quot;;
    //子页面请假类型名称标识
    private static final String KEY_TYPE_NAME = &quot;name&quot;;

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年3月21日
     * @param param the bare_field_name
     * @param e
     * @see kd.bos.bill.AbstractBillPlugIn#registerListener(java.util.EventObject)
     * @version 1.0
     */
    @Override
    public void registerListener(EventObject e) {
        super.registerListener(e);
        this.addClickListeners(KEY_POP_LEAVE_TYPE);
    }

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年3月21日
     * @param param the bare_field_name
     * @param evt
     * @see kd.bos.form.plugin.AbstractFormPlugin#click(java.util.EventObject)
     * @version 1.0
     */
    @Override
    public void click(EventObject evt) {
        super.click(evt);
        //获取被点击控件
        Control source = (Control) evt.getSource();
        if (null != source) {
            if (StringUtils.equals(KEY_POP_LEAVE_TYPE, source.getKey())) {
                //如果是“请假类型--弹出列表”控件被点击，则创建列表弹窗页面对象
                ListShowParameter listShowParameter = new ListShowParameter();
                
                //设置FormId，列表的FormId固定为&quot;bos_list&quot;
                listShowParameter.setFormId(&quot;bos_list&quot;);
                //设置BillFormId，为列表所对应单据的标识
                listShowParameter.setBillFormId(KEY_POP_LEAVE_TYPE_PAGE);
                
                //设置弹出页面标题
                listShowParameter.setCaption(&quot;选择请假类型：&quot;);
                //设置弹出页面的打开方式
                listShowParameter.getOpenStyle().setShowType(ShowType.Modal);
                StyleCss styleCss = new StyleCss();
                styleCss.setWidth(&quot;800&quot;);
                styleCss.setHeight(&quot;600&quot;);
                //设置弹出页面的样式
                listShowParameter.getOpenStyle().setInlineStyleCss(styleCss);
                //设置为不能多选，如果为true则表示可以多选
                listShowParameter.setMultiSelect(false);
                //设置页面回调事件方法
                listShowParameter.setCloseCallBack(new CloseCallBack(this, KEY_POP_LEAVE_TYPE));
                //绑定子页面到当前页面
                this.getView().showForm(listShowParameter);
            }
        }
    }

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年3月21日
     * @param param the bare_field_name
     * @param e
     * @see kd.bos.form.plugin.AbstractFormPlugin#closedCallBack(kd.bos.form.events.ClosedCallBackEvent)
     * @version 1.0
     */
    @Override
    public void closedCallBack(ClosedCallBackEvent e) {
    	super.closedCallBack(e);
        if (e.getReturnData() != null &amp;&amp; StringUtils.equals(KEY_POP_LEAVE_TYPE, e.getActionId())) {
            //如果返回值不为空且标识一致，则获取返回值，此处返回值为所选数据的主键id
            String returnData = (String) e.getReturnData();
            if (StringUtils.isNotBlank(returnData)) {
                //根据主键id去请假类型单据中获取单条数据
                DynamicObject leaveType = BusinessDataServiceHelper.loadSingle(returnData, KEY_POP_LEAVE_TYPE_PAGE, KEY_TYPE_NAME);
                //获取到请假类型名称的属性值
//                String typename = (String) leaveType.get(KEY_TYPE_NAME);
                String typename = leaveType.get(KEY_TYPE_NAME).toString();
                //给页面“请假类型--弹出列表”赋值类型名称的值
                this.getModel().setValue(KEY_POP_LEAVE_TYPE, typename);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请假类型2基础资料插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

import java.util.EventObject;

import kd.bos.dataentity.utils.StringUtils;
import kd.bos.entity.datamodel.ListSelectedRowCollection;
import kd.bos.form.control.events.ItemClickEvent;
import kd.bos.list.BillList;
import kd.bos.list.plugin.AbstractListPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    试验成功
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月21日
 * @version 1.0
 */
public class PopBillListPlugin extends AbstractListPlugin {
	//子列表页面确认按钮标识
    private static final String KEY_CONFIRM = &quot;ss&quot;;    

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年3月21日
     * @param param the bare_field_name
     * @param e
     * @see kd.bos.form.plugin.AbstractFormPlugin#registerListener(java.util.EventObject)
     * @version 1.0
     */
    @Override
    public void registerListener(EventObject e) {
        super.registerListener(e);
        //注册工具栏确认选项的监听
        this.addItemClickListeners(KEY_CONFIRM);
       
    }

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年3月21日
     * @param param the bare_field_name
     * @param evt
     * @see kd.bos.form.plugin.AbstractFormPlugin#itemClick(kd.bos.form.control.events.ItemClickEvent)
     * @version 1.0
     */
    @Override
    public void itemClick(ItemClickEvent evt) {
        super.itemClick(evt);
        if (StringUtils.equals(KEY_CONFIRM, evt.getItemKey())) {
            //当工具栏确认按钮被点击，获取当前列表对象
            //这里获取当前列表对象的写法是固定写法
            BillList billList = this.getControl(&quot;billlistap&quot;);
            //获取当前列表的选中行
            ListSelectedRowCollection selectedRows = billList.getSelectedRows();
            if (null != selectedRows) {
                
                //获取选中行的主键id
                //这里设置了只能单选，所以直接获取第一个元素，如果是多选需要遍历集合
                //这里获取的有具体值的参数不是很多，一般就使用主键id，之后有需要其他信息再去根据主键查询
                String primaryKeyValue = String.valueOf(selectedRows.get(0).getPrimaryKeyValue());
                //返回主键id到父页面并关闭子页面
                this.getView().returnDataToParent(primaryKeyValue);
                this.getView().close();
               
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注册插件" tabindex="-1"><a class="header-anchor" href="#注册插件" aria-hidden="true">#</a> 注册插件</h4><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="预览测试" tabindex="-1"><a class="header-anchor" href="#预览测试" aria-hidden="true">#</a> 预览测试</h4><blockquote><p>重启服务后，预览测试，如下图所示，请假类型弹出的是请假类型 ，请假类型-弹出列表弹出的是请假类型2则测试成功</p></blockquote><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹弹出自定义列表案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',29);function y(C,S){const n=v("ExternalLinkIcon");return s(),d("div",null,[t(" more "),i("h1",f,[E,e(),i("a",k,[e("94-金蝶云苍穹弹出自定义列表案例.md"),a(n)])]),P])}const q=l(h,[["render",y],["__file","index.html.vue"]]);export{q as default};
