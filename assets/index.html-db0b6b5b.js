import{_ as a,X as l,Y as d,a1 as s,Z as e,$ as n,a2 as t,a0 as r,F as c}from"./framework-68dd73a2.js";const v={},o={id:"_140-java-使用filereader读取文件内容有中文-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_140-java-使用filereader读取文件内容有中文-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--140-Java-FileReader-ox83au6i2tdzrru3nh61crj3cea029h3h7hud3g.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<ol><li><p>新建一个txt文件，并输入中文内容，并另存为编码为UTF-8的格式</p></li><li><p>运行如下代码：</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 字符流的读写;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),h=e("em",null,"Java-使用FileReader读取文件内容有中文",-1),_={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"},p=e("hr",null,null,-1),x=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),f=e("hr",null,null,-1),g=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function F(j,k){const i=c("ExternalLinkIcon");return l(),d("div",null,[s(" more "),e("h1",o,[u,n(),e("a",m,[n("140-Java-使用FileReader读取文件内容有中文.md"),t(i)])]),b,e("p",null,[e("strong",null,[n("以上就是我关于 "),h,n(" 知识点的整理与总结的全部内容,"),e("a",_,[n("另附源码"),t(i)])])]),p,x,f,g])}const y=a(v,[["render",F],["__file","index.html.vue"]]);export{y as default};
