import{_ as t,X as e,Y as n,a1 as i,a0 as s}from"./framework-68dd73a2.js";const a="/blog/assets/Java_249_1.png",d={},r=s(`<h1 id="_249-java网络编程-实现客户端与服务器一对一循环聊天-md" tabindex="-1"><a class="header-anchor" href="#_249-java网络编程-实现客户端与服务器一对一循环聊天-md" aria-hidden="true">#</a> 249-Java网络编程-实现客户端与服务器一对一循环聊天..md</h1><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

//服务器
public class B_Server {

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
			
			BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));   //字符流  一行一行读取数据
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

//客户端
public class B_Client {

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现效果" tabindex="-1"><a class="header-anchor" href="#实现效果" aria-hidden="true">#</a> 实现效果</h4><figure><img src="`+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>Java网络编程-实现客户端与服务器一对一循环聊天</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',15);function l(v,c){return e(),n("div",null,[i(" more "),r])}const m=t(d,[["render",l],["__file","index.html.vue"]]);export{m as default};
