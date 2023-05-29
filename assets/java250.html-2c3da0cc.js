const t=JSON.parse('{"key":"v-1e070262","path":"/zh/programBlog/ServerSideLanguage/Java/java250.html","title":"Java网络编程-实现客户端与服务器多对一循环聊天","lang":"zh-CN","frontmatter":{"title":"Java网络编程-实现客户端与服务器多对一循环聊天","icon":"page","order":250,"author":"涎涎","date":"2023-01-18T15:17:35.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java250.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java网络编程-实现客户端与服务器多对一循环聊天"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java250.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java网络编程-实现客户端与服务器多对一循环聊天"}],["meta",{"property":"og:description","content":"250-Java网络编程-实现客户端与服务器多对一循环聊天.md 概念 示例代码 package com.tencent.chapter05; import java.io.IOException; import java.net.ServerSocket; import java.net.Socket; //服务器 public class T_Server { \\tpublic static void main(String[] args) { \\t\\tServerSocket ss = null; \\t\\tSocket socket = null; \\t\\ttry { \\t\\t\\t//1.启动服务器 \\t\\t\\tss = new ServerSocket(8888); \\t\\t\\tSystem.out.println(\\"服务器已启动....\\"); \\t\\t\\t \\t\\t\\twhile(true) \\t\\t\\t{ \\t\\t\\t\\t//2.等待客户端连接 \\t\\t\\t\\tsocket = ss.accept();//阻塞式方式，直到客户端连接进来，后续代码才能继续执行 \\t\\t\\t\\tSystem.out.println(\\"有新的客户端连接进来........\\" + socket.getInetAddress() + \\":\\" + socket.getPort()); \\t\\t\\t\\t \\t\\t\\t\\t//开启一个线程专门负责与客户端聊天 \\t\\t\\t\\tT_Server_Thread t1 =new T_Server_Thread(socket); \\t\\t\\t\\tt1.start(); \\t\\t\\t} \\t\\t\\t \\t\\t} catch (IOException e) { \\t\\t\\te.printStackTrace(); \\t\\t} finally{ \\t\\t\\t//8.关闭资源、释放资源 \\t\\t\\ttry { \\t\\t\\t\\tif(socket != null) \\t\\t\\t\\t{ \\t\\t\\t\\t\\tsocket.close(); \\t\\t\\t\\t} \\t\\t\\t} catch (IOException e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t\\ttry { \\t\\t\\t\\tif(ss != null) \\t\\t\\t\\t{ \\t\\t\\t\\t\\tss.close(); \\t\\t\\t\\t} \\t\\t\\t} catch (IOException e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t} \\t} \\t }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-18T15:17:35.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java网络编程-实现客户端与服务器多对一循环聊天\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-18T15:17:35.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"250-Java网络编程-实现客户端与服务器多对一循环聊天.md 概念 示例代码 package com.tencent.chapter05; import java.io.IOException; import java.net.ServerSocket; import java.net.Socket; //服务器 public class T_Server { \\tpublic static void main(String[] args) { \\t\\tServerSocket ss = null; \\t\\tSocket socket = null; \\t\\ttry { \\t\\t\\t//1.启动服务器 \\t\\t\\tss = new ServerSocket(8888); \\t\\t\\tSystem.out.println(\\"服务器已启动....\\"); \\t\\t\\t \\t\\t\\twhile(true) \\t\\t\\t{ \\t\\t\\t\\t//2.等待客户端连接 \\t\\t\\t\\tsocket = ss.accept();//阻塞式方式，直到客户端连接进来，后续代码才能继续执行 \\t\\t\\t\\tSystem.out.println(\\"有新的客户端连接进来........\\" + socket.getInetAddress() + \\":\\" + socket.getPort()); \\t\\t\\t\\t \\t\\t\\t\\t//开启一个线程专门负责与客户端聊天 \\t\\t\\t\\tT_Server_Thread t1 =new T_Server_Thread(socket); \\t\\t\\t\\tt1.start(); \\t\\t\\t} \\t\\t\\t \\t\\t} catch (IOException e) { \\t\\t\\te.printStackTrace(); \\t\\t} finally{ \\t\\t\\t//8.关闭资源、释放资源 \\t\\t\\ttry { \\t\\t\\t\\tif(socket != null) \\t\\t\\t\\t{ \\t\\t\\t\\t\\tsocket.close(); \\t\\t\\t\\t} \\t\\t\\t} catch (IOException e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t\\ttry { \\t\\t\\t\\tif(ss != null) \\t\\t\\t\\t{ \\t\\t\\t\\t\\tss.close(); \\t\\t\\t\\t} \\t\\t\\t} catch (IOException e) { \\t\\t\\t\\te.printStackTrace(); \\t\\t\\t} \\t\\t} \\t} \\t }"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":2.78,"words":834},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/250-Java网络编程-实现客户端与服务器多对一循环聊天.md","localizedDate":"2023年1月18日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--250-Java--375nzem99cg3l99iqgo68a7bx5gb61b75l3wy8q7dma9510b9wen04a0mbf8b3yo.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">250-Java网络编程-实现客户端与服务器多对一循环聊天.md</a></h1>\\n<h4> 概念</h4>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter05;\\n\\nimport java.io.IOException;\\nimport java.net.ServerSocket;\\nimport java.net.Socket;\\n\\n//服务器\\npublic class T_Server {\\n\\n\\tpublic static void main(String[] args) {\\n\\t\\tServerSocket ss = null;\\n\\t\\tSocket socket = null;\\n\\t\\ttry {\\n\\t\\t\\t//1.启动服务器\\n\\t\\t\\tss = new ServerSocket(8888);\\n\\t\\t\\tSystem.out.println(\\"服务器已启动....\\");\\n\\t\\t\\t\\n\\t\\t\\twhile(true)\\n\\t\\t\\t{\\n\\t\\t\\t\\t//2.等待客户端连接\\n\\t\\t\\t\\tsocket = ss.accept();//阻塞式方式，直到客户端连接进来，后续代码才能继续执行\\n\\t\\t\\t\\tSystem.out.println(\\"有新的客户端连接进来........\\" + socket.getInetAddress() + \\":\\" + socket.getPort());\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t//开启一个线程专门负责与客户端聊天\\n\\t\\t\\t\\tT_Server_Thread t1 =new T_Server_Thread(socket);\\n\\t\\t\\t\\tt1.start();\\n\\t\\t\\t}\\n\\t\\t\\t\\n\\t\\t} catch (IOException e) {\\n\\t\\t\\te.printStackTrace();\\n\\t\\t} finally{\\n\\t\\t\\t//8.关闭资源、释放资源\\n\\t\\t\\ttry {\\n\\t\\t\\t\\tif(socket != null)\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\tsocket.close();\\n\\t\\t\\t\\t}\\n\\t\\t\\t} catch (IOException e) {\\n\\t\\t\\t\\te.printStackTrace();\\n\\t\\t\\t}\\n\\t\\t\\ttry {\\n\\t\\t\\t\\tif(ss != null)\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\tss.close();\\n\\t\\t\\t\\t}\\n\\t\\t\\t} catch (IOException e) {\\n\\t\\t\\t\\te.printStackTrace();\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\t\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};