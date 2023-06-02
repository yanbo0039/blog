import{_ as l,X as s,Y as t,a1 as a,Z as i,$ as e,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_97_1.png",o="/blog/assets/Kingdee_97_2.png",m="/blog/assets/Kingdee_97_3.png",u="/blog/assets/Kingdee_97_4.png",b="/blog/assets/Kingdee_97_5.png",g="/blog/assets/Kingdee_97_6.png",p="/blog/assets/Kingdee_97_7.png",_="/blog/assets/Kingdee_97_8.png",h="/blog/assets/Kingdee_97_9.png",f="/blog/assets/Kingdee_97_10.png",y="/blog/assets/Kingdee_97_11.png",E="/blog/assets/Kingdee_97_12.png",P="/blog/assets/Kingdee_97_13.png",k="/blog/assets/Kingdee_97_14.png",C="/blog/assets/Kingdee_97_15.png",S="/blog/assets/Kingdee_97_1.gif",x={},w={id:"_97-金蝶云苍穹应用层弹出新页签案例-md",tabindex:"-1"},K=i("a",{class:"header-anchor",href:"#_97-金蝶云苍穹应用层弹出新页签案例-md","aria-hidden":"true"},"#",-1),q={href:"http://xn--97--dj9ds8b18gnux0leqsb548aywg6l7bqpouldwy1blrqvq5bu8ya.md",target:"_blank",rel:"noopener noreferrer"},L=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><hr><p>每个优秀的人，都有一段沉默的时光。那段时光，是付出了很多努力，却得不到结果的日子，我们把它叫作扎根。</p><hr><h4 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h4><ol><li>新建请假天数初始表基础资料</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>新建请假类型 基础资料</li></ol><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建请假类型2 基础资料</li></ol><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>新建请假申请单单据</li></ol><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>本科及其以上文凭！！！！</li></ol><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h4><blockquote><p>请假申请单单据插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

import java.util.EventObject;

import kd.bos.bill.AbstractBillPlugIn;
import kd.bos.dataentity.entity.DynamicObject;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.CloseCallBack;
import kd.bos.form.IFormView;
import kd.bos.form.ShowType;
import kd.bos.form.events.ClosedCallBackEvent;
import kd.bos.list.ListShowParameter;
import kd.bos.mvc.SessionManager;
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
public class PopBillListParentPlugin4 extends AbstractBillPlugIn {
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
//        super.click(evt);
      //如果是“请假类型--弹出列表”控件被点击，则创建列表弹窗页面对象
    	ListShowParameter listShowParameter = new ListShowParameter();
    	//设置FormId，列表的FormId固定为&quot;bos_list&quot;
    	listShowParameter.setFormId(&quot;bos_list&quot;);
    	//设置BillFormId，为列表所对应单据的标识
    	listShowParameter.setBillFormId(KEY_POP_LEAVE_TYPE_PAGE);
    	//设置弹出页面标题
    	listShowParameter.setCaption(&quot;选择请假类型：&quot;);
//    	StyleCss styleCss = new StyleCss();
//    	styleCss.setWidth(&quot;800&quot;);
//    	styleCss.setHeight(&quot;600&quot;);
    	//设置弹出页面的样式
//    	listShowParameter.getOpenStyle().setInlineStyleCss(styleCss);
    	//设置为不能多选，如果为true则表示可以多选
    	listShowParameter.setMultiSelect(false);
    	//设置页面回调事件方法
    	listShowParameter.setCloseCallBack(new CloseCallBack(this, KEY_POP_LEAVE_TYPE));
    	//设置弹出页面的打开方式
    	listShowParameter.getOpenStyle().setShowType(ShowType.NewTabPage);
    	//设置打开界面的目标容器
    	listShowParameter.getOpenStyle().setTargetKey(&quot;tabap&quot;);
    	//获取最外层根页面的View对象
    	IFormView mainView = SessionManager.getCurrent().getMainView(this.getView().getFormShowParameter().getRootPageId());
    	//绑定弹出列表到根页面
    	mainView.showForm(listShowParameter);
    	this.getView().sendFormAction(mainView);
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请假类型2基础资料插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注册插件" tabindex="-1"><a class="header-anchor" href="#注册插件" aria-hidden="true">#</a> 注册插件</h4><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="配置应用" tabindex="-1"><a class="header-anchor" href="#配置应用" aria-hidden="true">#</a> 配置应用</h4><ol><li>启用应用</li></ol><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>配置菜单</li></ol><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>用户授权，管理员登录，授权。</li></ol><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>应用添加卡片</li></ol><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><blockquote><p>如下图所示，测试成功</p></blockquote><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹应用内弹出新面签案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',44);function O(T,V){const n=v("ExternalLinkIcon");return s(),t("div",null,[a(" more "),i("h1",w,[K,e(),i("a",q,[e("97-金蝶云苍穹应用层弹出新页签案例.md"),d(n)])]),L])}const A=l(x,[["render",O],["__file","kingdee97.html.vue"]]);export{A as default};
