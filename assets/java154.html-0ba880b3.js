const e=JSON.parse('{"key":"v-e0229728","path":"/zh/programBlog/ServerSideLanguage/Java/java154.html","title":"Java-使用套接字模拟服务端和客户端进行通信","lang":"zh-CN","frontmatter":{"title":"Java-使用套接字模拟服务端和客户端进行通信","icon":"page","order":154,"author":"涎涎","date":"2019-07-18T16:17:48.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java154.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-使用套接字模拟服务端和客户端进行通信"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java154.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-使用套接字模拟服务端和客户端进行通信"}],["meta",{"property":"og:description","content":"154-Java-使用套接字模拟服务端和客户端进行通信.md package 网络编程; import java.io.IOException; import java.net.ServerSocket; public class TestServer { \\tpublic static void main(String[] args) { \\t\\t//创建服务端套接字，调用accept方法一直监听客户端的访问请求 \\t\\tServerSocket server; \\t\\ttry { \\t\\t\\tserver = new ServerSocket(5791); \\t\\t\\tserver.accept(); \\t\\t\\tSystem.out.println(\\"client connect me......\\"); \\t\\t} catch (IOException e) { \\t\\t\\te.printStackTrace(); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-31T00:37:27.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-18T16:17:48.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-31T00:37:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-使用套接字模拟服务端和客户端进行通信\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-18T16:17:48.000Z\\",\\"dateModified\\":\\"2023-05-31T00:37:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"154-Java-使用套接字模拟服务端和客户端进行通信.md package 网络编程; import java.io.IOException; import java.net.ServerSocket; public class TestServer { \\tpublic static void main(String[] args) { \\t\\t//创建服务端套接字，调用accept方法一直监听客户端的访问请求 \\t\\tServerSocket server; \\t\\ttry { \\t\\t\\tserver = new ServerSocket(5791); \\t\\t\\tserver.accept(); \\t\\t\\tSystem.out.println(\\"client connect me......\\"); \\t\\t} catch (IOException e) { \\t\\t\\te.printStackTrace(); \\t\\t} \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685493447000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":5}]},"readingTime":{"minutes":1.16,"words":348},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/154-Java-使用套接字模拟服务端和客户端进行通信.md","localizedDate":"2019年7月18日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--154-Java--jd9nw7am5vnug0ptp7gm8ap06ekucp5empx0hpmh1de11ada9366focybwnb.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">154-Java-使用套接字模拟服务端和客户端进行通信.md</a></h1>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package 网络编程;\\n\\nimport java.io.IOException;\\nimport java.net.ServerSocket;\\n\\npublic class TestServer {\\n\\n\\tpublic static void main(String[] args) {\\n \\n\\t\\t//创建服务端套接字，调用accept方法一直监听客户端的访问请求\\n\\t\\tServerSocket server;\\n\\t\\ttry {\\n\\t\\t\\tserver = new ServerSocket(5791);\\n\\t\\t\\tserver.accept();\\n\\t\\t\\tSystem.out.println(\\"client connect me......\\");\\n\\t\\t} catch (IOException e) {\\n\\t\\t\\te.printStackTrace();\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};