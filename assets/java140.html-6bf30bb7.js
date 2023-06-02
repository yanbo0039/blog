import{_ as a,X as r,Y as s,a1 as l,Z as e,$ as i,a2 as t,a0 as d,F as c}from"./framework-68dd73a2.js";const v={},o={id:"_140-java-使用filereader读取文件内容有中文-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_140-java-使用filereader读取文件内容有中文-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--140-Java-FileReader-ox83au6i2tdzrru3nh61crj3cea029h3h7hud3g.md",target:"_blank",rel:"noopener noreferrer"},b=d(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li><p>新建一个txt文件，并输入中文内容，并另存为编码为UTF-8的格式</p></li><li><p>运行如下代码：</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 字符流的读写;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;

public class TestReadFileByFileReader {

	public static void main(String[] args) {
		File source = new File(&quot;E:\\\\abc.txt&quot;);
		
		FileReader reader = null;
		
		try {
			reader = new FileReader(source);//把管道接好 
			
			char[] c = new char[16];
			reader.read(c);
			System.out.println(Arrays.toString(c));
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				reader.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运行结果如下：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[, 河, 呵, 和, 喝, 和, d, f, d, s, f, , , , , ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>`,8),h={class:"hint-container tip"},p=e("p",{class:"hint-container-title"},"提示",-1),_=e("em",null,"Java-使用FileReader读取文件内容有中文",-1),x={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"};function f(g,F){const n=c("ExternalLinkIcon");return r(),s("div",null,[l(" more "),e("h1",o,[u,i(),e("a",m,[i("140-Java-使用FileReader读取文件内容有中文.md"),t(n)])]),b,e("div",h,[p,e("p",null,[e("strong",null,[i("以上就是我关于 "),_,i(" 知识点的整理与总结的全部内容,"),e("a",x,[i("另附源码"),t(n)])])])])])}const k=a(v,[["render",f],["__file","java140.html.vue"]]);export{k as default};
