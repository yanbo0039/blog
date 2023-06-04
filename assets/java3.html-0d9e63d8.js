import{_ as e,X as s,Y as t,a1 as o,Z as i,$ as a,a2 as r,a0 as l,F as d}from"./framework-68dd73a2.js";const c="/blog/assets/Java_3_1.png",g="/blog/assets/Java_3_2.png",p="/blog/assets/Java_3_3.png",v="/blog/assets/Java_3_4.png",_="/blog/assets/Java_3_5.png",u="/blog/assets/Java_3_6.png",m="/blog/assets/Java_3_7.png",f="/blog/assets/Java_3_8.png",b="/blog/assets/Java_3_9.png",h="/blog/assets/Java_3_10.png",x="/blog/assets/Java_3_11.png",j="/blog/assets/Java_3_12.png",J="/blog/assets/Java_3_13.png",y="/blog/assets/Java_3_14.png",w="/blog/assets/Java_3_15.png",z="/blog/assets/Java_3_16.png",k="/blog/assets/Java_3_17.png",H="/blog/assets/Java_3_18.png",A="/blog/assets/Java_3_19.png",W="/blog/assets/Java_3_20.png",V="/blog/assets/Java_3_21.png",E="/blog/assets/Java_3_22.png",S="/blog/assets/Java_3_23.png",P={},I=i("h1",{id:"java环境windows搭建",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#java环境windows搭建","aria-hidden":"true"},"#"),a(" Java环境windows搭建")],-1),N=i("div",{class:"hint-container warning"},[i("p",{class:"hint-container-title"},"注意"),i("p",null,"本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。")],-1),D={href:"https://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"},F=i("br",null,null,-1),M=l('<figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1、安装jdk" tabindex="-1"><a class="header-anchor" href="#_1、安装jdk" aria-hidden="true">#</a> 1、安装jdk</h3><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>比如我安装的路径为 D:\\Program Files\\soft\\jdk
</code></pre><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2、安装jre" tabindex="-1"><a class="header-anchor" href="#_2、安装jre" aria-hidden="true">#</a> 2、安装jre</h3><pre><code>出现如下界面时表示选择jre的安装路径 
我的安装路径为  D:\\Program Files\\soft\\jre
</code></pre><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3、配置环境变量" tabindex="-1"><a class="header-anchor" href="#_3、配置环境变量" aria-hidden="true">#</a> 3、配置环境变量</h3><pre><code>首先得确定自己桌面上有 计算机 的快捷方式图标 如果没有的话。。。。自己问度娘 而后右键属性
</code></pre><figure><img src="`+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+j+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>新建 ----&gt;
变量名：JAVA_HOME
变量值：D:\\Program Files\\soft\\jdk
</code></pre><figure><img src="`+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>新建 ----&gt;
变量名：CLASSPATH
变量值：.;%JAVA_HOME%\\lib
现在的版本都是自动生成
其意义是安装的jdk下面的lib的库 
Java语言创始人所写的API仓库在 lib目录下
</code></pre><figure><img src="`+w+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>  编辑Path
  %JAVA_HOME%\\bin
  注：若前面有语句则带上;号  ;%JAVA_HOME%\\bin
</code></pre><figure><img src="`+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4、cmd验证是否安装成功" tabindex="-1"><a class="header-anchor" href="#_4、cmd验证是否安装成功" aria-hidden="true">#</a> 4、cmd验证是否安装成功</h3><pre><code> cmd中输入 java 确定
</code></pre><figure><img src="`+H+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+A+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code> cmd中输入 javac 确定
</code></pre><figure><img src="`+W+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>cmd 中输入 java -version 确定
</code></pre><figure><img src="`+V+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code> 若出现 以上三个界面则可以说明安装成功 
 若任何一个未正确显示则说明未安装成功
</code></pre><h3 id="_5、尝试用命令编译java程序并运行" tabindex="-1"><a class="header-anchor" href="#_5、尝试用命令编译java程序并运行" aria-hidden="true">#</a> 5、尝试用命令编译Java程序并运行</h3><pre><code>   新建一个HelloWorld.java在D盘 、
   输入
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      /**
*
create table test();
public class HelloWorld 表示声明一个类，类名叫做HelloWorld
class 类名（类体）

https://www.jianshu.com/p/5a67d789216e

*/
/**
*
create table test();
public class HelloWorld 表示声明一个类，类名叫做HelloWorld
class 类名（类体）

https://www.jianshu.com/p/5a67d789216e

*/
public class HelloWorld{

	/**
	public static void main(){};表示定义一个方法，
	方法名是main 前面一堆 public表示公共的方法 static表示静态方法
	void表示该方法没有返回值
	（String[] args）:表示该方法接收的参数
    ｛｝：表示方法体 一般在里面定义算法 从参数到返回值到工作原理
      public static void main(String[] args): java程序的入口方法 没有这个程序是不能运行的。。
	*/
  public static void main(String[] args)
    {
    	//方法体 
    	//朝控制台输出一句话:
       System.out.println(&quot;Hello World! I am xianxian.I love code just like you.&quot;);
    }
    int getAge()
    {
      return 20;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>cmd 中输入 javac HelloWorld.java
则发会现d盘中的javac HelloWorld.java文件被编译成咯.class文件
如图
</code></pre><figure><img src="`+E+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code> cmd 中输入 java HelloWorld
</code></pre><figure><img src="`+S+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>  出现如图界面，则表示一切欧克。。。。
</code></pre><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java环境windows搭建</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,47);function O(q,B){const n=d("ExternalLinkIcon");return s(),t("div",null,[o(" more "),I,N,i("blockquote",null,[i("p",null,[a("以"),i("a",D,[a("jdk-8u161-windows-x64"),r(n)]),F,a(" window10 为例")])]),M])}const L=e(P,[["render",O],["__file","java3.html.vue"]]);export{L as default};
