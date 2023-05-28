import{_ as n,X as t,Y as i,a1 as c,Z as e,$ as a,a2 as s,a0 as d,F as l}from"./framework-68dd73a2.js";const v={},o={id:"_130-sql查询报错caused-exception-message-is-ora-01427-单行子查询返回多个行-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_130-sql查询报错caused-exception-message-is-ora-01427-单行子查询返回多个行-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--ciqu9ju9cnzc20dg60a705cfa273fusk.md",target:"_blank",rel:"noopener noreferrer"},b=d(`<blockquote><p>如下图所示， SQL查询时报错如下</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>错误信息：null
Caused exception message is: ORA-01427: 单行子查询返回多个行

错误详细堆栈信息：com.kingdee.bos.SQLDataException: null
Caused exception message is: ORA-01427: 单行子查询返回多个行

	at com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:112)
	at rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.pi4(Unknown Source)
	at rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.processInvoke(Unknown Source)
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
Caused by: java.sql.SQLException: ORA-01427: 单行子查询返回多个行

	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:111)
	at oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:330)
	at oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:287)
	at oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:744)
	at oracle.jdbc.driver.T4CPreparedStatement.doOall8(T4CPreparedStatement.java:215)
	at oracle.jdbc.driver.T4CPreparedStatement.executeForDescribe(T4CPreparedStatement.java:809)
	at oracle.jdbc.driver.OracleStatement.executeMaybeDescribe(OracleStatement.java:1038)
	at oracle.jdbc.driver.T4CPreparedStatement.executeMaybeDescribe(T4CPreparedStatement.java:849)
	at oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1125)
	at oracle.jdbc.driver.OraclePreparedStatement.executeInternal(OraclePreparedStatement.java:3338)
	at oracle.jdbc.driver.OraclePreparedStatement.executeQuery(OraclePreparedStatement.java:3383)
	at com.kingdee.bos.sql.shell.KDPreparedStatement.executeQuery(KDPreparedStatement.java:322)
	at com.apusic.jdbc.adapter.PreparedStatementHandle.executeQuery(Unknown Source)
	at com.kingdee.bos.dao.query.server.SQLDataAccess.excuteSQL(SQLDataAccess.java:190)
	at com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:80)
	... 12 more
Caused by: java.sql.SQLException
java.sql.SQLException: ORA-01427: 单行子查询返回多个行

	at oracle.jdbc.driver.DatabaseError.throwSqlException(DatabaseError.java:111)
	at oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:330)
	at oracle.jdbc.driver.T4CTTIoer.processError(T4CTTIoer.java:287)
	at oracle.jdbc.driver.T4C8Oall.receive(T4C8Oall.java:744)
	at oracle.jdbc.driver.T4CPreparedStatement.doOall8(T4CPreparedStatement.java:215)
	at oracle.jdbc.driver.T4CPreparedStatement.executeForDescribe(T4CPreparedStatement.java:809)
	at oracle.jdbc.driver.OracleStatement.executeMaybeDescribe(OracleStatement.java:1038)
	at oracle.jdbc.driver.T4CPreparedStatement.executeMaybeDescribe(T4CPreparedStatement.java:849)
	at oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:1125)
	at oracle.jdbc.driver.OraclePreparedStatement.executeInternal(OraclePreparedStatement.java:3338)
	at oracle.jdbc.driver.OraclePreparedStatement.executeQuery(OraclePreparedStatement.java:3383)
	at com.kingdee.bos.sql.shell.KDPreparedStatement.executeQuery(KDPreparedStatement.java:322)
	at com.apusic.jdbc.adapter.PreparedStatementHandle.executeQuery(Unknown Source)
	at com.kingdee.bos.dao.query.server.SQLDataAccess.excuteSQL(SQLDataAccess.java:190)
	at com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:80)
	at rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.pi4(Unknown Source)
	at rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.processInvoke(Unknown Source)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>究其原因是因为我的sql语句有问题，如下所示</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>StringBuffer sql_fnumber = new StringBuffer();
sql_fnumber.append(&quot;select fnumber from T_GL_Voucher where fid = (&quot;);
sql_fnumber.append(&quot;select  FDESTOBJECTID from T_BOT_Relation where FSRCOBJECTID = &#39;&quot;);
sql_fnumber.append(id + &quot;&#39;)&quot;);
IRowSet rs_fnumber = SQLExecutorFactory.getRemoteInstance(sql_fnumber.toString()).executeSQL();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>将其更增加 and rownum &lt; 2 条件可以针对性的解决目前的错误</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>StringBuffer sql_fnumber = new StringBuffer();
sql_fnumber.append(&quot;select fnumber from T_GL_Voucher where fid = (&quot;);
sql_fnumber.append(&quot;select  FDESTOBJECTID from T_BOT_Relation where FSRCOBJECTID = &#39;&quot;);
sql_fnumber.append(id + &quot;&#39; and rownum &lt; 2)&quot;);
IRowSet rs_fnumber = SQLExecutorFactory.getRemoteInstance(sql_fnumber.toString()).executeSQL();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>SQL查询报错Caused exception message is ORA-01427 单行子查询返回多个行</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><blockquote><p>君王所争的是天下，诸侯所争的是疆土，大夫所争的是权力，世人所争的是地位，百姓所争的是衣食。</p></blockquote><hr>`,14);function p(_,S){const r=l("ExternalLinkIcon");return t(),i("div",null,[c(" more "),e("h1",o,[u,a(" 130-SQL查询报错Caused exception message is ORA-01427 "),e("a",m,[a("单行子查询返回多个行.md"),s(r)])]),b])}const T=n(v,[["render",p],["__file","index.html.vue"]]);export{T as default};
