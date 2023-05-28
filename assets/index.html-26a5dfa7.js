import{_ as i,X as a,Y as r,a1 as s,Z as e,$ as n,a2 as d,a0 as l,F as c}from"./framework-68dd73a2.js";const v={},m={id:"_237-java文件与流-文件与流-bytearrayinputstream字节输入流-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_237-java文件与流-文件与流-bytearrayinputstream字节输入流-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--237-Java--ByteArrayInputStream-hp61cba767eca149sz05fj0ydda4528eeax4369tuore.md",target:"_blank",rel:"noopener noreferrer"},b=l(`<h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.io流;

import java.io.ByteArrayInputStream;

public class ByteArrayInputStreamDemo {

	public static void main(String[] args) {
		byte[] b = new byte[]{1,2,3,4,5,6,7};
		
		ByteArrayInputStream input = new ByteArrayInputStream(b);
		
		//read() 读取一个字节
		int content = input.read();
		System.out.println(content);//1
		
		//available() 剩余可读字节数
		System.out.println(input.available());//6
		
		//mark() 设置标记1,通常与reset()方法结合使用
		input.mark(1);
		
		//skip() 跳跃过N个字节，再继续读取
		input.skip(3);
		
		//read() 读取一个字节
		content = input.read();
		System.out.println(content);//5
		
		//reset() 重置到最近的mark位置,通常与mark()方法结合使用
		input.reset();
		 
		content = input.read();
		System.out.println(content);//2
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java文件与流-文件与流-ByteArrayInputStream字节输入流</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,11);function p(h,y){const t=c("ExternalLinkIcon");return a(),r("div",null,[s(" more "),e("h1",m,[u,n(),e("a",o,[n("237-Java文件与流-文件与流-ByteArrayInputStream字节输入流.md"),d(t)])]),b])}const x=i(v,[["render",p],["__file","index.html.vue"]]);export{x as default};
