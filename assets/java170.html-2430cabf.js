import{_ as l,X as n,Y as s,a1 as a,Z as e,$ as i,a2 as r,a0 as p,F as d}from"./framework-68dd73a2.js";const o={},v={id:"_170-javaweb结业考试五-md",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#_170-javaweb结业考试五-md","aria-hidden":"true"},"#",-1),u={href:"http://xn--170-JavaWEB-sv8qs3cm029alzdl03d.md",target:"_blank",rel:"noopener noreferrer"},_=p(`<h3 id="试题" tabindex="-1"><a class="header-anchor" href="#试题" aria-hidden="true">#</a> 试题</h3><h4 id="答题说明" tabindex="-1"><a class="header-anchor" href="#答题说明" aria-hidden="true">#</a> 答题说明：</h4><ol><li><p>本卷分为 单选题 、 填空题 、 简答题 、 编程题 四部分，满分 100 分，考试时间 90 分钟</p></li><li><p>请书写工整，保持卷面整洁</p></li><li><p>答题前请先填写自己的个人信息</p></li></ol><h4 id="第一部分-单选题-本部分-20-道题-满分-40-分" tabindex="-1"><a class="header-anchor" href="#第一部分-单选题-本部分-20-道题-满分-40-分" aria-hidden="true">#</a> 第一部分：单选题 （本部分 20 道题，满分 40 分）</h4><ol><li>[单选题] Servlet中实现转发的方法有如下哪些？ （ ）</li></ol><p>A 、 request.forward()</p><p>B、response.forward()</p><p>C、session.forward()</p><p>D、requestDispatcher.forward()</p><ol start="2"><li>[单选题] JavaWeb中HTTP类型请求对象的类型是那种？（）</li></ol><p>A 、 javax.servlet.ServletRequest</p><p>B、javax.servlet.ServletResponse</p><p>C、javax.servlet.http.HttpSession</p><p>D、javax.servlet.http.HttpServletRequest</p><p>E、javax.servlet.ServletContext</p><ol start="3"><li>[单选题]销毁一个session对象应该调用下面哪一个方法（ ）。</li></ol><p>A、session.invalidate()</p><p>B、session.end()</p><p>C、session.timeOut()</p><p>D、session.destory()</p><ol start="4"><li>[单选题]下面那段可以获取HttpSession中获取Account类型的对象 （）</li></ol><p>A、Account account ＝ session.getAttribute(“account”)</p><p>B、Account account ＝ (Account)session.getAttribute (“account”)</p><p>C、Account account ＝ session.getParameter(“account”)</p><p>D、Account account ＝ (Account)session. getParameter “account”) 5. [单选题]为了避免从浏览器表单中获取的汉字出现乱码，应该使用哪条语句（ ） A、request.setCharacterEncoding(“UTF-8”)</p><p>B、response.setCharacterEncoding(“UTF-8”)</p><p>C、session.setCharacterEncoding(“UTF-8”)</p><p>D、application.setCharacterEncoding(“UTF-8”)</p><ol start="6"><li>[单选题] Servlet中响应GET请求的方法有那些？()</li></ol><p>A、get方法B、set方法</p><p>C、doGet方法</p><p>D、doSet方法</p><p>E、post方法</p><ol start="7"><li>[单选题] Servlet中，HttpServletResponse的（）方法用来把一个Http请求重定向到另外的URL （ ）</li></ol><p>A、sendURL()</p><p>B、redirectURL()</p><p>C、redirectResponse()</p><p>D、sendRedirect()</p><ol start="8"><li>[单选题] 在web.xml中配置session的超时时间，单位是（） （ ）</li></ol><p>A、秒</p><p>B、分</p><p>C、小时</p><p>D、毫秒</p><ol start="9"><li>[单选题] 在jsp中，使用request的（）方法可以获得表单的提交信息 （ ）</li></ol><p>A、getAttribute</p><p>B、getParameter</p><p>C、setAttribute</p><p>D、getContextPath</p><ol start="10"><li>[单选题]JavaBean的生命周期中，哪个是用来跟踪用户的会话的？ （ ）</li></ol><p>A、session</p><p>B、request</p><p>C、page</p><p>D、application</p><ol start="11"><li>[单选题]在页面中想要取出数组内的元素，应该如下哪个标签来实现？ （ ）</li></ol><p>A、＜c:if＞</p><p>B、＜c:forEach＞</p><p>C、＜sql:param＞＜c:out＞</p><ol start="12"><li>[单选题]JSP指的是() （ ）</li></ol><p>A、java server page</p><p>B、javascript server page</p><p>C、java servlet page</p><p>D、javascripte servlet page</p><ol start="13"><li>[单选题]判断该jsp页面的输出结果： 关键代码如下 （ ）</li></ol><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>＜%! int sum＝1； %＞	＜% int sum＝8；%＞	＜%=sum+		
+%＞				
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>A、1</p><p>B、2</p><p>C、8</p><p>D、9</p><ol start="14"><li>[单选题]下列选项中哪些返回true？（ ）。 （ ）</li></ol><p>A、page==this</p><p>B、pageContext==true</p><p>C、out instanceof ServletOutputStream</p><p>D、page==true</p><ol start="15"><li>[单选题]下面哪一个不属于JSP脚本元素： （ ）</li></ol><p>A、声明</p><p>B、表达式</p><p>C、脚本代码</p><p>D、方法</p><ol start="16"><li>[单选题]关于JSP生命周期的叙述下列哪些是正确的： （ ）</li></ol><p>A、JSP会先解释成Servlet源文件，然后编译成Servlet类文件</p><p>B、每当用户端运行JSP时，jspInit()方法都会运行一次</p><p>C、每当用户端运行JSP时，jspService()方法都会运行一次</p><p>D、每当用户端运行JSP时，jspDestroy()方法都会运行一次</p><ol start="17"><li>[单选题]MVC中的 M V C 分 别用______、______、_____表示 （ ）</li></ol><p>A、jsp servlet javabean</p><p>B 、 HTml javabean jsp</p><p>C、javabean jsp servlet</p><p>D 、 servlet html jsp</p><ol start="18"><li>[单选题]以下哪个技术不是Ajax技术体系的组成部分？ （ ）</li></ol><p>A、XMLHttpRequest</p><p>B、DHTML</p><p>C 、 CSS</p><p>D、DOM</p><ol start="19"><li>[单选题]有关会话跟踪技术描述不正确的是( ) （ ）</li></ol><p>A、关闭浏览器意味着会话ID丢失，但所有与原会话关联的会话数据仍保留在服务器上，直至会话过期</p><p>B、Cookie是Web服务器发送给客户端的一小段信息，客户端请求时，可以读取该信息发送到服务器端</p><p>C、在禁用Cookie时可以使用URL重写技术跟踪会话</p><p>D、隐藏表单域将字段添加到HTML表单并在客户端浏览器中显示</p><ol start="20"><li>[单选题]有关会话跟踪技术描述不正确的是( ) （ ）</li></ol><p>A、Cookie是Web服务器发送给客户端的一小段信息，客户端请求时，可以读取该信息发送到服务器端</p><p>B、关闭浏览器意味着会话ID丢失，但所有与原会话关联的会话数据仍保留在服务器上，直至会话过期</p><p>C、在禁用Cookie时可以使用URL重写技术跟踪会话</p><p>D、隐藏表单域将字段添加到HTML表单并在客户端浏览器中显示</p><h4 id="第二部分-填空题-本部分-8-道题-满分-20-分" tabindex="-1"><a class="header-anchor" href="#第二部分-填空题-本部分-8-道题-满分-20-分" aria-hidden="true">#</a> 第二部分：填空题 （本部分 8 道题，满分 20 分）</h4><ol><li><p>[填空题]在jsp中page指令&lt;%@page_______=&quot;true&quot; %&gt;，表示此页是错误处理页面</p></li><li><p>[填空题]在JSP中，给定以下JSP代码片段</p></li></ol><div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;% int x=10; %&gt;
&lt;%! int x=20; %&gt;
&lt;%! int getX(){ return x;
}
%&gt;
&lt;% out.print(&quot;X1=&quot;+x);	%&gt;
&lt;% out.print(&quot;X2=&quot; +getX()); %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果 x1=<em><strong><strong><strong>x2=</strong></strong></strong></em></p><ol start="3"><li><p>[填空题]自定义标签的配置文件放在web项目的哪个目录下_______</p></li><li><p>[填空题]Servlet中设置HTTP响应类型类型为HTML网页，应使用哪种ContentType类型？_______</p></li><li><p>[填空题]session对象的ID默认保存在 对象中，才能让服务器判断出客户的所属session对象？</p></li><li><p>[填空题]过滤器需要实现 接口</p></li><li><p>[填空题]在Servlet中，主要使用HttpServletResponse类的重定向方法_______方法实现重定向，以及使用RequestDispatcher类的转发方法_______方法实现转发功能。</p></li><li><p>[填空题]Servlet重定向浏览器地址栏_______发生变化</p></li></ol><h4 id="第三部分-简答题-本部分-4-道题-满分-20-分" tabindex="-1"><a class="header-anchor" href="#第三部分-简答题-本部分-4-道题-满分-20-分" aria-hidden="true">#</a> 第三部分：简答题 （本部分 4 道题，满分 20 分）</h4><ol><li><p>[问答题]请简述你对Ajax的认识</p></li><li><p>[问答题]简述JSP的执行过程</p></li><li><p>[问答题]简述servlet的生命周期及其技术要点。</p></li><li><p>[问答题]在运行Web项目时，IE提示“404错误”，可能的原因包括哪些？写出3个：</p></li></ol><h4 id="第四部分-编程题-本部分-1-道题-满分-20-分" tabindex="-1"><a class="header-anchor" href="#第四部分-编程题-本部分-1-道题-满分-20-分" aria-hidden="true">#</a> 第四部分：编程题 （本部分 1 道题，满分 20 分）</h4><ol><li>[组合题]设计一个简单的商品信息管理系统，实现商品管理功能。</li></ol><p>1）[ 问答题 ]</p><p>商品表的设计如下： 表名：goods</p><p>商品编号 goods_id number类型 主键，</p><p>商品名称 goods_name nvarchar（200) 类型 唯一键， 商品价格 price number(7,2) 默认值 0,</p><p>商品库存 store number 要求库存大于等于0-check检查 , 商品描述 goods_desc nvarchar(2000) 默认空</p><p>要 求 ：<br> 1).主键使用序列进行管理</p><p>2).按要求编写建表脚本和序列脚本</p><p>3).按要求完成数据库约束创建</p><p>4).使用sql插入5条初始化数据</p><p>2）[ 问答题 ]</p><p>1、完成商品类编写，类名Goods并列出所有的类属性，get/set方法可以省略；</p><p>2、按照要求，在横线处补全代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> public interface GoodsDao{
// 编写一个方法根据商品名称查找商品，返回一个布尔值，判断商品名称是否可用

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、按照要求，在横线处补全代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//实现接口
public class GoodsDaoImpl implements GoodsDao { @Override
public boolean findGoodsByName(String name) throws SQLException { Connection conn = null;
PreparedStatement stmt = null; ResultSet rs = null;
String sql = &quot;select goods_id from goods_name=?&quot;;
//下面为完成相应的数据查询，完成功能即可，不指定代码行数

_______________________
_______________________
_______________________
_______________________
_______________________
return false;
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）[ 问答题 ] 补全代码： 1、 编写一个servlet，接收客户发生的商品名称，返回该商品名称是否可用</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@WebServlet(&quot;/CheckServlet&quot;)
public class CheckServlet extends HttpServlet { private static final long serialVersionUID = 1L;
protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
String name = request.getParameter(&quot;goodsName&quot;); GoodsDao goodsDao = new GoodsDaoImpl(); boolean result = goodsDao.findGoodsByName(name);
response.setContentType(_______1_______	);//返回json数据类型response.getWriter().print(_______	2_______）; //返回json对象，包含查询结果
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、编写一个jsp，使用jquery实现ajax查询商品名称是否可用</p><div class="language-Jsp line-numbers-mode" data-ext="Jsp"><pre class="language-Jsp"><code>&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot;	pageEncoding=&quot;UTF-8&quot;%&gt;
&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;
&lt;title&gt;&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;input id=&quot;goodsName&quot; name=&quot;goodsName&quot; value=&quot;&quot; onblur=&quot;checkGoodsName()&quot;&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
//使用jquery进行ajax查询，检查商品名称是否可用function checkGoodsName(){

var textval = $(&quot;#goodsName&quot;).val();
$.post(_______	3_______	,{goodsName:textval},function(data){ if(_______4_______	){
alert(&quot;商品名称不可用&quot;);
}
});
}
&lt;/script&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考答案" tabindex="-1"><a class="header-anchor" href="#参考答案" aria-hidden="true">#</a> 参考答案</h3><h4 id="第一部分-单选题-本部分-20-道题-满分-40-分-1" tabindex="-1"><a class="header-anchor" href="#第一部分-单选题-本部分-20-道题-满分-40-分-1" aria-hidden="true">#</a> 第一部分：单选题 （本部分 20 道题，满分 40 分）</h4><ol><li><p>【单选题】 答案： D</p></li><li><p>【单选题】 答案： D</p></li><li><p>【单选题】 答案： A</p></li><li><p>【单选题】 答案： B</p></li><li><p>【单选题】 答案： A</p></li><li><p>【单选题】 答案： C</p></li><li><p>【单选题】 答案： D</p></li><li><p>【单选题】 答案： B</p></li><li><p>【单选题】 答案： B</p></li><li><p>【单选题】 答案： A</p></li><li><p>【单选题】 答案： B</p></li><li><p>【单选题】 答案： A</p></li><li><p>【单选题】 答案： C</p></li><li><p>【单选题】 答案： A</p></li><li><p>【单选题】 答案： D</p></li><li><p>【单选题】 答案： A</p></li><li><p>【单选题】 答案： C</p></li><li><p>【单选题】 答案： B</p></li><li><p>【单选题】 答案： D</p></li><li><p>【单选题】 答案： D</p></li></ol><h4 id="第二部分-填空题-本部分-8-道题-满分-20-分-1" tabindex="-1"><a class="header-anchor" href="#第二部分-填空题-本部分-8-道题-满分-20-分-1" aria-hidden="true">#</a> 第二部分：填空题 （本部分 8 道题，满分 20 分）</h4><ol><li><p>【填空题】 答案： isErrorPage</p></li><li><p>【填空题】 答案： 10、 20</p></li><li><p>【填空题】 答案： WEB-INF</p></li><li><p>【填空题】 答案： text/html</p></li><li><p>【填空题】 答案： cookie</p></li><li><p>【填空题】 答案： Filter</p></li><li><p>【填空题】 答案： sendRedirect()、 forward()</p></li><li><p>【填空题】 答案： 会|||或者能够表达正确的答案</p></li></ol><h4 id="第三部分-简答题-本部分-4-道题-满分-20-分-1" tabindex="-1"><a class="header-anchor" href="#第三部分-简答题-本部分-4-道题-满分-20-分-1" aria-hidden="true">#</a> 第三部分：简答题 （本部分 4 道题，满分 20 分）</h4><ol><li>【问答题】 答案：</li></ol><p>AJAX是“Asynchronous JavaScript and XML”的缩写。他是指一种创建交互式网页应用的网页开发技术。 Ajax包含下列技术： 基于web标准（standards-basedpresentation）XHTML+CSS的表示； 使用 DOM（Document ObjectModel）进行动态显示及交互； 使用 XML 和 XSLT 进行数据交换及相关操作； 使用 XMLHttpRequest 进行异步数据查询、检索； 使用 JavaScript 将所有的东西绑定在一起。</p><ol start="2"><li>【问答题】 答案：</li></ol><p>1.客户端发出Request请求</p><p>2.如果是第一次访问，Tomcat将JSP转译成Servlet的源代码，将产生的Servlet源代码经过编译后，并加载 到 内 存 执 行 ； 不 是 第 一 次 访 问 ， 直 接 把 编 译 后 的 Servlet 加 载 到 内 存 执 行</p><p>3.把结果Response(响应)至客户端</p><ol start="3"><li>【问答题】 答案：</li></ol><p>一、Servlet生命周期分为三个阶段：</p><p>1，初始化阶段 调用init()方法 -- 1分</p><p>2，响应客户请求阶段 调用service()方法 -- 1分</p><p>3，终止阶段 调用destroy()方法 --1分</p><p>二、Servlet容器启动时自动装载Servlet --1分</p><p>三、在Servlet的整个生命周期内，init()方法只被调用一次。 --1分</p><ol start="4"><li>【问答题】 答案： 常有的问题有：未部署Web项目；URL中的上下文路径书写错误；URL中的文件名称书写错误</li></ol><p>第四部分：编程题 （本部分 1 道题，满分 20 分）</p><p>1、 【组合题】</p><p>1）【问答题】 答案：</p><p>1.建表脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE GOODS(GOODS_ID NUMBER PRIMARY KEY ,GOODS_NAME NVARCHAR2
(200) UNIQUE,PRICE NUMBER(7,2) DEFAULT 0,STORE NUMBER CHECK(STORE&gt;=0),GOO DS_DESC NVARCHAR2(2000)) ;
2.创建序列脚本：
CREATE SEQUENCE SQ_GOODS_INDEX;
3.初始化数据：
INSERT INTO GOODS VALUES(SQ_GOODS_INDEX.NEXTVAL,&#39;爱奇艺7天点卡&#39;,20,1000,&#39;爱奇

艺7天点卡&#39;);
INSERT INTO GOODS VALUES(SQ_GOODS_INDEX.NEXTVAL,&#39;爱奇艺月卡&#39;,60,1000,&#39;爱奇艺
月卡&#39;);
INSERT INTO GOODS VALUES(SQ_GOODS_INDEX.NEXTVAL,&#39;爱奇艺年卡&#39;,200,1000,&#39;爱奇艺
年卡&#39;);
INSERT INTO GOODS VALUES(SQ_GOODS_INDEX.NEXTVAL,&#39;百度文库7天会员&#39;,15,1000,&#39;百
度文库7天会员&#39;);
INSERT INTO GOODS VALUES(SQ_GOODS_INDEX.NEXTVAL,&#39;百度文库会员&#39;,360,1000,&#39;百度
文库会员&#39;); 题目解析：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）【问答题】 答案：</p><p>1.Goods类：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Goods { private int goodsId;
private String goodsName; private double price; private int store;
private String goodsDesc;
// get，set方法
//要求数据类型匹配
｝ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.接口方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
public boolean findGoodsByName(String name);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.实现接口方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>stmt = conn.prepareStatement(sql); stmt.setString(1, name);
rs = stmt.executeQuery(); if(rs.next()){
return true;
}
题目解析：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）【 问 答 题 】 答 案 ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 1.&quot;application/json&quot; 
 2.&quot;{\\&quot;result:\\&quot;:&quot;+result+&quot;}&quot; 
 3.&quot;CheckServlet&quot; 
 4.data.result
题目解析：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>JavaWEB结业考试五</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,170);function m(b,g){const t=d("ExternalLinkIcon");return n(),s("div",null,[a(" more "),e("h1",v,[c,i(),e("a",u,[i("170-JavaWEB结业考试五.md"),r(t)])]),_])}const S=l(o,[["render",m],["__file","java170.html.vue"]]);export{S as default};
