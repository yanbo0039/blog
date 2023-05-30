import{_ as e,X as s,Y as r,a1 as d,Z as n,$ as t,a2 as l,a0 as a,F as v}from"./framework-68dd73a2.js";const u={},c={id:"_218-java工具类-stringbuffer类-md",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_218-java工具类-stringbuffer类-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--218-Java-StringBuffer-wi68a906ogozina.md",target:"_blank",rel:"noopener noreferrer"},o=a(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_218_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.String类;

public class StringBufferDemo {

	public static void main(String[] args) {
		/**
		 * 1.创建对象
		 */
		//构造一个其中不带字符的字符串缓冲区，初始容量为 16 个字符
		StringBuffer sb = new StringBuffer();
		
		//构造一个不带字符，但具有指定初始容量的字符串缓冲区
		StringBuffer sb2 = new StringBuffer(70);
		
		// 构造一个字符串缓冲区，并将其内容初始化为指定的字符串内容
		StringBuffer sb3 = new StringBuffer(&quot;abc&quot;);
		
		/**
		 * 2.常用方法
		 */
		//capacity() 查看字符串缓冲区的容量
		System.out.println(&quot;容量：&quot; + sb.capacity());//16
		System.out.println(&quot;容量：&quot; + sb2.capacity());//70
		System.out.println(&quot;容量：&quot; + sb3.capacity());//19
		
		//append() 追加字符串
		//sb = sb + &quot;123&quot; + &quot;true&quot;;//String类型字符串拼接方式
		sb.append(&quot;123&quot;).append(true).append(&quot;中文&quot;);
		System.out.println(sb);//123true中文
		
		String str = &quot;----&quot;; //不可变
		str.concat(&quot;123&quot;).concat(&quot;true&quot;).concat(&quot;中文&quot;);
		System.out.println(str);//----
		
		//delete(start,end) 删除指定区间的字符，不包括结束位置
		sb.delete(3, 7);
		System.out.println(sb);//123中文
		
		//deleteCharAt(index) 删除指定下标位置的字符
		sb.deleteCharAt(2);
		System.out.println(sb);//12中文
		
		//insert(offset,element) 在指定位置新增一个元素
		sb.insert(0, &quot;新增&quot;);
		System.out.println(sb);//新增12中文
		
		//replace(start,end,string) 用指定string替换start~end区间的值
		sb.replace(0, 2, &quot;add&quot;);
		System.out.println(sb);//add12中文
		
		StringBuffer tele = new StringBuffer(&quot;13312347890&quot;);
		tele.replace(3, 7, &quot;****&quot;);
		System.out.println(tele);
		
		//reverse() 颠倒字符串
		//sb.reverse();
		//System.out.println(sb);//文中21dda
		
		//setCharAt(index,char) 将index位置的字符替换为char 
		sb.setCharAt(0, &#39;o&#39;);
		System.out.println(sb);//odd12中文
		
		//toString() StringBuffer -&gt; String
		System.out.println(sb.toString());
		
		/**
		 * 想要判断两个StringBuffer变量的内容是否相等，应先用toString（）将他们转换成String对象
		 */
		StringBuffer sb4 = new StringBuffer(&quot;abc&quot;);
		StringBuffer sb5 = new StringBuffer(&quot;abc&quot;);
		
		System.out.println(sb4 == sb5);     //false 比较地址值
		System.out.println(sb4.equals(sb5));//false 没有重写Object的equals，所以默认还是比较地址值
		
		//StringBuffer -&gt; String之后再比较
		String str4 = sb4.toString();
		String str5 = sb5.toString();
		
		System.out.println(str4 == str5);    //false 比较地址值
		System.out.println(str4.equals(str5));//true 先比较地址值，再比较字面值
		
		/**
		 * String与StringBuffer的区别：
		 * 		相同点：
		 * 			1.都是表示字符序列
		 *          2.都属于java.lang包中的类，不需要导入包
		 * 
		 * 	           不同点：
		 * 			1.String是不可变的字符序列
		 * 			2.StringBuffer是可变字符序列
		 * 			3.StringBuffer节省内存开销
		 */
		String str6 = &quot;abc&quot;;
		str6 = str6 + &quot;123&quot;;//abc123
		str6 = str6 + &quot;true&quot;;//abc123true
		
		//abc  abc123  abc123true
		
		StringBuffer sb6 = new StringBuffer(&quot;abc&quot;);
		sb6.append(&quot;123&quot;);//abc123
		sb6.append(&quot;true&quot;);//abc123true
		
		//abc123true
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 ** 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,13);function f(g,p){const i=v("ExternalLinkIcon");return s(),r("div",null,[d(" more "),n("h1",c,[b,t(),n("a",m,[t("218-Java工具类-StringBuffer类.md"),l(i)])]),o])}const h=e(u,[["render",f],["__file","java218.html.vue"]]);export{h as default};
