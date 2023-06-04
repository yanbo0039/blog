import{_ as e,X as i,Y as n,a1 as t,a0 as s}from"./framework-68dd73a2.js";const r={},d=s(`<h1 id="java中string类型转引用类型" tabindex="-1"><a class="header-anchor" href="#java中string类型转引用类型" aria-hidden="true">#</a> Java中String类型转引用类型</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="entity层users-java" tabindex="-1"><a class="header-anchor" href="#entity层users-java" aria-hidden="true">#</a> entity层Users.java</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.entity;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="controller层-userservlet-java" tabindex="-1"><a class="header-anchor" href="#controller层-userservlet-java" aria-hidden="true">#</a> controller层 UserServlet.java</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>request.setCharacterEncoding(&quot;utf-8&quot;);
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="得到咯值之后需要设置值而需要转换类型" tabindex="-1"><a class="header-anchor" href="#得到咯值之后需要设置值而需要转换类型" aria-hidden="true">#</a> 得到咯值之后需要设置值而需要转换类型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Users user = new Users();
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h3><p>String 转 引用类型的两种方法：</p><p>第一种：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>City c = new City();
c.setCityId(city);
user.setCity(c);//获取城市 String 转 引用类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user.setCerttype(new CertType(Integer.parseInt(cert_type), null));//证件类型 String 转 引用类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="拓展知识点" tabindex="-1"><a class="header-anchor" href="#拓展知识点" aria-hidden="true">#</a> 拓展知识点</h3><p>String转日期类型</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try {
    user.setBirthday(new SimpleDateFormat(&quot;yyyy-MM-dd&quot;).parse(birthday_date));
} catch (ParseException e) {
    e.printStackTrace();
}//出身日期 String 转 date
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>JavaString类型转引用类型</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,21);function a(l,v){return i(),n("div",null,[t(" more "),d])}const c=e(r,[["render",a],["__file","java51.html.vue"]]);export{c as default};
