import{_ as i,X as a,Y as d,a1 as r,Z as t,$ as e,a2 as n,a0 as s,F as u}from"./framework-68dd73a2.js";const o="/blog/assets/Java_157_1.png",c="/blog/assets/Java_157_2.png",m="/blog/assets/Java_157_3.png",v="/blog/assets/Java_157_4.png",p={},g={id:"_157-java-jdbc与java数据库编程基础-md",tabindex:"-1"},b=t("a",{class:"header-anchor",href:"#_157-java-jdbc与java数据库编程基础-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--157-Java-JDBCJava-9z50a829keu1a1kvc9j562iy8iex5a.md",target:"_blank",rel:"noopener noreferrer"},x=s('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="jdbc概述" tabindex="-1"><a class="header-anchor" href="#jdbc概述" aria-hidden="true">#</a> JDBC概述</h4><ul><li>什么是JDBC</li><li>JDBC(Java DataBase Connectivity) <ul><li>称为Java数据库连接，它是一种用于数据库访问的应用程序API，由一组用Java语言编写的类和接口组成，有了JDBC就可以用同一的语法对多种关系数据库进行访问，而不用担心其数据库操作语言的差异。</li><li>有了JDBC，就不必为访问Mysql数据库专门写一个程序，为访问Oracle又专门写一个程序等等。</li></ul></li></ul><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>JDBC体系结构</li><li>JDBC的结构可划分为两层： <ul><li>JDBC Driver Interface(驱动程序管理器接口)</li><li>JDBC API</li></ul></li></ul><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>JDBC优缺点 <ul><li>优点： <ul><li>JDBC使得编程人员从复杂的驱动器调用命令和函数中解脱出来，可以致力于应用程序中的关键地方。</li><li>JDBC支持不同的关系数据库，这使得程序的可移植性大大加强。</li><li>JDBC API是面向对象的，可以让用户把常用的方法封装为—个类，以备后用</li></ul></li><li>缺点：</li><li>使用JDBC，访问数据记录的速度会受到一定程度的影响。</li><li>JDBC结构中包含不同厂家的产品，这就给更改数据源带来了很大的麻烦。</li></ul></li><li>JDBC核心接口与类</li><li>JDBC核心类库包含在java.sql包中。 <ul><li>类 <ul><li>DriverManager：负责管理JDBC驱动程序。使用JDBC驱动程序之前，必须先将驱动程序加载并注册后才可以使用，同时提供方法来建立与数据库的连接。</li><li>SQLException－有关数据库操作的异常</li></ul></li><li>接口: <ul><li>Connection：特定数据库的连接（会话）。在连接上下文中执行SQL语句并返回结果。</li><li>PreparedStatement：表示预编译的 SQL 语句的对象。</li><li>Statement：用于执行静态 SQL 语句并返回它所生成结果的对象。</li><li>ResultSet ：表示数据库结果集的数据表，通常通过执行查询数据库的语句生成 。</li><li>CallableStatement ：用于执行 SQL 存储过程的接口 。</li></ul></li></ul></li></ul><h4 id="创建jdbc应用" tabindex="-1"><a class="header-anchor" href="#创建jdbc应用" aria-hidden="true">#</a> 创建JDBC应用</h4><ul><li><p>创建JDBC应用程序的步骤</p><ul><li><ol><li>载入JDBC驱动程序</li></ol></li><li><ol start="2"><li>定义连接URL</li></ol></li><li><ol start="3"><li>建立连接</li></ol></li><li><ol start="4"><li>创建Statement对象</li></ol></li><li><ol start="5"><li>执行查询或更新</li></ol></li><li><ol start="6"><li>结果处理</li></ol></li><li><ol start="7"><li>关闭连接</li></ol></li></ul></li><li><p>数据库驱动程序</p><ul><li>数据库驱动程序分类 <ul><li>Type 1: jdbc-odbc桥 <ul><li>把JDBC API调用转换成ODBC API 调用, 然后ODBC API调用针对供应商的ODBC 驱动程序来访问数据库, 即利用JDBC- ODBC 桥通过ODBC来存储数据源 。</li></ul></li><li>Type 2: 本地API驱动 <ul><li>本地api驱动直接把jdbc调用转变为数据库的标准调用再去访问数据库. 这种方法需要本地数据库驱动代码。讯。</li></ul></li><li>Type 3: 网络协议驱动 <ul><li>它使用一种与具体数据库无关的协议将数据库请求发送给一个中间服务器。</li></ul></li><li>Type 4: 本地协议驱动 <ul><li>这种驱动直接把jdbc调用转换为符合相关数据库系统规范的请求.由于4型驱动写的应用可以直接和数据库服务器通讯，这种类型的驱动完全由java实现，因此实现了平台独立性。</li></ul></li><li>通常开发中多采用第四种方式，这种驱动不需要先把jdbc的调用传给odbc或本地数据库接口或者是中间层服务器，所以它的执行效率是非常高的驱动</li></ul></li></ul></li><li><p>数据库驱动程序</p></li></ul><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>数据库驱动程序 <ul><li>各数据库厂商均提供对 JDBC 的支持，即提供数据库连接使用的驱动程序文件</li><li>需要为数据库应用程序正确加载驱动程序文件以获得数据库连接，实施操作</li><li>Oracle 数据库的 JDBC 驱动程序文件 “ojdbc14.jar”（Oracle官方网站下载）</li></ul></li><li>加载 JDBC 驱动程序 <ul><li>Class 类中提供加载驱动程序的方法：</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static Class forName(String className) 
		throws ClassNotFoundException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>className－表示类的描述符的字符串</p><ul><li>Oracle 驱动的类描述符为：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>oracle.jdbc.driver.OracleDriver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>加载 JDBC 驱动程序 <ul><li>示例：</li><li>在工程主类 JdbcOracleTest 的 main 方法中增加加载 Oracle 驱动的代码： <ul><li>声明表示 Oracle 驱动类描述符的字符串变量 driver</li><li>调用 Class 类的静态方法 forName 加载该驱动（注意异常处理）</li></ul></li></ul></li><li>建立与数据库的连接 <ul><li>DriverManager 类提供 getConnection 方法可获得指定数据库的连接对象：</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static Connection getConnection
	(String url, String userName, String password) 
		throws SQLException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Oracle 数据库的 url 格式为：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jdbc:oracle:thin:@&lt;主机名或IP&gt;:1521:&lt;数据库名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>建立与数据库的连接 <ul><li>示例</li><li>修改类 JdbcOracleTest 的 main 方法： <ul><li>声明表示指定数据库url的字符串变量 url</li><li>分别声明表示用户名和口令的字符串变量 userName 和 password，分别初始化为 &quot;SCOTT&quot; 和 &quot;TIGER“</li><li>声明Connection接口对象con，赋值为 DriverManager类的getConnection方法的返回值</li><li>输出打印 “数据库连接成功” 的提示信息</li></ul></li></ul></li><li>获得 Statement 对象 + Connection接口中提供可获得 Statement 对象的方法：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Statement createStatement() throws SQLException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>可调用重载的 createStatement 方法，可指定参数，设置数据库操作结果的相关属性。</p></li><li><p>执行 SQL 语句</p><ul><li>Statement接口提供可执行 SQL 命令的方法：</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>boolean execute(String sql) throws SQLException
ResultSet executeQuery(String sql) throws SQLException 
int executeUpdate(String sql) throws SQLException 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行 SQL 语句 <ul><li>示例（查询）</li><li>在工程主类 JdbcOracleTest 的 main 方法中增加操作数据库的代码： <ul><li>获得可发送SQL命令的Statement对象st</li><li>调用对象st的excuteQuery方法发送SQL查询命令，查询SCOTT下的表DEPT，获得所有记录数据，返回结果集对象rs</li></ul></li><li>在工程主类 JdbcOracleTest 的 main 方法中增加操作数据库的代码：</li><li>获得可发送SQL命令的Statement对象st</li><li>实现对数据库增删改查操作</li></ul></li><li>操作结果集对象 <ul><li>ResultSet接口提供可对结果集进行操作的方法：</li><li>移动结果集操作指针：</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>boolean next() throws SQLException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定数据类型根据传入列的名字获取指定列的值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Xxx getXxx(String columnName) throws SQLException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定数据类型根据传入列的编号获取指定列的值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Xxx getXxx(1) throws SQLException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>SQL类型对应Java数据类型</li></ul><table><thead><tr><th>SQL Type</th><th>Java Type</th></tr></thead><tbody><tr><td>CHAR</td><td>String</td></tr><tr><td>VARCHAR</td><td>String</td></tr><tr><td>LONGVARCHAR</td><td>String</td></tr><tr><td>NUMERIC</td><td>java.math.BigDecimal</td></tr><tr><td>DECIMAL</td><td>java.math.BigDecimal</td></tr><tr><td>BIT</td><td>boolean</td></tr><tr><td>TINYINT</td><td>byte</td></tr><tr><td>SMALLINT</td><td>short</td></tr><tr><td>INTEGER</td><td>int</td></tr></tbody></table><ul><li>ResultSet接口的getXxx 方法</li></ul><table><thead><tr><th>Method</th><th>Java Technology Type Returned</th></tr></thead><tbody><tr><td>getInt</td><td>int</td></tr><tr><td>getLong</td><td>long</td></tr><tr><td>getObject</td><td>Object</td></tr><tr><td>getShort</td><td>short</td></tr><tr><td>getString</td><td>java.lang.String</td></tr><tr><td>getTime</td><td>java.sql.Time</td></tr><tr><td>getTimestamp</td><td>java.sql.Timestamp</td></tr><tr><td>getUnicodeStream</td><td>java.io.InputStream of Unicode characters</td></tr></tbody></table><ul><li><p>示例</p></li><li><p>在工程主类 JdbcOracleTest 的 main 方法中增加处理结果集的代码：</p><ul><li>以rs对象的next()方法作为while循环的条件，调用对象rs的getXxx方法，指定列名和类型，获取结果集对象中DEPT表的所有数据，并打印输出。</li></ul></li><li><p>关闭操作对象及连接</p></li><li><p>可调用接口ResultSet、Statement、Connection 中的关闭方法，立即释放数据库和 JDBC 相关资源：</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void close() throws SQLException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>示例</li><li>在工程主类 JdbcOracleTest 的 main 方法中增加关闭数据库操作对象的代码： <ul><li>关闭结果集对象 rs</li><li>关闭 Statement 对象 st</li><li>关闭 Connection 对象 con</li></ul></li><li>JDBC日期时间处理</li><li>对于数据库种不同的时间类型，要分别采用与之相对应的Java包装类来存取: <ul><li>日期类型用java.sql.Date</li><li>时间类型用java.sql.Time</li><li>日期/时间类型用java.sql.Timestamp；</li><li>getTimestamp()可以把年月日时分秒都取出来，getDate()只能取出年月日，getTime()只能取出时分秒。</li></ul></li><li>JDBC的日期/时间类型转换为字符串 <ul><li>Timestamp timeStamp = //通过数据库访问获取到该数据</li><li>SimpleDateFormat sdf = new SimpleDateFormat(&quot;yyyy-MM-dd HH:mm:ss&quot;);</li><li>String str = sdf.format(timeStamp);</li></ul></li><li>java.sql.Timestamp如何转换为java.util.Date <ul><li>java.sql.Timestamp是java.util.Date的子类，不需要做任何转换直接赋值即可：</li><li>java.sql.Timestamp ts;</li><li>java.util.Date utilDate;</li><li>utilDate = ts;</li></ul></li><li>java.util.Date如何转换为java.sql.Timestamp <ul><li>java.util.Date是java.sql.Timestamp的父类，要这样转换：</li><li>java.sql.Timestamp ts;</li><li>java.util.Date utilDate;</li><li>ts.setTime(utilDate.getTime());</li></ul></li></ul><h4 id="preparedstatement" tabindex="-1"><a class="header-anchor" href="#preparedstatement" aria-hidden="true">#</a> PreparedStatement</h4><ul><li>PreparedStatement接口 <ul><li>PreparedStatement接口是Statement接口的子接口，允许使用不同的参数多次执行同样的 SQL 语句。</li><li>Connection接口提供创建PreparedStatement对象的方法，可指定SQL语句：</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PreparedStatement prepareStatement(String sql) 
			throws SQLException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PreparedStatement pstmt = con.prepareStatement
	(&quot;INSERT INTO EMP VALUES(?,?)&quot;);
pstmt.setInt(1,  99);
pstmt.setString(2,  &quot;Tom&quot;);
 int count = pstmt.executeUpdate( );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>PreparedStatement接口setXxx 方法</li></ul><table><thead><tr><th>Method</th><th>SQL Type</th></tr></thead><tbody><tr><td>setASCIIStream</td><td>LONGVARCHAR produced by an ASCII stream</td></tr><tr><td>setBigDecimal</td><td>NUMERIC</td></tr><tr><td>setBinaryStream</td><td>LONGVARBINARY</td></tr><tr><td>setBoolean</td><td>BIT</td></tr><tr><td>setByte</td><td>TINYINT</td></tr><tr><td>setBytes</td><td>VARBINARY or LONGVARBINARY (depending on the size relative to the limits on VARBINARY)</td></tr><tr><td>setDate</td><td>DATE</td></tr><tr><td>setDouble</td><td>DOUBLE</td></tr><tr><td>setFloat</td><td>FLOAT</td></tr><tr><td>setInt</td><td>INTEGER</td></tr><tr><td>setLong</td><td>BIGINT</td></tr><tr><td>setNull</td><td>NULL</td></tr><tr><td>setObject</td><td>The given object that is converted to the target SQL type before being sent</td></tr><tr><td>setShort</td><td>SMALLINT</td></tr><tr><td>setString</td><td>VARCHAR or LONGVARCHAR (depending on the size relative to the driver’s limits on VARCHAR)</td></tr><tr><td>setTime</td><td>TIME</td></tr><tr><td>setTimestamp</td><td>TIMESTAMP</td></tr></tbody></table><ul><li><p>示例</p></li><li><p>修改 JdbcOracleTest 类代码，尝试使用 PreparedStatement 类发送 SQL 命令，实现对数据库的操作。</p></li><li><p><strong>PreparedStatement接口优点:</strong></p><ul><li>可动态设置参数</li><li>增加了预编译功能</li><li>提高执行速度</li></ul></li></ul><p><strong>以上就是我关于 <em>Java-JDBC与Java数据库编程基础</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,49);function S(C,D){const l=u("ExternalLinkIcon");return a(),d("div",null,[r(" more "),t("h1",g,[b,e(),t("a",h,[e("157-Java-JDBC与Java数据库编程基础.md"),n(l)])]),x])}const B=i(p,[["render",S],["__file","java157.html.vue"]]);export{B as default};
