import{_ as r,X as t,Y as i,a1 as l,Z as e,$ as a,a2 as c,a0 as s,F as o}from"./framework-68dd73a2.js";const d="/blog/assets/Kingdee_148_1.png",v={},m={id:"_148-eas报错-错误信息-select-data-error-无法从套接字读取更多的数据-md",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_148-eas报错-错误信息-select-data-error-无法从套接字读取更多的数据-md","aria-hidden":"true"},"#",-1),u={href:"http://xn--0mq95jt5e6gm5gd6r5kap6jv2a92f39xfn1a5k2d.md",target:"_blank",rel:"noopener noreferrer"},p=s('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="出现场景" tabindex="-1"><a class="header-anchor" href="#出现场景" aria-hidden="true">#</a> 出现场景</h3><blockquote><p>如下图所示，笔者点击新增时，报如下错误</p></blockquote><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>详细信息如下</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>错误信息：select data error.无法从套接字读取更多的数据
Caused exception message is: 无法从套接字读取更多的数据
错误详细堆栈信息：com.kingdee.bos.dao.ormapping.SQLAccessException: select data error.无法从套接字读取更多的数据
Caused exception message is: 无法从套接字读取更多的数据
	at com.kingdee.bos.dao.ormapping.ORMappingDAO.innerGetCollection(ORMappingDAO.java:857)
	at com.kingdee.bos.dao.ormapping.ORMappingDAO.innerGetValue(ORMappingDAO.java:433)
	at com.kingdee.bos.dao.ormapping.ORMappingDAO.getValue(ORMappingDAO.java:370)
	at com.kingdee.bos.framework.ejb.AbstractEntityControllerBean.getCachedValue(AbstractEntityControllerBean.java:267)
	at com.kingdee.bos.framework.ejb.AbstractEntityControllerBean.innerGetValue(AbstractEntityControllerBean.java:206)
	at com.kingdee.eas.framework.app.AbstractCoreBaseControllerBean._getValue(AbstractCoreBaseControllerBean.java:96)
	at com.kingdee.eas.framework.app.AbstractObjectBaseControllerBean._getValue(AbstractObjectBaseControllerBean.java:68)
	at com.kingdee.eas.framework.app.AbstractCoreBillBaseControllerBean._getValue(AbstractCoreBillBaseControllerBean.java:354)
	at com.kingdee.eas.st.common.app.AbstractSTBillBaseControllerBean._getValue(AbstractSTBillBaseControllerBean.java:105)
	at com.kingdee.eas.custom.bill.leaseconbill.app.AbstractLeaseConBillControllerBean._getValue(AbstractLeaseConBillControllerBean.java:97)
	at com.kingdee.eas.framework.app.AbstractCoreBaseControllerBean.getValue(AbstractCoreBaseControllerBean.java:80)
	at sun.reflect.GeneratedMethodAccessor25.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)
	at java.lang.reflect.Method.invoke(Method.java:597)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_SUPPORTS(TxInvokerBean.java:64)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_SUPPORTS(Unknown Source)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:180)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:325)
	at $Proxy80.getValue(Unknown Source)
	at com.kingdee.eas.framework.CoreBase.getValue(CoreBase.java:67)
	at rpc_generate._PROXY_com_1_kingdee_1_eas_1_custom_1_bill_1_leaseconbill_1_ILeaseConBill.pi22(Unknown Source)
	at rpc_generate._PROXY_com_1_kingdee_1_eas_1_custom_1_bill_1_leaseconbill_1_ILeaseConBill.processInvoke(Unknown Source)
	at com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177)
	at com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800)
	at com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141)
	at com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441)
	at java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303)
	at java.util.concurrent.FutureTask.run(FutureTask.java:138)
	at com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152)
	at com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622)
	at java.lang.Thread.run(Thread.java:662)
Caused by: java.sql.SQLException: 无法从套接字读取更多的数据
	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:111)
	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:145)
	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:207)
	at oracle.jdbc.driver.T4CMAREngine.unmarshalUB1(T4CMAREngine.java:1122)
	at oracle.jdbc.driver.T4CMAREngine.unmarshalSB1(T4CMAREngine.java:1074)
	at oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:479)
	at oracle.jdbc.driver.T4CPreparedStatement.doOall8(T4CPreparedStatement.java:215)
	at oracle.jdbc.driver.T4CPreparedStatement.executeForDescribe(T4CPreparedStatement.java:809)
	at oracle.jdbc.driver.OracleStatement.executeMaybeDescribe(OracleStatement.java:1038)
	at oracle.jdbc.driver.T4CPreparedStatement.executeMaybeDescribe(T4CPreparedStatement.java:849)
	at oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1125)
	at oracle.jdbc.driver.OraclePreparedStatement.executeInternal(OraclePreparedStatement.java:3338)
	at oracle.jdbc.driver.OraclePreparedStatement.executeQuery(OraclePreparedStatement.java:3383)
	at com.kingdee.bos.sql.shell.KDPreparedStatement.executeQuery(KDPreparedStatement.java:322)
	at com.apusic.jdbc.adapter.PreparedStatementHandle.executeQuery(Unknown Source)
	at com.kingdee.bos.dao.ormapping.impl.EntityAccess.execQuerySQL(EntityAccess.java:556)
	at com.kingdee.bos.dao.ormapping.impl.EntityAccess.select(EntityAccess.java:390)
	at com.kingdee.bos.dao.ormapping.impl.ObjectReader.innerSelect(ObjectReader.java:319)
	at com.kingdee.bos.dao.ormapping.impl.ObjectReader.select(ObjectReader.java:144)
	at com.kingdee.bos.dao.ormapping.ORMappingDAO.innerGetCollection(ORMappingDAO.java:819)
	... 32 more
