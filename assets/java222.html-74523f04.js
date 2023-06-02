import{_ as e,X as s,Y as a,a1 as d,Z as n,$ as i,a2 as l,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_222_1.png",m={},u={id:"_222-java工具类-math类-md",tabindex:"-1"},o=n("a",{class:"header-anchor",href:"#_222-java工具类-math类-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--222-Java-Math-b50vl06lqj4gfa.md",target:"_blank",rel:"noopener noreferrer"},h=r('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter01.math算数类;

import java.util.Random;

public class MathDemo {

	public static void main(String[] args) {
		/**
		 * 1.创建对象：Math的所有的属性与方法均为static修饰，不需要new对象
		 */
		
		/**
		 * 2.常用属性
		 */
		//圆周率
		System.out.println(Math.PI);//3.141592653589793
		
		//自然对数底数
		System.out.println(Math.E);//2.718281828459045
		
		/**
		 * 3.常用方法
		 */
		//abs() 取绝对值
		System.out.println(Math.abs(123.456));//123.456
		System.out.println(Math.abs(-123.456));//123.456
		
		//round() 四舍五入取整
		System.out.println(Math.round(123.456));//123
		System.out.println(Math.round(123.556));//124
		System.out.println(Math.round(-123.456));//-123
		System.out.println(Math.round(-123.556));//-124
		
		//ceil() 向上取整:取大于该值最小的整数
		System.out.println(Math.ceil(123.456));//124
		System.out.println(Math.ceil(123.556));//124
		System.out.println(Math.ceil(-123.456));//-123
		System.out.println(Math.ceil(-123.556));//-123
		
		//floor() 向下取整：取小于该值的最大的整数
		System.out.println(Math.floor(123.456));//123
		System.out.println(Math.floor(123.556));//123
		System.out.println(Math.floor(-123.456));//-124
		System.out.println(Math.floor(-123.556));//-124
		
		//max() 取最大值
		System.out.println(Math.max(10, 20));//20
		
		//min() 取最小值
		System.out.println(Math.min(10, 20));//10
		
		//random() 获取随机值，默认0.0~1.0之间
		System.out.println(Math.random());//0.0~1.0之间
		System.out.println(Math.round(Math.random()*10));//0~10之间的整数
		
		//Random类
		Random random = new Random();
		System.out.println(random.nextInt());  //生成int返回内的有效int整数
		System.out.println(random.nextInt(11));//0~10之间的整数
		
		/**
		 * 生成随机验证码:
		 * 
		 * 		数字、大写字母、小写字母：不包括 0、1、O、o、L、l
		 */
		char[] codes = new char[]{&#39;2&#39;,&#39;3&#39;,&#39;4&#39;,&#39;5&#39;,&#39;6&#39;,&#39;7&#39;,&#39;8&#39;,&#39;9&#39;,&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;,&#39;e&#39;,&#39;f&#39;,&#39;A&#39;,&#39;B&#39;,&#39;C&#39;,&#39;D&#39;,&#39;E&#39;,&#39;F&#39;,&#39;G&#39;,&#39;H&#39;};
		
		//验证码
		String code = &quot;&quot;;
		
		for (int i = 1; i &lt;= 4; i++) {
			int index = random.nextInt(codes.length);
			code += codes[index];
		}
		
		System.out.println(&quot;随机验证码：&quot; + code);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java工具类-Math类</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,9);function p(_,M){const t=v("ExternalLinkIcon");return s(),a("div",null,[d(" more "),n("h1",u,[o,i(),n("a",b,[i("222-Java工具类-Math类.md"),l(t)])]),h])}const f=e(m,[["render",p],["__file","java222.html.vue"]]);export{f as default};
