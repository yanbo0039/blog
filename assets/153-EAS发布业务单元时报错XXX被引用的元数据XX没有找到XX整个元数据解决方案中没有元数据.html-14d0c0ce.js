import{_ as n,X as r,Y as t,a1 as s,Z as e,$ as a,a2 as l,a0 as o,F as c}from"./framework-68dd73a2.js";const d="/blog/assets/Kingdee_153_1.png",v={},u={id:"_153-eas发布业务单元时报错-com-kingdee-bos-engine-mdnotfoundexception-被引用的元数据-pk-type-bize-没有找到-detailmessage-is-整个元数据解决方案中没有元数据-md",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_153-eas发布业务单元时报错-com-kingdee-bos-engine-mdnotfoundexception-被引用的元数据-pk-type-bize-没有找到-detailmessage-is-整个元数据解决方案中没有元数据-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--ciqg38uba27c746fda122bea6a11e79jp4ei1t4q7h.md",target:"_blank",rel:"noopener noreferrer"},m=o('<h4 id="出现场景" tabindex="-1"><a class="header-anchor" href="#出现场景" aria-hidden="true">#</a> 出现场景</h4><blockquote><p>如下图所示，笔者在发布业务单元之后出现了如下错误</p></blockquote><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>在检验对象看到的全路径是我的一个后台事务文件报错</p></blockquote><ul><li>详细报错如下:</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>com.kingdee.bos.engine.MDNotFoundException: 被引用的元数据[pk=, type=bize]没有找到。
detailMessage is : 整个元数据解决方案中没有元数据[.exception]对应的资源
	at com.kingdee.bos.engine.impl.MDParser2.getDocumentRef(MDParser2.java:345)
	at com.kingdee.bos.engine.impl.MDParser2.processCollection(MDParser2.java:281)
	at com.kingdee.bos.engine.impl.MDParser2.parse0(MDParser2.java:178)
	at com.kingdee.bos.engine.impl.MDParser2.processCollection(MDParser2.java:271)
	at com.kingdee.bos.engine.impl.MDParser2.parse0(MDParser2.java:178)
	at com.kingdee.bos.engine.impl.MDParser2.parseMDFromDOM(MDParser2.java:82)
	at com.kingdee.bos.engine.impl.Loader2.loadMetadata(Loader2.java:733)
	at com.kingdee.bos.md.dao.MDORMUtil.load(MDORMUtil.java:61)
	at com.kingdee.bos.md.multipageeditor.BaseMDSourceEditor.init(BaseMDSourceEditor.java:209)
	at org.eclipse.ui.internal.EditorManager.createSite(EditorManager.java:799)
	at org.eclipse.ui.internal.EditorReference.createPartHelper(EditorReference.java:643)
	at org.eclipse.ui.internal.EditorReference.createPart(EditorReference.java:428)
	at org.eclipse.ui.internal.WorkbenchPartReference.getPart(WorkbenchPartReference.java:594)
	at org.eclipse.ui.internal.EditorReference.getEditor(EditorReference.java:266)
	at org.eclipse.ui.internal.WorkbenchPage.busyOpenEditorBatched(WorkbenchPage.java:2820)
	at org.eclipse.ui.internal.WorkbenchPage.busyOpenEditor(WorkbenchPage.java:2729)
	at org.eclipse.ui.internal.WorkbenchPage.access$11(WorkbenchPage.java:2721)
	at org.eclipse.ui.internal.WorkbenchPage$10.run(WorkbenchPage.java:2673)
	at org.eclipse.swt.custom.BusyIndicator.showWhile(BusyIndicator.java:70)
	at org.eclipse.ui.internal.WorkbenchPage.openEditor(WorkbenchPage.java:2668)
	at org.eclipse.ui.internal.WorkbenchPage.openEditor(WorkbenchPage.java:2652)
	at org.eclipse.ui.internal.WorkbenchPage.openEditor(WorkbenchPage.java:2635)
	at org.eclipse.ui.ide.IDE.openEditor(IDE.java:434)
	at com.kingdee.bos.tool.utils.EditorHelper.openEditor(EditorHelper.java:307)
	at com.kingdee.bos.tool.utils.EditorHelper$1.run(EditorHelper.java:292)
	at org.eclipse.swt.widgets.RunnableLock.run(RunnableLock.java:35)
	at org.eclipse.swt.widgets.Synchronizer.runAsyncMessages(Synchronizer.java:133)
	at org.eclipse.swt.widgets.Display.runAsyncMessages(Display.java:3800)
	at org.eclipse.swt.widgets.Display.readAndDispatch(Display.java:3425)
	at org.eclipse.ui.internal.Workbench.runEventLoop(Workbench.java:2382)
	at org.eclipse.ui.internal.Workbench.runUI(Workbench.java:2346)
	at org.eclipse.ui.internal.Workbench.access$4(Workbench.java:2198)
	at org.eclipse.ui.internal.Workbench$5.run(Workbench.java:493)
	at org.eclipse.core.databinding.observable.Realm.runWithDefault(Realm.java:288)
	at org.eclipse.ui.internal.Workbench.createAndRunWorkbench(Workbench.java:488)
	at org.eclipse.ui.PlatformUI.createAndRunWorkbench(PlatformUI.java:149)
	at org.eclipse.ui.internal.ide.application.IDEApplication.start(IDEApplication.java:113)
	at org.eclipse.equinox.internal.app.EclipseAppHandle.run(EclipseAppHandle.java:193)
	at org.eclipse.core.runtime.internal.adaptor.EclipseAppLauncher.runApplication(EclipseAppLauncher.java:110)
	at org.eclipse.core.runtime.internal.adaptor.EclipseAppLauncher.start(EclipseAppLauncher.java:79)
	at org.eclipse.core.runtime.adaptor.EclipseStarter.run(EclipseStarter.java:382)
	at org.eclipse.core.runtime.adaptor.EclipseStarter.run(EclipseStarter.java:179)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)
	at java.lang.reflect.Method.invoke(Method.java:597)
	at org.eclipse.equinox.launcher.Main.invokeFramework(Main.java:549)
	at org.eclipse.equinox.launcher.Main.basicRun(Main.java:504)
	at org.eclipse.equinox.launcher.Main.run(Main.java:1236)
	at org.eclipse.equinox.launcher.Main.main(Main.java:1212)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解决步骤" tabindex="-1"><a class="header-anchor" href="#解决步骤" aria-hidden="true">#</a> 解决步骤</h4><blockquote><p>笔者重新发布了一次元数据就成功解决了此问题，就是这么神奇,由于我蝶上古时代设计的此产品检验信息居然没有日志的，笔者连想再次找此报错的信息来研究一下都木有机会的。。。。就是这么神奇。。。额。。。。系甘。。。。。，若小伙伴有遇到类似的问题，并且找到了原因，欢迎留言与我分享。。。。</p></blockquote><p><strong>以上就是我关于 <em>EAS发布业务单元时报错-com kingdee bos engine MDNotFoundException 被引用的元数据[pk= type=bize]没有找到 detailMessage is 整个元数据解决方案中没有元数据</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><blockquote><p>每个优秀的人，都有一段沉默的时光。那段时光，是付出了很多努力，却得不到结果的日子，我们把它叫作扎根。</p></blockquote><hr>`,16);function g(h,k){const i=c("ExternalLinkIcon");return r(),t("div",null,[s(" more "),e("h1",u,[p,a(" 153-EAS发布业务单元时报错-com kingdee bos engine MDNotFoundException 被引用的元数据[pk= type=bize]没有找到 detailMessage is "),e("a",b,[a("整个元数据解决方案中没有元数据.md"),l(i)])]),m])}const j=n(v,[["render",g],["__file","153-EAS发布业务单元时报错XXX被引用的元数据XX没有找到XX整个元数据解决方案中没有元数据.html.vue"]]);export{j as default};