Caused by: java.sql.SQLException
java.sql.SQLException: 无法从套接字读取更多的数据
	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:111)
	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:145)
	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:207)
	at oracle.jdbc.driver.T4CMAREngine.unmarshalUB1(T4CMAREngine.java:1122)
	at oracle.jdbc.driver.T4CMAREngine.unmarshalSB1(T4CMAREngine.java:1074)
	at oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:479)
	at oracle.jdbc.driver.T4CPreparedStatement.doOall8(T4CPreparedStatement.java:215)
	at oracle.jdbc.driver.T4CPreparedStatement.executeForDescribe(T4CPreparedStatement.java:809)
	at oracle.jdbc.driver.OracleStatement.executeMaybeDescribe(OracleStatement.java:1038)
	at oracle.jdbc.driver.T4CPreparedStatement.executeMaybeDescribe(T4CPreparedStatement.java:849)
	at oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1125)
	at oracle.jdbc.driver.OraclePreparedStatement.executeInternal(OraclePreparedStatement.java:3338)
	at oracle.jdbc.driver.OraclePreparedStatement.executeQuery(OraclePreparedStatement.java:3383)
	at com.kingdee.bos.sql.shell.KDPreparedStatement.executeQuery(KDPreparedStatement.java:322)
	at com.apusic.jdbc.adapter.PreparedStatementHandle.executeQuery(Unknown Source)
	at com.kingdee.bos.dao.ormapping.impl.EntityAccess.execQuerySQL(EntityAccess.java:556)
	at com.kingdee.bos.dao.ormapping.impl.EntityAccess.select(EntityAccess.java:390)
	at com.kingdee.bos.dao.ormapping.impl.ObjectReader.innerSelect(ObjectReader.java:319)
	at com.kingdee.bos.dao.ormapping.impl.ObjectReader.select(ObjectReader.java:144)
	at com.kingdee.bos.dao.ormapping.ORMappingDAO.innerGetCollection(ORMappingDAO.java:819)
	at com.kingdee.bos.dao.ormapping.ORMappingDAO.innerGetValue(ORMappingDAO.java:433)
	at com.kingdee.bos.dao.ormapping.ORMappingDAO.getValue(ORMappingDAO.java:370)
	at com.kingdee.bos.framework.ejb.AbstractEntityControllerBean.getCachedValue(AbstractEntityControllerBean.java:267)
	at com.kingdee.bos.framework.ejb.AbstractEntityControllerBean.innerGetValue(AbstractEntityControllerBean.java:206)
	at com.kingdee.eas.framework.app.AbstractCoreBaseControllerBean._getValue(AbstractCoreBaseControllerBean.java:96)
	at com.kingdee.eas.framework.app.AbstractObjectBaseControllerBean._getValue(AbstractObjectBaseControllerBean.java:68)
	at com.kingdee.eas.framework.app.AbstractCoreBillBaseControllerBean._getValue(AbstractCoreBillBaseControllerBean.java:354)
	at com.kingdee.eas.st.common.app.AbstractSTBillBaseControllerBean._getValue(AbstractSTBillBaseControllerBean.java:105)
	at com.kingdee.eas.custom.bill.leaseconbill.app.AbstractLeaseConBillControllerBean._getValue(AbstractLeaseConBillControllerBean.java:97)
	at com.kingdee.eas.framework.app.AbstractCoreBaseControllerBean.getValue(AbstractCoreBaseControllerBean.java:80)
	at sun.reflect.GeneratedMethodAccessor25.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)
	at java.lang.reflect.Method.invoke(Method.java:597)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_SUPPORTS(TxInvokerBean.java:64)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_SUPPORTS(Unknown Source)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:180)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:325)
	at $Proxy80.getValue(Unknown Source)
	at com.kingdee.eas.framework.CoreBase.getValue(CoreBase.java:67)
	at rpc_generate._PROXY_com_1_kingdee_1_eas_1_custom_1_bill_1_leaseconbill_1_ILeaseConBill.pi22(Unknown Source)
	at rpc_generate._PROXY_com_1_kingdee_1_eas_1_custom_1_bill_1_leaseconbill_1_ILeaseConBill.processInvoke(Unknown Source)
	at com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177)
	at com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800)
	at com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141)
	at com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153)
	at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441)
	at java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303)
	at java.util.concurrent.FutureTask.run(FutureTask.java:138)
	at com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152)
	at com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622)
	at java.lang.Thread.run(Thread.java:662)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><blockquote><p>这种情况多半是VPN断开，或者服务器断开了，重启服务与客户端即可</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>EAS报错-错误信息 select data error 无法从套接字读取更多的数据</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,12);function g(j,k){const n=o("ExternalLinkIcon");return t(),i("div",null,[l(" more "),e("h1",m,[b,a(" 148-EAS报错-错误信息 select data error "),e("a",u,[a("无法从套接字读取更多的数据.md"),c(n)])]),p])}const B=r(v,[["render",g],["__file","kingdee148.html.vue"]]);export{B as default};
