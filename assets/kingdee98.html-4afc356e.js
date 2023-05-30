import{_ as l,X as s,Y as a,a1 as d,Z as i,$ as e,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const u={},m={id:"_98-金蝶云苍穹应用层弹出新应用并默认打开新页签案例-md",tabindex:"-1"},c=i("a",{class:"header-anchor",href:"#_98-金蝶云苍穹应用层弹出新应用并默认打开新页签案例-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--98--dj9ds8b18gnux79dwhc30jptv63alzlea837hw88cfa569wrvehs0c3ovr5vz17a1y8apy8a.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<h4 id="导读" tabindex="-1"><a class="header-anchor" href="#导读" aria-hidden="true">#</a> 导读</h4><hr><blockquote><p>没有谁有义务陪你一起长大，半路上谁离开了也正常，但请你用绝对的理智和清醒去压制内心的难受和爱</p></blockquote><hr><h4 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h4><ol><li>新建请假天数初始表基础资料</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>新建请假类型 基础资料</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建请假类型2 基础资料</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>新建请假申请单单据</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>新建测试应用以及测试单据</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h4><blockquote><p>请假申请单插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>请假类型2插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>测试001单据插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

import java.util.EventObject;
import java.util.HashMap;
import java.util.List;

import kd.bos.bill.AbstractBillPlugIn;
import kd.bos.bill.BillShowParameter;
import kd.bos.entity.AppMenuInfo;
import kd.bos.entity.AppMetadataCache;
import kd.bos.form.FormShowParameter;
import kd.bos.form.IFormView;
import kd.bos.form.ShowType;
import kd.bos.form.control.Control;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    暂未作试验
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月21日
 * @version 1.0
 */
public class PopLeaveAppPlugin extends AbstractBillPlugIn {
	//请假管理应用appid
//    private static final String KEY_LEVEA_APPID = &quot;wlzy_repleave&quot;;
    private static final String KEY_LEVEA_APPID = &quot;op_hrbasedata&quot;;
    //采购管理应用按钮标识--用于弹出请假管理应用
    private static final String KEY_BUTTONAP = &quot;buttonap&quot;;
    //请假申请单标识
//    private static final String KEY_LEAVE_APPLY = &quot;wlzy_leave_qjsq&quot;;
    private static final String KEY_LEAVE_APPLY = &quot;op_leavesq&quot;;

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     *    注册监听
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
        this.addClickListeners(KEY_BUTTONAP);
    }

    /**
     * 
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     *    监听点击事件
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
        //获取点击的控件，判断如果是指定按钮则弹出应用及页面
        Control source = (Control) evt.getSource();
        if (null != source &amp;&amp; KEY_BUTTONAP.equals(source.getKey())) {
            //获取最外层的根页面（主页面）
            IFormView mainView = this.getView().getMainView();
            //获取主页面的pageId
            String mainViewPageId = mainView.getPageId();
            //拼接应用的pageId，我们需要按默认格式指定pageId，因为有些场景会直接解析pageId
            String appPageId = KEY_LEVEA_APPID + mainViewPageId;
            //获取指定appid对应的app内码（即根据t_meta_bizapp表的fnumber获取fid）
            String appId = AppMetadataCache.getAppInfo(KEY_LEVEA_APPID).getAppId();
            HashMap&lt;String, Object&gt; hashMap;
            //判断当前应用是否已经被打开
            if (null != mainView.getViewNoPlugin(appPageId)) {
                //已经被打开则激活应用
                hashMap = new HashMap&lt;&gt;();
                hashMap.put(&quot;view&quot;, this.getView());
                hashMap.put(&quot;appname&quot;, &quot;请假管理应用&quot;);
                hashMap.put(&quot;formnumber&quot;, &quot;wlzp_repleave_apphome&quot;);
                hashMap.put(&quot;parametertype&quot;, &quot;FormShowParameter&quot;);
                PopAppUtils.activatePage(appPageId, this.getView(), hashMap);
            } else {
                //没有打开则代打开应用
                //创建弹出的应用对象并设置相关属性
                FormShowParameter showParameter = new FormShowParameter();
                //打开的表单页面标识，这里为应用首页
//                showParameter.setFormId(&quot;wlzy_repleave_apphome&quot;);
                showParameter.setFormId(&quot;op_hrbasedata_apphome&quot;);
                //打开的表单标题
                showParameter.setCaption(&quot;请假管理应用&quot;);
                //打开的应用appId
                showParameter.setAppId(KEY_LEVEA_APPID);
                //设置customParam中的appid属性值（必须设置该属性才能出现菜单栏）
                showParameter.setCustomParam(&quot;appid&quot;, appId);
                //打开风格，这里为新增页签的写法
                showParameter.getOpenStyle().setShowType(ShowType.NewTabPage);
                //设置页签容器的key，这里为首页--应用页签容器的标识
                showParameter.getOpenStyle().setTargetKey(&quot;tabap&quot;);
                //设置pageId（默认写法为appid+mainViewPageId）
                showParameter.setPageId(appPageId);
                //获取根页面的页面模型数据
                mainView.showForm(showParameter);
                this.getView().sendFormAction(mainView);
            }
            //根据appid获取下属所有menu信息
            List&lt;AppMenuInfo&gt; appMenuInfos = AppMetadataCache.getAppMenusInfoByAppId(KEY_LEVEA_APPID);
            //遍历所有menu信息获取到formId为9z8e_gjt_hr_qjsqd并且是单据的menuId
            String menuId = appMenuInfos
                    .stream()
                    .filter(appMenuInfo -&gt; KEY_LEAVE_APPLY.equals(appMenuInfo.getFormId()) &amp;&amp; &quot;BillShowParameter&quot;.equals(appMenuInfo.getParamType()))
                    .findFirst()
                    .get()
                    .getId();
            //拼接单据的pageId，格式为menuId+主页面的pageId
            String billPageId = menuId + mainViewPageId;
            //判断当前单据有没有被打开
            if (null != mainView.getViewNoPlugin(billPageId)) {
                //如果已经被打开则激活该页面
                hashMap = new HashMap&lt;&gt;();
                hashMap.put(&quot;view&quot;, this.getView());
                hashMap.put(&quot;appname&quot;, &quot;请假申请单&quot;);
                hashMap.put(&quot;formnumber&quot;, KEY_LEAVE_APPLY);
                hashMap.put(&quot;parametertype&quot;, &quot;BillShowParameter&quot;);
                PopAppUtils.activatePage(billPageId, this.getView(), hashMap);
            } else {
                //如果没有打开则弹出该页面
                //创建弹出的单据对象并设置相关属性
                BillShowParameter billShowParameter = new BillShowParameter();
                //打开的单据页面标识
                billShowParameter.setFormId(KEY_LEAVE_APPLY);
                //打开的单据标题
                billShowParameter.setCaption(&quot;请假申请单&quot;);
                //打开的应用appId
                billShowParameter.setAppId(KEY_LEVEA_APPID);
                //设置customParam中的appid属性值（必须设置该属性才能出现菜单栏）
                billShowParameter.setCustomParam(&quot;appid&quot;, appId);
                //打开风格，这里为新增页签的写法
                billShowParameter.getOpenStyle().setShowType(ShowType.NewTabPage);
                //设置页签容器的key，这里为应用中的页签容器的标识
                billShowParameter.getOpenStyle().setTargetKey(&quot;_submaintab_&quot;);
                //设置单据的appid
                billShowParameter.setPageId(billPageId);
                //获取弹出应用首页的页面模型
                IFormView qjglView = this.getView().getView(appPageId);
                qjglView.showForm(billShowParameter);
                this.getView().sendFormAction(qjglView);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>工具类</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import kd.bos.context.RequestContext;
import kd.bos.form.IFormView;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    工具类PopLeaveAppPlugin会调用
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月21日
 * @version 1.0
 */
public class PopAppUtils {
	public static void activatePage(String pageID, IFormView view, Map&lt;String, Object&gt; map) {
        String menuId = pageID.split(&quot;root&quot;)[0];
        IFormView childView = view.getViewNoPlugin(pageID);
        if (&quot;bos&quot;.equals(childView.getFormShowParameter().getServiceAppId())) {
            childView = view.getView(pageID);
        }

        if (childView != null) {
            if (!view.getPageId().equalsIgnoreCase(childView.getPageId())) {
                Map&lt;String, Object&gt; customparameters = (HashMap) map.get(&quot;customparameters&quot;);
                childView.getFormShowParameter().getCustomParams().remove(&quot;messageId&quot;);
                childView.getFormShowParameter().getCustomParams().remove(&quot;tabType&quot;);
                childView.getFormShowParameter().getCustomParams().remove(&quot;openPage&quot;);
                if (customparameters != null) {
                    if (customparameters.get(&quot;messageId&quot;) != null) {
                        childView.getFormShowParameter().setCustomParam(&quot;messageId&quot;, customparameters.get(&quot;messageId&quot;));
                    }

                    if (customparameters.get(&quot;tabType&quot;) != null) {
                        childView.getFormShowParameter().setCustomParam(&quot;tabType&quot;, customparameters.get(&quot;tabType&quot;));
                    }

                    if (customparameters.get(&quot;openPage&quot;) != null) {
                        childView.getFormShowParameter().setCustomParam(&quot;openPage&quot;, customparameters.get(&quot;openPage&quot;));
                    }
                }

                childView.getFormShowParameter().setHasRight(true);
                childView.activate();
                if (&quot;bos&quot;.equals(childView.getFormShowParameter().getServiceAppId())) {
                    childView.updateView();
                }

                view.sendFormAction(childView);
                String userId = RequestContext.get().getUserId();
                String time = (new SimpleDateFormat(&quot;yyy-MM-dd hh:mm:ss&quot;)).format(new Date(System.currentTimeMillis()));
            }
        } else {
            view.showTipNotification(&quot;系统已超时，请重新刷新登录!&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注册插件" tabindex="-1"><a class="header-anchor" href="#注册插件" aria-hidden="true">#</a> 注册插件</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="配置应用" tabindex="-1"><a class="header-anchor" href="#配置应用" aria-hidden="true">#</a> 配置应用</h4><ol><li>启动新建的应用</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>配置应用菜单</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>管理员账号登录 administrator/1234567 授权</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>应用页面添加云和应用</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><blockquote><p>如下列动图所示，我点， 我再点，我点点点，测试成功。。</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_98_1.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹应用层弹出新应用并默认打开新页签案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,47);function p(g,h){const n=v("ExternalLinkIcon");return s(),a("div",null,[d(" more "),i("h1",m,[c,e(),i("a",o,[e("98-金蝶云苍穹应用层弹出新应用并默认打开新页签案例.md"),t(n)])]),b])}const w=l(u,[["render",p],["__file","kingdee98.html.vue"]]);export{w as default};
