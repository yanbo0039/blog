import{_ as i,X as e,Y as t,a1 as a,a0 as o}from"./framework-68dd73a2.js";const n="/blog/assets/Kingdee_32_1.png",g="/blog/assets/Kingdee_32_2.png",s="/blog/assets/Kingdee_32_3.png",r="/blog/assets/Kingdee_32_4.png",l="/blog/assets/Kingdee_32_5.png",c="/blog/assets/Kingdee_32_6.png",p="/blog/assets/Kingdee_32_7.png",d="/blog/assets/Kingdee_32_8.png",_="/blog/assets/Kingdee_32_9.png",f={},u=o('<h1 id="_32-金蝶云苍穹设置工作流时如何解决流程引擎启动失败-md" tabindex="-1"><a class="header-anchor" href="#_32-金蝶云苍穹设置工作流时如何解决流程引擎启动失败-md" aria-hidden="true">#</a> 32-金蝶云苍穹设置工作流时如何解决流程引擎启动失败？.md</h1><h4 id="报错信息" tabindex="-1"><a class="header-anchor" href="#报错信息" aria-hidden="true">#</a> 报错信息</h4><ul><li>如图所示进入设置工作流界面时报错</li></ul><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>根据原因是因为IP地址与安装时的IP地址不一致所致</p></blockquote><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h4><blockquote><p>进入zookeeper文件夹的log文件夹根据创建日期找到当天记录的日志，然后ctrl + f 输入192.168查找，那么找到的IP地址就是当日你所安装时电脑的ip地址，将其更改为安装时的Ip地址则可。</p></blockquote><ol><li>找到安装时的ip</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>查看本机的Ip地址</li></ol><blockquote><p>窗口键 + r --&gt; 输入 cmd --&gt; 打开命令窗口后输入 ipconfig命令，即可看到自己的ip</p></blockquote><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>更改本机的Ip地址与安装时保持一致</li></ol><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>按照上述操作后正常重启苍穹是可以解决的，但是遗憾的是我的ip已被占用，故去特么的苍穹1.5我还是换成2.0吧。。。。。。。</p><p><strong>以上就是我关于 <em>金蝶云苍穹设置工作流时如何解决流程引擎启动失败？</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',25);function m(b,h){return e(),t("div",null,[a(" more "),u])}const k=i(f,[["render",m],["__file","kingdee32.html.vue"]]);export{k as default};