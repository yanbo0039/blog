import{_ as l,X as i,Y as c,a1 as o,Z as n,$ as s,a2 as t,a0 as e,F as p}from"./framework-68dd73a2.js";const u="/blog/assets/Java_260_1.png",d="/blog/assets/Java_260_2.png",r="/blog/assets/Java_260_3.png",v={},m={id:"_260-javaweb-jdni数据库连接池使用及测试-md",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_260-javaweb-jdni数据库连接池使用及测试-md","aria-hidden":"true"},"#",-1),k={href:"http://xn--260-JavaWeb-JDNI-cx4zh97c1k2cjkub7ap9xgt5bhve2v3dmh1iy0wa.md",target:"_blank",rel:"noopener noreferrer"},g=e(`<h4 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h4><ol><li><p>新建了一个JAVA-WEB项目，并运行成功</p></li><li><p>mysql数据库可以通过可视化工具连接成功</p></li><li><p>使用工具ECLIPSE</p></li></ol><h4 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h4><ol><li><p>mysql-connector-java-5.1.39-bin.jar mysql的项目驱动放置在WEB-INF的lib目录下</p></li><li><p>WEB-INF目录下的web.xml的配置如下,仅供参考，按自己所需自行更改</p></li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>web-app</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://xmlns.jcp.org/xml/ns/javaee<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>WebApp_ID<span class="token punctuation">&quot;</span></span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>display-name</span><span class="token punctuation">&gt;</span></span>tickets<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>display-name</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file-list</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">&gt;</span></span>index.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">&gt;</span></span>index.jsp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">&gt;</span></span>index.htm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">&gt;</span></span>default.html<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">&gt;</span></span>default.jsp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>welcome-file</span><span class="token punctuation">&gt;</span></span>default.htm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>welcome-file-list</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource-ref</span><span class="token punctuation">&gt;</span></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>jdbc/mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>res-ref-name</span><span class="token punctuation">&gt;</span></span>jdbc/mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>res-ref-name</span><span class="token punctuation">&gt;</span></span>  
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>res-type</span><span class="token punctuation">&gt;</span></span>javax.sql.DataSource<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>res-type</span><span class="token punctuation">&gt;</span></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>res-auth</span><span class="token punctuation">&gt;</span></span>Container<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>res-auth</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource-ref</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>web-app</span><span class="token punctuation">&gt;</span></span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>META-INF目录下的context.xml配置如下,仅供参考，按自己所需更改</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Context</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Resource</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jdbc/mysql<span class="token punctuation">&quot;</span></span> 
	<span class="token attr-name">auth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Container<span class="token punctuation">&quot;</span></span> 
	<span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>javax.sql.DataSource<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name">password</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>123456<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jdbc:mysql://localhost:3306/tickets<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name">driverClassName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.mysql.jdbc.Driver<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name">maxIdle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name">maxWait</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5000<span class="token punctuation">&quot;</span></span>
	<span class="token attr-name">maxActive</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Context</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在 net.tencent.tickets.util目录包新建如下类</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package net.tencent.tickets.util;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

/**
 * 
* &lt;p&gt;Title: DBUtils_pool&lt;/p&gt;  
* &lt;p&gt;
*	Description: 
* 启用连接池技术的DBUtil工具类
* 
* 步骤：
* 1.在META-INF目录下创建配置文件context.xml
* 2.编写DBUtils_pool工具类
* 在里面定义getConnection方法
* 
* 3.这个方法定义完之后不可以马上写main方法测试，因为这个池子是基于Tomcat容器实现的，所以
* 必须把web应用部署到Tomcat服务器上之后才可以测试
* &lt;/p&gt; 
* @author xianxian 
* @date 2019年9月5日
 */
public class DBUtils_pool {
	
	public static Connection getConnection() {
		Connection conn = null;
		try {
			// //1.上下文 实例化Context对象，其实读取Context.xml文件中的资源
			Context context = new InitialContext();
			// 2.查找数据源,参数格式：java:comp/env/ + context.xml中配置的name属性值 使用lookup方法寻找数据源资源并且造型成DataSource
			DataSource ds = (DataSource) context.lookup(&quot;java:comp/env/jdbc/mysql&quot;);
			//3.从数据源中获取连接
			conn = ds.getConnection();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
	
	/**
	 * 
	 * &lt;p&gt;Title: release&lt;/p&gt;  
	 * &lt;p&gt;
	 *	Description: 
	 * 释放资源的方法
	 * //4.归还连接
	 * &lt;/p&gt; 
	 * @param conn
	 * @param stmt
	 * @param rs
	 */
	public static void release(Connection conn, Statement stmt, ResultSet rs) {
		try {
			if (rs != null) {
				rs.close();
			}
			if (stmt != null) {
				stmt.close();
			}
			if (conn != null) {
				conn.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	/**
	 * 开启事务
	 * @param conn
	 */
	public static void beginTransaction(Connection conn)
	{
		try {
			conn.setAutoCommit(false);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	/**
	 * 提交事务
	 * @param conn
	 */
	public static void commitTransaction(Connection conn)
	{
		try {
			conn.commit();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	/**
	 * 回滚事务
	 * @param conn
	 */
	public static void rollbackTransaction(Connection conn)
	{
		try {
			conn.rollback();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>经过如下步骤JDNI数据库连接池配置完成</li></ul><h4 id="测试jdni" tabindex="-1"><a class="header-anchor" href="#测试jdni" aria-hidden="true">#</a> 测试JDNI</h4><ol><li>在 net.tencent.tickets.util.test 目录包新建如下类</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package net.tencent.tickets.util.test;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.tencent.tickets.util.DBUtils_pool;


@WebServlet(&quot;/TestDBUtils_pool&quot;)
public class TestDBUtils_pool extends HttpServlet{

	/**
	 * serialVersionUID
	*/
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		DBUtils_pool dbUtils_pool = new DBUtils_pool();

		System.out.println(&quot;dbUtils_pool： &quot; + dbUtils_pool.getConnection());
		
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在 webapp文件夹下新建TestDBUtils_pool.jsp</li></ol><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot;
    pageEncoding=&quot;UTF-8&quot;%&gt;
&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;
&lt;title&gt;Insert title here&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;a href=&quot;TestDBUtils_pool&quot;&gt;点击获取数据库连接&lt;/a&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),h={start:"3"},x={href:"http://localhost:8080/tickets/TestDBUtils_pool.jsp",target:"_blank",rel:"noopener noreferrer"},q=n("li",null,[n("p",null,"根据浏览器提示点击")],-1),_=e('<figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>在跳转后查看Eclipse的控制台</li></ol><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>如下图所示则表示连接池配置成功</li></ul><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>JavaWeb-JDNI数据库连接池使用及测试</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4>',10),f={href:"https://blog.csdn.net/weixin_41544662/article/details/121788033",target:"_blank",rel:"noopener noreferrer"},j=n("hr",null,null,-1),w=n("p",null,"分割线",-1),S=n("hr",null,null,-1),D=n("p",null,[n("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function T(C,y){const a=p("ExternalLinkIcon");return i(),c("div",null,[o(" more "),n("h1",m,[b,s(),n("a",k,[s("260-JavaWeb-JDNI数据库连接池使用及测试.md"),t(a)])]),g,n("ol",h,[n("li",null,[n("p",null,[s("启动TOMcatServer并在启动成功后在浏览器中输入 "),n("a",x,[s("http://localhost:8080/tickets/TestDBUtils_pool.jsp"),t(a)]),s(" 仅供参考，按自己所需更改")])]),q]),_,n("ol",null,[n("li",null,[n("a",f,[s("javax.naming.NameNotFoundException: 名称[jdbc/HelixDB]未在此上下文中绑定。找不到[jdbc]"),t(a)])])]),j,w,S,D])}const U=l(v,[["render",T],["__file","index.html.vue"]]);export{U as default};
