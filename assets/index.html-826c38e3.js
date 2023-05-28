import{_ as e,X as a,Y as n,a1 as i,a0 as s}from"./framework-68dd73a2.js";const v="/blog/assets/Kingdee_124_1.png",l="/blog/assets/Kingdee_124_2.png",d="/blog/assets/Kingdee_124_3.png",t="/blog/assets/Kingdee_124_4.png",r={},c=s('<h1 id="_124-eas如何解决通过路径进入单据报错误信息-errorcode-500-com-kingdee-bos-rpc-rpcexception-java-lang-nullpointerexception的bug-md" tabindex="-1"><a class="header-anchor" href="#_124-eas如何解决通过路径进入单据报错误信息-errorcode-500-com-kingdee-bos-rpc-rpcexception-java-lang-nullpointerexception的bug-md" aria-hidden="true">#</a> 124-EAS如何解决通过路径进入单据报错误信息：(errorCode 500) com kingdee bos rpc RPCException ：java lang NullPointerException的bug？.md</h1><h4 id="出现场景" tabindex="-1"><a class="header-anchor" href="#出现场景" aria-hidden="true">#</a> 出现场景</h4><blockquote><p>如下图所示点击单据时出现如下报错弹出框</p></blockquote><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>报错信息如下</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>错误信息：(errorCode:500) com.kingdee.bos.rpc.RPCException: java.lang.NullPointerException
错误详细堆栈信息：java.lang.RuntimeException: (errorCode:500) com.kingdee.bos.rpc.RPCException: java.lang.NullPointerException

        at: com.kingdee.eas.framework.client.ListUI.fillFirstData(ListUI.java:3074)

        at: com.kingdee.eas.framework.client.ListUI.getDataFirsetTime(ListUI.java:2936)

        at: com.kingdee.eas.framework.client.ListUI.tblMain_doRequestRowSetForHasQueryPK(ListUI.java:2815)

        at: com.kingdee.eas.framework.client.ListUI.tblMain_doRequestRowSet(ListUI.java:2702)

        at: com.kingdee.eas.framework.client.CoreBillListUI.tblMain_doRequestRowSet(CoreBillListUI.java:337)

        at: com.kingdee.eas.framework.client.AbstractListUI$2.doRequestRowSet(AbstractListUI.java:332)

        at: com.kingdee.bos.ctrl.kdf.data.impl.DataSetWrapperFactory.fireRequestRowSet(DataSetWrapperFactory.java:257)

        at: com.kingdee.bos.ctrl.kdf.data.impl.DataSetWrapperFactory.requestData(DataSetWrapperFactory.java:233)

        at: com.kingdee.bos.ctrl.kdf.table.KDTDataRequestManager.requestData(KDTDataRequestManager.java:555)

        at: com.kingdee.bos.ctrl.kdf.table.KDTDataRequestManager.doDataRequestPage(KDTDataRequestManager.java:484)

        at: com.kingdee.bos.ctrl.kdf.table.KDTDataRequestManager.doDataRequest2(KDTDataRequestManager.java:391)

        at: com.kingdee.bos.ctrl.kdf.table.KDTDataRequestManager.doDataRequest(KDTDataRequestManager.java:302)

        at: com.kingdee.bos.ctrl.kdf.table.KDTBody.getRow(KDTBody.java:145)

        at: com.kingdee.bos.ctrl.kdf.table.KDTable.getRow(KDTable.java:4416)

        at: com.kingdee.eas.framework.client.ListUI.selectFirstRow(ListUI.java:6578)

        at: com.kingdee.eas.framework.client.ListUI.onShow(ListUI.java:6519)

        at: com.kingdee.eas.framework.client.CoreBillListUI.onShow(CoreBillListUI.java:2339)

        at: com.kingdee.eas.st.common.client.STBillBaseListUI.onShow(STBillBaseListUI.java:2399)

        at: com.kingdee.eas.framework.client.CoreUI.doLayout(CoreUI.java:3590)

        at: java.awt.Container.validateTree(Container.java:1507)

        at: java.awt.Container.validateTree(Container.java:1513)

        at: java.awt.Container.validate(Container.java:1480)

        at: com.kingdee.eas.base.uiframe.client.BodyUI.setCurTabIndex(BodyUI.java:154)

        at: com.kingdee.eas.base.uiframe.client.UIObjectManager.changeTab(UIObjectManager.java:120)

        at: com.kingdee.eas.base.uiframe.client.UIObjectManager.changeTab(UIObjectManager.java:128)

        at: com.kingdee.eas.base.uiframe.client.UINewTab.show(UINewTab.java:42)

        at: com.kingdee.eas.base.uiframe.client.UIShowHelper.showUI(UIShowHelper.java:48)

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

com.kingdee.bos.rpc.RPCException: java.lang.NullPointerException

        at: rpc_generate._STUB_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_IVirtualModeDataAccess.doAllQueryTask(Unknown Source)

        at: sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)

        at: sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)

        at: sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)

        at: java.lang.reflect.Method.invoke(Method.java:597)

        at: com.kingdee.bos.framework.cache.CachedInvokeInterceptor.cachedInvoke(CachedInvokeInterceptor.java:179)

        at: com.kingdee.bos.framework.cache.CachedInvokeInterceptor.invoke(CachedInvokeInterceptor.java:134)

        at: com.kingdee.bos.framework.cache.CachedInvokeInterceptor2.invoke(CachedInvokeInterceptor2.java:73)

        at: $Proxy47.doAllQueryTask(Unknown Source)

        at: sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)

        at: sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)

        at: sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)

        at: java.lang.reflect.Method.invoke(Method.java:597)

        at: com.kingdee.bos.dao.query.server.VirtualModeDataAccessInterceptor.doAllQueryTask(VirtualModeDataAccessInterceptor.java:353)

        at: com.kingdee.bos.dao.query.server.VirtualModeDataAccessInterceptor.invoke(VirtualModeDataAccessInterceptor.java:89)

        at: $Proxy47.doAllQueryTask(Unknown Source)

        at: com.kingdee.bos.dao.query.QueryExecutor.doAllQueryTask(QueryExecutor.java:556)

        at: com.kingdee.eas.framework.client.ListUI.fillFirstData(ListUI.java:2990)

        at: com.kingdee.eas.framework.client.ListUI.getDataFirsetTime(ListUI.java:2936)

        at: com.kingdee.eas.framework.client.ListUI.tblMain_doRequestRowSetForHasQueryPK(ListUI.java:2815)

        at: com.kingdee.eas.framework.client.ListUI.tblMain_doRequestRowSet(ListUI.java:2702)

        at: com.kingdee.eas.framework.client.CoreBillListUI.tblMain_doRequestRowSet(CoreBillListUI.java:337)

        at: com.kingdee.eas.framework.client.AbstractListUI$2.doRequestRowSet(AbstractListUI.java:332)

        at: com.kingdee.bos.ctrl.kdf.data.impl.DataSetWrapperFactory.fireRequestRowSet(DataSetWrapperFactory.java:257)

        at: com.kingdee.bos.ctrl.kdf.data.impl.DataSetWrapperFactory.requestData(DataSetWrapperFactory.java:233)

        at: com.kingdee.bos.ctrl.kdf.table.KDTDataRequestManager.requestData(KDTDataRequestManager.java:555)

        at: com.kingdee.bos.ctrl.kdf.table.KDTDataRequestManager.doDataRequestPage(KDTDataRequestManager.java:484)

        at: com.kingdee.bos.ctrl.kdf.table.KDTDataRequestManager.doDataRequest2(KDTDataRequestManager.java:391)

        at: com.kingdee.bos.ctrl.kdf.table.KDTDataRequestManager.doDataRequest(KDTDataRequestManager.java:302)

        at: com.kingdee.bos.ctrl.kdf.table.KDTBody.getRow(KDTBody.java:145)

        at: com.kingdee.bos.ctrl.kdf.table.KDTable.getRow(KDTable.java:4416)

        at: com.kingdee.eas.framework.client.ListUI.selectFirstRow(ListUI.java:6578)

        at: com.kingdee.eas.framework.client.ListUI.onShow(ListUI.java:6519)

        at: com.kingdee.eas.framework.client.CoreBillListUI.onShow(CoreBillListUI.java:2339)

        at: com.kingdee.eas.st.common.client.STBillBaseListUI.onShow(STBillBaseListUI.java:2399)

        at: com.kingdee.eas.framework.client.CoreUI.doLayout(CoreUI.java:3590)

        at: java.awt.Container.validateTree(Container.java:1507)

        at: java.awt.Container.validateTree(Container.java:1513)

        at: java.awt.Container.validate(Container.java:1480)

        at: com.kingdee.eas.base.uiframe.client.BodyUI.setCurTabIndex(BodyUI.java:154)

        at: com.kingdee.eas.base.uiframe.client.UIObjectManager.changeTab(UIObjectManager.java:120)

        at: com.kingdee.eas.base.uiframe.client.UIObjectManager.changeTab(UIObjectManager.java:128)

        at: com.kingdee.eas.base.uiframe.client.UINewTab.show(UINewTab.java:42)

        at: com.kingdee.eas.base.uiframe.client.UIShowHelper.showUI(UIShowHelper.java:48)

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

