import{_ as l,X as d,Y as a,a1 as r,Z as i,$ as n,a2 as t,a0 as s,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_35_1.png",u="/blog/assets/Java_35_2.png",m="/blog/assets/Java_35_3.png",b="/blog/assets/Java_35_4.png",o="/blog/assets/Java_35_5.png",p="/blog/assets/Java_35_6.png",g="/blog/assets/Java_35_7.png",h="/blog/assets/Java_35_8.png",q="/blog/assets/Java_35_9.png",_={},S=s(`<h1 id="java中级测试题六-jdbc与java数据库编程基础-2-2" tabindex="-1"><a class="header-anchor" href="#java中级测试题六-jdbc与java数据库编程基础-2-2" aria-hidden="true">#</a> Java中级测试题六-JDBC与Java数据库编程基础(2-2)</h1><h3 id="一、简答题" tabindex="-1"><a class="header-anchor" href="#一、简答题" aria-hidden="true">#</a> 一、简答题</h3><p>1.1 简述JDBC应用程序的基本步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JDBC应用程序大概有以下六个步骤
1、创建连接对象
2、创建执行SQL语句的命令对象
3、执行sql语句
4、获取结果：
如果是查询获取结果集如果是更新 获取 影响的行数
5、如果是查询 需要从结果集中获取数据
6、关闭所有资源 先创建的对象后关闭

如下实例：
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Test1 {
	public static void main(String[] args) {
//1、创建连接对象
    Connection conn = null;//连接对象
    Statement stmt = null;//命令对象
    ResultSet rs = null;//结果集对象
		
try {
Class.forName(&quot;oracle.jdbc.driver.OracleDriver&quot;);//获取驱动程序
conn = DriverManager.getConnection
(&quot;jdbc:oracle:thin:@localhost:1521:orcl&quot;,
            &quot;scott&quot;,&quot;scott123&quot;);
System.out.println(conn);//白盒测试 是否连接成功
//2、创建执行SQL语句的命令对象
stmt = conn.createStatement();
//3、执行sql语句 query_sal_by_empno
String query_sal_by_empno = &quot;select sal from emp where 
empno = &quot;+7369;
System.out.println(query_sal_by_empno);//白盒测试sql语句	
//4.获取结果集如果是查询获取结果集 如果是更新则结果集是空
rs = stmt.executeQuery(query_sal_by_empno);
//5.如果是查询，需要从结果集获取数据，
if(rs.next()) {//将指针往下移确定是否为空
	Double sal = rs.getDouble(&quot;sal&quot;);//调用方法并传列名返回结果
        System.out.println(sal);
        }
    } catch (Exception e) {
        e.printStackTrace();
    }finally {
//6、关闭所有资源 先创建的对象后关闭
        try {
            if(rs != null) {
                rs.close();
            }
            if(stmt != null) {
                stmt.close();
            }
            if(conn != null) {
                conn.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2 简述Class.forName()的作用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Class.forName()作用是获取驱动程序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1.3 简述对Statement,PreparedStatement理解</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Statement 和 PreparedStatement的区别：
1.PreparedStatement是预编译的，就是sql语句在给占位符赋值之前会提前编译好
2.你的参数ename=&quot;jones&#39; or 1=&#39;1&quot;，那么PreparedStatement就认为它是一个值，
不会对其中的内容进行解析，比如中间有个or，它不会解析
 3.以后建议大家使用预编译的PreparedStatement，不但效率
高，能够重用，而且安全
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、编程题" tabindex="-1"><a class="header-anchor" href="#二、编程题" aria-hidden="true">#</a> 二、编程题</h3><p>2.1 写一个连接Oracle数据库,并在User表中实现如下操作数据表定义如下： <img src="`+c+`" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>首先在Oracle可视化工具中创建此表：
以pl/sql为例：

create table tab_user(
  col_name varchar(50) primary key,
  col_pwd varchar(6) not null,
  col_email varchar(64),
  col_birthday date
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如图： <img src="`+u+'" alt="" loading="lazy"></p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="其次写对应的java代码" tabindex="-1"><a class="header-anchor" href="#其次写对应的java代码" aria-hidden="true">#</a> 其次写对应的Java代码：</h5>',14),x={href:"https://www.jianshu.com/p/0fd195438b78",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.jianshu.com/p/4c2d289fc6b5",target:"_blank",rel:"noopener noreferrer"},j=s(`<p>jdbc.properties</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jdbc_url=jdbc:oracle:thin:@localhost:1521:orcl
jdbc_username=scott
jdbc_password=abcde123
jdbc_driver=oracle.jdbc.driver.OracleDriver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DBUtil.java</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;
/**
 * 连接数据库的工具类
 * @author xianxian
 *
 */
public class DBUtil {
	private static String driverName;
	private static String url;
	private static String username;
	private static String password;
	
	static
	{
		//如何读取属性文件：jdbc.properties
		//使用的技术：使用类加载器获取输入流进而加载属性文件，拿到其中的数据
		InputStream in = DBUtil.class.getClassLoader().getResourceAsStream(&quot;jdbc.properties&quot;);
		Properties prop = new Properties();
		try {
			prop.load(in);
		} catch (IOException e) {
			e.printStackTrace();
		}
		driverName=prop.getProperty(&quot;jdbc_driver&quot;);
		url=prop.getProperty(&quot;jdbc_url&quot;);
		username=prop.getProperty(&quot;jdbc_username&quot;);
		password=prop.getProperty(&quot;jdbc_password&quot;);
	}
	//获取连接对象的方法
	public static Connection getConnection()
	{
		Connection conn=null;
		try {
			Class.forName(driverName);
			conn=DriverManager.getConnection(url, username, password);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
	//释放资源的方法
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.sql.Connection;

public class Test {

	public static void main(String[] args) {
		Connection conn = DBUtil.getConnection();
		System.out.println(conn);

	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如图，经测试连接成功： <img src="`+b+'" alt="" loading="lazy"> 2.1.1 插入如下数据: <img src="'+o+`" alt="" loading="lazy"></p><p>新建一个实体类User</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.util.Date;

/**
 * 实体类User
 * @author xxx
 *
 */
public class User {

	private String name;
	private String pwd;
	private String email;
	private Date birthday;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	@Override
	public String toString() {
		return &quot;User [name=&quot; + name + &quot;, pwd=&quot; + pwd + &quot;, email=&quot; + email + &quot;, birthday=&quot; + birthday + &quot;]&quot;;
	}
	public User(String name, String pwd, String email, Date birthday) {
		super();
		this.name = name;
		this.pwd = pwd;
		this.email = email;
		this.birthday = birthday;
	}
	public User() {
		super();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再建一个数据访问对象UserDao 最终得到效果如下：</p><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>2.1.2张三的时间更新为当前系统时间 <img src="'+g+'" alt="" loading="lazy"></p><p>2.1.3删除名为李四的全部记录 <img src="'+h+'" alt="" loading="lazy"></p><p>全部代码： <img src="'+q+`" alt="" loading="lazy"></p><h5 id="dbutil" tabindex="-1"><a class="header-anchor" href="#dbutil" aria-hidden="true">#</a> DBUtil</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package highchapter6;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;
/**
 * 连接数据库的工具类
 * @author xianxian
 *
 */
public class DBUtil {
	private static String driverName;
	private static String url;
	private static String username;
	private static String password;
	
	static
	{
		//如何读取属性文件：jdbc.properties
		//使用的技术：使用类加载器获取输入流进而加载属性文件，拿到其中的数据
		InputStream in = DBUtil.class.getClassLoader().getResourceAsStream(&quot;jdbc.properties&quot;);
		Properties prop = new Properties();
		try {
			prop.load(in);
		} catch (IOException e) {
			e.printStackTrace();
		}
		driverName=prop.getProperty(&quot;jdbc_driver&quot;);
		url=prop.getProperty(&quot;jdbc_url&quot;);
		username=prop.getProperty(&quot;jdbc_username&quot;);
		password=prop.getProperty(&quot;jdbc_password&quot;);
	}
	//获取连接对象的方法
	public static Connection getConnection()
	{
		Connection conn=null;
		try {
			Class.forName(driverName);
			conn=DriverManager.getConnection(url, username, password);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
	//释放资源的方法
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="userdao" tabindex="-1"><a class="header-anchor" href="#userdao" aria-hidden="true">#</a> UserDao</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package highchapter6;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Statement;

/**
 * 数据访问对象UserDao 
 * @author xianxian
 *
 */
public class UserDao {
	// 添加一个用户信息
	public int addUser(User user) {
		int rows = 0;

		Connection conn=null;
		PreparedStatement stmt=null;
		
		try {
			conn=DBUtil.getConnection();
			conn.setAutoCommit(false);
			stmt=conn.prepareStatement(&quot;insert into tab_user (col_name,col_pwd,col_email,col_birthday) values (?,?,?,?)&quot;);
			/*
			 * 注意：在执行更新的sql语句之前，需要先给占位符赋值
			 */
	        stmt.setString(1, user.getName());
			stmt.setString(2,user.getPwd());
			stmt.setString(3, user.getEmail());
			/*Date date=emp.getHiredate();
			long time=date.getTime();
			java.sql.Date date2=new java.sql.Date(time);*/
			stmt.setDate(4,new java.sql.Date(user.getBirthday().getTime()));
			
			/*
			 * 执行更新
			 */
			rows=stmt.executeUpdate();
			if(rows == 1) {
				conn.commit();
			}else {
				conn.rollback();
			}
		} catch (Exception e) {
			e.printStackTrace();
			try {
				conn.rollback();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}finally
		{
			DBUtil.release(conn, stmt, null);
		}
		return rows;
	}

	//更新某个用户信息
	public int updateUser(User user) {
		int rows = 0;
		Connection conn = null;
		PreparedStatement stmt = null;

		try {
			conn = DBUtil.getConnection();
			conn.setAutoCommit(false);
			stmt = conn.prepareStatement(&quot;update tab_user set col_name=?,col_pwd=?,&quot;
					+ &quot;col_email=?,col_birthday=? where col_name=?&quot;);
			//注意：在执行更新操作之前必须 给点位符赋值
			stmt.setString(1,user.getName());//1表示第一个？号
			stmt.setString(2,user.getPwd());//2表示第二个？号
			stmt.setString(3,user.getEmail());//3表示第三个？号
			
//			Date date = emp.getHiredate();
//			long time = date.getTime();
//			java.sql.Date date2 = new java.sql.Date(time);
			
			stmt.setDate(4,new java.sql.Date(user.getBirthday().getTime()));
			stmt.setString(5,user.getName());
			
			//执行 更新
			rows = stmt.executeUpdate();
			if(rows == 1) {
				conn.commit();
			}else {
				conn.rollback();
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			try {
				conn.rollback();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}finally {
			DBUtil.release(conn, stmt, null);
		}
		return rows;
	}
	//删除某个用户信息
	public int deleteUserByName(String name) {
		int rows = 0;
		Connection conn=null;
		PreparedStatement stmt=null;
		try {
			conn=DBUtil.getConnection();
			conn.setAutoCommit(false);
			String delete_user_by_name=&quot;delete from tab_user where col_name=?&quot;;
			stmt = conn.prepareStatement(delete_user_by_name);
			stmt.setString(1,name);
			
			rows=stmt.executeUpdate(delete_user_by_name);
			if(rows == 1) {
				conn.commit();
			}else {
				conn.rollback();
			}
		} catch (Exception e) {
			e.printStackTrace();
			try {
				conn.rollback();
			} catch (Exception e2) {
				e2.printStackTrace();
			}
		}finally
		{
			DBUtil.release(conn, stmt, null);
		}
		return rows;
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> Test</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package highchapter6;

import java.sql.Connection;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Test {
	public static void test_conn() {
		Connection conn = DBUtil.getConnection();
		System.out.println(conn);
	}
	public static void test_addUser() {
		UserDao dao = new UserDao();
		try {
			User user1 = new User(&quot;张三&quot;,&quot;888888&quot;,&quot;zhangsan@126.com&quot;,
					new SimpleDateFormat(&quot;YYYY-MM-DD&quot;).parse(&quot;1986-10-11&quot;));
			User user2 = new User(&quot;李四&quot;,&quot;999999&quot;,&quot;lisi@126.com&quot;,
                    new SimpleDateFormat(&quot;YYYY-MM-DD&quot;).parse(&quot;1988-10-23&quot;));
			User user3 = new User(&quot;王五&quot;,&quot;777777&quot;,&quot;wangwu@126.com&quot;,
                    new SimpleDateFormat(&quot;YYYY-MM-DD&quot;).parse(&quot;1988-10-23&quot;));
			dao.addUser(user1);
			dao.addUser(user2);
			dao.addUser(user3);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
	}

	public static void test_updateUser() {
		UserDao dao = new UserDao();
		User user = new User(&quot;张三&quot;,&quot;888888&quot;,&quot;zhangsan@126.com&quot;,new Date());
		dao.updateUser(user);
	}
	public static void test_deleteUserByName() {
		UserDao dao = new UserDao();
		dao.deleteUserByName(&quot;李四&quot;);
	}
	public static void main(String[] args) {
//		test_conn();//连接测试
//		test_addUser();//添加测试
//		test_updateUser();//更新测试
		test_deleteUserByName();//删除测试
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,24);function w(D,U){const e=v("ExternalLinkIcon");return d(),a("div",null,[r(" more "),S,i("p",null,[n("1.导入对应的jdbc包 导入步骤参考我的上一篇博客 "),i("a",x,[n("Eclipse导入jdbc包"),t(e)]),n(" 2、新建一个jdbc.properties文件，建立步骤参考我的上一博客 "),i("a",y,[n("jdbc.properties文件建立及配置"),t(e)]),n(" 3、对应的代码如下：")]),j])}const C=l(_,[["render",w],["__file","index.html.vue"]]);export{C as default};
