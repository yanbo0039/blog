import{_ as i,X as s,Y as r,a1 as t,Z as e,$ as n,a2 as c,a0 as o,F as l}from"./framework-68dd73a2.js";const d={},v={id:"_132-sql查询时报错caused-exception-message-is-translate-sql-exception-message-is-parse-error-detail-message-is-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_132-sql查询时报错caused-exception-message-is-translate-sql-exception-message-is-parse-error-detail-message-is-md","aria-hidden":"true"},"#",-1),m={href:"http://is.md",target:"_blank",rel:"noopener noreferrer"},p=o(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>详细报错如下:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>错误信息：null
Caused exception message is: translate sql exception, message is 
parse error. detail message is :
unexcept token. token is : &#39;r&#39;, at line 1 column 153, token type is &#39;Identifier&#39;
source sql is : 
SELECT v.fnumber FROM T_GL_Voucher v inner join  T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = &#39;umYAAABSs+Y7c00s&#39; and m.FNAME = &#39;RZZLHT-PZ-BJ&#39;
错误详细堆栈信息：com.kingdee.bos.SQLDataException: null
Caused exception message is: translate sql exception, message is 
parse error. detail message is :
unexcept token. token is : &#39;r&#39;, at line 1 column 153, token type is &#39;Identifier&#39;
source sql is : 
SELECT v.fnumber FROM T_GL_Voucher v inner join  T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = &#39;umYAAABSs+Y7c00s&#39; and m.FNAME = &#39;RZZLHT-PZ-BJ&#39;
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
Caused by: java.sql.SQLException: translate sql exception, message is 
parse error. detail message is :
unexcept token. token is : &#39;r&#39;, at line 1 column 153, token type is &#39;Identifier&#39;
source sql is : 
SELECT v.fnumber FROM T_GL_Voucher v inner join  T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = &#39;umYAAABSs+Y7c00s&#39; and m.FNAME = &#39;RZZLHT-PZ-BJ&#39;
	at com.kingdee.bos.sql.shell.KDConnection.getSql(KDConnection.java:278)
	at com.kingdee.bos.sql.shell.KDConnection.prepareStatement(KDConnection.java:314)
	at com.apusic.jdbc.adapter.ConnectionHandle.prepareStatement(Unknown Source)
	at com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:72)
	... 12 more
Caused by: java.sql.SQLException
java.sql.SQLException: translate sql exception, message is 
parse error. detail message is :
unexcept token. token is : &#39;r&#39;, at line 1 column 153, token type is &#39;Identifier&#39;
source sql is : 
SELECT v.fnumber FROM T_GL_Voucher v inner join  T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = &#39;umYAAABSs+Y7c00s&#39; and m.FNAME = &#39;RZZLHT-PZ-BJ&#39;
	at com.kingdee.bos.sql.shell.KDConnection.getSql(KDConnection.java:278)
	at com.kingdee.bos.sql.shell.KDConnection.prepareStatement(KDConnection.java:314)
	at com.apusic.jdbc.adapter.ConnectionHandle.prepareStatement(Unknown Source)
	at com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:72)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>从上面的报错信息可以看到我的SQL语句如下所未，看到where与之前的sql未加空格所致，所以得出的结论为<strong>一定要在代码里执行sql之前先断点看看SQL语句是否正确先！！！</strong></p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>SELECT v.fnumber FROM T_GL_Voucher v inner join  T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = &#39;umYAAABSs+Y7c00s&#39; and m.FNAME = &#39;RZZLHT-PZ-BJ&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>另以上SQL语句等价于另一句很LOW的查询语句，如下所示</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>select fnumber from T_GL_Voucher where fid = (select  FDESTOBJECTID from T_BOT_Relation where FSRCOBJECTID = &#39;umYAAABSrBA7c00s&#39; and FBOTMAPPINGID  = ( select fid from T_BOT_Mapping where FNAME = &#39;RZZLHT-PZ-LX&#39;)) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>SQL查询时报错Caused exception message is translate sql exception message is parse error detail message is</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,11);function _(b,T){const a=l("ExternalLinkIcon");return s(),r("div",null,[t(" more "),e("h1",v,[u,n(" 132-SQL查询时报错Caused exception message is translate sql exception message is parse error detail message "),e("a",m,[n("is.md"),c(a)])]),p])}const S=i(d,[["render",_],["__file","kingdee132.html.vue"]]);export{S as default};
