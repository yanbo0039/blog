import{_ as t,X as e,Y as n,a1 as i,a0 as s}from"./framework-68dd73a2.js";const l="/blog/assets/Java_52_1.png",d="/blog/assets/Java_52_2.png",u={},r=s('<h1 id="java实现用户注册功能" tabindex="-1"><a class="header-anchor" href="#java实现用户注册功能" aria-hidden="true">#</a> Java实现用户注册功能</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="my12306-tab-user用户表" tabindex="-1"><a class="header-anchor" href="#my12306-tab-user用户表" aria-hidden="true">#</a> my12306_tab_user用户表</h3><table><thead><tr><th>列名</th><th>数据类型</th><th>可否为空</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>number(11)</td><td>not null</td><td>id(Parimary主键)</td></tr><tr><td>username</td><td>varchar2(30)</td><td>not null</td><td>用户名(Unique唯一)</td></tr><tr><td>password</td><td>varchar2(50)</td><td>not null</td><td>密码</td></tr><tr><td>rule</td><td>varchar2(2)</td><td>not null</td><td>权限(1 管理员 2 普通用户)</td></tr><tr><td>realname</td><td>varchar2(50)</td><td>not null</td><td>真实姓名</td></tr><tr><td>sex</td><td>char(1)</td><td>not null</td><td>性别(1 男 2 女)</td></tr><tr><td>city</td><td>number(11)</td><td>not null</td><td>城市信息id值((Foreign外键my12306_tab_city))</td></tr><tr><td>cert_type</td><td>number(11)</td><td>not null</td><td>证件类型(1二代身份证2港澳通行证3台湾通行证4护照)(Foreign外键my12306_tab_certtype)</td></tr><tr><td>cert</td><td>varchar2(50)</td><td>not null</td><td>证件号码</td></tr><tr><td>birthday</td><td>date</td><td>not null</td><td>生日</td></tr><tr><td>user_type</td><td>number(11)</td><td>not null</td><td>旅客类型(1成人2儿童3学生4残疾军人、伤残人民警察)((Foreign外键my12306_tab_usertype))</td></tr><tr><td>content</td><td>varchar2(3000)</td><td>null</td><td>备注信息</td></tr><tr><td>status</td><td>char(1)</td><td>not null</td><td>用户状态(0 无效 1 有效)</td></tr><tr><td>login_ip</td><td>varchar2(50)</td><td>not null</td><td>登陆IP</td></tr><tr><td>image_path</td><td>varchar2(200)</td><td>not null</td><td>用户头像路径</td></tr><tr><td><img src="'+l+`" alt="" loading="lazy"></td><td></td><td></td><td></td></tr></tbody></table><h3 id="实体类-users-java" tabindex="-1"><a class="header-anchor" href="#实体类-users-java" aria-hidden="true">#</a> 实体类 Users.java</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.entity;

import java.util.Date;

/**
 * 用户实体类
 * @author hp
 */
public class Users {
	private Integer id;
	private String username;
	private String password;
	private String rule;// 1、管理员 2、普通用户
	private String realname;
	private Character sex;//性别(1、男 2、女)
	private City city;
	private CertType certtype;//证件类型1、二代身份证 2、港澳通行证 3、台湾通行证 4、护照
	private String cert;//证件号码
	private Date birthday;
	private UserType usertype;
	private String content;
	private Character status;//用户状态（0、无效  1、有效 ）
	private String loginIp;
	private String imagePath;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRule() {
		return rule;
	}
	public void setRule(String rule) {
		this.rule = rule;
	}
	public String getRealname() {
		return realname;
	}
	public void setRealname(String realname) {
		this.realname = realname;
	}
	public Character getSex() {
		return sex;
	}
	public void setSex(Character sex) {
		this.sex = sex;
	}
	public City getCity() {
		return city;
	}
	public void setCity(City city) {
		this.city = city;
	}
	public CertType getCerttype() {
		return certtype;
	}
	public void setCerttype(CertType certtype) {
		this.certtype = certtype;
	}
	public String getCert() {
		return cert;
	}
	public void setCert(String cert) {
		this.cert = cert;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	public UserType getUsertype() {
		return usertype;
	}
	public void setUsertype(UserType usertype) {
		this.usertype = usertype;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Character getStatus() {
		return status;
	}
	public void setStatus(Character status) {
		this.status = status;
	}
	public String getLoginIp() {
		return loginIp;
	}
	public void setLoginIp(String loginIp) {
		this.loginIp = loginIp;
	}
	public String getImagePath() {
		return imagePath;
	}
	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	public Users() {
		super();
	}
	public Users(Integer id, String username, String password, String rule,
			String realname, Character sex, City city, CertType certtype,
			String cert, Date birthday, UserType usertype, String content,
			Character status, String loginIp, String imagePath) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.rule = rule;
		this.realname = realname;
		this.sex = sex;
		this.city = city;
		this.certtype = certtype;
		this.cert = cert;
		this.birthday = birthday;
		this.usertype = usertype;
		this.content = content;
		this.status = status;
		this.loginIp = loginIp;
		this.imagePath = imagePath;
	}
	@Override
	public String toString() {
		return &quot;Users [id=&quot; + id + &quot;, username=&quot; + username + &quot;, password=&quot;
				+ password + &quot;, rule=&quot; + rule + &quot;, realname=&quot; + realname
				+ &quot;, sex=&quot; + sex + &quot;, city=&quot; + city + &quot;, certtype=&quot; + certtype
				+ &quot;, cert=&quot; + cert + &quot;, birthday=&quot; + birthday + &quot;, usertype=&quot;
				+ usertype + &quot;, content=&quot; + content + &quot;, status=&quot; + status
				+ &quot;, loginIp=&quot; + loginIp + &quot;, imagePath=&quot; + imagePath + &quot;]\\n&quot;;
	}
	public Users(String username, String password, Character sex, Date birthday) {
		super();
		this.username = username;
		this.password = password;
		this.sex = sex;
		this.birthday = birthday;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册页面-user-register-jsp" tabindex="-1"><a class="header-anchor" href="#注册页面-user-register-jsp" aria-hidden="true">#</a> 注册页面 user_register.jsp</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot;
	pageEncoding=&quot;UTF-8&quot;%&gt;
&lt;!-- 使用jstl:java standard tag library(单词缩写)
 1.需要先导入jstl.jar包 2.页面通过指令引入标签  3.使用标签 --&gt;
&lt;%@taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot;%&gt;
&lt;!DOCTYPE HTML&gt;
&lt;html&gt;

&lt;head&gt;
	&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;
	&lt;title&gt;注册信息&lt;/title&gt;
	&lt;link href=&quot;css/css.css&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot;&gt;
&lt;/head&gt;
&lt;%
	request.setCharacterEncoding(&quot;utf-8&quot;);
	response.setCharacterEncoding(&quot;utf-8&quot;);
%&gt;

&lt;body leftmargin=&quot;0&quot; topmargin=&quot;0&quot; marginwidth=&quot;0&quot; marginheight=&quot;0&quot;&gt;
	&lt;form action=&quot;&lt;%=request.getContextPath()%&gt;/UserServlet&quot; method=&quot;post&quot;&gt;
		&lt;table width=&quot;100%&quot; border=&quot;0&quot; align=&quot;center&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;
			&lt;tr&gt;
				&lt;td colspan=&quot;2&quot; background=&quot;images/ny_top_img_bg.gif&quot;&gt;&lt;img src=&quot;images/ny_top_img.gif&quot; width=&quot;650&quot;
						height=&quot;108&quot;&gt;
				&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
				&lt;td width=&quot;75&quot; height=&quot;23&quot; bgcolor=&quot;#deedf8&quot;&gt;&amp;nbsp;&lt;/td&gt;
				&lt;td width=&quot;958&quot; align=&quot;left&quot; bgcolor=&quot;#deedf8&quot; class=&quot;text_cray1&quot;&gt;当前位置:注册信息
				&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;
		&lt;table width=&quot;100%&quot; border=&quot;0&quot; align=&quot;center&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;
			&lt;tr&gt;
				&lt;td background=&quot;images/bg_point_write.gif&quot;&gt;
					&lt;table width=&quot;835&quot; border=&quot;0&quot; align=&quot;center&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;
						&lt;tr&gt;
							&lt;td height=&quot;30&quot; colspan=&quot;2&quot; align=&quot;center&quot;&gt;&amp;nbsp;&lt;/td&gt;
						&lt;/tr&gt;
						&lt;tr&gt;
							&lt;td width=&quot;41&quot; height=&quot;7&quot; align=&quot;center&quot;&gt;&amp;nbsp;&lt;/td&gt;
							&lt;td width=&quot;794&quot; height=&quot;30&quot; align=&quot;left&quot; valign=&quot;top&quot;&gt;&lt;span
									class=&quot;text_blod_title&quot;&gt;注册信息&lt;/span&gt;&lt;/td&gt;
						&lt;/tr&gt;
						&lt;tr&gt;
							&lt;td height=&quot;15&quot; colspan=&quot;2&quot; align=&quot;center&quot;&gt;&lt;img src=&quot;images/lineJava_52_1.jpg&quot; width=&quot;835&quot;
									height=&quot;6&quot;&gt;&lt;/td&gt;
						&lt;/tr&gt;
						&lt;tr&gt;
							&lt;td colspan=&quot;2&quot;&gt;
								&lt;table width=&quot;100%&quot; border=&quot;0&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot;&gt;
									&lt;tr&gt;
										&lt;td width=&quot;5%&quot;&gt;&amp;nbsp;&lt;/td&gt;
										&lt;td width=&quot;95%&quot; align=&quot;left&quot; class=&quot;text_cray&quot;&gt;注：标有 &lt;span
												class=&quot;text_red&quot;&gt;*&lt;/span&gt; 处，均为必填项
										&lt;/td&gt;
									&lt;/tr&gt;
									&lt;tr&gt;
										&lt;td height=&quot;15&quot; colspan=&quot;2&quot;&gt;
											&lt;span class=&quot;text_red&quot;&gt;
												&lt;%--      &lt;%=request.getAttribute(&quot;message&quot;)==null?&quot;&quot;:request.getAttribute(&quot;message&quot;) %&gt;
												--%&gt;
												\${message}
											&lt;/span&gt;
										&lt;/td&gt;
									&lt;/tr&gt;
								&lt;/table&gt;
								&lt;table width=&quot;700&quot; border=&quot;0&quot; align=&quot;center&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;
									&lt;tr&gt;
										&lt;td height=&quot;30&quot; colspan=&quot;4&quot; align=&quot;left&quot; class=&quot;text_red1&quot;&gt;&lt;span
												class=&quot;text_title&quot;&gt;登录信息&lt;/span&gt;&lt;/td&gt;
									&lt;/tr&gt;
									&lt;tr&gt;
										&lt;td width=&quot;19&quot; align=&quot;center&quot; class=&quot;text_red&quot;&gt;*&lt;/td&gt;
										&lt;td width=&quot;98&quot; height=&quot;40&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;登录名：&lt;/td&gt;
										&lt;td width=&quot;160&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;&lt;input name=&quot;username&quot;
												type=&quot;text&quot; class=&quot;text_cray&quot; id=&quot;textfield2&quot; /&gt;
											&lt;span id=&quot;span_username&quot;&gt;&lt;/span&gt;
										&lt;/td&gt;
										&lt;td width=&quot;423&quot; height=&quot;35&quot; align=&quot;left&quot; class=&quot;text_cray&quot;&gt;
											由字母、数字或“_”组成，长度不少于6位，不多于30位&lt;/td&gt;
										&lt;script&gt;
											let btn_username = document.querySelector(&quot;#textfield2&quot;);
											//定义XMLHttpRequest对象
											let xmlHttpRequest;
											btn_username.onblur = () =&gt; {
												//alert();
												//把ajax引擎对象XMLHttpRequest实例化
												xmlHttpRequest = null;
												if (window.XMLHttpRequest) {// code for all new browsers
													xmlHttpRequest = new XMLHttpRequest();
												} else if (window.ActiveXObject) {// code for IE5 and IE6
													xmlHttpRequest = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
												} else {
													//alert(&quot;Your browser does not support XMLHTTP.&quot;);
												}

												//创建ajax引擎对象之后需要做什么？

												//2.需要获取用户名
												let username = document.querySelector(&quot;#textfield2&quot;).value;
												//1.需要创建一个请求url
												xmlHttpRequest.open(&quot;get&quot;, &quot;CheckNameServlet?username=&quot; + username, true);


												//3.需要指定回调函数
												//刚开始readyState是0
												xmlHttpRequest.onreadystatechange = () =&gt; {  	//获取校验结果的回调函数
													//alert(&quot;发送之后：&quot;+xmlHttpRequest.readyState);//1,2,3,4
													if (xmlHttpRequest.readyState == 4 &amp;&amp; xmlHttpRequest.status == 200) {
														let span_username = document.querySelector(&quot;#span_username&quot;);
														if (xmlHttpRequest.responseText.length == 4) {
															span_username.setAttribute(&quot;class&quot;, &quot;&quot;);
														} else {
															span_username.setAttribute(&quot;class&quot;, &quot;text_red&quot;);
														}
														span_username.innerText = xmlHttpRequest.responseText;
													}
												};
												//4.发送请求

												xmlHttpRequest.send();
											}
										&lt;/script&gt;
									&lt;/tr&gt;
									&lt;tr&gt;
										&lt;td width=&quot;19&quot; align=&quot;center&quot; class=&quot;text_red1&quot;&gt;&lt;span class=&quot;text_red&quot;&gt;*&lt;/span&gt;
										&lt;/td&gt;
										&lt;td width=&quot;98&quot; height=&quot;40&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;密码：&lt;/td&gt;
										&lt;td align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;&lt;input name=&quot;password&quot; type=&quot;text&quot;
												class=&quot;text_cray&quot; id=&quot;textfield3&quot; /&gt;&lt;/td&gt;
										&lt;td height=&quot;35&quot; align=&quot;left&quot; class=&quot;text_cray&quot;&gt;不少于6位字符&lt;/td&gt;
									&lt;/tr&gt;
									&lt;tr&gt;
										&lt;td width=&quot;19&quot; align=&quot;center&quot; class=&quot;text_red1&quot;&gt;&lt;span class=&quot;text_red&quot;&gt;*&lt;/span&gt;
										&lt;/td&gt;
										&lt;td width=&quot;98&quot; height=&quot;40&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;确认密码：&lt;/td&gt;
										&lt;td align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;&lt;input name=&quot;confirm_password&quot; type=&quot;text&quot;
												class=&quot;text_cray&quot; id=&quot;textfield4&quot; /&gt;&lt;/td&gt;
										&lt;td height=&quot;35&quot; align=&quot;left&quot; class=&quot;text_cray&quot;&gt;请再次输入密码&lt;/td&gt;
									&lt;/tr&gt;
								&lt;/table&gt;
								&lt;table width=&quot;700&quot; border=&quot;0&quot; align=&quot;center&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;
									&lt;tr&gt;
										&lt;td height=&quot;35&quot; colspan=&quot;5&quot; align=&quot;left&quot; class=&quot;text_red1&quot;&gt;&lt;span
												class=&quot;text_title&quot;&gt;详细信息&lt;/span&gt;&lt;/td&gt;
									&lt;/tr&gt;

									&lt;tr&gt;
										&lt;td width=&quot;19&quot; align=&quot;center&quot; class=&quot;text_red1&quot;&gt;
											&lt;span class=&quot;text_red&quot;&gt;*&lt;/span&gt;
										&lt;/td&gt;
										&lt;td width=&quot;98&quot; height=&quot;40&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;真实姓名：&lt;/td&gt;
										&lt;td height=&quot;35&quot; colspan=&quot;3&quot; align=&quot;left&quot;&gt;
											&lt;input name=&quot;real_name&quot; type=&quot;text&quot; class=&quot;text_cray&quot; id=&quot;textfield2&quot; /&gt;
										&lt;/td&gt;
									&lt;/tr&gt;
									&lt;tr&gt;
										&lt;td width=&quot;19&quot; align=&quot;center&quot; class=&quot;text_red1&quot;&gt;&lt;span class=&quot;text_red&quot;&gt;*&lt;/span&gt;
										&lt;/td&gt;
										&lt;td width=&quot;98&quot; height=&quot;40&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;性
											别：&lt;/td&gt;
										&lt;td height=&quot;35&quot; colspan=&quot;3&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;
											&lt;span class=&quot;mr25&quot;&gt;
												&lt;input type=&quot;radio&quot; name=&quot;sex&quot; value=&quot;1&quot; checked=&quot;checked&quot; /&gt;
											&lt;/span&gt;
											&lt;span class=&quot;text_cray&quot;&gt;
												&lt;label&gt;男&lt;/label&gt;
												&lt;input type=&quot;radio&quot; name=&quot;sex&quot; value=&quot;2&quot; /&gt;
												&lt;label&gt;女&lt;/label&gt;
											&lt;/span&gt;
											&lt;label&gt;&lt;/label&gt; &lt;span&gt;&lt;label&gt;&lt;/label&gt; &lt;/span&gt;
										&lt;/td&gt;
									&lt;/tr&gt;
									&lt;tr&gt;
										&lt;td width=&quot;19&quot; align=&quot;center&quot; class=&quot;text_red1&quot;&gt;&lt;span class=&quot;text_red&quot;&gt;*&lt;/span&gt;
										&lt;/td&gt;
										&lt;td width=&quot;98&quot; height=&quot;40&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;省份：&lt;/td&gt;
										&lt;td width=&quot;104&quot; height=&quot;35&quot; align=&quot;left&quot;&gt;
											&lt;label&gt;
												&lt;select name=&quot;province&quot; class=&quot;text_cray&quot; id=&quot;province&quot;&gt;
													&lt;option selected=&quot;selected&quot;&gt;--请选择省份--&lt;/option&gt;
													&lt;c:forEach items=&quot;\${provinces}&quot; var=&quot;p&quot;&gt;
														&lt;option value=&quot;\${p.provinceId}&quot;&gt;\${p.provinceName}&lt;/option&gt;
													&lt;/c:forEach&gt;
												&lt;/select&gt;
											&lt;/label&gt;
										&lt;/td&gt;
										&lt;td width=&quot;43&quot; height=&quot;35&quot; align=&quot;left&quot; class=&quot;text_cray&quot;&gt;城市：&lt;/td&gt;
										&lt;td width=&quot;436&quot; height=&quot;35&quot; align=&quot;left&quot; class=&quot;text_cray&quot;&gt;
											&lt;label&gt;
												&lt;select name=&quot;city&quot; class=&quot;text_cray&quot; id=&quot;city&quot;&gt;
													&lt;option value=&quot;城市&quot; selected=&quot;selected&quot;&gt;市县&lt;/option&gt;
												&lt;/select&gt;
											&lt;/label&gt;
										&lt;/td&gt;
										&lt;script&gt;
											//实例化ajax引擎对象，定义全局变量
											let xhr;
											document.querySelector(&quot;#province&quot;).onchange = () =&gt; {
												//1.获取省份id
												let pid = document.querySelector(&quot;#province&quot;).value;
												//2.实例化ajax引擎对象，定义全局变量
												xhr = null;
												if (window.XMLHttpRequest) {// code for all new browsers
													xhr = new XMLHttpRequest();
												} else if (window.ActiveXObject) {// code for IE5 and IE6
													xhr = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
												} else {
													//alert(&quot;Your browser does not support XMLHTTP.&quot;);
												}
												//3.调用open方法创建连接
												xhr.open(&quot;get&quot;, &quot;GetCityServlet?pid=&quot; + pid, true);
												//4.指定回调函数
												xhr.onreadystatechange = () =&gt; {//获取服务端响应的信息，把数据取出来放入城市下拉框
													if (xhr.readyState == 4) {
														if (xhr.status == 200) {
															//获取响应的xml文档 (此处生成的是一个xml文件)
															let doc = xhr.responseXML;
															let city_all = doc.getElementsByTagName(&quot;city&quot;);//这是一个存放所有city的数组

															let city_object = document.querySelector(&quot;#city&quot;);//拿到城市下拉框
															city_object.options.length = 0;//将城市下拉框清零
															//alert(&quot;ok&quot;);
															for (let i = 0; i &lt; city_all.length; i++) {
																let city = city_all[i];//拿到数组中的city对象
																let id = city.childNodes[0].firstChild.nodeValue;
																let name = city.childNodes[1].firstChild.nodeValue;
																//给城市下拉框添加选项，其实就是拿到选项然后给选项赋值
																city_object.options[city_object.options.length] = new Option(name, id);
															}
														}
													}
												};
												//5.发送请求
												xhr.send();

											}
										&lt;/script&gt;
									&lt;/tr&gt;
									&lt;tr&gt;
										&lt;td width=&quot;19&quot; align=&quot;center&quot; class=&quot;text_red1&quot;&gt;
											&lt;span class=&quot;text_red&quot;&gt;*&lt;/span&gt;
										&lt;/td&gt;
										&lt;td width=&quot;98&quot; height=&quot;40&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;证件类型：&lt;/td&gt;
										&lt;td height=&quot;35&quot; colspan=&quot;3&quot; align=&quot;left&quot;&gt;
											&lt;select class=&quot;text_cray&quot; name=&quot;cert_type&quot; id=&quot;cardType&quot;&gt;
												&lt;option value=&quot;1&quot;&gt;&lt;span&gt;二代身份证&lt;/span&gt;
												&lt;/option&gt;
												&lt;option value=&quot;2&quot;&gt;&lt;span&gt;港澳通行证&lt;/span&gt;
												&lt;/option&gt;
												&lt;option value=&quot;3&quot;&gt;&lt;span&gt;台湾通行证&lt;/span&gt;
												&lt;/option&gt;
												&lt;option value=&quot;4&quot;&gt;&lt;span&gt;护照&lt;/span&gt;
												&lt;/option&gt;
											&lt;/select&gt;
										&lt;/td&gt;
									&lt;/tr&gt;
									&lt;tr&gt;
										&lt;td width=&quot;19&quot; align=&quot;center&quot; class=&quot;text_red1&quot;&gt;
											&lt;span class=&quot;text_red&quot;&gt;*&lt;/span&gt;
										&lt;/td&gt;
										&lt;td width=&quot;98&quot; height=&quot;40&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;证件号码：&lt;/td&gt;
										&lt;td height=&quot;35&quot; colspan=&quot;3&quot; align=&quot;left&quot;&gt;
											&lt;input name=&quot;cert&quot; type=&quot;text&quot; class=&quot;text_cray&quot; id=&quot;textfield6&quot; /&gt;
										&lt;/td&gt;
									&lt;/tr&gt;
									&lt;tr&gt;
										&lt;td width=&quot;19&quot; align=&quot;center&quot; class=&quot;text_red1&quot;&gt;
											&lt;span class=&quot;text_red&quot;&gt;*&lt;/span&gt;
										&lt;/td&gt;
										&lt;td width=&quot;98&quot; height=&quot;40&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;出生日期：&lt;/td&gt;
										&lt;td height=&quot;35&quot; colspan=&quot;3&quot; align=&quot;left&quot;&gt;
											&lt;input name=&quot;birthday&quot; type=&quot;date&quot; class=&quot;text_cray&quot; id=&quot;textfield7&quot; /&gt;
										&lt;/td&gt;
									&lt;/tr&gt;

									&lt;tr&gt;
										&lt;td width=&quot;19&quot; align=&quot;center&quot;&gt;&amp;nbsp;&lt;/td&gt;
										&lt;td width=&quot;98&quot; height=&quot;40&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;旅客类型：&lt;/td&gt;
										&lt;td height=&quot;35&quot; colspan=&quot;3&quot; align=&quot;left&quot;&gt;
											&lt;select class=&quot;text_cray&quot; id=&quot;passengerType&quot; name=&quot;user_type&quot;&gt;
												&lt;option value=&quot;1&quot;&gt;成人&lt;/option&gt;
												&lt;option value=&quot;2&quot;&gt;儿童&lt;/option&gt;
												&lt;option value=&quot;3&quot;&gt;学生&lt;/option&gt;
												&lt;option value=&quot;4&quot;&gt;残疾军人、伤残人民警察&lt;/option&gt;
											&lt;/select&gt;
										&lt;/td&gt;
									&lt;/tr&gt;
									&lt;tr&gt;
										&lt;td height=&quot;10&quot; colspan=&quot;5&quot; align=&quot;center&quot;&gt;&lt;/td&gt;
									&lt;/tr&gt;
									&lt;tr&gt;
										&lt;td width=&quot;19&quot; align=&quot;center&quot;&gt;&amp;nbsp;&lt;/td&gt;
										&lt;td width=&quot;98&quot; height=&quot;30&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;备注：&lt;/td&gt;
										&lt;td colspan=&quot;3&quot; align=&quot;left&quot; height=&quot;80&quot;&gt;
											&lt;textarea name=&quot;content&quot; rows=&quot;8&quot; class=&quot;text_cray&quot; style=&quot;width: 100%&quot;&gt;&lt;/textarea&gt;
										&lt;/td&gt;
									&lt;/tr&gt;
									&lt;tr&gt;
										&lt;td align=&quot;center&quot;&gt;&amp;nbsp;&lt;/td&gt;
										&lt;td height=&quot;30&quot; align=&quot;left&quot; class=&quot;text_cray1&quot;&gt;&lt;/td&gt;
										&lt;td height=&quot;50&quot; colspan=&quot;3&quot; align=&quot;left&quot; valign=&quot;middle&quot; class=&quot;text_cray1&quot;&gt;
											&lt;input type=&quot;checkbox&quot; class=&quot;check&quot; id=&quot;checkAgree&quot; name=&quot;agree&quot;/&gt;
											&lt;!--此处若不给value值则被选择的状态下给后端传值则为on（其实我也不知道这玩意从哪里冒出来的）非选择状态传null--&gt;
											我已阅读并同意遵守
											 &lt;!-- &lt;a href=&quot;/otn/regist/rule;jsessionid=FA97B306AACF75E37DD4D10CFD59994A&quot; class=&quot;ft14&quot; target=&quot;_blank&quot; shape=&quot;rect&quot;&gt; --&gt;
											 &lt;a href=&quot;&quot; class=&quot;ft14&quot;  shape=&quot;rect&quot;&gt;
												《中国铁路客户服务中心网站服务条款》
											 &lt;/a&gt;
									    &lt;/td&gt;
									&lt;/tr&gt;
								&lt;/table&gt; 
								&lt;br&gt;
								&lt;table width=&quot;835&quot; border=&quot;0&quot; align=&quot;center&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;
									&lt;tr&gt;
										&lt;td width=&quot;234&quot;&gt;&amp;nbsp;&lt;/td&gt;
										&lt;td width=&quot;147&quot; height=&quot;30&quot; align=&quot;center&quot;&gt;&lt;input name=&quot;button3&quot; type=&quot;submit&quot;
												class=&quot;buttj&quot; id=&quot;button3&quot; value=&quot;&quot;&gt;&lt;/td&gt;
										&lt;td width=&quot;141&quot; align=&quot;center&quot;&gt;&amp;nbsp;&lt;/td&gt;
										&lt;td width=&quot;147&quot; align=&quot;center&quot;&gt;&lt;input name=&quot;button4&quot; type=&quot;submit&quot; class=&quot;butcz&quot;
												id=&quot;button4&quot; value=&quot;&quot;&gt;&lt;/td&gt;
										&lt;td width=&quot;166&quot; align=&quot;center&quot;&gt;&amp;nbsp;&lt;/td&gt;
									&lt;/tr&gt;
								&lt;/table&gt;
							&lt;/td&gt;
						&lt;/tr&gt;
					&lt;/table&gt;
				&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;
		&lt;br&gt;

		&lt;table width=&quot;100%&quot; border=&quot;0&quot; cellspacing=&quot;0&quot;&gt;
			&lt;tr&gt;
				&lt;td height=&quot;2&quot; background=&quot;images/bottom_point.gif&quot;&gt;&lt;/td&gt;
			&lt;/tr&gt;
			&lt;tr&gt;
				&lt;td height=&quot;25&quot; align=&quot;center&quot; background=&quot;images/bottom_ny_bg.gif&quot; class=&quot;text_cray&quot;&gt;copyright@12306
					购票网&lt;/td&gt;
			&lt;/tr&gt;
		&lt;/table&gt;
	&lt;/form&gt;
	&lt;!-- &lt;script type=&quot;text/JavaScript&quot; src=&quot;js/common.js&quot;&gt;&lt;/script&gt; --&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="userservlet-java" tabindex="-1"><a class="header-anchor" href="#userservlet-java" aria-hidden="true">#</a> UserServlet.java</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.controller;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usersdao-java" tabindex="-1"><a class="header-anchor" href="#usersdao-java" aria-hidden="true">#</a> UsersDao.java</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import net.ptcs.my12306.entity.CertType;
import net.ptcs.my12306.entity.City;
import net.ptcs.my12306.entity.Province;
import net.ptcs.my12306.entity.UserType;
import net.ptcs.my12306.entity.Users;
import net.ptcs.my12306.util.DBUtils_pool;

public class UsersDao {

	/**
	 * id NUMBER(11) not null, username VARCHAR2(30) not null, password
	 * VARCHAR2(50) not null, rule VARCHAR2(2) default &#39;2&#39; not null, realname
	 * VARCHAR2(50) not null, sex CHAR(1) default &#39;1&#39; not null, city NUMBER(11)
	 * not null, cert_type NUMBER(11) not null, cert VARCHAR2(50) not null,
	 * birthday DATE not null, user_type NUMBER(11), content VARCHAR2(3000),
	 * status CHAR(1) default &#39;1&#39; not null, login_ip VARCHAR2(50), image_path
	 * VARCHAR2(200)
	 */
//	private static final String ADD_USER = &quot;insert into my12306_tab_user(id,username,password,rule,realname,sex,city,cert_type&quot;
//			+ &quot;,cert,birthday,user_type,content,status,login_ip,image_path)&quot;
//			+ &quot; values (tab_user_seq.nextval,?,?,&#39;2&#39;,&#39;张三&#39;,?,200,1,&#39;440104201910106119&#39;,?,1,&#39;备注&#39;,&#39;1&#39;,?,&#39;&#39;)&quot;;
	private static final String ADD_USER = &quot;insert into my12306_tab_user(id,username,password,rule,realname,sex,city,cert_type&quot;
			+ &quot;,cert,birthday,user_type,content,status,login_ip,image_path)&quot;
			+ &quot; values (tab_user_seq.nextval,?,?,&#39;2&#39;,?,?,?,?,?,?,?,?,&#39;1&#39;,?,&#39;&#39;)&quot;;

	private static final String QUERY_USERNAME = &quot;select count(1) count from my12306_tab_user where username=?&quot;;

	private static final String QUERY_USER_BY_USERNAME_AND_PASSWORD = &quot;select u.id,u.username,u.password,u.rule,&quot;
			+ &quot;u.realname,u.sex,u.city c_id,u.cert_type&quot;
			+ &quot;,u.cert,u.birthday,u.user_type,u.content,u.status,u.login_ip,u.image_path,&quot;
			+ &quot;c.city,p.province,p.provinceid,ut.content ut_content,ct.content ct_content &quot;
			+ &quot;from my12306_tab_user u,my12306_tab_city c,my12306_tab_province p,my12306_tab_usertype ut,my12306_tab_certtype ct&quot;
			+ &quot; where u.city=c.id and p.provinceid=c.father &quot;
			+ &quot;and ut.id=u.user_type and ct.id=u.cert_type &quot;
			+ &quot;and u.username=? and u.password=?&quot;;
	
	public int addUser(Users user) {
		int rows = 0;
		Connection conn = null;
		PreparedStatement stmt = null;
		try {
			
			conn = DBUtils_pool.getConnection();
			stmt = conn.prepareStatement(ADD_USER);
			//此处要取所有的数据 username password rule realname sex 
			//city cert_type cert birthday user_type content statu login_ip
			//&quot; values (tab_user_seq.nextval,?,?,&#39;2&#39;,?,?,?,?,?,?,?,?,&#39;1&#39;,?,&#39;&#39;)&quot;;
			stmt.setString(1, user.getUsername());//用户名
			stmt.setString(2, user.getPassword());//密码
			stmt.setString(3, user.getRealname());//真实姓名
			stmt.setString(4, user.getSex().toString());//性别 stmt.setString(3, user.getSex() + &quot;&quot;);
			stmt.setInt(5, Integer.parseInt(user.getCity().getCityId()));//城市
			stmt.setString(6, user.getCerttype().getId().toString());//证件类型
			stmt.setString(7, user.getCert());//证件号码
			stmt.setDate(8, new java.sql.Date(user.getBirthday().getTime()));//生日 
			stmt.setInt(9, user.getUsertype().getId());//旅客类型
			stmt.setString(10, user.getContent());//备注
			stmt.setString(11, user.getLoginIp());//拿出IP
			rows=stmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBUtils_pool.release(conn, stmt, null);
		}
		return rows;
	}

	private UsersDao() {

	}

	public static UsersDao userDao;

	public static UsersDao getInstance() {
		if (userDao == null) {
			userDao = new UsersDao();
		}
		return userDao;
	}

	/**
	 * 查询用户名是否存在
	 * @param username
	 * @return
	 */
	public boolean queryUsername(String username) {
		Boolean result=false;
		
		Connection conn = null;
		PreparedStatement stmt = null;
		ResultSet rs=null;
		try {

			conn = DBUtils_pool.getConnection();
			stmt = conn.prepareStatement(QUERY_USERNAME);
			stmt.setString(1,username);
			
			rs=stmt.executeQuery();
			if(rs.next())
			{
				int tmp=rs.getInt(&quot;count&quot;);
				if(tmp&gt;0)
				{
					result=true;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBUtils_pool.release(conn, stmt, rs);
		}

		return result;
	}

	/**
	 * 根据用户名和密码查询用户信息
	 * @param username
	 * @param password
	 * @return
	 */
	public Users queryUserByUsernameAndPassword(String username, String password) {
		Users user=null;
		
		Connection conn = null;
		PreparedStatement stmt = null;
		ResultSet rs=null;
		try {

			conn = DBUtils_pool.getConnection();
			stmt = conn.prepareStatement(QUERY_USER_BY_USERNAME_AND_PASSWORD);
			stmt.setString(1,username);
			stmt.setString(2,password);
			rs=stmt.executeQuery();
			if(rs.next())
			{
				user=new Users();
				/*
				 * id,username,password,rule,realname,sex,city,cert_type&quot;
			+ &quot;,cert,birthday,user_type,content,status,login_ip,image_path
				 */
				user.setId(rs.getInt(&quot;id&quot;));
				user.setUsername(rs.getString(&quot;username&quot;));
				user.setPassword(rs.getString(&quot;password&quot;));
				user.setRule(rs.getString(&quot;rule&quot;));
				user.setRealname(rs.getString(&quot;realname&quot;));
				//补全另外10个数据
				user.setId(rs.getInt(&quot;id&quot;));
				user.setRule(rs.getString(&quot;rule&quot;));
				user.setSex(rs.getString(&quot;sex&quot;).charAt(0));
				user.setCity(new City(rs.getInt(&quot;c_id&quot;),null, rs.getString(&quot;city&quot;), new Province(null, rs.getString(&quot;provinceid&quot;), rs.getString(&quot;province&quot;))));
				user.setCerttype(new CertType(rs.getInt(&quot;cert_type&quot;), rs.getString(&quot;ct_content&quot;)));
				user.setCert(rs.getString(&quot;cert&quot;));
				user.setBirthday(rs.getDate(&quot;birthday&quot;));
				user.setUsertype(new UserType(rs.getInt(&quot;user_type&quot;),rs.getString(&quot;ut_content&quot;)));
				user.setContent(rs.getString(&quot;content&quot;));
				user.setStatus(rs.getString(&quot;status&quot;).charAt(0));
				user.setLoginIp(rs.getString(&quot;login_ip&quot;));
				user.setImagePath(rs.getString(&quot;image_path&quot;));

			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBUtils_pool.release(conn, stmt, rs);
		}
		return user;
	}
	public int updateUser(Users user) {
		int rows=0;
		Connection conn=null;
		PreparedStatement stmt=null;
		
		try {
			//这些待更新的数据：真实姓名 性 别   城市 证件类型 证件号码 出生日期 旅客类型 备注
			String update_user_sql=&quot;update my12306_tab_user set realname=?,sex=?,city=?,cert_type=?,cert=?,&quot;
					+ &quot;birthday=?,user_type=?,content=? where id=?&quot;;
			conn=DBUtils_pool.getConnection();
			stmt=conn.prepareStatement(update_user_sql);
			stmt.setString(1, user.getRealname());
			stmt.setString(2, user.getSex() + &quot;&quot;);
			stmt.setInt(3, user.getCity().getId());
			stmt.setInt(4,user.getCerttype().getId());
			stmt.setString(5,user.getCert());
			stmt.setDate(6, new java.sql.Date(user.getBirthday().getTime()));
			stmt.setInt(7,user.getUsertype().getId());
			stmt.setString(8,user.getContent());
			stmt.setInt(9, user.getId());
			
			rows=stmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBUtils_pool.release(conn, stmt, null);
		}
		return rows;
	}
	/**
	 * 根据id和旧的密码查询数据库，看能否找到用户，找到则旧密码输入正确
	 * @param id
	 * @param password_old
	 * @return
	 */
	public boolean find(Integer id, String password_old) {
		Boolean result=false;
		
		Connection conn = null;
		PreparedStatement stmt = null;
		ResultSet rs=null;
		try {

			conn = DBUtils_pool.getConnection();
			stmt = conn.prepareStatement(&quot;select * from tab_user where id=? and password=?&quot;);
			stmt.setInt(1,id);
			stmt.setString(2, password_old);
			rs=stmt.executeQuery();
			if(rs.next())
			{
				result=true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBUtils_pool.release(conn, stmt, rs);
		}

		return result;
	}
	
	public void updatePassword(Integer id, String password_new) {
		Connection conn=null;
		PreparedStatement stmt=null;
		
		try {
			//这些待更新的数据：真实姓名 性 别   城市 证件类型 证件号码 出生日期 旅客类型 备注
			String update_user_sql=&quot;update tab_user set password=? where id=?&quot;;
			conn=DBUtils_pool.getConnection();
			stmt=conn.prepareStatement(update_user_sql);
			stmt.setString(1,password_new);
			stmt.setInt(2,id);
			
			stmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBUtils_pool.release(conn, stmt, null);
		}
	}

	/**
	 * 根据给定条件查询用户信息：组合查询
	 * @param username
	 * @param certtype
	 * @param cert
	 * @param usertype
	 * @param sex
	 * @return
	 */
	public List&lt;Users&gt; queryUserByCondition(String username, int certtype,
			String cert, int usertype, char sex) {
		List&lt;Users&gt; users=new ArrayList&lt;&gt;();
		
		Connection conn = null;
		PreparedStatement stmt = null;
		ResultSet rs=null;
		try {

			conn = DBUtils_pool.getConnection();
			
			StringBuffer query_user=new StringBuffer(&quot;select u.id,u.username,u.sex,u.cert,&quot;
					+ &quot;ct.id ct_id,ct.content ct_content,&quot;
					+ &quot;ut.id ut_id,ut.content ut_content &quot;
					+ &quot;from my12306_tab_user u,my12306_tab_usertype ut,my12306_tab_certtype ct &quot;
					+ &quot;where ut.id=u.user_type and ct.id=u.cert_type and sex=&#39;&quot;+sex+
					&quot;&#39; and cert_type=&quot;+certtype+&quot; and user_type=&quot;+usertype);
			if(username!=null&amp;&amp; !&quot;&quot;.equals(username.trim()))
			{
				query_user.append(&quot; and username like &#39;%&quot;+username.trim()+&quot;%&#39;&quot;);
			}
			if(cert!=null &amp;&amp; !&quot;&quot;.equals(cert.trim()))
			{
				query_user.append(&quot; and cert=&#39;&quot;+cert+&quot;&#39;&quot;);
			}
			
			stmt = conn.prepareStatement(query_user.toString());
			
			
			rs=stmt.executeQuery();
			Users user=null;
			while(rs.next())
			{
				user=new Users();
				
				user.setId(rs.getInt(&quot;id&quot;));
				user.setUsername(rs.getString(&quot;username&quot;));
				user.setSex(rs.getString(&quot;sex&quot;).charAt(0));
				user.setCerttype(new CertType(rs.getInt(&quot;ct_id&quot;), rs.getString(&quot;ct_content&quot;)));
				user.setCert(rs.getString(&quot;cert&quot;));
				user.setUsertype(new UserType(rs.getInt(&quot;ut_id&quot;),rs.getString(&quot;ut_content&quot;)));
				
				users.add(user);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBUtils_pool.release(conn, stmt, rs);
		}

		return users;
	}

	public void insertImage(Integer id, String fileName) {
		Connection conn=null;
		PreparedStatement stmt=null;
		
		try {
			//这些待更新的数据：真实姓名 性 别   城市 证件类型 证件号码 出生日期 旅客类型 备注
			String update_user_sql=&quot;update my12306_tab_user set image_path=? where id=?&quot;;
			conn=DBUtils_pool.getConnection();
			stmt=conn.prepareStatement(update_user_sql);
			stmt.setString(1, fileName);
			stmt.setInt(2, id);
			
			
			stmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBUtils_pool.release(conn, stmt, null);
		}
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我对于Java用户注册功能的总结</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java实现用户注册功能</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,18);function a(v,c){return e(),n("div",null,[i(" more "),r])}const m=t(u,[["render",a],["__file","java52.html.vue"]]);export{m as default};
