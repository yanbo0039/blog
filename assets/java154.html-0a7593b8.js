import{_ as a,X as s,Y as l,a1 as d,Z as e,$ as n,a2 as t,a0 as r,F as c}from"./framework-68dd73a2.js";const v={},o={id:"_154-java-使用套接字模拟服务端和客户端进行通信-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_154-java-使用套接字模拟服务端和客户端进行通信-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--154-Java--jd9nw7am5vnug0ptp7gm8ap06ekucp5empx0hpmh1de11ada9366focybwnb.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 网络编程;

import java.io.IOException;
import java.net.ServerSocket;

public class TestServer {

	public static void main(String[] args) {
 
		//创建服务端套接字，调用accept方法一直监听客户端的访问请求
		ServerSocket server;
		try {
			server = new ServerSocket(5791);
			server.accept();
			System.out.println(&quot;client connect me......&quot;);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 网络编程;

import java.io.IOException;
import java.net.Socket;
import java.net.UnknownHostException;

public class TestClient {

	public static void main(String[] args) {

		//创建服务端套接字
		try {
			Socket client = new Socket(&quot;localhost&quot;,5791);
			System.out.println(&quot;hello server......&quot;);
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试(必须先启动服务端，而后再启动客户端)结果如图所示：</p><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_154_1.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,4),p=e("em",null,"Java-使用套接字模拟服务端和客户端进行通信",-1),h={href:"https://github.com/javaobjects/demo521/commits/master",target:"_blank",rel:"noopener noreferrer"},_=e("hr",null,null,-1),g=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),x=e("hr",null,null,-1),k=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function f(S,j){const i=c("ExternalLinkIcon");return s(),l("div",null,[d(" more "),e("h1",o,[u,n(),e("a",m,[n("154-Java-使用套接字模拟服务端和客户端进行通信.md"),t(i)])]),b,e("p",null,[e("strong",null,[n("以上就是我关于 "),p,n(" 知识点的整理与总结的全部内容,"),e("a",h,[n("另附源码"),t(i)])])]),_,g,x,k])}const q=a(v,[["render",f],["__file","java154.html.vue"]]);export{q as default};
