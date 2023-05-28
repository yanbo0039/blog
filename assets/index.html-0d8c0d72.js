import{_ as t,X as s,Y as l,a1 as r,Z as e,$ as i,a2 as d,a0 as a,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Java_262_1.png",c="/blog/assets/Java_262_2.png",o="/blog/assets/Java_262_3.png",m={},b={id:"_262-javaweb实现验证码登录验证功能-md",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_262-javaweb实现验证码登录验证功能-md","aria-hidden":"true"},"#",-1),g={href:"http://xn--262-JavaWEB-h79rs94go4kjn8e4ljopg7m9b8z5bda6360fea.md",target:"_blank",rel:"noopener noreferrer"},h=a(`<h4 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h4><ol><li><p>jdk系统环境与IDE工具配置完成</p></li><li><p>IDE工具与tomcat服务器配置完成</p></li><li><p>JavaWEB项目创建好并自行测试完成</p></li><li><p>所需要的jar包请自行配置完成</p></li></ol><h4 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h4><ol><li>后端 Java 类</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package net.tencent.tickets.servlet.login;

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
 * 生成验证码的Servlet
 */
@WebServlet(&quot;/ValidateCodeServlet&quot;)
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

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// 设置响应报头信息
		response.setHeader(&quot;Pragma&quot;, &quot;No-cache&quot;);
		response.setHeader(&quot;Cache-Control&quot;, &quot;no-cache&quot;);
		response.setDateHeader(&quot;Expires&quot;, 0);
		// 设置响应的MIME类型
		response.setContentType(&quot;image/jpeg&quot;);

		BufferedImage image = new BufferedImage(WIDTH, HEIGHT,
				BufferedImage.TYPE_INT_RGB);
		
		
		//画笔工具
		Graphics g = image.getGraphics();
		
		Random rd = new Random();

		// 设置背景颜色
		g.setColor(new Color(rd.nextInt(55) + 200, rd.nextInt(55) + 200, rd
				.nextInt(55) + 200));
		g.fillRect(0, 0, WIDTH, HEIGHT);

		// 设置字体
		Font mFont = new Font(&quot;Arial&quot;, Font.TRUETYPE_FONT, 18);
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
		se.setAttribute(&quot;code&quot;, result);//将随机生成的验证码存储到session中，用来与用户输入的验证码作对比

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package net.tencent.tickets.servlet.login;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;

@WebServlet(&quot;/UserCodeServlet&quot;)
public class UserCodeServlet extends HttpServlet {

	/**
	 * serialVersionUID
	*/
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doPost(req, resp);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		request.setCharacterEncoding(&quot;utf-8&quot;);
		String userCode = request.getParameter(&quot;code&quot;);// 用户输入的验证码
		// 服务端验证码
		String serverCode = (String) session.getAttribute(&quot;code&quot;);
		Map&lt;String, Boolean&gt; map = new HashMap&lt;&gt;();
		response.setContentType(&quot;application/json;charset=utf-8&quot;);
		PrintWriter writer = response.getWriter();
		
		// ③ 验证码校验：用户输入验证码与服务器生成的验证码是否匹配
		if (userCode == null || !userCode.equalsIgnoreCase(serverCode)) {
			map.put(&quot;result&quot;, false);
		}else {
			map.put(&quot;result&quot;, true);
		}
		
		JSONArray JsonArray = JSONArray.fromObject(map);
		writer.write(JsonArray.toString());
		writer.flush();
		writer.close();
	}

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>前端</li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>//验证码输入框失去焦点时触发
$(&quot;#text_code&quot;).blur(function (){
    let text_code = $(&quot;#text_code&quot;).val();
    $.ajax({
        url: &quot;/tickets/UserCodeServlet&quot;,
        method: &quot;POST&quot;,
        data: {
            code: text_code
        },
        dataType: &quot;json&quot;,
        beforeSend: function (XMLHttpRequest) {
        },
        success: function (data, textStatus, XMLHttpRequest) {
            if(!data[0].result){
                // 验证不通过给出提示
                $(&quot;#alert_title&quot;).text(&quot;验证码输入错误&quot;);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThorwn) {
            console.error(XMLHttpRequest);
            console.error(textStatus);
            console.error(errorThorwn)
        },
        complete: function (XMLHttpRequest, textStatus) {
        }
    })
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>前端所需要输入框请自行补全</li></ol><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><ol><li>测试URL接口</li></ol><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>测试前端页面</li></ol><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>如上所示测试完成，其核心原理在于后端Java生成图片前端获取，而后更改前端图片的路径即可 而后用户根据图上所示的字母输入前端传入后端进行服务端验证，后端返回前端结果而后前端对用户进行提示即可</li></ul><p><strong>以上就是我关于 <em>JavaWEB实现验证码登录验证功能</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',25);function q(x,S){const n=v("ExternalLinkIcon");return s(),l("div",null,[r(" more "),e("h1",b,[p,i(),e("a",g,[i("262-JavaWEB实现验证码登录验证功能.md"),d(n)])]),h])}const H=t(m,[["render",q],["__file","index.html.vue"]]);export{H as default};
