import{_ as e,X as s,Y as t,a1 as a,a0 as o}from"./framework-68dd73a2.js";const r="/blog/assets/Eclipse_8_1.png",i="/blog/assets/Eclipse_8_2.png",n="/blog/assets/Eclipse_8_3.png",c={},l=o('<h1 id="eclipse导入项目时报some-projects-cannot-be-imported-because-they-already-exist-in-the-workspace" tabindex="-1"><a class="header-anchor" href="#eclipse导入项目时报some-projects-cannot-be-imported-because-they-already-exist-in-the-workspace" aria-hidden="true">#</a> Eclipse导入项目时报Some projects cannot be imported because they already exist in the workspace</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><p>Eclipse导入JAVA-EE项目时报<strong>Some projects cannot be imported because they already exist in the workspace</strong>错误</p><p>如图所示： <img src="'+r+'" alt="" loading="lazy"></p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法：</h2><ol><li>去掉勾选 <strong>Copy projects into workspace</strong></li><li>点击右侧的Refresh</li><li>Finsh <img src="'+i+'" alt="" loading="lazy"></li></ol><p>如图：<strong>项目成功导入</strong><img src="'+n+'" alt="" loading="lazy"></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',11);function p(h,d){return s(),t("div",null,[a(" more "),l])}const m=e(c,[["render",p],["__file","eclipse8.html.vue"]]);export{m as default};
