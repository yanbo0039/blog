import{_ as i,X as a,Y as d,a1 as s,Z as e,$ as t,a2 as r,a0 as l,F as c}from"./framework-68dd73a2.js";const v={},o={id:"_233-java文件与流-文件与流-nio-md",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_233-java文件与流-文件与流-nio-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--233-Java--NIO-350ub328aca6905hda2760bea.md",target:"_blank",rel:"noopener noreferrer"},u=l(`<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Java_233_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.file;

import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardWatchEventKinds;
import java.nio.file.WatchEvent;
import java.nio.file.WatchKey;
import java.nio.file.WatchService;

public class WatchServiceDemo {

	public static void main(String[] args) {
		/*监控目标路径 */
		Path path = Paths.get(&quot;D:\\\\temp&quot;);
		try {
			/* 创建文件监控对象 */
			WatchService watchService = FileSystems.getDefault().newWatchService();
			/* 注册文件监控的所有事件类型 */
			path.register(watchService, StandardWatchEventKinds.ENTRY_CREATE,
					StandardWatchEventKinds.ENTRY_DELETE,
					StandardWatchEventKinds.ENTRY_MODIFY);
			/* 循环监测文件 */
			while (true) {
				WatchKey watchKey = watchService.take();
				/* 迭代触发事件的所有文件 */
				for (WatchEvent&lt;?&gt; event : watchKey.pollEvents())
					System.out.println(event.context().toString() + &quot; 事件类型：&quot;
							+ event.kind());
				if (!watchKey.reset())
					return;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java文件与流-文件与流-NIO</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,13);function b(p,_){const n=c("ExternalLinkIcon");return a(),d("div",null,[s(" more "),e("h1",o,[m,t(),e("a",h,[t("233-Java文件与流-文件与流-NIO.md"),r(n)])]),u])}const g=i(v,[["render",b],["__file","java233.html.vue"]]);export{g as default};
