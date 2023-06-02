import{_ as s,X as l,Y as d,a1 as v,Z as i,$ as n,a2 as a,a0 as r,F as c}from"./framework-68dd73a2.js";const u={},m={id:"_179-java综合习测试一-md",tabindex:"-1"},t=i("a",{class:"header-anchor",href:"#_179-java综合习测试一-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--179-Java-709l34ac96bkq5eec5byuxb.md",target:"_blank",rel:"noopener noreferrer"},o=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h2 id="试题" tabindex="-1"><a class="header-anchor" href="#试题" aria-hidden="true">#</a> 试题</h2><h4 id="第一部分-不定项选择题-本部分20道题-满分20分" tabindex="-1"><a class="header-anchor" href="#第一部分-不定项选择题-本部分20道题-满分20分" aria-hidden="true">#</a> 第一部分:不定项选择题(本部分20道题，满分20分)</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不定项选择题，错选漏选都不给分
1. ［单选题］
在Javascript中，var varl = window.prompt(&quot;Hello&quot;,&quot;Please input your name&quot;)测varl的数据类型为？	(	)

A. 布尔
B. 整型
C. 字符串
D. 数字

2. ［单选题］

哪个是JavaScript最顶层的对象模型?	(	)

A. window
B. document
C. location
D. windows

3. ［单选题］

在JSP/Servlet中，forward和sendRedired都是用来做页面跳转的，描述错误的是？	(	)

A. forward之后可以使用原来的request对象，而且效率较高；
B. send Redirec之后不可以使用原乗的request对象，而且效率较低；
C. forward地址栏不变化，只能在Web应用程序内的页面间肉蹒；
D. forward地址栏变化,可以幡到任何页面和机器

4. ［单选题］

在JSP/Servlet中,销毁一个session对象应该调用下面哪一个方法?	(	)

A. session.invalidateO
B. session.expungeQ
C. session.destroyO
D. session.endO

5. ［单选题］

在Servlet中，response.getWriterQ返回的是	(	)

A. JspWriter对象
B. PrintWriterjl梅
C. OutX攧
D. ResponseWriterjl

6. ［单选题］

Servlet类为com.abc.TaxUtil.则TaxUtil.class文件被保存在哪里:	(	)

A. WEB-INF
B. WEB-INF/classes
C. WEB-INF/lib
D. WEB-INF/classes/com/abc

7. ［单选题］

哪个是JSP指令标记?	(	)

A. &lt;%...... %&gt;
B. &lt;%!...... %&gt;
C. &lt;%@ ......%&gt;
D. &lt;%=...... %&gt;

8. ［单选题］

在JSP中可动态导入其他页面的标签是	(	)

A. &lt;%include/&gt;
B. &lt;%@ include%&gt;
C. &lt;jsp:importPage/&gt;
D. &lt;jsp:include/&gt;

9. ［单选题］

在JSP中,只有一行代码:&lt;%=AB%&gt;,运行将输出	(	)

A. AB
B. AB
C. 113
D. 没有任何输出,因为表达式是错误的

10. ［单选题］

在Java中,为了区分类中重载的同名的不同方法，要求：	(	)

A. 後列表不同
B. 调用时用类名嗽)象名做前缀
C. 後名不同
D. 返回值类型不同

11. ［单选题］

以下Java程序输出结果是什么	(	)
public static void main(String［］ args) (
Set set = new HashSetO；
set.add(&quot;keyl&quot;)；
set.add(&quot;keyl&quot;)；
set.add(&quot;key3&quot;);
Map map = new HashMapO；
map.putfkeyl&quot;, &quot;keyl&quot;)；
map.putfkeyl&quot;, &quot;key2&quot;)；
map.put(&quot;key3&quot;, &quot;key3&quot;);
System.out.pri ntl n(set.sizeO +	+ map.sizeQ)；
}
A. 3_3
B. 2_2
C. 2_3
D. 3_2

12. ［单选题]

要删除bookS中书籍(bookName)是&quot;Java”的记录，哪个选项放在如下Java代码的空行处，可使代码正确执(	)行。
String sql =&quot; delete from book where bookName = ?&quot;;
PreparedStatement pst = con.preparedStatement(sql);
pst.executeQ ;

A. pst.setString(l,&quot; Java&quot;)
B. pst.setString(O,&quot; Java&quot;)
C. pst.setInt(O,&quot; Java&quot;)
D. 以上选项都不正确

