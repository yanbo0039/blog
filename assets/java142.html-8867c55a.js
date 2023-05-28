import{_ as l,X as s,Y as d,a1 as a,Z as t,$ as i,a2 as e,a0 as r,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Java_142_1.gif",c={},o={id:"_142-java-使用处理流读文件内容-md",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_142-java-使用处理流读文件内容-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--142-Java--e87n80cw8lzm2ajviwl2bh3zzbydre915k.md",target:"_blank",rel:"noopener noreferrer"},g=r(`<ol><li>将abc.txt写入如下内容,并保存编码为UTF-8</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
	&lt;meta charset=&quot;UTF-8&quot;&gt;
	&lt;meta name=&quot;viewport&quot;
		  content=&quot;width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0&quot;&gt;
	&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
	&lt;title&gt;随机点名&lt;/title&gt;
	&lt;style&gt;
		html,body,div,p{
			margin:0;
			padding:0;
		}
		body{
			background:black;
		}
		.box{
			width:710px;
			height:600px;
			border: 1px solid white;
			margin:0 auto;
			position:relative;
		}
		.box&gt;.stu_name{
			width:100px;
			height:40px;
			background:orangered;
			font-size:30px;
			line-height:40px;
			text-align:center;
			color:white;
			float:left;
			margin:20px;
			cursor:pointer;
		}
		.start_choose_name{
			width:200px;
			height:80px;
			font-size:50px;
			line-height:80px;
			text-align:center;
			position:absolute;
			bottom:20px;
			left:50%;
			margin-left:-100px;
			color:white;
			background:blueviolet;
			cursor:pointer;
		}
		.choose{
			background:white;
			color:blueviolet;
		}
	&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class=&#39;box&#39;&gt;
	&lt;p class=&quot;start_choose_name&quot;&gt;开始点名&lt;/p&gt;
&lt;/div&gt;
&lt;script&gt;
window.onload = function () {
	var stu = [&quot;李国威&quot;,&quot;李卓锟&quot;,&quot;韦雄&quot;,&quot;孙燕春&quot;,&quot;张辉&quot;,&quot;范玉伟&quot;,&quot;严波&quot;,&quot;李凯晴&quot;,
				&quot;崔明勇&quot;,&quot;李毅强&quot;,&quot;谭浩根&quot;,&quot;赵来荣&quot;,&quot;叶旭秋&quot;,&quot;吴荣荣&quot;,
				&quot;陈炫林&quot;,&quot;幸文杰&quot;,&quot;黎家晖&quot;],
	                        //配置学生姓名 注：若更改学生集合，请手动清除本地存储。。
				//清除方法浏览器控制台输入window.localStorage.setItem(&quot;stu&quot;,null）而后按下ENTER键
			ls_sty = JSON.parse(window.localStorage.getItem(&quot;stu&quot;)),
			stuArray = ls_sty&amp;&amp;ls_sty.length?ls_sty:stu,
			box = document.querySelector(&quot;.box&quot;),
			btn = document.querySelector(&quot;.start_choose_name&quot;),
			/**
			 * 随机的下标 params array
			 */
			selected = (array) =&gt; {
				return Math.floor(Math.random() * array.length)
			},
			/*随机的颜色封装函数*/
			color = () =&gt; {
				let r = Math.floor(Math.random() * 256),
						g = Math.floor(Math.random() * 256),
						b = Math.floor(Math.random() * 256);
				return &#39;rgb(&#39; + r + &#39;,&#39; + g + &#39;,&#39; + b + &#39;)&#39;
			};
	for (let i = 0; i &lt; stu.length; i++){
		let div = document.createElement(&quot;div&quot;);
		div.setAttribute(&quot;class&quot;,&quot;stu_name&quot;);
		div.innerText = stu[i];
		box.appendChild(div);
	}
	/**
		* 禁止选择
		*/
	document.onselectstart = () =&gt; {
		return false
	};
	var allowClick = true,
			colorTimes = 0,
			timer,
			stuNameArray = document.querySelectorAll(&quot;.box&gt;.stu_name&quot;);
	btn.onclick = () =&gt; {
		if (allowClick) {
			allowClick = false;
			btn.innerText = &quot;点名中&quot;;
			timer = setInterval( () =&gt; {
				colorTimes ++;
				stuNameArray.forEach((item,index) =&gt; {
					item.style.cssText = &quot;background:&quot;+ color() + &quot;;color:&quot; + color();
				});
				if (colorTimes &gt;= 20) {
					clearInterval(timer);
					allowClick = true;
					colorTimes = 0;
					btn.innerText = &quot;开始点名&quot;;
					stuNameArray.forEach((item,index) =&gt; {
						item.style.cssText = &quot;background:orangered;color:white;&quot; ;
					});
					let _index = selected(stuArray);
					stuNameArray.forEach((item,index) =&gt; {
						if(item.innerText == stuArray[_index]) {
							item.style.cssText = &quot;background:white;color:blueviolet;&quot;;
						}
					});
					stuArray.splice(_index,1);
					console.info(stuArray);
					window.localStorage.setItem(&quot;stu&quot;,JSON.stringify(stuArray));
					if(!stuArray.length){
						stuArray = stu
					}
				}
			},100)
		}
	};
};
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>TestReadFile_manyContent</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package 字符流的读写;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;

public class TestReadFile_manyContent {

	public static void main(String[] args) {
		File source = new File(&quot;E:\\\\abc.txt&quot;);
		
//		FileReader f;
//		
//		BufferedReader br;
		
		//jdk7的新写法，不用写finally语句块，可以自动释放资源
		try(
				BufferedReader br = new BufferedReader(new FileReader(source));
				){
			String content = null;
			
			while((content = br.readLine()) != null) {
				System.out.println(content);
			}
		}catch (Exception e) {
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运行结果如下：</li></ol><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',6),h=t("em",null,"Java-使用处理流读文件内容",-1),q={href:"https://github.com/javaobjects/demo520",target:"_blank",rel:"noopener noreferrer"},p=t("hr",null,null,-1),_=t("h3",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),x=t("hr",null,null,-1),f=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function y(w,k){const n=v("ExternalLinkIcon");return s(),d("div",null,[a(" more "),t("h1",o,[m,i(),t("a",b,[i("142-Java-使用处理流读文件内容.md"),e(n)])]),g,t("p",null,[t("strong",null,[i("以上就是我关于 "),h,i(" 知识点的整理与总结的全部内容,"),t("a",q,[i("另附源码"),e(n)])])]),p,_,x,f])}const A=l(c,[["render",y],["__file","java142.html.vue"]]);export{A as default};
