import{_ as e,X as n,Y as a,a1 as i,a0 as t}from"./framework-68dd73a2.js";const s="/blog/assets/Kingdee_126_1.png",v="/blog/assets/Kingdee_126_2.png",l="/blog/assets/Kingdee_126_3.png",d="/blog/assets/Kingdee_126_4.png",r={},c=t('<h1 id="_126-eas引入引出模板配置完成后点击引出模板之后报错如何解决-md" tabindex="-1"><a class="header-anchor" href="#_126-eas引入引出模板配置完成后点击引出模板之后报错如何解决-md" aria-hidden="true">#</a> 126-EAS引入引出模板配置完成后点击引出模板之后报错如何解决？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="出现场景" tabindex="-1"><a class="header-anchor" href="#出现场景" aria-hidden="true">#</a> 出现场景</h3><figure><img src="'+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>错误信息：null
错误详细堆栈信息：java.lang.ExceptionInInitializerError: null

        at: com.kingdee.eas.tools.datatask.client.FileSelector.show(FileSelector.java:160)

        at: com.kingdee.eas.tools.datatask.client.AbstractTemplateExport.getFilePath(AbstractTemplateExport.java:23)

        at: com.kingdee.eas.tools.datatask.client.TemplateExport.export(TemplateExport.java:167)

        at: com.kingdee.eas.tools.datatask.client.DIETemplateListUI.actionExportTemplate_actionPerformed(DIETemplateListUI.java:136)

        at: sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)

        at: sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)

        at: sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)

        at: java.lang.reflect.Method.invoke(Method.java:597)

        at: com.kingdee.bos.ui.face.ItemAction.reflectPerformAction(ItemAction.java:439)

        at: com.kingdee.bos.ui.face.ItemAction.innerActionPerformed(ItemAction.java:397)

        at: com.kingdee.eas.tools.datatask.client.AbstractDIETemplateListUI$ActionExportTemplate.actionPerformed(AbstractDIETemplateListUI.java:764)

        at: com.kingdee.bos.appframework.client.servicebinding.ActionProxy.actionPerformedInvoke(ActionProxy.java:188)

        at: com.kingdee.bos.appframework.client.servicebinding.ActionProxy.actionPerformed(ActionProxy.java:112)

        at: javax.swing.AbstractButton.fireActionPerformed(AbstractButton.java:1995)

        at: com.kingdee.bos.ctrl.swing.KDWorkButton.fireActionPerformed(KDWorkButton.java:567)

        at: javax.swing.AbstractButton$Handler.actionPerformed(AbstractButton.java:2318)

        at: javax.swing.DefaultButtonModel.fireActionPerformed(DefaultButtonModel.java:387)

        at: javax.swing.DefaultButtonModel.setPressed(DefaultButtonModel.java:242)

        at: javax.swing.plaf.basic.BasicButtonListener.mouseReleased(BasicButtonListener.java:236)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.Component.processMouseEvent(Component.java:6267)

        at: javax.swing.JComponent.processMouseEvent(JComponent.java:3267)

        at: com.kingdee.bos.ctrl.swing.KDWorkButton.processMouseEvent(KDWorkButton.java:898)

        at: java.awt.Component.processEvent(Component.java:6032)

        at: java.awt.Container.processEvent(Container.java:2041)

        at: java.awt.Component.dispatchEventImpl(Component.java:4630)

        at: java.awt.Container.dispatchEventImpl(Container.java:2099)

        at: java.awt.Component.dispatchEvent(Component.java:4460)

        at: java.awt.LightweightDispatcher.retargetMouseEvent(Container.java:4577)

        at: java.awt.LightweightDispatcher.processMouseEvent(Container.java:4238)

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

