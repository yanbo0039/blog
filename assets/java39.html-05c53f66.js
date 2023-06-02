import{_ as s,X as a,Y as d,a1 as r,Z as i,$ as e,a2 as t,a0 as l,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_39_1.png",o="/blog/assets/Java_39_2.png",u="/blog/assets/Java_39_3.png",b={},m=l(`<h1 id="java-习题测试-7-17" tabindex="-1"><a class="header-anchor" href="#java-习题测试-7-17" aria-hidden="true">#</a> Java-习题测试(7-17)</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li>题目：打印出所有的&quot;水仙花数&quot;，所谓&quot;水仙花数&quot;是指一个三位数， 其各位数字立方和等于该数本身。例如：153是一个&quot;水仙花数&quot;， 因为153=1的三次方＋5的三次方＋3的三次方。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Topic1 {
	/*
	 * 1、题目：打印出所有的&quot;水仙花数&quot;，所谓&quot;水仙花数&quot;是指一个三位数，
	 *  其各位数字立方和等于该数本身。例如：153是一个&quot;水仙花数&quot;，
	 * 因为153=1的三次方＋5的三次方＋3的三次方。
	 */
	public static void daffodilNumber() {
		for(int i = 100;i &lt; 999;i++) {
			/**
			 * 1、求得int i 的各个位数的数值
			 * 2、将其各个位数的值自相乘
			 * 3、将其自相乘的值相加
			 * 4、将其相加的值与其本身值相比较
			  *  若相等则打印输出 若不相等则不打印
			 * @param args
			 */
			int i_b = i/100,//i的百位数值
				i_s = i % 100 / 10,//i的十位数据
				i_g = i % 100 % 10;//i的个位数值
			if(i == i_b * i_b * i_b + i_s * i_s * i_s + i_g * i_g * i_g)
           {
				System.out.println(i);
			}
		}
	}
				
	public static void main(String[] args) {
		daffodilNumber();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>使用循环语句输出下面的图形。</li></ol><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><h1 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> #</h1><h1 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> # # #</h1><h1 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a> # # # # #</h1><h1 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-hidden="true">#</a> # # # # # # #</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Topic1 {	
//	2、使用循环语句输出下面的图形。
//	#
//	# # #
//	# # # # #
//	# # # # # # #
//	# # # # # # # # #

	public static void drawChar() {
		for(int i = 1;i &lt; 6;i++) {
			for(int j = 0;j &lt; i;j++) {
				System.out.print(&quot;# &quot;);//内层循环控制# 打印
			}
			System.out.println();//外层循环控制换行
		}
	}	
	public static void main(String[] args) {
		drawChar();//2
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>编程求 1~10000 之间的所有“完全数”，完全数是该数的所有因子之和等于该数的数。例如，6 的因子有 1、2、3，且 6=1+2+3，所以 6 是完全数。 <em><strong>注：网上有很多博客将内存循环的j&lt;i写成j&lt;i/2经本人测试是不能够得到正确值的</strong></em></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Topic1 {
	/*
	 * 3、编程求 1~10000 之间的所有“完全数”，完全数是该数的所有因子之和等于该数的数。
	 * 例如，6 的因子有 1、2、3，且 6=1+2+3，所以 6是完全数。
	 * 
	 */
	public static void perfectNumber() {
		for(int i = 1;i &lt;= 10000;i++) {//外层循环控制1-10000之间的所有数
			int sum = 0;//定义因子和的初始值  用来将因子相加
			for(int j = 1;j &lt; i;j++) {//内存循环控制比自己小的所有大于等于1的数值
				if(i % j == 0) {//将内存循环的数值求模 若模值为0则为因子
					sum += j;//将因子相加
				}
			}
			if(i == sum) {//若因子之和与其本身相等 则为 完全数
				System.out.println(i+&quot;   是完全数&quot;);
			}
		}
	}	
	public static void main(String[] args) {
		perfectNumber();//3
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>古典问题：有一对兔子，从出生后第3个月起每个月都生一对兔子，小兔子长到第三个月后每个月又生一对兔子，假如兔子都不死，问每个月的兔子对数为多少？</li></ol><p><strong><em>备注：此题 是一很经典的题目 涉及到的经典数学知识为斐波那契数列: F(1)=1，F(2)=1, F(n)=F(n-1)+F(n-2)（n&gt;=3，n∈N</em>）</strong>*</p><p>参考链接：</p>',19),p={href:"https://baike.baidu.com/item/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/ForeverLover/p/4863563.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://wenku.baidu.com/view/972ed71102d8ce2f0066f5335a8102d276a261eb.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.sunjs.com/article/detail/eba24965f41b46c49fdbffbadca3d289.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://wenku.baidu.com/view/ac0926690b4e767f5acfcec6.html",target:"_blank",rel:"noopener noreferrer"},x=l(`<ol start="5"><li>写出代码运行结果_______________</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	class Parent { 
		void printMe(){
			System.out.println(&quot;parent&quot;); 
		}
	 } 
	class Child extends Parent { 
		void printMe() {
			System.out.println(&quot;child&quot;);
		}
		void printAll(){
			super.printMe(); 
			this.printMe(); 
			printMe();
		} 
	}
	 public class T { 
		 public static void main(String args[]) {
			 Child myC = new Child(); myC.printAll(); 
			 }
	 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>关于类的叙述正确的是（）。</li></ol><p>A、在类中定义的变量称为类的成员变量，在别的类中可以直接使用</p><p>B、局部变量的作用范围仅仅在定义它的方法内，或者是在定义它的控制流块中</p><p>C、使用别的类的方法仅仅需要引用方法的名字即可</p><p>D、只要没有定义不带参数的构造函数，JVM都会为类生成一个默认构造函数</p><ol start="7"><li>在try的括号里面有return一个值，那在哪里执行finally里的代码？</li></ol><p>A、不执行finally代码</p><p>B、return前执行</p><p>C、return后执行 8. 设三个整型变量 x = 1 , y = 2 , z = 3，则表达式 y＋＝z－－/＋＋x 的值是( <strong>A</strong>)。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>y += z--/++x
y += 2/2
y = y + 2/2
y = 2 + 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A、3</p><p>B、3.5</p><p>C、4</p><p>D、5 9. 一个以“.java”为后缀的源文件（ ）。</p><p>A、只能包含一个public类，类名必须与文件名相同</p><p>B、只能包含与文件名相同的public类以及其中的内部类</p><p>C、只能有一个与文件名相同的public类，可以包含其他非public类（不考虑内部类）</p><p>D、可以包含任意public类</p><ol start="10"><li>下面哪个选项正确创建socket连接（ <strong>B</strong> ）？   A、Socket s = new Socket(8080);   B、Socket s = new Socket(“192.168.1.1”,8080)   C、SocketServer s = new Socket(8080);   D、Socket s = new SocketServer(“192.168.1.1”,8080)</li><li>下列哪种异常是检查型异常，需要在编写程序时声明？</li></ol><p>A、NullPointerException</p><p>B、ClassCastException</p><p>C、FileNotFoundException</p><p>D、IndexOutOfBoundsException 12. 下面代码的执行结果是 ________</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Chinese{
        private static Chinese objref =new Chinese();
        private Chinese(){}
        public static Chinese getInstance() { return objref; }
    }

    public class TestChinese {
        public static void main(String [] args) {
        Chinese obj1 = Chinese.getInstance();
        Chinese obj2 = Chinese.getInstance();
        System.out.println(obj1 == obj2);
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13"><li>下面选项中,哪些是interface中合法方法定义(<strong>AC</strong>)?</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract(接口中默认的方法声明)
public static final(接口中常量默认声明)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>A、public void main(String [] args);   B、private int getSum();   C、boolean setFlag(Boolean [] test);   D、public float get(int x); 14. java中 String str = &quot;hello world&quot;下列语句错误的是？（多选）（<strong>ABC</strong>）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>备注：将int类型转成String类型
String.valueOf(123)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>A、str+=&#39; a&#39;</p><p>B、int strlen = str.length</p><p>C、str=100</p><p>D、str=str+100</p>`,34),w={start:"15"},j={href:"https://www.runoob.com/java/java-override-overload.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.runoob.com/java/java-interfaces.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.runoob.com/java/java-modifier-types.html",target:"_blank",rel:"noopener noreferrer"},k=i("hr",null,null,-1),y=i("h3",{id:"分割线",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),e(" 分割线")],-1),q=i("hr",null,null,-1),B=i("p",null,[i("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function A(E,J){const n=v("ExternalLinkIcon");return a(),d("div",null,[r(" more "),m,i("p",null,[i("a",p,[e("百度-斐波那契数列科普"),t(n)])]),i("p",null,[i("a",h,[e("https://www.cnblogs.com/ForeverLover/p/4863563.html"),t(n)])]),i("p",null,[i("a",g,[e("java基础50道经典练习题及答案_百度文库"),t(n)])]),i("p",null,[i("a",_,[e("https://www.sunjs.com/article/detail/eba24965f41b46c49fdbffbadca3d289.html"),t(n)])]),i("p",null,[i("a",f,[e("Java编程题集合(一)_百度文库"),t(n)])]),x,i("ol",w,[i("li",null,[i("p",null,[e("Java方法重载与重写的区别？ "),i("a",j,[e("参考菜鸟教程-----Java 重写(Override)与重载(Overload)"),t(n)])])]),i("li",null,[i("p",null,[e("Java 接口里可以实现哪些方法？ "),i("a",C,[e("菜鸟教程----Java 接口"),t(n)])])]),i("li",null,[i("p",null,[e("详细聊聊你对Java访问修饰符的理解？ "),i("a",S,[e("菜鸟教程Java 修饰符"),t(n)])])])]),k,y,q,B])}const F=s(b,[["render",A],["__file","java39.html.vue"]]);export{F as default};
