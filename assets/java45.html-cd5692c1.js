import{_ as a,X as l,Y as s,a1 as r,Z as n,$ as e,a2 as i,a0 as d,F as o}from"./framework-68dd73a2.js";const c="/blog/assets/Java_45_1.png",v="/blog/assets/Java_45_2.png",u="/blog/assets/Java_45_3.png",m="/blog/assets/Java_45_4.png",b={},p=d('<h1 id="java-连接池使用简介" tabindex="-1"><a class="header-anchor" href="#java-连接池使用简介" aria-hidden="true">#</a> Java-连接池使用简介</h1><h3 id="连接池简介" tabindex="-1"><a class="header-anchor" href="#连接池简介" aria-hidden="true">#</a> 连接池简介</h3><p><strong>连接池</strong> 是为了解决资源的频繁分配﹑释放所造成的问题而采用的技术。数据库连接池的基本思想就是为数据库连接建立一个“缓冲池”。预先在缓冲池中放入一定数量的连接，当需要建立数据库连接时，只需从“缓冲池”中取出一个，使用完毕之后再放回去。我们可以通过设定连接池最大连接数来防止系统无尽的与数据库连接。更为重要的是我们可以通过连接池的管理机制监视数据库的连接的数量﹑使用情况，为系统开发﹑测试及性能调整提供依据。</p><h3 id="连接池技术在项目中的使用" tabindex="-1"><a class="header-anchor" href="#连接池技术在项目中的使用" aria-hidden="true">#</a> 连接池技术在项目中的使用</h3><ol><li>在WebContent\\META-INF\\目录下新建一个context.xml文件，如图： <img src="'+c+`" alt="" loading="lazy"></li></ol><p><strong>context.xml</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;Context&gt;
	&lt;Resource name=&quot;jdbc/oracle/my12306&quot; 
	auth=&quot;Container&quot; 
	type=&quot;javax.sql.DataSource&quot;
	username=&quot;scott&quot;
	password=&quot;scott123&quot;
	url=&quot;jdbc:oracle:thin:@localhost:1521:ORCL&quot;
	driverClassName=&quot;oracle.jdbc.driver.OracleDriver&quot;
	maxIdle=&quot;2&quot;
	maxWait=&quot;5000&quot;
	maxActive=&quot;4&quot; /&gt;
&lt;/Context&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在util包中新建一个DBUtils_pool类 <img src="`+v+`" alt="" loading="lazy"></li></ol><p><strong>DBUtils_pool.java</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.util;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

/**
 * 启用连接池技术的DBUtil工具类
 * 
 * 步骤：
 * 1.在META-INF目录下创建配置文件context.xml
 * 2.编写DBUtils_pool工具类
 * 在里面定义getConnection方法
 * 
 * 3.这个方法定义完之后不可以马上写main方法测试，因为这个池子是基于Tomcat容器实现的，所以
 * 必须把web应用部署到Tomcat服务器上之后才可以测试
 * @author xianxian
 *
 */
public class DBUtils_pool {
	public static Connection getConnection()
	{
		Connection conn=null;
		try{
			//实例化Context对象，其实读取Context.xml文件中的资源
			Context context = new InitialContext();
			//使用lookup方法寻找数据源资源并且造型成DataSource
			 DataSource ds = (DataSource) context.lookup(&quot;java:comp/env/jdbc/oracle/my12306&quot;);
			 conn = ds.getConnection();
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		return conn;
	}
	
	/**
	 * 释放资源的方法
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
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在dao层中使用连接池 <img src="`+u+'" alt="" loading="lazy"></li></ol><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h3>',13),h={href:"http://www.javaweb1024.com/java/JavaWebzhongji/2015/06/01/736.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.csdn.net/tuke_tuke/article/details/51532510",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.jb51.net/article/89492.htm",target:"_blank",rel:"noopener noreferrer"},x={href:"http://www.blogjava.net/chunkyo/archive/2007/01/16/94266.html",target:"_blank",rel:"noopener noreferrer"},q={href:"http://blog.didispace.com/java-datasource-pool-compare/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/u011088260/article/details/53311165",target:"_blank",rel:"noopener noreferrer"},j=n("hr",null,null,-1),C=n("h3",{id:"分割线",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),k=n("hr",null,null,-1),S=n("p",null,[n("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function w(y,D){const t=o("ExternalLinkIcon");return l(),s("div",null,[r(" more "),p,n("p",null,[n("a",h,[e("Java连接池详解"),i(t)])]),n("p",null,[n("a",_,[e("Java数据库连接池实现原理"),i(t)])]),n("p",null,[n("a",g,[e("Java数据库连接池的几种配置方法(以MySQL数据库为例)"),i(t)])]),n("p",null,[n("a",x,[e("Java jdbc数据库连接池总结!"),i(t)])]),n("p",null,[n("a",q,[e("主流Java数据库连接池比较及前瞻"),i(t)])]),n("p",null,[n("a",f,[e("几种常见数据库连接池的使用比较"),i(t)])]),j,C,k,S])}const B=a(b,[["render",w],["__file","java45.html.vue"]]);export{B as default};
