import{_ as i,X as n,Y as e,a1 as a,a0 as s}from"./framework-68dd73a2.js";const d="/blog/assets/Java_201_1.png",l={},v=s('<h1 id="_201-java面向对象高级特性-多态-打印机案例-md" tabindex="-1"><a class="header-anchor" href="#_201-java面向对象高级特性-多态-打印机案例-md" aria-hidden="true">#</a> 201-Java面向对象高级特性-多态-打印机案例 .md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.多态;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java面向对象高级特性-多态-打印机案例</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,13);function r(t,c){return n(),e("div",null,[a(" more "),v])}const m=i(l,[["render",r],["__file","java201.html.vue"]]);export{m as default};