13. ［单选题］
在Java语言中,以下关于hashCode的描述正确的是	(	)

A. 如果两个对象的hashCode相同,引吆一定是同一个内存对象
B. 即使两个对象的hashCode不同,也有可能是同一个内存对象
C. 即使两个对象不同，也完全有可能存在相同的hashcode
D. 即使是同一个内存对象，得到的hashCode也可能不同

14. ［单选题］
Oracle数据库中，有EMPLOYEES表结构如下：	(	)
\`\`\`sql
EMPJD NUMBER(4) NOT NULL
LAST.NAME VARCHAR2(30) NOT NULL
FIRST.NAME VARCHAR2(30)
DEPTJD NUMBER(2)
JOB.CAT VARCHAR2(30)
SALARY NUMBER(8f2)
下面哪条语句显示了 DEPTJD以及该部门内的最小工资和最大工资，其中最小工资大于5000,最大工资小于 15000?

A. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees WHERE MIN(salary) &lt; 5000 AND MAX(salary) 〉15000

B. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees WHERE MIN(salary) &lt; 5000 AND MAX(salary)
〉15000 GROUP BY dept_id

C. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees HAVING MIN(salary) &lt; 5000 AND MAX(salary) 〉15000

D. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees GROUP BY deptjd HAVING MIN (salary) &gt; 5000 AND MAX(salary) &lt; 15000

15. ［单选题］
    在Oracle数据库使用SQL语句，哪个选项能够限制组函数返回的行记录	(	)

A. WHERE
B. HAVING
C. ORDER BY
D. 上述选项都不能限制组函数返回的行记录

16. ［单选题］
    关于SQL各子句，执行II贿正确的是：	(	)

A. FROM. WHERE x GROUP BY x HAVING x SELECT x ORDER BY

B. SELECT. FROM. WHERE x GROUP BY. HAVING. ORDER BY

C. FROM x GROUP BY x WHERE x HAVING x SELECT x ORDER BY

D. FROM. WHERE x HAVING x GROUP BY x SELECT x ORDER BY

17. ［单选题］
    以下关无ava日期格式组合正确的是	(	)

A. yyyy-MM-dd : hh24 : mi : ss

B. YYYY-MM-DD

C. yyyy-MM-dd HH : mm : ss

D. YYYY-MM-DD HH24 : MI:SS

18. ［多选题］
    在Java中，下列关于类的定义的选项中，哪些可以通过new Thing。方法来创建该类的一个对象:	(	)

A. public class Thing ( public ThingO {}}

B. public class Thing ( public Thing(void) {}}

C. public class Thing ( public Thing(String s) {}}}

D. public class Thing ( public void Thing(String s) {}}

19. ［多选题］

Java中的集合类包括ArrayList. LinkedList. HashMap^ ,下列关于集合类描述正确的是	(	)

A. ArrayList和LinkedLis均实现了List接口

B. ArrayList的查询速度比LinkedList快

C. 添加和删除元素时，ArrayList的表现更佳

D. HashMap实现了Map接口，它允许任何类型的键和值对象，并允许将null用作键或值

20. ［多选题］
    Java程序代码如下：	(	)
List a = new ArrayListO；
a.add( &quot;Alpha&quot;);
a.add( &quot;Bravo&quot;):
a.add( &quot;Charlie&quot;);
a.add( &quot;Delta&quot;);
Iterator iter = a.iteratorQ；

下列哪两组的两行代码添加在虚线处，可按字典II贿打印输出ArrayListO中的全部元素

A. for (int i = 0 ; io.sizeO ； i++) System.out.println(a.get(i)));

B. for (int i = 0 ; i &lt; a.sizeO ； i++) System.out.println(a[i]);

C. while( iter.hasNextO ) System.out.println(iter.nextO);

D. for (int i = 0一个i &lt; a.sizeO ； i++) System.out.println(iter[i]);

E. for (int i = 0 ; i &lt; a.sizeO ； i++) System.out.println(iter.get(i));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第二部分-壊空题-本部分8道题-满分15分" tabindex="-1"><a class="header-anchor" href="#第二部分-壊空题-本部分8道题-满分15分" aria-hidden="true">#</a> 第二部分：壊空题(本部分8道题，满分15分)</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; 填空题，每空1分

1. [填空题]
在JSP中使用的directive(指令)主要有三个____._____._____.

2. [填空题]

在java中,计算字符串长度的语________计算数组长度的语法______,计算ListK度方法是______________	

3. [填空题]
如果Tomcat安装后,想要修改它的端口号,可以通过修改〈tomcat安装目录&gt;/confF的______件来实现。

4. [填空题]
设置CSS的position的值为 relative ,实现 剑立,a bsoI, static实现______定位,fixed实现____________剑立。

5. [填空题]
在HTML5规范中,input表单元素的type属性值为range ,代表该input元素是一个______的表单元素

6. [填空题]
下列Java程序的输出结果是:______

public static void main(String[] args) (
int i, s = 0;
int a[] = (10, 20, 30, 40, 50, 60, 70, 80, 90 };
for (i = 0; i &lt; a.length; i++) (
if(a[i]%3==0)
s += a[i];
}
System.out.println(&quot;s=&quot; + s);
}

7. [填空题]
下列Java程序的输出结果是:

public static void main(String[] args) (
try{
badMethodQ；
System.out.print(&quot;A&quot;)；
} catch (Exception ex) (
System.out.print(&quot;B&quot;)；
} finally (
System.out.print(&quot;C&quot;)；
}
System.out.print(&quot;D&quot;)；
}
public static void badMethodO (
}

8. ［填空题］
下列Java程序是否正确，如果正确输出结果是:

class Parent (
public String getlnfoO (
return &quot;Parent getlnfo invoked&quot;;
}
}
class Child extends Parent (
public String getlnfoO ( return &quot;Child getlnfo invoked&quot;;
}
}
public class VirtualMethod (
public static void main(String［］ args) (
Parent p = new ChildO；
System.out.println(p.getlnfoO)；
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第三部分-问答题-本部分20道题-满分55分" tabindex="-1"><a class="header-anchor" href="#第三部分-问答题-本部分20道题-满分55分" aria-hidden="true">#</a> 第三部分:问答题(本部分20道题，满分55分)</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; 必会概念

1. ［问答题］

在HTML中,进行表单提交,使fflget和pos访式进行提交的区别

2. ［问答题］

在使用JSP/Servlet完成WEB应用时,session和cookie的区别,如何实现自动登录

3. ［问答题］

Java语言中，作用域public,private,protected,以及不写时的区别

4. ［问答题］

在Java中,Set里的元素是不能重复的,那么用什么方法来区分重复与否呢？是用==还是equals。？它们有何区别

5. ［问答题］

在Java中，接口是否可继承接口？抽象类是否可实现(implements)接口？抽象类是否可继承实体类(concrete class)

6. ［问答题］

什么是数据库的事务？

7. ［问答题］

数据库中事务的四个特点是什么,简单说明事务的每个特点。

8. ［问答题］

ORACLE的数据类型（至少写出三个，及最大长度）

9. ［问答题］

在HTML中data-*属性作用

10. ［问答题］

写出CSS中至少3种选择器,并说明作用

11. [问答题]
js中的typeof如何用，得到的数据都有什么，请详细说明

12. ［问答题］
详细说明JSP的四个作用域

13. ［问答题］
Jsp有四陛内置对象?作用分别是什么

14. ［问答题］
Spring MVC的工作流程

15. ［问答题］
什么是Spring的IOC ,有哪些不同类型的IOC方式

16. ［问答题］
在MyBatis配置文件中，查询参数占位符可以使用#{}和\${},简述他们的区别是什么

17. ［问答题］
MyBatis最佳实践中，通常一个Xml映射文件，都会写一个Da。接口与之对应,请问，这个Da。接口的工作原理是什么? Dao接口里的方法，参数不同时，方法能重载吗？

18. ［问答题］
简述请求转发和请求重定向的java实现及两者区别。

19. ［问答题］
请描述MVC模式?

20. ［问答题］
项目管理瞧，从启动到完成共有几个阶段，每个阶段要完成什么工作，成果物是什么?
第四部分：编程题（本部分2道题，满分10分）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第四部分-编程题" tabindex="-1"><a class="header-anchor" href="#第四部分-编程题" aria-hidden="true">#</a> 第四部分：编程题</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. ［编程题］
简单写有response输出编码为&quot;utf-8&quot;的过滤器,要求写出过滤器类和web.xml配置.

2. ［问答题］
1. 使用SSM框架开发WEB应用,在WEB工程下需要有web.xml文件，工程的web.xml文件放置在工程的什么位置下?

2. 在web.xml中有代码如下：

&lt;context-param&gt;
&lt;param-name &gt;conte）ctConfigLocation&lt;/param-name &gt;
&lt; pa ram-va lu e》__1__	/param-va lue&gt;
&lt;/context-param&gt;
&lt;listener&gt;
&lt;list ener-class &gt;or g.s prin gfr amewo rk.web.context«ContextLoaderListener&lt;/listener-class&gt; &lt;/listener&gt;

2.1）	该段代码的整体功能是什么

2.2）在横线处补全代码，
3. 在web.xml中有代码如下：

&lt;servlet&gt;
&lt;servlet-name&gt;springmvc&lt;/servlet-name&gt;
&lt;servlet-class &gt;org.springframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;
&lt;init-param&gt; 
    &lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
    &lt;param-value&gt;_______1_______&lt;/param-value&gt;
&lt;/init-param&gt;
&lt;/servlet&gt;
&lt;servlet-mapping&gt;
&lt;servlet-name&gt;springmvc&lt;/servlet-name&gt;
&lt;url-pattern&gt;*.action&lt;/url-pattern&gt;
&lt;/servlet-mapping&gt;
&lt;welcome-file-list&gt;

3.1）该段代码的整体功能是什么
3.2）请详细写出每组标签的作用(如：包含在&lt;servlet-name&gt;标签中的值为springmvc ,作用为定义 DispatcherServlet类的名字为springmvc)
3.3）在横线处补全代码（只要符合格式即可，名字随意）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2><h4 id="第一部分-不定项选择题-本部分20道题-满分20分-1" tabindex="-1"><a class="header-anchor" href="#第一部分-不定项选择题-本部分20道题-满分20分-1" aria-hidden="true">#</a> 第一部分:不定项选择题（本部分20道题，满分20分）</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不定项,離漏选者阡紛
1. 【单蹒】答案：C
题目解析：
2. 【单选题】答案：A 题目解析：
3. 【单选题】答案：D 题目解析：
4. 【单选题】答案：A 题目解析：
5. 【单选题】答案：B 题目解析：
6. 【单蹒】答案：D 题目解析：
7. 【单选题】答案：C 题目解析：
8. 【单蹒】答案：D 题目解析：
9. 【单选题】答案：D 题目解析：
10. 【单蹒】答案：A 题目解析：
11. 【单蹒】答案：B 题目解析：
12. 【单蹒】答案：A 题目解析：
13. 【单选题】答案：C 题目解析：
14. 【单选题】答案：D 题目解析：
15. 【单选题】答案：B 题目解析：
16. 【单选题】答案：A 题目解析：
17. 【单蹒】答案：C
18. 【多选题】答案：AD 题目解析：
19. 【多选题】答案：ABD 题目解析：
20. 【多选题】答案：AC 题目解析：

#### 第二部分：填空题（本部分8道题，满分15分） 填空题，每空1分
1. 【填空题】答案：page指令. include指令. taglib指令 题目解析：
2. 【填空题】答案：lengthO方法. length属性. size。方法 题目解析：
3. 【填空题】答案：servenxml
4. ［填空题】答案：相对. 绝对. 没有III默认. 绝对III固定 题目解析：

创建用户管理主界面

-div定位；position

-position属性值的定义

•static：默认值口没有定位，元素出现在正常的流中口

•relative：相对定位,通过top, bottom, left, right的设 置相对于其正常位置进行定位□可通过z-index进行层次分级。

•absolute:绝对定位，相对于static定位以外的第一个 父元素进行定位。可通过z-index进行层次分级。

-fixed:绝对定位（固定位置），相对于浏览器窗口进行定 位口可通过z-index进行层次分级。

5. 【填空题】答案:滑动条 题目解析:3-38
6. 【填空题】答案: s = 180 题目解析:
7. 【填空题】答案：ACD 题目解析：
8. 【填空题】答案：Child getlnfo invoked 题目解析：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第三部分-问答题-本部分20簸-满分55分-必会概念" tabindex="-1"><a class="header-anchor" href="#第三部分-问答题-本部分20簸-满分55分-必会概念" aria-hidden="true">#</a> 第三部分：问答题（本部分20簸，满分55分） 必会概念</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1。［问答题】答案：

1. 在客户端，Get方式通过URL提交数据，在URL地址栏可以看到请求消息，该消息被编码过；Post数据是放在Html header内提交。

2. 对于Get方式，服务器端用doGet方法处理;对用Post方式，服务器端用doPost方法处理。 

3. Get方式提交的数据最多1024字节，而Post则没有限制。

4. Get方式提交的参数及参数值会在地址栏显示，不安全，而POST不会，比较安全。

2。［问答题】答案：

1. session保存亩艮务器，客户端不知道其中的信息;cookie保存在客户端，服务器能够知道其中的信

2. session中保存的是对象，cookie中保存的是字符串。

3. session不能区分路径，同一个用户在访问一个网站期间，所有的session在任何一个地方都可以访问到。而cookie中如果设置了路径参数，那么同一个网站不不同路径下的cookie互相星访问不到的。

4. session需要借助cookie才能正意工作。如果喜户端完全域正cookie , session：将失效。（ps : Java 可以通过URL ,選行sessionld的传遶，而不是罪得用cookie ）

5. session在用户会话结束后就会关闭了，但cookie因为保存在客户端，可以长期保存
自动登录：

如果没有cookie信息,校验后把信息(用户名，密码等)放在cookie里面。

如果有cookie，则读取cookie里的用户名和感码或者其它信息,然后根据读取的用户名和密码进行校验。

题目解析： 

3、［问答题】答案：

作用域当前类同_ package子孙类其他package 

public V V V V

jrotected V V V x 

riendly V V x x

private V x x x 

不写由默认为friendly


4. 【问答题】答案：

Set埋的元素是不能重复的,那么用iterator()方法来区分重复与否。equals()是判读两个Set是否相等 equals()和==方法决定引用值是否否指向同一对象equals()在类市被覆葢，为的是当两个分离的对象的内容和类型相配的话，返回真值
题目解析：

5. 【问答题】答案：
接口可以继承接口。抽象类可以实现(implements)接口，抽象类是否可继承实体类，但前提是实体类必须有明确的构造函数
题目解析：

6. 在数据库中事务是工作的逻辑单元，一个事务是由一个或多个完成一组的相关行为的SQL语句组成，通过事务机制确保这一组SQL语句所作的操作要么都成功执行，完成整个工作单元操作，要么一个也不执行。

7. 原子性（Atomicity）：一个事务里面所有包含的SQL语句是一个执行整体，不可分割，要么都做，要么都不做。

一致性(Consistency)：事务开始时，数据库中的数据是一致的，事务结束时，数据库的数据也应该是一致的。

隔离性(Isolation): 是指数据库允许多个并发事务同时对其中的数据进行读写和修改的能力，隔离性可以防止事务的并发执行时，由于他们的操作命令交叉执行而导致的数据不一致状态。

持久性(Durability): 是指当事务结束后，它对数据库中的影响是永久的，即便系统遇到故障的情况下，数据也不会丢失。

简写:ACID

8. 【问答题】答案：
CHAR固定长度字符串最大长度2000 bytes 

VARCHAR2可变长度的字符串最大长度4000 

bytes可做索引的最大长度749 

DATE日期,存储时间和日期

LONG超长朝串 缺长度2G ( 231-1)足大部头著作

RAW固定长度的二进制数据最大长度2000 bytes可存放多媒体图象声音等 

LONG RAW可变长度的二进制数据最大长度2G同上

BLOB二瞄数据缺趣4G

CLOB字符数据最大长度4G

BFILE存放在数据库外的二进制数据最大长度4G

NUMBER(P,S)数字类型P为整数位,S为小数位

DECIMAL(P,S)数字嶼 P为整数位，，为小数位

9. ［问答题】答案：data-*属性用于存储页面或应用程序的私有自定义数据。
存储的数据能够被页面的JavaScript使用。

10. 【问答题】答案：.class:癖class的所有元素。
#id:选择class的元素.
元素名：所有该名元素
* :癖所有元素

11. 【问答题】答案：js中的typeof用来检査一«＞的数据类型，它返回的是一个字符串。
undefined : &quot;undefined&quot;
null : &quot;object”
string : &quot;string&quot;
number: &quot;number”
boolean : &quot;Boolean” function : &quot;function” object: &#39;&#39;object*&#39;

12. 【问答题】答案：4个JSP内置对象的作用域分别为:application, session, request page. JSP内 置对象作用域说明如下：

application :在所有应用程序中有效 

session :在当前会话中有效 

request:在当前请求中有效 

page :在当前页面有效

13. 【问答题】答案：Page指的是JSP被翻译成Servlet的对象的弓|用.

pageContext对象可以用来获得其他8个内置对象还可以作为JSP的域范围对象使用.pageContext中存 的值是当前的页面的作用范围》

request代表的是请求对象/可以用于获得客户机的信息，也可以作为域对象来使用，使用request保存的 数据在一次请求范围内有效。

Session代表的是一次会话,可以用于保存用户的私有的信息，也可以作为域对象使用,使用session保存 的数据在一次 祭范围有效

Application :代表整个应用范围，使用这个对象保存的数据在整个web应用中都有效。

Response是响应对象，代表的是从器向浏览器响应数据.

Out:JSPWriter是用于向页面输出内容的对象

Config :指的是ServletConfig用于JSP翻译成Servlet后获得Servlet的配置的对象.

Exception:在页面中设置isErrorPage=&quot; true&quot;，即可使用,是Throwable的弓I用.用来获得页面的错误 信息

14. 【问答题】答案：

1.用户发送请求至前端控制器DispatcherServlet

2.DispatcherServlet收到请求调用HandlerMapping处理器映射器。

3.处理器映射器根据请求url找到具体的处理器,生成处理器对象及处理器拦截器（如果有则生成）一并返回给 DispatcherServlet。

4.DispatcherServlet通过HandlerAdapter处理器适配器调用处理器

5.执行处理器（Controller,也叫后端控制器）。

6.Controlle他行完成返回ModelAndView

7.HandlerAdapter将controller^行结果ModelAndView返回给DispatcherServlet

8.DispatcherServlet将ModelAndView传给ViewReslove舰图解析器

9.ViewResloverlS析后返回具体View

10.DispatcherServlet对View进行渲染视图（即将模型数据填充至视图中）.

11.DispatcherServlet响应用户

15. 【问答题】答案：依赖注入是说你不用创建礁，而只需螂述它如何被创建。你不在代码里直接醵 你的组件和够，^»15酉彊文件鞭述哪些组哪些服务，任一个糖（IOC糖）负责把 他们
构造必：构造器顺主糖瞧一个类的构造器来实现的，噤有一系列参数， 数代他类的她
Setter方法注入：Setter方法注入是容器通过调用无参构造器或无参static工T方法实例化bean之后, 调用该bean的setter方法，即实现了基于setter的依赖注入。

16. ［问答题】答案：
&#39; \${}可以用于Properties文件中的变量占位符，用于标签属性值和s里内部，属于静态文本離，比如\${dr iverj会坡齢b智^为com.m*qLjdbc.Driver,哉者可以0行羯曲建痿组合S（Jl语句的应用。
#{}是sql的参数占位符,MyGaBs会将sql中的#{}離为?号。
题目解析：

17. 【问答题】答案：Da。接口，就是Mapper^口，接口的全名（报名+类名）,就是映射文件中标签中 的namespace属性的值，接口的方法名，就是映射文件中MappedStatement的id值，接口方法内的参 数,就是传递给sql的参数。Mapper接口是没有实现类的,当调用接口方法时,接口全名+方法名拼接 字符串作为key值,可唯一定位一 MappedStatement.
在Mybati沖，每一^标签，都会被解析为一^MappedStatement^攧。
Da。接口里的方法，是不能重载的，因为是全名+方法名的保带口寻找策略。
Dao接口的工作态礎,Mybatis运行时会館川蚀态礎为Dao接口生成礎proxy对 象，俺S对象proxy会拦截接口方法,转而执行MappedStatement所代表的sql ,然后将sql执行^果返 回。

18. 【问答题】答案：相同点：都能实现资源调转。--1分 不同点：

1. 重定向电请求与响应的次数都是两次而请求转发则为一次;T分

2. 重定向会使客户端浏览器地址栏URUg生变化，而请求转发则不会改变地址栏的原有URL;--1分

3. 重定向可矚踽到其他web应用中的资源，而请求转发只能在本应用中资源中调转。--1分

4. 在性能上，请求转发要优于重定向，因为是由服务器端直接蹟龄;--1分

题目解析：打出每点可得1分 

19. 【问答题】答案：

（控制器Controller）-负责转发请求，对请求进行处理。

（视图View）-界面跚林进行图形界面毗

（模型Model）-程序员编写程序应有的功能（实现算法等等）. 数据库专家进行数据管理和数据库设计 冋好®!*体的功能）。

20. 【问答题】答案：

项目启动:项目组逼分组名单. 配置管理完成&#39;配置工具的用户名及密码&quot;

需求分析: 用例图、用例规约

概要设计:页面流程图、页面原型

详细设计:接口及方法设计、E-R图、数据库表

编码: 源代码

测试: 测试流程、测试方法、测试执行

项目完成：

题目解析：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第四部分-编程题-本部分2道题-满分10分" tabindex="-1"><a class="header-anchor" href="#第四部分-编程题-本部分2道题-满分10分" aria-hidden="true">#</a> 第四部分：编程题(本部分2道题，满分10分)</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. ［编程题】(考生可选的语言：Java )答案：

&lt;filter&gt;
&lt;filter-name&gt;simplefilter&lt;/filter-name&gt;
&lt;filter-class&gt;myfilter.SimpleFilter&lt;/filter-class&gt; &lt;/filter&gt;
&lt;filter-mapping&gt;
&lt;filter-name&gt;simplefilter&lt;/filter-name&gt;
&lt;url-pattern&gt;/*&lt;/url-pattern&gt;
&lt;/filter-mapping&gt;
public class simplefilter implements Filter(
public void destroy() (
}
public void doFilter(ServletRequest request, ServletResponse response, Filterchain chain) throws lOException, ServletException (
HttpServletRequest req = (HttpServletRequest)request;
HttpServletResponse res = (HttpServletResponse) response;
〃设置服务器端解析请求报文实体部分时所釆用的编码方式
req ・ setCharacterEncodingC^TF-S&quot;);
〃设置响应报文实体部分的编码方式
resp.setcharacterEncoding(&quot;utf-8&quot;);
}
}
题目解析： 

2. 【问答题】答案：

1)WebRoot/WEB-INF
2)

&lt;!--加载spring容器-&gt;
&lt; context-param &gt;
&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
&lt;param-value&gt;/WEB-INF/classes/spring/applicationContext-*.xml&lt;/param-value&gt; &lt;/context-param&gt;
&lt;listener&gt; &lt;listener-class&gt;org.springframework.web.context.ContextLoaderListener&lt;/listener-class&gt; &lt;/listener&gt;

3)

&lt;!--加载springMVC容器-&gt;
&lt;servlet&gt;
&lt;servlet-name&gt;springmvc&lt;/servlet-name&gt; &lt;servlet-class&gt;orq.sprinqframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;
&lt;!一指明了配置文件南気辂，不館觥配殽齡，市館dispatcher-servletxml配殽件。--&gt; &lt;init-param&gt;
&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
：!--其中&lt;param-value&gt;**.xml&lt;/param-value&gt; 这里可以使用多种写法--&gt;
!一1. 不写，使用默认值&gt;
：!--2. &lt;param-value&gt;/WEB-INF/classes/dispatcher-servlet.xml&lt;/param-value&gt;—&gt;
:!--3. &lt;param-value&gt;classpath*:dispatcher-servletxml&lt;/param-value&gt;—&gt;
!一4. 多个值用逗号分隔--&gt;
&lt;param-value&gt;classpath:spring/springmvc.xml&lt;/param-value&gt;
&lt;/init-param&gt;
&lt;/servlet&gt;
&lt;!--拦截faction ,例如：/user/add.action,这是最传统的方式，最简单也最实用。不会导致静态文件 (jpg,js,css)被拦截。--&gt;
&lt;servlet-mapping&gt;
&lt;servlet-name&gt;springmvc&lt;/servlet-name&gt;
&lt;url-pattern&gt;*.action&lt;/url-pattern&gt;
&lt;/servlet-mapping&gt;

题目解析：

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java综合习测试一</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,22);function p(g,h){const e=c("ExternalLinkIcon");return l(),d("div",null,[v(" more "),i("h1",m,[t,n(),i("a",b,[n("179-Java综合习测试一.md"),a(e)])]),o])}const S=s(u,[["render",p],["__file","java179.html.vue"]]);export{S as default};
