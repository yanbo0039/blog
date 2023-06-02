import{_ as i,X as s,Y as a,a1 as d,Z as e,$ as n,a2 as l,a0 as r,F as u}from"./framework-68dd73a2.js";const o={},v={id:"_115-java-equals-与-的区别-md",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#_115-java-equals-与-的区别-md","aria-hidden":"true"},"#",-1),b={href:"http://%E4%B8%8E==%E7%9A%84%E5%8C%BA%E5%88%AB.md",target:"_blank",rel:"noopener noreferrer"},m=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>理解equals()方法和==运算符的区别是非常重要的。 <ul><li>默认情况下（即没有被重写时）equals()只能比较引用类型，&quot;==&quot;既能比较引用类型又能比较基本类型。</li><li>equals()方法从Object类继承，即比较对象引用的值</li><li>一般都被子类方法覆盖，不再比较引用的值</li></ul></li><li>&quot;==&quot;运算符: <ul><li>比较基本数据类型：相当于算术等号</li><li>比较引用数据类型：比较引用的值，不能被覆盖。</li></ul></li></ul><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package Object类介绍;

public class TestEquals {

	public static void main(String[] args) {

		/**
		 * Object类的equals方法：
		 * 1.作用：用来比较两个对象是否相等
		 * 2.比较原理：比较两个对象的hashCode
		 */
		Object o1 = new Object();
		Object o2 = new Object();
		
		System.out.println(&quot;o1.equals(o2)? &quot; + o1.equals(o2));//false
		
		o2 = o1;
		
		System.out.println(&quot;o1.equals(o2)? &quot; + o1.equals(o2));//true 
		
		Double d = new Double(12.345);
		Double a = 12.345;
		double b = 12.345;
		
		Float c = 12.345F;
		
		System.out.println(a.equals(b));//true 类型相同，并且比较的是值
		System.out.println(a.equals(d));//true 类型相同，并且比较的是值
		System.out.println(d.equals(b));//true 类型相同，并且比较的是值
		System.out.println(a.equals(c));//false 类型不同
		System.out.println(c.equals(b));//false 类型不同
		
		Double d2 = new Double(789);
		Double d3 = new Double(789);
		System.out.println(&quot;d2 == d3 ?&quot; + (d2 == d3));//false 比较的是地址
		System.out.println(d2.equals(d3));//true
		/**
		 * 比较两个对象是否相等：用equals 和 ==
		 * 注意：
		 * 1.equals只能用来比较对象，因为equals是方法
		 * 2.==既能用来比较对象，又能用来比较基本类型
		 * 3.由于equals方法可以重写，所以不同类型的对象调用equals方法比较用的算法不同
		 * Object类型：equals方法比较的是两个对象的地址,底层调用 hashCode方法获取对象的地址之后再做比较
		 * Double类型：equals方法比较的是值
		 * String类型：euqals方法比较的是字符串的内容
		 * 自己定义的类型，equals方法比较什么可以自己写算法，不写的话比较地址
		 * 
		 * “==” 运算符：
		 * 比较基本数据类型：相当于算术符号
		 * 比较引用数据类型：比较引用的值，不能被覆盖。
		 * 
		 */
		System.out.println(d2 == d3);//false
		System.out.println(d2);
		System.out.println(d3);
		
		String s1 = new String(&quot;abc&quot;);
		String s2 = new String(&quot;abc&quot;);
		System.out.println(&quot;s1.equals(s2)? &quot; + s1.equals(s2));
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="关于此知识点比较优秀的博文" tabindex="-1"><a class="header-anchor" href="#关于此知识点比较优秀的博文" aria-hidden="true">#</a> 关于此知识点比较优秀的博文</h4>`,5),h={href:"https://www.cnblogs.com/lingyujuan/p/6491883.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.csdn.net/Xin6Yang/article/details/88801996",target:"_blank",rel:"noopener noreferrer"},p={href:"https://blog.csdn.net/qq_38162448/article/details/81611894",target:"_blank",rel:"noopener noreferrer"},q={href:"https://jingyan.baidu.com/article/624e7459ad63ed34e8ba5afb.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.e-learn.cn/content/java/1187061",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.bbsmax.com/A/obzb7WO6JE/",target:"_blank",rel:"noopener noreferrer"},j=e("em",null,"Java-equals()与==的区别",-1),S={href:"https://github.com/javaobjects/demo516",target:"_blank",rel:"noopener noreferrer"},w=e("hr",null,null,-1),y=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),x=e("hr",null,null,-1),k=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function E(O,D){const t=u("ExternalLinkIcon");return s(),a("div",null,[d(" more "),e("h1",v,[c,n(" 115-Java-equals()"),e("a",b,[n("与==的区别.md"),l(t)])]),m,e("p",null,[e("a",h,[n("java .equals()和==的区别"),l(t)])]),e("p",null,[e("a",_,[n("JAVA--equals()和==的区别"),l(t)])]),e("p",null,[e("a",p,[n("浅谈Java中equals（）和==的区别"),l(t)])]),e("p",null,[e("a",q,[n("java中equals和==的区别是什么-百度经验"),l(t)])]),e("p",null,[e("a",f,[n("Java 对equals()方法与==的理解及两者的区别"),l(t)])]),e("p",null,[e("a",g,[n("java中equals()和==的区别"),l(t)])]),e("p",null,[e("strong",null,[n("以上就是我关于 "),j,n(" 知识点的整理与总结的全部内容，"),e("a",S,[n("另附源码"),l(t)])])]),w,y,x,k])}const B=i(o,[["render",E],["__file","java115.html.vue"]]);export{B as default};
