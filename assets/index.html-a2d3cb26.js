import{_ as e,X as i,Y as n,a1 as a,a0 as l}from"./framework-68dd73a2.js";const s="/blog/assets/Kingdee_104_1.png",r={},d=l('<h1 id="_104-eas客户端打开list界面时报错getmainbizorgtype-should-return-a-correct-value-如何解决-md" tabindex="-1"><a class="header-anchor" href="#_104-eas客户端打开list界面时报错getmainbizorgtype-should-return-a-correct-value-如何解决-md" aria-hidden="true">#</a> 104-EAS客户端打开List界面时报错getMainBizOrgType() should return a correct value 如何解决？.md</h1><h4 id="导读" tabindex="-1"><a class="header-anchor" href="#导读" aria-hidden="true">#</a> 导读</h4><hr><blockquote><p>有种男人思想上流氓，生活中好男人，兄弟面前不要脸，熟人面前神经病，看似百毒不侵，却被一个女的要了半条命！</p></blockquote><hr><h4 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h4><blockquote><p>如下图所示配置了客户端菜单后点击list界面想要进入查看，报如下所示错误</p></blockquote><figure><img src="'+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>详细报错如下</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>错误信息：getMainBizOrgType() should return a correct value.
错误详细堆栈信息：java.lang.IllegalArgumentException: getMainBizOrgType() should return a correct value.

        at: com.kingdee.eas.st.common.client.STBillBaseListUI.getHasPermissionOrgFilterForQuery(STBillBaseListUI.java:1922)

        at: com.kingdee.eas.st.common.client.STBillBaseListUI.getDefaultFilterForQuery(STBillBaseListUI.java:1844)

        at: com.kingdee.eas.custom.projectmanager.bill.projectreport.client.AbstractProjectreportbillListUI.getDefaultFilterForQuery(AbstractProjectreportbillListUI.java:374)

        at: com.kingdee.eas.framework.client.ListUI.getEntityViewInfo(ListUI.java:6201)

        at: com.kingdee.eas.framework.client.ListUI.initMainQuery(ListUI.java:8055)

        at: com.kingdee.eas.framework.client.ListUI.onLoad(ListUI.java:2046)

        at: com.kingdee.eas.framework.client.CoreBillListUI.onLoad(CoreBillListUI.java:557)

        at: com.kingdee.eas.st.common.client.STBillBaseListUI.onLoad(STBillBaseListUI.java:177)

        at: com.kingdee.eas.base.uiframe.client.UIFactoryHelper.initUIObject(UIFactoryHelper.java:296)

        at: com.kingdee.eas.base.uiframe.client.UINewTabFactory.create(UINewTabFactory.java:110)

        at: com.kingdee.eas.base.uiframe.client.UIShowHelper.innerCreateUI(UIShowHelper.java:119)

        at: com.kingdee.eas.base.uiframe.client.UIShowHelper.passCreateUI(UIShowHelper.java:91)

        at: com.kingdee.eas.base.uiframe.client.UIShowHelper.createUI(UIShowHelper.java:71)

        at: com.kingdee.eas.base.uiframe.client.UIShowHelper.showUI(UIShowHelper.java:46)

        at: com.kingdee.eas.base.uiframe.client.UIShowHelper.showUI(UIShowHelper.java:24)

        at: com.kingdee.eas.base.uiframe.client.LeafMenuCellPane.performDblclick(LeafMenuCellPane.java:220)

        at: com.kingdee.eas.base.uiframe.client.LeafMenuCellPane.access$500(LeafMenuCellPane.java:37)

        at: com.kingdee.eas.base.uiframe.client.LeafMenuCellPane$TopLabelMouseAdapter.mouseClicked(LeafMenuCellPane.java:89)

        at: java.awt.Component.processMouseEvent(Component.java:6270)

        at: javax.swing.JComponent.processMouseEvent(JComponent.java:3267)

        at: java.awt.Component.processEvent(Component.java:6032)

        at: java.awt.Container.processEvent(Container.java:2041)

        at: java.awt.Component.dispatchEventImpl(Component.java:4630)

        at: java.awt.Container.dispatchEventImpl(Container.java:2099)

        at: java.awt.Component.dispatchEvent(Component.java:4460)

        at: java.awt.LightweightDispatcher.retargetMouseEvent(Container.java:4577)

        at: java.awt.LightweightDispatcher.processMouseEvent(Container.java:4247)

        at: java.awt.LightweightDispatcher.dispatchEvent(Container.java:4168)

        at: java.awt.Container.dispatchEventImpl(Container.java:2085)

        at: java.awt.Window.dispatchEventImpl(Window.java:2478)

        at: java.awt.Component.dispatchEvent(Component.java:4460)

        at: java.awt.EventQueue.dispatchEvent(EventQueue.java:599)

        at: com.kingdee.bos.invokecounter.RPCLogEventQueue.dispatchEvent(RPCLogEventQueue.java:176)

        at: sun.reflect.GeneratedMethodAccessor17.invoke(Unknown Source)

        at: sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)

        at: java.lang.reflect.Method.invoke(Method.java:597)

        at: com.kingdee.eas.client.recorder.UserInputEventQueue.myDispatchEvent(UserInputEventQueue.java:126)

        at: com.kingdee.eas.client.recorder.UserInputEventQueue.dispatchEvent(UserInputEventQueue.java:59)

        at: java.awt.EventDispatchThread.pumpOneEventForFilters(EventDispatchThread.java:269)

        at: java.awt.EventDispatchThread.pumpEventsForFilter(EventDispatchThread.java:184)

        at: java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:174)

        at: java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:169)

        at: java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:161)

        at: java.awt.EventDispatchThread.run(EventDispatchThread.java:122)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h4><blockquote><p>在自己所建单据的List与edit类里进行编码</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.kingdee.eas.custom.projectmanager.bill.projectreport.client;

