import{_ as i,X as l,Y as a,a1 as s,Z as t,$ as n,a2 as d,a0 as v,F as r}from"./framework-68dd73a2.js";const c="/blog/assets/Java_256_1.png",m={},u={id:"_256-java-jdbc与java数据库编程-callablestatement-md",tabindex:"-1"},b=t("a",{class:"header-anchor",href:"#_256-java-jdbc与java数据库编程-callablestatement-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--256-Java-JDBCjava-CallableStatement-wq79c1401astqbzmqwo8qkhsb.md",target:"_blank",rel:"noopener noreferrer"},p=v(`<h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.jdbc;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;

public class EmpCallableStatementDao {

	/**
		创建JDBC应用程序的步骤:
			0.项目右键-新建lib文件夹-将classes12.jar或者ojdbc14.jar复制到文件夹-classes12.jar右键-build path - add to build path
			1.载入JDBC驱动程序
			2.定义连接URL
			3.建立连接
			4.创建Statement对象
			5.执行查询或更新
			6.结果处理
			7.关闭连接
			
		Statement:
			1.执行静态SQL语句
			2.有SQL注入风险
			
		PreparedStatement:
			1.预编译SQL语句
			2.解决SQL注入风险
			
		CallableStatement:
			1.执行存储过程
	 */
	public static void main(String[] args) {
		EmpCallableStatementDao dao = new EmpCallableStatementDao();
		
		//查询
		dao.selectEmps();
	}
	/**
	 * 查询所有的员工信息
	 * @return
	 */
	public void selectEmps() {
		Connection conn = null;
		CallableStatement stat = null;
		ResultSet rs = null;
		try {
			//1.载入JDBC驱动程序
			Class.forName(&quot;oracle.jdbc.driver.OracleDriver&quot;);//驱动描述符  oracle.jdbc.driver.OracleDriver
			
			//2.定义连接URL  jdbc:oracle:thin:@&lt;主机IP&gt;:1521:&lt;数据库服务名&gt;
			String url = &quot;jdbc:oracle:thin:@localhost:1521:orcl&quot;;
			
			//3.建立连接
			conn = DriverManager.getConnection(url, &quot;scott&quot;, &quot;scott123&quot;);
			System.out.println(conn);
			
			/**
			 * 4.创建CallableStatement对象
			 * 		create or replace procedure my_pro(p_empno in emp.empno%type,p_ename out emp.ename%type)
					as
					begin
					       select ename into p_ename from emp where empno = p_empno;
					end;
			 */
			stat = conn.prepareCall(&quot;{call my_pro(?,?)}&quot;);//语法&quot;{call 存储过程名称(参数列表....)}&quot;
			
			//-------4.1 ORA-01008: 并非所有变量都已绑定
			stat.setInt(1, 6666);//索引从1开始，给第一个问号赋值  传入入参
			stat.registerOutParameter(2, Types.VARCHAR);//注册出参
			
			//5.执行查询或更新
			rs = stat.executeQuery();
			
			//6.结果处理
			//System.out.println(rs.getString(2));  //not ok
			//System.out.println(stat.getString(&quot;p_ename&quot;));//not ok
			System.out.println(stat.getString(2));//ok 通过列索引获取出参，且只能调用stat中的方法，不能使用rs直接获取结果
			
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			//7.关闭连接
			//使用顺序：Connection -&gt; Statement -&gt; ResultSet
			//关闭顺序：ResultSet -&gt; Statement -&gt; Connection
			try {
				if(rs != null)
				{
					rs.close();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
			try {
				if(stat != null)
				{
					stat.close();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
			try {
				if(conn != null)
				{
					conn.close();
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
		//return null;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>Java-JDBC与java数据库编程-CallableStatement</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',12);function h(S,g){const e=r("ExternalLinkIcon");return l(),a("div",null,[s(" more "),t("h1",u,[b,n(),t("a",o,[n("256-Java-JDBC与java数据库编程-CallableStatement.md"),d(e)])]),p])}const C=i(m,[["render",h],["__file","java256.html.vue"]]);export{C as default};
