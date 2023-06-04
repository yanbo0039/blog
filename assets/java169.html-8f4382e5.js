import{_ as n,X as s,Y as l,a1 as a,Z as e,$ as t,a2 as p,a0 as o,F as r}from"./framework-68dd73a2.js";const d={},u={id:"_169-javaweb结业考试四-md",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#_169-javaweb结业考试四-md","aria-hidden":"true"},"#",-1),c={href:"http://xn--169-JavaWEB-sv8qn42g077jlzdl03d.md",target:"_blank",rel:"noopener noreferrer"},v=o(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="试卷" tabindex="-1"><a class="header-anchor" href="#试卷" aria-hidden="true">#</a> 试卷</h3><h3 id="答题说明" tabindex="-1"><a class="header-anchor" href="#答题说明" aria-hidden="true">#</a> 答题说明：</h3><ol><li>本卷分为单选题、问答题、编程题三部分，满分100分，考试时间90分钟</li><li>请书写工整,保持卷面整洁</li><li>答题前请先填写自己的个人信息</li></ol><h3 id="第一部分-单选题-本部分20道题-满分40分" tabindex="-1"><a class="header-anchor" href="#第一部分-单选题-本部分20道题-满分40分" aria-hidden="true">#</a> 第一部分:单选题(本部分20道题，满分40分)</h3><ol><li>[单选题] cookie.setMaxAge(60*60)的意思是 ( )</li></ol><p>A、 将cookie的保存时间设置为一分钟</p><p>B、 将cookie的保存时间设置为一个小时</p><p>C、 将cookie的保存时间设置为60个小时</p><p>D、 将cookie的保存时间设置为一天</p><p>E、 将cookie的保存时间设置为60天</p><p>F、 将cookie的保存时间设置为10秒</p><ol start="2"><li>[单选题] 将Cookie对象保存到浏览器客户端的方法是 ( )</li></ol><p>A、 request.addCookie(cookie);</p><p>B、 response.addCookie(cookie);</p><p>C、 session.addCookie(cookie);</p><p>D、 application.addCookie(cookie);</p><p>E、 servletConfig.addCookie(cookie);</p><p>F、 filterConfig.addCookie(cookie);</p><ol start="3"><li>[单选题] 下边的说法哪f是正确的 ( )</li></ol><p>A、 JSP技术是基于Java技术的基础上,因此它是平台独立的</p><p>B、 JSP不能利用面相对象语言</p><p>C、 JSP可以写入到C++中</p><p>D、 JSP中不能写Java语句</p><ol start="4"><li>[单选题] 当在JSP文件中要使用到ArrayLis愤)象时,应在JSP文件中加入以下哪个语句 ( )</li></ol><p>A、 &lt;jsp:include file=&quot; java.util.*&quot; /&gt;</p><p>B、 &lt;jsp:include page=&quot; java.util.*&quot; /&gt;</p><p>C、 &lt;%@ page import=&quot; java.util.*&quot; /&gt;</p><p>D、 &lt;%@ page include=&quot; java.util.*&quot; /&gt;</p><ol start="5"><li>[单选题] JS编译后Scriptie会被插入到()方法中 ( )</li></ol><p>A、 JspInit()</p><p>B、 JspService()</p><p>C、 doPost()</p><p>D、 jspDestroy()</p><ol start="6"><li>[单选题] 查看下列JSP内容:</li></ol><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;html&gt;&lt;body&gt;
&lt;%far (int i = 0; i &lt; 3; I ++){%&gt;
outprint( i * 2);
&lt;%)%&gt;
&lt;/body&gt; &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当这个JS运行时,其结果是什么:</p><p>A、 此JSP因为语法错误.无法运行</p><p>B、 显示。out.print(i*2);三次</p><p>C、 显示 out.print(i*2);— 次</p><p>D、 显示岀0246</p><p>E、 显示出024</p><ol start="7"><li>[单选题] 以下代码在页面上的输出值是什么: ( )</li></ol><div class="language-Jsp line-numbers-mode" data-ext="Jsp"><pre class="language-Jsp"><code>&lt;html&gt;&lt;body&gt;
&lt;%x=3;%&gt;
&lt;% int x=5; % &gt;
&lt;%!intx=7;%&gt;
x = &lt;% =x%&gt;, &lt;% =thisj(%&gt;
&lt;/body&gt; &lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A、 x=3,5</p><p>B、 x=3,7</p><p>C、 x=5,3</p><p>D、 r5,7</p><ol start="8"><li>[单选题] 判断该jsp页面的输出结果:关键代码如下 ( )</li></ol><div class="language-Jsp line-numbers-mode" data-ext="Jsp"><pre class="language-Jsp"><code>&lt;%!int sum=l;%&gt;
&lt;% int sum =8;% &gt;
&lt;%outprintln($um++);% &gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A、 1</p><p>B、 2</p><p>C、 8</p><p>D、 9</p><ol start="9"><li>[单选题] 下列有关Servlet的生命鼬，说法不正确的是 ( )</li></ol><p>A、 在Servlet的生命周期中，init()、destroy()方法只能被容器调用一次.分另帷容器启动加载Servlet及停止卸载Servlet时</p><p>B、 在Servlet生命周期的服务阶段，执行service()方法,根据用户请求的方法，执行相应的doGet()或是doPost()方法</p><p>C、 Servlet只能在容器初始化的时候被实例化，且一个容器有且仅一个该Servlet实例</p><p>D、 在销毁阶段，执行destroy()方法后系统立刻进行垃圾回收</p><ol start="10"><li>[单选题] 以下是web.xml文档的一部分： ( )</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span> D splay <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">&gt;</span></span> com.ttc.D bpIayServlet <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-dass</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>load-on-startup</span><span class="token punctuation">&gt;</span></span> 2 &lt;/1oad-on-startup&gt;
〈/servlet &gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">&gt;</span></span>
〈servlet-name〉Search <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jsp-file</span><span class="token punctuation">&gt;</span></span> /search/search jsp <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jsp-file</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>load-on-startup</span><span class="token punctuation">&gt;</span></span> 1 &lt;/1oad-on-startup&gt;
〈/servlet &gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请问以上web.xm反档中的设置是指服务器首先装载和初始化哪个servlet</p><p>A、 Display</p><p>B、 com.ttc.D splayServlet</p><p>C、 sea rchjsp</p><p>D、由 sea rch.jsp生成的servlet</p><ol start="11"><li>[单选题] 下面给出的类中，与HttpServletRequest在结构上具有相似之处的是: ( )</li></ol><p>A、 HashMap</p><p>B、 Vector</p><p>C、 ArrayList</p><p>D、 Collection</p><ol start="12"><li>[单选题] 在web.xml中，下列哪些是合法的Servlet映射地址配置？ ( )</li></ol><p>A、 employee/main.do</p><p>B、 /employee/main.do</p><p>C、 employee/*</p><p>D、 /employee/*.do</p><p>E、 employee/*.do</p><p>F、 /*.do</p><ol start="13"><li>[单选题] 如果Tomcat安装后，想要修改它的端口号，可以通过修改〈tomcat安装目录＞/conf下的___文件来实现。 ( )</li></ol><p>A、 web.xml</p><p>B、 server.xml</p><p>C、 server-minimaLxml</p><p>D、 tomcat-user.xml</p><ol start="14"><li>[单选题] 如果需要删除session中的某个属性key ,可以调用下面的_ 法。 ( )</li></ol><p>A、 remove( &quot;key&quot;)</p><p>B、 removeAttribute( &quot;key&quot;)</p><p>C、 invalidate()</p><p>D、 logout()</p><ol start="15"><li>[单选题] 销毁一个session对象应该调用下面哪一个方法? ( )</li></ol><p>A、 session.invalidate()</p><p>B、 session.expunge()</p><p>C、 session.destroy()</p><p>D、 session.end()</p><ol start="16"><li>[单选题] 如下哪些方法能实现session对象ID的超连接方式的URL重写 ( )</li></ol><p>A、 request.encodeURL( &quot;main.jsp&quot;)</p><p>B、 response.encodeURL( &quot;main.jsp&quot;)</p><p>C、 session.encodeURL( &quot;main.jsp&quot;)</p><p>D、 request.encodeRedirectURL( &quot;main.jsp&quot;)</p><p>E、 response.encodeRedirectURL( &quot;main.jsp&quot;)</p><p>F、 session.encodeRedirectURL( &quot;main.jsp&quot;)</p><ol start="17"><li>[单选题] 如下哪些情况下会话对象HttpSession被销毁 ( )</li></ol><p>A、 HTTP请求正常结束</p><p>B、 HTTP响应正常结束</p><p>C、 404响应生成</p><p>D、 关闭Web服务器</p><p>E、 执行会话对象的removeAttribute()方法</p><p>F、 使用response对象执行重定向</p><ol start="18"><li>[单选题] 一个过滤器的过滤URL配置为&quot;/admin/*H，如下哪些URL请求会被过滤 ( )</li></ol><p>A、/admin/login.do</p><p>B、 /image/admin/tu.jpg</p><p>C、 /base/admin/main.jsp</p><p>D、 /admin.do</p><p>E、 /admin.jsp</p><ol start="19"><li>[单选题] 浏览器访问某页面，HTTP协议返回状态码为404时表示</li></ol><p>A、 到该页面</p><p>B、 禁止访问</p><p>C、 内部月眇器访问</p><p>D、 服务器繁忙</p><ol start="20"><li>[单选题] 下面哪项不是HTTP响应的TP分 ( )</li></ol><p>A、 响应头</p><p>B、 响应正文</p><p>C、 协议版本号</p><p>D、 状态行</p><h3 id="第二部分-问答题-本部分8道题-满分40分" tabindex="-1"><a class="header-anchor" href="#第二部分-问答题-本部分8道题-满分40分" aria-hidden="true">#</a> 第二部分:问答题(本部分8道题，满分40分)</h3><ol><li><p>[问答题] JSP中都可以包含哪些元素？</p></li><li><p>[问答题] HttpServletRequest 对象的 getAttribute 方法和 getParameter方法有什么区别？</p></li><li><p>[问答题] HTTP是一种无状态的连接协议，web应用中,是采用什么手段,知道两次请求是同一个用户发出的？</p></li><li><p>[问答题] 简述编写过滤器的步骤</p></li><li><p>[问答题] 至少列举JSP中四种常用的内置对象，并说明该对象的作用。</p></li><li><p>[问答题] 在服务器端如何设置可以使Cookie信息保存在客户端浏览器的缓存中,什么情况下保存在客户端的硬盘上？</p></li><li><p>[问答题] 简述Servlet对象生命周期</p></li><li><p>[问答题] 简述请求转发和请求重定向的java实现及两者区别。</p></li></ol><h3 id="第三部分-编程题-本部分1道题-满分20分" tabindex="-1"><a class="header-anchor" href="#第三部分-编程题-本部分1道题-满分20分" aria-hidden="true">#</a> 第三部分：编程题(本部分1道题，满分20分)</h3><ol><li>[填空题] 读期，按要求补全横线代码。</li></ol><p>要求如下： 1)、在 input.jsp 页面中提供一 可以输入姓名(name=username)、密码(name=pwd)、(name=favorite,包括读书、游泳、爬山、听音乐、看电影)的表单。表单数据不能显示在浏览器地址栏中。</p><p>2)、创建lnputServlet,用来获取input.jsp页面中用户输入的信息，并获取当前系统时间。</p><p>3)、创建output.jsp文件，使用请求转发的方式实现跳,从InputServlet跳转到output.jsp文件。</p><p>4)、在output.jsp文件输出如下格式的信息:** 用户，您的爱好为 <strong>、</strong> ，欢迎您于yyyy-MM-dd访问本页面！</p><p>5)、InputServlet的url mapping设置为:/process/input</p><p>6)、需处理中文乱码问题。</p><div class="language-Jsp line-numbers-mode" data-ext="Jsp"><pre class="language-Jsp"><code>&lt;%--如下为input.jsp文件参考代码--％&gt;
&lt;%@page language=njavan contentType=&quot;__(1)____ 	&quot; pageEncoding=&quot; _____	(2) _____	&quot; %&gt;
&lt;!DOCTYPE html PUBUC”-//W3C//DTD HTML 4.01 Transitional//ENB
&quot;http://www.w3.Org/T R/html4/loose.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;___(1)____&quot;&gt;&lt;/head&gt;
&lt;body&gt;
&lt;form action=&quot;____(3)____&quot; method=&quot;_____(4)______&quot;&gt;
姓名:&lt;input type=&quot;text&quot; name=&quot;username&quot;/&gt;&lt;br&gt;
密码:&lt;input type=&quot;password&quot; name=&quot;pwd&quot;/&gt;&lt;br&gt;
爱好:
&lt;input type=&quot;___(5)____&quot; name=&quot;favorite&quot; value=&quot;读书&quot;/&gt;读书
&lt;input type=&quot;___(5)____&quot; name=&quot;favorite&quot; value=&quot;游泳&quot;/&gt;游泳
&lt;input type=&quot;___(5)____&quot; name=&quot;favorite&quot; value=&quot;爬山&quot;/&gt;爬山
&lt;input type=&quot;___(5)____&quot; name=&quot;favorite&quot; value=&quot;听音乐&quot;/&gt;听音乐
&lt;input type=&quot;___(5)____&quot; name=&quot;favorite&quot; value=&quot;看电影&quot;/&gt;看电影&lt;br&gt;
&lt;input type=&quot;submit&quot; value=&quot;确定&quot;/&gt;
&lt;input type=&quot;reset&quot; value=&quot;重置&quot;/&gt;
/*如下为InputServlet.java参考代码*/

public class InputServlet extends _____(6)_____{
    protected void doGet(______(7)_______,______(8)________)throws ServletException,IOException{
        _________(9)_________
    }
    protected void doPost(______(7)________,_____(8)_________)throws ServletException,IOException{
        //在读取信息之前，先进行编码转换
        _______(10)________
        //读取表单参数:用户姓名
        _______(11)________
        //读取表单参数:用户爱好
        _______(12)________

        StringBuffer fa = new StringBuffer();
        if(favorite != null){
            for(int i = 0;i&lt;favorite.length;i++){
                fa.append(favorite[i]);
                if(i &lt; favorite.length -1){
                    fa.append(&quot;、&quot;);
                }
            }
        }
    }
}

//获取系统当前时间
Date d = new Date()；
//格式化日期对象d
____(13)_______ 	
String date=sf.format(d);
//向请求对象中存入用户姓名
_________(14)_________ 	
//向请求对象中存入用户爱好
_________(15)_________ 	
//向请求对象中存入系统当前时间
_________(16)_________ 	
//把请求转发到output.jsp
_________(17)_________ 	
}
}
&lt;%--如下为output.jsp文件参考代码--%&gt;
&lt;%@page language=&quot;java&quot; contentType=&quot;_⑴ 	&quot; pageEncoding=&quot;UTF-8&quot; %&gt; &lt;!DOCTYPE html PUBUC&quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;
&lt;html&gt;
&lt; head &gt;&lt;meta http-equiv= &quot;Content-Type&quot; &quot;content=&quot;_________(l)_________&quot;&gt;&lt;/head&gt; &lt;body&gt;
_________(18)_________户，
您的爱好为_________(19)_________,
欢迎您于_________(20)_________访问本页面
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考答案" tabindex="-1"><a class="header-anchor" href="#参考答案" aria-hidden="true">#</a> 参考答案</h3><h3 id="第一部分-单选题-本部分20道题-满分40分-1" tabindex="-1"><a class="header-anchor" href="#第一部分-单选题-本部分20道题-满分40分-1" aria-hidden="true">#</a> 第一部分：单选题（本部分20道题，满分40分）</h3><ol><li>[单选题]答案：B</li><li>[单选题]答案：B</li><li>[单选题]答案：A</li><li>[单选题]答案：C</li><li>[单选题]答案：B</li><li>[单选题]答案：B</li><li>[单选题]答案：C</li><li>[单选题]答案：C</li><li>[单选题]答案：D</li><li>[单选题]答案：D</li><li>[单选题]答案：A</li><li>[单选题]答案：B</li><li>[单选题]答案：B</li><li>[单选题]答案：B</li><li>[单选题]答案：A</li><li>[单选题]答案：B</li><li>[单选题]答案：D</li><li>[单选题]答案：A</li><li>[单选题]答案：A</li><li>[单选题]答案：C</li></ol><h3 id="第二部分-问答题-本部分8道题-满分40分-1" tabindex="-1"><a class="header-anchor" href="#第二部分-问答题-本部分8道题-满分40分-1" aria-hidden="true">#</a> 第二部分:问答题(本部分8道题，满分40分)</h3><ol><li><p>[问答题]答案：静态内容(DHTML和数据)、脚本元素(指令、声明、Scriptlet.表达式、注释)、 标准动作、EL表达式、JSP自定义标签。</p></li><li><p>[问答题]答案：getAttribute方法用来获取请求作用域中的数据。getParameter方法用来获取请求报文中的参数信息。</p></li><li><p>[问答题]答案：可以临时使用cookie保存session id.如果客户麟止cookie ,可以使用URL重写， 在URL中保存session ID.</p></li><li><p>[问答题]答案：</p></li></ol><p>1、声明过滤器类并让其实现Filter接口。--1分</p><p>2、 实现init()方法,读取过滤器的初始化参数。--1分</p><p>3、 实现doFilter()方法，实现对请求或响应的过滤操作。通常在过滤操作之后,会调用该方法的FilterChain参数的doFilter()方法，来继续调用链上的下一个节点。_2分 4、 实现destory()方法，完成资源释放等操作。T分</p><ol start="5"><li>[问答题]答案：</li></ol><ol><li><p>request对象：客户端的请求信息被封装在request对象中，通过它才能了解到客 户的需求，然后做出响应。</p></li><li><p>response对象：response对象包含了响应客户请求的有关信息,但在JSP中很少直接到它。</p></li><li><p>session对象：session对象指的是客户端与服务器的一次会话，从客户连到服务器的一个WebApplication开始，直到客户端与服务器断开连接为止。</p></li></ol><p>4)out对象:out是JspWriter类的实例,是向客户端输出内容常用的对象.</p><ol start="5"><li><p>page对象：page对象就是指向当前JSP页面本身，有点象类中的this指针.</p></li><li><p>application对象：application对象实现了用户间数据的共享,可存放全局变量。它开始于服务器的启动,直到服务器的关闭,在此期间，此对象将一直存在；这样在用户的前后连接或不同用户之间的连 接中，可以对此对象的同一属性进行操作；在任何地方对此对象属性的操作，都将影响到其他用户对此 的访问。服务器的启动和关闭决定了application对象的生命。</p></li><li><p>exception对象：exception对象是一个例对象,当一个页面在运行过程中发生了例外，就产生这 个对象。如果一个JSP页面要应用此对象,就必须把isErrorPage设为true ,否则无法编译。</p></li><li><p>pageContext对象：pageContext对象提供了对JSP页面内所有的对象及名字空间的访问，也就是说 他可以访问到本页所在的SESSION ,也可以取本页面所在的application的某一属性值，他相当于页面中 所有功能的集大成者,它的本类名也叫pageContext。</p></li><li><p>config对象：config对象是在一Servlet初始化时,JSP引擎向它传递信息用的，此信息包括Servlet初始化时所要用到的参数(通过属性名和属性值构成)以及服务器的有关信息(通过传递一个ServletContextX对象) 题目解析：答对1个可得2分，答对2个可得3分，答对3个可得4分，答对4个可得5分</p></li></ol><ol start="6"><li><p>[问答题]答案：在服务器端调用Cookie对象的setMaxAge(int time)方法，当参数time取值大于0 时,cookie会被保存在客户端的硬盘上,当取值小于等于0时,cookie会被保存在浏览器的临时内存 中,默认保存在浏览器临时内存。</p></li><li><p>[问答题】答案：</p></li></ol><p>1.加载</p><p>2.实例化</p><p>3初始化init()</p><p>4.处理客户请求</p><p>5.销毁 destroy()</p><p>题目解析：打出每点可得1分</p><ol start="8"><li>【问答题】答案：</li></ol><p>相同点：都能实现资源调转。--1分 不同点：</p><p>1、 重定向电请求与响应的次数都是两次而请求转发则为一次;1分</p><p>2、 重定向会使客户端浏览器地址栏URL发生变化，而请求转发则不会改变地址栏的原有URL;--1分</p><p>3、 重定向可以跳转到其他web应用中的资源，而请求转发只能在本应用中资源中调转。--1分</p><p>4、 在性能上，请求转发要优于重定向，因为是由服务器端直接跳转;--1分</p><p>题目解析：打出每点可得1分</p><h3 id="第三部分-编程题-本部分1道题-满分20分-1" tabindex="-1"><a class="header-anchor" href="#第三部分-编程题-本部分1道题-满分20分-1" aria-hidden="true">#</a> 第三部分：编程题(本部分1道题，满分20分)</h3><p>1.【填空题】答案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>text/html;charset=UTF-8、UTF-8、/process/input、post、checkbox、Http Servlet、HttpServletRequest request、HttpServletResponse response、doPost(request,respo rise);、requestsetCharacterEncoding(&quot;&quot;UTF-8&quot;&quot;);、String username=requestgetParameter(&quot;u sername&quot;); % String[] favorite=requestgetParameterValues(&quot;favorite&quot;); % SimpleDateFormat s f=new SimpleDateFormat(&quot;yyyy-MM-dd&quot;);% request.setAttribute(&quot;username&quot;,username);、req uestsetAttribute(&quot;favorite&quot;,fa);% requestsetAttribute(&quot;now&quot;,date);、requestgetRequestDispat cher(7outputjsp&quot;).forward(request,response);、＜%=request.getAttribute(&quot;username&quot;) %＞、 ＜%=requestgetAttribute(&quot;favorite&quot;) %＞、＜%=request.getAttribute(&quot;now&quot;) %＞
题目解析：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>JavaWEB结业考试四</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,167);function m(g,b){const i=r("ExternalLinkIcon");return s(),l("div",null,[a(" more "),e("h1",u,[_,t(),e("a",c,[t("169-JavaWEB结业考试四.md"),p(i)])]),v])}const h=n(d,[["render",m],["__file","java169.html.vue"]]);export{h as default};
