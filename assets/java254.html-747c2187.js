import{_ as s,X as d,Y as t,a1 as l,Z as n,$ as i,a2 as a,a0 as v,F as r}from"./framework-68dd73a2.js";const c={},m={id:"_254-java-jdbc与java数据库编程-处理resultset查询结果-md",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#_254-java-jdbc与java数据库编程-处理resultset查询结果-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--254-Java-JDBCjava-ResultSet-u276bey1px38a6p5a6onv2q5icz15p7j0bl8xblcc237s.md",target:"_blank",rel:"noopener noreferrer"},o=v(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.jdbc.entity;

import java.util.Date;

/**
 * 映射数据库Emp表的实体类
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java-JDBC与java数据库编程-处理ResultSet查询结果</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,7);function p(h,g){const e=r("ExternalLinkIcon");return d(),t("div",null,[l(" more "),n("h1",m,[u,i(),n("a",b,[i("254-Java-JDBC与java数据库编程-处理ResultSet查询结果.md"),a(e)])]),o])}const _=s(c,[["render",p],["__file","java254.html.vue"]]);export{_ as default};
