import{_ as a}from"./Java_154_1-d55ed9e0.js";import{_ as s,X as r,Y as c,a1 as d,Z as e,$ as n,a2 as t,a0 as l,F as v}from"./framework-68dd73a2.js";const o={},m={id:"_154-java-使用套接字模拟服务端和客户端进行通信-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_154-java-使用套接字模拟服务端和客户端进行通信-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--154-Java--jd9nw7am5vnug0ptp7gm8ap06ekucp5empx0hpmh1de11ada9366focybwnb.md",target:"_blank",rel:"noopener noreferrer"},p=l(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 网络编程;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试(必须先启动服务端，而后再启动客户端)结果如图所示：</p><figure><img src="`+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr>',8),h={class:"hint-container info"},_=e("p",{class:"hint-container-title"},"相关信息",-1),g=e("em",null,"Java-使用套接字模拟服务端和客户端进行通信",-1),x={href:"https://github.com/javaobjects/demo521/commits/master",target:"_blank",rel:"noopener noreferrer"};function f(k,S){const i=v("ExternalLinkIcon");return r(),c("div",null,[d(" more "),e("h1",m,[u,n(),e("a",b,[n("154-Java-使用套接字模拟服务端和客户端进行通信.md"),t(i)])]),p,e("div",h,[_,e("p",null,[e("strong",null,[n("以上就是我关于 "),g,n(" 知识点的整理与总结的全部内容,"),e("a",x,[n("另附源码"),t(i)])])])])])}const w=s(o,[["render",f],["__file","java154.html.vue"]]);export{w as default};
