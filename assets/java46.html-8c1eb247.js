import{_ as e,X as t,Y as i,a1 as n,a0 as s}from"./framework-68dd73a2.js";const r="/blog/assets/Java_46_2.png",l={},a=s(`<h1 id="java-servlet跳转servlet以及传参" tabindex="-1"><a class="header-anchor" href="#java-servlet跳转servlet以及传参" aria-hidden="true">#</a> Java-Servlet跳转Servlet以及传参</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>最近项目中有这么一个需求：</p><p><strong>JSP中的按钮点击-------&gt;Servlet-1---------&gt;Servlet-2作出判断并传参------JSP页面接收参数并展示</strong></p><h3 id="jsp跳转servlet" tabindex="-1"><a class="header-anchor" href="#jsp跳转servlet" aria-hidden="true">#</a> JSP跳转Servlet</h3><p><strong>login.jsp button2跳转到ToRegisterViewServlet</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;form name=&quot;form1&quot; method=&quot;post&quot; action=&quot;&lt;%=request.getContextPath()%&gt;/LoginServlet&quot; id=&quot;loginForm&quot;&gt;
 &lt;--此处的action跳转到对应的LoginServlet是通过button为submit提交触发的--&gt;
   &lt;table width=&quot;933&quot; border=&quot;0&quot; align=&quot;center&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; style=&quot;margin:120px;&quot;&gt;
  &lt;tr&gt;
    &lt;td height=&quot;412&quot; valign=&quot;top&quot; background=&quot;&lt;%=request.getContextPath()%&gt;/images/bg_imgJava_46_1.jpg&quot;&gt;
    &lt;table height=&quot;300&quot; border=&quot;0&quot; cellspacing=&quot;0&quot;&gt;
      &lt;tr&gt;
        &lt;td colspan=&quot;2&quot;&gt;
        &lt;table width=&quot;200&quot; border=&quot;0&quot; cellspacing=&quot;0&quot;&gt;
          &lt;tr&gt;
            &lt;td width=&quot;78&quot;&gt;
            &lt;input name=&quot;button&quot;  type=&quot;button&quot;  class=&quot;butlogin&quot; id=&quot;button&quot; value=&quot;&quot; onClick=&quot;UserLogin()&quot;&gt;
            &lt;--这是登录按钮--&gt;
            &lt;/td&gt;
            &lt;td&gt;&amp;nbsp;&lt;/td&gt;
            &lt;td width=&quot;78&quot;&gt;
            &lt;input name=&quot;button2&quot;  type=&quot;button&quot;  class=&quot;butzc&quot; id=&quot;button2&quot;value=&quot;&quot; onClick=&quot;UserRegistration()&quot;&gt;
            &lt;--这是注册铵钮需要跳转到另一个Servlet--&gt;
            &lt;script&gt;
        function UserRegistration(){
		location.href = &quot;&lt;%=request.getContextPath()%&gt;/ToRegisterViewServlet&quot; ;
	}
            &lt;/script&gt;
            &lt;/td&gt;
          &lt;/tr&gt;
        &lt;/table&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
 &lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ToRegisterViewServlet</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.ptcs.my12306.service.ProvinceService;

/**
 * Servlet implementation class ToRegisterViewServlet
 */
@WebServlet(description = &quot;去往注册页面的servlet&quot;, urlPatterns = { &quot;/ToRegisterViewServlet&quot; })
public class ToRegisterViewServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		//把所有省份数据传给页面
		request.setAttribute(&quot;provinces&quot;, ProvinceService.getInstance().getAllProvince());
		request.getRequestDispatcher(&quot;/user_register.jsp&quot;).forward(request, response);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>user_register.jsp</strong><img src="`+r+`" alt="" loading="lazy"> 核心代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;form action=&quot;&lt;%=request.getContextPath()%&gt;/UserServlet&quot; method=&quot;post&quot;&gt;
&lt;input name=&quot;submit&quot; type=&quot;submit&quot; value=&quot;提交&quot;&gt;
&lt;input name=&quot;reset&quot; type=&quot;submit&quot; value=&quot;重置&quot;&gt;
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>UserServlet</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.ptcs.my12306.entity.Users;
import net.ptcs.my12306.service.UserService;

/**
 * Servlet implementation class UserServlet
 */
@WebServlet(description = &quot;&quot;, urlPatterns = { &quot;/UserServlet&quot; })
public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding(&quot;utf-8&quot;);
		response.setCharacterEncoding(&quot;utf-8&quot;);
		
		//1.获取数据
		String username=request.getParameter(&quot;username&quot;);
		String password=request.getParameter(&quot;password&quot;);
		String confirm_password=request.getParameter(&quot;confirm_password&quot;);
		String sex=request.getParameter(&quot;sex&quot;);
		String birthday_date=request.getParameter(&quot;birthday&quot;);
		
		//2.数据的非空校验和合法性校验
		StringBuffer sb = validateRegisterForm(username, password, confirm_password);
		
		if(sb.length() &gt; 0) {
			//如果校验不通过，那么返回注册页面，让用户再注册一次
			request.setAttribute(&quot;message&quot;, &quot;必填信息为空，请重新注册&quot;);
			request.getRequestDispatcher(&quot;/ToRegisterViewServlet&quot;).forward(request, response);
		}else {
			//3.调用底层service的注册方法添加用户到数据库
			Date birthday=null;
			try {
				birthday=new SimpleDateFormat(&quot;yyyy-MM-dd&quot;).parse(request.getParameter(&quot;birthday&quot;));
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			UserService userService=UserService.getInstance();
			
			Users user = new Users(request.getParameter(&quot;username&quot;), request.getParameter(&quot;password&quot;), 
					request.getParameter(&quot;sex&quot;).charAt(0), birthday);
			user.setLoginIp(request.getRemoteAddr());
			//服务端校验通过之后，注册方法调用之前，应该先判断用户名是否已经存在
			/*
			 * 则需要定义判断用户名是否已经存在的方法，如果存在则返回注册页面，提示用户名已经存在，
			 * 								 如果不存在则继续注册
			 */

			if(userService.isExistsUserName(username))
			{
				//用户名已经存在，回到注册页面
				request.setAttribute(&quot;message&quot;, &quot;用户名已被占用&quot;);
				request.getRequestDispatcher(&quot;/ToRegisterViewServlet&quot;).forward(request, response);
		
			}else
			{

				if(userService.register(user))
				{
					//生产环境不用挨骂的代码：需求,既要有弹窗又要重定向登录页面
					
					response.sendRedirect(request.getContextPath()+&quot;/login.jsp?message=registersuccess&quot;);
				}else
				{
					//注册失败，回到注册页面
					request.setAttribute(&quot;message&quot;, &quot;注册失败&quot;);
					request.getRequestDispatcher(&quot;/ToRegisterViewServlet&quot;).forward(request, response);
				}
			}
		}
	}
	/**
	 * 对表单进行服务端校验的方法 
	 * @param username
	 * @param password
	 * @param confirm_password
	 * @return 
	 */
	private StringBuffer validateRegisterForm(String username, String password,
			String confirm_password) {
		StringBuffer validate_message=new StringBuffer();
		if(username==null||&quot;&quot;.equals(username))
		{
			validate_message.append(&quot;用户名为空&quot;);
		}
if(password==null||&quot;&quot;.equals(password)||confirm_password==null||&quot;&quot;.equals(confirm_password))
		{
			validate_message.append(&quot;密码或者确认密码为空&quot;);
		}
		if(!password.equals(confirm_password))
		{
			validate_message.append(&quot;两次密码输入不一致&quot;);
		}
		if(validate_message.length()&gt;0)
		{
			System.out.println(validate_message.toString());
			return validate_message;
		}
		return validate_message;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此处设置的键是<strong>message</strong>而UserServlet是跳转到 ToRegisterViewServlet 而 ToRegisterViewServlet 是跳转到 user_register.jsp</p><p><strong>user_register.jsp接收参数</strong></p><ol><li>jsp页面中写java代码</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;span class=&quot;text_red&quot;&gt;
&lt;%=request.getAttribute(&quot;message&quot;)==null?&quot;&quot;:request.getAttribute(&quot;message&quot;) %&gt; &lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>EL表达式</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;span class=&quot;text_red&quot;&gt;\${message}&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>拓展:</strong> EL表达式\${message}默认从请求域拿数据 第一个是request 第二个是session 第三个是Application 并且EL表达式会默认进行非空判断</p><h4 id="效果如下" tabindex="-1"><a class="header-anchor" href="#效果如下" aria-hidden="true">#</a> 效果如下：</h4><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java-Servlet跳转Servlet以及传参</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,25);function d(v,u){return t(),i("div",null,[n(" more "),a])}const c=e(l,[["render",d],["__file","java46.html.vue"]]);export{c as default};
