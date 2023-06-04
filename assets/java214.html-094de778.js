import{_ as a,X as t,Y as s,a1 as d,Z as e,$ as n,a2 as l,a0 as r,F as c}from"./framework-68dd73a2.js";const o="/blog/assets/Java_214_1.png",v="/blog/assets/Java_214_2.png",b="/blog/assets/Java_214_3.png",u={},m={id:"_214-java工具类-object类型-md",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#_214-java工具类-object类型-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--214-Java-Object-pz4y896e89zv02kha.md",target:"_blank",rel:"noopener noreferrer"},g=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.object类;

public class ObjectDemo {

	public static void main(String[] args) {
		/**
		 * 1.创建对象（构造函数）
		 */
		Object obj1 = new Object();
		Object obj2 = new Object();
		
		/**
		 * 2.常用方法
		 */
		//equals() 判断某个对象是否与此对象&quot;相等&quot;
		System.out.println(obj1 == obj2);     //false  比较地址值
		System.out.println(obj1.equals(obj2));//false  比较地址值
		
		//hashCode() 返回该对象的十进制哈希码值，即对象引用地址，即每个对象的身份证ID
		System.out.println(obj1.hashCode());//931262393
		System.out.println(obj2.hashCode());//866219815
		
		//toString() 将对象转换为字符串返回: 包名  +  类名 + &#39;@&#39; + 十六进制的hashCode
		System.out.println(obj1.toString());//java.lang.Object@3781efb9
		System.out.println(obj2.toString());//java.lang.Object@33a17727
		
		/**
		 *  == 与 equals的比较：
		 *      
		 *      ==：既可以比较基本数据类型，也可以比较引用类型
		 *      	当==比较基本数据类型时，比较字面值，例如 3 == 13；
		 *          当==比较引用类型，比较引用地址，例如obj1 == obj2；
		 *          
		 *      equals（）：只能比较引用类型，且默认情况下比较引用地址
		 *  	              但是具体是否相等，需看子类是否重写父类的equals（）方法
		 */
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java工具类-Object类型</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div><h3 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h3><ol><li><p>Java API</p></li><li><p>== 与 equals的比较</p></li></ol><blockquote><p>==：既可以比较基本数据类型，也可以比较引用类型</p></blockquote><pre><code>当==比较基本数据类型时，比较字面值，例如 3 == 13；

当==比较引用类型，比较引用地址，例如obj1 == obj2；
               
equals（）：只能比较引用类型，且默认情况下比较引用地址

    但是具体是否相等，需看子类是否重写父类的equals（）方法
</code></pre><hr><h3 id="分割线-1" tabindex="-1"><a class="header-anchor" href="#分割线-1" aria-hidden="true">#</a> 分割线</h3><hr>`,18);function _(j,f){const i=c("ExternalLinkIcon");return t(),s("div",null,[d(" more "),e("h1",m,[h,n(),e("a",p,[n("214-Java工具类-Object类型.md"),l(i)])]),g])}const q=a(u,[["render",_],["__file","java214.html.vue"]]);export{q as default};
