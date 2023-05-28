import{_ as a,X as d,Y as l,a1 as r,Z as e,$ as n,a2 as t,a0 as s,F as c}from"./framework-68dd73a2.js";const v={},o={id:"_143-java-使用处理流完成文件的拷贝-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_143-java-使用处理流完成文件的拷贝-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--143-Java--e87n80ct36dyjhhtyb9c3tox66aiqznrec5hbn7k.md",target:"_blank",rel:"noopener noreferrer"},b=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 字符流的读写;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;

public class TestReadFile_manyContent {

	public static void main(String[] args) {
		File source = new File(&quot;E:\\\\abc.txt&quot;);
		File dest = new File(&quot;D:\\\\abc.txt&quot;);
		
//		FileReader f;
//		
//		BufferedReader br;
		
		//jdk7的新写法，不用写finally语句块，可以自动释放资源
		try(
				BufferedReader br = new BufferedReader(new FileReader(source));
				BufferedWriter bw = new BufferedWriter(new FileWriter(dest));
				){
			String content = null;
			
			while((content = br.readLine()) != null) {
//				System.out.println(content);
				bw.write(content);
				bw.newLine();//换行操作
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=e("em",null,"Java-使用处理流完成文件的拷贝",-1),h={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"},f=e("hr",null,null,-1),p=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),x=e("hr",null,null,-1),g=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function j(w,F){const i=c("ExternalLinkIcon");return d(),l("div",null,[r(" more "),e("h1",o,[u,n(),e("a",m,[n("143-Java-使用处理流完成文件的拷贝.md"),t(i)])]),b,e("p",null,[e("strong",null,[n("以上就是我关于 "),_,n(" 知识点的整理与总结的全部内容,"),e("a",h,[n("另附源码"),t(i)])])]),f,p,x,g])}const B=a(v,[["render",j],["__file","java143.html.vue"]]);export{B as default};
