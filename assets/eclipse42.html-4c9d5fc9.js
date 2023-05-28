import{_ as t,X as o,Y as r,a1 as s,Z as e,$ as a,a2 as n,a0 as c,F as l}from"./framework-68dd73a2.js";const p="/blog/assets/Eclipse_42_1.png",d="/blog/assets/Eclipse_42_2.png",g="/blog/assets/Eclipse_42_3.png",_="/blog/assets/Eclipse_42_4.png",h="/blog/assets/Eclipse_42_5.png",f="/blog/assets/Eclipse_42_6.png",m={},u={id:"_42-eclipse中java包packge或导入import的类报错-md",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#_42-eclipse中java包packge或导入import的类报错-md","aria-hidden":"true"},"#",-1),x={href:"http://xn--42-EclipseJavapackgeImport-fk25br92crykly1eqsyb8zdkw1tnntbbcyn.md",target:"_blank",rel:"noopener noreferrer"},k=c('<h4 id="场景复现" tabindex="-1"><a class="header-anchor" href="#场景复现" aria-hidden="true">#</a> 场景复现</h4><ul><li>如果很久没有打开Eclipse中的项目，那么再次打开Eclipse时很有可能出现packge或者import的类是全都红色报错的，由于我解决了这问题我只能放个示意图</li></ul><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h4><ol><li>项目右键 Properties &gt; Java Build Path --&gt; Source --&gt; 选中 source folders on build path 里的值，而后 Add Folder</li></ol><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>选择src包而后确定</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>Browse里确定输出目录为bin，而后应用即可</li></ol><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><ol><li>在对应的类的main方法中右键 Run As ---&gt; Java Application,如下图控制台有打印输出，测试成功</li></ol><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>Eclipse中Java包packge或导入Import的类报错</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr>',18);function E(v,y){const i=l("ExternalLinkIcon");return o(),r("div",null,[s(" more "),e("h1",u,[b,a(),e("a",x,[a("42-Eclipse中Java包packge或导入Import的类报错.md"),n(i)])]),k])}const B=t(m,[["render",E],["__file","eclipse42.html.vue"]]);export{B as default};
