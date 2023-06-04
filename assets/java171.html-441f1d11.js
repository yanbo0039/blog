import{_ as s,X as n,Y as r,a1 as p,Z as e,$ as i,a2 as a,a0 as t,F as o}from"./framework-68dd73a2.js";const d={},u={id:"_171-javaweb结业考试六-md",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#_171-javaweb结业考试六-md","aria-hidden":"true"},"#",-1),c={href:"http://xn--171-JavaWEB-sv8qx95a0i4nlzdl03d.md",target:"_blank",rel:"noopener noreferrer"},m=t('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="试题" tabindex="-1"><a class="header-anchor" href="#试题" aria-hidden="true">#</a> 试题</h3><h3 id="答题说明" tabindex="-1"><a class="header-anchor" href="#答题说明" aria-hidden="true">#</a> 答题说明：</h3><ol><li><p>本卷分为 选择题 、 填空题 、 问答题 、 编程题 四部分，满分 100 分，考试时间 90 分钟</p></li><li><p>请书写工整，保持卷面整洁</p></li><li><p>答题前请先填写自己的个人信息</p></li></ol><h3 id="第一部分-选择题-本部分-20-道题-满分-40-分" tabindex="-1"><a class="header-anchor" href="#第一部分-选择题-本部分-20-道题-满分-40-分" aria-hidden="true">#</a> 第一部分：选择题 （本部分 20 道题，满分 40 分）</h3>',5),h=t("<li><p>[单选题]下列选项里不是动态网页技术的是 （ ）</p><p>A、ASP B、JSP C、PHP D、HTML</p></li><li><p>[单选题]运行JSP需要的容器是 （ ）</p><p>A、Eclipse B、Tomcat C、浏览器D、jdk</p></li><li><p>[单选题] JSP中客户端不可见注释是 （ ）</p><p>A、//这是注释 B、&lt;%--这是注释--%&gt; C、<!--这是注释--> D、/<em>这是注释</em>/</p></li>",3),b=e("p",null,"[单选题]下列哪些类包不是JSP自动加载的 （ ）",-1),g={href:"http://java.io",target:"_blank",rel:"noopener noreferrer"},q=e("li",null,[e("p",null,'[单选题] Servlet中获取页面文本框(name="user_name")的值正确的是 （ ）'),e("p",null,'A 、 session.getAttribute("user_name") B 、 request.getAttribute("user_name") C 、 session.getParamter("user_name") D、request.getParameter("user_name")')],-1),_=e("li",null,[e("p",null,"[单选题] 当在浏览器里直接输入servlet映射地址时，响应的方法是")],-1),S=t(`<p>A、doPost() B、service() （ ） C、doGet() D、init()</p><ol start="7"><li><p>[单选题] 修改tomcat端口号的配置文件是 （ ）</p><p>A、context.xml B、web.xml C、server.xml D、config.xml</p></li><li><p>[单选题] 下列程序运行的结果是 （ ）</p></li></ol><div class="language-Jsp line-numbers-mode" data-ext="Jsp"><pre class="language-Jsp"><code>	&lt;html&gt;		
	&lt;% String str = null;%&gt;
str is &lt;%=str%&gt;		
&lt;/html&gt;		

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A、程序报错</p><p>B、浏览器上显示空白</p><p>C、浏览器上显示：str is</p><p>D、浏览器上显示：str is null</p><ol start="9"><li>[单选题] 在Servlet中，以下哪个方法可以正确获取复选框的值 （ ）</li></ol><p>A、request.getParameterValue()</p><p>B、request.getParameterName()</p><p>C、request.getParameterValues()</p><p>D、request.getParameterNames()</p><ol start="10"><li>[单选题]在Servlet中，以下哪个方法用来绝对转向 （ ）</li></ol><p>A、sendRedirect()</p><p>B、sendURL()</p><p>C、forwardURL()</p><p>D、forward()</p><ol start="11"><li>[单选题]用来从Session中获取对象的方法是 （ ）</li></ol><p>A、getValue()</p><p>B、getAttribute()</p><p>C、getParameter()</p><p>D、get()</p><ol start="12"><li>[单选题]下面关于Servlet过滤器的描述中正确的是 （ ）</li></ol><p>A、过滤器本身不能产生请求和响应</p><p>B、过滤器默认就可以拦截所有的请求，不需要进行配置</p><p>C、过滤器每次拦截请求时，都需要调用其init方法进行初始化工作</p><p>D、过滤器可以自动将请求传给后面的过滤器或请求目标，编程时无需撰写传递请求的语句</p><ol start="13"><li>[单选题]给定一个Servlet的代码片段如下： （ ）</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public void doGet(){		
out.println(&quot;hello neusoft!&quot;);		
out.close();		
}		
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行次Servlet时输出如下： hello neusoft! 则应在此Servlet下划线处填充如下代码</p><p>A、PrintWriter out = response.getWriter();</p><p>B、OutputStream out = response.getOutputStream();</p><p>C、PrintWriter out = request.getWriter();</p><p>D、OutputStream out = request.getWriter();</p><ol start="14"><li>[单选题]以下关于HttpServlet的说法错误的是 （ ）</li></ol><p>A、HttpServlet是一个抽象类</p><p>B、HttpServlet类扩展了GenericServlet类</p><p>C、HttpServlet类的子类必须至少重写service方法</p><p>D、HttpServlet位于javax.servlet.http包中</p><ol start="15"><li>[单选题]下列关于Cookie的说法中错误的是 （ ）</li></ol><p>A、Cookie保存在客户端</p><p>B、Cookie可以被服务器端程序修改</p><p>C、浏览器可以关闭Cookie功能</p><p>D、Cookie中可以保存任意长度的文本</p><ol start="16"><li>[单选题]JSP中，在一个网页中包含另一个网页来复用代码，可以完成该功能的是 （ ）</li></ol><p>A、page指令</p><p>B、include指令</p><p>C、import指令</p><p>D、以上都可以</p><ol start="17"><li>[单选题]访问web应用时出现了404错误，最可能的原因是 （ ）</li></ol><p>A、服务器未启动</p><p>B、访问的资源不存在</p><p>C、服务器端口被占用</p><p>D、服务器异常终止</p><ol start="18"><li>[单选题]不属于Filter的方法是 （ ）</li></ol><p>A 、 init</p><p>B、filter</p><p>C、destroy</p><p>D、doFilter</p><ol start="19"><li>[单选题]在WEB项目的目录结构中，web.xml文件位于（）中 （ ）</li></ol><p>A、src</p><p>B、META-INF</p><p>C、WEB-INF</p><p>D、WebRoot</p><ol start="20"><li>[单选题]在JSP中，以下（）技术最适合实现购物车的存储 （ ）</li></ol><p>A、page</p><p>B、request</p><p>C、session</p><p>D、application</p><h3 id="第二部分-填空题-本部分-5-道题-满分-10-分" tabindex="-1"><a class="header-anchor" href="#第二部分-填空题-本部分-5-道题-满分-10-分" aria-hidden="true">#</a> 第二部分：填空题 （本部分 5 道题，满分 10 分）</h3><ol><li><p>[填空题]表单的常用提交方法包括____和____方法</p></li><li><p>[填空题]在JSP页面中通过Page指令____属性引入Java包中的类</p></li><li><p>[填空题]MVC中V通常是由____来实现的、C通常由____来实现</p></li><li><p>[填空题]表单上传文件时，form的method必须为____，同时enctype属性必须为____</p></li><li><p>[填空题]JSP的指令包括____、<strong><strong>、</strong></strong></p></li></ol><h3 id="第三部分-问答题-本部分-4-道题-满分-20-分" tabindex="-1"><a class="header-anchor" href="#第三部分-问答题-本部分-4-道题-满分-20-分" aria-hidden="true">#</a> 第三部分：问答题 （本部分 4 道题，满分 20 分）</h3><ol><li><p>[问答题]简述JSP的执行过程</p></li><li><p>[问答题]servlet的生命周期</p></li><li><p>[问答题]j2eeweb应用程序的目录结构</p></li><li><p>[问答题]对session的理解</p></li></ol><h3 id="第四部分-编程题-本部分-3-道题-满分-30-分" tabindex="-1"><a class="header-anchor" href="#第四部分-编程题-本部分-3-道题-满分-30-分" aria-hidden="true">#</a> 第四部分：编程题 （本部分 3 道题，满分 30 分）</h3><ol><li><p>[编程题]编写一个servlet。servlet的功能要求： 记录访问该servlet的客户端的ip和访问时间，把记录写入client_ip.log文件。client_ip.log里的格式大致如下 2017-11-11 09:36 192.168.1.1 2017-11-12 10:22 127.0.0.1 提示：使用request对象的 getRemoteAddr()方法可以获得客户端的IP.</p></li><li><p>[编程题]写出JSP里记住用户名的代码</p></li><li><p>[编程题]编写登录功能代码： 要求</p></li></ol><p>1.页面使用jsp，包括用户名、密码</p><p>2.用表单提交，用servlet接收</p><p>3.如果用户名是“neusoft”、密码是“123456”返回登录成功</p><h3 id="参考答案" tabindex="-1"><a class="header-anchor" href="#参考答案" aria-hidden="true">#</a> 参考答案</h3><h3 id="第一部分-选择题-本部分-20-道题-满分-40-分-1" tabindex="-1"><a class="header-anchor" href="#第一部分-选择题-本部分-20-道题-满分-40-分-1" aria-hidden="true">#</a> 第一部分：选择题 （本部分 20 道题，满分 40 分）</h3><ol><li><p>[单选题] 答案： D</p></li><li><p>[单选题] 答案： B</p></li><li><p>[单选题] 答案： B</p></li><li><p>[单选题] 答案： B</p></li><li><p>[单选题] 答案： D</p></li><li><p>[单选题] 答案： C</p></li><li><p>[单选题] 答案： C</p></li><li><p>[单选题] 答案： D</p></li><li><p>[单选题] 答案： C</p></li><li><p>[单选题] 答案： A</p></li><li><p>[单选题] 答案： B</p></li><li><p>[单选题] 答案： A</p></li><li><p>[单选题] 答案： A</p></li><li><p>[单选题] 答案： C</p></li><li><p>[单选题] 答案： D</p></li><li><p>[单选题] 答案： B</p></li><li><p>[单选题] 答案： B</p></li><li><p>[单选题] 答案： B</p></li><li><p>[单选题] 答案： C</p></li><li><p>[单选题] 答案： C</p></li></ol><h3 id="第二部分-填空题-本部分-5-道题-满分-10-分-1" tabindex="-1"><a class="header-anchor" href="#第二部分-填空题-本部分-5-道题-满分-10-分-1" aria-hidden="true">#</a> 第二部分：填空题 （本部分 5 道题，满分 10 分）</h3><ol><li><p>[填空题] 答案： post、 get</p></li><li><p>[填空题] 答案： import</p></li><li><p>[填空题] 答案： JSP、 Servlet</p></li><li><p>[填空题] 答案： post、 multipart/form-data</p></li><li><p>[填空题] 答案： page、 include、 taglib</p></li></ol><h3 id="第三部分-问答题-本部分-4-道题-满分-20-分-1" tabindex="-1"><a class="header-anchor" href="#第三部分-问答题-本部分-4-道题-满分-20-分-1" aria-hidden="true">#</a> 第三部分：问答题 （本部分 4 道题，满分 20 分）</h3><ol><li>[问答题] 答案：</li></ol><p>1.客户端发出Request请求</p><p>2.如果是第一次访问，Tomcat将JSP转译成Servlet的源代码，将产生的Servlet源代码经过编译后，并加载 到 内 存 执 行 ； 不 是 第 一 次 访 问 ， 直 接 把 编 译 后 的 Servlet 加 载 到 内 存 执 行</p><p>3.把结果Response(响应)至客户端</p><ol start="2"><li>[问答题] 答案：</li></ol><p>Tomcat创建Servlet实例，并调用 init () 方法进行初始化。调用service() 方法来处理客户端的请求。 调用destroy() 方法终止。 最后，Servlet 是由 JVM 的垃圾回收器进行垃圾回收的。</p><ol start="3"><li>[问答题] 答案：</li></ol><p>– 网站根目录</p><p>–|-- WEB-INF目录：必须目录</p><p>–|-- web.xml：Web应用部署描述文件，必须文件</p><p>–|-- classes目录：存放字节码文件</p><p>–|-- lib目录：存放第三方类库文件</p><ol start="4"><li>[问答题] 答案：</li></ol><p>HttpSession是由JavaWeb提供的，用来会话跟踪的类。session是服务器端对象，保存在服务器端 session是一个用户对服务器的多次连贯性请求 范围是某个用户从首次访问服务器开始，到该用户关闭浏览器结束作用是多次请求中共享数据</p><h3 id="第四部分-编程题-本部分-3-道题-满分-30-分-1" tabindex="-1"><a class="header-anchor" href="#第四部分-编程题-本部分-3-道题-满分-30-分-1" aria-hidden="true">#</a> 第四部分：编程题 （本部分 3 道题，满分 30 分）</h3><ol><li>[编程题] （考生可选的语言： Java ） 答案：</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>doPost(HttpServletRequest request， HttpServletResponse response){ File clientIp=new File(&quot;D:\\client_ip.log&quot;);
FileOutputStream fos = new FileOutputStream(clientIp); String clientIp = req. getRemoteAddr();
SimpleDateFormat sdf = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm&quot;); Date date = new Date();
String currDate = sdf.format(date);
String clientIpLog = clientIp + ” ” + currDate; this.fos.write(clientIpLog.getBytes()); this.fos.flush();
fos.close();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>[编程题] （考生可选的语言： Java ） 答案：</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>&lt;%
String username = null ;
Cookie[] cks = request.getCookies() ;
if(cks != null)
{
for(int i=0; i&lt;cks.length; i++)
{
if(cks[i].getName().equals(&quot;username&quot;)); username = cks[i].getValue();
}
}
%&gt;
用户名：&lt;input type=&quot;text&quot; name=&quot;username&quot; value=&quot;&lt;%=username%&gt;&quot;&gt;
Servlet里代码如下：
if(登录成功){
//创建Cookie
Cookie ck = new Cookie(&quot;cardid&quot;,kahao) ;
//设置过期时间ck.setMaxAge(10*24*60*60)	; response.addCookie(ck) ;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>[编程题] （考生可选的语言： Java ） 答案：</li></ol><p>jsp页面：</p><div class="language-Jsp line-numbers-mode" data-ext="Jsp"><pre class="language-Jsp"><code>&lt;form method=&quot;post&quot; action=&quot;/loginServlet&quot;&gt;
用户名：&lt;input type=&quot;text&quot; name=&quot;username&quot; id=&quot;username&quot;/&gt;
&lt;br /&gt;
密码：&lt;input type=&quot;password&quot; name=&quot;password&quot; id=&quot;password&quot;/&gt;
&lt;br /&gt;
&lt;input type=&quot;submit&quot; value=&quot;登录&quot;/&gt;
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Servlet 里 代 码 如 下 ：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> @WebServlet(&quot;/LoginServlet&quot;)
public class LoginServlet extends HttpServlet {
protected void doGet(HttpServletRequest request, HttpServletResponse response)

throws ServletException, IOException { PrintWriter pw = response.getWriter();
String username = request.getParameter(&quot;username&quot;); String password = request.getParameter(&quot;password&quot;); System.out.println(username+&quot;	&quot;+password);
if(&quot;neusoft&quot;.equals(username) &amp;&amp; &quot;123456&quot;.equals(password)){ pw.print(&quot;1&quot;);
}else{ pw.print(&quot;0&quot;);
}
pw.close();
}
protected void doPost(HttpServletRequest request, HttpServletResponse response)

throws ServletException, IOException { doGet(request, response);
}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>JavaWEB结业考试六</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,112);function f(x,C){const l=o("ExternalLinkIcon");return n(),r("div",null,[p(" more "),e("h1",u,[v,i(),e("a",c,[i("171-JavaWEB结业考试六.md"),a(l)])]),m,e("ol",null,[h,e("li",null,[b,e("p",null,[i("A、java.lang B、"),e("a",g,[i("java.io"),a(l)]),i(" C、javax.servlet D、javax.servlet.jsp")])]),q,_]),S])}const B=s(d,[["render",f],["__file","java171.html.vue"]]);export{B as default};