java.lang.NullPointerException: null

        at: com.kingdee.eas.tools.datatask.util.GlobalFunction.&lt;clinit&gt;(GlobalFunction.java:57)

        at: com.kingdee.eas.tools.datatask.client.FileSelector.show(FileSelector.java:160)

        at: com.kingdee.eas.tools.datatask.client.AbstractTemplateExport.getFilePath(AbstractTemplateExport.java:23)

        at: com.kingdee.eas.tools.datatask.client.TemplateExport.export(TemplateExport.java:167)

        at: com.kingdee.eas.tools.datatask.client.DIETemplateListUI.actionExportTemplate_actionPerformed(DIETemplateListUI.java:136)

        at: sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)

        at: sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)

        at: sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)

        at: java.lang.reflect.Method.invoke(Method.java:597)

        at: com.kingdee.bos.ui.face.ItemAction.reflectPerformAction(ItemAction.java:439)

        at: com.kingdee.bos.ui.face.ItemAction.innerActionPerformed(ItemAction.java:397)

        at: com.kingdee.eas.tools.datatask.client.AbstractDIETemplateListUI$ActionExportTemplate.actionPerformed(AbstractDIETemplateListUI.java:764)

        at: com.kingdee.bos.appframework.client.servicebinding.ActionProxy.actionPerformedInvoke(ActionProxy.java:188)

        at: com.kingdee.bos.appframework.client.servicebinding.ActionProxy.actionPerformed(ActionProxy.java:112)

        at: javax.swing.AbstractButton.fireActionPerformed(AbstractButton.java:1995)

        at: com.kingdee.bos.ctrl.swing.KDWorkButton.fireActionPerformed(KDWorkButton.java:567)

        at: javax.swing.AbstractButton$Handler.actionPerformed(AbstractButton.java:2318)

        at: javax.swing.DefaultButtonModel.fireActionPerformed(DefaultButtonModel.java:387)

        at: javax.swing.DefaultButtonModel.setPressed(DefaultButtonModel.java:242)

        at: javax.swing.plaf.basic.BasicButtonListener.mouseReleased(BasicButtonListener.java:236)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.Component.processMouseEvent(Component.java:6267)

        at: javax.swing.JComponent.processMouseEvent(JComponent.java:3267)

        at: com.kingdee.bos.ctrl.swing.KDWorkButton.processMouseEvent(KDWorkButton.java:898)

        at: java.awt.Component.processEvent(Component.java:6032)

        at: java.awt.Container.processEvent(Container.java:2041)

        at: java.awt.Component.dispatchEventImpl(Component.java:4630)

        at: java.awt.Container.dispatchEventImpl(Container.java:2099)

        at: java.awt.Component.dispatchEvent(Component.java:4460)

        at: java.awt.LightweightDispatcher.retargetMouseEvent(Container.java:4577)

        at: java.awt.LightweightDispatcher.processMouseEvent(Container.java:4238)

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>或者报错如下</p></blockquote><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>错误信息：Could not initialize class com.kingdee.eas.tools.datatask.util.GlobalFunction
错误详细堆栈信息：java.lang.NoClassDefFoundError: Could not initialize class com.kingdee.eas.tools.datatask.util.GlobalFunction

        at: com.kingdee.eas.tools.datatask.client.FileSelector.show(FileSelector.java:160)

        at: com.kingdee.eas.tools.datatask.client.AbstractTemplateExport.getFilePath(AbstractTemplateExport.java:23)

        at: com.kingdee.eas.tools.datatask.client.TemplateExport.export(TemplateExport.java:167)

        at: com.kingdee.eas.tools.datatask.client.DIETemplateListUI.actionExportTemplate_actionPerformed(DIETemplateListUI.java:136)

        at: sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)

        at: sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)

        at: sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)

        at: java.lang.reflect.Method.invoke(Method.java:597)

        at: com.kingdee.bos.ui.face.ItemAction.reflectPerformAction(ItemAction.java:439)

        at: com.kingdee.bos.ui.face.ItemAction.innerActionPerformed(ItemAction.java:397)

        at: com.kingdee.eas.tools.datatask.client.AbstractDIETemplateListUI$ActionExportTemplate.actionPerformed(AbstractDIETemplateListUI.java:764)

        at: com.kingdee.bos.appframework.client.servicebinding.ActionProxy.actionPerformedInvoke(ActionProxy.java:188)

        at: com.kingdee.bos.appframework.client.servicebinding.ActionProxy.actionPerformed(ActionProxy.java:112)

        at: javax.swing.AbstractButton.fireActionPerformed(AbstractButton.java:1995)

        at: com.kingdee.bos.ctrl.swing.KDWorkButton.fireActionPerformed(KDWorkButton.java:567)

        at: javax.swing.AbstractButton$Handler.actionPerformed(AbstractButton.java:2318)

        at: javax.swing.DefaultButtonModel.fireActionPerformed(DefaultButtonModel.java:387)

        at: javax.swing.DefaultButtonModel.setPressed(DefaultButtonModel.java:242)

        at: javax.swing.plaf.basic.BasicButtonListener.mouseReleased(BasicButtonListener.java:236)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.AWTEventMulticaster.mouseReleased(AWTEventMulticaster.java:272)

        at: java.awt.Component.processMouseEvent(Component.java:6267)

        at: javax.swing.JComponent.processMouseEvent(JComponent.java:3267)

        at: com.kingdee.bos.ctrl.swing.KDWorkButton.processMouseEvent(KDWorkButton.java:898)

        at: java.awt.Component.processEvent(Component.java:6032)

        at: java.awt.Container.processEvent(Container.java:2041)

        at: java.awt.Component.dispatchEventImpl(Component.java:4630)

        at: java.awt.Container.dispatchEventImpl(Container.java:2099)

        at: java.awt.Component.dispatchEvent(Component.java:4460)

        at: java.awt.LightweightDispatcher.retargetMouseEvent(Container.java:4577)

        at: java.awt.LightweightDispatcher.processMouseEvent(Container.java:4238)

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><blockquote><p>在其对应路径建立对应的包以及对应的类，并做如下更改</p></blockquote><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>EAS引入引出模板配置完成后点击引出模板之后报错如何解决？</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',16);function o(m,u){return n(),a("div",null,[i(" more "),c])}const p=e(r,[["render",o],["__file","kingdee126.html.vue"]]);export{p as default};
