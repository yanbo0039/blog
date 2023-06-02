import{_ as i,X as e,Y as n,a1 as t,a0 as s}from"./framework-68dd73a2.js";const a="/blog/assets/Java_261_1.png",r="/blog/assets/Java_261_2.png",l="/blog/assets/Java_261_3.png",d="/blog/assets/Java_261_4.png",v="/blog/assets/Java_261_5.png",o={},c=s('<h1 id="_261-javaweb如何造数据接口返回json格式数据给前端给实现前后端数据通信-超详细-md" tabindex="-1"><a class="header-anchor" href="#_261-javaweb如何造数据接口返回json格式数据给前端给实现前后端数据通信-超详细-md" aria-hidden="true">#</a> 261-JavaWEB如何造数据接口返回JSON格式数据给前端给实现前后端数据通信(超详细).md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h4><ol><li><p>jdk环境与IDE工具配置完成</p></li><li><p>Tomcat服务器与IDE工具配置完成</p></li><li><p>数据库JDNI等自行配置好</p></li><li><p>导入如下jar包到JAVA-WEB项目的WEB-INF文件夹下的lib文件内，需要自行下载</p></li></ol><figure><img src="'+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>本文以全国的省市城市数据为例，相关数据请自行下载</li></ol><h4 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h4><ul><li>Java示例代码</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package net.tencent.tickets.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.tencent.tickets.dao.factory.LocationDaoFactory;
import net.tencent.tickets.dao.ifac.CityDaoIfac;
import net.tencent.tickets.entity.City;

/**
 * 根据省份编号获取城市列表Servlet
 */
@WebServlet(&quot;/GetCityServlet&quot;)
public class GetCityServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * 响应json格式的字符串 130000
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//1.获取省份编号provinceId
		String provinceId = request.getParameter(&quot;provinceId&quot;);
		System.out.println(&quot;Get 省份编号：&quot; + provinceId);
		
		getCitysByProvinceId(provinceId, request, response);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//1.获取省份编号provinceId
		String provinceId = request.getParameter(&quot;provinceId&quot;);
		System.out.println(&quot;Post 省份编号：&quot; + provinceId);
		
		getCitysByProvinceId(provinceId, request, response);
	}
	
	/**
	 * &lt;p&gt;Title: getCitysByProvinceId&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:通过省份id获取城市
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;
	 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;
	 * @param provinceId
	 * @param request
	 * @param response
	 * @author xianxian
	 * @date 2023年2月27日下午3:34:14
	 * @version 1.0
	 * @throws IOException 
	 */
	private void getCitysByProvinceId(String provinceId,HttpServletRequest request, HttpServletResponse response) throws IOException {
		//2.调用service方法，获取城市列表
		@SuppressWarnings(&quot;static-access&quot;)
		CityDaoIfac cityDao = new LocationDaoFactory().getCityDaoInstance();
		List&lt;City&gt; cityList = cityDao.queryCityByProvinceid(provinceId);
		
		/*
			JSON格式字符串:
			[
				{&quot;id&quot;:138;&quot;cityId&quot;:&quot;370100&quot;,&quot;cityName&quot;:&quot;济南市&quot;},
				{&quot;id&quot;:139;&quot;cityId&quot;:&quot;370200&quot;,&quot;cityName&quot;:&quot;青岛市&quot;},
				{&quot;id&quot;:140;&quot;cityId&quot;:&quot;370300&quot;,&quot;cityName&quot;:&quot;淄博市&quot;},
			]
			
			[]表示一个数组，{}表示一个对象
		 */
		JSONArray JsonArray = JSONArray.fromObject(cityList);
		System.out.println(&quot;json格式的字符串：&quot; + JsonArray.toString());
		
		//3.处理结果
		response.setContentType(&quot;application/json;charset=utf-8&quot;);
		PrintWriter writer = response.getWriter();
		writer.write(JsonArray.toString());
		writer.flush();
		writer.close();
	}
	
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>前端示例代码</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>$(function () {
        $(&quot;#username&quot;).blur(function(){
            var username = $(&quot;#username&quot;).val();
            console.info(username);
            $.ajax({
                    url:&quot;/tickets/GetCityServlet&quot;,
                    method:&quot;POST&quot;,
                    data:{provinceId:130000},
                    dataType:&quot;json&quot;,
                    beforeSend:function (XMLHttpRequest) {},
                    success:function (data,textStatus,XMLHttpRequest) {
                        console.log(data);
                        //$(&quot;#mess&quot;).text(data);
                    },
                    error:function (XMLHttpRequest,textStatus,errorThorwn) {
                            console.error(XMLHttpRequest);
                            console.error(textStatus);
                            console.error(errorThorwn)
                    },
                    complete:function (XMLHttpRequest,textStatus) {}
                    })
        });
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试前后端数据通信" tabindex="-1"><a class="header-anchor" href="#测试前后端数据通信" aria-hidden="true">#</a> 测试前后端数据通信</h4><ul><li>如下图所示，通过输入框的失焦而进行触发，控制台得到如下数据</li></ul><h5 id="post测试" tabindex="-1"><a class="header-anchor" href="#post测试" aria-hidden="true">#</a> POST测试</h5><ol><li>Java IDE工具控制台</li></ol><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>前端浏览器控制台</li></ol><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="get测试" tabindex="-1"><a class="header-anchor" href="#get测试" aria-hidden="true">#</a> GET测试</h5><ol><li>Java IDE工具控制台</li></ol><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>前端浏览器控制台</li></ol><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如上所述测试完成</p></blockquote><p><strong>以上就是我关于 <em>JavaWEB如何造数据接口返回JSON格式数据给前端给实现前后端数据通信(超详细)</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><ol><li>当然前端传输的是简单的键值对儿的对象，如果前端传入的是一个对象数组 [{k1:v1},{k2:v2}...]那么后接收参数的时候需要将其转一下即可</li></ol><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',34);function u(m,p){return e(),n("div",null,[t(" more "),c])}const g=i(o,[["render",u],["__file","java261.html.vue"]]);export{g as default};
