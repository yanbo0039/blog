import{_ as e,X as i,Y as a,a1 as n,a0 as s}from"./framework-68dd73a2.js";const d="/blog/assets/Java_4_1.png",r="/blog/assets/Java_4_2.png",l="/blog/assets/Java_4_3.png",t="/blog/assets/Java_4_4.png",c="/blog/assets/Java_4_5.png",v="/blog/assets/Java_4_6.png",u="/blog/assets/Java_4_7.png",o="/blog/assets/Java_4_8.png",h="/blog/assets/Java_4_9.png",m="/blog/assets/Java_4_10.png",b={},x=s('<h1 id="java基础应用编程——-流程控制语句" tabindex="-1"><a class="header-anchor" href="#java基础应用编程——-流程控制语句" aria-hidden="true">#</a> Java基础应用编程—— 流程控制语句</h1><h2 id="本章内容" tabindex="-1"><a class="header-anchor" href="#本章内容" aria-hidden="true">#</a> 本章内容</h2><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h2><h3 id="if语句-单一条件" tabindex="-1"><a class="header-anchor" href="#if语句-单一条件" aria-hidden="true">#</a> if语句 (单一条件)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (表达式)
{
    执行语句块
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行流程" tabindex="-1"><a class="header-anchor" href="#执行流程" aria-hidden="true">#</a> 执行流程</h3><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句" aria-hidden="true">#</a> if语句</h3><p>条件表达式可以是任何一种逻辑表达式 如果表达式值为true，则执行花括号的内容后，再执行后面的语句 如果表达的值为false，则直接执行后面的语句 如果，大括号号中，只有一条语句，则可以省略大括号（推荐不省略）</p><h3 id="☻-练习-if-exercise-java" tabindex="-1"><a class="header-anchor" href="#☻-练习-if-exercise-java" aria-hidden="true">#</a> ☻ 练习 If_exercise.java</h3><p>编写java程序，完成以下功能： 假设有整型变量x，判断x是否为偶数，若为偶数，则在控制台上打印“输入的数值是偶数”。 无论x是否为偶数，最后都要在控制台上输出x的值</p><h3 id="if语句-二选一" tabindex="-1"><a class="header-anchor" href="#if语句-二选一" aria-hidden="true">#</a> if语句(二选一)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (表达式)
{
    执行语句块1
}
else
{
    执行语句块2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="变量-布尔表达式-语句1-语句2" tabindex="-1"><a class="header-anchor" href="#变量-布尔表达式-语句1-语句2" aria-hidden="true">#</a> 变量 = 布尔表达式 ? 语句1:语句2</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果布尔表达式的值为true，则执行语句1
如果布尔表达式的值为false，则执行语句2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="if语句-1" tabindex="-1"><a class="header-anchor" href="#if语句-1" aria-hidden="true">#</a> if语句</h3><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="☻-练习-ifelse-exercise-java" tabindex="-1"><a class="header-anchor" href="#☻-练习-ifelse-exercise-java" aria-hidden="true">#</a> ☻ 练习 IfElse_exercise.java</h3><p>有两个整型变量x，y，请在控制台上输出x与y中值较大的那个数。</p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int x = 88;
if(x&lt;60){
    System.out.println(“成绩不合格”);
}
else if(x&gt;=85){
    System.out.println(“成绩优秀”);
}
else{
     System.out.println(“成级良好”);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件语句-1" tabindex="-1"><a class="header-anchor" href="#条件语句-1" aria-hidden="true">#</a> 条件语句</h2><h3 id="switch语句" tabindex="-1"><a class="header-anchor" href="#switch语句" aria-hidden="true">#</a> switch语句</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch (表达式)
{
    case 取值1：语句块1
                       
    …
    case 取值n：语句块n
                          

    default:          语句块n+1
                          
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int n = 2;
int result;
switch(n+1)
{
case 1: System.out.println(“Block A”);
             result = n;
             break;
case 2:System.out.println(“Block B”);
             result = n*n;
             break;
case 3:System.out.println(“Block C”);
             result = n*n*n;
             break;
default: result = 0;
}
System.out.println(“result=“+result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 表达式的值只可以接受int、byte、char、short 、String型，不接受其他类型的值
不允许有重复的case取值
 switch一旦碰到第一次case匹配，程序就会跳转到这个标签位置，开始顺序执行以后所有的程序代码，而不管后面的case条件是否匹配，直到碰到break语句为止
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在jdk7中-在switch中可以使用string类型-注意比较是大小写敏感的。" tabindex="-1"><a class="header-anchor" href="#在jdk7中-在switch中可以使用string类型-注意比较是大小写敏感的。" aria-hidden="true">#</a> 在JDK7中，在switch中可以使用String类型，注意比较是大小写敏感的。</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String state = &quot;NEW&quot;;  
   
switch (state ) {  
   case &quot;NEW&quot;: System.out.println(&quot;Order is in NEW state&quot;); break;  
   case &quot;CANCELED&quot;: System.out.println(&quot;Order is Cancelled&quot;); break;  
   case &quot;REPLACE&quot;: System.out.println(&quot;Order is replaced successfully&quot;); break;  
   default: System.out.println(&quot;Invalid&quot;);  
 } 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int x = 2;
switch (x) {
case 1:
      System.out.println(&quot;Monday&quot;);
      break;
case 2:
      System.out.println(&quot;Tuesday&quot;);
      break;
case 3:
      System.out.println(&quot;Wednesday&quot;);
      break;
default:
      System.out.println(&quot;Sorry,I don&#39;t know&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="☻-练习-switch-exercise-java" tabindex="-1"><a class="header-anchor" href="#☻-练习-switch-exercise-java" aria-hidden="true">#</a> ☻ 练习 Switch_exercise.java</h3><p>仿照左侧示例完成如下练习：如果是星期五则在页面上显示“Finally Friday！”，如果是星期六则在页面上显示“Super Saturday！”，如果是星期日则在页面上显示“Sleepy Sunday！”，其他日子显示“I hope for my weekend！”（提示利用switch语句）</p><h2 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h2><h3 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环" aria-hidden="true">#</a> while循环</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>while (条件表达式)
{
       执行语句块
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行流程-1" tabindex="-1"><a class="header-anchor" href="#执行流程-1" aria-hidden="true">#</a> 执行流程</h3><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int x=1;
while(x&lt;3){
     System.out.println(&quot;x=&quot;+x);
     x++;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="☻-练习-while-exercise-java" tabindex="-1"><a class="header-anchor" href="#☻-练习-while-exercise-java" aria-hidden="true">#</a> ☻ 练习 While_exercise.java</h3><p>计算1+2+3+…+10的和（提示利用while语句）</p><h3 id="☻-练习-while-exercise2-java" tabindex="-1"><a class="header-anchor" href="#☻-练习-while-exercise2-java" aria-hidden="true">#</a> ☻ 练习 While_exercise2.java</h3><p>计算1+2+3+…+100的和（提示利用while语句）</p><h3 id="☻-练习-while-exercise3-java" tabindex="-1"><a class="header-anchor" href="#☻-练习-while-exercise3-java" aria-hidden="true">#</a> ☻ 练习 While_exercise3.java</h3><p>计算从1到100的所有奇数相加（提示利用while语句）</p><h3 id="do-while循环" tabindex="-1"><a class="header-anchor" href="#do-while循环" aria-hidden="true">#</a> do…while循环</h3><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="执行流程-2" tabindex="-1"><a class="header-anchor" href="#执行流程-2" aria-hidden="true">#</a> 执行流程</h3><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int x=3;
do{
     System.out.println(&quot;x=&quot;+x);
     x++;
} while(x&lt;3);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="☻-练习-dowhile-exercise-java" tabindex="-1"><a class="header-anchor" href="#☻-练习-dowhile-exercise-java" aria-hidden="true">#</a> ☻ 练习 DoWhile_exercise.java</h3><p>用do while 循环来改写1加到100</p><h3 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环" aria-hidden="true">#</a> for循环</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(初始化表达式；循环条件表达式；循环后的操作表达式)
{
         执行语句块
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例-for-sample-java" tabindex="-1"><a class="header-anchor" href="#示例-for-sample-java" aria-hidden="true">#</a> 示例 For_sample.java</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(int x=1;x&lt;3;x++){
       System.out.println(&quot;x=&quot;+x);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="☻-练习-for-exercise-java" tabindex="-1"><a class="header-anchor" href="#☻-练习-for-exercise-java" aria-hidden="true">#</a> ☻ 练习 For_exercise.java</h3><p>用for循环来改写1加到100</p><h3 id="☻-练习-for-exercise2-java" tabindex="-1"><a class="header-anchor" href="#☻-练习-for-exercise2-java" aria-hidden="true">#</a> ☻ 练习 For_exercise2.java</h3><p>用for循环改写从1到100的所有奇数相加的和</p><h3 id="死循环" tabindex="-1"><a class="header-anchor" href="#死循环" aria-hidden="true">#</a> 死循环</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
for(int x=1;;x++){
       System.out.println(&quot;x=&quot;+x);
}

while(true){
       System.out.println(&quot;x=&quot;+x);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环嵌套" tabindex="-1"><a class="header-anchor" href="#循环嵌套" aria-hidden="true">#</a> 循环嵌套</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Multiplicaiton {

public static void main(String[] args) {
for (int i = 1;  i &lt;= 9; i++){      
 for(int n = 1; n &lt;= i; n++){
 	System.out.print(n+&quot; x &quot;+i+&quot; = &quot;+n*i+&quot; &quot;);
}      
 System.out.println();  
}
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环的中断" tabindex="-1"><a class="header-anchor" href="#循环的中断" aria-hidden="true">#</a> 循环的中断</h3><p>在使用循环语句时， 只有循环条件表达式的 值为false时，才能结束 循环。有时，我们想提前 中断循环，要实现这一点， 只需要在循环语句块中 添加break或continue语句</p><p>break语句用于终止某个语句块的执行。用在循环语句体中，可以强行退出循环。 “break;”语句：可以出现在while、do…while、for、switch语句体中。 “break label”语句 ：可以出现在任何语句体中。</p><h3 id="示例-break-sample-java" tabindex="-1"><a class="header-anchor" href="#示例-break-sample-java" aria-hidden="true">#</a> 示例 Break_Sample.java</h3><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Test {
    public static void main(String[] args) {
         outer: for (int i = 0; i &lt; 10; i++) {
             System.out.println(&quot;Outer loop&quot;);

             inner: while (true) {
                  Scanner sc = new Scanner(System.in);
                  String s = sc.next();
                  System.out.println(&quot;inner Loop:&quot; + s);
                  if (s.equals(&quot;hello&quot;))
                       break inner;
                  if (s.equals(&quot;kitty&quot;))
                       break outer;
            }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>continue语句用在循环语句体中，用于终止某次循环过程，跳过循环体中continue语句下未执行的循环，开始下一次循环过程 “continue;” 语句：只能出现在循环语句while、do…while、for中</p><h3 id="示例-continue-sample-java" tabindex="-1"><a class="header-anchor" href="#示例-continue-sample-java" aria-hidden="true">#</a> 示例 Continue_Sample.java</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for(int i=1;i&lt;50;i++) {
    if((i%2)==0){
         continue;
    }  
    System.out.print(i+&quot; &quot;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本章重点总结" tabindex="-1"><a class="header-anchor" href="#本章重点总结" aria-hidden="true">#</a> 本章重点总结</h2><h3 id="条件语句-2" tabindex="-1"><a class="header-anchor" href="#条件语句-2" aria-hidden="true">#</a> 条件语句</h3><p>if if…else… switch</p><h3 id="循环控制语句" tabindex="-1"><a class="header-anchor" href="#循环控制语句" aria-hidden="true">#</a> 循环控制语句</h3><p>for while do…while break、continue</p><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业" aria-hidden="true">#</a> 课后作业</h2><p>1、企业发放的奖金根据利润提成。利润低于或等于10万元时，奖金可提10%；利润高于10万元，低于或等于20万元时，高于10万元的部分，可提成7.5%；高于20万，低于或等于40万时，高于20万元的部分，可提成5%；高于40万，低于或等于60万时，高于40万元的部分，可提成3%；高于60万，低于或等于100万时，高于60万元的部分，可提成1.5%，高于100万元时，超过100万元的部分按1%提成，在程序中设定一个变量为当月利润，求应发放奖金总数？（知识点：条件语句） [必做题]</p><p>2、给定一个成绩a，使用switch结构求出a的等级。A：90-100，B：80-89，C：70-79，D：60-69，E：0~59（知识点：条件语句switch） [必做题]</p><p>3、假设某员工今年的年薪是30000元，年薪的年增长率6%。编写一个Java应用程序计算该员工10年后的年薪，并统计未来10年（从今年算起）总收入。（知识点：循环语句for）[选做题]</p><p>4、猴子第一天摘下若干个桃子，当即吃了一半，还不瘾，又多吃了一个，第二天早上又将剩下的桃子吃掉一半，又多吃了一个。以后每天早上都吃了前一天剩下的一半零一个。到第10天早上想再吃时，见只剩下一个桃子了。求第一天共摘了多少。（知识点：循环语句 while）[选做题]</p><p>5、输入一个数字，判断是一个奇数还是偶数（知识点：条件语句） [必做题] 6、编写程序， 判断一个变量x的值，如果是1，输出x=1，如果是5，输出x=5，如果是 10，输出x=10，除了以上几个值，都输出x=none。（知识点：条件语句） [必做题] 7、判断一个数字是否能被5和6同时整除（打印能被5和6整除），或只能被5整除（打印能被5整除），或只能被6整除，（打印能被6整除），不能被5或6整除，（打印不能被5或6整除）（知识点：条件语句） [必做题]</p><p>8、输入一个年份，判断这个年份是否是闰年（知识点：条件、循环语句） [必做题] 9、输入一个0～100的分数，如果不是0～100之间，打印分数无效，根据分数等级打印A,B,C,D,E（知识点：条件语句if elseif） [必做题] 10、输入三个整数x,y,z，请把这三个数由小到大输出（知识点：条件语句） [必做题] 11、有一个不多于5位的正整数，求它是几位数，分别打印出每一位数字。（知识点：条件语句） [必做题]</p><p>12、编写一个程序，计算邮局汇款的汇费。如果汇款金额小于100元，汇费为一元，如果金额在100元与5000元之间，按1%收取汇费，如果金额大于5000元，汇费为50元。汇款金额由命令行输入。（知识点：条件语句） [选做题] 13、分别使用for循环，while循环，do循环求1到100之间所有能被3整除的整数的和。（知识点：循环语句） [选做题] 14、输出0-9之间的数，但是不包括5。 [选做题] 15、编写一个程序，求整数n的阶乘，例如5的阶乘是1<em>2</em>3<em>4</em>5 [选做题] 16、编写一个程序，找出大于200的最小的质数[选做题] 17、由命令行输入一个4位整数，求将该数反转以后的数，如原数为1234，反转后的数位4321 [选做题]</p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,91);function p(g,f){return i(),a("div",null,[n(" more "),x])}const w=e(b,[["render",p],["__file","index.html.vue"]]);export{w as default};
