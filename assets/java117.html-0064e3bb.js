import{_ as a,X as d,Y as l,a1 as s,Z as t,$ as n,a2 as i,a0 as r,F as o}from"./framework-68dd73a2.js";const c={},u={id:"_117-java-math类-md",tabindex:"-1"},v=t("a",{class:"header-anchor",href:"#_117-java-math类-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--117-Java-Math-8z67a.md",target:"_blank",rel:"noopener noreferrer"},m=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li><p>Math类</p><ul><li>Math类提供了大量用于数学运算的方法</li><li>Math类是final类，因此不能从Math类继承</li><li>Math类中的方法都是static方法，因此不必创建Math类的对象就可以直接使用该类的方法</li></ul></li><li><p>Math类中的常量</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public  static  final  double  PI
public  static  final  double  E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Math类中的常用方法</li></ul><table><thead><tr><th>方法</th><th>含义</th></tr></thead><tbody><tr><td>static int abs(int)</td><td>返回参数的绝对值，返回值类型与参数类型相同</td></tr><tr><td>static double abs(double)</td><td>返回参数的绝对值</td></tr><tr><td>static double ceil(double)</td><td>返回大于所给参数的最小的整数值</td></tr><tr><td>static double floor(double)</td><td>返回不大于所给参数的最大的整数值</td></tr><tr><td>static int max(int a,int b)</td><td>返回两个int值中较大的一个</td></tr><tr><td>static double max(double,double)</td><td>返回两个double值中较大的一个</td></tr><tr><td>static int min(int a,int b)</td><td>返回两个int值中较小的一个</td></tr><tr><td>static double min(double,double)</td><td>返回两个double值中较小的一个</td></tr><tr><td>static double random( )</td><td>返回在0.0~1.0之间的随机的double值</td></tr><tr><td>static int round(double)</td><td>返回同所给值最接近的整数，采用4舍5入法</td></tr><tr><td>static double sin/cos/tan(double)</td><td>返回给定的弧度值对应的三角函数值</td></tr><tr><td>static double sqrt(double)</td><td>返回所给值的平方根，若所给值为负数则返回NaN</td></tr></tbody></table><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package Math类;

import java.util.Random;

public class TestMath类 {

	public static void main(String[] args) {
		/*
		 * Math类提供了大量用于数学运算的方法 Math类是final类，因此不能从Math类继承 Math类中的方法都是static方法，
		 * 因此不必创建Math类的对象就可以直接使用该类的方法
		 */

		System.out.println(Math.PI);

		Double d = -123.756;

		System.out.println(Math.round(d));// 123，四舍五入取整数

		System.out.println(Math.floor(d));// 123.0,向下取整，不会四舍五入

		System.out.println(Math.abs(d));// 取绝对值
		// 生成随机数
		System.out.println(Math.random());// 0.0-1 不包含1，包含0

		// 算法：返回1-36之间的整数
		int a = (int) (Math.floor(Math.random() * 36)) + 1;
		//System.out.println(a);
		for (int i = 0; i &lt; 200; i++) {
			Random random=new Random();
			int result=random.nextInt(10);//10是范围，但是0包含，10不包含
			System.out.println(result);
		}
		// System.out.println(0.99*36+1);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拓展知识" tabindex="-1"><a class="header-anchor" href="#拓展知识" aria-hidden="true">#</a> 拓展知识：</h3>`,8),h={href:"https://blog.csdn.net/goodbye_youth/article/details/81110123",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.cnblogs.com/liaoxiaolao/p/7894664.html",target:"_blank",rel:"noopener noreferrer"},_=t("hr",null,null,-1),f=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),M=t("hr",null,null,-1),g={class:"hint-container tip"},x=t("p",{class:"hint-container-title"},"提示",-1),y=t("em",null,"Java-Math类",-1),S={href:"https://github.com/javaobjects/demo516",target:"_blank",rel:"noopener noreferrer"};function k(j,N){const e=o("ExternalLinkIcon");return d(),l("div",null,[s(" more "),t("h1",u,[v,n(),t("a",b,[n("117-Java-Math类.md"),i(e)])]),m,t("p",null,[t("a",h,[n("Java-Random类常用方法详解"),i(e)])]),t("p",null,[t("a",p,[n("Java的Random()类使用方法"),i(e)])]),_,f,M,t("div",g,[x,t("p",null,[t("strong",null,[n("以上就是我关于 "),y,n(" 知识点的整理与总结的全部内容，"),t("a",S,[n("另附源码"),i(e)])])])])])}const I=a(c,[["render",k],["__file","java117.html.vue"]]);export{I as default};
