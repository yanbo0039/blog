import{_ as i,X as s,Y as a,a1 as d,Z as e,$ as n,a2 as l,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_250_1.png",u={},m={id:"_250-java网络编程-实现客户端与服务器多对一循环聊天-md",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_250-java网络编程-实现客户端与服务器多对一循环聊天-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--250-Java--375nzem99cg3l99iqgo68a7bx5gb61b75l3wy8q7dma9510b9wen04a0mbf8b3yo.md",target:"_blank",rel:"noopener noreferrer"},p=r(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

//服务器
public class T_Server {

	public static void main(String[] args) {
		ServerSocket ss = null;
		Socket socket = null;
		try {
			//1.启动服务器
			ss = new ServerSocket(8888);
			System.out.println(&quot;服务器已启动....&quot;);
			
			while(true)
			{
				//2.等待客户端连接
				socket = ss.accept();//阻塞式方式，直到客户端连接进来，后续代码才能继续执行
				System.out.println(&quot;有新的客户端连接进来........&quot; + socket.getInetAddress() + &quot;:&quot; + socket.getPort());
				
				//开启一个线程专门负责与客户端聊天
				T_Server_Thread t1 =new T_Server_Thread(socket);
				t1.start();
			}
			
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

//客户端
public class T_Client {

	public static void main(String[] args) {
		Socket socket = null;
		try {
			//3.连接服务器
			socket = new Socket(&quot;127.0.0.1&quot;,8888);//localhost 127.0.0.1表示本机    也可以写具体的IP地址
		
			PrintWriter writer = new PrintWriter(new OutputStreamWriter(socket.getOutputStream()));           //字符流  一行一行输出数据
			BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream())); //字符流  一行一行读取数据
			while(true)
			{
				//4.给服务器发送消息
				Scanner scanner = new Scanner(System.in);
				System.out.println(&quot;客户端，请输入：&quot;);
				String sendMessage = scanner.nextLine();
				
				writer.println(sendMessage);
				writer.flush();
				
				//判断如果客户端输入&quot;exit&quot;，表客户端准备退出
				if(&quot;exit&quot;.equals(sendMessage))
				{
					break;
				}
				
				//7.接收服务器消息
				String message = reader.readLine();
				System.out.println(&quot;服务端说：&quot; + message);
			}
			
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

//服务端线程：负责与客户端之间互发消息
public class T_Server_Thread extends Thread {

	private Socket socket;
	
	public T_Server_Thread(Socket socket)
	{
		this.socket = socket;
	}
	
	@Override
	public void run() {
		try {
			BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));//字符流  一行一行读取数据
			PrintWriter writer = new PrintWriter(new OutputStreamWriter(socket.getOutputStream())); //字符流  一行一行输出数据
			while(true)
			{
				//5.接收客户端发送的消息
				String message = reader.readLine();
				System.out.println(&quot;客户端说：&quot; + message);
				
				//判断客户端是否下线
				if(&quot;exit&quot;.equals(message))
				{
					System.out.println(&quot;----------【公告：客户端已下线】-----------------&quot;);
				}
				
				//6.给客户端发送消息
				Scanner scanner = new Scanner(System.in);
				System.out.println(&quot;服务端，请输入：&quot;);
				String sendMessage = scanner.nextLine();
				
				writer.println(sendMessage);
				writer.flush();
			}
		} catch (IOException e) {
			e.printStackTrace();
		}   
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现效果" tabindex="-1"><a class="header-anchor" href="#实现效果" aria-hidden="true">#</a> 实现效果</h4><ol><li><p>先开启服务端，再开客户端</p></li><li><p>切换至客户端 输入 我是一号客户端</p></li><li><p>切换至服务端 输入 收到</p></li><li><p>再开启T_Client.java 相当于开了两客户端 输入 我是二号客户端</p></li><li><p>切换服务端 输入 收到</p></li></ol><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>Java网络编程-实现客户端与服务器多对一循环聊天</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',18);function h(S,g){const t=v("ExternalLinkIcon");return s(),a("div",null,[d(" more "),e("h1",m,[b,n(),e("a",o,[n("250-Java网络编程-实现客户端与服务器多对一循环聊天.md"),l(t)])]),p])}const f=i(u,[["render",h],["__file","java250.html.vue"]]);export{f as default};
