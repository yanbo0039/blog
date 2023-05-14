import{_ as i,X as a,Y as s,a1 as l,Z as t,$ as e,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_255_1.png",m={},u={id:"_255-java-jdbc与java数据库编程-preparedstatement-md",tabindex:"-1"},o=t("a",{class:"header-anchor",href:"#_255-java-jdbc与java数据库编程-preparedstatement-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--255-Java-JDBCjava-PreparedStatement-wq79c1401astqbzmqwo8qkhsb.md",target:"_blank",rel:"noopener noreferrer"},p=r('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><blockquote><p>可以防止注入风险</p></blockquote><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>oracle.jdbc.driver.OracleConnection@64f6106c
java.sql.SQLException: ORA-01722: 无效数字

	at oracle.jdbc.dbaccess.DBError.throwSqlException(DBError.java:189)
	at oracle.jdbc.ttc7.TTIoer.processError(TTIoer.java:242)
	at oracle.jdbc.ttc7.Oall7.receive(Oall7.java:554)
	at oracle.jdbc.ttc7.TTC7Protocol.doOall7(TTC7Protocol.java:1478)
	at oracle.jdbc.ttc7.TTC7Protocol.parseExecuteDescribe(TTC7Protocol.java:677)
	at oracle.jdbc.driver.OracleStatement.doExecuteQuery(OracleStatement.java:2371)
	at oracle.jdbc.driver.OracleStatement.doExecuteWithTimeout(OracleStatement.java:2660)
	at oracle.jdbc.driver.OraclePreparedStatement.executeUpdate(OraclePreparedStatement.java:457)
	at oracle.jdbc.driver.OraclePreparedStatement.executeQuery(OraclePreparedStatement.java:387)
	at com.tencent.chapter07.jdbc.EmpPreparedStatementDao.selectEmps(EmpPreparedStatementDao.java:78)
	at com.tencent.chapter07.jdbc.EmpPreparedStatementDao.main(EmpPreparedStatementDao.java:42)
Exception in thread &quot;main&quot; java.lang.NullPointerException: Cannot invoke &quot;java.util.List.iterator()&quot; because &quot;empList&quot; is null
	at com.tencent.chapter07.jdbc.EmpPreparedStatementDao.main(EmpPreparedStatementDao.java:43)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.tencent.chapter07.jdbc.entity.Emp;

public class EmpPreparedStatementDao {

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
		EmpPreparedStatementDao dao = new EmpPreparedStatementDao();
		
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
		PreparedStatement stat = null;
		ResultSet rs = null;
		try {
			//1.载入JDBC驱动程序
			Class.forName(&quot;oracle.jdbc.driver.OracleDriver&quot;);//驱动描述符  oracle.jdbc.driver.OracleDriver
			
			//2.定义连接URL  jdbc:oracle:thin:@&lt;主机IP&gt;:1521:&lt;数据库服务名&gt;
			String url = &quot;jdbc:oracle:thin:@localhost:1521:orcl&quot;;
			
			//3.建立连接
			conn = DriverManager.getConnection(url, &quot;scott&quot;, &quot;scott123&quot;);
			System.out.println(conn);
			
			//4.创建PreparedStatement对象
			String empno = &quot;8888 or 1=1 &quot;;
			stat = conn.prepareStatement(&quot;select empno, ename empName, job, mgr, hiredate, sal, comm, deptno from emp where empno = ?&quot;);//?表示一个占位符号，表示的该值为一个变量，需要被赋值
			
			//-------4.1 ORA-01008: 并非所有变量都已绑定
			stat.setString(1, empno);//索引从1开始，给第一个问号赋值
			
			//5.执行查询或更新
			//stat.execute(&quot;sql&quot;);       //如果第一个结果为 ResultSet 对象，则返回 true；如果其为更新计数或者不存在任何结果，则返回 false 
			//stat.executeQuery(&quot;sql&quot;);  //返回查询的结果集合ResultSet，适用于查询（select）
			//stat.executeUpdate(&quot;sql&quot;); //返回DML操作的影响行数，适用于新增（insert）、修改(update)、删除(select)
			//stat.executeBatch();       //返回int[],使用批量删除、批量修改、批量新增
			rs = stat.executeQuery();
			
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java-JDBC与java数据库编程-PreparedStatement</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,15);function S(h,j){const n=v("ExternalLinkIcon");return a(),s("div",null,[l(" more "),t("h1",u,[o,e(),t("a",b,[e("255-Java-JDBC与java数据库编程-PreparedStatement.md"),d(n)])]),p])}const q=i(m,[["render",S],["__file","255-Java-JDBC与java数据库编程-PreparedStatement.html.vue"]]);export{q as default};
