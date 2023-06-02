import{_ as l,X as s,Y as d,a1 as a,Z as e,$ as n,a2 as i,a0 as r,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Java_116_1.png",c={},o={id:"_116-java-包装类-md",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_116-java-包装类-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--116-Java--8p6os267av24a.md",target:"_blank",rel:"noopener noreferrer"},m=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>Everything is object. <ul><li>Java编程语言不把基本数据类型看作对象。Java 编程语言提供包装类来将基本数据类型看作对象。</li><li>在功能上包装类能够完成数据类型之间（除boolean）的相互转换，尤其是基本数据类型和String类型的转换。</li><li>包装类中包含了对应基本数据类型的值，封装了String和基本数据类型之间相互转换的方法，还有一些处理这些基本数据类型时非常有用的属性和方法。</li></ul></li><li>包装类简介 <ul><li>基本数据类型不是对象层次结构的组成部分。有时需要像处理对象一样处理这些基本数据类型，可通过相应的“包装类”来将其“包装”。</li></ul></li></ul><table><thead><tr><th>数据类型</th><th>封装类</th></tr></thead><tbody><tr><td>boolean</td><td>Boolean</td></tr><tr><td>byte</td><td>Byte</td></tr><tr><td>char</td><td>Character</td></tr><tr><td>double</td><td>Double</td></tr><tr><td>float</td><td>Float</td></tr><tr><td>int</td><td>Integer</td></tr><tr><td>long</td><td>Long</td></tr><tr><td>short</td><td>Short</td></tr></tbody></table><ul><li>字符串与基本数据类型、包装类型转换图</li></ul><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>基本数据类型转换为包装类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int pInt = 500;
Integer wInt = new Integer(pInt);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字符串转换为包装类 <ul><li>字符串通过构造方法转换为包装类</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String sInt = “500”;
Integer wInt = new Integer(sInt);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字符串通过包装类的valueOf(String s)转换为包装类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String sInt = “500”;
Integer wInt = Integer.valueOf(sInt);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：字符串不能通过以上两种方式转换为Character</strong></p><ul><li>包装类转换为基本数据类型 <ul><li>包装类通过xxxValue()方法转换为基本数据类型</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Integer wInt = new Integer(500);
int pInt = wInt.intValue();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>包装类转换为字符串 <ul><li>包装类通过toString()方法转换为字符串</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Integer  wInt = new Integer(500);
String sInt = wInt.toString();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>字符串转换为基本数据类型 <ul><li>字符串通过parseXXX(String s)方法转换为基本数据类型</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String sInt = “500”;
int pInt = Integer.parsetIInt(sInt);

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>自动的装箱和自动拆箱 <ul><li>在进行基本数据类型和对应的包装类转换时，系统将自动进行</li><li>JDK自从5.0版本后引入</li><li>方便程序的编写</li></ul></li></ul><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 包装类;

public class Test1 {

	public static void main(String[] args) {

		/**
		 * 所有的包装类：
		 * 1.为了解决基本类型没有对象的问题，所以为8种基本类型各自量身定做了包装类
		 * 2.包装类一共有8个：
		 * 3.封装类提供了丰富的数据类型之间转换的方法
		 */
		Character c;
		Boolean b;
		Float f;
		Double d;
		
		Byte bt;
		Short s;
		Integer i;
		Long ong;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 包装类;

public class Test2 {

	public static void main(String[] args) {
		//需求：
		//1. int --- Integer
		int a = 100;
		Integer a2 = new Integer(a);
		
		Integer a3 = Integer.valueOf(a);
		
		//2.Integer ----- int
		Integer b = new Integer(123);//new Integer(123)是自动装箱：把int  123 自动装箱成Integer对象类型
		int b2 = b;//int b2 = b 是自动拆箱,把Integer对象b脱去外衣，还原成int类型
		int b3 = b.intValue();
		//3.String ----- int
		String s = new String(&quot;666&quot;);
		int s2 = Integer.parseInt(s);
		int s3 = new Integer(s);
		//4.String ----- Integer
		String ss = new String(&quot;888&quot;);
		Integer i = Integer.parseInt(ss);
		Integer ii = new Integer(ss);
		//5.int ---- String
		int p = 333;
		String y = new String(p + &quot;&quot;);
		String yy = Integer.toString(p);
		//6.Integer ---- String
		Integer g = new Integer(10);
		String k = Integer.toString(g);
		String kk = g.toString();
		System.out.println(kk);//10
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),I=e("em",null,"Java-包装类",-1),p={href:"https://github.com/javaobjects/demo516",target:"_blank",rel:"noopener noreferrer"},h=e("hr",null,null,-1),x=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),_=e("hr",null,null,-1),S=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function f(w,k){const t=v("ExternalLinkIcon");return s(),d("div",null,[a(" more "),e("h1",o,[g,n(),e("a",b,[n("116-Java-包装类.md"),i(t)])]),m,e("p",null,[e("strong",null,[n("以上就是我关于 "),I,n(" 知识点的整理与总结的全部内容，"),e("a",p,[n("另附源码"),i(t)])])]),h,x,_,S])}const V=l(c,[["render",f],["__file","java116.html.vue"]]);export{V as default};
