import{_ as a,X as s,Y as l,a1 as d,Z as e,$ as n,a2 as i,a0 as r,F as c}from"./framework-68dd73a2.js";const v={},u={id:"_144-java-对象的读与写以及对象的序列化和反序列化-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_144-java-对象的读与写以及对象的序列化和反序列化-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--144-Java--3c6n37ei7m3tba839aba071avb24vdp5cea876lea5928lfa8793lwicha.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p><strong>写对象：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 对象流;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class TestWriteObject {

	public static void main(String[] args) {

		/**
		 * 写对象的套路：
		 * 1. 要有对象
		 * 2. 把对象输出实例化
		 * 3. 写
		 */
		
		Student stu = new Student(100,&quot;sunwukong&quot;,&quot;huaguoshan&quot;);
		File file = new File(&quot;E:\\\\stu.txt&quot;);
		if(!file.exists()) {
			try {
				file.createNewFile();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		try (
				ObjectOutputStream os = new ObjectOutputStream(new FileOutputStream(file))
				)
		{
			os.writeObject(stu);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> sr 瀵硅薄娴?Student帛慀~?w L \x07addresst Ljava/lang/String;L idt Ljava/lang/Integer;L nameq ~ xpt 
huaguoshansr java.lang.Integer鉅亣8 I valuexr java.lang.Number啲?\v斷?  xp   dt 	sunwukong
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>读对象：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 对象流;

import java.io.File;
import java.io.FileInputStream;
import java.io.ObjectInputStream;

public class TestReadObject {

	public static void main(String[] args) {

		/**
		 * 读对象的套路:
		 * 1. 要有对象源，在文件里
		 * 2. 把对象输出流实例化
		 * 3.读
		 */
		File file = new File(&quot;E:\\\\stu.txt&quot;);
		
		try (
				ObjectInputStream is = new ObjectInputStream(new FileInputStream(file))
				){
			Student stu = (Student) is.readObject();
			System.out.println(stu);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Student [id=100, name=sunwukong, address=huaguoshan]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="对象的读写总结" tabindex="-1"><a class="header-anchor" href="#对象的读写总结" aria-hidden="true">#</a> 对象的读写总结：</h3><ol><li>对象的序列化和反序列化</li></ol><p>在互联网上传输数据，一般都是二进制数据， Object-&gt;二进制数据： 对象的序列化 二进制数据-&gt;Object: 对象的反序列化</p><ol start="2"><li><p>为什么要进行序列化和反序列化？传输效率高，传输安全</p></li><li><p>技术实现，要让传输的类实现序列化接口，生成序列号</p></li><li><p>transient关键字可以忽略要序列化的属性，不会对这个属性序列化，起到保护数据的作用</p></li></ol><h3 id="拓展知识点" tabindex="-1"><a class="header-anchor" href="#拓展知识点" aria-hidden="true">#</a> 拓展知识点：</h3>`,14),p={href:"https://blog.csdn.net/weixin_38080573/article/details/90213901",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.cnblogs.com/zhzhlong/p/10000138.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/sphinx1122/article/details/89789929",target:"_blank",rel:"noopener noreferrer"},_=e("hr",null,null,-1),x=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),f=e("hr",null,null,-1),j={class:"hint-container info"},S=e("p",{class:"hint-container-title"},"相关信息",-1),w=e("em",null,"对象的读与写以及对象的序列化和反序列化",-1),O={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"};function k(F,I){const t=c("ExternalLinkIcon");return s(),l("div",null,[d(" more "),e("h1",u,[o,n(),e("a",m,[n("144-Java-对象的读与写以及对象的序列化和反序列化.md"),i(t)])]),b,e("p",null,[e("a",p,[n("新增的文件无法用git status检测到"),i(t)])]),e("p",null,[e("a",h,[n("git status检测不到文件变化"),i(t)])]),e("p",null,[e("a",g,[n("git add 多个文件和文件夹的方法"),i(t)])]),_,x,f,e("div",j,[S,e("p",null,[e("strong",null,[n("以上就是我关于 "),w,n(" 知识点的整理与总结的全部内容,"),e("a",O,[n("另附源码"),i(t)])])])])])}const E=a(v,[["render",k],["__file","java144.html.vue"]]);export{E as default};
