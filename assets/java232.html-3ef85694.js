import{_ as n,X as l,Y as s,a1 as a,Z as e,$ as i,a2 as d,a0 as v,F as r}from"./framework-68dd73a2.js";const c={},m={id:"_232-java文件与流-file文件管理类-练习题-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_232-java文件与流-file文件管理类-练习题-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--232-Java-File--de7v53bwyega9680iha6462bse5apt0bsjeg7qtw7n.md",target:"_blank",rel:"noopener noreferrer"},b=v(`<h4 id="_1、在本机的磁盘系统中-找一个文件夹-利用file类的提供方法-列出该文件夹中的所有文件的文件名和文件的路径-执行效果如下-必做题" tabindex="-1"><a class="header-anchor" href="#_1、在本机的磁盘系统中-找一个文件夹-利用file类的提供方法-列出该文件夹中的所有文件的文件名和文件的路径-执行效果如下-必做题" aria-hidden="true">#</a> 1、在本机的磁盘系统中，找一个文件夹，利用File类的提供方法，列出该文件夹中的所有文件的文件名和文件的路径，执行效果如下：[必做题]</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.file.练习;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java文件与流-File文件管理类-练习题</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,11);function h(f,p){const t=r("ExternalLinkIcon");return l(),s("div",null,[a(" more "),e("h1",m,[u,i(),e("a",o,[i("232-Java文件与流-File文件管理类-练习题.md"),d(t)])]),b])}const x=n(c,[["render",h],["__file","java232.html.vue"]]);export{x as default};
