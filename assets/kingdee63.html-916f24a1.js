import{_ as e,X as a,Y as i,a1 as r,a0 as n}from"./framework-68dd73a2.js";const o="/blog/assets/Kingdee_63_1.png",t="/blog/assets/Kingdee_63_2.png",l="/blog/assets/Kingdee_63_3.png",c="/blog/assets/Kingdee_63_1.gif",s={},d=n('<h1 id="_63-金蝶云苍穹进入轻分析时弹出消息访问服务器过程出现错误如何解决-md" tabindex="-1"><a class="header-anchor" href="#_63-金蝶云苍穹进入轻分析时弹出消息访问服务器过程出现错误如何解决-md" aria-hidden="true">#</a> 63-金蝶云苍穹进入轻分析时弹出消息访问服务器过程出现错误如何解决？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h3><blockquote><p>如下图所示，云苍穹在进入轻分析时弹出两个如下提示框</p></blockquote><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>错误代码如下</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>kd.bos.exception.KDException: Exception in invoke kd.bos.service.DispatchService(appId=), error is: null
	at kd.bos.dubbo.ProxyFactory$Handler.invoke(ProxyFactory.java:149)
	at com.sun.proxy.$Proxy37.invoke(Unknown Source)
	at kd.bos.servicehelper.DispatchServiceHelper.invokeBOSService(DispatchServiceHelper.java:99)
	at kd.bos.web.qing.impl.QingMServiceDispatcher.dispatch(QingMServiceDispatcher.java:14)
	at kd.bos.web.qing.impl.QingWebDispatcherImpl.dispatch(QingWebDispatcherImpl.java:13)
	at com.kingdee.bos.qing.common.framework.web.dependency.QingWebRequestDispatcher.asynDispatcher(QingWebRequestDispatcher.java:42)
	at com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$ClientRemoteCallMessageHandler.dispatch(ClientMessageHandler.java:192)
	at com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$ClientRemoteCallMessageHandler.handle(ClientMessageHandler.java:209)
	at com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$ClientRemoteCallMessageHandler.handle(ClientMessageHandler.java:182)
	at com.kingdee.bos.qing.common.framework.web.ClientMessageHandler.handle(ClientMessageHandler.java:133)
	at com.kingdee.bos.qing.common.framework.web.ClientMessageHandler.access$500(ClientMessageHandler.java:39)
	at com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$MessageHandlerTask.call(ClientMessageHandler.java:154)
	at com.kingdee.bos.qing.util.QingContextCallable.call(QingContextCallable.java:30)
	at kd.bos.thread.ThreadLifeCycleManager$CallableWrap.call(ThreadLifeCycleManager.java:200)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)
	at java.lang.Thread.run(Thread.java:748)
Caused by: java.lang.NullPointerException
	at com.kingdee.bos.qing.common.framework.server.task.AsynServerRequestInvoker.invoke(AsynServerRequestInvoker.java:35)
	at com.kingdee.bos.qing.common.framework.server.AbstractQingServerRequestDispatcher.asynDispatcher(AbstractQingServerRequestDispatcher.java:18)
	at sun.reflect.GeneratedMethodAccessor220.invoke(Unknown Source)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at kd.bos.service.DispatchServiceImpl.invoke(DispatchServiceImpl.java:53)
	at com.alibaba.dubbo.common.bytecode.Wrapper1.invokeMethod(Wrapper1.java)
	at com.alibaba.dubbo.rpc.proxy.javassist.JavassistProxyFactory$1.doInvoke(JavassistProxyFactory.java:46)
	at com.alibaba.dubbo.rpc.proxy.AbstractProxyInvoker.invoke(AbstractProxyInvoker.java:72)
	at com.alibaba.dubbo.rpc.filter.ExceptionFilter.invoke(ExceptionFilter.java:64)
	at com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)
	at kd.bos.service.filter.RequestContextFilter.lambda$invokeProviderSide$0(RequestContextFilter.java:132)
	at kd.bos.dubbo.debug.DebugUtil.invoke(DebugUtil.java:153)
	at kd.bos.service.filter.RequestContextFilter.invokeProviderSide(RequestContextFilter.java:126)
	at kd.bos.service.filter.RequestContextFilter.invoke(RequestContextFilter.java:51)
	at com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)
	at com.alibaba.dubbo.rpc.filter.TimeoutFilter.invoke(TimeoutFilter.java:23)
	at com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)
	at com.alibaba.dubbo.rpc.protocol.dubbo.filter.TraceFilter.invoke(TraceFilter.java:78)
	at com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)
	at com.alibaba.dubbo.monitor.support.MonitorFilter.invoke(MonitorFilter.java:75)
	at com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)
	at kd.bos.metric.instruments.dubbo.ProviderMetricFilter.invoke(ProviderMetricFilter.java:113)
	at com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)
	at kd.bos.trace.instrument.dubbo.ProviderSpanFilter.invoke(ProviderSpanFilter.java:75)
	at com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)
	at kd.bos.service.filter.ThreadLifeCycleFilter.invoke(ThreadLifeCycleFilter.java:20)
	at com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)
	at com.alibaba.dubbo.rpc.filter.ContextFilter.invoke(ContextFilter.java:70)
	at com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)
	at com.alibaba.dubbo.rpc.filter.GenericFilter.invoke(GenericFilter.java:132)
	at com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)
	at com.alibaba.dubbo.rpc.filter.ClassLoaderFilter.invoke(ClassLoaderFilter.java:38)
	at com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)
	at com.alibaba.dubbo.rpc.filter.EchoFilter.invoke(EchoFilter.java:38)
	at com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)
	at com.alibaba.dubbo.rpc.protocol.dubbo.DubboProtocol$1.reply(DubboProtocol.java:113)
	at com.alibaba.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.handleRequest(HeaderExchangeHandler.java:95)
	at com.alibaba.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.received(HeaderExchangeHandler.java:202)
	at com.alibaba.dubbo.remoting.transport.DecodeHandler.received(DecodeHandler.java:52)
	at com.alibaba.dubbo.remoting.transport.dispatcher.ChannelEventRunnable.run(ChannelEventRunnable.java:92)
	... 3 more
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><ol><li>重新debug启动DebugServer.java</li></ol><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>对build.gradle进行如下操作</li></ol><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>备注：若还是出现上述bug，则需要对Eclipse进行Restart操作后再重复以上操作或清理缓存后再重复上述操作</p></blockquote><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><blockquote><p>如下图所示，测试成功</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>金蝶云苍穹进入轻分析时弹出消息访问服务器过程出现错误如何解决？</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p></div>',20);function v(b,u){return a(),i("div",null,[r(" more "),d])}const m=e(s,[["render",v],["__file","kingdee63.html.vue"]]);export{m as default};
