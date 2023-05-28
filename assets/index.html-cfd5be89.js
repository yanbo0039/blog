import{_ as a,X as t,Y as s,a1 as r,Z as e,$ as i,a2 as p,a0 as l,F as o}from"./framework-68dd73a2.js";const d={},c={id:"_172-软件开发工程师-java-部分题库-1-md",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#_172-软件开发工程师-java-部分题库-1-md","aria-hidden":"true"},"#",-1),u={href:"http://xn---1-4d5c198bxk5dowj.md",target:"_blank",rel:"noopener noreferrer"},m=l(`<h4 id="单选题" tabindex="-1"><a class="header-anchor" href="#单选题" aria-hidden="true">#</a> 单选题</h4><ol><li>下面有关服务外包说法正确的是</li></ol><p>A、服务外包是指企业将价值链中原本有自身提供的具有基础的、共性的、核心的业务或业务流程剥离出去，交给外部专业服务提供商完成的经济活动</p><p>B、企业通过外包可以重组价值链，优化资源配置，降低成本，并增加企业竞争力</p><p>C、某银行将信用卡数据外包给专业的公司，这属于服务流程外包</p><p>D、按服务外包业务类型可将外包分为：信息技术外包、后勤服务外包、客户关系外包和研发外包</p><p>答案：B</p><ol start="2"><li>下面做法无助于有效沟通的是</li></ol><p>A、学会夸奖他人</p><p>B、预防情感定式</p><p>C、恰当的称呼对方</p><p>D、提高说话音量</p><p>答案: D</p><ol start="3"><li>社会主义职业道德的核心是</li></ol><p>A、集体主义</p><p>B、爱岗敬业</p><p>C、全心全意为人民服务</p><p>D、诚实守信</p><p>答案: C</p><ol start="4"><li>下列哪一种叙述是正确的</li></ol><p>A、abstract修饰符可修饰字段、方法和类</p><p>B、抽象方法的body部分必须用一对大括号{ }包住</p><p>C、声明抽象方法，大括号可有可无</p><p>D、声明抽象方法不可写出大括号</p><p>答案: D</p><ol start="5"><li>&quot;如下代码，输出结果是什么？&quot;</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Test {
    public int aMethod() {
        static int i = 0;
        i++;
        return i;
    }
    public static void main (String args[]) {
        Test test = new Test();
        test.aMethod();
        int j = test.aMethod();
        System.out.println(j);
    }   
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A、0</p><p>B、1</p><p>C、2</p><p>D、编译失败</p><p>答案: D</p><ol start="6"><li>下列哪种说法是正确的</li></ol><p>A、实例方法可直接调用超类的实例方法</p><p>B、实例方法可直接调用超类的类方法</p><p>C、实例方法可直接调用其他类的实例方法</p><p>D、实例方法可直接调用本类的类方法</p><p>答案: D</p><ol start="7"><li>用于调用存储过程的对象是？</li></ol><p>A、ResultSet</p><p>B、DriverManager</p><p>C、CallableStatemet</p><p>D、PreparedStatement</p><p>答案: C</p><ol start="8"><li>在Servlet处理请求的方式为？</li></ol><p>A、以进程的方式</p><p>B、以程序的方式</p><p>C、以线程的方式</p><p>D、以响应的方式</p><p>答案: C</p><ol start="9"><li>&quot;如下代码：结果是什么？&quot;</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class Base {
    Base() { System.out.print(&quot;&quot;Base&quot;&quot;); }
}
public class Alpha extends Base {
    public static void main( String[] args ) {
        new Alpha();
        new Base();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A、Base</p><p>B、BaseBase</p><p>C、编译失败</p><p>D、运行时抛出异常</p><p>答案: B</p><ol start="10"><li>在Servlet的生命周期中，容器只调用一次的方法是?</li></ol><p>A、service</p><p>B、getServletConfig</p><p>C、init</p><p>D、destroy</p><p>答案: C</p><ol start="11"><li>下面关于垃圾收集的说法正确的是？</li></ol><p>A、一旦一个对象成为垃圾，就立刻被收集掉</p><p>B、对象空间被收集掉之后，会执行该对象的finalize方法</p><p>C、finalize方法和C++的析构函数是完全一回事情</p><p>D、一个对象成为垃圾是因为不再有引用指着它，但是线程并非如此</p><p>答案: D</p><ol start="12"><li>Which method is used by a Servlet to place its session ID in a URL that is written to the servlet’s response output stream?</li></ol><p>A、The encodeURL method of the HttpServletRequest interface</p><p>B、The encodeURL method of the HttpServletResponse interface.</p><p>C、The rewriteURL method of the HttpServletRequest interface</p><p>D、The rewriteURL method of the HttpServletResponse interface</p><p>答案: B</p><ol start="13"><li>&quot;类Test1定义如下：将以下哪种方法插入行3是不合法的&quot;</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Test1{ 
    public float aMethod（float a，float b）{ return 0;} 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,77),b=e("p",{return:"","0;":""},"A、public float aMethod（float a， float b，float c）",-1),h=e("p",{return:"","0;":""},"B、public float aMethod（float c，float d）",-1),C=e("p",{return:"","0;":""},"C、public int aMethod（int a， int b）",-1),g=e("p",{return:"","0;":""},"D、private float aMethod（int a，int b，int c）",-1),S=l('<p>答案: B</p><ol start="14"><li>在JavaScript中如何验证一个数据是否是数字？</li></ol><p>A、如果用Integer.parseInt(value)有误就不是数字</p><p>B、int I = value 若报错就不是数字</p><p>C、没有方法验证</p><p>D、利用isNaN(value) 返回的boolean进行判断</p><p>答案: D</p><ol start="15"><li>下面哪项不是response对象的方法</li></ol><p>A、setContentType(String contentTypestr)</p><p>B、setHeader(String headername,String headervalue)</p><p>C、getParameter(String str)</p><p>D、sendError(int errorcode)</p><p>答案: C</p><ol start="16"><li>JavaScript中判断服务器已经响应的标志是？</li></ol><p>A、xmlHttp.readyState = =4</p><p>B、xmlHttp.readyState = =3</p><p>C、xmlHttp.readyState = =2</p><p>D、xmlHttp.readyState = =1</p><p>答案: A</p><ol start="17"><li>下面哪项不属于SQL语句的子类</li></ol><p>A、数据定义语言(DDL)</p><p>B、数据查询语言(DQL)</p><p>C、事务控制语言(TCL)</p><p>D、数据插入语言 (DIL)</p><p>答案: D</p><ol start="18"><li>以下从四种不同的作用域中得到Bean的实例，说法错误的是？</li></ol><p>A、page是指当前Web应用程序的所有JSP文件中取得实例，从Page对象中获取JavaBean；</p><p>B、request是指在当前的用户请求中取得实例，从ServletRequest对象中获取JavaBean</p><p>C、session是指在当前的用户会话中取得实例，常用于一个用户登录在网站上全过程不同请求之间共享数据，从HttpSession对象中获取JavaBean</p><p>D、application是指在当前的应用程序中取得实例，常用于同一个应用程序不同用户访问时共享数据，从ServletContext对象中获取JavaBean</p><p>答案: A</p><ol start="19"><li>有关过滤器init()方法错误的是</li></ol><p>A、每次调用过滤器时都会执行init方法</p><p>B、init方法可以访问FilterConfig对象。FilterConfig对象提供了对servlet环境及web.xml文件中指派的过滤器名的访问</p><p>C、利用init将FilterConfig对象存放在一个字段中，以便doFilter方法能够访问servlet环境或过滤器名</p><p>D、FilterConfig对象具有一个getInitParameter方法，它能够访问部署描述符文件（web.xml）中分配的过滤器的初始化参数</p><p>答案: A</p><ol start="20"><li>有关C/S、B/S结构下列说法错误的是</li></ol><p>A、在C/S结构，即客户端/服务器结构中，有专门的数据库服务器，但客户端还要运行客户端应用程序，这也叫做胖客户端</p><p>B、在B/S结构中，客户端在浏览器中只负责表示层逻辑的实现，业务逻辑和数据库都在服务器端运行。也就是说，应用程序部署在服务器端，客户端通过浏览器访问应用程序</p><p>C、通常B/S结构中，客户端发送HTTP请求消息传给服务器，服务器将请求传递给Web应用程序，Web应用程序处理请求，并把相应的HTML页面传给客户端</p><p>D、Web应用是基于C/S结构的，也就是客户端/服务器结构</p><p>答案: D</p><ol start="21"><li>GRANT update ON inventory TO joe WITH GRANT OPTION;此语句有什么作用</li></ol><p>A、一个系统权限被授予用户JOE</p><p>B、一个对象权限被授予用户JOE</p><p>C、用户JOE被授予在这个对象上的所有权限</p><p>D、一个系统权限和一个对象权限被授予用户JOE</p><p>答案: B</p><ol start="22"><li>需要读取一个比较大的文本文件，这个文件里有很多字节的数据，那么读这类文件下列最合适的选项是哪个？</li></ol>',50),B={href:"http://file.name",target:"_blank",rel:"noopener noreferrer"},D={href:"http://file.name",target:"_blank",rel:"noopener noreferrer"},A={href:"http://file.name",target:"_blank",rel:"noopener noreferrer"},f=l(`<p>D、new RandomAccessFile raf=new RandomAccessFile(“myfile.txt”,rw);</p><p>答案: C</p><ol start="23"><li>关于正则表达式声明6位数字的邮编，以下代码正确的是？</li></ol><p>A、var reg = /\\d6/</p><p>B、var reg = \\d{6}\\</p><p>C、var reg = /\\d{6}/</p><p>D、var reg = new RegExp(&quot;\\d{6}&quot;)</p><p>答案: C</p><ol start="24"><li>在数据库系统中，提供数据与应用程序间物理独立性的是？</li></ol><p>A、外模式/模式映像</p><p>B、模式/内模式映像</p><p>C、外模式/内模式映像</p><p>D、子模式/模式映像</p><p>答案: B</p><ol start="25"><li>下列关于视图的说法中错误的是</li></ol><p>A、视图是从一个或多个基本表导出的表，它是虚表</p><p>B、视图可以被用来对无权用户屏蔽数据</p><p>C、视图一经定义就可以和基本表一样被查询和更新</p><p>D、视图可以用来定义新的视图</p><p>答案: C</p><ol start="26"><li>如果一个事务在故障发生之前完成，但是它并没有到达检查点，则系统恢复时应对该事务执行</li></ol><p>A、REDO操作</p><p>B、UNDO操作</p><p>C、RESTART操作</p><p>D、NULL操作</p><p>答案: A</p><ol start="27"><li>在Oracle中，有一个教师表teacher的结构如下：</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>ID NUMBER<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
NAME VARCHAR2<span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span>
EMAIL VARCHAR2<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面哪个语句显示没有Email地址的教师姓名?</p><p>A、SELECT name FROM teacher WHERE email = NULL</p><p>B、SELECT name FROM teacher WHERE email &lt;&gt; NULL</p><p>C、SELECT name FROM teacher WHERE email IS NULL</p><p>D、SELECT name FROM teacher WHERE email IS NOT NULL</p><p>答案: C</p><ol start="28"><li>下列关于栈的叙述正确的是？</li></ol><p>A、栈是非线性结构</p><p>B、栈是一种树状结构</p><p>C、栈具有先进先出的特征</p><p>D、栈具有后进先出的特征</p><p>答案: D</p><ol start="29"><li>下面数据结构中，属于非线性的是？</li></ol><p>A、线性表</p><p>B、树</p><p>C、队列</p><p>D、堆栈</p><p>答案: B</p><ol start="30"><li>结构化程序设计所规定的三种基本控制结构是</li></ol><p>A、输入、处理、输出</p><p>B、树形、网形、环形</p><p>C、顺序、选择、循环</p><p>D、主程序、子程序、函数</p><p>答案：C</p><ol start="31"><li>软件设计中划分模块的一个准则是</li></ol><p>A、低内聚低耦合</p><p>B、低内聚高耦合</p><p>C、高内聚低耦合</p><p>D、高内聚高耦合</p><p>答案: C</p><ol start="32"><li>软件测试的目的是</li></ol><p>A、评价软件的质量</p><p>B、发现软件的错误</p><p>C、找出软件中的所有错误</p><p>D、证明软件是正确的</p><p>答案: B</p><ol start="33"><li>使用白盒测试方法时，确定测试数据应根据（ ）和指定的覆盖标准</li></ol><p>A、程序的内部逻辑</p><p>B、程序的复杂程度</p><p>C、使用说明书</p><p>D、程序的功能</p><p>答案: C</p><ol start="34"><li>根据我国《计算机信息系统安全保护条例》，我国计算机安全保护实行的是</li></ol><p>A、全面保护</p><p>B、等级保护</p><p>C、特殊保护</p><p>D、集中保护</p><p>答案: B</p><ol start="35"><li>按沟通是对媒介的依赖程度可以将沟通分为</li></ol><p>A、单向沟通和双向沟通</p><p>B、直接沟通和间接沟通</p><p>C、语言沟通和非语言沟通</p><p>D、正式沟通和非正式沟通</p><p>答案: B</p><ol start="36"><li>下列关于从业人员与职业道德关系的说法中，正确的是</li></ol><p>A、道德是说教，说教会扼杀员工的积极性和创造性</p><p>B、只有在大家普遍遵守道德的前提下，道德才会起作用</p><p>C、道德意识是与生俱来的，没必要对员工做规范性的教育和培训</p><p>D、任何从业人员在走上工作岗位以前都要接受职业道德教育</p><p>答案：D</p><ol start="37"><li>所谓职业道德是指人们在职业活动中形成的</li></ol><p>A、外在的、非强制性的规范</p><p>B、内在的、非强制性的约束机制</p><p>C、外在的、强制性的管理规范</p><p>D、内在的、强制性措施</p><p>答案: B</p><ol start="38"><li>职业理想分为三个层次，分别为：劳动是个人的谋生手段；从事爱好的工作，施展个人的才智；工作的目的是承担社会义务。这三个层次的关系是</li></ol><p>A、内容不同，每个员工只能适用一种层次</p><p>B、目的有本质区别，三者是互相排斥的</p><p>C、三个层次逐步递进，相互联系，不能并行适用同一个人</p><p>D、三者虽有区别，但并行不悖，适用于同一个人</p><p>答案: D</p><ol start="39"><li>从实际生活来看，一些人就业后发展缓慢甚至遭受挫折、失败，问题可能处在</li></ol><p>A、职业道德修养不够</p><p>B、社会关系不硬</p><p>C、家庭生活不幸福</p><p>D、角色转型不成功</p><p>答案: A</p><ol start="40"><li>职业道德修养包括</li></ol><p>A、职业规范修养、职业礼仪修养、职业道德理论修养</p><p>B、职业着装修养、职业礼貌用语修养、职业道德情感修养</p><p>C、职业理论知识修养就、职业道德情感修养、职业道德意志</p><p>D、职业合作修养、职业交谈修养、职业接待修养</p><p>答案: C</p><h4 id="多选题" tabindex="-1"><a class="header-anchor" href="#多选题" aria-hidden="true">#</a> 多选题</h4><ol><li>使用JavaBean的好处有哪些？</li></ol><p>A、JavaBean拥有标准化接口的优点，在开发期有可视化编程工具的支持，在运行期有JSP和J2EE连接器的支持</p><p>B、JavaBean更明确的把WEB页面的设计和软件的设计区分开来</p><p>C、JavaBean可以在多个应用程序中重用</p><p>D、JavaBean可以实现安全性、事务行为、并发性和持久性。</p><p>答案: ABC</p><ol start="2"><li>链表具有的特点是</li></ol><p>A、不必事先估计存储空间</p><p>B、可随机访问任一元素</p><p>C、插入删除不需要移动元素</p><p>D、所需空间与线性表长度成正比</p><p>答案: ACD</p><ol start="3"><li>String类的IndexOf()方法返回的类型是？</li></ol><p>A、Int16</p><p>B、Int32</p><p>C、int</p><p>D、long</p><p>答案: BC</p><ol start="4"><li>按照学生平均成绩(avg_grade) 将students表中的数据检索出来，下面SQL语句正确的是？</li></ol><p>A、SELECT * FROM students ORDER BY avg_grade</p><p>B、SELECT * FROM students GROUP BY avg_grade ASC</p><p>C、SELECT * FROM students ORDER BY avg_grade DESC</p><p>D、SELECT * FROM students ORDER by avg_grade asc</p><p>答案: ACD</p><ol start="5"><li>下面哪个语句正确地声明一个整型的二维数组</li></ol><p>A、int   a[10][10]   =   new   int[][]；</p><p>B、int   a[][]   =   new   int[10][10]；</p><p>C、int   [][]a   =   new   int[10][10]；</p><p>D、int   []a[]   =   new   int[10][10]；</p><p>答案: BCD</p><ol start="6"><li>下面哪些语句能够正确地生成5个空字符串？</li></ol><p>A、String   a[]=new   String[5]；for(int   i=0；i&lt;5；a[i++]=“”)</p><p>B、String   a[]={“”，“”，“”，“”，“”}；</p><p>C、String a[5]；</p><p>D．String   []a=new   String[5]；for(int   i=0；i&lt;5；a[i++]=null)；</p><p>答案: AB</p><ol start="7"><li>关于JavaScript里的xml处理，以下说明正确的是</li></ol><p>A、Xml是种可扩展标记语言，格式更规范，是作为未来html的替代</p><p>B、Xml一般用于传输和存储数据，是对html的补充，两者的目的不同</p><p>C、在JavaScript里解析和处理xml数据时，因为浏览器的不同，其做法也不同</p><p>D、在IE浏览器里处理xml，首先需要创建ActiveXObject对象</p><p>答案: BCD</p><ol start="8"><li>下面有助于沟通能力培养的是</li></ol><p>A、加强知识的学习，不断武装自己</p><p>B、锤炼健康的心理素质</p><p>C、加强自身的思想品德修养</p><p>D、掌握一定的沟通技巧</p><p>答案: ABCD</p><ol start="9"><li>下列属于外包特征的是</li></ol><p>A、企业的各项活动可以在时间并行，空间上分散进行</p><p>B、企业把某些业务转移给外部操作，是自身组织结构扁平化</p><p>C、依托信息技术与外部资源整合</p><p>D、企业在规模收缩中扩张</p><p>答案: ABCD</p><ol start="10"><li>在专业学习中训练职业道德行为的要求是</li></ol><p>A、参加文化学习、专业学习和专业实习</p><p>B、向劳动模范学习，向先进人物学习</p><p>C、增强职业意识、遵守职业规范</p><p>D、重视技能训练，提高职业素养</p><p>答案: CD</p><h4 id="判断题" tabindex="-1"><a class="header-anchor" href="#判断题" aria-hidden="true">#</a> 判断题</h4><p><strong>备注：0 错 1 对</strong></p><ol><li><p>Java 语言规定构造方法不可以重载。 0</p></li><li><p>break语句只中断某一层的循环 1</p></li><li><p>在程序中，对象是通过一种抽象数据类型来描述的，这种抽象数据类型称为类（class） 1</p></li><li><p>在人际交往中，只考虑自己需要收人尊敬的感受，而不顾对方的感受，则容易导致沟通失败，这是违反了沟通的平衡原则。 0</p></li><li><p>沟通能力是沟通者思想、知识、思维、心理等素质的体现，是一项综合能力。 1</p></li><li><p>JSP会先解释成Servlet源文件，然后编译成Servlet类文件 1</p></li><li><p>每当用户端运行JSP时，jspInit()方法都会运行一次 0</p></li><li><p>利用equals()方法判定Date类时，判断的是对象的值而不是对象的地址。1</p></li><li><p>类加载器加载程序运行所需要的所有类，它通过区分本机文件系统的类和网络系统导入的类增加安全性。 1</p></li><li><p>在同一个类的不同构造方法中调用该类的其它构造方法需要使用this(…)的形式，this(…)不能在构造方法的第一行调用。 0</p></li></ol><h4 id="填空题" tabindex="-1"><a class="header-anchor" href="#填空题" aria-hidden="true">#</a> 填空题</h4><ol><li><p>Java是严格区分大小写、完全面向对象的语言()是程序的基本单位。 类</p></li><li><p>服务外包是指企业将其()外包出去，利用外部最优秀的专业化团队来承接其业务。 非核心业务</p></li><li><p>()只描述系统所提供的服务，而不包含服务的实现细节。 接口</p></li><li><p>在Java中，字符串和数组是作为()出现的。 对象</p></li><li><p>在运行时，由java解释器自动引入，而不用import语句引入的包是()。 java.lang</p></li><li><p>Sockets技术是构建在()协议之上。 TCP</p></li><li><p>JDBC使用()方法加载和注册驱动程序。 Class.forName( )</p></li><li><p>所有的过滤器必须明确的实现 Init()、doFileter()和()三个方法。 Destroy()</p></li><li><p>Java中实现多线程一般使用两种方法，一是继承Thread类，二是()。 实现Runnable方法</p></li><li><p>测试工作就是进行输入、接受输出、检验结果，不深入代码细节，这样的测试方法称为()。 黑盒测试</p></li></ol><h4 id="问答题" tabindex="-1"><a class="header-anchor" href="#问答题" aria-hidden="true">#</a> 问答题</h4><ol><li>写出两种形式的单例模式</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Singleton {
    private Singleton(){}
　　    //在自己内部定义自己一个实例，是不是很奇怪？
　　    //注意这是private 只供内部调用
　　    private static Singleton instance = new Singleton();
　　    //这里提供了一个供外部访问本class的静态方法，可以直接访问　　
　　    public static Singleton getInstance() {
　　　　    return instance; 　　
　　    }
}
public class Singleton {
　　private static Singleton instance = null;
　　public static synchronized Singleton getInstance() {
    　　//这个方法比上面有所改进，不用每次都进行生成对象，只是第一次　　　　
    　　//使用时生成实例，提高了效率！
    　　if (instance==null)
    　　　　instance＝new Singleton();
        return instance; 　　
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>XML文档定义有几种形式？它们之间有何本质区别？解析XML文档有哪几种方式？</li></ol><p>&quot;a: 两种形式 dtd schema</p><p>b: 本质区别:schema本身是xml的，可以被XML解析器解析(这也是从DTD上发展schema的根本目的)</p><p>c:有DOM,SAX,STAX等</p><p>DOM:处理大型文件时其性能下降的非常厉害。这个问题是由DOM的树结构所造成的，这种结构占用的内存较多，而且DOM必须在解析文 件之前把整个文档装入内存,适合对XML的随机访问</p><p>SAX:不现于DOM,SAX是事件驱动型的XML解析方式。它顺序读取XML文件，不需要一次全部装载整个文件。当遇到像文件开头，文档结 束，或者标签开头与标签结束时，它会触发一个事件，用户通过在其回调事件中写入处理代码来处理XML文件，适合对XML的顺序访问</p><p>STAX:Streaming API for XML (StAX)</p><p>xml文档有两种定义方法：</p><p>dtd：数据类型定义（data type definition），用以描述XML文档的文档结构，是早期的XML文档定义形式。</p><p>schema：其本身是基于XML语言编写的，在类型和语法上的限定能力比dtd强，处理也比较方便，因为此正逐渐代替dtd成为新的模式 定义语言。</p><ol start="3"><li>给你一个:驱动程序A,数据源名称为B,用户名称为C,密码为D,数据库表为T，请用JDBC检索出表T的所有数据。</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package dao;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
public class Test {
 private String className=&quot;&quot;A&quot;&quot;;
 private String url=&quot;&quot;B&quot;&quot;;
 private String user=&quot;&quot;C&quot;&quot;;
 private String password=&quot;&quot;D&quot;&quot;;
 private Connection connection;
 private Statement statement;
 private ResultSet resultSet;
 public Connection getConn() {
  try {
   Class.forName(className);
   connection = DriverManager.getConnection(url, user, password);
  } catch (ClassNotFoundException e) {
   // TODO 自动生成 catch 块
   e.printStackTrace();
  } catch (SQLException e) {
   // TODO 自动生成 catch 块
   e.printStackTrace();
  }
  return connection;
 }
 
 public ResultSet executeQuery(String sql) {
  connection=getConn();
  try {
   statement = connection.createStatement();
   resultSet = statement.executeQuery(sql);
  } catch (SQLException e) {
   // TODO 自动生成 catch 块
   e.printStackTrace();
  }
  return resultSet;
 }
 public static void main(String[] args) {
  Test test = new Test();
  ResultSet set = test.executeQuery(&quot;&quot;select * from T&quot;&quot;);
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>用中文翻译以下两个句子：</li></ol><ol><li><p>Business process outsourcing. The transfer of internal business processes, such as customer relationship management, finance &amp; accounting, human resources and procurement, to an external service provider that improves these processes and administers these functions to an agreed service standard and, typically, at a reduced cost.</p></li><li><p>Executive level person who oversees sourcing governance elements in an organization. Typically, the CSO and his or her team is responsible for overseeing every sourcing decision made. &quot;</p></li></ol><p>1.业务流程外包。将诸如客户关系管理、金融及会计、人力资源及采购等内部业务流程在降低成本的前提下外包给外部的服务供应商，以按照约定的服务标准改善这些进程、管理这些功能。</p><p>2.在机构中纵览外包管理事宜的执行层次人员。通常来说，首席外包官及其团队负责纵览任何外包决定的制定&quot;</p><p><strong>以上就是我关于 <em>软件开发工程师（JAVA）部分题库-1</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,202);function E(T,_){const n=o("ExternalLinkIcon");return t(),s("div",null,[r(" more "),e("h1",c,[v,i(" 172-软件开发工程师（JAVA）"),e("a",u,[i("部分题库-1.md"),p(n)])]),m,b,h,C,g,S,e("p",null,[i("A、new FileInputStream(“"),e("a",B,[i("file.name"),p(n)]),i("”);")]),e("p",null,[i("B、new InputStreamReader(new FileInputStream(“"),e("a",D,[i("file.name"),p(n)]),i("”));")]),e("p",null,[i("C、new BufferedInputStream(new FileInputStream(“"),e("a",A,[i("file.name"),p(n)]),i("”));")]),f])}const R=a(d,[["render",E],["__file","index.html.vue"]]);export{R as default};
