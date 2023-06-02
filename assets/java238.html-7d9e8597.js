import{_ as t,X as r,Y as d,a1 as a,Z as e,$ as i,a2 as l,a0 as s,F as v}from"./framework-68dd73a2.js";const c={},u={id:"_238-java文件与流-文件与流-bufferedreader与bufferwriter处理流-md",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_238-java文件与流-文件与流-bufferedreader与bufferwriter处理流-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--238-Java--BufferedReaderBufferWriter-0x31dbap573gca1529hforfda2210gea3a7924f.md",target:"_blank",rel:"noopener noreferrer"},o=s(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.io流;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class BufferedReaderAndBufferedWriter {
	
	/**
	 	FileReader:以字符为单位读取数据---节点流，能够直接访问外部文件
	 	FileWriter:以字符为单位写出数据---节点流，能够直接访问外部文件
	 	
	 	BufferedReader:以字符为单位读取数据---处理流，不能够直接访问外部文件
	 		readLine() 可以一行一行读取数据，特有的方法
	 	
	 	BufferedWriter:以字符为单位写出数据---处理流，不能够直接访问外部文件
	 		newLine() 可以换行输出数据，特有的方法
	 */
	public static void main(String[] args) {
		BufferedReader reader = null;
		BufferedWriter writer = null;
		try{
			//字符输入流（节点流）
			FileReader in = new FileReader(&quot;file/file.txt&quot;);
			//字符输入流（处理流）
			reader = new BufferedReader(in);
			
			//字符输出流（节点流）
			FileWriter out = new FileWriter(&quot;file/file_bak.txt&quot;);
			//字符输出流（处理流）
			writer = new BufferedWriter(out);
			
			String line = null;//一行一行读取数据
			while((line = reader.readLine()) != null)
			{
				System.out.println(&quot;读取到的一行数据：&quot; + line);
				
				//写入文件
				writer.write(line);
				writer.newLine(); //输入换行符
			}
			
			//强制刷新
			writer.flush();
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java文件与流-文件与流-BufferedReader与BufferWriter处理流</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,7);function f(h,p){const n=v("ExternalLinkIcon");return r(),d("div",null,[a(" more "),e("h1",u,[m,i(),e("a",b,[i("238-Java文件与流-文件与流-BufferedReader与BufferWriter处理流.md"),l(n)])]),o])}const w=t(c,[["render",f],["__file","java238.html.vue"]]);export{w as default};
