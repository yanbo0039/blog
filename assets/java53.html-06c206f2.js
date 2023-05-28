import{_ as l,X as a,Y as r,a1 as o,Z as e,$ as n,a2 as i,a0 as t,F as d}from"./framework-68dd73a2.js";const c="/blog/assets/Java_53_1.png",v="/blog/assets/Java_53_2.png",g="/blog/assets/Java_53_3.png",m="/blog/assets/Java_53_4.png",u="/blog/assets/Java_53_5.png",p="/blog/assets/Java_53_6.png",b="/blog/assets/Java_53_7.png",_="/blog/assets/Java_53_8.png",x="/blog/assets/Java_53_9.png",w="/blog/assets/Java_53_10.png",h="/blog/assets/Java_53_11.png",f="/blog/assets/Java_53_12.png",q="/blog/assets/Java_53_13.png",S="/blog/assets/Java_53_14.png",y="/blog/assets/Java_53_15.png",z="/blog/assets/Java_53_16.png",J="/blog/assets/Java_53_17.png",j="/blog/assets/Java_53_18.png",U="/blog/assets/Java_53_19.png",k="/blog/assets/Java_53_20.png",E="/blog/assets/Java_53_21.png",C="/blog/assets/Java_53_22.png",L="/blog/assets/Java_53_23.png",W="/blog/assets/Java_53_24.png",B="/blog/assets/Java_53_25.png",A="/blog/assets/Java_53_26.png",F="/blog/assets/Java_53_27.png",N="/blog/assets/Java_53_28.png",I="/blog/assets/Java_53_29.png",T="/blog/assets/Java_53_30.png",V="/blog/assets/Java_53_31.png",R="/blog/assets/Java_53_32.png",X="/blog/assets/Java_53_33.png",M={},P=t('<h1 id="java使用spring的di功能改造web应用" tabindex="-1"><a class="header-anchor" href="#java使用spring的di功能改造web应用" aria-hidden="true">#</a> Java使用Spring的DI功能改造WEB应用</h1><ol><li><p>创建一个动态WEB工程 Dynamic Web Project 并命名为demo_spring03_init_web <img src="'+c+'" alt="" loading="lazy"><img src="'+v+'" alt="" loading="lazy"></p></li><li><p>搭建环境（导入jar包commons-logging beans context core expression test web） <img src="'+g+'" alt="" loading="lazy"></p></li></ol><p><strong>添加到libraries路径下面</strong><img src="'+m+'" alt="" loading="lazy"></p><p>成功后会成这样</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建Servlet(controller/UserServlet)</li></ol><p><img src="'+p+'" alt="" loading="lazy"><img src="'+b+'" alt="" loading="lazy"></p><p><strong>如图所示Servlet报错</strong><img src="'+_+'" alt="" loading="lazy"></p><p><strong>解决Servlet报错:</strong><img src="'+x+'" alt="" loading="lazy"><img src="'+w+'" alt="" loading="lazy"><img src="'+h+'" alt="" loading="lazy"><img src="'+f+'" alt="" loading="lazy"><strong>如图所示已经解决咯报错</strong><img src="'+q+'" alt="" loading="lazy"><strong>删除无用的方法</strong><img src="'+S+'" alt="" loading="lazy"><strong>重写Service方法</strong><img src="'+y+'" alt="" loading="lazy"><img src="'+z+'" alt="" loading="lazy"></p><p><strong>测试是否能够请求到这个Servlet</strong><img src="'+J+'" alt="" loading="lazy"><img src="'+j+'" alt="" loading="lazy"></p><p>启动完成</p><figure><img src="'+U+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',12),D={href:"http://localhost:9090/demo_spring03_init_web/UserServlet(%E5%A4%87%E6%B3%A8%E6%88%91%E7%9A%84%E7%AB%AF%E5%8F%A3%E6%98%AF9090)",target:"_blank",rel:"noopener noreferrer"},H=t('<p>如图所示，测试成功</p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建Service(service/UserService)</li></ol><figure><img src="'+E+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package service;

public class UserService {

	public boolean login(String username,String password) {
		if(&quot;zhangsan&quot;.equals(username) &amp;&amp; &quot;123456&quot;.equals(password)) {
			return true;
		}else {
			return false;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>拷贝或新建配置文件 <img src="`+C+`" alt="" loading="lazy"><strong>beans.xml</strong></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;

&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
       xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
       xmlns:context=&quot;http://www.springframework.org/schema/context&quot; 
       xmlns:aop=&quot;http://www.springframework.org/schema/aop&quot;      
       xsi:schemaLocation=&quot;http://www.springframework.org/schema/beans
           http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-2.5.xsd
           http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop-2.5.xsd&quot;&gt;
	&lt;bean id=&quot;userService&quot; class=&quot;service.UserService&quot;&gt;&lt;/bean&gt;
&lt;/beans&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>UserServlet</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Override
protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    System.out.println(&quot;welcome!!!!&quot;);
    //假设：请求传递过来username:password
    //那么接收参数
    String username = request.getParameter(&quot;username&quot;);
    String password = request.getParameter(&quot;password&quot;);

//		UserService userService = new UserService();//之前的写法
    //使用userservice不需要servlet自己实例化
    //获取web片的spring容器
    WebApplicationContext act = WebApplicationContextUtils.getRequiredWebApplicationContext(getServletContext()); 
    UserService userService = (UserService) act.getBean(&quot;userService&quot;);
    //调用底层service
    boolean result = userService.login(username, password);
    //根据调用结果返回响应
    response.setContentType(&quot;text/html;charset=utf-8&quot;);
    if(result) {
        response.getWriter().write(&quot;&lt;script&gt;alert(&#39;login success&#39;);&lt;/script&gt;&quot;);
    }else {
        response.getWriter().write(&quot;&lt;script&gt;alert(&#39;login fail&#39;);&lt;/script&gt;&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>配置web.xml让spring容器初始化 <img src="`+L+'" alt="" loading="lazy"><img src="'+W+'" alt="" loading="lazy"></li></ol><p><strong>web.xml中配置一个侦听器侦听已配置的jar包中的spring-web包中的web.context/ContextloaderListener.css</strong><img src="'+B+`" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;web-app xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns=&quot;http://java.sun.com/xml/ns/javaee&quot; xsi:schemaLocation=&quot;http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd&quot; version=&quot;3.0&quot;&gt;
  &lt;display-name&gt;demo_spring03_init_web&lt;/display-name&gt;
  
  &lt;listener&gt;
  	&lt;listener-class&gt;
  		org.springframework.web.context.ContextLoaderListener
  	&lt;/listener-class&gt;
  &lt;/listener&gt;
  
  &lt;welcome-file-list&gt;
    &lt;welcome-file&gt;index.html&lt;/welcome-file&gt;
    &lt;welcome-file&gt;index.htm&lt;/welcome-file&gt; 
    &lt;welcome-file&gt;index.jsp&lt;/welcome-file&gt;
    &lt;welcome-file&gt;default.html&lt;/welcome-file&gt;
    &lt;welcome-file&gt;default.htm&lt;/welcome-file&gt;
    &lt;welcome-file&gt;default.jsp&lt;/welcome-file&gt;
  &lt;/welcome-file-list&gt;
&lt;/web-app&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关联源码</strong> ctrl+鼠标左键跳转</p><p><img src="`+A+'" alt="" loading="lazy"><img src="'+F+'" alt="" loading="lazy"></p><p><strong>如图所示关联成功</strong></p><p><img src="'+N+'" alt="" loading="lazy"><img src="'+I+`" alt="" loading="lazy"></p><p><strong>web.xml</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;web-app xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xmlns=&quot;http://java.sun.com/xml/ns/javaee&quot; xsi:schemaLocation=&quot;http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd&quot; version=&quot;3.0&quot;&gt;
  &lt;display-name&gt;demo_spring03_init_web&lt;/display-name&gt;
&lt;!--
配置一个侦听器，侦听web应用启动事件，
一旦web应用启动,那么listener会读取contextConfigLocation参数值,
也就是读取spring的bean的配置文件然后把文件中注册的bean全部实例化
 --&gt;
  &lt;listener&gt;
  	&lt;listener-class&gt;
  		org.springframework.web.context.ContextLoaderListener
  	&lt;/listener-class&gt;
  &lt;/listener&gt;
  &lt;context-param&gt;
  	&lt;param-name&gt;
  		contextConfigLocation
  	&lt;/param-name&gt;
  	&lt;param-value&gt;/WEB-INF/beans.xml&lt;/param-value&gt;
    &lt;!--
    如果侦听多个的写法是
    &lt;param-value&gt;/WEB-INF/beans.xml,x,x,x&lt;/param-value&gt;
    或者
    &lt;param-value&gt;/WEB-INF/*_beans.xml&lt;/param-value&gt;
    或者
    &lt;param-value&gt;/WEB-INF/beans.xml,classpath:beans.xml&lt;/param-value&gt;
    --&gt;
  &lt;/context-param&gt;
  
  
  &lt;welcome-file-list&gt;
    &lt;welcome-file&gt;index.html&lt;/welcome-file&gt;
    &lt;welcome-file&gt;index.htm&lt;/welcome-file&gt; 
    &lt;welcome-file&gt;index.jsp&lt;/welcome-file&gt;
    &lt;welcome-file&gt;default.html&lt;/welcome-file&gt;
    &lt;welcome-file&gt;default.htm&lt;/welcome-file&gt;
    &lt;welcome-file&gt;default.jsp&lt;/welcome-file&gt;
  &lt;/welcome-file-list&gt;
&lt;/web-app&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>UserService</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package service;
public class UserService {
	public UserService() {
		System.out.println(&quot;userService 实例化了&quot;);
	}

	public boolean login(String username,String password) {
		if(&quot;zhangsan&quot;.equals(username) &amp;&amp; &quot;123456&quot;.equals(password)) {
			return true;
		}else {
			return false;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>启动项目测试是否配置成功 <img src="`+T+'" alt="" loading="lazy"><img src="'+V+'" alt="" loading="lazy"></li></ol><p><strong>如图所示,测试成功</strong></p><figure><img src="'+R+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',23),O=e("strong",null,"拓展知识：",-1),Y={href:"https://www.jianshu.com/p/c6961258679a",target:"_blank",rel:"noopener noreferrer"},Z=e("ol",{start:"7"},[e("li",null,"带参访问UserServlet")],-1),$={href:"http://localhost:9090/demo_spring03_init_web/UserServlet?username=zhangsan&password=123456",target:"_blank",rel:"noopener noreferrer"},G=t('<figure><img src="'+X+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h5><p>第一步：导入jar包</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>beans context  core  expression  test web  commons-logging
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步：编写service并配置 编写servlet调用service</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//获取web版的spring容器
WebApplicationContext act=WebApplicationContextUtils.getRequiredWebApplicationContext(getServletContext());
UserService userService=(UserService) act.getBean(&quot;userService&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：在web.xml中注册listener</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 
  配置一个侦听器，侦听web应用启动事件，
  一旦web应用启动，那么listener会读取contextConfigLocation参数值，也就是读取spring的bean的配置文件
  然后把文件中注册的bean全部实例化  
   --&gt;
  
  &lt;listener&gt;
 &lt;listener-class&gt; org.springframework.web.context.ContextLoaderListener&lt;/listener-class&gt;
  &lt;/listener&gt;
  
  &lt;context-param&gt;
  &lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
  &lt;param-value&gt;/WEB-INF/beans.xml&lt;/param-value&gt;
  &lt;/context-param&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),K=e("strong",null,"Java使用spring的di功能对web应用进行改造",-1),Q={href:"https://github.com/javaobjects/demo_spring03_init_web",target:"_blank",rel:"noopener noreferrer"},ee=e("hr",null,null,-1),ne=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),se=e("hr",null,null,-1),ie=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function te(le,ae){const s=d("ExternalLinkIcon");return a(),r("div",null,[o(" more "),P,e("p",null,[n("输入"),e("a",D,[n("http://localhost:9090/demo_spring03_init_web/UserServlet(备注我的端口是9090)"),i(s)])]),H,e("p",null,[O,n(),e("a",Y,[n("Eclipse如何修改启动项目与项目名称不一致的情况"),i(s)])]),Z,e("p",null,[e("a",$,[n("http://localhost:9090/demo_spring03_init_web/UserServlet?username=zhangsan&password=123456"),i(s)])]),G,e("p",null,[n("以上就是我对于"),K,n(" 总结的全部内容，附上"),e("a",Q,[n("源代码"),i(s)])]),ee,ne,se,ie])}const oe=l(M,[["render",te],["__file","java53.html.vue"]]);export{oe as default};
