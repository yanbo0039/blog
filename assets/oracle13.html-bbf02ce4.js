import{_ as e,X as a,Y as s,a1 as o,a0 as t}from"./framework-68dd73a2.js";const r="/blog/assets/Oracle_13_1.png",c="/blog/assets/Oracle_13_2.png",n="/blog/assets/Oracle_13_3.png",l="/blog/assets/Oracle_13_4.png",p="/blog/assets/Oracle_13_5.png",i="/blog/assets/Oracle_13_6.png",g="/blog/assets/Oracle_13_7.png",m="/blog/assets/Oracle_13_8.png",d="/blog/assets/Oracle_13_9.png",_="/blog/assets/Oracle_13_10.png",f="/blog/assets/Oracle_13_11.png",b="/blog/assets/Oracle_13_12.png",h="/blog/assets/Oracle_13_13.png",O="/blog/assets/Oracle_13_14.png",u={},y=t(`<h1 id="oracle初级测试题二-编写简单的查询语句" tabindex="-1"><a class="header-anchor" href="#oracle初级测试题二-编写简单的查询语句" aria-hidden="true">#</a> Oracle初级测试题二-编写简单的查询语句</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>--练习一</p><p>--1.使用两种方式查询所有员工(EMP)信息</p><pre><code>select * from emp;
select empno,ename,job,mgr,hiredate,sal,comm,deptno from emp;
</code></pre><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询(EMP)员工编号、员工姓名、员工职位、员工月薪、工作部门编号。</p><pre><code>select empno,ename,job,sal,deptno from emp;
</code></pre><p><img src="`+c+`" alt="" loading="lazy"> --练习二 --1.员工转正后，月薪上调20%，请查询出所有员工转正后的月薪。</p><pre><code>select ename,sal,sal * 1.2 转正后月薪
from emp;
</code></pre><p><img src="`+n+`" alt="" loading="lazy"> --2.员工试用期6个月，转正后月薪上调20%， --请查询出所有员工工作第一年的年薪所得（不考虑奖金部分,年薪的试用期6个月的月薪+转正后6个月的月薪)</p><pre><code>select ename,sal * 6 + sal * 1.2 * 6 as 第一年年薪
from emp;
</code></pre><p><img src="`+l+`" alt="" loading="lazy"> --练习三 --1.员工试用期6个月，转正后月薪上调20%， --请查询出所有员工工作第一年的所有收入（需考虑奖金部分)， --要求显示列标题为员工姓名，工资收入，奖金收入，总收入。</p><pre><code>select ename as 员工姓名,
sal * 6 + sal * 1.2 *6 as 工资收入,
nvl(comm,0) as 奖金收入,
sal * 6 + sal * 1.2 *6 + nvl(comm,0) as 总收入
from emp;
</code></pre><p><img src="`+p+`" alt="" loading="lazy"> --练习四 --1.员工试用期6个月，转正后月薪上调20%，请查询出所有员工工作第一年的所有收入（需考虑奖金部分)，要求显示格式为:XXX的第一年总收入为XXX。</p><pre><code>select ename,ename || &#39;的第一年总收入为&#39; || (sal * 6 + sal * 1.2 * 6 + nvl(comm,0)) as 年薪
from emp;
</code></pre><p><img src="`+i+`" alt="" loading="lazy"> --2.查询员工表中一共有哪几种岗位类型。</p><pre><code>select distinct job from emp;
</code></pre><p><img src="`+g+`" alt="" loading="lazy"> --课后作业 --1.分别选择员工表、部门表、薪资等级表中的所有数据。</p><pre><code>select * from emp;
</code></pre><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select * from dept;
</code></pre><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select * from salgrade;
</code></pre><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select * from bonus;
</code></pre><p><img src="`+f+'" alt="" loading="lazy"> --2.分别查看员工表、部门表、薪资等级表的表结构。</p><p>左侧 Objects--&gt;Tables--&gt;某表(emp/dept/salgrade)--&gt;右键--&gt;Edit</p><p><img src="'+b+'" alt="" loading="lazy"><img src="'+h+'" alt="" loading="lazy"><img src="'+O+'" alt="" loading="lazy"></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Oracle初级测试题二-编写简单的查询语句</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',33);function z(v,x){return a(),s("div",null,[o(" more "),y])}const j=e(u,[["render",z],["__file","oracle13.html.vue"]]);export{j as default};
