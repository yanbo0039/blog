import{_ as e,X as s,Y as d,a1 as a,Z as t,$ as n,a2 as l,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_234_1.png",u={},o={id:"_234-java文件与流-文件与流-fileinputstream字节输入流-md",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_234-java文件与流-文件与流-fileinputstream字节输入流-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--234-Java--FileInputStream-6n53bba706dca128p9w6e3dudda4638deas9242rz05d.md",target:"_blank",rel:"noopener noreferrer"},p=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.io流;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Arrays;

public class FileInputStreamDemo {

	public static void main(String[] args) {
		try {
			/**
			 * 1.创建对象
			 */
			FileInputStream input = new FileInputStream(&quot;file/file.txt&quot;);
			
			/**
			 * 2.常用方法
			 */
			/**
			 * read()  一个字节一个字节读取数据，当返回-1，说明文档读取结束
			 */
			/*int content = input.read();
			System.out.println(&quot;读取的字节：&quot; + content);//49
			
			content = input.read();
			System.out.println(&quot;读取的字节：&quot; + content);//50
			
			content = input.read();
			System.out.println(&quot;读取的字节：&quot; + content);//51
			
			content = input.read();
			System.out.println(&quot;读取的字节：&quot; + content);//97
			
			content = input.read();
			System.out.println(&quot;读取的字节：&quot; + content);//98
			
			content = input.read();
			System.out.println(&quot;读取的字节：&quot; + content);//99
			
			content = input.read();
			System.out.println(&quot;读取的字节：&quot; + content);//214
			
			content = input.read();
			System.out.println(&quot;读取的字节：&quot; + content);//208
			
			content = input.read();
			System.out.println(&quot;读取的字节：&quot; + content);//-1*/	
			
			/*int content = -1;
			while((content = input.read()) != -1)//先将input.read()读取到的字节赋值给content变量，然后再判断content是否等于-1
			{
				System.out.println(&quot;读取到的字节：&quot; + content);
			}*/
			
			/**
			 * read(byte[] b) 一个字节数组一个字节数组读取，返回-1，表示文档已经读取结束
			 */
			/*byte[] b = new byte[3];//一般设置为1024的倍数
			int content = input.read(b);
			System.out.println(content  + &quot;  &quot;  + Arrays.toString(b));//3  [49, 50, 51]
			
			content = input.read(b);
			System.out.println(content  + &quot;  &quot;  + Arrays.toString(b));//3  [97, 98, 99]
			
			content = input.read(b);
			System.out.println(content  + &quot;  &quot;  + Arrays.toString(b));//2  [-42, -48, 99]
			
			content = input.read(b);
			System.out.println(content  + &quot;  &quot;  + Arrays.toString(b));//-1  [-42, -48, 99]*/	
			
			/*
			 *  读取的字节个数：3  读取的内容： [49, 50, 51]
				读取的字节个数：3  读取的内容： [97, 98, 99]
				读取的字节个数：2  读取的内容： [-42, -48, 99]
			 */
			byte[] b = new byte[3];//用户保存每次读取到的字节数据，一般设置为1024的倍数
			int count = -1;        //用于保存每次读取到的字节个数
			while((count = input.read(b)) != -1)
			{
				System.out.println(&quot;读取的字节个数：&quot; + count + &quot;  读取的内容： &quot; + Arrays.toString(b));
			}
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java文件与流-文件与流-FileInputStream字节输入流</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,9);function h(q,S){const i=v("ExternalLinkIcon");return s(),d("div",null,[a(" more "),t("h1",o,[m,n(),t("a",b,[n("234-Java文件与流-文件与流-FileInputStream字节输入流.md"),l(i)])]),p])}const y=e(u,[["render",h],["__file","java234.html.vue"]]);export{y as default};
