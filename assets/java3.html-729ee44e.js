import{_ as n,X as t,Y as d,a1 as r,Z as a,$ as i,a2 as c,a0 as l,F as o}from"./framework-68dd73a2.js";const s={},g=a("h1",{id:"java环境windows搭建",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#java环境windows搭建","aria-hidden":"true"},"#"),i(" Java环境windows搭建")],-1),p=a("br",null,null,-1),v={href:"https://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"},u=a("br",null,null,-1),m=l(`<figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1、安装jdk" tabindex="-1"><a class="header-anchor" href="#_1、安装jdk" aria-hidden="true">#</a> 1、安装jdk</h3><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>比如我安装的路径为 D:\\Program Files\\soft\\jdk
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2、安装jre" tabindex="-1"><a class="header-anchor" href="#_2、安装jre" aria-hidden="true">#</a> 2、安装jre</h3><pre><code>出现如下界面时表示选择jre的安装路径 
我的安装路径为  D:\\Program Files\\soft\\jre
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3、配置环境变量" tabindex="-1"><a class="header-anchor" href="#_3、配置环境变量" aria-hidden="true">#</a> 3、配置环境变量</h3><pre><code>首先得确定自己桌面上有 计算机 的快捷方式图标 如果没有的话。。。。自己问度娘 而后右键属性
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>新建 ----&gt;
变量名：JAVA_HOME
变量值：D:\\Program Files\\soft\\jdk
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>新建 ----&gt;
变量名：CLASSPATH
变量值：.;%JAVA_HOME%\\lib
现在的版本都是自动生成
其意义是安装的jdk下面的lib的库 
Java语言创始人所写的API仓库在 lib目录下
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>  编辑Path
  %JAVA_HOME%\\bin
  注：若前面有语句则带上;号  ;%JAVA_HOME%\\bin
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_17.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4、cmd验证是否安装成功" tabindex="-1"><a class="header-anchor" href="#_4、cmd验证是否安装成功" aria-hidden="true">#</a> 4、cmd验证是否安装成功</h3><pre><code> cmd中输入 java 确定
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_18.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_19.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code> cmd中输入 javac 确定
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_20.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>cmd 中输入 java -version 确定
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_21.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code> 若出现 以上三个界面则可以说明安装成功 
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
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_22.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code> cmd 中输入 java HelloWorld
</code></pre><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_3_23.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>  出现如图界面，则表示一切欧克。。。。
</code></pre><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,47);function b(f,h){const e=o("ExternalLinkIcon");return t(),d("div",null,[r(" more "),g,a("p",null,[i("以"),p,a("a",v,[i("jdk-8u161-windows-x64"),c(e)]),u,i(" window10 为例")]),m])}const x=n(s,[["render",b],["__file","java3.html.vue"]]);export{x as default};
