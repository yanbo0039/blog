const e=JSON.parse('{"key":"v-7b5a0a08","path":"/zh/java155/","title":"Java-网络编程实现简单的群聊功能","lang":"zh-CN","frontmatter":{"title":"Java-网络编程实现简单的群聊功能","icon":"page","order":155,"author":"涎涎","date":"2019-07-19T14:14:13.000Z","isOriginal":true,"permalinkPattern":"java155","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-网络编程实现简单的群聊功能"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/java155/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-网络编程实现简单的群聊功能"}],["meta",{"property":"og:description","content":"155-Java-网络编程实现简单的群聊功能.md package chat3.client; import java.io.BufferedReader; import java.io.InputStreamReader; import java.net.Socket; /** * * &lt;p&gt;Title: MyClient_receivemess_thread&lt;/p&gt; * &lt;p&gt; *\\tDescription: *\\t收信息的线程 * &lt;/p&gt; * @author xianxian * @date 2019年7月19日 */ public class MyClient_receivemess_thread implements Runnable { \\tprivate Socket client; \\t \\tpublic MyClient_receivemess_thread(Socket client) { \\t\\tsuper(); \\t\\tthis.client = client; \\t} \\t@Override \\tpublic void run() { \\t\\ttry( \\t\\t\\t\\tBufferedReader br = new BufferedReader(new InputStreamReader(client.getInputStream())); \\t\\t\\t\\t){ \\t\\t\\twhile (true) { \\t\\t\\t\\tString message = br.readLine(); \\t\\t\\t\\tSystem.out.println(message); \\t\\t\\t} \\t\\t}catch(Exception e) { \\t\\t\\te.printStackTrace(); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-19T14:14:13.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-网络编程实现简单的群聊功能\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-19T14:14:13.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"155-Java-网络编程实现简单的群聊功能.md package chat3.client; import java.io.BufferedReader; import java.io.InputStreamReader; import java.net.Socket; /** * * &lt;p&gt;Title: MyClient_receivemess_thread&lt;/p&gt; * &lt;p&gt; *\\tDescription: *\\t收信息的线程 * &lt;/p&gt; * @author xianxian * @date 2019年7月19日 */ public class MyClient_receivemess_thread implements Runnable { \\tprivate Socket client; \\t \\tpublic MyClient_receivemess_thread(Socket client) { \\t\\tsuper(); \\t\\tthis.client = client; \\t} \\t@Override \\tpublic void run() { \\t\\ttry( \\t\\t\\t\\tBufferedReader br = new BufferedReader(new InputStreamReader(client.getInputStream())); \\t\\t\\t\\t){ \\t\\t\\twhile (true) { \\t\\t\\t\\tString message = br.readLine(); \\t\\t\\t\\tSystem.out.println(message); \\t\\t\\t} \\t\\t}catch(Exception e) { \\t\\t\\te.printStackTrace(); \\t\\t} \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":3.2,"words":961},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/155-Java-网络编程实现简单的群聊功能.md","localizedDate":"2019年7月19日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--155-Java--3v5or6dgx8b0q5ewji5wnuufvrq33a85ax1cv3ft6e.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">155-Java-网络编程实现简单的群聊功能.md</a></h1>\\n<figure><img src=\\"/assets/Java_155_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package chat3.client;\\n\\nimport java.io.BufferedReader;\\nimport java.io.InputStreamReader;\\nimport java.net.Socket;\\n\\n/**\\n * \\n* &lt;p&gt;Title: MyClient_receivemess_thread&lt;/p&gt;  \\n* &lt;p&gt;\\n*\\tDescription: \\n*\\t收信息的线程\\n* &lt;/p&gt; \\n* @author xianxian \\n* @date 2019年7月19日\\n */\\npublic class MyClient_receivemess_thread implements Runnable {\\n\\n\\tprivate Socket client;\\n\\t\\n\\tpublic MyClient_receivemess_thread(Socket client) {\\n\\t\\tsuper();\\n\\t\\tthis.client = client;\\n\\t}\\n\\t@Override\\n\\tpublic void run() {\\n\\t\\ttry(\\n\\t\\t\\t\\tBufferedReader br = new BufferedReader(new InputStreamReader(client.getInputStream()));\\n\\t\\t\\t\\t){\\n\\t\\t\\twhile (true) {\\n\\t\\t\\t\\tString message = br.readLine();\\n\\t\\t\\t\\tSystem.out.println(message);\\n\\t\\t\\t}\\n\\t\\t}catch(Exception e) {\\n\\t\\t\\te.printStackTrace();\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
