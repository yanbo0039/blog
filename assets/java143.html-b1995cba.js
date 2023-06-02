import{_ as a,X as r,Y as s,a1 as d,Z as e,$ as n,a2 as t,a0 as l,F as c}from"./framework-68dd73a2.js";const v={},o={id:"_143-java-使用处理流完成文件的拷贝-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_143-java-使用处理流完成文件的拷贝-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--143-Java--e87n80ct36dyjhhtyb9c3tox66aiqznrec5hbn7k.md",target:"_blank",rel:"noopener noreferrer"},b=l(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 字符流的读写;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,5),h={class:"hint-container tip"},_=e("p",{class:"hint-container-title"},"提示",-1),p=e("em",null,"Java-使用处理流完成文件的拷贝",-1),f={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"};function x(g,j){const i=c("ExternalLinkIcon");return r(),s("div",null,[d(" more "),e("h1",o,[u,n(),e("a",m,[n("143-Java-使用处理流完成文件的拷贝.md"),t(i)])]),b,e("div",h,[_,e("p",null,[e("strong",null,[n("以上就是我关于 "),p,n(" 知识点的整理与总结的全部内容,"),e("a",f,[n("另附源码"),t(i)])])])])])}const F=a(v,[["render",x],["__file","java143.html.vue"]]);export{F as default};
