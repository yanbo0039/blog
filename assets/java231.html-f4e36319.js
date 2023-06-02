import{_ as l,X as s,Y as a,a1 as d,Z as i,$ as e,a2 as n,a0 as r,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Java_231_1.png",c="/blog/assets/Java_231_2.png",o={},m={id:"_231-java文件与流-file文件管理类-md",tabindex:"-1"},b=i("a",{class:"header-anchor",href:"#_231-java文件与流-file文件管理类-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--231-Java-File-350uo9hga5139gha0968ark2agn7ac6d.md",target:"_blank",rel:"noopener noreferrer"},f=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.file;

import java.io.File;

public class FileDemo {

	public static void main(String[] args) {
		/**
		 * 1.创建对象
		 */
		//1. 根据绝对路径创建文件对象
		File file = new File(&quot;D:\\\\temp\\\\file.txt&quot;);
		File file2 = new File(&quot;D:/temp/file.txt&quot;);
		
		//2. 根据相对路径创建文件对象
		File file3 = new File(&quot;file/file.txt&quot;);//相对于当前项目根路径
		
		//3. 根据指定的父目录，查找指定的文件对象
		File file4 = new File(new File(&quot;D:/temp&quot;), &quot;file.txt&quot;);
		
		//4. 根据指定的父目录，查找指定的文件对象
		File file5 = new File(&quot;D:/temp&quot;, &quot;file.txt&quot;);
		
		//判断文件是否存在
		System.out.println(file5.exists());
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.file;

import java.io.File;
import java.io.IOException;
import java.util.Date;

public class FileDemo2 {

	public static void main(String[] args) throws IOException {
		
		File file = new File(&quot;file/2019-09-09.log&quot;);
		
		//exists() 判断文件是否存在
		if(!file.exists())
		{
			//createNewFile() 创建文件
			boolean result = file.createNewFile();
			System.out.println(&quot;新文件创建结果：&quot; + result);
		}
		
		//常用方法
		System.out.println(&quot;绝对路径：&quot; + file.getAbsolutePath());//D:\\FY19JAVA8班上课资料\\03.Java高级应用编程\\03.上课代码\\MySeniorProject\\file\\2019-09-09.log
		System.out.println(&quot;相对路径：&quot; + file.getPath());  //file\\2019-09-09.log
		System.out.println(&quot;文件是否可读：&quot; + file.canRead());  //true
		System.out.println(&quot;文件是否可写：&quot; + file.canWrite());  //true
		System.out.println(&quot;文件的内容长度：&quot; + file.length());   //8
		System.out.println(&quot;是否为一个文件对象：&quot; + file.isFile());//true
		System.out.println(&quot;是否为一个文件夹对象：&quot; + file.isDirectory());//false
		System.out.println(&quot;文件名称：&quot; + file.getName());//2019-09-09.log
		System.out.println(&quot;文件最后修改时间：&quot; + new Date(file.lastModified()).toLocaleString());//2019-9-9 9:58:24
	
		//renameTo() 重名命文件名称
		//System.out.println(&quot;重命名结果：&quot; + file.renameTo(new File(&quot;file/2019-09-09.log.bak&quot;)));
		
		/*
		  		创建临时文件：
		  		
		  		  %AppData%\\Local\\Temp\\io流临时文件测试671563688924681378.pptx
		  			
		  		  win+R -&gt; %AppData% -&gt; 回车查询临时文件夹路径
		  				
		 */
		File tempFile = File.createTempFile(&quot;io流临时文件测试&quot;, &quot;.pptx&quot;);
		System.out.println(tempFile.getAbsolutePath());
		
		File tempFile2 = File.createTempFile(&quot;历史消息记录&quot;, &quot;.log&quot;, new File(&quot;file&quot;));
		System.out.println(tempFile2.getAbsolutePath());
		
		//删除文件
		tempFile.delete();       //立即删除
		tempFile2.deleteOnExit();//退出系统时删除
		
		//list() 获取指定文件夹下所有的一级目录的【文件路径】
		File file2 = new File(&quot;D:\\\\temp&quot;);
		String[] listFiles = file2.list();
		for (String str : listFiles) {
			System.out.println(str);
		}
		
		//listFiles()  获取指定文件夹下所有的一级目录的【文件对象】
		File[] files = file2.listFiles();
		for (File file3 : files) {
			System.out.println(file3.getName() + &quot; &quot; + file3.length());
		}
		
		//mkdir() 最多创建一个文件夹
		File file4 = new File(&quot;file/file_01&quot;);
		System.out.println(&quot;文件夹是否创建成功：&quot; + file4.mkdir());
		
		//mkdirs() 创建路径中所有不存在的文件夹
		File file5 = new File(&quot;file/file_02/2019年9月9日/02&quot;);
		System.out.println(&quot;批量创建文件夹是否成功：&quot; + file5.mkdirs());
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java文件与流-File文件管理类</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div><h3 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h3>`,12),h={href:"https://blog.csdn.net/qq_44333320/article/details/125630726",target:"_blank",rel:"noopener noreferrer"},q=i("hr",null,null,-1),g=i("h3",{id:"分割线-1",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#分割线-1","aria-hidden":"true"},"#"),e(" 分割线")],-1),F=i("hr",null,null,-1);function _(x,S){const t=v("ExternalLinkIcon");return s(),a("div",null,[d(" more "),i("h1",m,[b,e(),i("a",p,[e("231-Java文件与流-File文件管理类.md"),n(t)])]),f,i("ol",null,[i("li",null,[i("a",h,[e("Eclipse全局搜索和替换"),n(t)])])]),q,g,F])}const w=l(o,[["render",_],["__file","java231.html.vue"]]);export{w as default};
