const i=JSON.parse('{"key":"v-7b5a1206","path":"/zh/java179/","title":"Java综合习测试一","lang":"zh-CN","frontmatter":{"title":"Java综合习测试一","icon":"page","order":179,"author":"涎涎","date":"2020-03-01T16:52:44.000Z","isOriginal":true,"permalinkPattern":"java179","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java综合习测试一"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/java179/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java综合习测试一"}],["meta",{"property":"og:description","content":"179-Java综合习测试一.md 试题 第一部分:不定项选择题(本部分20道题，满分20分) 不定项选择题，错选漏选都不给分 1. ［单选题］ 在Javascript中，var varl = window.prompt(\\"Hello\\",\\"Please input your name\\")测varl的数据类型为？\\t(\\t) A. 布尔 B. 整型 C. 字符串 D. 数字 2. ［单选题］ 哪个是JavaScript最顶层的对象模型?\\t(\\t) A. window B. document C. location D. windows 3. ［单选题］ 在JSP/Servlet中，forward和sendRedired都是用来做页面跳转的，描述错误的是？\\t(\\t) A. forward之后可以使用原来的request对象，而且效率较高； B. send Redirec之后不可以使用原乗的request对象，而且效率较低； C. forward地址栏不变化，只能在Web应用程序内的页面间肉蹒； D. forward地址栏变化,可以幡到任何页面和机器 4. ［单选题］ 在JSP/Servlet中,销毁一个session对象应该调用下面哪一个方法?\\t(\\t) A. session.invalidateO B. session.expungeQ C. session.destroyO D. session.endO 5. ［单选题］ 在Servlet中，response.getWriterQ返回的是\\t(\\t) A. JspWriter对象 B. PrintWriterjl梅 C. OutX攧 D. ResponseWriterjl 6. ［单选题］ Servlet类为com.abc.TaxUtil.则TaxUtil.class文件被保存在哪里:\\t(\\t) A. WEB-INF B. WEB-INF/classes C. WEB-INF/lib D. WEB-INF/classes/com/abc 7. ［单选题］ 哪个是JSP指令标记?\\t(\\t) A. &lt;%...... %&gt; B. &lt;%!...... %&gt; C. &lt;%@ ......%&gt; D. &lt;%=...... %&gt; 8. ［单选题］ 在JSP中可动态导入其他页面的标签是\\t(\\t) A. &lt;%include/&gt; B. &lt;%@ include%&gt; C. &lt;jsp:importPage/&gt; D. &lt;jsp:include/&gt; 9. ［单选题］ 在JSP中,只有一行代码:&lt;%=AB%&gt;,运行将输出\\t(\\t) A. AB B. AB C. 113 D. 没有任何输出,因为表达式是错误的 10. ［单选题］ 在Java中,为了区分类中重载的同名的不同方法，要求：\\t(\\t) A. 後列表不同 B. 调用时用类名嗽)象名做前缀 C. 後名不同 D. 返回值类型不同 11. ［单选题］ 以下Java程序输出结果是什么\\t(\\t) public static void main(String［］ args) ( Set set = new HashSetO； set.add(\\"keyl\\")； set.add(\\"keyl\\")； set.add(\\"key3\\"); Map map = new HashMapO； map.putfkeyl\\", \\"keyl\\")； map.putfkeyl\\", \\"key2\\")； map.put(\\"key3\\", \\"key3\\"); System.out.pri ntl n(set.sizeO +\\t+ map.sizeQ)； } A. 3_3 B. 2_2 C. 2_3 D. 3_2 12. ［单选题] 要删除bookS中书籍(bookName)是\\"Java”的记录，哪个选项放在如下Java代码的空行处，可使代码正确执(\\t)行。 String sql =\\" delete from book where bookName = ?\\"; PreparedStatement pst = con.preparedStatement(sql); pst.executeQ ; A. pst.setString(l,\\" Java\\") B. pst.setString(O,\\" Java\\") C. pst.setInt(O,\\" Java\\") D. 以上选项都不正确 13. ［单选题］ 在Java语言中,以下关于hashCode的描述正确的是\\t(\\t) A. 如果两个对象的hashCode相同,引吆一定是同一个内存对象 B. 即使两个对象的hashCode不同,也有可能是同一个内存对象 C. 即使两个对象不同，也完全有可能存在相同的hashcode D. 即使是同一个内存对象，得到的hashCode也可能不同 14. ［单选题］ Oracle数据库中，有EMPLOYEES表结构如下：\\t(\\t) ```sql EMPJD NUMBER(4) NOT NULL LAST.NAME VARCHAR2(30) NOT NULL FIRST.NAME VARCHAR2(30) DEPTJD NUMBER(2) JOB.CAT VARCHAR2(30) SALARY NUMBER(8f2) 下面哪条语句显示了 DEPTJD以及该部门内的最小工资和最大工资，其中最小工资大于5000,最大工资小于 15000? A. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees WHERE MIN(salary) &lt; 5000 AND MAX(salary) 〉15000 B. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees WHERE MIN(salary) &lt; 5000 AND MAX(salary) 〉15000 GROUP BY dept_id C. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees HAVING MIN(salary) &lt; 5000 AND MAX(salary) 〉15000 D. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees GROUP BY deptjd HAVING MIN (salary) &gt; 5000 AND MAX(salary) &lt; 15000 15. ［单选题］ 在Oracle数据库使用SQL语句，哪个选项能够限制组函数返回的行记录\\t(\\t) A. WHERE B. HAVING C. ORDER BY D. 上述选项都不能限制组函数返回的行记录 16. ［单选题］ 关于SQL各子句，执行II贿正确的是：\\t(\\t) A. FROM. WHERE x GROUP BY x HAVING x SELECT x ORDER BY B. SELECT. FROM. WHERE x GROUP BY. HAVING. ORDER BY C. FROM x GROUP BY x WHERE x HAVING x SELECT x ORDER BY D. FROM. WHERE x HAVING x GROUP BY x SELECT x ORDER BY 17. ［单选题］ 以下关无ava日期格式组合正确的是\\t(\\t) A. yyyy-MM-dd : hh24 : mi : ss B. YYYY-MM-DD C. yyyy-MM-dd HH : mm : ss D. YYYY-MM-DD HH24 : MI:SS 18. ［多选题］ 在Java中，下列关于类的定义的选项中，哪些可以通过new Thing。方法来创建该类的一个对象:\\t(\\t) A. public class Thing ( public ThingO {}} B. public class Thing ( public Thing(void) {}} C. public class Thing ( public Thing(String s) {}}} D. public class Thing ( public void Thing(String s) {}} 19. ［多选题］ Java中的集合类包括ArrayList. LinkedList. HashMap^ ,下列关于集合类描述正确的是\\t(\\t) A. ArrayList和LinkedLis均实现了List接口 B. ArrayList的查询速度比LinkedList快 C. 添加和删除元素时，ArrayList的表现更佳 D. HashMap实现了Map接口，它允许任何类型的键和值对象，并允许将null用作键或值 20. ［多选题］ Java程序代码如下：\\t(\\t) List a = new ArrayListO； a.add( \\"Alpha\\"); a.add( \\"Bravo\\"): a.add( \\"Charlie\\"); a.add( \\"Delta\\"); Iterator iter = a.iteratorQ； 下列哪两组的两行代码添加在虚线处，可按字典II贿打印输出ArrayListO中的全部元素 A. for (int i = 0 ; io.sizeO ； i++) System.out.println(a.get(i))); B. for (int i = 0 ; i &lt; a.sizeO ； i++) System.out.println(a[i]); C. while( iter.hasNextO ) System.out.println(iter.nextO); D. for (int i = 0一个i &lt; a.sizeO ； i++) System.out.println(iter[i]); E. for (int i = 0 ; i &lt; a.sizeO ； i++) System.out.println(iter.get(i));"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2020-03-01T16:52:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java综合习测试一\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-03-01T16:52:44.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"179-Java综合习测试一.md 试题 第一部分:不定项选择题(本部分20道题，满分20分) 不定项选择题，错选漏选都不给分 1. ［单选题］ 在Javascript中，var varl = window.prompt(\\"Hello\\",\\"Please input your name\\")测varl的数据类型为？\\t(\\t) A. 布尔 B. 整型 C. 字符串 D. 数字 2. ［单选题］ 哪个是JavaScript最顶层的对象模型?\\t(\\t) A. window B. document C. location D. windows 3. ［单选题］ 在JSP/Servlet中，forward和sendRedired都是用来做页面跳转的，描述错误的是？\\t(\\t) A. forward之后可以使用原来的request对象，而且效率较高； B. send Redirec之后不可以使用原乗的request对象，而且效率较低； C. forward地址栏不变化，只能在Web应用程序内的页面间肉蹒； D. forward地址栏变化,可以幡到任何页面和机器 4. ［单选题］ 在JSP/Servlet中,销毁一个session对象应该调用下面哪一个方法?\\t(\\t) A. session.invalidateO B. session.expungeQ C. session.destroyO D. session.endO 5. ［单选题］ 在Servlet中，response.getWriterQ返回的是\\t(\\t) A. JspWriter对象 B. PrintWriterjl梅 C. OutX攧 D. ResponseWriterjl 6. ［单选题］ Servlet类为com.abc.TaxUtil.则TaxUtil.class文件被保存在哪里:\\t(\\t) A. WEB-INF B. WEB-INF/classes C. WEB-INF/lib D. WEB-INF/classes/com/abc 7. ［单选题］ 哪个是JSP指令标记?\\t(\\t) A. &lt;%...... %&gt; B. &lt;%!...... %&gt; C. &lt;%@ ......%&gt; D. &lt;%=...... %&gt; 8. ［单选题］ 在JSP中可动态导入其他页面的标签是\\t(\\t) A. &lt;%include/&gt; B. &lt;%@ include%&gt; C. &lt;jsp:importPage/&gt; D. &lt;jsp:include/&gt; 9. ［单选题］ 在JSP中,只有一行代码:&lt;%=AB%&gt;,运行将输出\\t(\\t) A. AB B. AB C. 113 D. 没有任何输出,因为表达式是错误的 10. ［单选题］ 在Java中,为了区分类中重载的同名的不同方法，要求：\\t(\\t) A. 後列表不同 B. 调用时用类名嗽)象名做前缀 C. 後名不同 D. 返回值类型不同 11. ［单选题］ 以下Java程序输出结果是什么\\t(\\t) public static void main(String［］ args) ( Set set = new HashSetO； set.add(\\"keyl\\")； set.add(\\"keyl\\")； set.add(\\"key3\\"); Map map = new HashMapO； map.putfkeyl\\", \\"keyl\\")； map.putfkeyl\\", \\"key2\\")； map.put(\\"key3\\", \\"key3\\"); System.out.pri ntl n(set.sizeO +\\t+ map.sizeQ)； } A. 3_3 B. 2_2 C. 2_3 D. 3_2 12. ［单选题] 要删除bookS中书籍(bookName)是\\"Java”的记录，哪个选项放在如下Java代码的空行处，可使代码正确执(\\t)行。 String sql =\\" delete from book where bookName = ?\\"; PreparedStatement pst = con.preparedStatement(sql); pst.executeQ ; A. pst.setString(l,\\" Java\\") B. pst.setString(O,\\" Java\\") C. pst.setInt(O,\\" Java\\") D. 以上选项都不正确 13. ［单选题］ 在Java语言中,以下关于hashCode的描述正确的是\\t(\\t) A. 如果两个对象的hashCode相同,引吆一定是同一个内存对象 B. 即使两个对象的hashCode不同,也有可能是同一个内存对象 C. 即使两个对象不同，也完全有可能存在相同的hashcode D. 即使是同一个内存对象，得到的hashCode也可能不同 14. ［单选题］ Oracle数据库中，有EMPLOYEES表结构如下：\\t(\\t) ```sql EMPJD NUMBER(4) NOT NULL LAST.NAME VARCHAR2(30) NOT NULL FIRST.NAME VARCHAR2(30) DEPTJD NUMBER(2) JOB.CAT VARCHAR2(30) SALARY NUMBER(8f2) 下面哪条语句显示了 DEPTJD以及该部门内的最小工资和最大工资，其中最小工资大于5000,最大工资小于 15000? A. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees WHERE MIN(salary) &lt; 5000 AND MAX(salary) 〉15000 B. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees WHERE MIN(salary) &lt; 5000 AND MAX(salary) 〉15000 GROUP BY dept_id C. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees HAVING MIN(salary) &lt; 5000 AND MAX(salary) 〉15000 D. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees GROUP BY deptjd HAVING MIN (salary) &gt; 5000 AND MAX(salary) &lt; 15000 15. ［单选题］ 在Oracle数据库使用SQL语句，哪个选项能够限制组函数返回的行记录\\t(\\t) A. WHERE B. HAVING C. ORDER BY D. 上述选项都不能限制组函数返回的行记录 16. ［单选题］ 关于SQL各子句，执行II贿正确的是：\\t(\\t) A. FROM. WHERE x GROUP BY x HAVING x SELECT x ORDER BY B. SELECT. FROM. WHERE x GROUP BY. HAVING. ORDER BY C. FROM x GROUP BY x WHERE x HAVING x SELECT x ORDER BY D. FROM. WHERE x HAVING x GROUP BY x SELECT x ORDER BY 17. ［单选题］ 以下关无ava日期格式组合正确的是\\t(\\t) A. yyyy-MM-dd : hh24 : mi : ss B. YYYY-MM-DD C. yyyy-MM-dd HH : mm : ss D. YYYY-MM-DD HH24 : MI:SS 18. ［多选题］ 在Java中，下列关于类的定义的选项中，哪些可以通过new Thing。方法来创建该类的一个对象:\\t(\\t) A. public class Thing ( public ThingO {}} B. public class Thing ( public Thing(void) {}} C. public class Thing ( public Thing(String s) {}}} D. public class Thing ( public void Thing(String s) {}} 19. ［多选题］ Java中的集合类包括ArrayList. LinkedList. HashMap^ ,下列关于集合类描述正确的是\\t(\\t) A. ArrayList和LinkedLis均实现了List接口 B. ArrayList的查询速度比LinkedList快 C. 添加和删除元素时，ArrayList的表现更佳 D. HashMap实现了Map接口，它允许任何类型的键和值对象，并允许将null用作键或值 20. ［多选题］ Java程序代码如下：\\t(\\t) List a = new ArrayListO； a.add( \\"Alpha\\"); a.add( \\"Bravo\\"): a.add( \\"Charlie\\"); a.add( \\"Delta\\"); Iterator iter = a.iteratorQ； 下列哪两组的两行代码添加在虚线处，可按字典II贿打印输出ArrayListO中的全部元素 A. for (int i = 0 ; io.sizeO ； i++) System.out.println(a.get(i))); B. for (int i = 0 ; i &lt; a.sizeO ； i++) System.out.println(a[i]); C. while( iter.hasNextO ) System.out.println(iter.nextO); D. for (int i = 0一个i &lt; a.sizeO ； i++) System.out.println(iter[i]); E. for (int i = 0 ; i &lt; a.sizeO ； i++) System.out.println(iter.get(i));"},"headers":[{"level":2,"title":"试题","slug":"试题","link":"#试题","children":[]},{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":20.26,"words":6077},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/179-Java综合习测试一.md","localizedDate":"2020年3月1日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--179-Java-709l34ac96bkq5eec5byuxb.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">179-Java综合习测试一.md</a></h1>\\n<h2> 试题</h2>\\n<h4> 第一部分:不定项选择题(本部分20道题，满分20分)</h4>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>不定项选择题，错选漏选都不给分\\n1. ［单选题］\\n在Javascript中，var varl = window.prompt(\\"Hello\\",\\"Please input your name\\")测varl的数据类型为？\\t(\\t)\\n\\nA. 布尔\\nB. 整型\\nC. 字符串\\nD. 数字\\n\\n2. ［单选题］\\n\\n哪个是JavaScript最顶层的对象模型?\\t(\\t)\\n\\nA. window\\nB. document\\nC. location\\nD. windows\\n\\n3. ［单选题］\\n\\n在JSP/Servlet中，forward和sendRedired都是用来做页面跳转的，描述错误的是？\\t(\\t)\\n\\nA. forward之后可以使用原来的request对象，而且效率较高；\\nB. send Redirec之后不可以使用原乗的request对象，而且效率较低；\\nC. forward地址栏不变化，只能在Web应用程序内的页面间肉蹒；\\nD. forward地址栏变化,可以幡到任何页面和机器\\n\\n4. ［单选题］\\n\\n在JSP/Servlet中,销毁一个session对象应该调用下面哪一个方法?\\t(\\t)\\n\\nA. session.invalidateO\\nB. session.expungeQ\\nC. session.destroyO\\nD. session.endO\\n\\n5. ［单选题］\\n\\n在Servlet中，response.getWriterQ返回的是\\t(\\t)\\n\\nA. JspWriter对象\\nB. PrintWriterjl梅\\nC. OutX攧\\nD. ResponseWriterjl\\n\\n6. ［单选题］\\n\\nServlet类为com.abc.TaxUtil.则TaxUtil.class文件被保存在哪里:\\t(\\t)\\n\\nA. WEB-INF\\nB. WEB-INF/classes\\nC. WEB-INF/lib\\nD. WEB-INF/classes/com/abc\\n\\n7. ［单选题］\\n\\n哪个是JSP指令标记?\\t(\\t)\\n\\nA. &lt;%...... %&gt;\\nB. &lt;%!...... %&gt;\\nC. &lt;%@ ......%&gt;\\nD. &lt;%=...... %&gt;\\n\\n8. ［单选题］\\n\\n在JSP中可动态导入其他页面的标签是\\t(\\t)\\n\\nA. &lt;%include/&gt;\\nB. &lt;%@ include%&gt;\\nC. &lt;jsp:importPage/&gt;\\nD. &lt;jsp:include/&gt;\\n\\n9. ［单选题］\\n\\n在JSP中,只有一行代码:&lt;%=AB%&gt;,运行将输出\\t(\\t)\\n\\nA. AB\\nB. AB\\nC. 113\\nD. 没有任何输出,因为表达式是错误的\\n\\n10. ［单选题］\\n\\n在Java中,为了区分类中重载的同名的不同方法，要求：\\t(\\t)\\n\\nA. 後列表不同\\nB. 调用时用类名嗽)象名做前缀\\nC. 後名不同\\nD. 返回值类型不同\\n\\n11. ［单选题］\\n\\n以下Java程序输出结果是什么\\t(\\t)\\npublic static void main(String［］ args) (\\nSet set = new HashSetO；\\nset.add(\\"keyl\\")；\\nset.add(\\"keyl\\")；\\nset.add(\\"key3\\");\\nMap map = new HashMapO；\\nmap.putfkeyl\\", \\"keyl\\")；\\nmap.putfkeyl\\", \\"key2\\")；\\nmap.put(\\"key3\\", \\"key3\\");\\nSystem.out.pri ntl n(set.sizeO +\\t+ map.sizeQ)；\\n}\\nA. 3_3\\nB. 2_2\\nC. 2_3\\nD. 3_2\\n\\n12. ［单选题]\\n\\n要删除bookS中书籍(bookName)是\\"Java”的记录，哪个选项放在如下Java代码的空行处，可使代码正确执(\\t)行。\\nString sql =\\" delete from book where bookName = ?\\";\\nPreparedStatement pst = con.preparedStatement(sql);\\npst.executeQ ;\\n\\nA. pst.setString(l,\\" Java\\")\\nB. pst.setString(O,\\" Java\\")\\nC. pst.setInt(O,\\" Java\\")\\nD. 以上选项都不正确\\n\\n13. ［单选题］\\n在Java语言中,以下关于hashCode的描述正确的是\\t(\\t)\\n\\nA. 如果两个对象的hashCode相同,引吆一定是同一个内存对象\\nB. 即使两个对象的hashCode不同,也有可能是同一个内存对象\\nC. 即使两个对象不同，也完全有可能存在相同的hashcode\\nD. 即使是同一个内存对象，得到的hashCode也可能不同\\n\\n14. ［单选题］\\nOracle数据库中，有EMPLOYEES表结构如下：\\t(\\t)\\n```sql\\nEMPJD NUMBER(4) NOT NULL\\nLAST.NAME VARCHAR2(30) NOT NULL\\nFIRST.NAME VARCHAR2(30)\\nDEPTJD NUMBER(2)\\nJOB.CAT VARCHAR2(30)\\nSALARY NUMBER(8f2)\\n下面哪条语句显示了 DEPTJD以及该部门内的最小工资和最大工资，其中最小工资大于5000,最大工资小于 15000?\\n\\nA. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees WHERE MIN(salary) &lt; 5000 AND MAX(salary) 〉15000\\n\\nB. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees WHERE MIN(salary) &lt; 5000 AND MAX(salary)\\n〉15000 GROUP BY dept_id\\n\\nC. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees HAVING MIN(salary) &lt; 5000 AND MAX(salary) 〉15000\\n\\nD. SELECT dept_id一个MIN(salary)一个MAX(salary) FROM employees GROUP BY deptjd HAVING MIN (salary) &gt; 5000 AND MAX(salary) &lt; 15000\\n\\n15. ［单选题］\\n    在Oracle数据库使用SQL语句，哪个选项能够限制组函数返回的行记录\\t(\\t)\\n\\nA. WHERE\\nB. HAVING\\nC. ORDER BY\\nD. 上述选项都不能限制组函数返回的行记录\\n\\n16. ［单选题］\\n    关于SQL各子句，执行II贿正确的是：\\t(\\t)\\n\\nA. FROM. WHERE x GROUP BY x HAVING x SELECT x ORDER BY\\n\\nB. SELECT. FROM. WHERE x GROUP BY. HAVING. ORDER BY\\n\\nC. FROM x GROUP BY x WHERE x HAVING x SELECT x ORDER BY\\n\\nD. FROM. WHERE x HAVING x GROUP BY x SELECT x ORDER BY\\n\\n17. ［单选题］\\n    以下关无ava日期格式组合正确的是\\t(\\t)\\n\\nA. yyyy-MM-dd : hh24 : mi : ss\\n\\nB. YYYY-MM-DD\\n\\nC. yyyy-MM-dd HH : mm : ss\\n\\nD. YYYY-MM-DD HH24 : MI:SS\\n\\n18. ［多选题］\\n    在Java中，下列关于类的定义的选项中，哪些可以通过new Thing。方法来创建该类的一个对象:\\t(\\t)\\n\\nA. public class Thing ( public ThingO {}}\\n\\nB. public class Thing ( public Thing(void) {}}\\n\\nC. public class Thing ( public Thing(String s) {}}}\\n\\nD. public class Thing ( public void Thing(String s) {}}\\n\\n19. ［多选题］\\n\\nJava中的集合类包括ArrayList. LinkedList. HashMap^ ,下列关于集合类描述正确的是\\t(\\t)\\n\\nA. ArrayList和LinkedLis均实现了List接口\\n\\nB. ArrayList的查询速度比LinkedList快\\n\\nC. 添加和删除元素时，ArrayList的表现更佳\\n\\nD. HashMap实现了Map接口，它允许任何类型的键和值对象，并允许将null用作键或值\\n\\n20. ［多选题］\\n    Java程序代码如下：\\t(\\t)\\nList a = new ArrayListO；\\na.add( \\"Alpha\\");\\na.add( \\"Bravo\\"):\\na.add( \\"Charlie\\");\\na.add( \\"Delta\\");\\nIterator iter = a.iteratorQ；\\n\\n下列哪两组的两行代码添加在虚线处，可按字典II贿打印输出ArrayListO中的全部元素\\n\\nA. for (int i = 0 ; io.sizeO ； i++) System.out.println(a.get(i)));\\n\\nB. for (int i = 0 ; i &lt; a.sizeO ； i++) System.out.println(a[i]);\\n\\nC. while( iter.hasNextO ) System.out.println(iter.nextO);\\n\\nD. for (int i = 0一个i &lt; a.sizeO ； i++) System.out.println(iter[i]);\\n\\nE. for (int i = 0 ; i &lt; a.sizeO ； i++) System.out.println(iter.get(i));\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{i as data};
