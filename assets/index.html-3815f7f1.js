import{_ as s,X as d,Y as a,a1 as l,Z as e,$ as i,a2 as v,a0 as t,F as c}from"./framework-68dd73a2.js";const r={},u={id:"_207-java面向对象高级特性-多态-接口-md",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_207-java面向对象高级特性-多态-接口-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--207-Java---my5qfrs45c7ojmwpkra888bc68dvm7b8m3cek7b95p.md",target:"_blank",rel:"noopener noreferrer"},o=t(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><blockquote><p>接口（interface） ： 对类来说是一套规范，是一套行为协议</p></blockquote><p>&lt;权限访问修饰符&gt; interface 接口名称 { 常量; 抽象方法; }</p><pre><code>     常量默认修饰符：public static final
     
     抽象方法默认修饰符：public abstract
     
     注意： 
	1.接口不是类，没有构造器，不能被实例化
	2.接口使用interface关键字修饰，不是class
	

	3.接口与接口之间的关系（多继承extends）：继承关系，且可以多继承，但是不影响面向对象三大特性之一：单继承
		public interface VADevice extends AudioDevice, VedioDevice {}
		
	4.类与接口之间的关系（多实现implements）:实现关系，一个类可以实现多个接口
		public class Television implements AudioDevice, VedioDevice {}
		public class Television implements VADevice {}
		
	5.一个类可以在继承一个父类的同时，实现一个或多个接口
		public class Television extends Test implements AudioDevice, VedioDevice {}
	
	6. 类与类之间的关系（单继承）：一个类只允许有一个直接父类
</code></pre><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.接口;

/**
 * &lt;p&gt;Title: AudioDevice&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
//音频设备
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月4日
 */
public interface AudioDevice {

	//常量
	public static final int MAX_VOLUMN = 100;
	int MIN_VOLUMN = 0;
	
	//抽象方法
	public abstract void start();//开始播放
	abstract void pause();//暂停播放
	void stop();//停止播放
}

//医保结算：学生医保、在职医保、深圳医保、居民医保、....
//1.个人信息确认    2.上传数据    3.得到自费、报销的数据

//生产电脑：联想、华硕、惠普、mac......
//1.cpu 2.鼠标 3.键盘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.接口;

//public class Television implements VADevice {
//public class Television implements AudioDevice, VedioDevice {
public class Television extends Test implements AudioDevice, VedioDevice {

	@Override
	public void turnOn() {
		System.out.println(&quot;开机...............&quot;);
	}

	@Override
	public void start() {
		System.out.println(&quot;开始播放...吴亦凡...大碗宽面&quot;);
	}

	@Override
	public void pause() {
		System.out.println(&quot;暂停播放...吴亦凡...大碗宽面&quot;);
	}

	@Override
	public void stop() {
		System.out.println(&quot;停止播放...吴亦凡...大碗宽面&quot;);
		
	}
	
	@Override
	public void turnOff() {
		System.out.println(&quot;关机..........&quot;);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.接口;



//音频 +视频 设备
public interface VADevice extends AudioDevice, VedioDevice {

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.接口;

//视频设备
public interface VedioDevice {

	//常量
	public static final int MAX_BTIGHT = 100;
	int MIN_BTIGHT = 20;
	
	//抽象方法
	public abstract void turnOn();//开机
	void turnOff();//关机
}

//医保结算：学生医保、在职医保、深圳医保、居民医保、....
//1.个人信息确认    2.上传数据    3.得到自费、报销的数据

//生产电脑：联想、华硕、惠普、mac......
//1.cpu 2.鼠标 3.键盘
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter07.接口;

public class Test {

	public static void main(String[] args) {
		Television tv = new Television();
		tv.turnOn();
		tv.start();
		tv.pause();
		tv.stop();
		tv.turnOff();

		System.out.println(tv.MAX_BTIGHT);
		System.out.println(tv.MIN_BTIGHT);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java面向对象高级特性-多态-接口</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,19);function p(h,g){const n=c("ExternalLinkIcon");return d(),a("div",null,[l(" more "),e("h1",u,[m,i(),e("a",b,[i("207-Java面向对象高级特性-多态-接口.md"),v(n)])]),o])}const _=s(r,[["render",p],["__file","index.html.vue"]]);export{_ as default};
