import{_ as d,X as l,Y as s,a1 as a,Z as i,$ as n,a2 as e,a0 as v,F as r}from"./framework-68dd73a2.js";const u={},c={id:"_87-java逻辑与运算符-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_87-java逻辑与运算符-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--87-Java-jx3kp564aj6ah87lwvam7b.md",target:"_blank",rel:"noopener noreferrer"},o=v(`<ul><li><p>运算符（操作符）</p><ul><li><p>是一种特殊的符号，用以表示数据的运算、赋值和比较</p></li><li><p>运算符的种类：</p><ul><li><p>算术运算符： +、﹣、*、/、%、++、 --</p></li><li><p>赋值运算符：=、+=、﹣=、*=、/=、%=</p></li><li><p>比较运算符：&gt;、&lt;、&gt;=、 &lt;=、= =、!=、instanceof</p></li><li><p>逻辑运算符：!、&amp;&amp;、||</p></li><li><p>位运算符： &amp;、|、^ 、 ~、&gt;&gt;、&lt;&lt;、&gt;&gt;&gt;</p></li><li><p>条件运算符： ?：条件运算符很独特，因为它是用三个操作数组成表达式的三元运算符。它可以替代某种类型的 if-else 语句</p></li></ul></li></ul></li><li><p>算术运算符</p></li></ul><table><thead><tr><th>符号</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>+</td><td>加法</td><td></td></tr><tr><td>-</td><td>减法</td><td></td></tr><tr><td>*</td><td>乘法</td><td></td></tr><tr><td>/</td><td>除法</td><td>若是两个整数相除，只保留整数部分；</td></tr><tr><td>%</td><td>取余</td><td>被模数为正数结果都为正，被模数为负数结果都为负</td></tr><tr><td>++</td><td>自增</td><td>++变量名：变量在参与其他操作前先将自己加1变量名++：先用原来的值参与其他操作后，再将自己加1</td></tr><tr><td>--</td><td>自减</td><td>算法同++</td></tr><tr><td>+</td><td>字符串连接</td><td>当操作数中只要有一个是String类型，系统会自动将另一个操作数转换成字符串类型，然后进行连接</td></tr></tbody></table><ul><li><p>算术运算符</p><ul><li><p>自增运算: ++, --</p><ul><li><p>i++, 后++, 先将i的值作为整个表达的值, 然后将i增加1.</p></li><li><p>++i, 先++, 先将i增加1, 然后将i的值作为整个表达的值.</p></li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如: 
int a = 1; int b=1;
b = a++;// 
1 a++表达式的值是1
2 执行a=a+1
3 执行赋值运算, 将表达式的值1赋值给b, 即b=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋值运算符</li></ul><table><thead><tr><th>符号</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>=</td><td>x=y;</td><td>把变量y的值赋给x</td></tr><tr><td>+=</td><td>x+=y;</td><td>x=x+y;</td></tr><tr><td>-=</td><td>x-=y;</td><td>x=x-y;</td></tr><tr><td>*=</td><td>x*=y;</td><td>x=x*y;</td></tr><tr><td>/=</td><td>x/=y;</td><td>x=x/y;</td></tr></tbody></table><ul><li>关系运算符（比较运算符）</li></ul><table><thead><tr><th>符号</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>==</td><td>相等于</td><td>注意不要误写成 “ = ”</td></tr><tr><td>!=</td><td>不等于</td><td></td></tr><tr><td>&lt;</td><td>小于</td><td></td></tr><tr><td>&gt;</td><td>大于</td><td></td></tr><tr><td>&lt;=</td><td>小于等于（不大于）</td><td></td></tr><tr><td>&gt;=</td><td>大于等于（不小于）</td><td></td></tr></tbody></table><ul><li><p>逻辑运算符（布尔运算符）</p><ul><li>逻辑运算符两端的操作数必须是布尔类型的值</li></ul></li></ul><table><thead><tr><th>符号</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>&amp;&amp;</td><td>逻辑与</td><td>相当于“且”，如果用&amp;&amp;连接表达式时，如果左面的表达式为false，则将不会计算其右边的表达式</td></tr><tr><td>||</td><td>逻辑或</td><td>相当于“或”，如果左面的表达式为true，则将不会计算其右边的表达式</td></tr><tr><td>!</td><td>逻辑非</td><td></td></tr></tbody></table><ul><li>位运算(只对byte、short、char、int、long有效) <ul><li>左移和右移运算相当于实现整数乘以或除以2的n次方</li></ul></li></ul><table><thead><tr><th>符号</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>&amp;</td><td>按位“与”</td><td>只有参加运算的两位都为1，&amp;运算的结果才为1，否则为0</td></tr><tr><td>|</td><td>按位“或”</td><td>只有参加运算的两位都为0，</td></tr><tr><td>^</td><td>异或</td><td>只有参加运算的两位不同，^运算的结果才为1，否则为0</td></tr><tr><td>&lt;&lt;</td><td>左移</td><td>a&lt;&lt;b,将a的二进制数据左移b位，右边移空的部分补0</td></tr><tr><td>&gt;&gt;</td><td>右移</td><td>a&gt;&gt;b,将a的二进制数据右移b位，如果最高位是0，则左边移空的部分补0，如果最高位是1，则左边移空的部分补1</td></tr><tr><td>&gt;&gt;&gt;</td><td>无符号右移</td><td>不管最高位是0或1，左边移空部分都补0</td></tr></tbody></table><ul><li><p>逻辑与或同按位与或是有一定区别的：</p><ul><li><p>相同点是：都能参与逻辑运算，按位与或完全可以代替逻辑与或；</p></li><li><p>区别是：按位与或可以参与位运算，逻辑与或只能参与逻辑运算，逻辑与或可以“短路”，按位与或不能“短路”。</p></li></ul></li><li><p>短路运算</p><ul><li>作用运算符：逻辑与&amp;&amp;，逻辑或||</li></ul></li></ul><p>如（1）：逻辑表达式：a&gt;b &amp;&amp; c&gt;d 假设a&gt;b 为false，c&gt;d为true，那么整个表达式结果为false; 假设a&gt;b 为false，c&gt;d为false，那么整个表达式结果还为false; 可见，a&gt;b的结果已经决定了整个表达式的结果，而后面的c&gt;d并不影响表达式的结果，可以说后半部分被“短路”了。 如（2）：逻辑表达式： a&gt;b || c&gt;d 假设a&gt;b 为true，那么后半部分表达式将被“短路”</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class LogicDemo {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>三元运算符</p><ul><li><p>所谓三元运算符，是对三个表达式进行的集中比较，表达式1的结果为true时，就为第二个表达式，如果为false时，就为第三个表达式。语法是：</p></li><li><p>表达式1？表达式2：表达式3</p></li><li><p>通过下面代码说明三元运算符。</p></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class HelloWorld13
{
	public static void main(String args[])
	{	
		//4 &lt; 3表达式的结果为true和false的其中一个。
		boolean n = (4 &lt; 3) ? true : false;
		//打印并显示结果
		System.out.println(n);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>运算符的优先级</p><ul><li><p>按操作数多少划分</p><ul><li>一元操作符 &gt; 二元操作符 &gt; 三元操作符</li></ul></li><li><p>按运算类型划分</p><ul><li>算术运算符 &gt; 关系运算符 &gt; 逻辑运算符 &gt; 赋值运算符</li></ul></li><li><p>尽量多的使用括号</p><ul><li>括号优先级别最高</li></ul></li></ul></li></ul><p>表达式通常由多个运算符组成。优先级的规则决定每个运算符在任何给定表达式中的计算顺序</p><table><thead><tr><th>顺序</th><th>运算符</th></tr></thead><tbody><tr><td>1.</td><td>括号</td></tr><tr><td>2.</td><td>一元运算符，如 -、++、- -和 !</td></tr><tr><td>3.</td><td>算术运算符，如 *、/、%、+ 和 -</td></tr><tr><td>4.</td><td>关系运算符，如 &gt;、&gt;=、&lt;、&lt;=、== 和 !=</td></tr><tr><td>5.</td><td>逻辑运算符，如 &amp;、^、|、&amp;&amp;、||</td></tr><tr><td>6.</td><td>条件运算符和赋值运算符，如 ? ：、=、*=、/=、+= 和 -=</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test位运算符 {

	public static void main(String[] args) {

		/**
		 * 位运算符：&amp;、|、^、~、&gt;&gt;、&lt;&lt;、&gt;&gt;&gt;
		 */
		
		// &amp;：逻辑与运算符（只有参加运算的两位都为1，&amp;运算的结果才为1，否则为0）
		
		int a = 3;
		int b = 2;
		//1.把a和b转换成二进制;
		//a: 11
		//b: 10
		//a&amp;b:10
		System.out.println(a &amp; b);//2
		
		int c = 4;//100
		int d = 6;//110
		System.out.println(c &amp; d);//4
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//|:逻辑或运算符（只有参加运算的两位都为0，|运算的结果才为0，否则为1)
	int e = 5;//101
	int f = 7;//111
				//111
	System.out.println(e|f);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
* ^异或运算符
* 只有参加运算的两位不同，^运算的结果才为1，否则为0
*/
int g = 4;//0100
int h = 8;//1000
		  //1100
System.out.println(g^h);//12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int p = 36;
int k = 2;
/**
* p &gt;&gt; 2:右移缩小，移多少位，就除以2的多少次幂
* 36：  0010 0100
* &gt;&gt;2:      1001
*/
/**
* k&lt;&lt;3：左移扩大，移多少位，就乘以2的多少次幂
* 2:   0000 0010
* &lt;&lt;3: 0001 0000
*/
System.out.println(p &gt;&gt; 2);//36/2的2次幂=36/4=9
System.out.println(k &lt;&lt; 3);//2*2的3次幂=2*8=16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test算术运算符 {

	public static void main(String[] args) {

		//算术运算符： +、﹣、*、/、%、++、 --
		
		//单目运算符： ++ --
		
		int a = 10;
		
		a++;//让a自增 1
		
		System.out.println(&quot;a: &quot; + a);//11
		
		a--;
		
		System.out.println(&quot;a: &quot; + a);//10
		
		int b = a++;//自增有两种情况:一种是前自增(++a)，先加1，后赋值，一种是后自增(a++)，先赋值，后加1
		

		System.out.println(&quot;b: &quot; + b);//10
		
		int c = ++a;
		System.out.println(&quot;c: &quot;+c);//12
		
		int d = 100;
		int e = d--;
		
		System.out.println(&quot;e: &quot; + e);//e:100
		
		System.out.println(&quot;d: &quot; + d);//99
		
		int f = --d;
		System.out.println(&quot;d: &quot; + d);//98
		System.out.println(&quot;f: &quot; + f);//98
		
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int p = 100;
int h = 20;
System.out.println(p + h);//120
System.out.println(p - h);//80
System.out.println(p * h);//5
System.out.println(p / h);//2000
System.out.println(p % h);//0

int k = 12345;
//需求：如何求出k数字各个数位上数字的和？
//k%10000 = 2345
//k/10000 = 1
int k_w = k/10000;
int k_k = k % 10000 / 1000;
int k_b = k % 1000 / 100;
int k_s = k % 100 / 10;
int k_g = k % 10;

System.out.println(k_w + k_k + k_b + k_s + k_g);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test赋值运算符 {

	public static void main(String[] args) {
     
		//赋值运算符：=、+=、﹣=、*=、/=、%=
		int a = 2;
		int b = 1;
		b += a;//给b重新赋值 b = b+a;
		int c = 2;
		c -= a;//c = c-a
		int d = 3;
		d *= a;//d = d*a
		int e = 4;
		e /= a;//e = e/a
		int f = 10;
		f %= a;//f = f%a
		
		/**
		 * 注意：以后这种写法比较多： b += a; 这种写法比较少 b = b + a;
		 * 原因：计算机执行第一种写法速度快;
		 */
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test比较运算符 {

	public static void main(String[] args) {

		//比较运算符：&gt;、&lt;、&gt;=、 &lt;=、= =、!=、instanceof
		
		//为了控制程序的运行，在代码中经常使用比较运算符

		int rows = 2;
		
		if(rows == 2) {
			System.out.println(&quot;支付成功&quot;);
		}else {
			System.out.println(&quot;支付失败&quot;);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="instanceof运算符" tabindex="-1"><a class="header-anchor" href="#instanceof运算符" aria-hidden="true">#</a> instanceof运算符</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

/**
 * 动物类
* &lt;p&gt;Title: Animal&lt;/p&gt;  
* &lt;p&gt;Description: &lt;/p&gt;  
* @author xianxian 
* @date 2019年7月2日
 */
public class Animal {

	//这是一个构造方法
	public Animal()
	{
		
	}
	
	private int age;
	private String name;
	private double weight;
	private String color;
	//....
	public void walk()
	{
		System.out.println(name + &quot;is walking&quot;);
	}
	
	public void sleep()
	{
		System.out.println(name + &quot;is sleeping&quot;);
	}
	
	public void eat()
	{
		System.out.println(name + &quot;is eating&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test比较运算符 {

	public static void main(String[] args) {
		//instanceof：判断某个对象是否是某个类的实例
		//new Test比较运算符();//当前类实例化
		//实例化一个对象
		Animal cat = new Animal();//Animal()这是一个构造方法，
		//只要是new的对象都在堆区，只要是声明一个变量就一定在栈区
		System.out.println(cat instanceof Animal);//cat这个变量是Animal类型的一个对象吗？---&gt; true
		//System.out.println(cat instanceof Student);//因为不是Student类型的对象，所以代码根本不给 过
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>逻辑运算符</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test逻辑运算符 {

	public static void main(String[] args) {

		// ！ &amp;&amp; ||
		// !:该操作符后面跟的是boolean类型的数据，对该数据取反
		boolean result = false;
		int a = 1;
		if(!result)
		{
			System.out.println(&quot;1&quot;);
		}else {
			System.out.println(&quot;2&quot;);
		}
		
		//&amp;&amp;：并且的意思 ，只有两个表达式都为真，才返回真
		
		int money = 200000;
		boolean haveHouse = true;
		if(haveHouse &amp;&amp; money &gt; 100000) {
			System.out.println(&quot;同意结婚&quot;);
		}else {
			System.out.println(&quot;不同意结婚&quot;);
		}
		
	
		//||:或者的意思，两个表达式有一个为真那么就返回真
		//这个女孩子特别贤惠：有房子可以结婚，有一点钱也可以结婚
		if(haveHouse || (money &gt; 10000)) {
			System.out.println(&quot;同意结婚&quot;);
		}else {
			System.out.println(&quot;不同意结婚&quot;);
		}
		
		
		int y = 100;
		int x = 200;
		
		if((y++ &gt; 1) || (x++ &gt; 200)) {
			System.out.println(&quot;大于200&quot;);
		}else {
			System.out.println(&quot;没有大于200&quot;);
		}
		
		System.out.println(&quot;x: &quot; + x);
		/*
		 * &amp;&amp; || 都是短路运算符
		 * 相当于“且”，如果用&amp;&amp;连接表达式时，如果左面的表达式为false，则将不会计算其右边的表达式
		 * 相当于“或”，如果左面的表达式为true，则将不会计算其右边的表达式
		 */
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>三元运算符</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test三元运算符 {

	public static void main(String[] args) {

		//需求：服务器代码接收性别是男，希望转换成数字1，接收性别是女，希望转换成数字0
		
		String sex = &quot;男&quot;;
		
		int s = 0;//把s变量初始化为0，不是最终结果
		
		if(sex.equals(&quot;男&quot;)) {
			s = 1;
		}else {
			s = 0;
		}
		System.out.println(&quot;性别： &quot; + s);
		
		//那个需求有没有更好的实现方式呢？
		/**
		 * 三元表达式：
		 * 1、语法：表达式一？表达式一：表达式三
		 * 2、替换if--else语句
		 * 3、常用来做赋值操作
		 */
		int result = sex.equals(&quot;男&quot;) ? 1 : 0;
		System.out.println(&quot;性别： &quot; + result);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h5>`,36),p={href:"https://baike.baidu.com/item/HTTP%E7%8A%B6%E6%80%81%E7%A0%81/5053660?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.runoob.com/http/http-status-codes.html",target:"_blank",rel:"noopener noreferrer"},h=i("em",null,"Java逻辑与运算符",-1),x={href:"https://github.com/javaobjects/demo59_2",target:"_blank",rel:"noopener noreferrer"},y=i("hr",null,null,-1),_=i("h3",{id:"分割线",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),S=i("hr",null,null,-1),f=i("p",null,[i("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function q(k,T){const t=r("ExternalLinkIcon");return l(),s("div",null,[a(" more "),i("h1",c,[m,n(),i("a",b,[n("87-Java逻辑与运算符.md"),e(t)])]),o,i("p",null,[i("a",p,[n("HTTP状态码-百度百科"),e(t)])]),i("p",null,[i("a",g,[n("HTTP状态码-菜鸟教程"),e(t)])]),i("p",null,[i("strong",null,[n("以上就是我关于 "),h,n(" 知识点的整理与总结的全部内容，"),i("a",x,[n("另附源码"),e(t)])])]),y,_,S,f])}const A=d(u,[["render",q],["__file","87-Java逻辑与运算符.html.vue"]]);export{A as default};
