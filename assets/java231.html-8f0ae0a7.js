import{_ as l,X as s,Y as a,a1 as d,Z as e,$ as i,a2 as n,a0 as r,F as v}from"./framework-68dd73a2.js";const u={},c={id:"_231-java文件与流-file文件管理类-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_231-java文件与流-file文件管理类-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--231-Java-File-350uo9hga5139gha0968ark2agn7ac6d.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_231_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_231_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.file;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java文件与流-File文件管理类</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4>`,11),p={href:"https://blog.csdn.net/qq_44333320/article/details/125630726",target:"_blank",rel:"noopener noreferrer"},f=e("hr",null,null,-1),h=e("p",null,"分割线",-1),q=e("hr",null,null,-1),g=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function F(_,x){const t=v("ExternalLinkIcon");return s(),a("div",null,[d(" more "),e("h1",c,[o,i(),e("a",m,[i("231-Java文件与流-File文件管理类.md"),n(t)])]),b,e("ol",null,[e("li",null,[e("a",p,[i("Eclipse全局搜索和替换"),n(t)])])]),f,h,q,g])}const y=l(u,[["render",F],["__file","java231.html.vue"]]);export{y as default};
