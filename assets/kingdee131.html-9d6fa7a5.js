import{_ as i,X as t,Y as r,a1 as c,Z as e,$ as a,a2 as s,a0 as l,F as o}from"./framework-68dd73a2.js";const d={},v={id:"_131-sql查询时报错caused-exception-message-is-ora-00904-umyaaabslyg7c00s-标识符无效-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_131-sql查询时报错caused-exception-message-is-ora-00904-umyaaabslyg7c00s-标识符无效-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--fcv1m68cp57a85s.md",target:"_blank",rel:"noopener noreferrer"},b=l(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><blockquote><p>报错如下所示</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>错误信息：null
Caused exception message is: ORA-00904: &quot;UMYAAABSLYG7C00S&quot;: 标识符无效

错误详细堆栈信息：com.kingdee.bos.BOSException: null
Caused exception message is: ORA-00904: &quot;UMYAAABSLYG7C00S&quot;: 标识符无效

	at com.kingdee.eas.fm.common.app.FMIsqlFacadeControllerBean._executeSql(FMIsqlFacadeControllerBean.java:158)
	at com.kingdee.eas.fm.common.app.AbstractFMIsqlFacadeControllerBean.executeSql(AbstractFMIsqlFacadeControllerBean.java:51)
	at sun.reflect.GeneratedMethodAccessor58.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)
	at java.lang.reflect.Method.invoke(Method.java:597)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_SUPPORTS(TxInvokerBean.java:64)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_SUPPORTS(Unknown Source)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:180)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:325)
	at $Proxy168.executeSql(Unknown Source)
	at com.kingdee.eas.fm.common.FMIsqlFacade.executeSql(FMIsqlFacade.java:51)
	at rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.pi0(Unknown Source)
	at rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.processInvoke(Unknown Source)
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
Caused by: java.sql.SQLException: ORA-00904: &quot;UMYAAABSLYG7C00S&quot;: 标识符无效

	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:111)
	at oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:330)
	at oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:287)
	at oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:744)
	at oracle.jdbc.driver.T4CStatement.doOall8(T4CStatement.java:206)
	at oracle.jdbc.driver.T4CStatement.executeForRows(T4CStatement.java:956)
	at oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1169)
	at oracle.jdbc.driver.OracleStatement.executeInternal(OracleStatement.java:1695)
	at oracle.jdbc.driver.OracleStatement.execute(OracleStatement.java:1661)
	at com.kingdee.bos.sql.shell.KDStatement.execute(KDStatement.java:480)
	at com.apusic.jdbc.adapter.StatementHandle.execute(Unknown Source)
	at com.kingdee.eas.fm.common.app.FMIsqlFacadeControllerBean._executeSql(FMIsqlFacadeControllerBean.java:145)
	... 23 more
Caused by: java.sql.SQLException
java.sql.SQLException: ORA-00904: &quot;UMYAAABSLYG7C00S&quot;: 标识符无效

	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:111)
	at oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:330)
	at oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:287)
	at oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:744)
	at oracle.jdbc.driver.T4CStatement.doOall8(T4CStatement.java:206)
	at oracle.jdbc.driver.T4CStatement.executeForRows(T4CStatement.java:956)
	at oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1169)
	at oracle.jdbc.driver.OracleStatement.executeInternal(OracleStatement.java:1695)
	at oracle.jdbc.driver.OracleStatement.execute(OracleStatement.java:1661)
	at com.kingdee.bos.sql.shell.KDStatement.execute(KDStatement.java:480)
	at com.apusic.jdbc.adapter.StatementHandle.execute(Unknown Source)
	at com.kingdee.eas.fm.common.app.FMIsqlFacadeControllerBean._executeSql(FMIsqlFacadeControllerBean.java:145)
	at com.kingdee.eas.fm.common.app.AbstractFMIsqlFacadeControllerBean.executeSql(AbstractFMIsqlFacadeControllerBean.java:51)
	at sun.reflect.GeneratedMethodAccessor58.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)
	at java.lang.reflect.Method.invoke(Method.java:597)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_SUPPORTS(TxInvokerBean.java:64)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_SUPPORTS(Unknown Source)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:180)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:325)
	at $Proxy168.executeSql(Unknown Source)
	at com.kingdee.eas.fm.common.FMIsqlFacade.executeSql(FMIsqlFacade.java:51)
	at rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.pi0(Unknown Source)
	at rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.processInvoke(Unknown Source)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>我的查询语句如下所示</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>String fnumber = rs_fnumber.getString(&quot;fnumber&quot;);
StringBuffer sql_lx = new StringBuffer();
sql_lx.append(&quot;UPDATE CT_LEA_LeaseConBill  SET cfpayvounum = &quot;);
sql_lx.append(fnumber + &quot; WHERE fid = &quot; + id);
FMIsqlFacadeFactory.getRemoteInstance().executeSql(sql_lx.toString());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>原因是因为自己少拼接了 &#39;&#39; 符号,将其更改为如下则可解决</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>String fnumber = rs_fnumber.getString(&quot;fnumber&quot;);
StringBuffer sql_lx = new StringBuffer();
sql_lx.append(&quot;UPDATE CT_LEA_LeaseConBill  SET cfpayvounum = &#39;&quot;);
sql_lx.append(fnumber + &quot;&#39; WHERE fid = &#39;&quot; + id + &quot;&#39;&quot;);
FMIsqlFacadeFactory.getRemoteInstance().executeSql(sql_lx.toString());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>SQL查询时报错Caused exception message is ORA-00904 UMYAAABSLYG7C00S 标识符无效</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,11);function p(S,_){const n=o("ExternalLinkIcon");return t(),r("div",null,[c(" more "),e("h1",v,[u,a(" 131-SQL查询时报错Caused exception message is ORA-00904 UMYAAABSLYG7C00S "),e("a",m,[a("标识符无效.md"),s(n)])]),b])}const j=i(d,[["render",p],["__file","kingdee131.html.vue"]]);export{j as default};
