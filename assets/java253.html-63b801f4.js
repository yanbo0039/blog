import{_ as e,X as l,Y as a,a1 as s,Z as t,$ as n,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},m={id:"_253-java-jdbc与java数据库编程-java代码连接数据库-md",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#_253-java-jdbc与java数据库编程-java代码连接数据库-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--253-Java-JDBCjava-java-k168al0kom3jga7664aha80ng32aja8023m8boado4bi08i.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><ul><li>JDBC概述 <ul><li>JDBC核心接口与类</li><li>JDBC核心类库包含在java.sql包中。 <ul><li>类 <ul><li>DriverManager：负责管理JDBC驱动程序。使用JDBC驱 动程序之前，必须先将驱动程序加载并注册后才可以使 用，同时提供方法来建立与数据库的连接。</li><li>SQLException－有关数据库操作的异常</li></ul></li><li>接口: <ul><li>Connection：特定数据库的连接（会话）。在连接上下 文中执行SQL语句并返回结果。</li><li>PreparedStatement：表示预编译的 SQL 语句的对象。</li><li>Statement：用于执行静态 SQL 语句并返回它所生成结 果的对象。</li><li>ResultSet ：表示数据库结果集的数据表，通常通过执 行查询数据库的语句生成 。</li><li>CallableStatement ：用于执行 SQL 存储过程的接口</li></ul></li></ul></li></ul></li></ul><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.tencent.chapter07.jdbc.entity.Emp;

public class EmpStatementDao {

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
		EmpStatementDao dao = new EmpStatementDao();
		
		//查询
		List&lt;Emp&gt; empList = dao.selectEmps();
		for (Emp emp : empList) {
			System.out.println(emp.toString());
		}
	}
	/**
	 * 查询所有的员工信息
	 * @return
	 */
	public List&lt;Emp&gt; selectEmps() {
		Connection conn = null;
		Statement stat = null;
		ResultSet rs = null;
		try {
			//1.载入JDBC驱动程序
			Class.forName(&quot;oracle.jdbc.driver.OracleDriver&quot;);//驱动描述符  oracle.jdbc.driver.OracleDriver
			
			//2.定义连接URL  jdbc:oracle:thin:@&lt;主机IP&gt;:1521:&lt;数据库服务名&gt;
			String url = &quot;jdbc:oracle:thin:@localhost:1521:orcl&quot;;
			
			//3.建立连接
			conn = DriverManager.getConnection(url, &quot;scott&quot;, &quot;scott123&quot;);
			System.out.println(conn);
			
			//4.创建Statement对象
			stat = conn.createStatement();
			
			//5.执行查询或更新
			//stat.execute(&quot;sql&quot;);       //如果第一个结果为 ResultSet 对象，则返回 true；如果其为更新计数或者不存在任何结果，则返回 false 
			//stat.executeQuery(&quot;sql&quot;);  //返回查询的结果集合ResultSet，适用于查询（select）
			//stat.executeUpdate(&quot;sql&quot;); //返回DML操作的影响行数，适用于新增（insert）、修改(update)、删除(select)
			//stat.executeBatch();       //返回int[],使用批量删除、批量修改、批量新增
			
			String empno = &quot;8888 or 1=1 &quot;; //SQL注入风险
			rs = stat.executeQuery(&quot;select empno, ename empName, job, mgr, hiredate, sal, comm, deptno from emp where empno =&quot; + empno);
			//6.结果处理
			List&lt;Emp&gt; empList = new ArrayList&lt;Emp&gt;();
			while(rs.next())
			{
				//方式一：通过列索引index获取列的值
				//int empno = rs.getInt(1);       
				//String ename = rs.getString(2); 
				
				//方式二：通过列名称label获取列的值-----【推荐】
				//int empno = rs.getInt(&quot;empno&quot;);        
				//String ename = rs.getString(&quot;empName&quot;);
				
				//每遍历一次，获得一个Emp的员工信息
				Emp emp = new Emp();
				emp.setEmpno(rs.getInt(&quot;empno&quot;));
				emp.setEname(rs.getString(&quot;empName&quot;));
				emp.setJob(rs.getString(&quot;job&quot;));
				//...............其他字段（略）
				
				//将当前的emp添加到集合
				empList.add(emp);
			}
			
			return empList;
			
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
		
		return null;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_253_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>Java-JDBC与java数据库编程-java代码连接数据库</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><ol><li><p>DAO:data access object</p></li><li><p>若为其它数据库Eclipse的操作</p></li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_253_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_253_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_253_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_253_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_253_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,20);function p(g,h){const i=v("ExternalLinkIcon");return l(),a("div",null,[s(" more "),t("h1",m,[u,n(),t("a",o,[n("253-Java-JDBC与java数据库编程-java代码连接数据库.md"),d(i)])]),b])}const f=e(c,[["render",p],["__file","java253.html.vue"]]);export{f as default};