java.lang.NullPointerException: null

        at: com.kingdee.bos.metadata.query.util.FromBuilder.getMultiRelation(FromBuilder.java:889)

        at: com.kingdee.bos.metadata.query.util.FromBuilder.processMultiRelation(FromBuilder.java:799)

        at: com.kingdee.bos.metadata.query.util.FromBuilder.processRightObject(FromBuilder.java:441)

        at: com.kingdee.bos.metadata.query.util.FromBuilder.buildFrom(FromBuilder.java:147)

        at: com.kingdee.bos.metadata.query.util.FromBuilder.getSql(FromBuilder.java:59)

        at: com.kingdee.bos.metadata.query.util.QuerySqlAccessBase.getSql(QuerySqlAccessBase.java:181)

        at: com.kingdee.bos.dao.query.server.BaseDataAccess.getRuntimeSql(BaseDataAccess.java:187)

        at: com.kingdee.bos.dao.query.server.VirtualModeDataAccess.innerOpenQuery(VirtualModeDataAccess.java:269)

        at: com.kingdee.bos.dao.query.server.VirtualModeDataAccess.doAllQueryTask(VirtualModeDataAccess.java:1979)

        at: rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_IVirtualModeDataAccess.pi11(Unknown Source)

        at: rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_IVirtualModeDataAccess.processInvoke(Unknown Source)

        at: com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177)

        at: com.kingdee.bos.rpc.impl.RPCService.serviceCreateObjectAndInvoke(RPCService.java:611)

        at: com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:124)

        at: com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153)

        at: java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441)

        at: java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303)

        at: java.util.concurrent.FutureTask.run(FutureTask.java:138)

        at: com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152)

        at: com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622)

        at: java.lang.Thread.run(Thread.java:662)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h4><blockquote><p>在与项目组小伙伴对比后发现是项目成员有未提交对应文件所至，如下图所示提交并更新后则解决了此问题</p></blockquote><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>EAS如何解决通过路径进入单据报错误信息：(errorCode 500) com kingdee bos rpc RPCException ：java lang NullPointerException的bug？</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><blockquote><p>要去领悟“商不言钱句句带金，官不言权字字显威;瓜田不纳履 李下不整冠：所见即是我 是好是坏不反驳”</p></blockquote><hr>',19);function o(u,m){return a(),n("div",null,[i(" more "),c])}const p=e(r,[["render",o],["__file","index.html.vue"]]);export{p as default};
