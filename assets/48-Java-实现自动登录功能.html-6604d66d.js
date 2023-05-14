import{_ as t,X as e,Y as i,a1 as n,a0 as s}from"./framework-68dd73a2.js";const l="/blog/assets/Java_48_1.png",d="/blog/assets/Java_48_3.png",u="/blog/assets/Java_48_1.gif",a={},r=s('<h1 id="java-实现自动登录功能" tabindex="-1"><a class="header-anchor" href="#java-实现自动登录功能" aria-hidden="true">#</a> Java-实现自动登录功能</h1><p><strong>勾选自动登录：</strong><em>会写cookie:</em> 其实是一个文件 保存在本地硬盘下面 可以通过资源管理器访问到</p><p>cookie文件中保存了你的username password 用户类型，用于下次登陆，只不过是自动的</p><p>如图所示，页面中有一个自动登陆的复选框</p><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>**login.jsp：**核心代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;form name=&quot;form1&quot; method=&quot;post&quot; action=&quot;&lt;%=request.getContextPath()%&gt;/LoginServlet&quot; id=&quot;loginForm&quot;&gt;
   &lt;table width=&quot;933&quot; border=&quot;0&quot; align=&quot;center&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; style=&quot;margin:120px;&quot;&gt;
  &lt;tr&gt;
    &lt;td height=&quot;412&quot; valign=&quot;top&quot; background=&quot;&lt;%=request.getContextPath()%&gt;/images/bg_imgJava_48_2.jpg&quot;&gt;&lt;table height=&quot;300&quot; border=&quot;0&quot; cellspacing=&quot;0&quot;&gt;
      &lt;tr&gt;
        &lt;td width=&quot;538&quot;&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td height=&quot;130&quot; colspan=&quot;6&quot;&gt;&amp;nbsp;&lt;/td&gt;
        &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td rowspan=&quot;9&quot;&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td width=&quot;98&quot; height=&quot;20&quot; align=&quot;right&quot;&gt;&lt;img src=&quot;&lt;%=request.getContextPath()%&gt;/images/text_yh.gif&quot; width=&quot;60&quot; height=&quot;18&quot;&gt;&lt;/td&gt;
        &lt;td width=&quot;16&quot;&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td width=&quot;136&quot;&gt;
        &lt;input name=&quot;username&quot; type=&quot;text&quot; id=&quot;textfield&quot; size=&quot;18&quot; /&gt;
        &lt;%-- &lt;%  String login_message=(String)request.getAttribute(&quot;message&quot;);
        if(login_message!=null)
        {
        %&gt;	
        &lt;%=login_message%&gt;
        &lt;% }
        %&gt; --%&gt;
        &lt;span class=&quot;text_red&quot;&gt;\${login_message}&lt;/span&gt;
        &lt;/td&gt;
        &lt;td width=&quot;55&quot;&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td width=&quot;44&quot;&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td width=&quot;32&quot;&gt;&amp;nbsp;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td height=&quot;20&quot; align=&quot;right&quot;&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td height=&quot;20&quot; align=&quot;right&quot;&gt;&lt;img src=&quot;&lt;%=request.getContextPath()%&gt;/images/text_password.gif&quot; width=&quot;60&quot; height=&quot;18&quot;&gt;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&lt;input name=&quot;password&quot; type=&quot;text&quot; id=&quot;textfield2&quot; size=&quot;18&quot; /&gt;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td height=&quot;20&quot; align=&quot;right&quot;&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td height=&quot;20&quot; align=&quot;right&quot;&gt;&lt;img src=&quot;&lt;%=request.getContextPath()%&gt;/images/text_yzm.gif&quot; width=&quot;60&quot; height=&quot;18&quot;&gt;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&lt;input name=&quot;code&quot; type=&quot;text&quot; id=&quot;textfield3&quot; size=&quot;18&quot; /&gt;&lt;/td&gt;
        &lt;td&gt;
        &lt;span class=&quot;text_cray1&quot;&gt;
        &lt;img src=&quot;&lt;%=request.getContextPath()%&gt;/ValidateCodeServlet&quot; alt=&quot;&quot; height=&quot;20&quot; id=&quot;login_image_code&quot; onclick=&quot;refresh()&quot;/&gt;
        &lt;/span&gt;&lt;/td&gt;
        &lt;td&gt;&lt;img src=&quot;&lt;%=request.getContextPath()%&gt;/images/text_sx.gif&quot; width=&quot;32&quot; height=&quot;18&quot; onclick=&quot;refresh()&quot; &gt;&lt;/td&gt;
        &lt;td align=&quot;left&quot;&gt;&amp;nbsp;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;script&gt;
         function refresh(){
        	 document.querySelector(&quot;#login_image_code&quot;).src = &quot;&lt;%=request.getContextPath()%&gt;/ValidateCodeServlet?data=&quot;+new Date();
         }
      &lt;/script&gt;
      &lt;tr&gt;
        &lt;td height=&quot;30&quot;&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td valign=&quot;bottom&quot;&gt;&lt;table width=&quot;100%&quot; border=&quot;0&quot; cellspacing=&quot;0&quot;&gt;
          &lt;tr&gt;
            &lt;td width=&quot;26&quot; align=&quot;left&quot;&gt;&lt;input name=&quot;auto_Login&quot; type=&quot;checkbox&quot; value=&quot;auto&quot; style=&quot; margin:0 auto;&quot;/&gt;&lt;/td&gt;
&lt;--此处是自动登录的复选框---&gt;
            &lt;td width=&quot;170&quot;&gt;&lt;img src=&quot;&lt;%=request.getContextPath()%&gt;/images/text_zddl.gif&quot; width=&quot;60&quot; height=&quot;18&quot;&gt;&lt;/td&gt;
          &lt;/tr&gt;
        &lt;/table&gt;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td height=&quot;20&quot;&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td colspan=&quot;2&quot;&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td height=&quot;20&quot;&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td colspan=&quot;2&quot;&gt;&lt;table width=&quot;200&quot; border=&quot;0&quot; cellspacing=&quot;0&quot;&gt;
          &lt;tr&gt;
            &lt;td width=&quot;78&quot;&gt;&lt;input name=&quot;button&quot;  type=&quot;button&quot;  class=&quot;butlogin&quot; id=&quot;button&quot; value=&quot;&quot; onClick=&quot;UserLogin()&quot;&gt;&lt;/td&gt;
            &lt;td&gt;&amp;nbsp;&lt;/td&gt;
            &lt;td width=&quot;78&quot;&gt;&lt;input name=&quot;button2&quot;  type=&quot;button&quot;  class=&quot;butzc&quot; id=&quot;button2&quot;value=&quot;&quot; onClick=&quot;UserRegistration()&quot;&gt;&lt;/td&gt;
          &lt;/tr&gt;
        &lt;/table&gt;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td height=&quot;20&quot;&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
        &lt;td&gt;&amp;nbsp;&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
 &lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>LoginServlet.java</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.controller;

import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.ptcs.my12306.entity.Users;
import net.ptcs.my12306.service.UserService;
import net.ptcs.my12306.util.Md5Utils;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet(description = &quot;&quot;, urlPatterns = { &quot;/LoginServlet&quot; })
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//解决乱码问题
		request.setCharacterEncoding(&quot;utf-8&quot;);
		response.setCharacterEncoding(&quot;utf-8&quot;);
		//1.获取登录页面的数据
		String username = request.getParameter(&quot;username&quot;);
		String password = request.getParameter(&quot;password&quot;);
		String code = request.getParameter(&quot;code&quot;);
		String auto = request.getParameter(&quot;auto_Login&quot;);//获取用户是否自动登录的复选框的值

		//2、服务端非空校验
		StringBuffer sb = new StringBuffer();
		if(username == null || &quot;&quot;.equals(username.trim())) {
			sb.append(&quot;用户名为空&quot;);
		}
		if(password == null || &quot;&quot;.equals(password.trim())) {
			if(sb.length() == 0) {//此处是为咯让页面显示只有一个提示，而不是一堆提示信息
				sb.append(&quot;密码为空&quot;);
			}
		}
		if(code == null || &quot;&quot;.equals(password.trim())) {
			if(sb.length() == 0) {
				sb.append(&quot;验证码为空&quot;);
			}
		}
		if(sb.length() &gt; 0) {
			request.setAttribute(&quot;login_message&quot;, sb.toString());
			request.getRequestDispatcher(&quot;/login.jsp&quot;).forward(request, response);
		}else {
			//3.验证码合法性校验
			String session_code=(String) request.getSession().getAttribute(&quot;code&quot;);
			if(session_code.equalsIgnoreCase(code)) {
				/* 怎么写登录？
				 * 2.调用底层service的login方法，返回一条用户数据，这是一种用户体验
				 * 
				 * 如果用户信息不为空，则登录成功，跳转到用户模块的主页面
				 * 如果用户信息为空，则登录失败，提示失败信息并返回登录页面
				 */
				UserService service = UserService.getInstance();
				
				Users user = service.login(username,password);
				if(user == null) {
					//登录失败
					request.setAttribute(&quot;message&quot;, &quot;用户名或者密码错误&quot;);
					request.getRequestDispatcher(&quot;/login.jsp&quot;).forward(request, response);
				}else {
					//登陆成功
					//登录成功
					//在主页面中显示用户信息,1.把用户信息放入一个地方，这个地方各个页面都可以从这里拿数据，那么这个地方是HttpSession
					HttpSession session=request.getSession();
					session.setAttribute(&quot;user&quot;, user);
					
					//根据用户是否自动登录，来写cookie
					if(&quot;auto&quot;.equals(auto))
					{
						//写Cookie的套路：先new一个cookie，然后调用response的addCookie方法就可以写cookie了
						Cookie username_cookie=new Cookie(&quot;username&quot;, URLEncoder.encode(username, &quot;utf-8&quot;));
						username_cookie.setMaxAge(7*24*60*60);//过期时间为一周（备注：值为-1会话级cookie关闭浏览器失效 值为 0不记录cookie）
						username_cookie.setPath(request.getContextPath()+&quot;/&quot;);//设置cookie到当前工程的路径
						
						Cookie password_cookie=new Cookie(&quot;password&quot;,Md5Utils.md5(password));
						password_cookie.setMaxAge(7*24*60*60);
						password_cookie.setPath(request.getContextPath()+&quot;/&quot;);
						
						Cookie rule_cookie=new Cookie(&quot;rule&quot;,user.getRule());
						rule_cookie.setMaxAge(7*24*60*60);
						rule_cookie.setPath(request.getContextPath()+&quot;/&quot;);
						
						response.addCookie(username_cookie);
						response.addCookie(password_cookie);
						response.addCookie(rule_cookie);
					}
					
					//成功后跳转到哪？要看用户的rule：如果是管理员，去往管理员主页面；如果是普通用户，去往普通用户主页面
					if(&quot;2&quot;.equals(user.getRule())) {
						//普通用户
						request.getRequestDispatcher(&quot;user/index.jsp&quot;).forward(request,response);
					}else {
						//管理员
						request.getRequestDispatcher(&quot;admin/index.jsp&quot;).forward(request, response);
					}
				}
			}else {
				//验证码输入错误
				request.setAttribute(&quot;login_message&quot;, &quot;验证码输入错误&quot;);
				request.getRequestDispatcher(&quot;/login.jsp&quot;).forward(request, response);
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>login.jsp</strong>里写判断是否有cookie的代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;%
//如果用户前面登录时勾选了自动登录，那么访问登录页面时需要先获取cookie中的内容，如果有，就说明上次写cookie写成功了，
//那么根据cookie的内容自动跳转到对应的首页面
Cookie[] cookies=request.getCookies();
if(cookies!=null)
{
	String username=null;
	String password=null;
	String rule=null;
	Users user=null;
	for(Cookie c:cookies)
	{
		if(&quot;username&quot;.equals(c.getName()))
		{
			username=c.getValue();
		}
		if(&quot;password&quot;.equals(c.getName()))
		{
			password=c.getValue();
		}
		if(&quot;rule&quot;.equals(c.getName()))
		{
			rule=c.getValue();
		}
	}
	if(username!=null&amp;&amp;password!=null&amp;&amp;rule!=null&amp;&amp;!&quot;&quot;.equals(username))
	{
		user=new Users();
		user.setUsername(username);
		user.setPassword(password);
		user.setRule(rule);
		
		session.setAttribute(&quot;user&quot;, user);
		
		//跳转到对应权限页面
		if(&quot;1&quot;.equals(rule))
		{
			response.sendRedirect(&quot;admin/index.jsp&quot;);
		}else if(&quot;2&quot;.equals(rule))
		{
			response.sendRedirect(&quot;user/index.jsp&quot;);
		}
	}
}
%&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h5><p><img src="`+d+'" alt="" loading="lazy"> 登陆进去之后，可以看到浏览器里是有记录对应的cookie值</p><p>下面见证奇迹的时刻到咯。。。。。。 <img src="'+u+'" alt="" loading="lazy"></p><h6 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h6><p>从上面的动态图可以看到，输入登录页面直接跳过咯输入用户名跟密码的页面直接跳到咯主页面，以后自动登录功能实现成功。</p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',20);function o(v,c){return e(),i("div",null,[n(" more "),r])}const g=t(a,[["render",o],["__file","48-Java-实现自动登录功能.html.vue"]]);export{g as default};
