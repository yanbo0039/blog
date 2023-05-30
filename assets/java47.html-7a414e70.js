import{_ as e,X as i,Y as n,a1 as t,a0 as l}from"./framework-68dd73a2.js";const s={},r=l(`<h1 id="java-实现上传图片功能" tabindex="-1"><a class="header-anchor" href="#java-实现上传图片功能" aria-hidden="true">#</a> Java-实现上传图片功能</h1><ol><li>userinfo_edit.jsp核心代码</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;table width=&quot;90%&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;&gt;
    &lt;tr&gt;
        &lt;td height=&quot;15&quot;&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td height=&quot;7&quot; align=&quot;center&quot; class=&quot;text_cray&quot;&gt;上传照片&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td height=&quot;8&quot;&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td align=&quot;center&quot;&gt;
            &lt;input name=&quot;uploadFile&quot; type=&quot;file&quot; class=&quot;text_cray&quot; size=&quot;20&quot; /&gt;
            &lt;input type=&quot;button&quot; value=&quot;上传&quot; id=&quot;btn_uploadFile&quot; style=&quot;position: relative;top: -21px;left: 70px;&quot;/&gt;
        &lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
&lt;script&gt;
    document.querySelector(&quot;#btn_uploadFile&quot;).onclick = () =&gt; {
        //表单提交，上传照片，告诉我是成功还是失败，最好回显照片

        //1.获取表单元素
        let form = document.querySelector(&quot;#edit_form&quot;);

        //2.修改表单的属性：支持进行二进制数据的提交
        form.encoding = &quot;multipart/form-data&quot;;

        //3.指定处理上传图片请求的servlet
        form.action = &quot;UploadPhotoServlet&quot;;

        //4.表单提交
        form.submit();
        //以下代码将表单属性还原
        //需要修改表单的enctype属性，js中的代码如下：
        form.encoding = &quot;application/x-www-form-urlencoded&quot;;
        form.action = &quot;UpdateUserServlet&quot;;
    }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在WebContent目录下创建photos文件夹</li></ol><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_47_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_47_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_47_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>注</strong> 若不创建则会报如下错误：</p><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_47_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>UploadPhotoServlet</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.controller;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;

import net.ptcs.my12306.entity.Users;
import net.ptcs.my12306.service.UserService;

/**
 * Servlet implementation class UploadPhotoServlet
 */
@WebServlet(description = &quot;负责处理 上传照片的Servlet&quot;, urlPatterns = { &quot;/UploadPhotoServlet&quot; })
@MultipartConfig
public class UploadPhotoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
/*
    * 1.后台使用servlet3.0技术上传照片
    * 2.上传照片需要指定服务器上照片保存的地址，photos文件夹保存照片
    * 3.所以要拿到照片的存储路径，方便回显数据
    */
		
    request.setCharacterEncoding(&quot;utf-8&quot;);
    response.setCharacterEncoding(&quot;utf-8&quot;);
    response.setContentType(&quot;text/html;charset=utf-8&quot;);
// 存储路径
    String savePath = request.getServletContext().getRealPath(
            &quot;/photos&quot;);
    System.out.println(&quot;savePath:&quot;+savePath);
		
// 获取上传的文件集合
//Collection&lt;Part&gt; parts = request.getParts();
// 上传单个文件

// Servlet3.0将multipart/form-data的POST请求封装成Part，通过Part对上传的文件进行操作。
// Part part = parts[0];//从上传的文件集合中获取Part对象
    Part part = request.getPart(&quot;uploadFile&quot;);// 通过表单file控件(&lt;input type=&quot;file&quot;
    // name=&quot;file&quot;&gt;)的名字直接获取Part对象
    // Servlet3没有提供直接获取文件名的方法,需要从请求头中解析出来
    // 获取请求头，请求头的格式：form-data; name=&quot;file&quot;; filename=&quot;snmp4j--api.zip&quot;
    String header = part.getHeader(&quot;content-disposition&quot;);
    // 获取文件名
    String fileName = getFileName(header);
    System.out.println(&quot;fileName:&quot;+fileName);
    // 把文件写到指定路径
    //UUID.randomUUID()+&quot;.jpg&quot;
    part.write(savePath + File.separator + fileName);
		
    //把这个照片路径保存到数据库
    HttpSession session=request.getSession();
    Users user=(Users)session.getAttribute(&quot;user&quot;);
    
    UserService.getInstance().saveImage(user.getId(),fileName);
    //回到更新用户信息页面，让用户看到自己的照片
    response.sendRedirect(&quot;ToUpdateUserServlet&quot;);
			
    /*PrintWriter out = response.getWriter();
    out.println(&quot;上传成功&quot;);
    out.flush();
    out.close();
    */
	}

	/**
	 * 根据请求头解析出文件名 请求头的格式：火狐和google浏览器下：form-data; name=&quot;file&quot;;
	 * filename=&quot;snmp4j--api.zip&quot; IE浏览器下：form-data; name=&quot;file&quot;;
	 * filename=&quot;E:\\snmp4j--api.zip&quot;
	 * 
	 * @param header
	 *            请求头
	 * @return 文件名
	 */
	public String getFileName(String header) {
    /**
    * String[] tempArr1 =
    * header.split(&quot;;&quot;);代码执行完之后，在不同的浏览器下，tempArr1数组里面的内容稍有区别
    * 火狐或者google浏览器下：
    * tempArr1={form-data,name=&quot;file&quot;,filename=&quot;snmp4j--api.zip&quot;}
    * IE浏览器下：tempArr1={form-data,name=&quot;file&quot;,filename=&quot;E:\\snmp4j--api.zip&quot;}
    */
    System.out.println(&quot;header：&quot;+header);
    String[] tempArr1 = header.split(&quot;;&quot;);
    /**
    * 火狐或者google浏览器下：tempArr2={filename,&quot;snmp4j--api.zip&quot;}
    * IE浏览器下：tempArr2={filename,&quot;E:\\snmp4j--api.zip&quot;}
    */
    System.out.println(&quot;tempArr1:&quot;+tempArr1);
    String[] tempArr2 = tempArr1[2].split(&quot;=&quot;);
    // 获取文件名，兼容各种浏览器的写法
    System.out.println(&quot;tempArr2:&quot;+tempArr2);
    String fileName = tempArr2[1].substring(tempArr2[1].lastIndexOf(&quot;\\\\&quot;) + 1).replaceAll(&quot;\\&quot;&quot;, &quot;&quot;);
    System.out.println(&quot;fileName:&quot;+fileName);
    return fileName;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>UpdateServlet</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class UpdateServlet
 */
@WebServlet(&quot;/UpdateServlet&quot;)
public class UpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String id=request.getParameter(&quot;id&quot;);
		String realname=request.getParameter(&quot;realname&quot;);
		
		System.out.println(id+&quot;,&quot;+realname);
		
		//重定向到ToUpdateUserServlet即可
		response.sendRedirect(&quot;ToUpdateUserServlet&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结果演示</strong><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_47_1.gif" alt="" loading="lazy"></p><p>其上传的图片在Tomcat服务器项目目录的photos文件夹内</p><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_47_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,20);function a(d,v){return i(),n("div",null,[t(" more "),r])}const o=e(s,[["render",a],["__file","java47.html.vue"]]);export{o as default};
