import{_ as l,X as s,Y as d,a1 as a,Z as i,$ as e,a2 as v,a0 as t,F as r}from"./framework-68dd73a2.js";const u={},c={id:"_93-金蝶云苍穹弹出查看单据页面案例-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_93-金蝶云苍穹弹出查看单据页面案例-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--93--dj9ds8b18gozcz31b9uisslg5au90k9kj1l3aivo472bp1tone.md",target:"_blank",rel:"noopener noreferrer"},o=t(`<hr><p>要多温柔才能配得上被爱与例外</p><hr><h4 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h4><ol><li>新建请假类型基础资料</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_93_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>新建请假类型基础资料</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_93_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建请假申请单单据</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_93_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>新建自定义单据单据</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_93_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h4><blockquote><p>请假申请单单据插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

import java.util.EventObject;

import kd.bos.bill.AbstractBillPlugIn;
import kd.bos.bill.BillShowParameter;
import kd.bos.bill.OperationStatus;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.ShowType;
import kd.bos.form.StyleCss;
import kd.bos.form.control.events.ItemClickEvent;

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
public class PopBillViewParentPlugin extends AbstractBillPlugIn {
	//查看工作交接的工具栏项的标识
    private final String KEY_VIEW_WORK_ARRANGE = &quot;bar_viewworkarrange&quot;;
    //子页面的标识
    private final String KEY_APPEND_BILL = &quot;op_zdybill_test1&quot;;
    //父页面的子页面数据主键标识
    private final String KEY_PKID = &quot;son_pkid&quot;;

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
        //注册查看工作交接的工具栏项的监听
        //注意工具栏项用addItemClickListeners(),其他页面控件用addClickListeners()的区别
        this.addItemClickListeners(KEY_VIEW_WORK_ARRANGE);
    }

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * 用户点击菜单项时，触发此事件；
     * 插件可以在此响应自定义菜单项的点击处理。
     *
     * 注意区别：工具栏项的点击用itemClick事件，普通控件点击事件用click事件
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
        if (StringUtils.equals(KEY_VIEW_WORK_ARRANGE, evt.getItemKey())) {
            BillShowParameter billShowParameter = new BillShowParameter();
            billShowParameter.setFormId(KEY_APPEND_BILL);
            billShowParameter.setPkId(this.getModel().getValue(KEY_PKID));
            billShowParameter.getOpenStyle().setShowType(ShowType.Modal);
            billShowParameter.setCaption(&quot;查看工作交接信息&quot;);
            //设置表单状态，这里设置为查看，所以弹出表单不能编辑
            billShowParameter.setStatus(OperationStatus.VIEW);
            
            StyleCss styleCss = new StyleCss();
            styleCss.setWidth(&quot;800&quot;);
            styleCss.setHeight(&quot;600&quot;);
            billShowParameter.getOpenStyle().setInlineStyleCss(styleCss);
            this.getView().showForm(billShowParameter);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>自定义单据插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注册插件" tabindex="-1"><a class="header-anchor" href="#注册插件" aria-hidden="true">#</a> 注册插件</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_93_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_93_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="预览测试" tabindex="-1"><a class="header-anchor" href="#预览测试" aria-hidden="true">#</a> 预览测试</h4><blockquote><p>重启服务后预览测试，如下图所示测试成功</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_93_1.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹弹出查看单据页面案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,30);function p(g,h){const n=r("ExternalLinkIcon");return s(),d("div",null,[a(" more "),i("h1",c,[m,e(),i("a",b,[e("93-金蝶云苍穹弹出查看单据页面案例.md"),v(n)])]),o])}const E=l(u,[["render",p],["__file","kingdee93.html.vue"]]);export{E as default};
