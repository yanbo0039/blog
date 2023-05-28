import{_ as e,X as a,Y as l,a1 as s,Z as t,$ as i,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Java_235_1.png",c={},m={id:"_235-java文件与流-文件与流-fileoutputstream字节输出流-md",tabindex:"-1"},o=t("a",{class:"header-anchor",href:"#_235-java文件与流-文件与流-fileoutputstream字节输出流-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--235-Java--FileOutputStream-gv15bba938dca460vsp2eliwdda2430eeat0787rkr8d.md",target:"_blank",rel:"noopener noreferrer"},p=r('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.io流;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;

public class FileInputStreamAndFileOutputStream {
	
	/**
	 	FileInputStream:以字节为单位读取数据
	 	FileOutputStream:以字节为单位写出数据
	 	
	 		将文件file/file.txt复制到file/file_bak.txt文件中
	 */
	public static void main(String[] args) {
		FileInputStream input = null;
		FileOutputStream output = null;
		try {
			//字节输入流
			input = new FileInputStream(&quot;file/file.txt&quot;);
			//字节输出流
			output = new FileOutputStream(&quot;file/file_bak.txt&quot;,true);//参数二表示追加到文档末尾，默认为false
			
			/*
			 	读取到的字节个数： 3  读取到的字节：[49, 50, 51]
				读取到的字节个数： 3  读取到的字节：[97, 98, 99]
				读取到的字节个数： 2  读取到的字节：[-42, -48, 99]
			 */
			//循环读取
			byte[] b = new byte[3];//用于保存读取的字节数据
			int count = -1;        //用于保存读取到的字节个数
			while((count = input.read(b)) != -1)
			{
				System.out.println(&quot;读取到的字节个数： &quot; + count + &quot;  读取到的字节：&quot; + Arrays.toString(b));
				
				//写入指定文件
				output.write(b, 0, count);
			}
			
			//换行
			output.write(&#39;\\n&#39;);
			
			//注意一.................强制刷新暂存区
			output.flush();
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			//注意二.....................释放资源、关闭资源
			//使用顺序：input -&gt; output
			//关闭顺序：output -&gt; input
			try {
				if(output != null)
				{
					output.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			try {
				if(input != null)
				{
					input.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java文件与流-文件与流-FileOutputStream字节输出流</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,13);function h(f,_){const n=v("ExternalLinkIcon");return a(),l("div",null,[s(" more "),t("h1",m,[o,i(),t("a",b,[i("235-Java文件与流-文件与流-FileOutputStream字节输出流.md"),d(n)])]),p])}const g=e(c,[["render",h],["__file","index.html.vue"]]);export{g as default};
