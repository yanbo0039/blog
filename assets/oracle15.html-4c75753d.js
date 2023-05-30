import{_ as e,X as t,Y as a,a1 as n,a0 as r}from"./framework-68dd73a2.js";const o={},c=r(`<h1 id="oracle初级测试题四-单行函数" tabindex="-1"><a class="header-anchor" href="#oracle初级测试题四-单行函数" aria-hidden="true">#</a> Oracle初级测试题四--单行函数</h1><p>--练习1</p><p>--1.写一个查询,用首字母大写，其它字母小写显示雇员的 ename， --显示名字的长度，并给每列一个适当的标签，条件是满足所有雇员名字的开始字母是J、A 或 M 的雇员， --并对查询结果按雇员的ename升序排序。（提示：使用initcap、length、substr）</p><pre><code>select initcap(ename) as 首字母大写,
length(ename) as 名字长度,
substr(ename,0,1),
substr(ename,1,1),
substr(ename,2,1) 
from emp 
where substr(ename,0,1) in(&#39;J&#39;,&#39;A&#39;,&#39;m&#39;)
order by ename asc;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--练习2</p><p>--1.查询员工姓名中中包含大写或小写字母A的员工姓名。</p><pre><code>select ename,
instr(ename,&#39;a&#39;),
instr(ename,&#39;A&#39;)
from emp
where instr(ename,&#39;a&#39;) &lt;&gt; 0 or instr(ename,&#39;A&#39;) &lt;&gt; 0;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询部门编号为10或20，入职日期在81年5月1日之后，并且姓名中包含大写字母A的员工姓名，员工姓名长度（提示，要求使用INSTR函数，不能使用like进行判断)</p><pre><code>select ename,
length(ename),
hiredate,
deptno,
instr(ename,&#39;A&#39;)
from emp
where deptno in(10,20) and
hiredate &gt; &#39;01-5月-81&#39; and
instr(ename,&#39;A&#39;) &lt;&gt; 0;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询每个职工的编号,姓名，工资 --要求将查询到的数据按照一定的格式合并成一个字符串. --前10位：编号,不足部分用<em>填充,左对齐 --中间10位：姓名，不足部分用</em>填充,左对齐 --后10位：工资，不足部分用*填充,右对齐</p><pre><code>select deptno,
ename,
sal,
lpad(deptno,10,&#39;*&#39;),
lpad(ename,10,&#39;*&#39;),
rpad(sal,10,&#39;*&#39;)  
from emp;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--练习3</p><p>--1.写一个查询，分别计算100.456 四舍五入到小数点后第2位，第1位，整数位的值。</p><pre><code>select round(100.456,2),
round(100.456,1),
round(100.456,0)
from dual;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.写一个查询，分别计算100.456 从小数点后第2位，第1位，整数位截断的值。</p><pre><code>select trunc(100.456,2),
trunc(100.456,1),
trunc(100.456,0)
from dual;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--练习4</p><p>--1.查询每个员工截止到现在一共入职多少天？</p><pre><code>select ename,trunc(sysdate - hiredate) as 到现在入职的天数 
from emp;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>口决：
RR： 大小进一 小大退一 
YY： 与RR相反
大大小小均不变(备注大指当前年份，小为指定年份)
</code></pre><p>--2.当前日期为2015年，指定日期格式为DD-MON-RR,指定日期为01-1月-01，该日期实际所代表的日期为？</p><pre><code>2001-01-01  
</code></pre><p>--3.当前日期为2015年，指定日期格式为DD-MON-RR,指定日期为01-1月-95，该日期实际所代表的日期为？</p><pre><code>1995-01-01
</code></pre><p>--4.当前日期为1998年，指定日期格式为DD-MON-RR,指定日期为01-1月-01，该日期实际所代表的日期为？</p><p>2001-01-01</p><p>--5.当前日期为1998年，指定日期格式为DD-MON-RR,指定日期为01-1月-95，该日期实际所代表的日期为？</p><pre><code>1995-01-01
</code></pre><p>--6.当前日期为2015年，指定日期格式为DD-MON-YY,指定日期为01-1月-01，该日期实际所代表的日期为？</p><pre><code>2001-01-01
</code></pre><p>--7.当前日期为1998年，指定日期格式为DD-MON-YY,指定日期为01-1月-95，该日期实际所代表的日期为？</p><pre><code>1995-01-01
</code></pre><p>--练习5</p><h4 id="串一个知识点。。查询所有用户表" tabindex="-1"><a class="header-anchor" href="#串一个知识点。。查询所有用户表" aria-hidden="true">#</a> 串一个知识点。。查询所有用户表</h4><pre><code>select * from user_tables;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.查询服务器当前时间</p><pre><code>select sysdate 
from emp;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询部门10,20的员工截止到2000年1月1日，工作了多少个月，入职的月份。(提示：使用months_between,extract)</p><pre><code>select hiredate,
trunc(months_between(&#39;01-1月-00&#39;,hiredate)) 工作月数,
extract(month from hiredate)
from emp
where deptno in(10,20);
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.如果员工试用期6个月，查询职位不是MANAGER的员工姓名，入职日期，转正日期，入职日期后的第一个星期一,入职当月的最后一天日期。（提示：使用add_months,next_day,last_day)</p><pre><code>select hiredate as 入职日期,
add_months(hiredate,6) as 转正日期,
next_day(hiredate,&#39;星期一&#39;) as 入职后的第一个星期一,
last_day(hiredate) as 入职当月的最后一天日期
from emp
where job not in &#39;MANAGER&#39;;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--练习6</p><p>--1.显示服务器系统当前时间，格式为2007-10-12 17:11:11(提示：使用to_char函数)</p><pre><code>select sysdate,
to_char(sysdate,&#39;yyyy-mm-dd hh24:mi:ss&#39;) 
from emp;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.显示ename、hiredate 和 雇员开始工作日是星期几，列标签DAY(提示：使用to_char函数)</p><pre><code>select ename,hiredate,to_char(hiredate,&#39;DAY&#39;) as DAY
from emp;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询员工姓名，工资，格式化的工资（￥999,999.99） (提示：使用to_char函数)</p><pre><code>备注：此处只能转换成$不能￥且此处的第二参数为固定&#39;$99,999&#39;少写会报错
select ename,sal,to_char(sal,&#39;$99,999&#39;)
from emp;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--4.把字符串2015-3月-18 13:13:13 转换成日期格式，并计算和系统当前时间间隔多少天。 (提示：使用to_date函数)</p><pre><code>select to_date(&#39;2015-3月-18 13:13:13&#39;,&#39;yyyy-mm&quot;月&quot;-dd hh24:mi:ss&#39;) as 日期,
trunc(sysdate-to_date(&#39;2015-3月-18 13:13:13&#39;,&#39;yyyy-mm&quot;月&quot;-dd hh24:mi:ss&#39;)) as 相差的天数
from emp;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--课后作业</p><p>--1.计算2000年1月1日到现在有多少月，多少周（四舍五入）。</p><pre><code>select round(months_between(sysdate,&#39;01-1月-00&#39;)),
round(months_between(sysdate,&#39;01-1月-00&#39;)*30/7)
from emp;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_17.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询员工ENAME的第三个字母是A的员工的信息(使用2个函数)。</p><pre><code>select ename,instr(ename,&#39;A&#39;,3,1)
from emp
where instr(ename,&#39;A&#39;,3,1) = 3;--从第三个位置开始第一次出现的位置
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_18.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select ename,substr(ename,3,1)
from emp
where substr(ename,3,1) in &#39;A&#39;;--从第三个位置开始截取一个字符串
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_19.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.使用trim函数将字符串‘hello’、‘ Hello ’、‘bllb’、‘ hello ’分别处理得到下列字符串ello、Hello、ll、hello。</p><pre><code>select trim(leading &#39;h&#39; from &#39;hello&#39;),
trim(both &#39; &#39; from &#39; Hello &#39;),
trim(both &#39;b&#39; from &#39;bllb&#39;),
trim(trailing &#39; &#39; from &#39;hello    &#39;)
from dual;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_20.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--4.将员工工资按如下格式显示：123,234.00 RMB 。</p><pre><code>select sal,to_char(sal,&#39;$99,999&#39;)
from emp;--这题我只能写成这样。。。若有人解出来。。请务必告知呀
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_21.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--5.查询员工的姓名及其经理编号，要求对于没有经理的显示“No Manager”字符串。</p><p>select ename,mgr,nvl(to_char(mgr),&#39;No Manager&#39;) from emp; -- 据说 nvl()里两参数必须是同一类型。。否则。。错死你 <sup>o</sup><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_22.png" alt="" loading="lazy"></p><p>--6.将员工的参加工作日期按如下格式显示：月份/年份。</p><pre><code>select hiredate,
extract(month from hiredate) || &#39;/&#39; || extract(year from hiredate) as &quot;月份/年份&quot;
from emp;

select hiredate,to_char(hiredate,&#39;mm/yyyy&#39;) as &quot;月份/年份&quot;
from emp;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_23.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--7.在员工表中查询出员工的工资，并计算应交税款：如果工资小于1000,税率为0，如果工资大于等于1000并小于2000，税率为10％，如果工资大于等于2000并小于3000，税率为15％，如果工资大于等于3000，税率为20％。</p><pre><code>select ename,sal,
case
when sal &lt; 1000 then 0
    when sal &gt;=1000 and sal &lt; 2000 then (sal-1000)*0.1
    when sal &gt;=2000 and sal &lt;3000 then 1000 * 0.1 + (sal - 2000) * 0.15
        when sal &gt; 3000 then 1000 * 0.1 + 1000 * 0.15 + (sal - 3000) * 0.2
        else 0
            end as 税款
from emp;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_24.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--8.创建一个查询显示所有雇员的 ename和 sal。格式化sal为 15 个字符长度，用 $ 左填充，列标签 SALARY。</p><pre><code>select ename,sal,lpad(sal,15,&#39;$&#39;) as SALARY
from emp;
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Oracle_15_25.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,96);function p(i,d){return t(),a("div",null,[n(" more "),c])}const l=e(o,[["render",p],["__file","oracle15.html.vue"]]);export{l as default};
