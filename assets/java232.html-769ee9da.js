import{_ as n,X as l,Y as s,a1 as a,Z as i,$ as e,a2 as d,a0 as v,F as r}from"./framework-68dd73a2.js";const c={},m={id:"_232-java文件与流-file文件管理类-练习题-md",tabindex:"-1"},u=i("a",{class:"header-anchor",href:"#_232-java文件与流-file文件管理类-练习题-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--232-Java-File--de7v53bwyega9680iha6462bse5apt0bsjeg7qtw7n.md",target:"_blank",rel:"noopener noreferrer"},b=v(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="_1、在本机的磁盘系统中-找一个文件夹-利用file类的提供方法-列出该文件夹中的所有文件的文件名和文件的路径-执行效果如下-必做题" tabindex="-1"><a class="header-anchor" href="#_1、在本机的磁盘系统中-找一个文件夹-利用file类的提供方法-列出该文件夹中的所有文件的文件名和文件的路径-执行效果如下-必做题" aria-hidden="true">#</a> 1、在本机的磁盘系统中，找一个文件夹，利用File类的提供方法，列出该文件夹中的所有文件的文件名和文件的路径，执行效果如下：[必做题]</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.file.练习;

import java.io.File;

public class _01 {

	/**
	 * 1、在本机的磁盘系统中，找一个文件夹，利用File类的提供方法，列出该文件夹中的所有文件的文件名和文件的路径，执行效果如下：[必做题]
			路径是xxx的文件夹内的文件有：
			 	文件名：abc.txt
				路径名：c:\\temp\\abc.txt 
				--------------------------------------------
				文件名：def.txt
				路径名：c:\\temp\\def.txt
	 */
	public static void main(String[] args) {
		
		File file = new File(&quot;D:\\\\temp&quot;);
		
		listFiles(file);
		
	}
	/**
	 * 获取指定file下所有的文件信息
	 * @param file
	 */
	private static void listFiles(File file) {
		//查看D:\\\\temp路径下所有的文件
		File[] files = file.listFiles();
		for (File file2 : files) {
			//文件
			if(file2.isFile())
			{
				//if(file2.getName().contains(&quot;file&quot;))
				//{
					System.out.println(&quot;文件名：&quot; + file2.getName());
					System.out.println(&quot;路径名：&quot; + file2.getAbsolutePath());
					
					System.out.println(&quot;--------------------------------------------&quot;);
				//}
			}
			//文件夹
			else
			{
				//System.out.println(&quot;文件&quot; + file2.getName() + &quot;是一个文件夹\\n&quot;);
				
				//继续查看文件夹中的所有文件
				listFiles(file2);//递归调用，在方法中自己调用自己
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java文件与流-File文件管理类-练习题</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,7);function f(h,p){const t=r("ExternalLinkIcon");return l(),s("div",null,[a(" more "),i("h1",m,[u,e(),i("a",o,[e("232-Java文件与流-File文件管理类-练习题.md"),d(t)])]),b])}const x=n(c,[["render",f],["__file","java232.html.vue"]]);export{x as default};