import org.apache.log4j.Logger;

import com.kingdee.bos.ui.face.CoreUIObject;
import com.kingdee.eas.basedata.org.OrgType;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020-3-27
 * see_to_overridden
 * @version 1.0
 */
public class ProjectreportbillListUI extends AbstractProjectreportbillListUI
{

   /**
    * &lt;p&gt;Title: &lt;/p&gt;
    * &lt;p&gt;
    *    Description:
    * &lt;/p&gt;
    * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
    * @author xx
    * @date 2020-3-30
    * @param param the bare_field_name
    * @return
    * @see com.kingdee.eas.custom.projectmanager.bill.projectreport.client.AbstractProjectreportbillListUI#getMainBizOrgType()
    * @version 1.0
    */
    @Override
    protected OrgType getMainBizOrgType() {
    	return OrgType.Company;//财务组织
    }
    /**
     * 
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020-3-30
     * @param param the bare_field_name
     * @param orgType
     * @return
     * @see com.kingdee.eas.st.common.client.STBillBaseListUI#getPropertyOfBizOrg(com.kingdee.eas.basedata.org.OrgType)
     * @version 1.0
     */
    @Override
    protected String getPropertyOfBizOrg(OrgType orgType) {
    	return &quot;FICompany.id&quot;;//财务组织Id
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.kingdee.eas.custom.projectmanager.bill.projectreport.client;

import org.apache.log4j.Logger;

import com.kingdee.bos.ctrl.extendcontrols.KDBizPromptBox;
import com.kingdee.bos.ctrl.kdf.servertable.KDTable;
import com.kingdee.bos.dao.IObjectValue;
import com.kingdee.bos.ui.face.CoreUIObject;
import com.kingdee.eas.basedata.org.OrgType;
import com.kingdee.eas.custom.projectmanager.bill.projectreport.ProjectreportbillEntryInfo;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020-3-27
 * see_to_overridden
 * @version 1.0
 */
public class ProjectreportbillEditUI extends AbstractProjectreportbillEditUI
{
    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     *	使单头中新增分录按钮起作用
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020-3-30
     * @param param the bare_field_name
     * @param table
     * @return
     * @see com.kingdee.eas.st.common.client.STBillBaseEditUI#createNewDetailData(com.kingdee.bos.ctrl.kdf.table.KDTable)
     * @version 1.0
     */
    protected IObjectValue createNewDetailData(KDTable table) {
    	return new ProjectreportbillEntryInfo();
    }

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020-3-30
     * @param param the bare_field_name
     * @return
     * @see com.kingdee.eas.st.common.client.STBillBaseEditUI#getMainOrgUnit()
     * @version 1.0
     */
    public KDBizPromptBox getMainOrgUnit() {
    	return prmtFICompany;//财务组织字段
    }

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020-3-30
     * @param param the bare_field_name
     * @return
     * @see com.kingdee.eas.custom.projectmanager.bill.projectreport.client.AbstractProjectreportbillEditUI#getMainBizOrgType()
     * @version 1.0
     */
    protected OrgType getMainBizOrgType() {
    	return OrgType.Company;//财务组织
    }
    
    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     *    忽略组织过滤
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020-3-30
     * @param param the bare_field_name
     * @param f7
     * @param orgType
     * @throws Exception
     * @see com.kingdee.eas.custom.projectmanager.bill.projectreport.client.AbstractProjectreportbillEditUI#setOrgF7(com.kingdee.bos.ctrl.extendcontrols.KDBizPromptBox, com.kingdee.eas.basedata.org.OrgType)
     * @version 1.0
     */
    protected void setOrgF7(KDBizPromptBox f7, OrgType orgType)throws Exception {
		com.kingdee.eas.basedata.org.client.f7.NewOrgUnitFilterInfoProducer oufip = new com.kingdee.eas.basedata.org.client.f7.NewOrgUnitFilterInfoProducer(orgType);
		f7.setFilterInfoProducer(oufip);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>重启客户端及服务端后即可解决,其原因为需要为自己所选的组织赋值</p></blockquote><p><strong>以上就是我关于 <em>EAS客户端打开List界面时报错getMainBizOrgType() should return a correct value 如何解决？</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,20);function t(v,c){return i(),n("div",null,[a(" more "),d])}const o=e(r,[["render",t],["__file","index.html.vue"]]);export{o as default};
