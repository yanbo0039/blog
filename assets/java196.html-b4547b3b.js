import{_ as a,X as t,Y as s,a1 as d,Z as e,$ as n,a2 as l,a0 as c,F as r}from"./framework-68dd73a2.js";const v="/blog/assets/Java_196_1.png",o="/blog/assets/Java_196_2.png",m="/blog/assets/Java_196_3.png",p="/blog/assets/Java_196_4.png",u={},b={id:"_196-java面向对象高级特性-包-md",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_196-java面向对象高级特性-包-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--196-Java--8p6o85g729apnm8p6djgxbn57bgd0b09m.md",target:"_blank",rel:"noopener noreferrer"},_=c('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.包;
/**
 * &lt;p&gt;Title: Package&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    	包（package）：
	
			语法：  package 包名;
			
			注意:
				1.包名的路径必须与磁盘物理路径保持大小写，及层级结构一致
				2.package语句作为java源文件的第一条语句
				3.每个*.java源文件只能声明一个包
				4.如果没有package语句，则默认为无名包
				
	import导入包中的类：jdk中java.lang包中的类，自动导入，不需手动import
	
			1. 包名.路径名
				public class Package extends com.tencent.chapter07.继承.Employee{}
				
			2. 使用import关键字引入其它包中的类
				//一个一个导入
				import com.tencent.chapter07.继承.Employee;
				import com.tencent.chapter07.继承.Officer;
				//批量导入
				import com.tencent.chapter07.继承.*;
		
			3.同一个包中的类不需要导入
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
//一个一个导入
//import com.tencent.chapter07.继承.Employee;
//import com.tencent.chapter07.继承.Officer;
//批量导入
import com.tencent.chapter07.继承.*;
public class Package {
	
}
class Test extends Officer
{
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java面向对象高级特性-包</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,12);function f(x,k){const i=r("ExternalLinkIcon");return t(),s("div",null,[d(" more "),e("h1",b,[g,n(),e("a",h,[n("196-Java面向对象高级特性-包.md"),l(i)])]),_])}const j=a(u,[["render",f],["__file","java196.html.vue"]]);export{j as default};
