import{_ as t,X as e,Y as i,a1 as n,a0 as s}from"./framework-68dd73a2.js";const r={},l=s(`<h1 id="java-使用md5对密码进行加密" tabindex="-1"><a class="header-anchor" href="#java-使用md5对密码进行加密" aria-hidden="true">#</a> Java-使用MD5对密码进行加密</h1><p><strong>Md5Utils.java</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.util;
import java.security.MessageDigest;
public class Md5Utils {
	public static void main(String[] args) {
		System.out.println(Md5Utils.md5(&quot;123456&quot;));
	}
	public final static String md5(String s) {
		char hexDigits[] = { &#39;0&#39;, &#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;, &#39;7&#39;, &#39;8&#39;, &#39;9&#39;,
				&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39; };
		try {
			byte[] btInput = s.getBytes();
			MessageDigest mdInst = MessageDigest.getInstance(&quot;MD5&quot;);
			mdInst.update(btInput);
			byte[] md = mdInst.digest();
			int j = md.length;
			char str[] = new char[j * 2];
			int k = 0;
			for (int i = 0; i &lt; j; i++) {
				byte byte0 = md[i];
				str[k++] = hexDigits[byte0 &gt;&gt;&gt; 4 &amp; 0xf];
				str[k++] = hexDigits[byte0 &amp; 0xf];
			}
			return new String(str);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_50_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>得到结果为：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>e10adc3949ba59abbe56e057f20f883e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开Pl/sql工具将所有的测试用户密码均加密操作 <strong>sql语句：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from MY12306_TAB_USER t

update my12306_tab_user set password = &#39;e10adc3949ba59abbe56e057f20f883e&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_50_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="在登陆时使用md5-loginservlet-java" tabindex="-1"><a class="header-anchor" href="#在登陆时使用md5-loginservlet-java" aria-hidden="true">#</a> 在登陆时使用Md5 LoginServlet.java</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.controller;

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
			if(session_code.equalsIgnoreCase(code)) {//不区分大小写的比对
				/* 怎么写登录？
				 * 2.调用底层service的login方法，返回一条用户数据，这是一种用户体验
				 * 
				 * 如果用户信息不为空，则登录成功，跳转到用户模块的主页面
				 * 如果用户信息为空，则登录失败，提示失败信息并返回登录页面
				 */
				UserService service = UserService.getInstance();
				
				Users user = service.login(username,Md5Utils.md5(password));
				System.out.println(&quot;user:67line &quot; + user);
				if(user == null) {
					//登录失败
//					request.setAttribute(&quot;message&quot;, &quot;用户名或者密码错误&quot;);//这里是测试jsp页面java代码的接收参数
					request.setAttribute(&quot;login_message&quot;, &quot;用户名或者密码错误&quot;);
					request.getRequestDispatcher(&quot;/login.jsp&quot;).forward(request, response);
				}else {
					//登陆成功
					//登录成功
					//在主页面中显示用户信息,1.把用户信息放入一个地方，这个地方各个页面都可以从这里拿数据，
					//那么这个地方是HttpSession
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="在注册时使用md5-userservlet-java" tabindex="-1"><a class="header-anchor" href="#在注册时使用md5-userservlet-java" aria-hidden="true">#</a> 在注册时使用Md5 UserServlet.java</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.controller;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.ptcs.my12306.entity.CertType;
import net.ptcs.my12306.entity.City;
import net.ptcs.my12306.entity.UserType;
import net.ptcs.my12306.entity.Users;
import net.ptcs.my12306.service.UserService;
import net.ptcs.my12306.util.Md5Utils;

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
		String username=request.getParameter(&quot;username&quot;);//用户名
		String password=request.getParameter(&quot;password&quot;);//密码
		String confirm_password=request.getParameter(&quot;confirm_password&quot;);//确认密码
		String real_name = request.getParameter(&quot;real_name&quot;);//真实姓名
		String sex=request.getParameter(&quot;sex&quot;);//性别
		String province = request.getParameter(&quot;province&quot;);//省份
		String city = request.getParameter(&quot;city&quot;);//城市
		String cert_type = request.getParameter(&quot;cert_type&quot;);//证件类型
		String cert = request.getParameter(&quot;cert&quot;);//证件号码
		String birthday_date=request.getParameter(&quot;birthday&quot;);//出生日期
		String user_type = request.getParameter(&quot;user_type&quot;);//旅客类型
		String content = request.getParameter(&quot;content&quot;);//备注
		String agree = request.getParameter(&quot;agree&quot;);//是否同意on/null 被选中/非选

		//2.数据的非空校验和合法性校验
		StringBuffer sb = validateRegisterForm(username, password, confirm_password,agree);
		
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

//			Integer id, String username, String password, String rule,
//			String realname, Character sex, City city, CertType certtype,
//			String cert, Date birthday, UserType usertype, String content,
//			Character status, String loginIp, String imagePath   String.charAt(Integer.parseInt(sex))  cert_type user_type 1
			
//			Users user = new Users(null,username,password,&quot;2&quot;,real_name,null,
//					new City().setCityId(city),null,cert,birthday,null,content,null,request.getRemoteAddr(),null);//此处应该将所有的数据插入
			
			Users user = new Users();
			user.setUsername(username);//用户名
			user.setPassword(Md5Utils.md5(password));//密码
			user.setRule(&quot;2&quot;);//用户类型 2为普通用户
			user.setRealname(real_name);//真实姓名
			user.setSex(sex.charAt(0));//性别 String 转 Character
			
			City c = new City();
			c.setCityId(city);
			user.setCity(c);//获取城市 String 转 引用类型
			
			user.setCerttype(new CertType(Integer.parseInt(cert_type), null));//证件类型 String 转 引用类型
			
			user.setCert(cert);//证件号码
			
			try {
				user.setBirthday(new SimpleDateFormat(&quot;yyyy-MM-dd&quot;).parse(birthday_date));
			} catch (ParseException e) {
				e.printStackTrace();
			}//出身日期 String 转 date
			
			user.setUsertype(new UserType(Integer.parseInt(user_type), null));//旅客类型 String 转 引用类型
			
			user.setContent(content);//备注
			user.setLoginIp(request.getRemoteAddr());//设置IP
			
			//服务端校验通过之后，注册方法调用之前，应该先判断用户名是否已经存在
			/*
			 * 则需要定义判断用户名是否已经存在的方法，如果存在则返回注册页面，提示用户名已经存在，
			 * 								 如果不存在则继续注册
			 */

			if(userService.isExistsUserName(username))
			{
				//用户名已经存在，回到注册页面
				request.setAttribute(&quot;message&quot;, &quot;用户名已被占用&quot;);
//				request.getRequestDispatcher(&quot;/user_register.jsp&quot;).forward(request, response);
				request.getRequestDispatcher(&quot;/ToRegisterViewServlet&quot;).forward(request, response);
			}else
			{
				if(userService.register(user))
				{
					//System.out.println(&quot;register success&quot;);
					//注册成功，重定向去到登录页面
					//request.getRequestDispatcher(&quot;/login.jsp&quot;).forward(request, response);
					/*
					 
					 //弹窗效果:技术实现，对响应进行设置，响应就是response
					response.setContentType(&quot;text/html;charset=utf-8&quot;);
					//获取输出流，输出一段script代码
					PrintWriter pw=response.getWriter();
					pw.println(&quot;&lt;script&gt;alert(&#39;&quot;+&quot;注册成功&quot;+&quot;&#39;);location.href=&#39;login.jsp&#39;;&lt;/script&gt;&quot;);
				
					 
					 */
					//生产环境不用挨骂的代码：需求,既要有弹窗又要重定向登录页面
					
					response.sendRedirect(request.getContextPath()+&quot;/login.jsp?message=registersuccess&quot;);
					
					//response.sendRedirect(request.getContextPath()+&quot;/login.jsp&quot;);//request.getContextPath()===/my12306_user_register
				}else
				{
//					System.out.println(&quot;register fail&quot;);
					//注册失败，回到注册页面
					request.setAttribute(&quot;message&quot;, &quot;注册失败&quot;);
					//request.getRequestDispatcher(&quot;/user_register.jsp&quot;).forward(request, response);
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
	private StringBuffer validateRegisterForm(String username, String password,String confirm_password,String agree) {
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
		if(agree == null) {
			validate_message.append(&quot;请阅读《中国铁路客户服务中心网站服务条款》并勾选&quot;);
		}
		if(validate_message.length()&gt;0)
		{
			System.out.println(validate_message.toString());
			return validate_message;
		}
		return validate_message;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我对于Md5加密密码使用的总结</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,18);function d(a,v){return e(),i("div",null,[n(" more "),l])}const c=t(r,[["render",d],["__file","java50.html.vue"]]);export{c as default};
