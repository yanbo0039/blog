import{_ as e,X as t,Y as n,a1 as i,a0 as s}from"./framework-68dd73a2.js";const l={},d=s(`<h1 id="java-实现验证码刷新功能" tabindex="-1"><a class="header-anchor" href="#java-实现验证码刷新功能" aria-hidden="true">#</a> Java-实现验证码刷新功能</h1><p><strong>login.jsp</strong>核心代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>      &lt;td&gt;
	        &lt;span class=&quot;text_cray1&quot;&gt;
	        	&lt;img src=&quot;&lt;%=request.getContextPath()%&gt;/ValidateCodeServlet&quot; alt=&quot;&quot; height=&quot;20&quot; id=&quot;login_image_code&quot; onclick=&quot;refresh()&quot;/&gt;
	        &lt;/span&gt;
        &lt;/td&gt;
        &lt;td&gt;
        	&lt;img src=&quot;&lt;%=request.getContextPath()%&gt;/images/text_sx.gif&quot; width=&quot;32&quot; height=&quot;18&quot; onclick=&quot;refresh()&quot; style=&quot;cursor:pointer;&quot;&gt;
       	&lt;/td&gt;
        &lt;td align=&quot;left&quot;&gt;&amp;nbsp;&lt;/td&gt;
      &lt;/tr&gt;
      &lt;script&gt;
         function refresh(){
        	 document.querySelector(&quot;#login_image_code&quot;).src = &quot;&lt;%=request.getContextPath()%&gt;/ValidateCodeServlet?data=&quot;+new Date();
         }
      &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ValidateCodeServlet.java</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.controller;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class ValidateCodeServlet
 */
@WebServlet(description = &quot;&quot;, urlPatterns = { &quot;/ValidateCodeServlet&quot; })
public class ValidateCodeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private char code[] = { &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;, &#39;f&#39;, &#39;g&#39;, &#39;h&#39;, &#39;i&#39;, &#39;j&#39;,
			&#39;k&#39;, &#39;m&#39;, &#39;n&#39;, &#39;p&#39;, &#39;q&#39;, &#39;r&#39;, &#39;s&#39;, &#39;t&#39;, &#39;u&#39;, &#39;v&#39;, &#39;w&#39;, &#39;x&#39;, &#39;y&#39;,
			&#39;z&#39;, &#39;A&#39;, &#39;B&#39;, &#39;C&#39;, &#39;D&#39;, &#39;E&#39;, &#39;F&#39;, &#39;G&#39;, &#39;H&#39;, &#39;J&#39;, &#39;K&#39;, &#39;L&#39;, &#39;M&#39;,
			&#39;N&#39;, &#39;P&#39;, &#39;Q&#39;, &#39;R&#39;, &#39;S&#39;, &#39;T&#39;, &#39;U&#39;, &#39;V&#39;, &#39;W&#39;, &#39;X&#39;, &#39;Y&#39;, &#39;Z&#39;, &#39;2&#39;,
			&#39;3&#39;, &#39;4&#39;, &#39;5&#39;, &#39;6&#39;, &#39;7&#39;, &#39;8&#39;, &#39;9&#39; };
	private static final int WIDTH = 50;
	private static final int HEIGHT = 20;
	private static final int LENGTH = 4;

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// 设置响应报头信息
		response.setHeader(&quot;Pragma&quot;, &quot;No-cache&quot;);
		response.setHeader(&quot;Cache-Control&quot;, &quot;no-cache&quot;);
		response.setDateHeader(&quot;Expires&quot;, 0);
		// 设置响应的MIME类型
		response.setContentType(&quot;image/jpeg&quot;);

		BufferedImage image = new BufferedImage(WIDTH, HEIGHT,
				BufferedImage.TYPE_INT_RGB);
		Font mFont = new Font(&quot;Arial&quot;, Font.TRUETYPE_FONT, 18);
		Graphics g = image.getGraphics();
		Random rd = new Random();

		// 设置背景颜色
		g.setColor(new Color(rd.nextInt(55) + 200, rd.nextInt(55) + 200, rd
				.nextInt(55) + 200));
		g.fillRect(0, 0, WIDTH, HEIGHT);

		// 设置字体
		g.setFont(mFont);

		// 画边框
		g.setColor(Color.black);
		g.drawRect(0, 0, WIDTH - 1, HEIGHT - 1);

		// 随机产生的验证码
		String result = &quot;&quot;;
		for (int i = 0; i &lt; LENGTH; ++i) {
			result += code[rd.nextInt(code.length)];
		}
		HttpSession se = request.getSession();
		se.setAttribute(&quot;code&quot;, result);

		// 画验证码
		for (int i = 0; i &lt; result.length(); i++) {
			g.setColor(new Color(rd.nextInt(200), rd.nextInt(200), rd
					.nextInt(200)));
			g.drawString(result.charAt(i) + &quot;&quot;, 12 * i + 1, 16);
		}

		// 随机产生2个干扰线
		for (int i = 0; i &lt; 2; i++) {
			g.setColor(new Color(rd.nextInt(200), rd.nextInt(200), rd
					.nextInt(200)));
			int x1 = rd.nextInt(WIDTH);
			int x2 = rd.nextInt(WIDTH);
			int y1 = rd.nextInt(HEIGHT);
			int y2 = rd.nextInt(HEIGHT);
			g.drawLine(x1, y1, x2, y2);
		}

		// 释放图形资源
		g.dispose();
		try {
			OutputStream os = response.getOutputStream();

			// 输出图像到页面
			ImageIO.write(image, &quot;JPEG&quot;, os);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到效果如下： <img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_49_1.gif" alt="" loading="lazy"></p><p>以上即完成咯验证码刷新的功能</p><p><strong>拓展知识点Servlet生命周期</strong><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_49_2.png" alt="" loading="lazy"></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,12);function a(r,v){return t(),n("div",null,[i(" more "),d])}const c=e(l,[["render",a],["__file","java49.html.vue"]]);export{c as default};
