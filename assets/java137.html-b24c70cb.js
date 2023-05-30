import{_ as s,X as a,Y as l,a1 as d,Z as e,$ as n,a2 as i,a0 as r,F as c}from"./framework-68dd73a2.js";const v={},o={id:"_137-java-使用fileinputstream读取文件内容-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_137-java-使用fileinputstream读取文件内容-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--137-Java-FileInputStream-3632bl3gcutmyp737cmq9cjivfvw6g.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<p>项目文件及路径如图所示：</p><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_137_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>abc.txt的内容：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>qwertfdfdsfdsfdsfdsfdsfdsf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 对文件进行读取操作;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class TestReadFile_InputStream {

	public static void main(String[] args) {

		/**
		 * 对文件进行读写操作套路：
		 * 1. 总是声明文件对象
		 * 2. 实例化流
		 * 3. 读或者写，注意要循环读取
		 * 4.把流关闭
		 */
		
		//1. 总是声明文件对象
		File source = new File(&quot;file&quot;,&quot;abc.txt&quot;);
		
		//2. 实例化流
		InputStream is = null;
		
		try {
			is = new FileInputStream(source);
			
			int result = -1;//存放读的字节，就是读的结果
		
			while((result = is.read()) != -1) {
				System.out.print((char)result);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally {//把流关闭
			try {
				is.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}	
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上代码读取成功，运行结果如下：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>qwertfdfdsfdsfdsfdsfdsfdsf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="拓展知识点" tabindex="-1"><a class="header-anchor" href="#拓展知识点" aria-hidden="true">#</a> 拓展知识点：</h4>`,9),p={href:"https://www.cnblogs.com/xiaohanlin/p/8108062.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/ai_bao_zi/article/details/81097898",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.csdn.net/cgydawn/article/details/80587090",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[e("strong",null,"暂未解决问题：文件中有中文时无法正确读取。。。")],-1),g=e("em",null,"Java-使用FileInputStream读取文件内容",-1),x={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"},I=e("hr",null,null,-1),S=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),F=e("hr",null,null,-1),k=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function j(w,q){const t=c("ExternalLinkIcon");return a(),l("div",null,[d(" more "),e("h1",o,[u,n(),e("a",m,[n("137-Java-使用FileInputStream读取文件内容.md"),i(t)])]),b,e("p",null,[e("a",p,[n("Java FileInputStream与FileReader的区别"),i(t)])]),e("p",null,[e("a",h,[n("java基础知识之FileInputStream流"),i(t)])]),e("p",null,[e("a",_,[n("JAVA IO流——FileInputStream学习（一）（超级小白版）"),i(t)])]),f,e("p",null,[e("strong",null,[n("以上就是我关于 "),g,n(" 知识点的整理与总结的全部内容,"),e("a",x,[n("另附源码"),i(t)])])]),I,S,F,k])}const E=s(v,[["render",j],["__file","java137.html.vue"]]);export{E as default};
