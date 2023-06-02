const e=JSON.parse('{"key":"v-1a9d5124","path":"/zh/programBlog/ServerSideLanguage/Java/java251.html","title":"Java络编程-实现客户端与客户端循环聊天_带思路","lang":"zh-CN","frontmatter":{"title":"Java络编程-实现客户端与客户端循环聊天_带思路","icon":"page","order":251,"author":"涎涎","date":"2023-01-18T16:27:44.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java251.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java络编程-实现客户端与客户端循环聊天_带思路"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java251.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java络编程-实现客户端与客户端循环聊天_带思路"}],["meta",{"property":"og:description","content":"251-Java络编程-实现客户端与客户端循环聊天_带思路.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 示例代码 package com.tencent.chapter05.带思路版; import java.io.BufferedReader; import java.io.IOException; import java.io.InputStreamReader; import java.net.Socket; //客户端：接收消息线程 public class T_Client_Thread_Receive extends Thread { \\tprivate Socket socket; \\t \\tpublic T_Client_Thread_Receive(Socket socket) \\t{ \\t\\tthis.socket = socket; \\t} \\t \\t@Override \\tpublic void run() { \\t\\ttry { \\t\\t\\twhile(true) \\t\\t\\t{ \\t\\t\\t\\tBufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));//字符流 一行一行读取数据 \\t\\t\\t\\tString message = reader.readLine(); \\t\\t\\t\\t \\t\\t\\t\\tSystem.out.println(\\"服务端说：\\" + message); \\t\\t\\t} \\t\\t} catch (IOException e) { \\t\\t\\te.printStackTrace(); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T05:58:29.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-18T16:27:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T05:58:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java络编程-实现客户端与客户端循环聊天_带思路\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-18T16:27:44.000Z\\",\\"dateModified\\":\\"2023-06-02T05:58:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"251-Java络编程-实现客户端与客户端循环聊天_带思路.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 示例代码 package com.tencent.chapter05.带思路版; import java.io.BufferedReader; import java.io.IOException; import java.io.InputStreamReader; import java.net.Socket; //客户端：接收消息线程 public class T_Client_Thread_Receive extends Thread { \\tprivate Socket socket; \\t \\tpublic T_Client_Thread_Receive(Socket socket) \\t{ \\t\\tthis.socket = socket; \\t} \\t \\t@Override \\tpublic void run() { \\t\\ttry { \\t\\t\\twhile(true) \\t\\t\\t{ \\t\\t\\t\\tBufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));//字符流 一行一行读取数据 \\t\\t\\t\\tString message = reader.readLine(); \\t\\t\\t\\t \\t\\t\\t\\tSystem.out.println(\\"服务端说：\\" + message); \\t\\t\\t} \\t\\t} catch (IOException e) { \\t\\t\\te.printStackTrace(); \\t\\t} \\t} }"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685685509000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":4}]},"readingTime":{"minutes":3.39,"words":1017},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/251-Java络编程-实现客户端与客户端循环聊天_带思路.md","localizedDate":"2023年1月18日","excerpt":"<!-- more -->\\n<h1> 251-Java络编程-实现客户端与客户端循环聊天_带思路.md</h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter05.带思路版;\\n\\nimport java.io.BufferedReader;\\nimport java.io.IOException;\\nimport java.io.InputStreamReader;\\nimport java.net.Socket;\\n\\n//客户端：接收消息线程\\npublic class T_Client_Thread_Receive extends Thread {\\n\\n\\tprivate Socket socket;\\n\\t\\n\\tpublic T_Client_Thread_Receive(Socket socket)\\n\\t{\\n\\t\\tthis.socket = socket;\\n\\t}\\n\\t\\n\\t@Override\\n\\tpublic void run() {\\n\\t\\ttry {\\n\\t\\t\\twhile(true)\\n\\t\\t\\t{\\n\\t\\t\\t\\tBufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));//字符流  一行一行读取数据\\n\\t\\t\\t\\tString message = reader.readLine();\\n\\t\\t\\t\\t\\n\\t\\t\\t\\tSystem.out.println(\\"服务端说：\\" + message);\\n\\t\\t\\t}\\n\\t\\t} catch (IOException e) {\\n\\t\\t\\te.printStackTrace();\\n\\t\\t} \\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
