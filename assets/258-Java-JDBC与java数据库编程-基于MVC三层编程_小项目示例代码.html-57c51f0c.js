import{_ as n,X as e,Y as i,a1 as t,a0 as s}from"./framework-68dd73a2.js";const l="/blog/assets/Java_258_1.png",d="/blog/assets/Java_258_2.png",a={},v=s('<h1 id="_258-j76-java-jdbc与java数据库编程-基于mvc三层编程-小项目示例代码-md-md" tabindex="-1"><a class="header-anchor" href="#_258-j76-java-jdbc与java数据库编程-基于mvc三层编程-小项目示例代码-md-md" aria-hidden="true">#</a> 258-J76-Java-JDBC与java数据库编程-基于MVC三层编程_小项目示例代码.md.md</h1><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><ol><li>config</li></ol><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment">#\\u672C\\u673A\\u73AF\\u5883</span>
<span class="token key attr-name">jdbc.driverClassName</span> <span class="token punctuation">=</span>  <span class="token value attr-value">oracle.jdbc.driver.OracleDriver</span>
<span class="token key attr-name">jdbc.url</span> <span class="token punctuation">=</span> <span class="token value attr-value">jdbc:oracle:thin:@localhost:1521:orcl</span>
<span class="token key attr-name">jdbc.username</span> <span class="token punctuation">=</span> <span class="token value attr-value">scott</span>
<span class="token key attr-name">jdbc.password</span> <span class="token punctuation">=</span> <span class="token value attr-value">scott123</span>

<span class="token comment">#\\u8FDC\\u7A0B\\u73AF\\u5883</span>
<span class="token comment">#jdbc.driverClassName =  oracle.jdbc.driver.OracleDriver</span>
<span class="token comment">#jdbc.url = jdbc:oracle:thin:@10.25.160.66:1521:orcl</span>
<span class="token comment">#jdbc.username = scott</span>
<span class="token comment">#jdbc.password = scott123</span>

<span class="token comment">#-------------------------------------------------------</span>
<span class="token comment">#mysql   </span>
<span class="token comment">#jdbc.driverClassName =  com.mysql.jdbc.Driver</span>
<span class="token comment">#jdbc.url = jdbc:mysql://localhost:3306/ems</span>
<span class="token comment">#jdbc.username = root</span>
<span class="token comment">#jdbc.password = 123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>dao</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.tencent.entity.Emp;
import com.tencent.util.DBUtil;

public class BonusDaoImpl implements IBonusDao {

	private Connection conn = null;
	private PreparedStatement stat = null;
	private ResultSet rs = null;

	@Override
	public boolean insertBonus(Emp emp) {
		try {
			//1~3 获取数据库连接
			conn = DBUtil.getConnection();
			
			//4.创建PreparedStatement对象
			stat = conn.prepareStatement(&quot;insert into bonus (ename, job, sal, comm) values (?, ?, ?, ?)&quot;);

			//4.1绑定变量值
			stat.setString(1, emp.getEname());
			stat.setString(2, emp.getJob());
			stat.setDouble(3, emp.getSalary());
			stat.setDouble(4, emp.getComm());
			//5.执行查询或更新
			int result = stat.executeUpdate();
			
			//6.结果处理
			if(result &gt; 0)
			{
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			//7.关闭连接
			DBUtil.close(conn, stat, rs);
		}
		
		return false;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.tencent.entity.Emp;
import com.tencent.util.DBUtil;

public class EmpDaoImpl implements IEmpDao {

	private Connection conn = null;
	private PreparedStatement stat = null;
	private ResultSet rs = null;
	
	@Override
	public List&lt;Emp&gt; selectEmps() {
		try {
			//1~3 获取数据库连接
			conn = DBUtil.getConnection();
			
			//4.创建PreparedStatement对象
			stat = conn.prepareStatement(&quot;select empno, ename empName, job, mgr, hiredate, sal, comm, deptno from emp&quot;);

			//5.执行查询或更新
			rs = stat.executeQuery();
			
			//6.结果处理
			List&lt;Emp&gt; empList = new ArrayList&lt;Emp&gt;();
			while(rs.next())
			{
				//每遍历一次，获得一个Emp的员工信息
				Emp emp = new Emp();
				emp.setEmpno(rs.getInt(&quot;empno&quot;));
				emp.setEname(rs.getString(&quot;empName&quot;));
				emp.setJob(rs.getString(&quot;job&quot;));
				emp.setManager(rs.getInt(&quot;mgr&quot;));
				
				/**
				 * java.sql.Date（子类） -&gt; java.util.Date（父类）：子类自动转换为父类
				 * java.sql.Time（子类） -&gt; java.util.Date（父类）：子类自动转换为父类
				 * java.sql.Timestamp（子类） -&gt; java.util.Date（父类）：子类自动转换为父类
				 * 
				 * java.sql.Date：表示年月日
				 * java.sql.Time：表示时分秒
				 * java.sql.Timestamp：表示年月日时分秒
				 */
				//emp.setHiredate(rs.getDate(&quot;hiredate&quot;));     //Date  2019-09-16
				//emp.setHiredate(rs.getTimestamp(&quot;hiredate&quot;));//Timestamp  2019-09-16 15:49:49.0
				emp.setHiredate(rs.getTime(&quot;hiredate&quot;));       //Time  15:49:49
				
				emp.setSalary(rs.getDouble(&quot;sal&quot;));
				emp.setComm(rs.getDouble(&quot;comm&quot;));
				emp.setDeptno(rs.getInt(&quot;deptno&quot;));
				
				//将当前的emp添加到集合
				empList.add(emp);
			}
			return empList;
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			//7.关闭连接
			DBUtil.close(conn, stat, rs);
		}
		
		return null;
	}

	@Override
	public boolean insertEmp(Emp emp) {
		try {
			//1~3 获取数据库连接
			conn = DBUtil.getConnection();
			
			//4.创建PreparedStatement对象
			// 使用序列完成主键自增：create sequence seq_emp;
			stat = conn.prepareStatement(&quot;insert into emp(empno,ename,job,hiredate) values(seq_emp.nextval,?,?,?)&quot;);

			//4.1绑定变量值
			//stat.setInt(1, emp.getEmpno());
			stat.setString(1, emp.getEname());
			stat.setString(2, emp.getJob());
			
			/**
			 * java.util.Date（父类）  -&gt; java.sql.Date（子类）：
			 * 	
			 * 		① 将java.util.Date（父类） -&gt; 毫秒值
			 * 			long milliSeconds = emp.getHiredate().getTime();
			 * 
			 *		② 毫秒值 -&gt; java.sql.Date（子类）
			 *			java.sql.Date date = new java.sql.Date(milliSeconds);
			 *			java.sql.Time date = new java.sql.Time(milliSeconds);
			 *			java.sql.Timestamp date = new java.sql.Timestamp(milliSeconds);
			 * 			
			 */
			stat.setDate(3, new java.sql.Date(emp.getHiredate().getTime()));
			//stat.setTime(3, new java.sql.Time(emp.getHiredate().getTime()));
			//stat.setTimestamp(3, new java.sql.Timestamp(emp.getHiredate().getTime()));
			
			//5.执行查询或更新
			int result = stat.executeUpdate();
			
			//6.结果处理
			if(result &gt; 0)
			{
				return true;
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			//7.关闭连接
			DBUtil.close(conn, stat, rs);
		}
		
		return false;
	}

	@Override
	public boolean updateEmp(Emp emp) {
		try {
			//1~3 获取数据库连接
			conn = DBUtil.getConnection();
			
			//4.创建PreparedStatement对象
			stat = conn.prepareStatement(&quot;update emp set ename = ? where empno = ?&quot;);

			//4.1绑定变量值
			stat.setString(1, emp.getEname());
			stat.setInt(2, emp.getEmpno());

			//5.执行查询或更新
			int result = stat.executeUpdate();
			
			//6.结果处理
			if(result &gt; 0)
			{
				return true;
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			//7.关闭连接
			DBUtil.close(conn, stat, rs);
		}
		
		return false;
	}

	@Override
	public boolean deleteEmpByEmpno(int empno) {
		try {
			//1~3 获取数据库连接
			conn = DBUtil.getConnection();
			
			//4.创建PreparedStatement对象
			stat = conn.prepareStatement(&quot;delete from emp where empno = ?&quot;);

			//4.1绑定变量值
			stat.setInt(1, empno);

			//5.执行查询或更新
			int result = stat.executeUpdate();
			
			//6.结果处理
			if(result &gt; 0)
			{
				return true;
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			//7.关闭连接
			DBUtil.close(conn, stat, rs);
		}
		
		return false;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.dao;

import com.tencent.entity.Emp;
/**
 * &lt;p&gt;Title: IBonusDao&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * 雇员管理-数据访问层DAO（Data Access Object）:增、删、改、查
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月24日
 */
public interface IBonusDao {

	/**
	 * 新增员工
	 * @param emp 新增的员工福利信息
	 * @return true 新增成功   false 新增失败
	 */
	public boolean insertBonus(Emp emp);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.dao;

import java.util.List;

import com.tencent.entity.Emp;
/**
 * &lt;p&gt;Title: IEmpDao&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * 雇员管理-数据访问层DAO（Data Access Object）:增、删、改、查
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月24日
 */
public interface IEmpDao {

	/**
	 * 查询所有的员工信息
	 * @return
	 */
	public List&lt;Emp&gt; selectEmps();
	
	/**
	 * 新增员工
	 * @param emp 新增的员工信息
	 * @return true 新增成功   false 新增失败
	 */
	public boolean insertEmp(Emp emp);
	
	/**
	 * 修改员工
	 * @param emp 修改的员工信息
	 * @return true 修改成功   false 修改失败
	 */
	public boolean updateEmp(Emp emp);
	
	/**
	 * 删除员工
	 * @param empno 待删除员工的empno编号
	 * @return true 删除成功   false 删除失败
	 */
	public boolean deleteEmpByEmpno(int empno);

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>entity</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.entity;

import java.util.Date;

/**
 * &lt;p&gt;Title: Emp&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * 映射数据库Emp表的实体类
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月24日
 */
public class Emp {

	/**员工编号*/
	private int empno;
	/**员工姓名*/
	private String ename;
	/**员工职位*/
	private String job;
	/**员工上级经理*/
	private int manager;
	/**员工入职日期*/
	private Date hiredate;
	/**员工薪水*/
	private double salary;
	/**员工奖金*/
	private double comm;
	/**所在部门*/
	private int deptno;

	/**无参构造函数*/
	public Emp()
	{
		super();
	}
	
	/**有参构造函数*/
	public Emp(int empno, String ename, String job, int manager, Date hiredate, double salary, double comm,
			int deptno) {
		super();
		this.empno = empno;
		this.ename = ename;
		this.job = job;
		this.manager = manager;
		this.hiredate = hiredate;
		this.salary = salary;
		this.comm = comm;
		this.deptno = deptno;
	}
	
	/**访问器（get与set方法）*/
	public int getEmpno() {
		return empno;
	}

	public void setEmpno(int empno) {
		this.empno = empno;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public int getManager() {
		return manager;
	}

	public void setManager(int manager) {
		this.manager = manager;
	}

	public Date getHiredate() {
		return hiredate;
	}

	public void setHiredate(Date hiredate) {
		this.hiredate = hiredate;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public double getComm() {
		return comm;
	}

	public void setComm(double comm) {
		this.comm = comm;
	}

	public int getDeptno() {
		return deptno;
	}

	public void setDeptno(int deptno) {
		this.deptno = deptno;
	}

	/**重写Object父类的toString方法*/
	@Override
	public String toString() {
		return &quot;Emp [empno=&quot; + empno + &quot;, ename=&quot; + ename + &quot;, job=&quot; + job + &quot;, manager=&quot; + manager + &quot;, hiredate=&quot;
				+ hiredate + &quot;, salary=&quot; + salary + &quot;, comm=&quot; + comm + &quot;, deptno=&quot; + deptno + &quot;]&quot;;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>service</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.service;

import java.util.List;

import com.tencent.dao.BonusDaoImpl;
import com.tencent.dao.EmpDaoImpl;
import com.tencent.dao.IBonusDao;
import com.tencent.dao.IEmpDao;
import com.tencent.entity.Emp;
/**
 * 雇员管理--业务逻辑层
 */
public class EmpServiceImpl implements IEmpService{

	@Override
	public List&lt;Emp&gt; selectEmps() {
		/*
		 * 1.业务流程
		 * 		① 查询所有的员工信息（select）
		 */
		IEmpDao empDao = new EmpDaoImpl();
		
		//① 查询所有的员工信息（select）
		List&lt;Emp&gt; empList = empDao.selectEmps();
		
		return empList;
	}

	@Override
	public boolean in(Emp emp) {
		/*
		 * 1.业务流程
		 * 		① 录入一条数据在Emp表中(insert)
		 * 		② 录入一条数据在Bonus表中(insert)
		 */
		//① 录入一条数据在Emp表中(insert)
		IEmpDao empDao = new EmpDaoImpl();
		boolean result = empDao.insertEmp(emp);
		
		//② 录入一条数据在Bonus表中(insert)
		IBonusDao bonusDao = new BonusDaoImpl();
		boolean result2 = bonusDao.insertBonus(emp);

		
		return result &amp;&amp; result2;
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.service;

import java.util.List;

import com.tencent.entity.Emp;

/**
 * 雇员管理--业务逻辑层
 *
 *	1.实现注册功能的业务逻辑：
 *		① 判断用户名是否已存在（select）
 *      ② 实现完成注册（insert）
 *      
 *  2.转账  A-&gt;B
 *      ① 判断余额是否足够（select）
 *      ② 判断对方的用户账户是否存在（select）
 *      ③ A账户扣钱（update）
 *      ④ B账户加钱（update）
 */
public interface IEmpService {

	/**
	 * 查询所有员工的信息
	 */
	public List&lt;Emp&gt; selectEmps();
	
	/**
	 * 员工入职
	 */
	public boolean in(Emp emp);
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>test</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.test;

import java.util.List;

import com.tencent.dao.EmpDaoImpl;
import com.tencent.dao.IEmpDao;
import com.tencent.entity.Emp;

public class Test {

	public static void main(String[] args) {
		IEmpDao dao = new EmpDaoImpl();
		//新增
	/*	Emp param = new Emp();
		param.setEmpno(9999);
		param.setEname(&quot;java测试&quot;);
		param.setJob(&quot;程序猿&quot;);
		param.setHiredate(new Date());
		boolean result = dao.insertEmp(param);
		
		System.out.println(&quot;新增结果：&quot; + result);*/
		
		//修改
	/*	Emp param = new Emp();
		param.setEmpno(7);
		param.setEname(&quot;java测试2&quot;);
		
		boolean result = dao.updateEmp(param);
		System.out.println(&quot;修改结果：&quot; + result);*/
		
		//删除
		/*int empno = 7;
		boolean result = dao.deleteEmpByEmpno(empno);
		System.out.println(&quot;删除结果：&quot; + result);
		*/
		//查询
		List&lt;Emp&gt; empList = dao.selectEmps();
		for (Emp emp : empList) {
			System.out.println(emp);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>util</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * 日期工具类：
		String -&gt; java.util.Date
		java.util.Date -&gt; String
		
		String -&gt; Calendar
		Calendar -&gt; String
		
		java.sql.Date -&gt; java.util.Date&lt;自动转换&gt;
		java.util.Date -&gt; java.sql.Date&lt;略&gt;
 */
public class DateUtil {
	
	private static SimpleDateFormat sdf = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);

	/**
	 * String -&gt; java.util.Date
	 * 
	 * @param source 字符串格式的日期
	 * @return  java.util.Date
	 */
	public static Date stringToUtilDate(String source)
	{
		try {
			return sdf.parse(source);
			
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	/**
	 * java.util.Date -&gt; String
	 * 
	 * @param date 日期
	 * @return 格式化之后的日期字符串
	 */
	public static String utilDateToString(Date date)
	{
		return sdf.format(date);
	}
	
	/**
	 * String -&gt; Calendar : 
	 *  		实际转换路径 String -&gt; Date -&gt; Calendar
	 *  
	 * @param source 字符串格式的日期
	 * @return Calendar日历
	 */
	public static Calendar stringToCalendar(String source)
	{
		try {
			//字符串  -&gt; Date
			Date date = sdf.parse(source);
			
			//Date -&gt; Calendar
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(date);
			
			return calendar;
			
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * Calendar -&gt; String : 
	 * 			实际转换路径  Calendar -&gt; Date -&gt; String
	 * 
	 * @param calendar 日历类
	 * @return 格式化后的日期字符串
	 */
	public static String calendarToString(Calendar calendar)
	{
		//Calendar -&gt; Date
		Date date = calendar.getTime();
		
		//Date -&gt; String
		return sdf.format(date);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

/**
 * 数据库工具类
 */
public class DBUtil {

	private static Properties properties = new Properties();
	
	/**静态代码块:类加载时，仅被执行一次*/
	static{
		try {
			//0.加载外部配置文件db.properties
			properties.load(new FileInputStream(&quot;config/db.properties&quot;));
			
			//1.载入JDBC驱动程序
			Class.forName(properties.getProperty(&quot;jdbc.driverClassName&quot;));//驱动描述符  oracle.jdbc.driver.OracleDriver
		
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 获取数据库连接
	 * @return
	 */
	public static Connection getConnection()
	{
		try {
			//2.定义连接URL  jdbc:oracle:thin:@&lt;主机IP&gt;:1521:&lt;数据库服务名&gt;
			String url = properties.getProperty(&quot;jdbc.url&quot;);
			
			//3.建立连接
			Connection conn = DriverManager.getConnection(url, properties.getProperty(&quot;jdbc.username&quot;), properties.getProperty(&quot;jdbc.password&quot;));
			
			return conn;
			
		} catch (SQLException e) {
			e.printStackTrace();
		} 
		return null;
	}
	
	/**
	 * 关闭数据库资源
	 * @param conn
	 * @param stat
	 * @param rs
	 */
	public static void close(Connection conn,Statement stat,ResultSet rs)
	{
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
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>view</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.view;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Date;

import javax.swing.ButtonGroup;
import javax.swing.DefaultComboBoxModel;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JRadioButton;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

import com.tencent.entity.Emp;
import com.tencent.service.EmpServiceImpl;
import com.tencent.service.IEmpService;

public class AddEmpPanel extends JPanel {
	private JTextField txt_empno;
	private JTextField txt_ename;
	private JPasswordField txt_password;
	private final ButtonGroup buttonGroup = new ButtonGroup();
	private JRadioButton rdb_man;
	private JRadioButton rdb_female;
	private JCheckBox cbx_dajidali;
	private JCheckBox cbx_code;
	private JCheckBox cbx_basketball;
	private JCheckBox cbx_sing;
	private JTextArea txt_demo;
	private JComboBox combx_address;

	/**
	 * Create the panel.
	 */
	public AddEmpPanel() {
		setLayout(null);
		
		JLabel label = new JLabel(&quot;\\u5458\\u5DE5\\u7F16\\u53F7\\uFF1A&quot;);
		label.setBounds(46, 43, 72, 15);
		add(label);
		
		txt_empno = new JTextField();
		txt_empno.setText(&quot;123&quot;);
		txt_empno.setBounds(128, 35, 110, 31);
		add(txt_empno);
		txt_empno.setColumns(10);
		
		JLabel label_1 = new JLabel(&quot;\\u5458\\u5DE5\\u59D3\\u540D\\uFF1A&quot;);
		label_1.setBounds(321, 43, 72, 15);
		add(label_1);
		
		txt_ename = new JTextField();
		txt_ename.setBounds(403, 36, 126, 28);
		add(txt_ename);
		txt_ename.setColumns(10);
		
		JLabel label_2 = new JLabel(&quot;\\u5458\\u5DE5\\u5BC6\\u7801\\uFF1A&quot;);
		label_2.setBounds(46, 88, 72, 15);
		add(label_2);
		
		txt_password = new JPasswordField();
		txt_password.setBounds(128, 80, 110, 31);
		add(txt_password);
		
		JLabel label_3 = new JLabel(&quot;\\u6027    \\u522B\\uFF1A&quot;);
		label_3.setBounds(321, 88, 72, 15);
		add(label_3);
		
		rdb_man = new JRadioButton(&quot;\\u7537&quot;);
		buttonGroup.add(rdb_man);
		rdb_man.setBounds(403, 84, 46, 23);
		add(rdb_man);
		
		rdb_female = new JRadioButton(&quot;\\u5973&quot;);
		buttonGroup.add(rdb_female);
		rdb_female.setBounds(475, 84, 54, 23);
		add(rdb_female);
		
		JLabel label_4 = new JLabel(&quot;\\u7231    \\u597D\\uFF1A&quot;);
		label_4.setBounds(46, 142, 72, 15);
		add(label_4);
		
		cbx_dajidali = new JCheckBox(&quot;\\u5927\\u5409\\u5927\\u5229&quot;);
		cbx_dajidali.setBounds(128, 138, 82, 23);
		add(cbx_dajidali);
		
		cbx_code = new JCheckBox(&quot;\\u5199\\u4EE3\\u7801&quot;);
		cbx_code.setBounds(214, 138, 72, 23);
		add(cbx_code);
		
		cbx_basketball = new JCheckBox(&quot;\\u7BEE\\u7403&quot;);
		cbx_basketball.setBounds(288, 138, 54, 23);
		add(cbx_basketball);
		
		cbx_sing = new JCheckBox(&quot;\\u5531\\u6B4C&quot;);
		cbx_sing.setBounds(350, 138, 72, 23);
		add(cbx_sing);
		
		JLabel label_5 = new JLabel(&quot;\\u7C4D    \\u8D2F\\uFF1A&quot;);
		label_5.setBounds(46, 184, 72, 15);
		add(label_5);
		
		combx_address = new JComboBox();
		combx_address.setModel(new DefaultComboBoxModel(new String[] {&quot;&quot;, &quot;\\u5E7F\\u5DDE\\u5E02&quot;, &quot;\\u6C55\\u5934\\u5E02&quot;, &quot;\\u6F6E\\u5DDE\\u5E02&quot;, &quot;\\u6DF1\\u5733\\u5E02&quot;, &quot;\\u6E5B\\u6C5F\\u5E02&quot;, &quot;\\u6C5F\\u95E8\\u5E02&quot;}));
		combx_address.setBounds(128, 181, 89, 21);
		add(combx_address);
		
		JLabel label_6 = new JLabel(&quot;\\u5907    \\u6CE8\\uFF1A&quot;);
		label_6.setBounds(46, 242, 72, 15);
		add(label_6);
		
		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(124, 237, 230, 78);
		add(scrollPane);
		
		txt_demo = new JTextArea();
		txt_demo.setLocation(128, 0);
		scrollPane.setViewportView(txt_demo);
		txt_demo.setLineWrap(true);
		
		//新增
		JButton button = new JButton(&quot;\\u65B0\\u589E&quot;);
		button.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//员工编号
				String empno = txt_empno.getText();
				//员工姓名
				String ename = txt_ename.getText();
				//密码
				char[] passwordArray = txt_password.getPassword();
				//性别
				String sex = &quot;不详&quot;;
				if(rdb_man.isSelected())
				{
					sex = rdb_man.getText();
				}
				else if(rdb_female.isSelected())
				{
					sex = rdb_female.getText();
				}
				//爱好
				String hobby = &quot;&quot;;
				if(cbx_dajidali.isSelected())
				{
					hobby += cbx_dajidali.getText() + &quot;;&quot;;
				}
				if(cbx_code.isSelected())
				{
					hobby += cbx_code.getText() + &quot;;&quot;;
				}
				if(cbx_basketball.isSelected())
				{
					hobby += cbx_basketball.getText() + &quot;;&quot;;
				}
				if(cbx_sing.isSelected())
				{
					hobby += cbx_sing.getText() + &quot;;&quot;;
				}
				//籍贯
				String address = (String)combx_address.getSelectedItem();
				//备注
				String demo = txt_demo.getText();
				
				System.out.println(&quot;员工编号：&quot; + empno + &quot;\\n&quot;
						+ &quot; 员工姓名：&quot; + ename + &quot;\\n&quot;
						+ &quot; 密码：&quot; + new String(passwordArray) + &quot;\\n&quot;
						+ &quot; 性别：&quot; + sex + &quot;\\n&quot;
						+ &quot; 爱好：&quot; + hobby + &quot;\\n&quot;
						+ &quot; 籍贯：&quot; + address + &quot;\\n&quot;
						+ &quot; 备注：&quot; + demo + &quot;\\n&quot;);
				
				//将用户输入的数据保存到Emp对象
				Emp emp = new Emp();
				emp.setEname(ename);
				emp.setHiredate(new Date());
				
				//调用service方法完成员工入职
				IEmpService empService = new EmpServiceImpl();
				boolean result = empService.in(emp);
				
				//获取新增结果
				System.out.println(&quot;员工入职是否成功：&quot; + result);
				if(result)
				{
					JOptionPane.showMessageDialog(null, &quot;员工【&quot; + ename + &quot;】新增成功&quot;, &quot;温馨提示&quot;, JOptionPane.INFORMATION_MESSAGE);
				}
				else 
				{
					JOptionPane.showMessageDialog(null, &quot;员工【&quot; + ename + &quot;】新增失败，请联系管理员：110&quot;, &quot;温馨提示&quot;, JOptionPane.INFORMATION_MESSAGE);
				}
			}
		});
		button.setBounds(535, 319, 93, 23);
		add(button);
		
		JButton button_1 = new JButton(&quot;\\u91CD\\u7F6E&quot;);
		button_1.setBounds(417, 319, 93, 23);
		add(button_1);

	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.view;

import java.awt.EventQueue;
import java.awt.Toolkit;

import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.JSeparator;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;
import javax.swing.border.EmptyBorder;
import javax.swing.JToolBar;
import javax.swing.JButton;
import javax.swing.ImageIcon;
import javax.swing.JLabel;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class MainFrame extends JFrame {

	private JPanel contentPane;
	private JPanel panel;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					MainFrame frame = new MainFrame();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}
	
	static{
		try {
//			UIManager.setLookAndFeel(&quot;com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel&quot;);//Nimbus风格，jdk6 update10版本以后的才会出现
			UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());//当前系统风格
//			UIManager.setLookAndFeel(&quot;com.sun.java.swing.plaf.motif.MotifLookAndFeel&quot;);//Motif风格，是蓝黑
//			UIManager.setLookAndFeel(UIManager.getCrossPlatformLookAndFeelClassName());//跨平台的Java风格
//			UIManager.setLookAndFeel(&quot;com.sun.java.swing.plaf.windows.WindowsLookAndFeel&quot;);//windows风格
//			UIManager.setLookAndFeel(&quot;javax.swing.plaf.windows.WindowsLookAndFeel&quot;);//windows风格
//			UIManager.setLookAndFeel(&quot;javax.swing.plaf.metal.MetalLookAndFeel&quot;);//java风格
//			UIManager.setLookAndFeel(&quot;com.apple.mrj.swing.MacLookAndFeel&quot;);//待考察，
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (UnsupportedLookAndFeelException e) {
			e.printStackTrace();
		}
	}

	/**
	 * Create the frame.
	 */
	public MainFrame() {
		setIconImage(Toolkit.getDefaultToolkit().getImage(&quot;icon\\\\layers.png&quot;));
		setTitle(&quot;\\u96C7\\u5458\\u7BA1\\u7406\\u7CFB\\u7EDF&quot;);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 761, 449);
		
		JMenuBar menuBar = new JMenuBar();
		setJMenuBar(menuBar);
		
		JMenu menu = new JMenu(&quot;\\u5458\\u5DE5\\u7BA1\\u7406&quot;);
		menuBar.add(menu);
		
		JMenu menu_4 = new JMenu(&quot;\\u65B0\\u589E\\u5458\\u5DE5&quot;);
		menu.add(menu_4);
		
		JMenuItem menuItem = new JMenuItem(&quot;\\u65B0\\u589E\\u666E\\u901A\\u5458\\u5DE5&quot;);
		menu_4.add(menuItem);
		
		JMenuItem menuItem_1 = new JMenuItem(&quot;\\u65B0\\u589E\\u7BA1\\u7406\\u5458&quot;);
		menu_4.add(menuItem_1);
		
		//查询
		JMenuItem menuItem_2 = new JMenuItem(&quot;\\u67E5\\u8BE2\\u5458\\u5DE5&quot;);
		menuItem_2.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//1.先移除原panel中所有的内容
				panel.removeAll();
				panel.repaint();
				
				//2.再想panel中添加新的内容（查询员工的界面）
				SelectEmpPanel selectEmpPanel = new SelectEmpPanel();
				selectEmpPanel.setBounds(0, 0, 745, 352);
				panel.add(selectEmpPanel);
			}
		});
		menu.add(menuItem_2);
		
		JSeparator separator = new JSeparator();
		menu.add(separator);
		
		JMenuItem menuItem_3 = new JMenuItem(&quot;\\u9000\\u51FA&quot;);
		menu.add(menuItem_3);
		
		JMenu menu_1 = new JMenu(&quot;\\u90E8\\u95E8\\u7BA1\\u7406&quot;);
		menuBar.add(menu_1);
		
		JMenu menu_2 = new JMenu(&quot;\\u5C97\\u4F4D\\u7BA1\\u7406&quot;);
		menuBar.add(menu_2);
		
		JMenu menu_3 = new JMenu(&quot;\\u7CFB\\u7EDF\\u8BBE\\u7F6E&quot;);
		menuBar.add(menu_3);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		JToolBar toolBar = new JToolBar();
		toolBar.setBounds(0, 0, 745, 35);
		contentPane.add(toolBar);
		
		//新增员工
		JButton button = new JButton(&quot;&quot;);
		button.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//1.先移除原panel中所有的内容
				panel.removeAll();
				panel.repaint();
				
				//2.再想panel中添加新的内容（新增员工的界面）
				AddEmpPanel addEmpPanel = new AddEmpPanel();
				addEmpPanel.setBounds(0, 0, 745, 352);
				panel.add(addEmpPanel);
			}
		});
		button.setToolTipText(&quot;\\u65B0\\u589E\\u5458\\u5DE5&quot;);
		button.setIcon(new ImageIcon(&quot;icon\\\\add.png&quot;));
		toolBar.add(button);
		
		JButton button_1 = new JButton(&quot;&quot;);
		button_1.setToolTipText(&quot;\\u8C03\\u8F6C\\u90E8\\u95E8&quot;);
		button_1.setIcon(new ImageIcon(&quot;icon\\\\layout_edit.png&quot;));
		toolBar.add(button_1);
		
		JButton button_2 = new JButton(&quot;&quot;);
		button_2.setToolTipText(&quot;\\u8C03\\u6574\\u85AA\\u8D44&quot;);
		button_2.setIcon(new ImageIcon(&quot;icon\\\\money.png&quot;));
		toolBar.add(button_2);
		
		panel = new JPanel();
		panel.setBounds(0, 38, 745, 352);
		contentPane.add(panel);
		panel.setLayout(null);
		
		JLabel lblNewLabel = new JLabel(&quot;&quot;);
		lblNewLabel.setIcon(new ImageIcon(&quot;icon\\\\bg.jpg&quot;));
		lblNewLabel.setBounds(0, 0, 745, 352);
		panel.add(lblNewLabel);
		
		//窗体居中
		this.setLocationRelativeTo(null);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.view;

import java.util.List;

import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.table.DefaultTableModel;

import com.tencent.entity.Emp;
import com.tencent.service.EmpServiceImpl;
import com.tencent.service.IEmpService;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.JComboBox;
import javax.swing.DefaultComboBoxModel;
import javax.swing.JButton;

public class SelectEmpPanel extends JPanel {
	private JTable table;
	private JTextField textField;
	private JTextField textField_1;

	/**
	 * Create the panel.
	 */
	public SelectEmpPanel() {
		setLayout(null);
		
		JScrollPane scrollPane = new JScrollPane();
		scrollPane.setBounds(10, 38, 725, 304);
		add(scrollPane);
		
		/*
		 * 调用service层方法，获取查询的数据
		 */
		IEmpService empService = new EmpServiceImpl();
		List&lt;Emp&gt; empList = empService.selectEmps();
		
		//List ——&gt; Object[][]
		Object[][] values = new Object[empList.size()][8];
		
		Object[] objArray = empList.toArray();
		int k = 0;
		for (Object object : objArray) {
			Emp emp = (Emp)object;
			
			values[k++] = new Object[]{emp.getEmpno(),emp.getEname(),emp.getJob(),emp.getManager(),emp.getHiredate(),emp.getSalary(),emp.getComm(),emp.getDeptno()};
		}
		
		table = new JTable();
		scrollPane.setViewportView(table);
		table.setModel(new DefaultTableModel(
			values,
			new String[] {
				&quot;\\u96C7\\u5458\\u7F16\\u53F7&quot;, &quot;\\u96C7\\u5458\\u59D3\\u540D&quot;, &quot;\\u804C\\u4F4D&quot;, &quot;\\u4E0A\\u7EA7\\u7ECF\\u7406&quot;, &quot;\\u5165\\u804C\\u65E5\\u671F&quot;, &quot;\\u85AA\\u8D44&quot;, &quot;\\u5956\\u91D1&quot;, &quot;\\u90E8\\u95E8\\u7F16\\u53F7&quot;
			}
		));
		
		JLabel label = new JLabel(&quot;\\u96C7\\u5458\\u7F16\\u53F7\\uFF1A&quot;);
		label.setBounds(30, 13, 67, 15);
		add(label);
		
		textField = new JTextField();
		textField.setBounds(99, 10, 66, 21);
		add(textField);
		textField.setColumns(10);
		
		JLabel label_1 = new JLabel(&quot;\\u96C7\\u5458\\u59D3\\u540D\\uFF1A&quot;);
		label_1.setBounds(190, 13, 67, 15);
		add(label_1);
		
		textField_1 = new JTextField();
		textField_1.setBounds(267, 10, 66, 21);
		add(textField_1);
		textField_1.setColumns(10);
		
		JLabel label_2 = new JLabel(&quot;\\u90E8\\u95E8\\uFF1A&quot;);
		label_2.setBounds(358, 13, 54, 15);
		add(label_2);
		
		JComboBox comboBox = new JComboBox();
		comboBox.setModel(new DefaultComboBoxModel(new String[] {&quot;&quot;, &quot;10&quot;, &quot;20&quot;, &quot;30&quot;, &quot;40&quot;}));
		comboBox.setBounds(417, 10, 77, 21);
		add(comboBox);
		
		JButton button = new JButton(&quot;\\u67E5\\u8BE2&quot;);
		button.setBounds(549, 9, 93, 23);
		add(button);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="效果图" tabindex="-1"><a class="header-anchor" href="#效果图" aria-hidden="true">#</a> 效果图</h4><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>76-Java-JDBC与java数据库编程-基于MVC三层编程_小项目示例代码.md</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',36);function r(u,m){return e(),i("div",null,[t(" more "),v])}const b=n(a,[["render",r],["__file","258-Java-JDBC与java数据库编程-基于MVC三层编程_小项目示例代码.html.vue"]]);export{b as default};
