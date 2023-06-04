import{_ as t,X as a,Y as r,a1 as o,Z as e,$ as n,a2 as s,a0 as l,F as d}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_133_1.png",v="/blog/assets/Kingdee_133_2.png",m="/blog/assets/Kingdee_133_3.png",u="/blog/assets/Kingdee_133_4.png",b="/blog/assets/Kingdee_133_5.png",k="/blog/assets/Kingdee_133_6.png",p={},g={id:"_133-eas-web记录一次有意思的找bug经历-执行脚本时发生错误-md",tabindex:"-1"},I=e("a",{class:"header-anchor",href:"#_133-eas-web记录一次有意思的找bug经历-执行脚本时发生错误-md","aria-hidden":"true"},"#",-1),j={href:"http://xn--133-EAS-WEBbug--bf3x500evgbf25kljdg9foyi7oav10efegj0af59e147drpi318d93odk8c7mxa22b8z9l.md",target:"_blank",rel:"noopener noreferrer"},h=l('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="故事背景" tabindex="-1"><a class="header-anchor" href="#故事背景" aria-hidden="true">#</a> 故事背景</h3><blockquote><p>事情是这样子的，最近有在接盘我厂大佬的一EAS项目。但另一项目由于之前小伙伴跑路，暂无人维护，突然客户点点点发现有bug，于是乎项目经理一声令下，当当当当，我就闪亮登场了。。。好高兴。。。。额。。 <em>^^</em> ,突然接手一个不熟悉的项目，虽然有点小激动，但同时也存在其最大的问题，可能是一个很小的问题都会由于业务不熟悉，而导致花费大量的时间，调用大量的求助资源才有可能排查到这个问题。。。比如笔者这次就基本是这样子的。。。。</p></blockquote><h3 id="出现场景" tabindex="-1"><a class="header-anchor" href="#出现场景" aria-hidden="true">#</a> 出现场景</h3><blockquote><p>那是某年某月某日的清晨，我还依然清楚的记得，那天晚上的月亮很美，那天早上的太阳也特别明亮，突然项目经理在群里给了我如下信息:</p></blockquote><ol><li>一张截图</li></ol><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>一段报错信息</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>执行脚本时发生错误,脚本:java.sql.Connection con =com.kingdee.bos.framework.ejb.EJBFactory.getConnection ( __bosContext);
java.sql.Statement batchStatement=con.createStatement();
java.lang.StringBuffer Sql = new java.lang.StringBuffer();
Sql.append(&quot;select a.famount*0.8  amt from T_CON_ContractBill as a inner join T_CON_PayRequestBill as b on a.fid=b.fcontractid where b.fid =&#39;&quot;+ID+&quot;&#39;&quot;);
rs=batchStatement.executeQuery(Sql.toString());
if(rs.next()){amt=rs.getFloat(&quot;amt&quot;);};

异常内码WFE_SCRIPT_EVAL_RETURN
异常类型:脚本
子系统:WORKFLOW
null
 脚本编写有误
 运行时对象为非预期值
发生场景:
 工作流执行脚本时发生错误,包括函数节点,后置脚本,转移条件等
建议解决办法:
 修改脚本

com.kingdee.bos.kscript.runtime.InterpreterException: 第5行执行出错:
rs=batchStatement.executeQuery(Sql.toString());
执行方法错误,JAVA方法抛出异常.对象: com.apusic.jdbc.adapter.StatementHandle@3103247c, 方法: executeQuery, 参数表: [Ljava.lang.Object;@7a1325d8, 上下文环境: Context:=null, 错误信息: null

异常内码EXEC_METHOD_INVOCATIONTARGET
异常类型:执行错误
子系统:KSCRIPT
null
 JAVA方法抛出时抛出异常
建议解决办法:
 请检查上下文环境及JAVA代码

 at com.kingdee.bos.kscript.runtime.Interpreter.doWitdInvokeException(Interpreter.java:3108)
 at com.kingdee.bos.kscript.runtime.Interpreter.invokeMethod(Interpreter.java:2599)
 at com.kingdee.bos.kscript.runtime.Interpreter.invokMethod(Interpreter.java:2539)
 at com.kingdee.bos.kscript.runtime.Interpreter.evalMethodInvokeExpr(Interpreter.java:2412)
 at com.kingdee.bos.kscript.runtime.Interpreter.evalExprInternal(Interpreter.java:1314)
 at com.kingdee.bos.kscript.runtime.Interpreter.assign(Interpreter.java:3391)
 at com.kingdee.bos.kscript.runtime.Interpreter.evalBinaryOpExpr(Interpreter.java:3172)
 at com.kingdee.bos.kscript.runtime.Interpreter.evalExprInternal(Interpreter.java:1301)
 at com.kingdee.bos.kscript.runtime.Interpreter.evalStmt(Interpreter.java:748)
 at com.kingdee.bos.kscript.runtime.Interpreter.evalBlockStmtList(Interpreter.java:718)
 at com.kingdee.bos.kscript.runtime.Interpreter.eval(Interpreter.java:500)
 at com.kingdee.bos.kscript.runtime.Interpreter.eval(Interpreter.java:461)
 at com.kingdee.bos.workflow.util.ScriptUtil.executeScriptReturnValue(Scr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>其它辅助信息</li></ol><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>就以上信息，目的是去解决它！！！！？？？</p></blockquote><h3 id="解决步骤" tabindex="-1"><a class="header-anchor" href="#解决步骤" aria-hidden="true">#</a> 解决步骤</h3><blockquote><p>此刻我的脑瓜子是蒙的，但冷静下来并且消夏大量时间后用以下步骤</p></blockquote><ol><li>查看错误日志</li></ol><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>拿到如下错误日志</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>执行脚本时发生错误,脚本:java.sql.Connection con =com.kingdee.bos.framework.ejb.EJBFactory.getConnection ( __bosContext);
java.sql.Statement batchStatement=con.createStatement();
java.lang.StringBuffer Sql = new java.lang.StringBuffer();
Sql.append(&quot;select a.famount*0.8  amt from T_CON_ContractBill as a inner join T_CON_PayRequestBill as b on a.fid=b.fcontractid where b.fid =&#39;&quot;+ID+&quot;&#39;&quot;);
rs=batchStatement.executeQuery(Sql.toString());
if(rs.next()){amt=rs.getFloat(&quot;amt&quot;);};

异常内码WFE_SCRIPT_EVAL_RETURN
异常类型:脚本
子系统:WORKFLOW
null
	脚本编写有误
	运行时对象为非预期值
发生场景:
	工作流执行脚本时发生错误,包括函数节点,后置脚本,转移条件等
建议解决办法:
	修改脚本

com.kingdee.bos.kscript.runtime.InterpreterException: 第5行执行出错:
rs=batchStatement.executeQuery(Sql.toString());
执行方法错误,JAVA方法抛出异常.对象: com.apusic.jdbc.adapter.StatementHandle@178ff9ac, 方法: executeQuery, 参数表: [Ljava.lang.Object;@53fcf7d7, 上下文环境: Context:=null, 错误信息: null

异常内码EXEC_METHOD_INVOCATIONTARGET
异常类型:执行错误
子系统:KSCRIPT
null
	JAVA方法抛出时抛出异常
建议解决办法:
	请检查上下文环境及JAVA代码

	at com.kingdee.bos.kscript.runtime.Interpreter.doWitdInvokeException(Interpreter.java:3108)
	at com.kingdee.bos.kscript.runtime.Interpreter.invokeMethod(Interpreter.java:2599)
	at com.kingdee.bos.kscript.runtime.Interpreter.invokMethod(Interpreter.java:2539)
	at com.kingdee.bos.kscript.runtime.Interpreter.evalMethodInvokeExpr(Interpreter.java:2412)
	at com.kingdee.bos.kscript.runtime.Interpreter.evalExprInternal(Interpreter.java:1314)
	at com.kingdee.bos.kscript.runtime.Interpreter.assign(Interpreter.java:3391)
	at com.kingdee.bos.kscript.runtime.Interpreter.evalBinaryOpExpr(Interpreter.java:3172)
	at com.kingdee.bos.kscript.runtime.Interpreter.evalExprInternal(Interpreter.java:1301)
	at com.kingdee.bos.kscript.runtime.Interpreter.evalStmt(Interpreter.java:748)
	at com.kingdee.bos.kscript.runtime.Interpreter.evalBlockStmtList(Interpreter.java:718)
	at com.kingdee.bos.kscript.runtime.Interpreter.eval(Interpreter.java:500)
	at com.kingdee.bos.kscript.runtime.Interpreter.eval(Interpreter.java:461)
	at com.kingdee.bos.workflow.util.ScriptUtil.executeScriptReturnValue(ScriptUtil.java:248)
	at com.kingdee.bos.workflow.util.ScriptUtil.executeScript(ScriptUtil.java:267)
	at com.kingdee.bos.workflow.enactment.WfActivity.innerPostHandle(WfActivity.java:1363)
	at com.kingdee.bos.workflow.engine.listener.ActivityPostHandler.execute(ActivityPostHandler.java:28)
	at com.kingdee.cbos.process.vm.internal.i.wrapper.NodeListenerWrapper.execute(NodeListenerWrapper.java:42)
	at sun.reflect.GeneratedMethodAccessor964.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.util.rpc.ObjectFactory$Bridge.invoke(ObjectFactory.java:214)
	at sun.reflect.GeneratedMethodAccessor482.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_REQUIRED(TxInvokerBean.java:60)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_REQUIRED(Unknown Source)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:172)
	at com.kingdee.bos.util.rpc.ObjectFactory.invokeRequired(ObjectFactory.java:175)
	at com.kingdee.cbos.process.vm.internal.i.wrapper.ListenerWrapper.invoke(ListenerWrapper.java:52)
	at com.kingdee.cbos.process.vm.internal.r.ExecutionImpl.execute(ExecutionImpl.java:719)
	at com.kingdee.cbos.process.vm.internal.r.ControllerImpl.execute(ControllerImpl.java:68)
	at com.kingdee.cbos.process.vm.internal.r.ControllerImpl.execute(ControllerImpl.java:54)
	at com.kingdee.cbos.process.vm.internal.r.ControllerImpl.execute(ControllerImpl.java:32)
	at com.kingdee.cbos.process.vm.internal.r.FlowContextImpl.signal(FlowContextImpl.java:536)
	at com.kingdee.bos.workflow.engine.core.thread.FlowInitiator.tryOmitFirstActivitiy(FlowInitiator.java:122)
	at com.kingdee.bos.workflow.engine.core.thread.FlowInitiator.run(FlowInitiator.java:81)
	at sun.reflect.GeneratedMethodAccessor1579.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.workflow.util.InvocationExecutor.execute(InvocationExecutor.java:28)
	at com.kingdee.bos.workflow.transaction.WfTxInvoker.invoke(WfTxInvoker.java:33)
	at sun.reflect.GeneratedMethodAccessor501.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.workflow.metas.InvokeMethodDelegateControllerBean.invoke(InvokeMethodDelegateControllerBean.java:77)
	at com.kingdee.bos.workflow.metas.InvokeMethodDelegateControllerBean._invokeNotSupported(InvokeMethodDelegateControllerBean.java:45)
	at com.kingdee.bos.workflow.metas.AbstractInvokeMethodDelegateControllerBean.invokeNotSupported(AbstractInvokeMethodDelegateControllerBean.java:81)
	at sun.reflect.GeneratedMethodAccessor1163.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_NOT_SUPPORTED(TxInvokerBean.java:68)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_NOT_SUPPORTED(Unknown Source)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:188)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:325)
	at com.sun.proxy.$Proxy386.invokeNotSupported(Unknown Source)
	at com.kingdee.bos.workflow.metas.InvokeMethodDelegate.invokeNotSupported(InvokeMethodDelegate.java:97)
	at sun.reflect.GeneratedMethodAccessor1162.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.ResponseInvocationHandler.invoke(ResponseInvocationHandler.java:195)
	at com.sun.proxy.$Proxy385.invokeNotSupported(Unknown Source)
	at com.kingdee.bos.workflow.transaction.WfTxHelper.invokeNotSupported(WfTxHelper.java:32)
	at com.kingdee.bos.workflow.engine.core.thread.WfJobHandler.invoke(WfJobHandler.java:216)
	at com.kingdee.bos.workflow.engine.core.thread.WfJobHandler.innerRun(WfJobHandler.java:162)
	at com.kingdee.bos.workflow.engine.core.thread.WfJobHandler.execute(WfJobHandler.java:118)
	at com.kingdee.bos.workflow.engine.core.thread.WfJobHandler.execute(WfJobHandler.java:49)
	at com.kingdee.bos.service.job.core.ThreadWorker.execute(ThreadWorker.java:186)
	at com.kingdee.bos.service.job.core.ThreadWorker.run(ThreadWorker.java:121)
	at java.lang.Thread.run(Thread.java:745)
Caused by: java.lang.reflect.InvocationTargetException
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.kscript.runtime.KScriptUtil.evalJavaMethod(KScriptUtil.java:315)
	at com.kingdee.bos.kscript.runtime.Interpreter.invokeMethod(Interpreter.java:2560)
	... 69 more
Caused by: java.sql.SQLException: translate sql exception, message is 
parse error. detail message is :
Error: Unknowen char not read at (22/1) in Lexer.Next()
 It was:  
source sql is : 
select a.famount*0.8  amt from T_CON_ContractBill as a inner join T_CON_PayRequestBill as b on a.fid=b.fcontractid where b.fid =&#39;xwLM6KaVQFOJggfX/nSzB8mlqGk=&#39;
	at com.kingdee.bos.sql.shell.KDStatement.getSql(KDStatement.java:123)
	at com.kingdee.bos.sql.shell.KDStatement.executeQuery(KDStatement.java:579)
	at com.apusic.jdbc.adapter.StatementHandle.executeQuery(StatementHandle.java:89)
	... 75 more
Caused by: java.lang.reflect.InvocationTargetException
java.lang.reflect.InvocationTargetException
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.kscript.runtime.KScriptUtil.evalJavaMethod(KScriptUtil.java:315)
	at com.kingdee.bos.kscript.runtime.Interpreter.invokeMethod(Interpreter.java:2560)
	at com.kingdee.bos.kscript.runtime.Interpreter.invokMethod(Interpreter.java:2539)
	at com.kingdee.bos.kscript.runtime.Interpreter.evalMethodInvokeExpr(Interpreter.java:2412)
	at com.kingdee.bos.kscript.runtime.Interpreter.evalExprInternal(Interpreter.java:1314)
	at com.kingdee.bos.kscript.runtime.Interpreter.assign(Interpreter.java:3391)
	at com.kingdee.bos.kscript.runtime.Interpreter.evalBinaryOpExpr(Interpreter.java:3172)
	at com.kingdee.bos.kscript.runtime.Interpreter.evalExprInternal(Interpreter.java:1301)
	at com.kingdee.bos.kscript.runtime.Interpreter.evalStmt(Interpreter.java:748)
	at com.kingdee.bos.kscript.runtime.Interpreter.evalBlockStmtList(Interpreter.java:718)
	at com.kingdee.bos.kscript.runtime.Interpreter.eval(Interpreter.java:500)
	at com.kingdee.bos.kscript.runtime.Interpreter.eval(Interpreter.java:461)
	at com.kingdee.bos.workflow.util.ScriptUtil.executeScriptReturnValue(ScriptUtil.java:248)
	at com.kingdee.bos.workflow.util.ScriptUtil.executeScript(ScriptUtil.java:267)
	at com.kingdee.bos.workflow.enactment.WfActivity.innerPostHandle(WfActivity.java:1363)
	at com.kingdee.bos.workflow.engine.listener.ActivityPostHandler.execute(ActivityPostHandler.java:28)
	at com.kingdee.cbos.process.vm.internal.i.wrapper.NodeListenerWrapper.execute(NodeListenerWrapper.java:42)
	at sun.reflect.GeneratedMethodAccessor964.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.util.rpc.ObjectFactory$Bridge.invoke(ObjectFactory.java:214)
	at sun.reflect.GeneratedMethodAccessor482.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_REQUIRED(TxInvokerBean.java:60)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_REQUIRED(Unknown Source)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:172)
	at com.kingdee.bos.util.rpc.ObjectFactory.invokeRequired(ObjectFactory.java:175)
	at com.kingdee.cbos.process.vm.internal.i.wrapper.ListenerWrapper.invoke(ListenerWrapper.java:52)
	at com.kingdee.cbos.process.vm.internal.r.ExecutionImpl.execute(ExecutionImpl.java:719)
	at com.kingdee.cbos.process.vm.internal.r.ControllerImpl.execute(ControllerImpl.java:68)
	at com.kingdee.cbos.process.vm.internal.r.ControllerImpl.execute(ControllerImpl.java:54)
	at com.kingdee.cbos.process.vm.internal.r.ControllerImpl.execute(ControllerImpl.java:32)
	at com.kingdee.cbos.process.vm.internal.r.FlowContextImpl.signal(FlowContextImpl.java:536)
	at com.kingdee.bos.workflow.engine.core.thread.FlowInitiator.tryOmitFirstActivitiy(FlowInitiator.java:122)
	at com.kingdee.bos.workflow.engine.core.thread.FlowInitiator.run(FlowInitiator.java:81)
	at sun.reflect.GeneratedMethodAccessor1579.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.workflow.util.InvocationExecutor.execute(InvocationExecutor.java:28)
	at com.kingdee.bos.workflow.transaction.WfTxInvoker.invoke(WfTxInvoker.java:33)
	at sun.reflect.GeneratedMethodAccessor501.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.workflow.metas.InvokeMethodDelegateControllerBean.invoke(InvokeMethodDelegateControllerBean.java:77)
	at com.kingdee.bos.workflow.metas.InvokeMethodDelegateControllerBean._invokeNotSupported(InvokeMethodDelegateControllerBean.java:45)
	at com.kingdee.bos.workflow.metas.AbstractInvokeMethodDelegateControllerBean.invokeNotSupported(AbstractInvokeMethodDelegateControllerBean.java:81)
	at sun.reflect.GeneratedMethodAccessor1163.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.invoke(TxInvokerBean.java:125)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean.INVOKE_NOT_SUPPORTED(TxInvokerBean.java:68)
	at com.kingdee.bos.transaction.EJBTxFacade.TxInvokerBean_LocalObjectImpl_2.INVOKE_NOT_SUPPORTED(Unknown Source)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:188)
	at com.kingdee.bos.transaction.EJBTransactionProxy.invoke(EJBTransactionProxy.java:325)
	at com.sun.proxy.$Proxy386.invokeNotSupported(Unknown Source)
	at com.kingdee.bos.workflow.metas.InvokeMethodDelegate.invokeNotSupported(InvokeMethodDelegate.java:97)
	at sun.reflect.GeneratedMethodAccessor1162.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at com.kingdee.bos.ResponseInvocationHandler.invoke(ResponseInvocationHandler.java:195)
	at com.sun.proxy.$Proxy385.invokeNotSupported(Unknown Source)
	at com.kingdee.bos.workflow.transaction.WfTxHelper.invokeNotSupported(WfTxHelper.java:32)
	at com.kingdee.bos.workflow.engine.core.thread.WfJobHandler.invoke(WfJobHandler.java:216)
	at com.kingdee.bos.workflow.engine.core.thread.WfJobHandler.innerRun(WfJobHandler.java:162)
	at com.kingdee.bos.workflow.engine.core.thread.WfJobHandler.execute(WfJobHandler.java:118)
	at com.kingdee.bos.workflow.engine.core.thread.WfJobHandler.execute(WfJobHandler.java:49)
	at com.kingdee.bos.service.job.core.ThreadWorker.execute(ThreadWorker.java:186)
	at com.kingdee.bos.service.job.core.ThreadWorker.run(ThreadWorker.java:121)
	at java.lang.Thread.run(Thread.java:745)
