import{_ as a,X as s,Y as l,a1 as d,Z as n,$ as i,a2 as t,a0 as v,F as r}from"./framework-68dd73a2.js";const c="/blog/assets/Java_200_1.png",u="/blog/assets/Java_200_2.png",m="/blog/assets/Java_200_3.png",b="/blog/assets/Java_200_4.png",o={},p={id:"_200-java面向对象高级特性-向上转型or向上转型-md",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#_200-java面向对象高级特性-向上转型or向上转型-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--200-Java-or-8p8qc117sbad142mea156sp9s831g48tcg89cmjpfa6804cust.md",target:"_blank",rel:"noopener noreferrer"},f=v('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.引用类型转换;

/**
 * &lt;p&gt;Title: InstanceOf运算符&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    A instanceof B :判断A是否为B的类型
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月5日
 */
public class InstanceOf运算符 {

	public static void main(String[] args) {
		SuperMan ironMan = new SuperMan();
		
		System.out.println(ironMan instanceof SuperMan);//true
		System.out.println(ironMan instanceof Man);     //true
		
		//System.out.println(ironMan instanceof NormalMan);//false
		
		getType(&quot;abc&quot;);
		getType(123);
		getType(true);
	}
	
	public static void getType(Object obj)
	{
		if(obj instanceof String)
		{
			System.out.println(obj + &quot;是一个String类型&quot;);
		}
		else if(obj instanceof Integer)
		{
			System.out.println(obj + &quot;是一个Integer类型&quot;);
		}
		else if(obj instanceof Boolean)
		{
			System.out.println(obj + &quot;是一个Boolean类型&quot;);
		}
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.引用类型转换;

/**
 * &lt;p&gt;Title: Man&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
//人类
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class Man {

	//属性
	String name;
	
	String sex;
	
	//行为
	public void say()
	{
		System.out.println(&quot;人： 说话&quot;);
	}
	
	public void walk()
	{
		System.out.println(&quot;人： 走路&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.引用类型转换;


//普通人
public class NormalMan extends Man {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.引用类型转换;

//超人
public class SuperMan extends Man{

	//行为
	public void fly()
	{
		System.out.println(&quot;超人：飞&quot;);
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.引用类型转换;

public class Test {

	public static void main(String[] args) {
		/**
		 * 上溯造型：子类 -&gt; 父类，自动转换
		 * 
		 * 		前提：基于继承关系
		 * 
		 *      注意：转换过程中，会失去子类原有的属性与方法，仅能使用父类的属性与方法
		 */
		//子类 -- 钢铁侠
		SuperMan ironMan = new SuperMan();
		ironMan.fly();
		
		//子类  -&gt; 父类   ---- 普通人
		Man man = ironMan;
		//man.fly();
		man.say();
		
		/**
		 * 下溯造型：父类 -&gt; 子类，强制转换
		 * 
		 * 		前提：基于继承关系
		 * 
		 *      注意：曾经向上转换过的对象，才能再向下转换。对象不允许不经过上溯造型而直接下溯造型。
		 */
		//父类 -&gt; 子类
		SuperMan ironMan2 = (SuperMan)man;
		ironMan2.fly();
		
		/*
		 * 对象不允许不经过上溯造型而直接下溯造型:
		 * 
		 * 	java.lang.ClassCastException: Man cannot be cast to SuperMan
		 */
		//父类
		Man laowang = new Man();
		laowang.walk();
		//父类 -&gt; 子类
		SuperMan spiderMan = (SuperMan)laowang;
		spiderMan.fly();
		
		/*
		 * 子类与子类之间不允许相互转换
		 */
		//子类
		NormalMan normalMan  = new NormalMan();
		//子类
		//SuperMan antMan = (SuperMan)normalMan;
	}

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java面向对象高级特性-向上转型or向上转型</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,21);function _(M,x){const e=r("ExternalLinkIcon");return s(),l("div",null,[d(" more "),n("h1",p,[g,i(),n("a",h,[i("200-Java面向对象高级特性-向上转型or向上转型.md"),t(e)])]),f])}const y=a(o,[["render",_],["__file","java200.html.vue"]]);export{y as default};
