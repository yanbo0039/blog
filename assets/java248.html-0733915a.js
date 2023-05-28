import{_ as n,X as a,Y as s,a1 as r,Z as e,$ as t,a2 as d,a0 as l,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_248_1.png",u={},m={id:"_248-java网络编程-实现客户端与服务器连接-md",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#_248-java网络编程-实现客户端与服务器连接-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--248-Java--3c6nr61bt5ko5qvb479nohfqxqvn9cfizapzd21zqebz0b0z4v.md",target:"_blank",rel:"noopener noreferrer"},p=l('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

//服务器
public class Server {

	public static void main(String[] args) {
		ServerSocket ss = null;
		Socket socket = null;
		try {
			//1.启动服务器
			ss = new ServerSocket(8888);
			System.out.println(&quot;服务器已启动....&quot;);
			
			//2.等待客户端连接
			socket = ss.accept();//阻塞式方式，直到客户端连接进来，后续代码才能继续执行
			System.out.println(&quot;有新的客户端连接进来........&quot; + socket.getInetAddress() + &quot;:&quot; + socket.getPort());
			
			//5.接收客户端发送的消息
			InputStream in = socket.getInputStream();				//字节流   一个字节一个字节读取数据
			InputStreamReader inReader = new InputStreamReader(in); //字符流  一个字符一个字符读取数据
			BufferedReader reader = new BufferedReader(inReader);   //字符流  一行一行读取数据
			
			String message = reader.readLine();
			System.out.println(&quot;客户端说：&quot; + message);
			
			//6.给客户端发送消息
			PrintWriter writer = new PrintWriter(new OutputStreamWriter(socket.getOutputStream())); //字符流  一行一行输出数据
			writer.println(&quot;你好，我不在，请留言！！！&quot;);
			writer.flush();
			
		} catch (IOException e) {
			e.printStackTrace();
		} finally{
			//8.关闭资源、释放资源
			try {
				if(socket != null)
				{
					socket.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
			try {
				if(ss != null)
				{
					ss.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;

//客户端
public class Client {

	public static void main(String[] args) {
		Socket socket = null;
		try {
			//3.连接服务器
			socket = new Socket(&quot;127.0.0.1&quot;,8888);//localhost 127.0.0.1表示本机    也可以写具体的IP地址
		
			//4.给服务器发送消息
			OutputStream out = socket.getOutputStream();               //字节流    一个字节一个字节输出数据
			OutputStreamWriter outWriter = new OutputStreamWriter(out);//字符流     一个字符一个字符输出数据
			PrintWriter writer = new PrintWriter(outWriter);           //字符流  一行一行输出数据
			
			writer.println(&quot;你好，在吗？&quot;);
			writer.flush();
			
			//7.接收服务器消息
			BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream())); //字符流  一行一行读取数据
			String message = reader.readLine();
			System.out.println(&quot;服务端说：&quot; + message);
			
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			//8.关闭资源、释放资源
			try {
				if(socket != null)
				{
					socket.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java网络编程-实现客户端与服务器连接</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,14);function h(S,f){const i=v("ExternalLinkIcon");return a(),s("div",null,[r(" more "),e("h1",m,[o,t(),e("a",b,[t("248-Java网络编程-实现客户端与服务器连接.md"),d(i)])]),p])}const k=n(u,[["render",h],["__file","java248.html.vue"]]);export{k as default};
