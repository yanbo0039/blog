import{_ as a,X as e,Y as t,a1 as r,a0 as d}from"./framework-68dd73a2.js";const n={},o=d('<h1 id="_112-云苍穹单据修改字段后保存时报错alter-table-xx-add-xx-navrchar-50-default-not-null如何解决-md" tabindex="-1"><a class="header-anchor" href="#_112-云苍穹单据修改字段后保存时报错alter-table-xx-add-xx-navrchar-50-default-not-null如何解决-md" aria-hidden="true">#</a> 112-云苍穹单据修改字段后保存时报错alter Table xx add xx navrchar(50)default() not null如何解决？.md</h1><h4 id="导读" tabindex="-1"><a class="header-anchor" href="#导读" aria-hidden="true">#</a> 导读</h4><hr><blockquote><p>我见过，在小城市依然埋头奋斗的人，也见过在大城市混吃等死的人，所以生活会变成什么样子，灵魂会如何安放，跟你所在的城市大小一点关系都没有，无论你选择了故乡，还是北上广，你的人生都永远掌握在你自己的手里，用心去爱，去拼搏，去努力，这中间，必然会有得失，但用力对待过的人生，一定没有遗憾。</p></blockquote><hr><h4 id="正文" tabindex="-1"><a class="header-anchor" href="#正文" aria-hidden="true">#</a> 正文</h4><blockquote><p>如下图所示，我在修改单据的某几个字段保存时，则报如下错误 alter table t_kdgz_ysdoo1_entry add fauxpropid.fbdzgg navarchar(50) default(&#39;&#39;) not null;</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_112_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>我们逐个逐个解析上面的报错语句， table 后面一般是跟的是表名而上面的表名有一个很重要的标识是entry有这个标识表示这是分录的表名，而后的字段就更好理解了fauxpropid.fbdzgg去掉f就是字段的标识 所以我们应该找auxpropid.fbdzgg这个字段，而很明显这个字段的命名不规范所致的错误所以我们作如下更改后则可以保存了。。</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_112_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="尾文" tabindex="-1"><a class="header-anchor" href="#尾文" aria-hidden="true">#</a> 尾文</h4><p><strong>以上就是我关于 <em>云苍穹单据修改字段后保存时报错alter Table xx add xx navrchar(50)default() not null如何解决？</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',16);function l(i,c){return e(),t("div",null,[r(" more "),o])}const s=a(n,[["render",l],["__file","kingdee112.html.vue"]]);export{s as default};
