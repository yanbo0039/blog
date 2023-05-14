import{_ as n,X as l,Y as s,a1 as d,Z as e,$ as a,a2 as t,a0 as r,F as c}from"./framework-68dd73a2.js";const o="/blog/assets/Oracle_23_1.png",v="/blog/assets/Oracle_23_2.png",m="/blog/assets/Oracle_23_3.png",u="/blog/assets/Oracle_23_4.png",g="/blog/assets/Oracle_23_5.png",p="/blog/assets/Oracle_23_6.png",b="/blog/assets/Oracle_23_7.png",_="/blog/assets/Oracle_23_8.png",h="/blog/assets/Oracle_23_9.png",x="/blog/assets/Oracle_23_10.png",f={},w=r(`<h1 id="oracle初级测试题十五-9-9-视图" tabindex="-1"><a class="header-anchor" href="#oracle初级测试题十五-9-9-视图" aria-hidden="true">#</a> Oracle初级测试题十五(9-9)--视图</h1><h2 id="练习1" tabindex="-1"><a class="header-anchor" href="#练习1" aria-hidden="true">#</a> 练习1</h2><ol><li>创建一个视图，通过该视图可以查询到工资在2000-5000内并且姓名中包含有A的员工编号，姓名，工资。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create or replace view viewSal2k_5k
       as select empno,ename,sal from emp
       where sal between 2000 and 5000
       and ename like &#39;%A%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>通过上述创建的视图查询数据</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from viewSal2k_5k;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="练习2" tabindex="-1"><a class="header-anchor" href="#练习2" aria-hidden="true">#</a> 练习2</h2><ol><li>创建一个视图，通过该视图可以查询到工作在NEW YORK和CHICAGO的员工编号，姓名，部门编号，入职日期。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create or replace view viewLoc_NY_CA
as select empno,ename,dept.deptno,hiredate
          from emp,dept
          where emp.deptno = dept.deptno
          and loc in (&#39;NEW YORK&#39;,&#39;CHICAGO&#39;);

select * from viewLoc_NY_CA;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>创建一个视图，通过该视图可以查询到每个部门的部门名称及最低工资。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create or replace view viewMinSalbydname
as select dname,min(sal) minSalbydname
   from emp,dept
   where emp.deptno(+) = dept.deptno
   group by dept.dname;
select * from viewMinSalbydname;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+`" alt="" loading="lazy"> 3. 通过如上视图，查询每个部门工资最低的员工姓名及部门名称</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select ename,viewMinSalbydname.dname
from emp,dept,viewMinSalbydname
where emp.deptno = dept.deptno
and dept.dname = viewMinSalbydname.dname
and emp.sal = viewMinSalbydname.minSalbydname;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2><ol><li>创建视图v_emp_20，包含20号部门的员工编号，姓名，年薪列(年薪=12*(工资+奖金）；</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create or replace view v_emp_20
as select empno,ename,12 * (nvl(sal,0) + nvl(comm,0)) 年薪
from emp where deptno in 20;

select * from v_emp_20;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>从视图v_emp_20中查询年薪大于1万元员工的信息；</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select * from v_emp_20
where 年薪 &gt; 10000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>请为工资大于2000的员工创建视图，要求显示员工的部门信息，职位信息，工作地点；</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create or replace view v_sal2000M
as select dname,job,loc
   from emp,dept
   where emp.deptno = dept.deptno
   and sal &gt; 2000;
select * from v_sal2000M;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>针对以上视图执行insert,update,delete,语句能否成功，为什么？</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>insert into v_sal2000M values(&#39;aaa&#39;,&#39;bbb&#39;,&#39;ccc&#39;);
-- error 无法修改与非键值保存表对应的列
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>update v_sal2000M set job = &#39;aaa&#39;
       where job in &#39;MANAGER&#39;; -- ok
select * from v_sal2000M;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>delete v_sal2000M; -- ok
select * from v_sal2000M;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>drop v_sal2000M;-- 表数据与结构都被删除，表没了
select * from v_sal2000M;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="拓展链接" tabindex="-1"><a class="header-anchor" href="#拓展链接" aria-hidden="true">#</a> 拓展链接</h4>`,35),y={href:"https://blog.csdn.net/bb_code_exchange/article/details/81365813",target:"_blank",rel:"noopener noreferrer"},O=e("hr",null,null,-1),M=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),a(" 分割线")],-1),k=e("hr",null,null,-1),S=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function z(N,A){const i=c("ExternalLinkIcon");return l(),s("div",null,[d(" more "),w,e("p",null,[e("a",y,[a("第十五章视图课后练习和作业"),t(i)])]),O,M,k,S])}const E=n(f,[["render",z],["__file","23-Oracle初级测试题十五(9-9)--视图.html.vue"]]);export{E as default};
