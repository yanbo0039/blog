import{_ as e,X as i,Y as n,a1 as a,a0 as d}from"./framework-68dd73a2.js";const s="/blog/assets/Java_7_1.png",l="/blog/assets/Java_7_2.png",r="/blog/assets/Java_7_3.png",t="/blog/assets/Java_7_4.png",c="/blog/assets/Java_7_5.png",v="/blog/assets/Java_7_6.png",u="/blog/assets/Java_7_7.png",b="/blog/assets/Java_7_8.png",h="/blog/assets/Java_7_9.png",m={},o=d('<h1 id="java基础应用编程——-变量和运算符" tabindex="-1"><a class="header-anchor" href="#java基础应用编程——-变量和运算符" aria-hidden="true">#</a> Java基础应用编程—— 变量和运算符</h1><h2 id="本章内容" tabindex="-1"><a class="header-anchor" href="#本章内容" aria-hidden="true">#</a> 本章内容</h2><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="java程序结构" tabindex="-1"><a class="header-anchor" href="#java程序结构" aria-hidden="true">#</a> Java程序结构</h2><h3 id="java程序结构-1" tabindex="-1"><a class="header-anchor" href="#java程序结构-1" aria-hidden="true">#</a> Java程序结构</h3><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="标识符、关键字和保留字" tabindex="-1"><a class="header-anchor" href="#标识符、关键字和保留字" aria-hidden="true">#</a> 标识符、关键字和保留字</h2><h3 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h3><pre><code>Java中的包、类、方法、参数和变量的名称
标识符的命名规则
必须以字母、下划线（_）或美元符号（$）开头
余下的字符可以是下划线、美元符号或任何的字母或数字，长度不限。标识符中不能有空格。
不能使用Java中的关键字或者保留字做为标识符
</code></pre><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="关键字-保留字" tabindex="-1"><a class="header-anchor" href="#关键字-保留字" aria-hidden="true">#</a> 关键字/保留字</h3><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="☻-练习判断下列哪些是合法的标识符" tabindex="-1"><a class="header-anchor" href="#☻-练习判断下列哪些是合法的标识符" aria-hidden="true">#</a> ☻ 练习判断下列哪些是合法的标识符：</h3><pre><code>identifier  、userName  、class 、98.3  、Data#
user_name  、_sys_var1  、$change  、blue bird 
  
identifier √ 、userName √ 、class X 、98.3 X 、Data# X
user_name √ 、_sys_var1 √ 、$change √ 、blue bird X
</code></pre><h3 id="java中的字面常量" tabindex="-1"><a class="header-anchor" href="#java中的字面常量" aria-hidden="true">#</a> Java中的字面常量</h3><h4 id="常量指程序里持续不变的值-在整个程序运行过程中它是不可改变的" tabindex="-1"><a class="header-anchor" href="#常量指程序里持续不变的值-在整个程序运行过程中它是不可改变的" aria-hidden="true">#</a> 常量指程序里持续不变的值，在整个程序运行过程中它是不可改变的</h4><h4 id="常见的字面量类型有" tabindex="-1"><a class="header-anchor" href="#常见的字面量类型有" aria-hidden="true">#</a> 常见的字面量类型有：</h4><pre><code>整型字面常量，如：123，067，0X1D，123L
浮点数字面常量，如：123.4，.18，1.8e1，1.2D，1.2F
布尔型字面常量，如：true，false
字符字面常量，如：’a’，’8’，‘\\n’，‘\\u123f’
字符串字面常量，如：“a”，“hello”
引用类型字面常量，：null
</code></pre><h3 id="☻-练习" tabindex="-1"><a class="header-anchor" href="#☻-练习" aria-hidden="true">#</a> ☻ 练习</h3><p>找出程序中的关键字、标识符和字面量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class  Hello {
    
   public static void main( String args[ ]) {
         
        System.out.println(“Hello World!”);
   
   }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常量—java7特性" tabindex="-1"><a class="header-anchor" href="#常量—java7特性" aria-hidden="true">#</a> 常量—java7特性</h3><h4 id="数值常量对下划线支持" tabindex="-1"><a class="header-anchor" href="#数值常量对下划线支持" aria-hidden="true">#</a> 数值常量对下划线支持</h4><pre><code>JDK 7中，你可以在数值常量中使用&#39;_&#39;来提升可读性。
这对在源代码中使用了大数字的人来说尤其有用，例如在金融或者计算领域 
</code></pre><p>中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int billion = 1_000_000_000;  // 10^9  
long creditCardNumber =  1234_4567_8901_2345L; //16 digit number  
long ssn = 777_99_8888L;  
double pi = 3.1415_9265;  
float  pif = 3.14_15_92_65f;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值常量对下划线支持-1" tabindex="-1"><a class="header-anchor" href="#数值常量对下划线支持-1" aria-hidden="true">#</a> 数值常量对下划线支持</h3><p>不能在小数后面，或者数字的开始和结束的地方放下划线。下面的数值常量就是不正确的，因为它们错误地使用了下划线</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> double pi = 3._1415_9265; // 小数点后不能添加下划线
 long creditcardNum = 1234_4567_8901_2345_L; // 数字结尾不能添加下划线  
 long ssn = _777_99_8888L; // 数值开头不能添加下划线
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明二进制常量" tabindex="-1"><a class="header-anchor" href="#声明二进制常量" aria-hidden="true">#</a> 声明二进制常量</h3><pre><code>JDK7中，对于整型类型（byte, short, int 和long)来说，你可以用‘0b’前缀来表
明这是一个二进制的常量。
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int mask = 0b01010000101;

// 结合下划线，这样写更好
int binary = 0B0101_0000_1010_0010_1101_0000_1010_0010; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><h3 id="变量的概念" tabindex="-1"><a class="header-anchor" href="#变量的概念" aria-hidden="true">#</a> 变量的概念</h3><p>变量是指在程序的运行过程中随时可以发生变化的量</p><p>变量是程序中数据的临时存放场所</p><pre><code>保存程序运行时用户输入的数据
特定的运算结果等
</code></pre><h3 id="变量的声明" tabindex="-1"><a class="header-anchor" href="#变量的声明" aria-hidden="true">#</a> 变量的声明</h3><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="数据类型及分类" tabindex="-1"><a class="header-anchor" href="#数据类型及分类" aria-hidden="true">#</a> 数据类型及分类</h3><p>在Java中，数据类型分为两大类：</p><pre><code>基本数据类型：4类8种基本数据类型
引用数据类型
</code></pre><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="整数类型-—-byte、short、int默认、long" tabindex="-1"><a class="header-anchor" href="#整数类型-—-byte、short、int默认、long" aria-hidden="true">#</a> 整数类型 — byte、short、int默认、long</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Java中整型的三种表示形式
十进制整数：0 ~ 9，注：第一位不能是0
十六进制数：0 ~ 9  A ~ F, 注：必须以0x或0X开头
                 例如： 0X8A   0x12
八进制整数：0 ~ 7，注：必须以0开头
                 例如： 0123     012
八进制整数：0 ~ 7，注：必须以0开头
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Java各整数类型有固定的表数范围和字段长度，其不受操作系统的影响，以保证Java程序的可移植性。</p><p>Java语言的整形常量默认为int型，声明long型后面需加上l或者L，否则会出错</p><h3 id="☻-练习-1" tabindex="-1"><a class="header-anchor" href="#☻-练习-1" aria-hidden="true">#</a> ☻ 练习</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在java中与语句“int a = 97;”等效的声明语句是_____
int a = 0X0061;
int a = 0X61;
int a = 0141;
int a = 97.0;
答案：ABC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浮点数类型-—-float、double" tabindex="-1"><a class="header-anchor" href="#浮点数类型-—-float、double" aria-hidden="true">#</a> 浮点数类型 — float、double</h3><p>与整数类型相似，Java浮点数类型有固定的表数范围和字段长度，不受平台影响 <img src="`+b+`" alt="" loading="lazy"></p><p>Java浮点数类型有两种表示形式</p><pre><code>十进制数形式，例如：3.14    314.0    .314
科学计数法形式，如：3.14e2    3.14E-1
</code></pre><p>Java浮点型常量默认为double型，如要声明一个常量为float型，则需在数字后面加f或F，如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>double d = 12345.6
float f = 12.3       X
float f = 12.3f     √
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符类型-—-char" tabindex="-1"><a class="header-anchor" href="#字符类型-—-char" aria-hidden="true">#</a> 字符类型 — char</h3><p>单个字符用 char 类型表示，通常取值可为：</p><p>英文字母、数字、转义序列、特殊字符等</p><p>Java中的字符占两个字节(16位)，因此可用十六进制编码形式表示</p><p>Java中的字符类型的值通常用单引号( ‘ ’ )括起来</p><h3 id="例如" tabindex="-1"><a class="header-anchor" href="#例如" aria-hidden="true">#</a> 例如：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>字符	    含义
‘a’	        字母a
‘中’	    汉字中   
‘\\n’	    转义字符表示换行
‘\\u????’	特定的Unicode字符，用 \\u +四个确切的16位数字代替
‘\\u03A6’	Unicode字符表示希腊字符Φ
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转义字符" tabindex="-1"><a class="header-anchor" href="#转义字符" aria-hidden="true">#</a> 转义字符</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>转义字符	        含义
\\r	       表示接受键盘输入，相当于按下了回车键
\\n	       表示换行
\\t	       表示制表符Table键
\\b	       表示退格键，相当于Back Space
\\’	       相当于单引号’
\\”	       相当于双引号“
\\\\	       表示一个斜杠 \\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符类型-—-char-1" tabindex="-1"><a class="header-anchor" href="#字符类型-—-char-1" aria-hidden="true">#</a> 字符类型 — char</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>字符类型是一个16位无符号整数!
字符类型的值是对应字符的编码, 是unicode编码. 
英文部分的值与ascII编码一致.
char是定长编码, 所有的字符都是16位.
&#39;A&#39; -&gt; 0x0041
&#39;中&#39;-&gt; 0x4e2d
在编码中: &#39;0&#39;~&#39;9&#39;, &#39;a&#39;~&#39;z&#39;, &#39;A&#39;~&#39;Z&#39;都是连续编码的!
&#39;0&#39;与&#39;\\u0000&#39;不是同一个字符
最小值:0, 最大值:65535 = 2^16-1
字符字面量使用单引号为定界符号:
&#39;中&#39; 是整数常量!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="☻-练习-2" tabindex="-1"><a class="header-anchor" href="#☻-练习-2" aria-hidden="true">#</a> ☻ 练习</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>哪些是合法的字符类型？
A ‘AB’
B ‘b’
C “123”
D ‘\\t’
E ‘\\u123f’
答案：BDE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布尔类型-—-boolean" tabindex="-1"><a class="header-anchor" href="#布尔类型-—-boolean" aria-hidden="true">#</a> 布尔类型 — boolean</h3><p>boolean类型适于逻辑运算，一般用于程序流程控制</p><p>boolean 数据类型有两个值：true 和 false</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>       boolean   flag;
       flag = true;
       if (flag) {
             //do something
       }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型的转换规则" tabindex="-1"><a class="header-anchor" href="#数据类型的转换规则" aria-hidden="true">#</a> 数据类型的转换规则</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>两种数据类型
转换方式

 自动类型转换（隐式类型转换）
 满足两个条件：
①两种类型彼此兼容
②目标类型的取值范围要大于源类型

 强制类型转换（显示类型转换）
 当两种类型彼此不兼容，或
目标类型取值范围小于源类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动类型转换-隐式类型转换" tabindex="-1"><a class="header-anchor" href="#自动类型转换-隐式类型转换" aria-hidden="true">#</a> 自动类型转换（隐式类型转换）</h3><p>有多种类型的数据混合运算时，系统首先自动的将所有数据转换成容量最大的那一种数据类型，然后进行计算</p><p>自动转换规则</p><pre><code>boolean类型不可以转换为其他的数据类型
整型、字符型、浮点型的数据在混合运算中相互转换，转换时遵守以下原则：
</code></pre><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>byte、short、char之间不会相互转换，他们三者在计算时首先会转换为int类型 示例 TestConvert.java</p><h3 id="强制类型转换-显示类型转换" tabindex="-1"><a class="header-anchor" href="#强制类型转换-显示类型转换" aria-hidden="true">#</a> 强制类型转换（显示类型转换）</h3><p>容量大的数据类型转换为容量小的数据类型时，需要使用强制类型转换，其格式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>变量 = (目标类型) 值
例如： byte  a;
int b;
a = (byte) b;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在强制类型转换过程中，源类型的值可能大于目标类型，因此可能造成精度降低或溢出，使用时需注意 示例 TestConvert.java</p><h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2><h3 id="运算符-操作符" tabindex="-1"><a class="header-anchor" href="#运算符-操作符" aria-hidden="true">#</a> 运算符（操作符）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>是一种特殊的符号，用以表示数据的运算、赋值和比较
运算符的种类：
算术运算符： +、﹣、*、/、%、++、 --
赋值运算符：=、+=、﹣=、*=、/=、%=
比较运算符：&gt;、&lt;、&gt;=、 &lt;=、= =、!=、instanceof
逻辑运算符：!、&amp;&amp;、||
位运算符： &amp;、|、^ 、 ~、&gt;&gt;、&lt;&lt;、&gt;&gt;&gt;
 条件运算符： ?：
                条件运算符很独特，因为它是用三个操作数组成表达式的三元运算
                符。它可以替代某种类型的 if-else 语句	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符" aria-hidden="true">#</a> 算术运算符</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>符号	含义	备注
+	加法	
-	减法	
*	乘法	
/	除法	若是两个整数相除，只保留整数部分；
%	取余	被模数为正数结果都为正，被模数为负数结果都为负
++	自增	++变量名：变量在参与其他操作前先将自己加1
                变量名++：先用原来的值参与其他操作后，再将自己加1
--	自减	算法同++
+	字符串连接	当操作数中只要有一个是String类型，系统会自动将另一个
操作数转换成字符串类型，然后进行连接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自增运算" tabindex="-1"><a class="header-anchor" href="#自增运算" aria-hidden="true">#</a> 自增运算: ++, --</h4><pre><code>i++, 后++, 先将i的值作为整个表达的值, 然后将i增加1.
++i, 先++, 先将i增加1, 然后将i的值作为整个表达的值.
如: 
int a = 1; int b=1;
b = a++;// 
1 a++表达式的值是1
2 执行a=a+1
3 执行赋值运算, 将表达式的值1赋值给b, 即b=1
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Demo {
  public static void main(String[] args) {
    int i=0;
    int a = i++;
    System.out.println(a + &quot;, &quot; + i);//0,1
    a = ++i;
    System.out.println(a + &quot;, &quot; + i);//2,2
    i=i++;
    //int b = i++;
    //i = b;
    System.out.println(i);//2
    
    i = 0;
    System.out.println(i++%3);//0
    System.out.println(i++%3);//1
    System.out.println(i++%3);//2
    System.out.println(i++%3);//0
    System.out.println(i++%3);//1
    System.out.println(i++%3);//2
    System.out.println(i++%3);//0
    
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="☻-练习-testmod-java" tabindex="-1"><a class="header-anchor" href="#☻-练习-testmod-java" aria-hidden="true">#</a> ☻ 练习 TestMod.java</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1:
 5%3
-5%3
-5%-3
 5%-3

 5%3   // 结果为2
-5%3   //结果为-2
-5%-3  //结果为-2
 5%-3  //结果为2
2:
5/2   
5.0/2

5/2   // 结果为2
5.0/2   //结果为2.5

3:
int a = 1;
System.out.println(a++);
int b = a;
System.out.println(b);
int c = 5;
System.out.println(--c);
int d = c;
System.out.println(d);

int a = 1;
System.out.println(a++);  //输出为1
int b = a;
System.out.println(b);  //输出为2
int c = 5;
System.out.println(--c);  //输出为4
int d = c;
System.out.println(d);  //输出为4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>符号	含义	备注
=	x=y;	把变量y的值赋给x
+=	x+=y;	x=x+y;
-=	x-=y;	x=x-y;
*=	x*=y;	x=x*y;
/=	x/=y;	x=x/y;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系运算符-比较运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符-比较运算符" aria-hidden="true">#</a> 关系运算符（比较运算符）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>符号	含义	备注
==	相等于	注意不要误写成 “ = ” 
!=	不等于	
&lt;	小于	
&gt;	大于	
&lt;=	小于等于（不大于）	
&gt;=	大于等于（不小于）	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑运算符-布尔运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符-布尔运算符" aria-hidden="true">#</a> 逻辑运算符（布尔运算符）</h3><p>逻辑运算符两端的操作数必须是布尔类型的值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>符号	含义	备注
&amp;&amp;	逻辑与	相当于“且”，如果用&amp;&amp;连接表达式时，
                 如果左面的表达式为false，
                 则将不会    计算其右边的表达式
||	逻辑或	相当于“或”，如果左面的表达式为true，
                  则将不会计算其右边的表达式
!	逻辑非	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="位运算-只对byte、short、char、int、long有效" tabindex="-1"><a class="header-anchor" href="#位运算-只对byte、short、char、int、long有效" aria-hidden="true">#</a> 位运算(只对byte、short、char、int、long有效)</h3><p>左移和右移运算相当于实现整数乘以或除以2的n次方</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>符号	含义	备注
&amp;	按位“与”	只有参加运算的两位都为1，&amp;运算的结果才为1，否则为0
|	按位“或”	只有参加运算的两位都为0，|运算的结果才为0，否则为1
^	异或	只有参加运算的两位不同，^运算的结果才为1，否则为0
&lt;&lt;	左移	a&lt;&lt;b,将a的二进制数据左移b位，右边移空的部分补0
&gt;&gt;	右移	a&gt;&gt;b,将a的二进制数据右移b位，如果最高位是0，则左边移空的部分
补0，如果最高位是1，则左边移空的部分补1
&gt;&gt;&gt;	无符号右移	不管最高位是0或1，左边移空部分都补0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑与或同按位与或是有一定区别的" tabindex="-1"><a class="header-anchor" href="#逻辑与或同按位与或是有一定区别的" aria-hidden="true">#</a> 逻辑与或同按位与或是有一定区别的：</h3><pre><code>相同点是：都能参与逻辑运算，按位与或完全可以代替逻辑与或；
区别是：按位与或可以参与位运算，逻辑与或只能参与逻辑运算，逻辑与或可以“短路”，按位与或不能“短路”。
</code></pre><h3 id="短路运算" tabindex="-1"><a class="header-anchor" href="#短路运算" aria-hidden="true">#</a> 短路运算</h3><pre><code>作用运算符：逻辑与&amp;&amp;，逻辑或||
如（1）：逻辑表达式：a&gt;b &amp;&amp; c&gt;d
                假设a&gt;b 为false，c&gt;d为true，那么整个表达式结果为false;
                假设a&gt;b 为false，c&gt;d为false，那么整个表达式结果还为false;
                可见，a&gt;b的结果已经决定了整个表达式的结果，而后面的c&gt;d并不
               影响表达式的结果，可以说后半部分被“短路”了。
如（2）：逻辑表达式： a&gt;b || c&gt;d
                假设a&gt;b 为true，那么后半部分表达式将被“短路”;
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class LogicDemo {
  public static void main(String[] args) {
    int i = 1;
    boolean b = i!=1 &amp;&amp; (i++)==2;//短路与, i++不执行
    System.out.println(b);//false
    System.out.println(i);//1
    b = i!=1 &amp; (i++)==2; //非短路运算, i++执行
    System.out.println(b);//false
    System.out.println(i);//2
    b = i==2 || (i++)==2;//短路或. i++不执行
    System.out.println(b);//true
    System.out.println(i);//2
    //自己演示非短路 &quot;|&quot;...
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="练习-testand-java" tabindex="-1"><a class="header-anchor" href="#练习-testand-java" aria-hidden="true">#</a> 练习 TestAnd.java</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int x = 2;
int y = 1;
boolean z = (x!=2 &amp;&amp; y==y++);
System.out.println(z);
System.out.println(&quot;y=&quot;+y);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三元运算符" tabindex="-1"><a class="header-anchor" href="#三元运算符" aria-hidden="true">#</a> 三元运算符</h3><p>所谓三元运算符，是对三个表达式进行的集中比较，表达式1的结果为true时，就为第二个表达式，如果为false时，就为第三个表达式。语法是： 表达式1？表达式2：表达式3 通过下面代码说明三元运算符。</p><pre><code>public class HelloWorld13
{
	public static void main(String args[])
	{	
		//4 &lt; 3表达式的结果为true和false的其中一个。
		boolean n = (4 &lt; 3) ? true : false;
		//打印并显示结果
		System.out.println(n);
	}
}
</code></pre><h3 id="运算符的优先级" tabindex="-1"><a class="header-anchor" href="#运算符的优先级" aria-hidden="true">#</a> 运算符的优先级</h3><p>按操作数多少划分 一元操作符 &gt; 二元操作符 &gt; 三元操作符</p><p>按运算类型划分 算术运算符 &gt; 关系运算符 &gt; 逻辑运算符 &gt; 赋值运算符</p><p>尽量多的使用括号 括号优先级别最高</p><p>表达式通常由多个运算符组成。优先级的规则决定每个运算符在任何给定表达式中的计算顺序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>顺序	运算符
1.	括号
2. 	一元运算符，如 -、++、- -和 ! 
3. 	算术运算符，如 *、/、%、+ 和 -
4. 	关系运算符，如 &gt;、&gt;=、&lt;、&lt;=、== 和 != 
5. 	逻辑运算符，如 &amp;、^、|、&amp;&amp;、|| 
6.	条件运算符和赋值运算符，如 ? ：、=、*=、/=、+= 和 -= 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表达式" tabindex="-1"><a class="header-anchor" href="#表达式" aria-hidden="true">#</a> 表达式</h2><h3 id="表达式-1" tabindex="-1"><a class="header-anchor" href="#表达式-1" aria-hidden="true">#</a> 表达式</h3><pre><code>表达式是符合一定语法规则的运算符和运算数的序列。
算术表达式
(x+y-12)*100
关系表达式
x&gt;y  x&gt;=y  x!=y  x==y
逻辑表达式
x&amp;&amp;y  x||y||z  (!x)&amp;&amp;(!y)
赋值表达式
x=y x+=y
</code></pre><h3 id="表达式的值和类型" tabindex="-1"><a class="header-anchor" href="#表达式的值和类型" aria-hidden="true">#</a> 表达式的值和类型</h3><pre><code>对表达式中操作数进行运算得到的结果称为表达式的值
表达式值的数据类型即为表达式的类型
</code></pre><h3 id="表达式的运算顺序" tabindex="-1"><a class="header-anchor" href="#表达式的运算顺序" aria-hidden="true">#</a> 表达式的运算顺序</h3><pre><code>应按照运算符的优先级从高到低的顺序进行
优先级相同的运算符按照事先约定的结合方向进行
</code></pre><h3 id="表达式的结合方向和优先级-★" tabindex="-1"><a class="header-anchor" href="#表达式的结合方向和优先级-★" aria-hidden="true">#</a> 表达式的结合方向和优先级 ★</h3><figure><img src="https://upload-images.jianshu.io/upload_images/5227364-80cb4dd89efecb2c.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="☻-练习-3" tabindex="-1"><a class="header-anchor" href="#☻-练习-3" aria-hidden="true">#</a> ☻ 练习</h3><p>设 x = 1 , y = 2 , z = 3，则表达式  y＋＝z－－/＋＋x  的值是(      )。      A.    3                        B.    3. 5      C.    4                        D.    5 答案：A</p><p>设 x = 2 ，则表达式 x + +／3 的值是____ 答案：0</p><p>若x = 5，y = 10，则x &lt; y和x &gt;= y的逻辑值分别为____ 和 _____ 。 答案：true false</p><h2 id="本章重点总结" tabindex="-1"><a class="header-anchor" href="#本章重点总结" aria-hidden="true">#</a> 本章重点总结</h2><h3 id="变量的声明和使用" tabindex="-1"><a class="header-anchor" href="#变量的声明和使用" aria-hidden="true">#</a> 变量的声明和使用</h3><h3 id="java中的数据类型及转换" tabindex="-1"><a class="header-anchor" href="#java中的数据类型及转换" aria-hidden="true">#</a> Java中的数据类型及转换</h3><pre><code>基本数据类型：8种，所占存储空间及表示范围
引用类型
数据类型的转换
</code></pre><h3 id="java中的运算符" tabindex="-1"><a class="header-anchor" href="#java中的运算符" aria-hidden="true">#</a> Java中的运算符</h3><pre><code>运算符的分类
运算符的优先级
</code></pre><h3 id="表达式-2" tabindex="-1"><a class="header-anchor" href="#表达式-2" aria-hidden="true">#</a> 表达式</h3><pre><code>表达式的类型和值
表达式的运算顺序 
</code></pre><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2><ol><li>已知a,b均是整型变量，写出将a,b两个变量中的值互换的程序。（知识点：变量和运算符综合应用） [必做题]</li><li>给定一个0～1000的整数，求各位数的和，例如345的结果是3+4+5＝12注：分解数字既可以先除后模也可以先模后除（知识点：变量和运算符综合应用） [必做题]</li><li>华氏温度和摄氏温度互相转换，从华氏度变成摄氏度你只要减去32，乘以5再除以9就行了，将摄氏度转成华氏度，直接乘以9，除以5，再加上32即行。[选做题]</li><li>给定一个任意的大写字母A~Z，转换为小写字母。 （知识点：变量和运算符） [选做题]</li></ol><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,149);function p(g,x){return i(),n("div",null,[a(" more "),o])}const _=e(m,[["render",p],["__file","java7.html.vue"]]);export{_ as default};