Caused by: java.sql.SQLException: translate sql exception, message is 
parse error. detail message is :
Error: Unknowen char not read at (22/1) in Lexer.Next()
 It was:  
source sql is : 
select a.famount*0.8  amt from T_CON_ContractBill as a inner join T_CON_PayRequestBill as b on a.fid=b.fcontractid where b.fid =&#39;xwLM6KaVQFOJggfX/nSzB8mlqGk=&#39;
	at com.kingdee.bos.sql.shell.KDStatement.getSql(KDStatement.java:123)
	at com.kingdee.bos.sql.shell.KDStatement.executeQuery(KDStatement.java:579)
	at com.apusic.jdbc.adapter.StatementHandle.executeQuery(StatementHandle.java:89)
	... 75 more
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>将其sql复制到查询分析器中执行</li></ol><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li><p>从上图我得到结论，同样的sql语句，上一句可以正常得到结果，而下一句执行则报错则我初步怀疑是sql语句拼接得有问题，通过比对我发现是第二句sql多写一个空格所致。。。哼哼哼哼哼。。。。</p></li><li><p>找到对应的kScript脚本，将其sql中的空格去掉保存后重新发布对应的后缀为.kdwf文件</p></li></ol><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>重新发布后，最终解决了此问题。</li></ol><h3 id="感悟" tabindex="-1"><a class="header-anchor" href="#感悟" aria-hidden="true">#</a> 感悟</h3><blockquote><p>最后我想说一句，世界无难事，只要肯放弃，在编码的路上且行且珍惜吧。</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>EAS-WEB记录一次有意思的找bug经历-执行脚本时发生错误</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',30);function f(x,w){const i=d("ExternalLinkIcon");return a(),r("div",null,[o(" more "),e("h1",g,[I,n(),e("a",j,[n("133-EAS-WEB记录一次有意思的找bug经历-执行脚本时发生错误.md"),s(i)])]),h])}const M=t(p,[["render",f],["__file","kingdee133.html.vue"]]);export{M as default};
