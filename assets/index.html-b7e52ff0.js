const e=JSON.parse('{"key":"v-75b5ac25","path":"/zh/kingdee131/","title":"SQL查询时报错Caused exception message is ORA-00904  UMYAAABSLYG7C00S 标识符无效","lang":"zh-CN","frontmatter":{"title":"SQL查询时报错Caused exception message is ORA-00904  UMYAAABSLYG7C00S 标识符无效","icon":"page","order":131,"author":"涎涎","date":"2020-05-29T12:19:28.000Z","isOriginal":true,"permalinkPattern":"kingdee131","category":["Kingdee"],"tag":["Kingdee"],"head":[["meta",{"name":"keywords","content":"SQL查询时报错Caused exception message is ORA-00904  UMYAAABSLYG7C00S 标识符无效"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/kingdee131/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"SQL查询时报错Caused exception message is ORA-00904  UMYAAABSLYG7C00S 标识符无效"}],["meta",{"property":"og:description","content":"131-SQL查询时报错Caused exception message is ORA-00904 UMYAAABSLYG7C00S 标识符无效.md 报错如下所示 错误信息：null Caused exception message is: ORA-00904: \\"UMYAAABSLYG7C00S\\": 标识符无效 错误详细堆栈信息：com.kingdee.bos.BOSException: null Caused exception message is: ORA-00904: \\"UMYAAABSLYG7C00S\\": 标识符无效 \\tat com.kingdee.eas.fm.common.app.FMIsqlFacadeControllerBean._executeSql(FMIsqlFacadeControllerBean.java:158) \\tat com.kingdee.eas.fm.common.app.AbstractFMIsqlFacadeControllerBean.executeSql(AbstractFMIsqlFacadeControllerBean.java:51) \\tat sun.reflect.GeneratedMethodAccessor58.invoke(Unknown Source) \\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25) \\tat java.lang.reflect.Method.invoke(Method.java:597) \\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125) \\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_SUPPORTS(TxInvokerBean.java:64) \\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_SUPPORTS(Unknown Source) \\tat com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:180) \\tat com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:325) \\tat $Proxy168.executeSql(Unknown Source) \\tat com.kingdee.eas.fm.common.FMIsqlFacade.executeSql(FMIsqlFacade.java:51) \\tat rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.pi0(Unknown Source) \\tat rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.processInvoke(Unknown Source) \\tat com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177) \\tat com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800) \\tat com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141) \\tat com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153) \\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441) \\tat java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303) \\tat java.util.concurrent.FutureTask.run(FutureTask.java:138) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622) \\tat java.lang.Thread.run(Thread.java:662) Caused by: java.sql.SQLException: ORA-00904: \\"UMYAAABSLYG7C00S\\": 标识符无效 \\tat oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:111) \\tat oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:330) \\tat oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:287) \\tat oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:744) \\tat oracle.jdbc.driver.T4CStatement.doOall8(T4CStatement.java:206) \\tat oracle.jdbc.driver.T4CStatement.executeForRows(T4CStatement.java:956) \\tat oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1169) \\tat oracle.jdbc.driver.OracleStatement.executeInternal(OracleStatement.java:1695) \\tat oracle.jdbc.driver.OracleStatement.execute(OracleStatement.java:1661) \\tat com.kingdee.bos.sql.shell.KDStatement.execute(KDStatement.java:480) \\tat com.apusic.jdbc.adapter.StatementHandle.execute(Unknown Source) \\tat com.kingdee.eas.fm.common.app.FMIsqlFacadeControllerBean._executeSql(FMIsqlFacadeControllerBean.java:145) \\t... 23 more Caused by: java.sql.SQLException java.sql.SQLException: ORA-00904: \\"UMYAAABSLYG7C00S\\": 标识符无效 \\tat oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:111) \\tat oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:330) \\tat oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:287) \\tat oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:744) \\tat oracle.jdbc.driver.T4CStatement.doOall8(T4CStatement.java:206) \\tat oracle.jdbc.driver.T4CStatement.executeForRows(T4CStatement.java:956) \\tat oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1169) \\tat oracle.jdbc.driver.OracleStatement.executeInternal(OracleStatement.java:1695) \\tat oracle.jdbc.driver.OracleStatement.execute(OracleStatement.java:1661) \\tat com.kingdee.bos.sql.shell.KDStatement.execute(KDStatement.java:480) \\tat com.apusic.jdbc.adapter.StatementHandle.execute(Unknown Source) \\tat com.kingdee.eas.fm.common.app.FMIsqlFacadeControllerBean._executeSql(FMIsqlFacadeControllerBean.java:145) \\tat com.kingdee.eas.fm.common.app.AbstractFMIsqlFacadeControllerBean.executeSql(AbstractFMIsqlFacadeControllerBean.java:51) \\tat sun.reflect.GeneratedMethodAccessor58.invoke(Unknown Source) \\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25) \\tat java.lang.reflect.Method.invoke(Method.java:597) \\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125) \\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_SUPPORTS(TxInvokerBean.java:64) \\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_SUPPORTS(Unknown Source) \\tat com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:180) \\tat com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:325) \\tat $Proxy168.executeSql(Unknown Source) \\tat com.kingdee.eas.fm.common.FMIsqlFacade.executeSql(FMIsqlFacade.java:51) \\tat rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.pi0(Unknown Source) \\tat rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.processInvoke(Unknown Source) \\tat com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177) \\tat com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800) \\tat com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141) \\tat com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153) \\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441) \\tat java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303) \\tat java.util.concurrent.FutureTask.run(FutureTask.java:138) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622) \\tat java.lang.Thread.run(Thread.java:662)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Kingdee"}],["meta",{"property":"article:published_time","content":"2020-05-29T12:19:28.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL查询时报错Caused exception message is ORA-00904  UMYAAABSLYG7C00S 标识符无效\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-29T12:19:28.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"131-SQL查询时报错Caused exception message is ORA-00904 UMYAAABSLYG7C00S 标识符无效.md 报错如下所示 错误信息：null Caused exception message is: ORA-00904: \\"UMYAAABSLYG7C00S\\": 标识符无效 错误详细堆栈信息：com.kingdee.bos.BOSException: null Caused exception message is: ORA-00904: \\"UMYAAABSLYG7C00S\\": 标识符无效 \\tat com.kingdee.eas.fm.common.app.FMIsqlFacadeControllerBean._executeSql(FMIsqlFacadeControllerBean.java:158) \\tat com.kingdee.eas.fm.common.app.AbstractFMIsqlFacadeControllerBean.executeSql(AbstractFMIsqlFacadeControllerBean.java:51) \\tat sun.reflect.GeneratedMethodAccessor58.invoke(Unknown Source) \\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25) \\tat java.lang.reflect.Method.invoke(Method.java:597) \\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125) \\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_SUPPORTS(TxInvokerBean.java:64) \\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_SUPPORTS(Unknown Source) \\tat com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:180) \\tat com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:325) \\tat $Proxy168.executeSql(Unknown Source) \\tat com.kingdee.eas.fm.common.FMIsqlFacade.executeSql(FMIsqlFacade.java:51) \\tat rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.pi0(Unknown Source) \\tat rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.processInvoke(Unknown Source) \\tat com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177) \\tat com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800) \\tat com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141) \\tat com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153) \\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441) \\tat java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303) \\tat java.util.concurrent.FutureTask.run(FutureTask.java:138) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622) \\tat java.lang.Thread.run(Thread.java:662) Caused by: java.sql.SQLException: ORA-00904: \\"UMYAAABSLYG7C00S\\": 标识符无效 \\tat oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:111) \\tat oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:330) \\tat oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:287) \\tat oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:744) \\tat oracle.jdbc.driver.T4CStatement.doOall8(T4CStatement.java:206) \\tat oracle.jdbc.driver.T4CStatement.executeForRows(T4CStatement.java:956) \\tat oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1169) \\tat oracle.jdbc.driver.OracleStatement.executeInternal(OracleStatement.java:1695) \\tat oracle.jdbc.driver.OracleStatement.execute(OracleStatement.java:1661) \\tat com.kingdee.bos.sql.shell.KDStatement.execute(KDStatement.java:480) \\tat com.apusic.jdbc.adapter.StatementHandle.execute(Unknown Source) \\tat com.kingdee.eas.fm.common.app.FMIsqlFacadeControllerBean._executeSql(FMIsqlFacadeControllerBean.java:145) \\t... 23 more Caused by: java.sql.SQLException java.sql.SQLException: ORA-00904: \\"UMYAAABSLYG7C00S\\": 标识符无效 \\tat oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:111) \\tat oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:330) \\tat oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:287) \\tat oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:744) \\tat oracle.jdbc.driver.T4CStatement.doOall8(T4CStatement.java:206) \\tat oracle.jdbc.driver.T4CStatement.executeForRows(T4CStatement.java:956) \\tat oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1169) \\tat oracle.jdbc.driver.OracleStatement.executeInternal(OracleStatement.java:1695) \\tat oracle.jdbc.driver.OracleStatement.execute(OracleStatement.java:1661) \\tat com.kingdee.bos.sql.shell.KDStatement.execute(KDStatement.java:480) \\tat com.apusic.jdbc.adapter.StatementHandle.execute(Unknown Source) \\tat com.kingdee.eas.fm.common.app.FMIsqlFacadeControllerBean._executeSql(FMIsqlFacadeControllerBean.java:145) \\tat com.kingdee.eas.fm.common.app.AbstractFMIsqlFacadeControllerBean.executeSql(AbstractFMIsqlFacadeControllerBean.java:51) \\tat sun.reflect.GeneratedMethodAccessor58.invoke(Unknown Source) \\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25) \\tat java.lang.reflect.Method.invoke(Method.java:597) \\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125) \\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_SUPPORTS(TxInvokerBean.java:64) \\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_SUPPORTS(Unknown Source) \\tat com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:180) \\tat com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:325) \\tat $Proxy168.executeSql(Unknown Source) \\tat com.kingdee.eas.fm.common.FMIsqlFacade.executeSql(FMIsqlFacade.java:51) \\tat rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.pi0(Unknown Source) \\tat rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.processInvoke(Unknown Source) \\tat com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177) \\tat com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800) \\tat com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141) \\tat com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153) \\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441) \\tat java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303) \\tat java.util.concurrent.FutureTask.run(FutureTask.java:138) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622) \\tat java.lang.Thread.run(Thread.java:662)"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":2.13,"words":638},"filePathRelative":"zh/programBlog/ServerSideLanguage/Kingdee/131-SQL查询时报错Caused exception message is ORA-00904  UMYAAABSLYG7C00S 标识符无效.md","localizedDate":"2020年5月29日","excerpt":"<!-- more -->\\n<h1> 131-SQL查询时报错Caused exception message is ORA-00904  UMYAAABSLYG7C00S <a href=\\"http://xn--fcv1m68cp57a85s.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">标识符无效.md</a></h1>\\n<blockquote>\\n<p>报错如下所示</p>\\n</blockquote>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>错误信息：null\\nCaused exception message is: ORA-00904: \\"UMYAAABSLYG7C00S\\": 标识符无效\\n\\n错误详细堆栈信息：com.kingdee.bos.BOSException: null\\nCaused exception message is: ORA-00904: \\"UMYAAABSLYG7C00S\\": 标识符无效\\n\\n\\tat com.kingdee.eas.fm.common.app.FMIsqlFacadeControllerBean._executeSql(FMIsqlFacadeControllerBean.java:158)\\n\\tat com.kingdee.eas.fm.common.app.AbstractFMIsqlFacadeControllerBean.executeSql(AbstractFMIsqlFacadeControllerBean.java:51)\\n\\tat sun.reflect.GeneratedMethodAccessor58.invoke(Unknown Source)\\n\\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\\n\\tat java.lang.reflect.Method.invoke(Method.java:597)\\n\\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125)\\n\\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_SUPPORTS(TxInvokerBean.java:64)\\n\\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_SUPPORTS(Unknown Source)\\n\\tat com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:180)\\n\\tat com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:325)\\n\\tat $Proxy168.executeSql(Unknown Source)\\n\\tat com.kingdee.eas.fm.common.FMIsqlFacade.executeSql(FMIsqlFacade.java:51)\\n\\tat rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.pi0(Unknown Source)\\n\\tat rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.processInvoke(Unknown Source)\\n\\tat com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177)\\n\\tat com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800)\\n\\tat com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141)\\n\\tat com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153)\\n\\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441)\\n\\tat java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303)\\n\\tat java.util.concurrent.FutureTask.run(FutureTask.java:138)\\n\\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152)\\n\\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622)\\n\\tat java.lang.Thread.run(Thread.java:662)\\nCaused by: java.sql.SQLException: ORA-00904: \\"UMYAAABSLYG7C00S\\": 标识符无效\\n\\n\\tat oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:111)\\n\\tat oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:330)\\n\\tat oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:287)\\n\\tat oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:744)\\n\\tat oracle.jdbc.driver.T4CStatement.doOall8(T4CStatement.java:206)\\n\\tat oracle.jdbc.driver.T4CStatement.executeForRows(T4CStatement.java:956)\\n\\tat oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1169)\\n\\tat oracle.jdbc.driver.OracleStatement.executeInternal(OracleStatement.java:1695)\\n\\tat oracle.jdbc.driver.OracleStatement.execute(OracleStatement.java:1661)\\n\\tat com.kingdee.bos.sql.shell.KDStatement.execute(KDStatement.java:480)\\n\\tat com.apusic.jdbc.adapter.StatementHandle.execute(Unknown Source)\\n\\tat com.kingdee.eas.fm.common.app.FMIsqlFacadeControllerBean._executeSql(FMIsqlFacadeControllerBean.java:145)\\n\\t... 23 more\\nCaused by: java.sql.SQLException\\njava.sql.SQLException: ORA-00904: \\"UMYAAABSLYG7C00S\\": 标识符无效\\n\\n\\tat oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:111)\\n\\tat oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:330)\\n\\tat oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:287)\\n\\tat oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:744)\\n\\tat oracle.jdbc.driver.T4CStatement.doOall8(T4CStatement.java:206)\\n\\tat oracle.jdbc.driver.T4CStatement.executeForRows(T4CStatement.java:956)\\n\\tat oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1169)\\n\\tat oracle.jdbc.driver.OracleStatement.executeInternal(OracleStatement.java:1695)\\n\\tat oracle.jdbc.driver.OracleStatement.execute(OracleStatement.java:1661)\\n\\tat com.kingdee.bos.sql.shell.KDStatement.execute(KDStatement.java:480)\\n\\tat com.apusic.jdbc.adapter.StatementHandle.execute(Unknown Source)\\n\\tat com.kingdee.eas.fm.common.app.FMIsqlFacadeControllerBean._executeSql(FMIsqlFacadeControllerBean.java:145)\\n\\tat com.kingdee.eas.fm.common.app.AbstractFMIsqlFacadeControllerBean.executeSql(AbstractFMIsqlFacadeControllerBean.java:51)\\n\\tat sun.reflect.GeneratedMethodAccessor58.invoke(Unknown Source)\\n\\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\\n\\tat java.lang.reflect.Method.invoke(Method.java:597)\\n\\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125)\\n\\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_SUPPORTS(TxInvokerBean.java:64)\\n\\tat com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_SUPPORTS(Unknown Source)\\n\\tat com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:180)\\n\\tat com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:325)\\n\\tat $Proxy168.executeSql(Unknown Source)\\n\\tat com.kingdee.eas.fm.common.FMIsqlFacade.executeSql(FMIsqlFacade.java:51)\\n\\tat rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.pi0(Unknown Source)\\n\\tat rpc_generate._PROXY_com_1_kingdee_1_eas_1_fm_1_common_1_IFMIsqlFacade.processInvoke(Unknown Source)\\n\\tat com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177)\\n\\tat com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800)\\n\\tat com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141)\\n\\tat com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153)\\n\\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441)\\n\\tat java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303)\\n\\tat java.util.concurrent.FutureTask.run(FutureTask.java:138)\\n\\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152)\\n\\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622)\\n\\tat java.lang.Thread.run(Thread.java:662)\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};