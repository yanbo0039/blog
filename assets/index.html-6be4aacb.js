import{_ as a,X as e,Y as t,a1 as i,a0 as r}from"./framework-68dd73a2.js";const n="/blog/assets/Java_2_1.png",s="/blog/assets/Java_2_2.png",o="/blog/assets/Java_2_3.png",c={},g=r('<h1 id="java-项目中点击表格排序所带来的奇葩bug" tabindex="-1"><a class="header-anchor" href="#java-项目中点击表格排序所带来的奇葩bug" aria-hidden="true">#</a> Java-项目中点击表格排序所带来的奇葩bug</h1><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>最近项目中出现一奇bug 在某些特定情况下点击表格的排序按钮排序得到的结果为这样</p><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>审查元素得看到dom里强行被写入咯一个style标签，里面的内容为css rest，造成图形的标题跟header的背景颜色错乱。。。。此bug我是一直不得其解这玩意到底是哪来的。。后来项目负责人发现是java的数据接口里给返回的后来给去掉就欧克咯。。此仅为记录下我的寻bug的痛苦经历。。。。</p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',10);function d(_,l){return e(),t("div",null,[i(" more "),g])}const f=a(c,[["render",d],["__file","index.html.vue"]]);export{f as default};
