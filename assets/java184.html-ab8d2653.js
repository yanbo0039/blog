import{_ as a,X as d,Y as s,a1 as t,Z as n,$ as e,a2 as l,a0 as r,F as v}from"./framework-68dd73a2.js";const c={},u={id:"_184-java变量和运算符-md",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_184-java变量和运算符-md","aria-hidden":"true"},"#",-1),o={href:"http://xn--184-Java-w00ni0d149rzdb402nm3f.md",target:"_blank",rel:"noopener noreferrer"},b=r(`<h4 id="示例代码1" tabindex="-1"><a class="header-anchor" href="#示例代码1" aria-hidden="true">#</a> 示例代码1</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter02;
/**
 * &lt;p&gt;Title: BiaoShiFu_01&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    	标识符: Java中的包、类、方法、参数、变量、常量的名称
	
		标识符的命名规则：
			1.必须以字母、下划线（_）或美元符号（$）开头
			2.余下的字符可以是下划线、美元符号或任何的字母或数字，长度不限
			3.标识符中不能有空格
			4.不能使用Java中的关键字或者保留字做为标识符
			5.见名知义
			
			
		包名：全部小写，例如：com.neuedu.chapter01
		
		类名：pascal规则（帕斯卡规则），首字母大写，其余字母首字母大写，例如：HelloWorld
		
		变量、方法、参数：camel规则（驼峰法），首字母小写，其余字母首字母大写，例如变量名 : firstNumber，方法名:methodOne，参数名:secondNumber
		                                    下划线法，多个单词之间&quot;_&quot;下划线隔开，first_number，method_one
		                                    
		常量：全部大写，多个单词之间&quot;_&quot;下划线隔开，例如PI，USER_NAME
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月2日
 */
//类名：BiaoShiFu_01
public class BiaoShiFu_01 {

	//变量名 : firstNumber
	int firstNumber = 10;
	
	//常量名：PI
	final double PI = 3.1415926;
	final String USER_NAME = &quot;scott&quot;;

	//方法名:methodOne    参数名:secondNumber
	public void methodOne(int secondNumber)
	{
		
	}
	public static void main(String[] args) {
		
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java变量和运算符</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><ol><li><strong>阿里巴巴Java开发手册</strong></li></ol><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,12);function h(_,p){const i=v("ExternalLinkIcon");return d(),s("div",null,[t(" more "),n("h1",u,[m,e(),n("a",o,[e("184-Java变量和运算符.md"),l(i)])]),b])}const g=a(c,[["render",h],["__file","java184.html.vue"]]);export{g as default};
