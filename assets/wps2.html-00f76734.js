import{_ as e,X as o,Y as t,a1 as a,a0 as r}from"./framework-68dd73a2.js";const c="/blog/assets/Wps_2_1.png",n={},s=r('<h1 id="_2-excel如何才能将单元格的值设置成去掉首字母并转换成小写-md" tabindex="-1"><a class="header-anchor" href="#_2-excel如何才能将单元格的值设置成去掉首字母并转换成小写-md" aria-hidden="true">#</a> 2-excel如何才能将单元格的值设置成去掉首字母并转换成小写？.md</h1><h4 id="导读" tabindex="-1"><a class="header-anchor" href="#导读" aria-hidden="true">#</a> 导读</h4><hr><blockquote><p>柯达直到破产那天，生产的胶卷质量都是最好的，只是世界不再需要它，离开有时候并不是你做错了什么，也不是你不够好，只是你不再被需要了。</p></blockquote><hr><h4 id="正文" tabindex="-1"><a class="header-anchor" href="#正文" aria-hidden="true">#</a> 正文</h4><blockquote><p>笔者今天遇到了这么一个需求，需要将excel的单元格中的值，去掉首字母，并全部转换成小写，那么此需求则需要用到excel的函数了。。</p></blockquote><blockquote><p><strong>=LOWER(RIGHT(I9,LEN(I9)-1))</strong></p></blockquote><blockquote><p>公式如左侧所示，lower()函数可以将字母转换成小写，right()函数则可截取值，len()函数取值的长度，将其中的I9换成自己所需的单元格即可，如下图所示则可完成需求</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>excel如何才能将单元格的值设置成去掉首字母并转换成小写？</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',15);function l(i,d){return o(),t("div",null,[a(" more "),s])}const p=e(n,[["render",l],["__file","wps2.html.vue"]]);export{p as default};
