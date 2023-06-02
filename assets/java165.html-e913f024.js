const n=JSON.parse('{"key":"v-72ec6f68","path":"/zh/programBlog/ServerSideLanguage/Java/java165.html","title":"Java-Servlet的生命周期","lang":"zh-CN","frontmatter":{"title":"Java-Servlet的生命周期","icon":"page","order":165,"author":"涎涎","date":"2019-09-02T15:53:22.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java165.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-Servlet的生命周期"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java165.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-Servlet的生命周期"}],["meta",{"property":"og:description","content":"165-Java-Servlet的生命周期.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 package net.tencent.my12306.controller; import java.io.IOException; import javax.servlet.ServletException; import javax.servlet.annotation.WebServlet; import javax.servlet.http.HttpServlet; import javax.servlet.http.HttpServletRequest; import javax.servlet.http.HttpServletResponse; /** * Servlet implementation class LifeServlet */ @WebServlet(\\"/LifeServlet\\") public class LifeServlet extends HttpServlet { \\tprivate static final long serialVersionUID = 1L; /** * @see HttpServlet#HttpServlet() */ public LifeServlet() { \\tSystem.out.println(\\"构造方法\\"); } \\t/** \\t * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response) \\t */ \\tprotected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { \\t\\tSystem.out.println(\\"doGet()方法。。。\\"); \\t} \\t/** \\t * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response) \\t */ \\tprotected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { \\t\\tSystem.out.println(\\"doPost()方法。。。\\"); \\t} \\t@Override \\tprotected void service(HttpServletRequest arg0, HttpServletResponse arg1) throws ServletException, IOException { \\t\\tsuper.service(arg0, arg1); System.out.println(\\"service()方法。。。。\\"); \\t} \\t@Override \\tpublic void destroy() { //\\t\\tsuper.destroy(); \\t\\tSystem.out.println(\\"destory()方法。。。。。\\"); \\t} \\t@Override \\tpublic void init() throws ServletException { //\\t\\tsuper.init(); \\t\\tSystem.out.println(\\"init()方法。。。。。\\"); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T05:58:29.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-09-02T15:53:22.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T05:58:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-Servlet的生命周期\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-02T15:53:22.000Z\\",\\"dateModified\\":\\"2023-06-02T05:58:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"165-Java-Servlet的生命周期.md 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 package net.tencent.my12306.controller; import java.io.IOException; import javax.servlet.ServletException; import javax.servlet.annotation.WebServlet; import javax.servlet.http.HttpServlet; import javax.servlet.http.HttpServletRequest; import javax.servlet.http.HttpServletResponse; /** * Servlet implementation class LifeServlet */ @WebServlet(\\"/LifeServlet\\") public class LifeServlet extends HttpServlet { \\tprivate static final long serialVersionUID = 1L; /** * @see HttpServlet#HttpServlet() */ public LifeServlet() { \\tSystem.out.println(\\"构造方法\\"); } \\t/** \\t * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response) \\t */ \\tprotected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { \\t\\tSystem.out.println(\\"doGet()方法。。。\\"); \\t} \\t/** \\t * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response) \\t */ \\tprotected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { \\t\\tSystem.out.println(\\"doPost()方法。。。\\"); \\t} \\t@Override \\tprotected void service(HttpServletRequest arg0, HttpServletResponse arg1) throws ServletException, IOException { \\t\\tsuper.service(arg0, arg1); System.out.println(\\"service()方法。。。。\\"); \\t} \\t@Override \\tpublic void destroy() { //\\t\\tsuper.destroy(); \\t\\tSystem.out.println(\\"destory()方法。。。。。\\"); \\t} \\t@Override \\tpublic void init() throws ServletException { //\\t\\tsuper.init(); \\t\\tSystem.out.println(\\"init()方法。。。。。\\"); \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685685509000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":6}]},"readingTime":{"minutes":1.25,"words":376},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/165-Java-Servlet的生命周期.md","localizedDate":"2019年9月2日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--165-Java-Servlet-vd21a1k5431a6rwcgeg.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">165-Java-Servlet的生命周期.md</a></h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">package</span> <span class=\\"token namespace\\">net<span class=\\"token punctuation\\">.</span>tencent<span class=\\"token punctuation\\">.</span>my12306<span class=\\"token punctuation\\">.</span>controller</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">java<span class=\\"token punctuation\\">.</span>io<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">IOException</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">javax<span class=\\"token punctuation\\">.</span>servlet<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">ServletException</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">javax<span class=\\"token punctuation\\">.</span>servlet<span class=\\"token punctuation\\">.</span>annotation<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">WebServlet</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">javax<span class=\\"token punctuation\\">.</span>servlet<span class=\\"token punctuation\\">.</span>http<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">HttpServlet</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">javax<span class=\\"token punctuation\\">.</span>servlet<span class=\\"token punctuation\\">.</span>http<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">HttpServletRequest</span></span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token import\\"><span class=\\"token namespace\\">javax<span class=\\"token punctuation\\">.</span>servlet<span class=\\"token punctuation\\">.</span>http<span class=\\"token punctuation\\">.</span></span><span class=\\"token class-name\\">HttpServletResponse</span></span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token doc-comment comment\\">/**\\n * Servlet implementation class LifeServlet\\n */</span>\\n<span class=\\"token annotation punctuation\\">@WebServlet</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/LifeServlet\\"</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">LifeServlet</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">HttpServlet</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">final</span> <span class=\\"token keyword\\">long</span> serialVersionUID <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1L</span><span class=\\"token punctuation\\">;</span>\\n       \\n    <span class=\\"token doc-comment comment\\">/**\\n     * <span class=\\"token keyword\\">@see</span> <span class=\\"token reference\\"><span class=\\"token class-name\\">HttpServlet</span><span class=\\"token punctuation\\">#</span><span class=\\"token function\\">HttpServlet</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span></span>\\n     */</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">LifeServlet</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    \\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"构造方法\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n\\t<span class=\\"token doc-comment comment\\">/**\\n\\t * <span class=\\"token keyword\\">@see</span> <span class=\\"token reference\\"><span class=\\"token class-name\\">HttpServlet</span><span class=\\"token punctuation\\">#</span><span class=\\"token function\\">doGet</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">HttpServletRequest</span> request<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">HttpServletResponse</span> response<span class=\\"token punctuation\\">)</span></span>\\n\\t */</span>\\n\\t<span class=\\"token keyword\\">protected</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">doGet</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">HttpServletRequest</span> request<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">HttpServletResponse</span> response<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">ServletException</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">IOException</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"doGet()方法。。。\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\n\\t<span class=\\"token doc-comment comment\\">/**\\n\\t * <span class=\\"token keyword\\">@see</span> <span class=\\"token reference\\"><span class=\\"token class-name\\">HttpServlet</span><span class=\\"token punctuation\\">#</span><span class=\\"token function\\">doPost</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">HttpServletRequest</span> request<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">HttpServletResponse</span> response<span class=\\"token punctuation\\">)</span></span>\\n\\t */</span>\\n\\t<span class=\\"token keyword\\">protected</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">doPost</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">HttpServletRequest</span> request<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">HttpServletResponse</span> response<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">ServletException</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">IOException</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"doPost()方法。。。\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\n\\t<span class=\\"token annotation punctuation\\">@Override</span>\\n\\t<span class=\\"token keyword\\">protected</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">service</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">HttpServletRequest</span> arg0<span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">HttpServletResponse</span> arg1<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">ServletException</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">IOException</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t<span class=\\"token keyword\\">super</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">service</span><span class=\\"token punctuation\\">(</span>arg0<span class=\\"token punctuation\\">,</span> arg1<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"service()方法。。。。\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\n\\t<span class=\\"token annotation punctuation\\">@Override</span>\\n\\t<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">destroy</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token comment\\">//\\t\\tsuper.destroy();</span>\\n\\t\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"destory()方法。。。。。\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n\\n\\t<span class=\\"token annotation punctuation\\">@Override</span>\\n\\t<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">init</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">ServletException</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token comment\\">//\\t\\tsuper.init();</span>\\n\\t\\t<span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"init()方法。。。。。\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\t<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
