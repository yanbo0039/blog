import{_ as l,X as s,Y as a,a1 as d,Z as i,$ as e,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Kingdee_92_1.png",c="/blog/assets/Kingdee_92_2.png",m="/blog/assets/Kingdee_92_3.png",b="/blog/assets/Kingdee_92_4.png",o="/blog/assets/Kingdee_92_5.png",g="/blog/assets/Kingdee_92_6.png",p="/blog/assets/Kingdee_92_1.gif",_={},h={id:"_92-金蝶云苍穹弹出修改自定义单据页面案例-md",tabindex:"-1"},E=i("a",{class:"header-anchor",href:"#_92-金蝶云苍穹弹出修改自定义单据页面案例-md","aria-hidden":"true"},"#",-1),f={href:"http://xn--92--498dxm53c0t54kkxd2y3aj9iovmnuflnmvx2e84yadfdrz2ad58bxjx86e.md",target:"_blank",rel:"noopener noreferrer"},S=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><hr><p>美好的事情总会到来，你要简单干净，陪明单纯，就会发现，奇迹不是降临，它是因你而来。 ——————安东尼</p><hr><h3 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h3><ol><li>新建请假类型基础资料</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>新建请假类型基础资料</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建请假申请单单据</li></ol><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>新建自定义单据单据</li></ol><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h3><blockquote><p>请假申请单插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

import java.util.HashMap;

import kd.bos.bill.AbstractBillPlugIn;
import kd.bos.bill.BillShowParameter;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.entity.datamodel.events.PropertyChangedArgs;
import kd.bos.form.CloseCallBack;
import kd.bos.form.ShowType;
import kd.bos.form.StyleCss;
import kd.bos.form.events.ClosedCallBackEvent;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    弹出自定义单据
 *    试验成功
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月21日
 * @version 1.0
 */
public class PopBillAppendParentPlugin extends AbstractBillPlugIn {
	//父页面的请假天数标识
//    private final String KEY_LEAVE_DAYS = &quot;day&quot;;
    private final String KEY_LEAVE_DAYS = &quot;leavedays&quot;;
    //子页面的标识
//    private final String KEY_APPEND_BILL = &quot;wlzy_forleave_reason&quot;;
    private final String KEY_APPEND_BILL = &quot;op_zdybill_test1&quot;;
    //父页面的工作交接安排标识
    private final String KEY_WORK_ARRANGE = &quot;leave_workarrangement&quot;;
    //父页面的备注信息标识
    private final String KEY_REMARK = &quot;leave_info&quot;;
    //子页面的主键标识
    private final String KEY_PKID = &quot;son_pkid&quot;;

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * 修改字段值之后触发
     * 通知插件字段发生了改变，可以同步调整其他字段值
     * 特别说明：
     * 界面数据初始时，不触发此事件，即在afterCreateNewData事件中，修改字段值，不会触发此事件
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
        //获取改变字段的编码
        String name = e.getProperty().getName();
        if (StringUtils.equals(KEY_LEAVE_DAYS, name)) {
            //获取改变字段的新值
//            Integer newValue = (Integer) e.getChangeSet()[0].getNewValue();
            Integer newValue = Integer.parseInt(String.valueOf(e.getChangeSet()[0].getNewValue()));
            if (null != newValue &amp;&amp; newValue &gt; 3) {
                //创建弹出单据页面对象，并赋值
                BillShowParameter billShowParameter = new BillShowParameter();
                //设置弹出子单据页面的标识
                billShowParameter.setFormId(KEY_APPEND_BILL);
                //设置弹出子单据页面的标题
                billShowParameter.setCaption(&quot;您的请假天数大于3天，请填写工作交接安排~&quot;);
                //设置弹出子单据页面的打开方式
                billShowParameter.getOpenStyle().setShowType(ShowType.Modal);
                //设置弹出子单据页面的样式，高600宽800
                StyleCss inlineStyleCss = new StyleCss();
                inlineStyleCss.setHeight(&quot;600&quot;);
                inlineStyleCss.setWidth(&quot;800&quot;);
                billShowParameter.getOpenStyle().setInlineStyleCss(inlineStyleCss);
                //设置子页面关闭回调对象，回调本插件，标识为常量KEY_LEAVE_DAYS对应的值
                billShowParameter.setCloseCallBack(new CloseCallBack(this, KEY_LEAVE_DAYS));
                //弹窗子页面和父页面绑定
                this.getView().showForm(billShowParameter);
            }
        }
    }

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * 子界面关闭时，触发父界面的closedCallBack事件；
     * 父界面的插件，可以在此事件，接收子界面返回的数据。
     * 特别说明：
     * 需要在显示子界面时，调用FormShowParameter参数的setCloseCallBack方法，设置回调属性，才会在子界面关闭时触发此事件：
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年3月21日
     * @param param the bare_field_name
     * @param closedCallBackEvent
     * @see kd.bos.form.plugin.AbstractFormPlugin#closedCallBack(kd.bos.form.events.ClosedCallBackEvent)
     * @version 1.0
     */
    @Override
    public void closedCallBack(ClosedCallBackEvent closedCallBackEvent) {
        super.closedCallBack(closedCallBackEvent);
        //返回数据不为空并且标识为常量KEY_LEAVE_DAYS对应的值，代表是我们所监控的子页面关闭事件
        if (closedCallBackEvent.getReturnData() != null &amp;&amp; StringUtils.equals(KEY_LEAVE_DAYS, closedCallBackEvent.getActionId())) {
            //给父页面相关属性赋值
            HashMap&lt;String, String&gt; returnData = (HashMap&lt;String, String&gt;) closedCallBackEvent.getReturnData();
            this.getModel().setValue(KEY_WORK_ARRANGE, returnData.get(KEY_WORK_ARRANGE));
            this.getModel().setValue(KEY_REMARK, returnData.get(KEY_REMARK));
            this.getModel().setValue(KEY_PKID, returnData.get(KEY_PKID));
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

import java.util.EventObject;
import java.util.HashMap;

import kd.bos.bill.AbstractBillPlugIn;
import kd.bos.bill.BillShowParameter;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.CloseCallBack;
import kd.bos.form.ShowType;
import kd.bos.form.StyleCss;
import kd.bos.form.control.Control;
import kd.bos.form.events.ClosedCallBackEvent;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    试验成功
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月21日
 * see_to_overridden
 * @version 1.0
 */
public class PopBillUpdateParentPlugin extends AbstractBillPlugIn {
	//父页面的工作交接安排标识
    private final String KEY_WORK_ARRANGE = &quot;leave_workarrangement&quot;;
    //父页面的备注信息标识
    private final String KEY_REMARK = &quot;leave_info&quot;;
    //子页面的标识
//    private final String KEY_APPEND_BILL = &quot;wlzy_forleave_reason&quot;;
    private final String KEY_APPEND_BILL = &quot;op_zdybill_test1&quot;;
    //父页面的子页面数据主键标识
    private final String KEY_PKID = &quot;son_pkid&quot;;

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * 用户与界面上的控件进行交互时，即会触发此事件。
     * 建议在此事件，侦听各个控件的插件事件。
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
        //注册工作交接安排控件的监听
        this.addClickListeners(KEY_WORK_ARRANGE);
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
        //获取被点击的控件对象
        Control source = (Control) evt.getSource();
        if (source != null) {
            if (StringUtils.equals(KEY_WORK_ARRANGE, source.getKey())) {
                //当工作交接安排控件被点击的时候，创建弹出表单页面的对象
                BillShowParameter billShowParameter = new BillShowParameter();
                //设置弹出表单页面的标识
                billShowParameter.setFormId(KEY_APPEND_BILL);
                //设置弹出表单页面数据的主键id
                billShowParameter.setPkId(this.getModel().getValue(KEY_PKID));
                //设置弹出表单页面的标题
                billShowParameter.setCaption(&quot;您正在修改工作交接安排~&quot;);
                //设置弹出表单页面的打开方式
                billShowParameter.getOpenStyle().setShowType(ShowType.Modal);
                //设置弹出表单页面的关闭回调对象，使用本插件，标识为常量KEY_WORK_ARRANGE对应的值
                billShowParameter.setCloseCallBack(new CloseCallBack(this, KEY_WORK_ARRANGE));
                StyleCss styleCss = new StyleCss();
                styleCss.setHeight(&quot;600&quot;);
                styleCss.setWidth(&quot;800&quot;);
                //设置弹出表单的样式，宽，高等
                billShowParameter.getOpenStyle().setInlineStyleCss(styleCss);
                //弹出表单和本页面绑定
                this.getView().showForm(billShowParameter);
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
        if (null != e.getReturnData() &amp;&amp; StringUtils.equals(KEY_WORK_ARRANGE, e.getActionId())) {
            //给父页面相关属性赋值
            HashMap&lt;String, String&gt; returnData = (HashMap&lt;String, String&gt;) e.getReturnData();
            this.getModel().setValue(KEY_WORK_ARRANGE, returnData.get(KEY_WORK_ARRANGE));
            this.getModel().setValue(KEY_REMARK, returnData.get(KEY_REMARK));
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>自定义单据插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

import java.util.EventObject;
import java.util.HashMap;

import kd.bos.bill.AbstractBillPlugIn;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.entity.datamodel.IDataModel;
import kd.bos.form.events.AfterDoOperationEventArgs;

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
public class PopBillAppendPlugin extends AbstractBillPlugIn {
	//子页面的申请人标识
    private final String KEY_CREATOR = &quot;person&quot;; 
    //子页面的请假天数标识
//    private final String KEY_LEAVE_DAYS = &quot;day&quot;;
    private final String KEY_LEAVE_DAYS = &quot;leavedays&quot;;
    //子页面的工作交接安排标识
    private final String KEY_WORK_ARRANGE = &quot;leave_workarrangement&quot;;
    //子页面的备注信息标识
    private final String KEY_REMARK = &quot;leave_info&quot;;
    //子页面的主键标识
    private final String KEY_PKID = &quot;son_pkid&quot;;
    //页面保存操作
    private final String KEY_SAVE_OPERATION = &quot;save&quot;;

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * 界面初始化或刷新，新建表单数据包成功，并给字段填写了默认值之后，触发此事件。
     * 插件可以在此事件，重设字段的默认值。
     * 部分字段的默认值难以通过设计器配置出来，如需要计算的值、根据系统参数选项决定的值，必须写插件实现。
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年3月21日
     * @param param the bare_field_name
     * @param e
     * @see kd.bos.entity.datamodel.events.IDataModelListener#afterCreateNewData(java.util.EventObject)
     * @version 1.0
     */
    @Override
    public void afterCreateNewData(EventObject e) {
        super.afterCreateNewData(e);
        //获取父页面的数据模型
        IDataModel parentModel = this.getView().getParentView().getModel();
        //给子页面相关属性赋值
        this.getModel().setValue(KEY_CREATOR, parentModel.getValue(KEY_CREATOR));
        this.getModel().setValue(KEY_LEAVE_DAYS, parentModel.getValue(KEY_LEAVE_DAYS));
        this.getModel().setValue(KEY_WORK_ARRANGE, parentModel.getValue(KEY_WORK_ARRANGE));
        this.getModel().setValue(KEY_REMARK, parentModel.getValue(KEY_REMARK));
    }

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * 用户点击按钮、菜单，执行完绑定的操作后，不论成功与否，均会触发此事件；
     * 插件可以在此事件，根据操作结果控制界面。
     * 特别说明：
     * 这个事件，是在表单界面层执行的，没有事务保护。
     * 不允许在此事件同步修改数据库数据，以免同步失败导致数据不一致。
     * &lt;p&gt;
     * 这里使用了监控save操作，也可以监控按钮点击事件或者工具栏按钮点击事件
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年3月21日
     * @param param the bare_field_name
     * @param e
     * @see kd.bos.form.plugin.AbstractFormPlugin#afterDoOperation(kd.bos.form.events.AfterDoOperationEventArgs)
     * @version 1.0
     */
    @Override
    public void afterDoOperation(AfterDoOperationEventArgs e) {
        super.afterDoOperation(e);
        System.out.println(e.getOperateKey());
        
        //如果执行了save操作
        if (StringUtils.equals(KEY_SAVE_OPERATION, e.getOperateKey())) {
            //并且save操作的结果是success
            if (e.getOperationResult().isSuccess()) {
                //那么就组装子页面数据返回给父页面,最后关闭子页面
                HashMap&lt;String, String&gt; map = new HashMap&lt;&gt;();
                map.put(KEY_WORK_ARRANGE, String.valueOf(this.getModel().getValue(KEY_WORK_ARRANGE)));
                map.put(KEY_REMARK, String.valueOf(this.getModel().getValue(KEY_REMARK)));
                map.put(KEY_PKID, String.valueOf(this.getModel().getDataEntity().getPkValue()));
                this.getView().returnDataToParent(map);
                this.getView().close();
            } else {
                //如果save操作失败则弹窗提示
                this.getView().showErrMessage(&quot;保存数据失败，请重试或联系管理员~&quot;, &quot;数据保存失败&quot;);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册插件" tabindex="-1"><a class="header-anchor" href="#注册插件" aria-hidden="true">#</a> 注册插件</h3><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><blockquote><p>重启服务后预览测试，如下图所示测试成功</p></blockquote><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>金蝶云苍穹弹出修改自定义单据页面案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',29);function A(K,C){const n=v("ExternalLinkIcon");return s(),a("div",null,[d(" more "),i("h1",h,[E,e(),i("a",f,[e("92-金蝶云苍穹弹出修改自定义单据页面案例.md"),t(n)])]),S])}const y=l(_,[["render",A],["__file","kingdee92.html.vue"]]);export{y as default};
