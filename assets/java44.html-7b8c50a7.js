import{_ as s,X as l,Y as r,a1 as a,Z as e,$ as t,a2 as n,a0 as d,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_44_1.png",o="/blog/assets/Java_44_2.png",u="/blog/assets/Java_44_3.png",m="/blog/assets/Java_44_4.png",b="/blog/assets/Java_44_5.png",p="/blog/assets/Java_44_6.png",g="/blog/assets/Java_44_7.png",f="/blog/assets/Java_44_8.png",_="/blog/assets/Java_44_9.png",h={},x=d('<h1 id="java-filter使用简介" tabindex="-1"><a class="header-anchor" href="#java-filter使用简介" aria-hidden="true">#</a> Java-Filter使用简介</h1><p><strong>过滤器使用原理</strong><img src="'+c+'" alt="" loading="lazy"></p><p><strong>过滤器的作用：</strong> 过滤器是处于客户端与服务器资源文件之间的一道过滤网，在访问资源文件之前，通过一系列的过滤器对请求进行修改、判断等，把不符合规则的请求在中途拦截或修改。也可以对响应进行过滤，拦截或修改响应。</p><p><strong>Eclipse新建过滤器Filter</strong><img src="'+o+'" alt="" loading="lazy"></p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>配置web.xml</strong></p><figure><img src="'+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>添加如图代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;filter&gt;
    &lt;filter-name&gt;f1&lt;/filter-name&gt;
    &lt;filter-class&gt;net.ptcs.my12306.controller.AccessFilter&lt;/filter-class&gt;
  &lt;/filter&gt;
  &lt;filter-mapping&gt;
    &lt;filter-name&gt;f1&lt;/filter-name&gt;
    &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
  &lt;/filter-mapping&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>AccessFilter过滤器代码实现</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.ptcs.my12306.controller;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.ptcs.my12306.entity.Users;

/**
 * 对访问进行控制的过滤器类
 * @author xianxian
 *
 */
@WebFilter(description = &quot;对访问进行控制的过滤器类&quot;, urlPatterns = { &quot;/AccessFilter&quot; })
public class AccessFilter implements Filter {

	@Override
	public void destroy() {
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		//这行代码保证多个过滤器依次执行 chain.doFilter(request,response);
		/**
		 * 如何进行访问权限控制？
		 * 思路：
		 * 1、获取请求的url
		 * 2、对url进行判断，看用户是不是访问管理员模块，看用户是不是访问用户模块
		 * 3、如果访问管理员模块，那么必须第一登录，第二用户的rule是1，否则先登录去
		 * 4、如何访问用户模块，那么必须第一登录，第二用户的rule是2,否则先登录去
		 * 5、如果访问的既不是管理员模块又不是用户模块，那么放行
		 * 
		 * 
		 */
		HttpServletRequest res = null;
		if(request instanceof HttpServletRequest) {
			res = (HttpServletRequest)request;
		}
		
		HttpServletResponse resp = null;
		if(response instanceof HttpServletResponse) {
			resp = (HttpServletResponse)response;
		}
		
		String url = res.getRequestURL().toString();
		System.out.println(&quot;url:&quot; + url);
		
		
		//从session获取user
		HttpSession session = res.getSession();
		Users user = (Users)session.getAttribute(&quot;user&quot;);
		
		if(url.contains(&quot;/admin/&quot;)) {

			if(user != null) {
				//用户已登录
				if(user.getRule().equals(&quot;1&quot;)) {
					//放行的代码
					chain.doFilter(request,response);
				}else {
					//登录咯但是身份不对 重定向到登录页面
					resp.sendRedirect(res.getContextPath() + &quot;/login.jsp&quot;);
				}
			}else {
				//没有登录重定向到登录页面
				resp.sendRedirect(res.getContextPath() + &quot;/login.jsp&quot;);
			}
		}else if(url.contains(&quot;/user/&quot;)) {
			if(user != null) {
				//用户已登录
				if(user.getRule().equals(&quot;2&quot;)) {
					//放行的代码
					chain.doFilter(request,response);
				}else {
					//登录咯但是身份不对 重定向到登录页面
					resp.sendRedirect(res.getContextPath() + &quot;/login.jsp&quot;);
				}
			}else {
				//没有登录重定向到登录页面
				resp.sendRedirect(res.getContextPath() + &quot;/login.jsp&quot;);
			}
		}else {
			//放行的代码
			chain.doFilter(request,response);
		}
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>以上就是我对filter使用的简介</p><h4 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h4>`,19),q={href:"https://www.cnblogs.com/ygj0930/p/6374212.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://blog.csdn.net/wanghuan203/article/details/7325651",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.cnblogs.com/coderland/p/5902878.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://blog.csdn.net/huyuyang6688/article/details/46276529",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.runoob.com/jsp/jsp-writing-filters.html",target:"_blank",rel:"noopener noreferrer"},y=e("hr",null,null,-1),w=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),t(" 分割线")],-1),J=e("hr",null,null,-1),k=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function C(H,z){const i=v("ExternalLinkIcon");return l(),r("div",null,[a(" more "),x,e("p",null,[e("a",q,[t("Java过滤器Filter使用详解"),n(i)])]),e("p",null,[e("a",j,[t("Java过滤器"),n(i)])]),e("p",null,[e("a",S,[t("Java中的Filter过滤器"),n(i)])]),e("p",null,[e("a",F,[t("java过滤器——filter的使用和配置"),n(i)])]),e("p",null,[e("a",R,[t("JSP 过滤器"),n(i)])]),y,w,J,k])}const P=s(h,[["render",C],["__file","java44.html.vue"]]);export{P as default};
