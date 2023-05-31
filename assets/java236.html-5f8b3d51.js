import{_ as t,X as l,Y as r,a1 as d,Z as e,$ as i,a2 as a,a0 as s,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_236_1.png",u="/blog/assets/Java_236_2.png",m={},b={id:"_236-java文件与流-文件与流-filereader与filewriter字符输出流-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_236-java文件与流-文件与流-filereader与filewriter字符输出流-md","aria-hidden":"true"},"#",-1),f={href:"http://xn--236-Java--FileReaderFileWriter-hp61cbal789eca929y7f3f043dda2320feay3604mv27h.md",target:"_blank",rel:"noopener noreferrer"},p=s('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.io流;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Arrays;

public class FileReaderAndFileWriter {
	/**
	 	FileReader:以字符为单位读取数据
	 	FileWriter:以字符为单位写出数据
	 	
	 		将文件file/file.txt复制到file/file_bak.txt文件中
	 */
	public static void main(String[] args) {
		FileReader reader = null;
		FileWriter writer = null;
		try {
			//字符输入流
			reader = new FileReader(&quot;file/file.txt&quot;);
			//字符输出流 
			writer = new FileWriter(&quot;file/file_bak.txt&quot;);
			
			/*
			 	读取到的字符个数：3  读取到的字符 :[1, 2, 3]
				读取到的字符个数：3  读取到的字符 :[a, b, c]
				读取到的字符个数：1  读取到的字符 :[中, b, c]
			 */
			char[] c = new char[3];//用于保存每次读取的字符数据，一般设置为1024的倍数
			int count = -1;	       //用于保存读取到的字符个数
			while((count = reader.read(c)) != -1)
			{
				System.out.println(&quot;读取到的字符个数：&quot; + count  + &quot;  读取到的字符 :&quot; + Arrays.toString(c) );
				
				//将所有的字母改为大写
				String str = new String(c, 0, count);
				str = str.toUpperCase();
				
				//写入文件
				//writer.write(c,0,count);
				writer.write(str);
			}
			
			//注意一.....................强制刷新暂存区
			writer.flush();
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally{
			//注意二.....................释放资源、关闭资源
			//使用顺序：reader -&gt; writer
			//关闭顺序：writer -&gt; reader
			try {
				if(writer != null)
				{
					writer.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			try {
				if(reader != null)
				{
					reader.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java文件与流-文件与流-FileReader与FileWriter字符输出流</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>流的分类：
	根据流的方向分：输入流、输出流
	根据流的单位分：字节流、字符流
	根据流的功能分：节点流、处理流
	
	字节流输入流：XXXXInputStream
	字节流输出流：XXXXOutputStream
	
	字符流输入流：XXXXReader
	字符流输出流：XXXXWriter

字节流：一个字节一个字节读取数据（英文、数字各占1个字节，中文GBK编码下占2个字节）
    
    	适用于复制文件（文本文档、图片、音频、视频等等）：
	    	FileInputStream:以字节为单位读取数据    ---字节输入流
	    	FileOutputStream:以字节为单位写出数据  ---字节输出流
	    	
	             访问字节数组：
	    	ByteArrayInputStream:以字节为单位读取数据    ---字节输入流

字符流：一个字符一个字符读取数据

	            适用于修改文件内容：
	         FileReader:以字符为单位读取数据        ---字符输入流
	 	     FileWriter:以字符为单位写出数据        ---字符输出流
	 	     
	 	     
节点流：能够直接访问数据源文件的流
		FileInputStream input = new FileInputStream(&quot;file/file.txt&quot;);
		FileOutputStream output = new FileOutputStream(&quot;file/file_bak.txt&quot;,true);

		FileReader reader = new FileReader(&quot;file/file.txt&quot;);
		FileWriter writer = new FileWriter(&quot;file/file_bak.txt&quot;);

处理流：不能够直接访问数据源文件的流，每种流具有特定的功能

		BufferedReader reader = new BufferedReader(new FileReader(&quot;file/file.txt&quot;));
			可以一行一行读取数据，特有的方法： readLine() 
			
		BufferedWriter writer = new BufferedWriter(new FileWriter(&quot;file/file_bak.txt&quot;));
			可以换行输出数据，特有的方法： newLine() 
			
		
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,15);function h(_,g){const n=v("ExternalLinkIcon");return l(),r("div",null,[d(" more "),e("h1",b,[o,i(),e("a",f,[i("236-Java文件与流-文件与流-FileReader与FileWriter字符输出流.md"),a(n)])]),p])}const F=t(m,[["render",h],["__file","java236.html.vue"]]);export{F as default};
