const e=JSON.parse(`{"key":"v-96a0b960","path":"/zh/programBlog/ServerSideLanguage/Kingdee/132-SQL%E6%9F%A5%E8%AF%A2%E6%97%B6%E6%8A%A5%E9%94%99Caused%20exception%20message%20is%20translate%20sql%20exception%20message%20is%20%20parse%20error%20detail%20message%20is.html","title":"SQL查询时报错Caused exception message is translate sql exception message is  parse error detail message is","lang":"zh-CN","frontmatter":{"title":"SQL查询时报错Caused exception message is translate sql exception message is  parse error detail message is","icon":"page","order":132,"author":"涎涎","date":"2020-05-29T15:36:49.000Z","isOriginal":true,"category":["Kingdee"],"tag":["Kingdee"],"head":[["meta",{"name":"keywords","content":"SQL查询时报错Caused exception message is translate sql exception message is  parse error detail message is"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Kingdee/132-SQL%E6%9F%A5%E8%AF%A2%E6%97%B6%E6%8A%A5%E9%94%99Caused%20exception%20message%20is%20translate%20sql%20exception%20message%20is%20%20parse%20error%20detail%20message%20is.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"SQL查询时报错Caused exception message is translate sql exception message is  parse error detail message is"}],["meta",{"property":"og:description","content":"132-SQL查询时报错Caused exception message is translate sql exception message is parse error detail message is.md 详细报错如下: 错误信息：null Caused exception message is: translate sql exception, message is parse error. detail message is : unexcept token. token is : 'r', at line 1 column 153, token type is 'Identifier' source sql is : SELECT v.fnumber FROM T_GL_Voucher v inner join T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = 'umYAAABSs+Y7c00s' and m.FNAME = 'RZZLHT-PZ-BJ' 错误详细堆栈信息：com.kingdee.bos.SQLDataException: null Caused exception message is: translate sql exception, message is parse error. detail message is : unexcept token. token is : 'r', at line 1 column 153, token type is 'Identifier' source sql is : SELECT v.fnumber FROM T_GL_Voucher v inner join T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = 'umYAAABSs+Y7c00s' and m.FNAME = 'RZZLHT-PZ-BJ' \\tat com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:112) \\tat rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.pi4(Unknown Source) \\tat rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.processInvoke(Unknown Source) \\tat com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177) \\tat com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800) \\tat com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141) \\tat com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153) \\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441) \\tat java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303) \\tat java.util.concurrent.FutureTask.run(FutureTask.java:138) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622) \\tat java.lang.Thread.run(Thread.java:662) Caused by: java.sql.SQLException: translate sql exception, message is parse error. detail message is : unexcept token. token is : 'r', at line 1 column 153, token type is 'Identifier' source sql is : SELECT v.fnumber FROM T_GL_Voucher v inner join T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = 'umYAAABSs+Y7c00s' and m.FNAME = 'RZZLHT-PZ-BJ' \\tat com.kingdee.bos.sql.shell.KDConnection.getSql(KDConnection.java:278) \\tat com.kingdee.bos.sql.shell.KDConnection.prepareStatement(KDConnection.java:314) \\tat com.apusic.jdbc.adapter.ConnectionHandle.prepareStatement(Unknown Source) \\tat com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:72) \\t... 12 more Caused by: java.sql.SQLException java.sql.SQLException: translate sql exception, message is parse error. detail message is : unexcept token. token is : 'r', at line 1 column 153, token type is 'Identifier' source sql is : SELECT v.fnumber FROM T_GL_Voucher v inner join T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = 'umYAAABSs+Y7c00s' and m.FNAME = 'RZZLHT-PZ-BJ' \\tat com.kingdee.bos.sql.shell.KDConnection.getSql(KDConnection.java:278) \\tat com.kingdee.bos.sql.shell.KDConnection.prepareStatement(KDConnection.java:314) \\tat com.apusic.jdbc.adapter.ConnectionHandle.prepareStatement(Unknown Source) \\tat com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:72) \\tat rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.pi4(Unknown Source) \\tat rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.processInvoke(Unknown Source) \\tat com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177) \\tat com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800) \\tat com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141) \\tat com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153) \\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441) \\tat java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303) \\tat java.util.concurrent.FutureTask.run(FutureTask.java:138) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622) \\tat java.lang.Thread.run(Thread.java:662)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Kingdee"}],["meta",{"property":"article:published_time","content":"2020-05-29T15:36:49.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL查询时报错Caused exception message is translate sql exception message is  parse error detail message is\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-29T15:36:49.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"132-SQL查询时报错Caused exception message is translate sql exception message is parse error detail message is.md 详细报错如下: 错误信息：null Caused exception message is: translate sql exception, message is parse error. detail message is : unexcept token. token is : 'r', at line 1 column 153, token type is 'Identifier' source sql is : SELECT v.fnumber FROM T_GL_Voucher v inner join T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = 'umYAAABSs+Y7c00s' and m.FNAME = 'RZZLHT-PZ-BJ' 错误详细堆栈信息：com.kingdee.bos.SQLDataException: null Caused exception message is: translate sql exception, message is parse error. detail message is : unexcept token. token is : 'r', at line 1 column 153, token type is 'Identifier' source sql is : SELECT v.fnumber FROM T_GL_Voucher v inner join T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = 'umYAAABSs+Y7c00s' and m.FNAME = 'RZZLHT-PZ-BJ' \\tat com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:112) \\tat rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.pi4(Unknown Source) \\tat rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.processInvoke(Unknown Source) \\tat com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177) \\tat com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800) \\tat com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141) \\tat com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153) \\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441) \\tat java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303) \\tat java.util.concurrent.FutureTask.run(FutureTask.java:138) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622) \\tat java.lang.Thread.run(Thread.java:662) Caused by: java.sql.SQLException: translate sql exception, message is parse error. detail message is : unexcept token. token is : 'r', at line 1 column 153, token type is 'Identifier' source sql is : SELECT v.fnumber FROM T_GL_Voucher v inner join T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = 'umYAAABSs+Y7c00s' and m.FNAME = 'RZZLHT-PZ-BJ' \\tat com.kingdee.bos.sql.shell.KDConnection.getSql(KDConnection.java:278) \\tat com.kingdee.bos.sql.shell.KDConnection.prepareStatement(KDConnection.java:314) \\tat com.apusic.jdbc.adapter.ConnectionHandle.prepareStatement(Unknown Source) \\tat com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:72) \\t... 12 more Caused by: java.sql.SQLException java.sql.SQLException: translate sql exception, message is parse error. detail message is : unexcept token. token is : 'r', at line 1 column 153, token type is 'Identifier' source sql is : SELECT v.fnumber FROM T_GL_Voucher v inner join T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = 'umYAAABSs+Y7c00s' and m.FNAME = 'RZZLHT-PZ-BJ' \\tat com.kingdee.bos.sql.shell.KDConnection.getSql(KDConnection.java:278) \\tat com.kingdee.bos.sql.shell.KDConnection.prepareStatement(KDConnection.java:314) \\tat com.apusic.jdbc.adapter.ConnectionHandle.prepareStatement(Unknown Source) \\tat com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:72) \\tat rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.pi4(Unknown Source) \\tat rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.processInvoke(Unknown Source) \\tat com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177) \\tat com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800) \\tat com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141) \\tat com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153) \\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441) \\tat java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303) \\tat java.util.concurrent.FutureTask.run(FutureTask.java:138) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152) \\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622) \\tat java.lang.Thread.run(Thread.java:662)"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":2.32,"words":695},"filePathRelative":"zh/programBlog/ServerSideLanguage/Kingdee/132-SQL查询时报错Caused exception message is translate sql exception message is  parse error detail message is.md","localizedDate":"2020年5月29日","excerpt":"<!-- more -->\\n<h1> 132-SQL查询时报错Caused exception message is translate sql exception message is  parse error detail message <a href=\\"http://is.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">is.md</a></h1>\\n<p>详细报错如下:</p>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>错误信息：null\\nCaused exception message is: translate sql exception, message is \\nparse error. detail message is :\\nunexcept token. token is : 'r', at line 1 column 153, token type is 'Identifier'\\nsource sql is : \\nSELECT v.fnumber FROM T_GL_Voucher v inner join  T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = 'umYAAABSs+Y7c00s' and m.FNAME = 'RZZLHT-PZ-BJ'\\n错误详细堆栈信息：com.kingdee.bos.SQLDataException: null\\nCaused exception message is: translate sql exception, message is \\nparse error. detail message is :\\nunexcept token. token is : 'r', at line 1 column 153, token type is 'Identifier'\\nsource sql is : \\nSELECT v.fnumber FROM T_GL_Voucher v inner join  T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = 'umYAAABSs+Y7c00s' and m.FNAME = 'RZZLHT-PZ-BJ'\\n\\tat com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:112)\\n\\tat rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.pi4(Unknown Source)\\n\\tat rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.processInvoke(Unknown Source)\\n\\tat com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177)\\n\\tat com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800)\\n\\tat com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141)\\n\\tat com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153)\\n\\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441)\\n\\tat java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303)\\n\\tat java.util.concurrent.FutureTask.run(FutureTask.java:138)\\n\\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152)\\n\\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622)\\n\\tat java.lang.Thread.run(Thread.java:662)\\nCaused by: java.sql.SQLException: translate sql exception, message is \\nparse error. detail message is :\\nunexcept token. token is : 'r', at line 1 column 153, token type is 'Identifier'\\nsource sql is : \\nSELECT v.fnumber FROM T_GL_Voucher v inner join  T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = 'umYAAABSs+Y7c00s' and m.FNAME = 'RZZLHT-PZ-BJ'\\n\\tat com.kingdee.bos.sql.shell.KDConnection.getSql(KDConnection.java:278)\\n\\tat com.kingdee.bos.sql.shell.KDConnection.prepareStatement(KDConnection.java:314)\\n\\tat com.apusic.jdbc.adapter.ConnectionHandle.prepareStatement(Unknown Source)\\n\\tat com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:72)\\n\\t... 12 more\\nCaused by: java.sql.SQLException\\njava.sql.SQLException: translate sql exception, message is \\nparse error. detail message is :\\nunexcept token. token is : 'r', at line 1 column 153, token type is 'Identifier'\\nsource sql is : \\nSELECT v.fnumber FROM T_GL_Voucher v inner join  T_BOT_Relation r on v.fid = r.FDESTOBJECTID inner join T_BOT_Mapping m on r.FBOTMAPPINGID = m.fidwhere r.FSRCOBJECTID = 'umYAAABSs+Y7c00s' and m.FNAME = 'RZZLHT-PZ-BJ'\\n\\tat com.kingdee.bos.sql.shell.KDConnection.getSql(KDConnection.java:278)\\n\\tat com.kingdee.bos.sql.shell.KDConnection.prepareStatement(KDConnection.java:314)\\n\\tat com.apusic.jdbc.adapter.ConnectionHandle.prepareStatement(Unknown Source)\\n\\tat com.kingdee.bos.dao.query.server.SQLDataAccess.getRowSet(SQLDataAccess.java:72)\\n\\tat rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.pi4(Unknown Source)\\n\\tat rpc_generate._PROXY_com_1_kingdee_1_bos_1_dao_1_query_1_server_1_ISQLDataAccess.processInvoke(Unknown Source)\\n\\tat com.kingdee.bos.rpc.impl.ObjectProxy.processInvoke(ObjectProxy.java:177)\\n\\tat com.kingdee.bos.rpc.impl.RPCService.serviceInvoke(RPCService.java:800)\\n\\tat com.kingdee.bos.rpc.impl.RPCService.service(RPCService.java:141)\\n\\tat com.kingdee.bos.rpc.impl.ServiceDispatcher.run(ServiceDispatcher.java:153)\\n\\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441)\\n\\tat java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303)\\n\\tat java.util.concurrent.FutureTask.run(FutureTask.java:138)\\n\\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl.runWorker(ThreadPoolExecutorReImpl.java:1152)\\n\\tat com.kingdee.bos.rpc.impl.ThreadPoolExecutorReImpl$Worker.run(ThreadPoolExecutorReImpl.java:622)\\n\\tat java.lang.Thread.run(Thread.java:662)\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
