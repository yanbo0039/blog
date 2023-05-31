import{_ as s,X as a,Y as l,a1 as d,Z as e,$ as n,a2 as t,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_139_1.png",u="/blog/assets/Java_139_2.png",o={},m={id:"_139-java-使用字节流进行文件的拷贝-md",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_139-java-使用字节流进行文件的拷贝-md","aria-hidden":"true"},"#",-1),_={href:"http://xn--139-Java--e87n80ctz2fczumgiy93a071af3e026dt8wylvbfn.md",target:"_blank",rel:"noopener noreferrer"},p=r(`<p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 图片的拷贝;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class TestImageCopy {

	public static void main(String[] args) {

		/**
		 * 文件拷贝的套路：
		 * 1. 要有两个文件对象：源文件 目标文件
		 * 2. 要有两个流 ， 一个负责读，一个负责写
		 * 3.循环读写
		 * 4.流都要关闭
		 */
//		1. 要有两个文件对象：源文件 目标文件
		File source = new File(&quot;E:\\\\简书\\\\Java\\\\138-Images\\\\Java_139_1.png&quot;);
//		File source = new File(&quot;E:\\\\Java_139_2.png&quot;);
		
		File dest = new File(&quot;E:\\\\简书\\\\Java\\\\Java_139_3.png&quot;);
//		File dest = new File(&quot;D:\\\\Java_139_4.png&quot;);
		
//		2. 要有两个流 ， 一个负责读，一个负责写
		
		FileInputStream fis = null;
		FileOutputStream fos = null;
		
		try {
			fis = new FileInputStream(source);
			fos = new FileOutputStream(dest);
			
			byte[] b = new byte[3];//存放读的数据
			int numbers = -1;//使用该变量作为循环的条件
			//这里是读，读到b数组中，b数组是我们在内存中开辟缓冲区
			while((numbers = fis.read(b)) != -1) {
				fos.write(b,0,numbers);//读多少写多少
			}
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally {//4.流都要关闭
			try {
				fis.close();
				fos.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="拓展知识点" tabindex="-1"><a class="header-anchor" href="#拓展知识点" aria-hidden="true">#</a> 拓展知识点：</h4>',6),h={href:"https://blog.csdn.net/isAlberYu/article/details/78732550",target:"_blank",rel:"noopener noreferrer"},g=e("em",null,"Java-使用字节流进行文件的拷贝",-1),f={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"},x=e("hr",null,null,-1),F=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),J=e("hr",null,null,-1),j=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function k(w,y){const i=v("ExternalLinkIcon");return a(),l("div",null,[d(" more "),e("h1",m,[b,n(),e("a",_,[n("139-Java-使用字节流进行文件的拷贝.md"),t(i)])]),p,e("p",null,[e("a",h,[n("Java IO流拷贝文件时出现文件夹“（拒绝访问）”的原因以解决方法"),t(i)])]),e("p",null,[e("strong",null,[n("以上就是我关于 "),g,n(" 知识点的整理与总结的全部内容,"),e("a",f,[n("另附源码"),t(i)])])]),x,F,J,j])}const S=s(o,[["render",k],["__file","java139.html.vue"]]);export{S as default};
