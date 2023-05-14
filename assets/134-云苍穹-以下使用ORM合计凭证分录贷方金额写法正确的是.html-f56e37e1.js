import{_ as l,X as a,Y as i,a1 as s,Z as e,$ as o,a2 as r,a0 as n,F as c}from"./framework-68dd73a2.js";const _="/blog/assets/Kingdee_134_1.png",d="/blog/assets/Kingdee_134_2.png",u="/blog/assets/Kingdee_134_3.png",p="/blog/assets/Kingdee_134_4.png",h="/blog/assets/Kingdee_134_5.png",g={},b={id:"_134-云苍穹-以下使用orm合计凭证分录贷方金额写法正确的是-md",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#_134-云苍穹-以下使用orm合计凭证分录贷方金额写法正确的是-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--134--ORM-y39lf7bp0a36c68lu7azk67yi25cnbyad5bez0c83ghq3c9sg8lmdzm0x6cz2xcwza732a0x8afb8b.md",target:"_blank",rel:"noopener noreferrer"},k=n('<h4 id="原题" tabindex="-1"><a class="header-anchor" href="#原题" aria-hidden="true">#</a> 原题</h4><p>Q1.单选题（2分）以下使用ORM合计凭证分录贷方金额写法正确的是</p><p>OA &quot;select id，sum（entries.debitori）s from gl_voucher group by id&quot; OB &quot;select id，sum（entries.debitori）s from gl_voucher&quot; OC &quot;select id，sum（debitori）s from gl_voucher.entries group by id&quot; OD select sum（debitori）from t_gl_voucherentry group by id</p><h4 id="参考答案" tabindex="-1"><a class="header-anchor" href="#参考答案" aria-hidden="true">#</a> 参考答案</h4><blockquote><p>D</p></blockquote><h4 id="快速排除法" tabindex="-1"><a class="header-anchor" href="#快速排除法" aria-hidden="true">#</a> 快速排除法</h4><blockquote><p>苍穹表命名规则一般是以t_开头，题目除D以外其它命名均不符合规则，而凭证是标准单，是必须遵守此规则的，在考试中有些思维灵动性比较高的小机灵鬼，一秒排除便得到正确答案，而有些思维比较呆萌的就在那里傻看然后还选错了，比如这篇博客的作者。。。。</p></blockquote><h4 id="题目解析-关键字" tabindex="-1"><a class="header-anchor" href="#题目解析-关键字" aria-hidden="true">#</a> 题目解析---关键字</h4><ol><li>ORM</li></ol><blockquote><p>ORM：简介：对象关系映射（Object Relational Mapping，简称ORM）</p></blockquote><ul><li>参考博客:</li></ul>',11),q={href:"http://www.ruanyifeng.com/blog/2019/02/orm-tutorial.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.cnblogs.com/wgbs25673578/p/5140482.html",target:"_blank",rel:"noopener noreferrer"},O={href:"https://blog.csdn.net/qq_45503305/article/details/101618932",target:"_blank",rel:"noopener noreferrer"},R=n('<ol start="2"><li>凭证分录</li></ol><blockquote><p>在开发平台搜索<strong>凭证</strong>,可以找到如下凭证的单据</p></blockquote><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>单击进入凭证单据</p></blockquote><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>找到凭证分录，可以看到其表名为 <strong>T_GL_VOUCHERENTRY</strong>，以上则可排除表名不正确的ABC选项了</p></blockquote><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>贷方金额</li></ol><blockquote><p>如下图所示笔者并未找到此字段，笔者猜测可能是版本问题，笔者的版本是2.0版本并未进行升级</p></blockquote><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>不过根据标识 <strong>debitori</strong> 笔者查到是 <strong>原币借方</strong> 这个字段</p></blockquote><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>逐个选项解析</li></ol><blockquote><p>A： 苍穹的分录字段是是存入分录表的，所以查询分录的值时，是不需要带entries的,这是A选项的第一个错误，gl_voucher这个表名也不符合规范，这是A选项的第二个错误</p></blockquote><blockquote><p>B: B 与 A 是犯的同样的错误</p></blockquote><blockquote><p>C: C选项是from gl_voucher.entries表名错误，苍穹里是没有这种命名为表名的分录有其专门的表名</p></blockquote><p>唯一不确认的就是SQL语句的分组，笔者还真不确定这需不需要分组。。。。。</p>',17),y={href:"http://xn---ORM-594ft1a3qr2bp4j8xa4h83tvy6boysvsb585bytfxu7biof8tkl7kd99bpp4b8vai60ae94akw4b.md",target:"_blank",rel:"noopener noreferrer"},M=e("hr",null,null,-1),v=e("p",null,"分割线",-1),z=e("hr",null,null,-1),w=e("h4",{id:"扩展知识",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#扩展知识","aria-hidden":"true"},"#"),o(" 扩展知识")],-1),B=e("hr",null,null,-1),C=e("blockquote",null,[e("p",null,"要用一辈子的时间去还清那次的一见钟情")],-1),A=e("hr",null,null,-1);function N(V,E){const t=c("ExternalLinkIcon");return a(),i("div",null,[s(" more "),e("h1",b,[f,o(),e("a",m,[o("134-云苍穹-以下使用ORM合计凭证分录贷方金额写法正确的是.md"),r(t)])]),k,e("p",null,[e("a",q,[o("阮一峰的网络日志 --- ORM 实例教程"),r(t)])]),e("p",null,[e("a",x,[o("我就不吃芹菜 -- ORM的概念, ORM到底是什么"),r(t)])]),e("p",null,[e("a",O,[o("心猿~ORM"),r(t)])]),R,e("p",null,[e("strong",null,[o("以上就是我关于 "),e("em",null,[e("a",y,[o("云苍穹-以下使用ORM合计凭证分录贷方金额写法正确的是.md"),r(t)])]),o(" 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。")])]),M,v,z,w,B,C,A])}const L=l(g,[["render",N],["__file","134-云苍穹-以下使用ORM合计凭证分录贷方金额写法正确的是.html.vue"]]);export{L as default};
