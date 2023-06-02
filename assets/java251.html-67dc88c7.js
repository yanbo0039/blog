import{_ as e,X as i,Y as n,a1 as t,a0 as s}from"./framework-68dd73a2.js";const d={},l=s(`<h1 id="_251-java络编程-实现客户端与客户端循环聊天-带思路-md" tabindex="-1"><a class="header-anchor" href="#_251-java络编程-实现客户端与客户端循环聊天-带思路-md" aria-hidden="true">#</a> 251-Java络编程-实现客户端与客户端循环聊天_带思路.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05.带思路版;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

//客户端：接收消息线程
public class T_Client_Thread_Receive extends Thread {

	private Socket socket;
	
	public T_Client_Thread_Receive(Socket socket)
	{
		this.socket = socket;
	}
	
	@Override
	public void run() {
		try {
			while(true)
			{
				BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));//字符流  一行一行读取数据
				String message = reader.readLine();
				
				System.out.println(&quot;服务端说：&quot; + message);
			}
		} catch (IOException e) {
			e.printStackTrace();
		} 
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05.带思路版;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

//客户端：发送消息线程
public class T_Client_Thread_Send extends Thread {
	
	private Socket socket;
	
	public T_Client_Thread_Send(Socket socket)
	{
		this.socket = socket;
	}
	
	@Override
	public void run() {
		try {
			while(true)
			{
				PrintWriter writer = new PrintWriter(new OutputStreamWriter(socket.getOutputStream()));//字符流  一行一行输出数据
	
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
			}
		} catch (IOException e) {
			e.printStackTrace();
		}           
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05.带思路版;

import java.io.IOException;
import java.net.Socket;
import java.net.UnknownHostException;

//客户端
public class T_Client {

	public static void main(String[] args) {
		Socket socket = null;
		try {
			//3.连接服务器
			socket = new Socket(&quot;127.0.0.1&quot;,8888);//localhost 127.0.0.1表示本机    也可以写具体的IP地址
		
			//4.给服务器发送消息
			T_Client_Thread_Send sendThread = new T_Client_Thread_Send(socket);
			sendThread.start();
			
			//7.接收服务器消息
			T_Client_Thread_Receive receiveThread = new T_Client_Thread_Receive(socket);
			receiveThread.start();
			
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			//8.关闭资源、释放资源
			/*try {
				if(socket != null)
				{
					socket.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}*/
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05.带思路版;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Collection;
import java.util.HashMap;
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
				
				//群发：给所有客户端转发收到的消息
				HashMap&lt;Integer,Socket&gt; socketMap = T_Server.socketMap;
				Collection&lt;Socket&gt; sockets = socketMap.values();
				for (Socket clientSocket : sockets) {
					PrintWriter clientWriter = new PrintWriter(new OutputStreamWriter(clientSocket.getOutputStream())); //字符流  一行一行输出数据
					clientWriter.println(message);
					clientWriter.flush();
				}
				
				//6.给客户端发送消息
				/*Scanner scanner = new Scanner(System.in);
				System.out.println(&quot;服务端，请输入：&quot;);
				String sendMessage = scanner.nextLine();
				
				writer.println(sendMessage);
				writer.flush();*/
			}
		} catch (IOException e) {
			e.printStackTrace();
		}   
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter05.带思路版;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.HashMap;

//服务器
public class T_Server {

	//用于保存所有跟客户端聊天的socket对象
	static HashMap&lt;Integer,Socket&gt; socketMap = new HashMap&lt;&gt;();
	
	public static void main(String[] args) {
		ServerSocket ss = null;
		Socket socket = null;
		try {
			//1.启动服务器
			ss = new ServerSocket(8888);
			System.out.println(&quot;服务器已启动....&quot;);
			
			int count = 1;
			while(true)
			{
				//2.等待客户端连接
				socket = ss.accept();//阻塞式方式，直到客户端连接进来，后续代码才能继续执行
				System.out.println(&quot;有新的客户端连接进来........&quot; + socket.getInetAddress() + &quot;:&quot; + socket.getPort());
				
				//保存所有的socket
				socketMap.put(count++, socket);
				
				//开启一个线程专门负责与客户端聊天
				T_Server_Thread t1 =new T_Server_Thread(socket);
				t1.start();
				
				System.out.println(socketMap);
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java络编程-实现客户端与客户端循环聊天_带思路</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,17);function a(v,r){return i(),n("div",null,[t(" more "),l])}const u=e(d,[["render",a],["__file","java251.html.vue"]]);export{u as default};
