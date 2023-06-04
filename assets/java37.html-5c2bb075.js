import{_ as n,X as t,Y as e,a1 as i,a0 as s}from"./framework-68dd73a2.js";const l={},d=s(`<h1 id="java-通过代码操作数据库增删改查" tabindex="-1"><a class="header-anchor" href="#java-通过代码操作数据库增删改查" aria-hidden="true">#</a> Java-通过代码操作数据库增删改查</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>DBUtil</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * 连接数据库的工具类
 * 
 * @author hp
 *
 */
public class DBUtil {

	//获取Connection连接的方法
	public static Connection getConnection() {
		Connection conn=null;
		try {
			Class.forName(&quot;oracle.jdbc.driver.OracleDriver&quot;);
			conn = DriverManager.getConnection(
					&quot;jdbc:oracle:thin:@localhost:1521:orcl&quot;, &quot;scott&quot;, &quot;scott123&quot;);
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>EmpDao</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * 对emp表进行增删改查的数据访问对象
 * Dao是数据访问对象
 * @author hp
 *
 */
public class EmpDao {

	// 1.根据id查询某个员工信息
	public Emp queryEmpByEmpno(Integer empno) {
		Emp emp = null;

		/**
		 * 1、连接数据库
		 * 2、Statement操作对象 传送sql语句到数据库并执行
		 * 3、获取结果集ResultSet
		 * 4、把结果集中的数据转化为EMP对象
		 */
		
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		String query_mes_by_empno = 
				&quot;select empno,ename,job,hiredate,sal from emp where empno=&quot;+empno;
		
		try {
			conn = DBUtil.getConnection();
			stmt = conn.createStatement();
			rs = stmt.executeQuery(query_mes_by_empno);
//			4、把结果集中的数据转化为EMP对象
			//目标是把结果集中的数据取出来放入emp对象中
			emp = new Emp();
			if(rs.next()) {//确认结果集中只有一条数据,所以只需要游标移动一次
//				System.out.println(rs.getDouble(&quot;sal&quot;));
//				System.out.println(rs.getString(&quot;ename&quot;));
//				System.out.println(rs.getInt(&quot;empno&quot;));
//				System.out.println(rs.getString(&quot;job&quot;));
//				System.out.println(rs.getDate(&quot;hiredate&quot;));
				
				emp.setSal(rs.getDouble(&quot;sal&quot;));
				emp.setEname(rs.getString(&quot;ename&quot;));
				emp.setEmpno(rs.getInt(&quot;empno&quot;));
				emp.setJob(rs.getString(&quot;job&quot;));
				//sql.date继承util.date 故setHiredate中要求的日期类型是util.data
				//用其子类也可以。。
				emp.setHiredate(rs.getDate(&quot;hiredate&quot;));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBUtil.release(conn, stmt, rs);
		}
		return emp;
	}

	// 2.根据id查询某个员工的工资 √
	//因为没有id所以我理解成empno
	public Double querySalByEmpno(Integer empno) {
		Double sal = null;
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		String query_sal_by_empno = &quot;select sal from emp where empno = &quot; + empno;
		try {
			conn = DBUtil.getConnection();//获取连接方法
			stmt = conn.createStatement();//创建执行sql语句的命令对象
			rs = stmt.executeQuery(query_sal_by_empno);//执行sql语句
			if(rs.next()) {
				sal = rs.getDouble(&quot;sal&quot;);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBUtil.release(conn, stmt, rs);
		}
		return sal;
	}

	// 3.查询所有员工的总工资 √
	public Double querySumSal() {
		Double sal = null;
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		String query_sumSal = &quot;select sum(sal) from emp&quot;;
		
		try {
			conn = DBUtil.getConnection();//获取链接的方法
			stmt = conn.createStatement();//创建执行SQL语句的命令对象
			rs = stmt.executeQuery(query_sumSal);//执行sql语句
			if(rs.next()) {
				sal = rs.getDouble(&quot;sum(sal)&quot;);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBUtil.release(conn, stmt, rs);
		}
		return sal;
	}

	// 4.查询所有员工信息
	public List&lt;Emp&gt; queryAllEmp() {
		List&lt;Emp&gt; list = new ArrayList&lt;&gt;();//集合一声明必须马上实例化 因为马上要往堆区放元素

		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		String query_allms =
				&quot;select sal,ename,empno,job,hiredate from emp&quot;;
		
		try {
			conn = DBUtil.getConnection();
			stmt = conn.createStatement();
			
			rs = stmt.executeQuery(query_allms);
			//如何把数据从结果集中取出来放入list集合呢？
			while(rs.next()) {//确认结果集中有多于一条数据时，就要使用while循环
				Emp emp = new Emp();//这里必须得放循环里面 若放在外边则只有最后一条数据一直重复
				emp.setSal(rs.getDouble(&quot;sal&quot;));
				emp.setEname(rs.getString(&quot;ename&quot;));
				emp.setEmpno(rs.getInt(&quot;empno&quot;));
				emp.setJob(rs.getString(&quot;job&quot;));
				//sql.date继承util.date 故setHiredate中要求的日期类型是util.data
				//用其子类也可以。。
				emp.setHiredate(rs.getDate(&quot;hiredate&quot;));
				list.add(emp);//将这个对象放在一个集合中
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBUtil.release(conn, stmt, rs);
		}
		return list;
	}

	// 5.查询工资前五名的员工信息
	/*
	 * 查询工资前五名的员工信息 select * from emp e where (select count(1) from emp where
	 * sal&gt;e.sal)&lt;=4;
	 */
	public List&lt;Emp&gt; queryEmpLimitFive() {
		List&lt;Emp&gt; list = new ArrayList&lt;&gt;();//集合一声明必须马上实例化 因为马上要往堆区放元素

		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		String query_topSalfive = 
				&quot;select sal,ename,empno,job,hiredate from emp e &quot;
						+ &quot;where (select count(1) from emp where sal&gt;e.sal) &lt;= 4&quot;;
		try {
			conn = DBUtil.getConnection();
			stmt = conn.createStatement();
			
			rs = stmt.executeQuery(query_topSalfive);
			//如何把数据从结果集中取出来放入list集合呢？
			while(rs.next()) {//确认结果集中有多于一条数据时，就要使用while循环
				Emp emp = new Emp();//这里必须得放循环里面 若放在外边则只有最后一条数据一直重复
				emp.setSal(rs.getDouble(&quot;sal&quot;));
				emp.setEname(rs.getString(&quot;ename&quot;));
				emp.setEmpno(rs.getInt(&quot;empno&quot;));
				emp.setJob(rs.getString(&quot;job&quot;));
				//sql.date继承util.date 故setHiredate中要求的日期类型是util.data
				//用其子类也可以。。
				emp.setHiredate(rs.getDate(&quot;hiredate&quot;));
				list.add(emp);//将这个对象放在一个集合中
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBUtil.release(conn, stmt, rs);
		}
		return list;
	}

	// 6.根据id删除某个员工
	public int deleteEmpByEmpno(Integer empno) {
		int rows = 0;
		Connection conn=null;
		Statement stmt=null;
		try {
			conn=DBUtil.getConnection();
			stmt=conn.createStatement();
			String delete_emp_by_empno=&quot;delete from emp where empno=&quot;+empno;

			rows=stmt.executeUpdate(delete_emp_by_empno);
		} catch (Exception e) {
			e.printStackTrace();
		}finally
		{
			DBUtil.release(conn, stmt, null);
		}
		return rows;
	}


	// 7.批量删除(executeBatch方法是提交批处理的命令，
	//返回一个整形数组int[]，数组中的每个数字对应一条命令的影响行数，
	//在Oracle的驱动中没有实现该功能，即提交成功后不能返回影响行数，所以返回-2
	public boolean deleteEmp(Integer[] empnos) {
		boolean result = false;
		Connection conn=null;
		PreparedStatement stmt=null;
		String sql=&quot;delete from emp where empno=?&quot;;
		try {
			conn=DBUtil.getConnection();
			stmt=conn.prepareStatement(sql);
			
			for (Integer id:empnos) {
				stmt.setInt(1,id);//给sql语句中的问号（占位符）赋值，1表示索引，id是值
				stmt.addBatch();//批处理的意思，因为sql语句要执行多次，那么一次执行完
			}
			
			int[] a=stmt.executeBatch();
			
			System.out.println(Arrays.toString(a));
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;

	}

	// 8.更新某个员工的信息  更新不需要结果集
	//若不用点位符。。则这条sql语句很low
	public int updateEmp(Emp emp) {
		int rows = 0;
		Connection conn = null;
		PreparedStatement stmt = null;

		try {
			conn = DBUtil.getConnection();
			stmt = conn.prepareStatement(&quot;update emp set ename=?,job=?,sal=?,hiredate=? where empno=?&quot;);
			//注意：在执行更新操作之前必须 给点位符赋值
			stmt.setString(1,emp.getEname());//1表示第一个？号
			stmt.setString(2,emp.getJob());//2表示第二个？号
			stmt.setDouble(3,emp.getSal());//3表示第三个？号
			
//			Date date = emp.getHiredate();
//			long time = date.getTime();
//			java.sql.Date date2 = new java.sql.Date(time);
			
			stmt.setDate(4,new java.sql.Date(emp.getHiredate().getTime()));
			stmt.setInt(5,emp.getEmpno());
			
			//执行 更新
			rows = stmt.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBUtil.release(conn, stmt, null);
		}
		return rows;
	}

	// 9.添加一个员工信息
	// 一般主键在前 insert into emp (empno,ename,job,sal,hiredate) Values(?,?,?,?,?)
	public int addEmp(Emp emp) {
		int rows = 0;
		Connection conn = null;
		PreparedStatement stmt = null;
		try {
			conn = DBUtil.getConnection();
			stmt = conn.prepareStatement(&quot;insert into emp (empno,ename,job,sal,hiredate) Values(?,?,?,?,?)&quot;);
			//注意：在执行更新操作之前必须 给点位符赋值
			stmt.setInt(1,emp.getEmpno());//1表示第一个？号
			stmt.setString(2,emp.getEname());//2表示第二个？号
			stmt.setString(3,emp.getJob());//3表示第三个？号
			stmt.setDouble(4,emp.getSal());
//			Date date = emp.getHiredate();
//			long time = date.getTime();
//			java.sql.Date date2 = new java.sql.Date(time);
			stmt.setDate(5,new java.sql.Date(emp.getHiredate().getTime()));
			//执行 更新
			rows = stmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBUtil.release(conn, stmt, null);
		}
		return rows;
	}
	/**
	 * 10、 批量删除
	 * 有事务控制
	 * @param empnos
	 * @return
	 */
	public boolean deleteEmp_ok(Integer[] empnos) {
		boolean tmp=false;
		Connection conn=null;
		PreparedStatement stmt=null;
		
		try {
			conn=DBUtil.getConnection();
			//设置事务提交为手动
			conn.setAutoCommit(false);
			stmt=conn.prepareStatement(&quot;delete from emp where empno=?&quot;);
			int rows=0;
			for (int i = 0; i &lt; empnos.length; i++) {
				stmt.setInt(1,empnos[i]);
				
				rows+=stmt.executeUpdate();
				
				/*if(rows==1)
				{
					int a=10/0;
				}*/
			}
			
			if(rows==empnos.length)
			{
				tmp=true;
				//如果删除影响的行数等于数组长度，表示每个删除都有执行，所以事务是成功的，所以事务提交
				conn.commit();
			}else
			{
				conn.rollback();
			}
		} catch (Exception e) {
			e.printStackTrace();
			try {
				//如果代码抛出异常，有的删除执行有的没有执行，那么事务回滚
				conn.rollback();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}finally
		{
			DBUtil.release(conn, stmt, null);
		}
		return tmp;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestEmpDao 测试类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.util.Date;
import java.util.List;

public class TestEmpDao {
	// 1、测试根据id查询某个员工信息
	public static void test_queryEmpByEmpno() {
		EmpDao dao = new EmpDao();
		Emp emp = dao.queryEmpByEmpno(7566);
		System.out.println(emp.toString());
	}
	// 2、测试根据id查询某个员工的工资 
	public static void test_querySalByEmpno() {
		EmpDao dao = new EmpDao();
		Double emp = dao.querySalByEmpno(7369);
		System.out.println(emp);
	}
	// 3、测试查询所有员工的总工资
	public static void test_querySumSal() {
		EmpDao dao = new EmpDao();
		Double emp = dao.querySumSal();
		System.out.println(emp);
	}
	// 4、测试查询所有员工信息
	public static void test_queryAllEmp(){
		EmpDao dao = new EmpDao();
		List&lt;Emp&gt; emp = dao.queryAllEmp();
		System.out.println(emp.toString());
	}
	//5、测试查询工资前五名的员工信息
	public static void test_queryEmpLimitFive() {
		EmpDao dao = new EmpDao();
		List&lt;Emp&gt; emp = dao.queryEmpLimitFive();
		System.out.println(emp.toString());
	}
	
	// 6、测试删除方法
	public static void test_deleteEmpByEmpno() {
		EmpDao dao=new EmpDao();
		
		int rows=dao.deleteEmpByEmpno(8888);

		System.out.println(rows);
	}
	//7、测试批处理删除方法
	public static void test_deleteEmp() {
		
		EmpDao dao=new EmpDao();
		
		Integer[] empnos={7,6};
		
		dao.deleteEmp(empnos);
	}
	//8、测试更新某个员工的信息 
	public static void test_updateEmp() {
		//666不行
		Emp emp = new Emp();
		emp.setEmpno(667);
		emp.setEname(&quot;sbmnmjge2&quot;);
		emp.setSal(288.9);
		emp.setJob(&quot;Hr&quot;);
		emp.setHiredate(new Date());
		EmpDao dao = new EmpDao();
		dao.updateEmp(emp);
	}
	//9、测试添加一个员工信息
	public static void test_addEmp() {
		//将Emp类实例化 并赋值属性值
		Emp emp = new Emp();
		emp.setEmpno(666);
		emp.setEname(&quot;mnmjgesb&quot;);
		emp.setSal(678.0);
		emp.setJob(&quot;hr&quot;);
		emp.setHiredate(new Date());
		//将Dao类实例化并调用其对应方法 然后将emp对象作为参数传入
		EmpDao dao = new EmpDao();
		dao.addEmp(emp);
	}
	/**
	 * 10、测试批量删除
	 */
	public static void test_deleteEmp_ok() {
		
		EmpDao dao=new EmpDao();
		Integer[] empnos={7566,7698};
		boolean tmp=dao.deleteEmp_ok(empnos);
		System.out.println(tmp);
	}
	
	
	public static void main(String[] args) {
//		test_queryEmpByEmpno();// 1、测试根据id查询某个员工信息
//		test_querySalByEmpno();// 2、测试根据id查询某个员工的工资 
//		test_querySumSal();//3、测试查询所有员工的总工资
//		test_queryAllEmp();//4、测试查询所有员工信息
//		test_queryEmpLimitFive();//5、测试查询工资前五名的员工信息
//		test_deleteEmpByEmpno();// 6、测试删除方法
//		test_deleteEmp();//7、测试批处理删除方法
//		test_updateEmp();//8、测试更新某个员工的信息 
//		test_addEmp();//9、测试添加一个员工信息
//		test_deleteEmp_ok();//10、测试批量删除
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java-通过代码操作数据库增删改查</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,12);function v(a,m){return t(),e("div",null,[i(" more "),d])}const u=n(l,[["render",v],["__file","java37.html.vue"]]);export{u as default};
