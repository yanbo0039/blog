import{_ as l,X as s,Y as a,a1 as d,Z as i,$ as e,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_96_1.png",o="/blog/assets/Kingdee_96_2.png",u="/blog/assets/Kingdee_96_3.png",m="/blog/assets/Kingdee_96_4.png",b="/blog/assets/Kingdee_96_5.png",g="/blog/assets/Kingdee_96_6.png",p="/blog/assets/Kingdee_96_7.png",_="/blog/assets/Kingdee_96_8.png",f="/blog/assets/Kingdee_96_9.png",h="/blog/assets/Kingdee_96_10.png",E="/blog/assets/Kingdee_96_11.png",k="/blog/assets/Kingdee_96_12.png",P="/blog/assets/Kingdee_96_13.png",y="/blog/assets/Kingdee_96_14.png",x="/blog/assets/Kingdee_96_15.png",C="/blog/assets/Kingdee_96_16.png",S="/blog/assets/Kingdee_96_17.png",K={},q={id:"_96-金蝶云苍穹应用内弹出新面签案例-md",tabindex:"-1"},L=i("a",{class:"header-anchor",href:"#_96-金蝶云苍穹应用内弹出新面签案例-md","aria-hidden":"true"},"#",-1),w={href:"http://xn--96--dj9ds8bz0foxal15eqkb548aywg6l7bqpouldwy1blrqvq5bf7u.md",target:"_blank",rel:"noopener noreferrer"},Y=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><hr><p>如果有个人，因为你的一点好，就原谅你所有的错，你要特别珍惜，因为太多人，因为你的一点错，而忘记你所有的好。</p><hr><h3 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h3><blockquote><p>新建请假天数初始表基础资料</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>新建请假类型 基础资料</p></blockquote><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>新建请假类型2 基础资料</p></blockquote><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>新建请假申请单单据</p></blockquote><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h3><blockquote><p>单据插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

import java.util.EventObject;

import kd.bos.bill.AbstractBillPlugIn;
import kd.bos.dataentity.entity.DynamicObject;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.CloseCallBack;
import kd.bos.form.ShowType;
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
public class PopBillListParentPlugin3 extends AbstractBillPlugIn {
	//父页面请假类型--弹出列表控件标识
    private static final String KEY_POP_LEAVE_TYPE = &quot;popleavetype&quot;;
    //子页面请假类型单据标识
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
                listShowParameter.getOpenStyle().setShowType(ShowType.MainNewTabPage);
                //设置弹出页面的样式
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请假类型2基础资料插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册插件" tabindex="-1"><a class="header-anchor" href="#注册插件" aria-hidden="true">#</a> 注册插件</h3><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="配置应用" tabindex="-1"><a class="header-anchor" href="#配置应用" aria-hidden="true">#</a> 配置应用</h3><ol><li>启用应用</li></ol><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>配置菜单</li></ol><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>用户授权，管理员登录，授权。</li></ol><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>应用添加卡片</li></ol><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>金蝶云苍穹应用内弹出新面签案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',42);function O(T,A){const n=v("ExternalLinkIcon");return s(),a("div",null,[d(" more "),i("h1",q,[L,e(),i("a",w,[e("96-金蝶云苍穹应用内弹出新面签案例.md"),t(n)])]),Y])}const V=l(K,[["render",O],["__file","kingdee96.html.vue"]]);export{V as default};
