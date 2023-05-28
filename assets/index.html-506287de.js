import{_ as i,X as t,Y as a,a1 as s,a0 as e}from"./framework-68dd73a2.js";const o="/blog/assets/Eclipse_23_1.png",l="/blog/assets/Eclipse_23_2.png",n="/blog/assets/Eclipse_23_3.png",g="/blog/assets/Eclipse_23_4.png",r="/blog/assets/Eclipse_23_5.png",c="/blog/assets/Eclipse_23_6.png",p="/blog/assets/Eclipse_23_7.png",_="/blog/assets/Eclipse_23_8.png",f="/blog/assets/Eclipse_23_9.png",d="/blog/assets/Eclipse_23_10.png",m="/blog/assets/Eclipse_23_11.png",u={},b=e('<h1 id="_23-eclipse中启动项目报404错误如何解决-md" tabindex="-1"><a class="header-anchor" href="#_23-eclipse中启动项目报404错误如何解决-md" aria-hidden="true">#</a> 23-Eclipse中启动项目报404错误如何解决?.md</h1><p>bug场景：最近在做一项目明明自己有写 <strong>AddUserServlet</strong> 但启动项目后死活404......操作如下</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>而在tomcat里的安装目录去找，发现也已被编译，能够找到对应的class，如图所示</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法：</h4><ol><li>stop项目</li></ol><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>remove所有项目</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>clean tomcat</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>双击tomcat进行设置</li></ol><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>更改为如下所示，完成之后ctrl + s 保存</li></ol><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>重启项目测试</li></ol><p>还特么404！！！！！</p><p><strong>最后发现问题所在</strong></p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将基更改为</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>后页面恢复正常</p><p><strong>以上就是我关于 <em>Eclipse中启动项目报404错误如何解决?</em> 知识点的整理与总结的全部内容</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',30);function h(x,E){return t(),a("div",null,[s(" more "),b])}const z=i(u,[["render",h],["__file","index.html.vue"]]);export{z as default};
