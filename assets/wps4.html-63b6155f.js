import{_ as n,X as o,Y as r,a1 as l,Z as e,$ as a,a2 as i,a0 as s,F as p}from"./framework-68dd73a2.js";const c="/blog/assets/Wps_4_1.png",g="/blog/assets/Wps_4_2.png",d="/blog/assets/Wps_4_3.png",_="/blog/assets/Wps_4_4.png",h="/blog/assets/Wps_4_5.png",f="/blog/assets/Wps_4_6.png",u="/blog/assets/Wps_4_7.png",m="/blog/assets/Wps_4_8.png",b={},x=s('<h1 id="_4-ppt-如何清除只能只读的ppt密码-md" tabindex="-1"><a class="header-anchor" href="#_4-ppt-如何清除只能只读的ppt密码-md" aria-hidden="true">#</a> 4-PPT-如何清除只能只读的PPT密码？.md</h1><h4 id="需求背景" tabindex="-1"><a class="header-anchor" href="#需求背景" aria-hidden="true">#</a> 需求背景</h4><blockquote><p>如下图所示， 我的PPT在经过很长时间未打开过，今日经过多次试验确定自己是不忘记密码了，只能以只读模式的打开了，那么需求来了如何清除PPT的密码呢？</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h4><ol><li><p>将.pptx 后缀更改为 .zip</p></li><li><p>解压缩如下：(用zip解压缩)并进入PPT文件夹</p></li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>用记事本开启presentation.xml文件</li></ol><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>把&lt;p:modifyVerifier ... /&gt;整块选中并删除，保存并关闭</li></ol><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>将.zip后缀更改回为.pptx 后即清除了密码如下图所示：</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="友情提示" tabindex="-1"><a class="header-anchor" href="#友情提示" aria-hidden="true">#</a> 友情提示</h4><blockquote><p>用此种方法只能够清除密码并不能找回密码 若遇到更改后.zip后缀后不为此种格式的PPTX则我是暂时无解</p></blockquote><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><p><strong>以上就是我关于 <em>PPT-如何清除只能只读的PPT密码？</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4>',23),P={href:"https://jingyan.baidu.com/article/ed2a5d1f3c93dc09f6be17e6.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.jb51.net/office/powerpoint/235893.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://quark.sm.cn/",target:"_blank",rel:"noopener noreferrer"},y=e("hr",null,null,-1),T=e("p",null,"分割线",-1),W=e("hr",null,null,-1),w=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function V(q,N){const t=p("ExternalLinkIcon");return o(),r("div",null,[l(" more "),x,e("ol",null,[e("li",null,[e("p",null,[e("a",P,[a("百度-破解PPT密码"),i(t)])])]),e("li",null,[e("p",null,[e("a",k,[a("将PowerPoint转换成PDF的九款免费软件"),i(t)])])]),e("li",null,[e("p",null,[e("a",z,[a("夸克搜索"),i(t)])])])]),y,T,W,w])}const B=n(b,[["render",V],["__file","wps4.html.vue"]]);export{B as default};
