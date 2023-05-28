import{_ as s,X as l,Y as a,a1 as r,Z as e,$ as t,a2 as i,a0 as d,F as c}from"./framework-68dd73a2.js";const v="/blog/assets/Java_138_1.png",o="/blog/assets/Java_138_2.png",u={},m={id:"_138-java-使用fileoutputstream写文件-md",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_138-java-使用fileoutputstream写文件-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--138-Java-FileOutputStream-0l04bh1g45tn14l675d.md",target:"_blank",rel:"noopener noreferrer"},h=d('<p>如图所示，目标文件中的内容：</p><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>运行如下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 对文件进行写操作;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class TestWriteFile_OutputStream {

	public static void main(String[] args) {

		/**
		 * 对文件进行写操作的完整套路：
		 * 1、要有目标文件，内容的输出地
		 * 2、要实例化输出流
		 * 3、写操作，肯定要while循环
		 * 4、流要关闭
		 * 
		 * 
		 */
		File path = new File(&quot;file&quot;);
		
		if(!path.exists()) {
			path.mkdir();//创建一级目录 
		}
		
		File dest = new File(path,&quot;abc.txt&quot;);
		
		if(!dest.exists()) {
			try {
				dest.createNewFile();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		//2.要实例化输出流
		FileOutputStream fos = null;
		
		try {
			//默认删除写，若想要追加写则需要后面加参数true
			fos = new FileOutputStream(dest);
			//3.写操作
			String message = &quot;qwert&quot;;//写的内容
			byte[] b = message.getBytes();
//			1024的倍数，线程1：0-1024 线程：1024-2048 线程：2048-3072
//			fos.write(b);//可以直接写入一个byte数组
			for (int i = 0; i &lt; b.length; i++) {
				fos.write(b[i]);
			}
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				fos.close();//4. 流要关闭
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果如下：</strong></p><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="知识扩展" tabindex="-1"><a class="header-anchor" href="#知识扩展" aria-hidden="true">#</a> 知识扩展：</h4>',7),_={href:"https://www.cnblogs.com/alltoforever/p/10054717.html",target:"_blank",rel:"noopener noreferrer"},f={href:"http://www.360doc.com/content/10/1015/09/1542811_61128497.shtml",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/ysk_xh_521/article/details/77278711",target:"_blank",rel:"noopener noreferrer"},x=e("em",null,"Java-使用FileOutputStream写文件",-1),k={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"},w=e("hr",null,null,-1),F=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),t(" 分割线")],-1),S=e("hr",null,null,-1),y=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function O(j,J){const n=c("ExternalLinkIcon");return l(),a("div",null,[r(" more "),e("h1",m,[b,t(),e("a",p,[t("138-Java-使用FileOutputStream写文件.md"),i(n)])]),h,e("p",null,[e("a",_,[t("Java多线程文件复制功能"),i(n)])]),e("p",null,[e("a",f,[t("Java 多线程文件拷贝"),i(n)])]),e("p",null,[e("a",g,[t("Java简单实现多线程复制文件"),i(n)])]),e("p",null,[e("strong",null,[t("以上就是我关于 "),x,t(" 知识点的整理与总结的全部内容,"),e("a",k,[t("另附源码"),i(n)])])]),w,F,S,y])}const E=s(u,[["render",O],["__file","java138.html.vue"]]);export{E as default};
