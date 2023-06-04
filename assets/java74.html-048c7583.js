import{_ as e,X as t,Y as s,a1 as l,Z as i,$ as n,a2 as r,a0 as o,F as d}from"./framework-68dd73a2.js";const c="/blog/assets/Java_74_1.png",v="/blog/assets/Java_74_2.png",g="/blog/assets/Java_74_3.png",p="/blog/assets/Java_74_4.png",m="/blog/assets/Java_74_5.png",u="/blog/assets/Java_74_6.png",b="/blog/assets/Java_74_7.png",_={},f={id:"_74-java-helloworld代码的解析-md",tabindex:"-1"},h=i("a",{class:"header-anchor",href:"#_74-java-helloworld代码的解析-md","aria-hidden":"true"},"#",-1),x={href:"http://xn--74-Java-HelloWorld-bj52az327a1vxcq3gpl5i.md",target:"_blank",rel:"noopener noreferrer"},j=o(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p><strong>HelloWorld.java</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
create table test();---oracle 数据库建表
public class HelloWorld:表示声明了一个类，类名叫做HelloWorld
以后声明一个类都是这样 class 类名 { 类体 }
**/

public class HelloWorld{
	
	/**
	 public static void main(){}:表示定义一个方法，方法名是main，
	 前面一堆：public表示 
	 公共方法;static表示静态方法;
	 void表示该方法没有返回值
	 (String[] args):表示该方法接收的参数
	 {}:表示方法体，一般在里面定义算法，从参数到 返回值的工作原理
	 public static void main(String[] args):java程序的入口方法
	**/
    public static void main(String[] args) {
		//方法体
		//朝控制台输出一句话
		//System是Java底层的一个类
		System.out.println(&quot;Hello World! I&#39;m xian xian ....&quot;);
	}
	
	void getId(){}
	
	int getAge(){
		return 20;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>学习Java必备API：</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>常用<strong>jdk1.8中文百度.CHM</strong> ,例找System的API</p><p>java ---&gt; lang(语言包) ---&gt; System</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Java程序必须有入口方法，若没有则程序无法运行，例将入口方法注释：</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如上图所示，运行 <strong>javac HelloWorld.java</strong> 命令时报错<strong>编码GBK的不可映射字符</strong></p><p>解决方法，如下图</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再次运行命令<strong>javac HelloWorld.java</strong>，则通过编译</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>输入命令<strong>java HelloWorld</strong></p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>则报错提示必须要有入口函数，故java代码要运行，必须要有入口函数。</p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java-HelloWorld代码的解析</em> 知识点的整理与总结的全部内容</strong></p></div>',23);function J(H,y){const a=d("ExternalLinkIcon");return t(),s("div",null,[l(" more "),i("h1",f,[h,n(),i("a",x,[n("74-Java-HelloWorld代码的解析.md"),r(a)])]),j])}const z=e(_,[["render",J],["__file","java74.html.vue"]]);export{z as default};
