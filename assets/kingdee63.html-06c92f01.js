const e=JSON.parse('{"key":"v-b230c9c6","path":"/zh/programBlog/ServerSideLanguage/Kingdee/kingdee63.html","title":"金蝶云苍穹进入轻分析时弹出消息访问服务器过程出现错误如何解决？","lang":"zh-CN","frontmatter":{"title":"金蝶云苍穹进入轻分析时弹出消息访问服务器过程出现错误如何解决？","icon":"page","order":63,"author":"涎涎","date":"2020-03-05T18:11:37.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Kingdee/kingdee63.html","category":["Kingdee"],"tag":["Kingdee"],"head":[["meta",{"name":"keywords","content":"金蝶云苍穹进入轻分析时弹出消息访问服务器过程出现错误如何解决？"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Kingdee/kingdee63.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"金蝶云苍穹进入轻分析时弹出消息访问服务器过程出现错误如何解决？"}],["meta",{"property":"og:description","content":"63-金蝶云苍穹进入轻分析时弹出消息访问服务器过程出现错误如何解决？.md 问题描述 如下图所示，云苍穹在进入轻分析时弹出两个如下提示框 错误代码如下 kd.bos.exception.KDException: Exception in invoke kd.bos.service.DispatchService(appId=), error is: null \\tat kd.bos.dubbo.ProxyFactory$Handler.invoke(ProxyFactory.java:149) \\tat com.sun.proxy.$Proxy37.invoke(Unknown Source) \\tat kd.bos.servicehelper.DispatchServiceHelper.invokeBOSService(DispatchServiceHelper.java:99) \\tat kd.bos.web.qing.impl.QingMServiceDispatcher.dispatch(QingMServiceDispatcher.java:14) \\tat kd.bos.web.qing.impl.QingWebDispatcherImpl.dispatch(QingWebDispatcherImpl.java:13) \\tat com.kingdee.bos.qing.common.framework.web.dependency.QingWebRequestDispatcher.asynDispatcher(QingWebRequestDispatcher.java:42) \\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$ClientRemoteCallMessageHandler.dispatch(ClientMessageHandler.java:192) \\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$ClientRemoteCallMessageHandler.handle(ClientMessageHandler.java:209) \\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$ClientRemoteCallMessageHandler.handle(ClientMessageHandler.java:182) \\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler.handle(ClientMessageHandler.java:133) \\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler.access$500(ClientMessageHandler.java:39) \\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$MessageHandlerTask.call(ClientMessageHandler.java:154) \\tat com.kingdee.bos.qing.util.QingContextCallable.call(QingContextCallable.java:30) \\tat kd.bos.thread.ThreadLifeCycleManager$CallableWrap.call(ThreadLifeCycleManager.java:200) \\tat java.util.concurrent.FutureTask.run(FutureTask.java:266) \\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) \\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) \\tat java.lang.Thread.run(Thread.java:748) Caused by: java.lang.NullPointerException \\tat com.kingdee.bos.qing.common.framework.server.task.AsynServerRequestInvoker.invoke(AsynServerRequestInvoker.java:35) \\tat com.kingdee.bos.qing.common.framework.server.AbstractQingServerRequestDispatcher.asynDispatcher(AbstractQingServerRequestDispatcher.java:18) \\tat sun.reflect.GeneratedMethodAccessor220.invoke(Unknown Source) \\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) \\tat java.lang.reflect.Method.invoke(Method.java:498) \\tat kd.bos.service.DispatchServiceImpl.invoke(DispatchServiceImpl.java:53) \\tat com.alibaba.dubbo.common.bytecode.Wrapper1.invokeMethod(Wrapper1.java) \\tat com.alibaba.dubbo.rpc.proxy.javassist.JavassistProxyFactory$1.doInvoke(JavassistProxyFactory.java:46) \\tat com.alibaba.dubbo.rpc.proxy.AbstractProxyInvoker.invoke(AbstractProxyInvoker.java:72) \\tat com.alibaba.dubbo.rpc.filter.ExceptionFilter.invoke(ExceptionFilter.java:64) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat kd.bos.service.filter.RequestContextFilter.lambda$invokeProviderSide$0(RequestContextFilter.java:132) \\tat kd.bos.dubbo.debug.DebugUtil.invoke(DebugUtil.java:153) \\tat kd.bos.service.filter.RequestContextFilter.invokeProviderSide(RequestContextFilter.java:126) \\tat kd.bos.service.filter.RequestContextFilter.invoke(RequestContextFilter.java:51) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.filter.TimeoutFilter.invoke(TimeoutFilter.java:23) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.protocol.dubbo.filter.TraceFilter.invoke(TraceFilter.java:78) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.monitor.support.MonitorFilter.invoke(MonitorFilter.java:75) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat kd.bos.metric.instruments.dubbo.ProviderMetricFilter.invoke(ProviderMetricFilter.java:113) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat kd.bos.trace.instrument.dubbo.ProviderSpanFilter.invoke(ProviderSpanFilter.java:75) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat kd.bos.service.filter.ThreadLifeCycleFilter.invoke(ThreadLifeCycleFilter.java:20) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.filter.ContextFilter.invoke(ContextFilter.java:70) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.filter.GenericFilter.invoke(GenericFilter.java:132) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.filter.ClassLoaderFilter.invoke(ClassLoaderFilter.java:38) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.filter.EchoFilter.invoke(EchoFilter.java:38) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.protocol.dubbo.DubboProtocol$1.reply(DubboProtocol.java:113) \\tat com.alibaba.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.handleRequest(HeaderExchangeHandler.java:95) \\tat com.alibaba.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.received(HeaderExchangeHandler.java:202) \\tat com.alibaba.dubbo.remoting.transport.DecodeHandler.received(DecodeHandler.java:52) \\tat com.alibaba.dubbo.remoting.transport.dispatcher.ChannelEventRunnable.run(ChannelEventRunnable.java:92) \\t... 3 more"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-31T00:37:27.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Kingdee"}],["meta",{"property":"article:published_time","content":"2020-03-05T18:11:37.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-31T00:37:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"金蝶云苍穹进入轻分析时弹出消息访问服务器过程出现错误如何解决？\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-03-05T18:11:37.000Z\\",\\"dateModified\\":\\"2023-05-31T00:37:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"63-金蝶云苍穹进入轻分析时弹出消息访问服务器过程出现错误如何解决？.md 问题描述 如下图所示，云苍穹在进入轻分析时弹出两个如下提示框 错误代码如下 kd.bos.exception.KDException: Exception in invoke kd.bos.service.DispatchService(appId=), error is: null \\tat kd.bos.dubbo.ProxyFactory$Handler.invoke(ProxyFactory.java:149) \\tat com.sun.proxy.$Proxy37.invoke(Unknown Source) \\tat kd.bos.servicehelper.DispatchServiceHelper.invokeBOSService(DispatchServiceHelper.java:99) \\tat kd.bos.web.qing.impl.QingMServiceDispatcher.dispatch(QingMServiceDispatcher.java:14) \\tat kd.bos.web.qing.impl.QingWebDispatcherImpl.dispatch(QingWebDispatcherImpl.java:13) \\tat com.kingdee.bos.qing.common.framework.web.dependency.QingWebRequestDispatcher.asynDispatcher(QingWebRequestDispatcher.java:42) \\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$ClientRemoteCallMessageHandler.dispatch(ClientMessageHandler.java:192) \\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$ClientRemoteCallMessageHandler.handle(ClientMessageHandler.java:209) \\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$ClientRemoteCallMessageHandler.handle(ClientMessageHandler.java:182) \\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler.handle(ClientMessageHandler.java:133) \\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler.access$500(ClientMessageHandler.java:39) \\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$MessageHandlerTask.call(ClientMessageHandler.java:154) \\tat com.kingdee.bos.qing.util.QingContextCallable.call(QingContextCallable.java:30) \\tat kd.bos.thread.ThreadLifeCycleManager$CallableWrap.call(ThreadLifeCycleManager.java:200) \\tat java.util.concurrent.FutureTask.run(FutureTask.java:266) \\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149) \\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624) \\tat java.lang.Thread.run(Thread.java:748) Caused by: java.lang.NullPointerException \\tat com.kingdee.bos.qing.common.framework.server.task.AsynServerRequestInvoker.invoke(AsynServerRequestInvoker.java:35) \\tat com.kingdee.bos.qing.common.framework.server.AbstractQingServerRequestDispatcher.asynDispatcher(AbstractQingServerRequestDispatcher.java:18) \\tat sun.reflect.GeneratedMethodAccessor220.invoke(Unknown Source) \\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) \\tat java.lang.reflect.Method.invoke(Method.java:498) \\tat kd.bos.service.DispatchServiceImpl.invoke(DispatchServiceImpl.java:53) \\tat com.alibaba.dubbo.common.bytecode.Wrapper1.invokeMethod(Wrapper1.java) \\tat com.alibaba.dubbo.rpc.proxy.javassist.JavassistProxyFactory$1.doInvoke(JavassistProxyFactory.java:46) \\tat com.alibaba.dubbo.rpc.proxy.AbstractProxyInvoker.invoke(AbstractProxyInvoker.java:72) \\tat com.alibaba.dubbo.rpc.filter.ExceptionFilter.invoke(ExceptionFilter.java:64) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat kd.bos.service.filter.RequestContextFilter.lambda$invokeProviderSide$0(RequestContextFilter.java:132) \\tat kd.bos.dubbo.debug.DebugUtil.invoke(DebugUtil.java:153) \\tat kd.bos.service.filter.RequestContextFilter.invokeProviderSide(RequestContextFilter.java:126) \\tat kd.bos.service.filter.RequestContextFilter.invoke(RequestContextFilter.java:51) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.filter.TimeoutFilter.invoke(TimeoutFilter.java:23) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.protocol.dubbo.filter.TraceFilter.invoke(TraceFilter.java:78) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.monitor.support.MonitorFilter.invoke(MonitorFilter.java:75) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat kd.bos.metric.instruments.dubbo.ProviderMetricFilter.invoke(ProviderMetricFilter.java:113) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat kd.bos.trace.instrument.dubbo.ProviderSpanFilter.invoke(ProviderSpanFilter.java:75) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat kd.bos.service.filter.ThreadLifeCycleFilter.invoke(ThreadLifeCycleFilter.java:20) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.filter.ContextFilter.invoke(ContextFilter.java:70) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.filter.GenericFilter.invoke(GenericFilter.java:132) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.filter.ClassLoaderFilter.invoke(ClassLoaderFilter.java:38) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.filter.EchoFilter.invoke(EchoFilter.java:38) \\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91) \\tat com.alibaba.dubbo.rpc.protocol.dubbo.DubboProtocol$1.reply(DubboProtocol.java:113) \\tat com.alibaba.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.handleRequest(HeaderExchangeHandler.java:95) \\tat com.alibaba.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.received(HeaderExchangeHandler.java:202) \\tat com.alibaba.dubbo.remoting.transport.DecodeHandler.received(DecodeHandler.java:52) \\tat com.alibaba.dubbo.remoting.transport.dispatcher.ChannelEventRunnable.run(ChannelEventRunnable.java:92) \\t... 3 more"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685493447000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":5}]},"readingTime":{"minutes":2.16,"words":647},"filePathRelative":"zh/programBlog/ServerSideLanguage/Kingdee/63-金蝶云苍穹进入轻分析时弹出消息访问服务器过程出现错误如何解决？.md","localizedDate":"2020年3月5日","excerpt":"<!-- more -->\\n<h1> 63-金蝶云苍穹进入轻分析时弹出消息访问服务器过程出现错误如何解决？.md</h1>\\n<h4> 问题描述</h4>\\n<blockquote>\\n<p>如下图所示，云苍穹在进入轻分析时弹出两个如下提示框</p>\\n</blockquote>\\n<figure><img src=\\"/assets/Kingdee_63_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<blockquote>\\n<p>错误代码如下</p>\\n</blockquote>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>kd.bos.exception.KDException: Exception in invoke kd.bos.service.DispatchService(appId=), error is: null\\n\\tat kd.bos.dubbo.ProxyFactory$Handler.invoke(ProxyFactory.java:149)\\n\\tat com.sun.proxy.$Proxy37.invoke(Unknown Source)\\n\\tat kd.bos.servicehelper.DispatchServiceHelper.invokeBOSService(DispatchServiceHelper.java:99)\\n\\tat kd.bos.web.qing.impl.QingMServiceDispatcher.dispatch(QingMServiceDispatcher.java:14)\\n\\tat kd.bos.web.qing.impl.QingWebDispatcherImpl.dispatch(QingWebDispatcherImpl.java:13)\\n\\tat com.kingdee.bos.qing.common.framework.web.dependency.QingWebRequestDispatcher.asynDispatcher(QingWebRequestDispatcher.java:42)\\n\\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$ClientRemoteCallMessageHandler.dispatch(ClientMessageHandler.java:192)\\n\\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$ClientRemoteCallMessageHandler.handle(ClientMessageHandler.java:209)\\n\\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$ClientRemoteCallMessageHandler.handle(ClientMessageHandler.java:182)\\n\\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler.handle(ClientMessageHandler.java:133)\\n\\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler.access$500(ClientMessageHandler.java:39)\\n\\tat com.kingdee.bos.qing.common.framework.web.ClientMessageHandler$MessageHandlerTask.call(ClientMessageHandler.java:154)\\n\\tat com.kingdee.bos.qing.util.QingContextCallable.call(QingContextCallable.java:30)\\n\\tat kd.bos.thread.ThreadLifeCycleManager$CallableWrap.call(ThreadLifeCycleManager.java:200)\\n\\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\\n\\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\\n\\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\\n\\tat java.lang.Thread.run(Thread.java:748)\\nCaused by: java.lang.NullPointerException\\n\\tat com.kingdee.bos.qing.common.framework.server.task.AsynServerRequestInvoker.invoke(AsynServerRequestInvoker.java:35)\\n\\tat com.kingdee.bos.qing.common.framework.server.AbstractQingServerRequestDispatcher.asynDispatcher(AbstractQingServerRequestDispatcher.java:18)\\n\\tat sun.reflect.GeneratedMethodAccessor220.invoke(Unknown Source)\\n\\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\\n\\tat java.lang.reflect.Method.invoke(Method.java:498)\\n\\tat kd.bos.service.DispatchServiceImpl.invoke(DispatchServiceImpl.java:53)\\n\\tat com.alibaba.dubbo.common.bytecode.Wrapper1.invokeMethod(Wrapper1.java)\\n\\tat com.alibaba.dubbo.rpc.proxy.javassist.JavassistProxyFactory$1.doInvoke(JavassistProxyFactory.java:46)\\n\\tat com.alibaba.dubbo.rpc.proxy.AbstractProxyInvoker.invoke(AbstractProxyInvoker.java:72)\\n\\tat com.alibaba.dubbo.rpc.filter.ExceptionFilter.invoke(ExceptionFilter.java:64)\\n\\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)\\n\\tat kd.bos.service.filter.RequestContextFilter.lambda$invokeProviderSide$0(RequestContextFilter.java:132)\\n\\tat kd.bos.dubbo.debug.DebugUtil.invoke(DebugUtil.java:153)\\n\\tat kd.bos.service.filter.RequestContextFilter.invokeProviderSide(RequestContextFilter.java:126)\\n\\tat kd.bos.service.filter.RequestContextFilter.invoke(RequestContextFilter.java:51)\\n\\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)\\n\\tat com.alibaba.dubbo.rpc.filter.TimeoutFilter.invoke(TimeoutFilter.java:23)\\n\\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)\\n\\tat com.alibaba.dubbo.rpc.protocol.dubbo.filter.TraceFilter.invoke(TraceFilter.java:78)\\n\\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)\\n\\tat com.alibaba.dubbo.monitor.support.MonitorFilter.invoke(MonitorFilter.java:75)\\n\\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)\\n\\tat kd.bos.metric.instruments.dubbo.ProviderMetricFilter.invoke(ProviderMetricFilter.java:113)\\n\\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)\\n\\tat kd.bos.trace.instrument.dubbo.ProviderSpanFilter.invoke(ProviderSpanFilter.java:75)\\n\\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)\\n\\tat kd.bos.service.filter.ThreadLifeCycleFilter.invoke(ThreadLifeCycleFilter.java:20)\\n\\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)\\n\\tat com.alibaba.dubbo.rpc.filter.ContextFilter.invoke(ContextFilter.java:70)\\n\\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)\\n\\tat com.alibaba.dubbo.rpc.filter.GenericFilter.invoke(GenericFilter.java:132)\\n\\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)\\n\\tat com.alibaba.dubbo.rpc.filter.ClassLoaderFilter.invoke(ClassLoaderFilter.java:38)\\n\\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)\\n\\tat com.alibaba.dubbo.rpc.filter.EchoFilter.invoke(EchoFilter.java:38)\\n\\tat com.alibaba.dubbo.rpc.protocol.ProtocolFilterWrapper$1.invoke(ProtocolFilterWrapper.java:91)\\n\\tat com.alibaba.dubbo.rpc.protocol.dubbo.DubboProtocol$1.reply(DubboProtocol.java:113)\\n\\tat com.alibaba.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.handleRequest(HeaderExchangeHandler.java:95)\\n\\tat com.alibaba.dubbo.remoting.exchange.support.header.HeaderExchangeHandler.received(HeaderExchangeHandler.java:202)\\n\\tat com.alibaba.dubbo.remoting.transport.DecodeHandler.received(DecodeHandler.java:52)\\n\\tat com.alibaba.dubbo.remoting.transport.dispatcher.ChannelEventRunnable.run(ChannelEventRunnable.java:92)\\n\\t... 3 more\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
