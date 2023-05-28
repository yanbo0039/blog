import{_ as e,X as a,Y as i,a1 as o,a0 as t}from"./framework-68dd73a2.js";const r="/blog/assets/Oracle_8_1.png",n="/blog/assets/Oracle_8_2.png",s="/blog/assets/Oracle_8_3.png",c="/blog/assets/Oracle_8_4.png",p="/blog/assets/Oracle_8_5.png",g="/blog/assets/Oracle_8_6.png",l="/blog/assets/Oracle_8_7.png",d="/blog/assets/Oracle_8_8.png",m="/blog/assets/Oracle_8_9.png",f="/blog/assets/Oracle_8_10.png",_="/blog/assets/Oracle_8_11.png",u="/blog/assets/Oracle_8_12.png",h="/blog/assets/Oracle_8_13.png",b="/blog/assets/Oracle_8_14.png",y="/blog/assets/Oracle_8_15.png",x="/blog/assets/Oracle_8_16.png",z="/blog/assets/Oracle_8_17.png",O="/blog/assets/Oracle_8_18.png",w="/blog/assets/Oracle_8_19.png",M="/blog/assets/Oracle_8_20.png",q="/blog/assets/Oracle_8_21.png",D="/blog/assets/Oracle_8_22.png",j="/blog/assets/Oracle_8_23.png",A="/blog/assets/Oracle_8_24.png",V="/blog/assets/Oracle_8_25.png",Y="/blog/assets/Oracle_8_26.png",N="/blog/assets/Oracle_8_27.png",R="/blog/assets/Oracle_8_28.png",k="/blog/assets/Oracle_8_29.png",v="/blog/assets/Oracle_8_30.png",E="/blog/assets/Oracle_8_31.png",S="/blog/assets/Oracle_8_32.png",B="/blog/assets/Oracle_8_33.png",G="/blog/assets/Oracle_8_34.png",H="/blog/assets/Oracle_8_35.png",L="/blog/assets/Oracle_8_36.png",$="/blog/assets/Oracle_8_37.png",C="/blog/assets/Oracle_8_38.png",J="/blog/assets/Oracle_8_39.png",I="/blog/assets/Oracle_8_40.png",P="/blog/assets/Oracle_8_41.png",T="/blog/assets/Oracle_8_42.png",X="/blog/assets/Oracle_8_43.png",F="/blog/assets/Oracle_8_44.png",K="/blog/assets/Oracle_8_45.png",Q="/blog/assets/Oracle_8_46.png",U="/blog/assets/Oracle_8_47.png",W="/blog/assets/Oracle_8_48.png",Z="/blog/assets/Oracle_8_49.png",ee="/blog/assets/Oracle_8_50.png",ae="/blog/assets/Oracle_8_51.png",ie="/blog/assets/Oracle_8_52.png",oe="/blog/assets/Oracle_8_53.png",te="/blog/assets/Oracle_8_54.png",re="/blog/assets/Oracle_8_55.png",ne="/blog/assets/Oracle_8_56.png",se="/blog/assets/Oracle_8_57.png",ce="/blog/assets/Oracle_8_58.png",pe="/blog/assets/Oracle_8_60.png",ge="/blog/assets/Oracle_8_62.png",le="/blog/assets/Oracle_8_63.png",de="/blog/assets/Oracle_8_64.png",me="/blog/assets/Oracle_8_66.png",fe="/blog/assets/Oracle_8_68.png",_e="/blog/assets/Oracle_8_69.png",ue="/blog/assets/Oracle_8_72.png",he={},be=t(`<h1 id="oracle-函数" tabindex="-1"><a class="header-anchor" href="#oracle-函数" aria-hidden="true">#</a> Oracle---函数</h1><p>--单行函数 --字符函数 --lover 将字符全部转为小写</p><pre><code>select ename,lower(ename) from emp;
</code></pre><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select ename from emp where lower(ename) like &#39;%s%&#39;;
</code></pre><figure><img src="`+n+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--upper 将字符全部转为大写</p><pre><code>select upper(ename) from emp;
</code></pre><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select ename from emp where upper(ename) like &#39;%s%&#39;;
</code></pre><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--initcap--将字符首字母转为大写,其它字母变成小写</p><pre><code>select initcap(ename) from emp;
</code></pre><figure><img src="`+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select &#39;Sql course&#39;,initcap(&#39;sql sourse&#39;) from dual;--dual伪表
</code></pre><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--concat 连接两个值 等同于 ||</p><pre><code>select ename || &#39;的工资是&#39; || sal from emp;
select concat(concat(ename,&#39;的工资是&#39;),sal) from emp;
</code></pre><p><img src="`+l+'" alt="" loading="lazy"><img src="'+d+`" alt="" loading="lazy"></p><p>-- substr --截取字符串子串,默认下标1开始</p><pre><code>select &#39;wuyuehong@qq.com&#39;,substr(&#39;wuyuehong@qq.com&#39;,3),
substr(&#39;wuyuehong@qq.com&#39;,10,3) from dual;
</code></pre><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--length -- 取字符串长度</p><pre><code>select ename,length(ename) from emp;
</code></pre><figure><img src="`+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.写一个查询,用首字母大写，其它字母小写显示雇员的 ename，显 --示名字的长度，并给每列一个适当的标签，条件是满足所有雇员名字 --的开始字母是J、A 或 M 的雇员，并对查询结果按雇员的ename升序 --排序。</p><pre><code>select initcap(ename) 首字母大写, length(ename) 名字长度
from emp
where initcap(ename) like &#39;J%&#39; or initcap(ename) like &#39;A%&#39; or initcap(ename) like &#39;M%&#39;
order by ename;
</code></pre><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--字符处理函数 -- instr 参数 一是目标字符串，参数二子串，参数三开始索引，参数四 第几次出现</p><pre><code>select &#39;wuyuehong@qq.com&#39;,
instr(&#39;wuyuehong@qq.com&#39;,&#39;@&#39;,9),
instr(&#39;wuyuehong@qq.com&#39;,&#39;.&#39;,1,2) from dual;
</code></pre><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--lpad--补充字符串(左） --参数一 目标字符串，参数二 返回字符长度 参数三 填充字符串</p><pre><code>select ename,lpad(ename,10,&#39;aa&#39;),length(ename) from emp;
</code></pre><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--rpad--被充字符串（右）</p><pre><code>select ename,rpad(ename,10,&#39;aa&#39;),rpad(ename,10,&#39;aa&#39;),length(ename) from emp;
</code></pre><p><img src="`+b+`" alt="" loading="lazy"> --trim()--默认去字符串首尾空格 --去掉指定字符串,默认去掉首尾指定子串</p><pre><code>select &#39;    sql sourse   &#39;,trim(&#39;    sql sourse   &#39;) from dual;
</code></pre><figure><img src="`+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select &#39;hsql sourseh&#39;,trim(&#39;h&#39; from &#39;hsql sourseh&#39;) from dual;
</code></pre><figure><img src="`+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select &#39;hsql sourseh&#39;,trim(both &#39;h&#39; from &#39;hsql sourseh&#39;) from dual;
</code></pre><figure><img src="`+z+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select &#39;hsql sourseh&#39;,trim(leading &#39;h&#39; from &#39;hsql sourseh&#39;) from dual;
</code></pre><figure><img src="`+O+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select &#39;hsql sourseh&#39;,trim(trailing &#39;h&#39; from &#39;hsql sourseh&#39;) from dual;
</code></pre><figure><img src="`+w+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--replace 字符替换函数 --REPLACE(s1,s2,s3) --参数一 目标字符串 参数二目标字符子串 参数三替换字符串</p><pre><code>select &#39;hsql sourseh&#39;,replace(&#39;hsql sourseh&#39;,&#39;hs&#39;,&#39;a&#39;) from dual;
</code></pre><figure><img src="`+M+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select &#39;hsql sourseh&#39;,replace(&#39;hsql sourseh&#39;,&#39; &#39;,&#39;&#39;) from dual;
</code></pre><figure><img src="`+q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.查询员工姓名中中包含大写或小写字母A的员工姓名。</p><p>--2.查询部门编号为10或20，入职日期在81年5月1日之后， --并且姓名中包含大写字母A的员工姓名，员工姓名长度（提示，要求使用INSTR函数，不能使用like进行判断)</p><pre><code>select * from emp where 
deptno in(10,20) and instr(ename,&#39;A&#39;) != 0;
</code></pre><figure><img src="`+D+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select ename,length(ename) from emp 
where instr(ename,&#39;A&#39;) &gt; 0 and hiredate &gt; &#39;01-5月-81&#39; and deptno in(10,20);
</code></pre><figure><img src="`+j+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询每个职工的编号,姓名，工资 --要求将查询到的数据按照一定的格式合并成一个字符串. --前10位：编号,不足部分用<em>填充,左对齐 --中间10位：姓名，不足部分用</em>填充,左对齐 --后10位：工资，不足部分用*填充,右对齐</p><hr><p>--数值函数 --round 四舍五入 -- 参数一目标数值 参数 保留多少位</p><pre><code>select 45.926,round(45.926)
,round(45.926,2),
round(45.926,0),
round(45.926,-1),
round(45.926,-2) from dual;
</code></pre><figure><img src="`+A+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--trunc()截取-- 参数一目标数值 参数 保留多少位</p><pre><code>select 45.926,trunc(45.926),
trunc(45.926,2),
trunc(45.926,0),
trunc(45.926,-1),
trunc(45.926,-2) from dual;
</code></pre><figure><img src="`+V+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--mod 取余数 ，取模</p><pre><code>select 12,mod(12,5) from dual;--2
</code></pre><figure><img src="`+Y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--日期函数 --sysdate返回当前系统日期</p><pre><code>select sysdate from dual;
</code></pre><figure><img src="`+N+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--日期的运算 --加减 后面数值默认是天</p><pre><code>select sysdate+2 from dual;
</code></pre><figure><img src="`+R+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select sysdate-180 from dual;
</code></pre><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.查询每个员工截止到现在一共入职多少天？ --2.当前日期为2015年，指定日期格式为DD-MON-RR,指定日期为01-1月-01，该日期实际所代表的日期为？</p><p>--3.当前日期为2015年，指定日期格式为DD-MON-RR,指定日期为01-1月-95，该日期实际所代表的日期为？</p><p>--4.当前日期为1998年，指定日期格式为DD-MON-RR,指定日期为01-1月-01，该日期实际所代表的日期为？</p><p>--5.当前日期为1998年，指定日期格式为DD-MON-RR,指定日期为01-1月-95，该日期实际所代表的日期为？</p><p>--6.当前日期为2015年，指定日期格式为DD-MON-YY,指定日期为01-1月-01，该日期实际所代表的日期为？</p><p>--7.当前日期为1998年，指定日期格式为DD-MON-YY,指定日期为01-1月-95，该日期实际所代表的日期为？ --months_between 返回两个日期类型数据之间间隔的自然月数</p><pre><code>select months_between(hiredate,sysdate),
months_between(sysdate,hiredate) from emp;
</code></pre><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--add_months 添加月数</p><pre><code>select hiredate,add_months(hiredate,6) as 转正日期 from emp;
</code></pre><figure><img src="`+E+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--next_day</p><pre><code>select next_day(sysdate,&#39;星期二&#39;) from emp;
</code></pre><figure><img src="`+S+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--last_day 返回指定日期当月最后一天的日期</p><pre><code>select last_day(&#39;01-2月-81&#39;) from dual;
</code></pre><figure><img src="`+B+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--round(date,fmt) 按照指 定格式四舍五入获得日期</p><pre><code>select hiredate,round(hiredate,&#39;MM&#39;) from emp;--按月份四舍五入 找天 大于15月份加1
</code></pre><figure><img src="`+G+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select hiredate,round(hiredate,&#39;YY&#39;) from emp;--按照年四舍五入 找月 大于6年加1
</code></pre><figure><img src="`+H+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select hiredate,round(hiredate,&#39;DD&#39;) from emp;--按照日四舍五入
</code></pre><figure><img src="`+L+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--trunc(data,fmt)截取日期 按照指定格式 截取获得日期</p><pre><code>select hiredate,trunc(hiredate,&#39;MM&#39;) from emp;
</code></pre><figure><img src="`+$+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select hiredate,trunc(hiredate,&#39;YY&#39;) from emp;
</code></pre><figure><img src="`+C+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select hiredate,trunc(hiredate,&#39;DD&#39;) from emp;
</code></pre><figure><img src="`+J+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--extract 抽取指定格式日期year month</p><pre><code>select sysdate,extract(month from sysdate) from emp;
</code></pre><figure><img src="`+I+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.查询服务器当前时间</p><pre><code>select sysdate from dual;
</code></pre><figure><img src="`+P+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询部门10,20的员工截止到2000年1月1日，工作了多少个月， --入职的月份。(提示：使用months_between,extract)</p><pre><code>select hiredate as 入职日期,
extract(month from hiredate) as 入职月份,
months_between(&#39;01-1月-00&#39;,hiredate) as 工作月份
from emp where deptno in(10,20);
</code></pre><figure><img src="`+T+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.如果员工试用期6个月，查询职位不是MANAGER的员工姓名， --入职日期，转正日期，入职日期后的第一个星期一,入职当月的最后一天日期。 --（提示：使用add_months,next_day,last_day)</p><pre><code>select ename as 员工姓名,
hiredate as 入职日期,
add_months(hiredate,6) 转正日期,
next_day(hiredate,&#39;星期一&#39;) as 入职日期后的第一个星期一,
last_day(hiredate)as 入职当月的最后一天日期
from emp where job not in(&#39;MANAGER&#39;);
</code></pre><figure><img src="`+X+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select ename 员工姓名, hiredate 入职日期, add_months(hiredate,6) 转正日期,next_day(hiredate,&#39;星期一&#39;) 第一个星期一, last_day(hiredate) from emp where job &lt;&gt; &#39;MANAGER&#39;;--kaiqingli
</code></pre><figure><img src="`+F+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--转化函数 --隐式转换</p><pre><code>select sal,sal+12.0 from emp;
</code></pre><figure><img src="`+K+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select sal,sal+&#39;10&#39; from emp;
</code></pre><figure><img src="`+Q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--显示转换 --to_char 日期转为字符类型</p><pre><code>select hiredate,to_char(hiredate,&#39;yy-mm-dd&#39;) from emp;
</code></pre><figure><img src="`+U+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select hiredate,to_char(hiredate,&#39;yyyy-mm-dd&#39;) from emp;
</code></pre><figure><img src="`+W+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select hiredate,to_char(hiredate,&#39;yyyy/mm/dd&#39;) from emp;
</code></pre><figure><img src="`+Z+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select hiredate,to_char(hiredate,&#39;yyyy&quot;年&quot;mm&quot;月&quot;dd&quot;日&quot;&#39;) from emp;
</code></pre><figure><img src="`+ee+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select hiredate,to_char(sysdate,&#39;yyyy-mm-dd hh24:mi:ss&#39;) from emp;
</code></pre><figure><img src="`+ae+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select hiredate,to_char(sysdate,&#39;yyyy-mm-dd hh12:mi:ss&#39;) from emp;
</code></pre><figure><img src="`+ie+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--to_char 用于数值型</p><pre><code>select 12343434.789 from dual;
</code></pre><figure><img src="`+oe+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select to_char(&#39;$12343434.789&#39;) from dual;
</code></pre><figure><img src="`+te+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--to_number 字符内型转换为数值类型</p><pre><code>select saL,sal+&#39;10&#39; from emp;--隐式转换
</code></pre><figure><img src="`+re+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select to_number(&#39;123.4&#39;)+3 from dual;--显示转换
</code></pre><figure><img src="`+ne+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--to_date 字符类型转为日期类型</p><pre><code>select to_date(&#39;2018-03-01&#39;,&#39;YY/MM/DD&#39;) from dual;
</code></pre><figure><img src="`+se+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.显示服务器系统当前时间，格式为2007-10-12 17:11:11(提示：使用to_char函数)</p><pre><code>select to_char(sysdate,&#39;yyyy-mm-dd hh24:mi:ss&#39;) from emp;
</code></pre><figure><img src="`+ce+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.显示ename、hiredate 和 雇员开始工作日是星期几，列标签DAY(提示：使用to_char函数)</p><pre><code>select ename as 员工姓名,
hiredate as 入职日期,
to_char(hiredate,&#39;day&#39;) as day
from emp;
</code></pre><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-6e7ec5bd5feOracle_8_59.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.查询员工姓名，工资，格式化的工资（￥999,999.99） (提示：使用to_char函数)</p><pre><code>select ename,sal,
</code></pre><p><img src="`+pe+`" alt="" loading="lazy"> from emp; <img src="https://upload-images.jianshu.io/upload_images/5227364-fc7d786e51d15cOracle_8_61.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><p>--4.把字符串2015-3月-18 13:13:13 转换成日期格式，并计算和系统当前时间间隔多少天。 (提示：使用to_date函数)</p><pre><code>select to_date(&#39;2015-3月-18 13:13:13&#39;,&#39;YY-MM&quot;月&quot;-DD hh24:mi:ss&#39;),
trunc(sysdate - to_date(&#39;2015-3月-18 13:13:13&#39;,&#39;YY-MM&quot;月&quot;-DD hh24:mi:ss&#39;))
</code></pre><p><img src="`+ge+`" alt="" loading="lazy"><img src="https://upload-images.jianshu.io/upload_images/5227364-b957b1e47f74d37d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><p>--通用函数 --nvl 参数一目标对象 参数二替代值</p><pre><code>select comm,nvl(comm,0) from emp;
</code></pre><figure><img src="`+le+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>-- nvl2 参数一目标对象 参数二 参数三代替值</p><pre><code>select comm,nvl2(comm,&#39;有奖金&#39;,0) from emp;
</code></pre><figure><img src="`+de+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select comm,nvl2(comm,&#39;有奖金&#39;,&#39;无&#39;) from emp;
</code></pre><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-810e85ef4eOracle_8_65.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--nullif 参数一与参数二进行比较如果相等返回空，否则返回参数一 --参数一与参数二类型必须一致</p><pre><code>select nullif(1,&#39;1&#39;) from dual;--数值类型不一致
</code></pre><p><img src="https://upload-images.jianshu.io/upload_images/5227364-55929356310604bd.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"><img src="`+me+`" alt="" loading="lazy"> select nullif(1,1) from dual;--null <img src="https://upload-images.jianshu.io/upload_images/5227364-70c3ac111bfdcOracle_8_67.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><pre><code>select nullif(1,2) from dual;--1
</code></pre><figure><img src="`+fe+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--coalesce函数</p><pre><code>select coalesce(123) from dual;--函数没有足够的参数
</code></pre><figure><img src="`+_e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select coalesce(null,null,3,4,2) from dual;
</code></pre><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-eb88679b6165a3fOracle_8_70.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>select coalesce(null,null,comm,4,2) from emp;
</code></pre><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-aff12dff338f8ebOracle_8_71.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="case-decode用来进行条件判断输出映射结果" tabindex="-1"><a class="header-anchor" href="#case-decode用来进行条件判断输出映射结果" aria-hidden="true">#</a> --case --decode用来进行条件判断输出映射结果</h2><pre><code>select * from emp;
</code></pre><p><img src="`+ue+`" alt="" loading="lazy"> select ename,hiredate,deptno, case deptno when 10 then &#39;研发部&#39; when 20 then &#39;生产部&#39;<br> when 30 then &#39;财务部&#39; else &#39;无&#39; end as 部门 from emp;<br><img src="https://upload-images.jianshu.io/upload_images/5227364-862a981c3cb5cf6c.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></p><p>--decode</p><pre><code>select ename,hiredate,deptno,
    decode(deptno,10,&#39;研发部&#39;,20,&#39;生产部&#39;,30,&#39;财务部&#39;,&#39;无&#39;) as 部门
    from emp;    
</code></pre><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-78e7342349eOracle_8_73.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="函数嵌套-注意-函数的嵌套最里的那一层先执行" tabindex="-1"><a class="header-anchor" href="#函数嵌套-注意-函数的嵌套最里的那一层先执行" aria-hidden="true">#</a> --函数嵌套 --注意：函数的嵌套最里的那一层先执行</h2><pre><code>select ename,nvl(to_char(mgr),&#39;无经理&#39;) from emp;
</code></pre><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-aba870718b9bbfbOracle_8_74.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--1.计算2000年1月1日到现在有多少月，多少周（四舍五入）。</p><pre><code>select months_between(sysdate,&#39;01-1月-00&#39;) as 月,
round(months_between(sysdate,&#39;01-1月-00&#39;)*30/7) as 周
from dual;
</code></pre><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-f984f8e7ace4cOracle_8_75.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--2.查询员工ENAME的第三个字母是A的员工的信息(使用2个函数)。</p><pre><code>select * from emp where ename like &#39;__A%&#39;;
</code></pre><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-2a54d8e306df61be.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--3.使用trim函数将字符串‘hello’、‘ Hello ’、‘bllb’、‘ hello<br> -- ’分别处理得到下列字符串ello、Hello、ll、hello。</p><pre><code>select trim(&#39;h&#39; from &#39;hello&#39;),
    trim(&#39; &#39; from &#39; Hello &#39;),
    trim(&#39;b&#39; from &#39;bllb&#39;),
    trim(&#39; &#39; from &#39; hello &#39;)
from dual;
</code></pre><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-674336cda5885f4c.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--4.将员工工资按如下格式显示：123,234.00 RMB 。</p><pre><code>select ename,sal,to_char(sal,&#39;$99,99.99&#39;) from emp;
</code></pre><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-9831e05c7b14166e.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--5.查询员工的姓名及其经理编号，要求对于没有经理的显示“No Manager”字符串。</p><pre><code>select ename,mgr,nvl(to_char(mgr),&#39;NO Manager&#39;) from emp;
</code></pre><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-f2ce92fed39bde5d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--6.将员工的参加工作日期按如下格式显示：月份/年份。</p><p>--7.在员工表中查询出员工的工资，并计算应交税款： --如果工资小于1000,税率为0，如果工资大于等于1000并小于2000， --税率为10％，如果工资大于等于2000并小于3000，税率为15％，如果工资大于等于3000，税率为20％。</p><pre><code>select sal,ename,
    case 
        when sal&lt;1000 then 0
        when sal &gt;= 1000 and sal &lt; 2000 then (sal-1000)*0.1
            when sal &gt;= 2000 and sal &lt; 3000 then 1000*0.1 + (sal - 2000) * 0.15
            when sal &gt;= 3000 then 1000*0.1 + 1000*0.15+(sal-3000)*0.2
                end as 税收
                from emp;
</code></pre><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-b48c125ff145430b.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>--8.创建一个查询显示所有雇员的 ename和 sal。格式化sal为 15 个字符长度，用 $ 左填充，列标签 SALARY。</p><pre><code>select * from emp;
</code></pre><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,221);function ye(xe,ze){return a(),i("div",null,[o(" more "),be])}const we=e(he,[["render",ye],["__file","index.html.vue"]]);export{we as default};
