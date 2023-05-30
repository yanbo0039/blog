import{_ as i,X as n,Y as e,a1 as a,a0 as d}from"./framework-68dd73a2.js";const s={},l=d(`<h1 id="_201-java面向对象高级特性-多态-打印机案例-md" tabindex="-1"><a class="header-anchor" href="#_201-java面向对象高级特性-多态-打印机案例-md" aria-hidden="true">#</a> 201-Java面向对象高级特性-多态-打印机案例 .md</h1><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_201_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.多态;

/**
 * &lt;p&gt;Title: Printer&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
//打印机
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public class Printer {

	//打印
	public void print()
	{
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.多态;

//黑白打印机
public class PrinterBlack extends Printer {

	@Override
	public void print() {
		//super.print();
		System.out.println(&quot;打印黑白.....&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.多态;

//彩色打印机
public class PrinterColor extends Printer {

	@Override
	public void print() {
		//super.print();
		System.out.println(&quot;打印彩色.....&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.多态;

/**
 * &lt;p&gt;Title: PrinterTest&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *     多态：不同的对象对同一行为作出的不同响应
		基于同一父类，不同实例，调用同一方法，实现不同的功能。
       	实现的三要素：
       		1.基于继承或实现
       		2.必须重写父类的方法
       		3.子类 转换父类的引用
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
//测试打印机功能
public class PrinterTest {

	//按打印按钮
	public static void click(Printer printer)
	{
		printer.print();
	}
	
	public static void main(String[] args) {
		
		//我想打印彩色....
		click(new PrinterColor());
		
		//我想打印黑白
		click(new PrinterBlack());
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java面向对象高级特性-多态-打印机案例</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,17);function r(v,t){return n(),e("div",null,[a(" more "),l])}const u=i(s,[["render",r],["__file","java201.html.vue"]]);export{u as default};
