import{_ as s,X as d,Y as t,a1 as l,Z as a,$ as e,a2 as n,a0 as r,F as o}from"./framework-68dd73a2.js";const c="/blog/assets/Java_71_1.png",v={},u=r('<h1 id="_71-java未来的系统底层开发是什么样子的-md" tabindex="-1"><a class="header-anchor" href="#_71-java未来的系统底层开发是什么样子的-md" aria-hidden="true">#</a> 71-Java未来的系统底层开发是什么样子的?.md</h1><h4 id="自定义异常" tabindex="-1"><a class="header-anchor" href="#自定义异常" aria-hidden="true">#</a> 自定义异常</h4><ul><li><p>示例：</p><ul><li><p>使用springmvc完成商品信息修改</p><ul><li>如果id不存在，报异常</li></ul></li></ul></li></ul><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',4),m={href:"https://www.runoob.com/redis/redis-tutorial.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.runoob.com/redis/redis-tutorial.html",target:"_blank",rel:"noopener noreferrer"},b=r(`<h4 id="系统复杂性说明" tabindex="-1"><a class="header-anchor" href="#系统复杂性说明" aria-hidden="true">#</a> 系统复杂性说明：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>秒课系统：

秒杀商品系统：


用户请求-----》web应用------》访问数据库   

秒杀的业务逻辑：查询库存是否大于0---》库存减1----》生成订单

尽量让用户前期少访问数据库，以优化系统的性能：

1.提前把库存数据放入redis内存数据库中
2.用户请求过来---》查询库存是否大于0（查询redis数据库即可）
		   ---》库存减1（对redis数据库中的库存减1）
		   ---》生成订单（karfka技术异步访问数据库）
		   ---》通过轮询技术获取秒杀的结果
		   
		   dao---&gt;redisDao  oracleDao

		   service---&gt;addBook()----&gt;redisDao.addBook()&amp;oracleDao.addBook()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 Java未来的系统底层开发是什么样子的? 知识点的整理与总结的全部内容</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,7);function _(p,g){const i=o("ExternalLinkIcon");return d(),t("div",null,[l(" more "),u,a("p",null,[e("如上实例在生活中是否有遇到？例购物车有这商品，但此商品已下架。。。。可能出现此种情况。那么为什么会出现这种情况呢？如果商品下架的话我们会是把商品所有相关联的信息都删除，那么为什么没有删除呢？可能是因为做的应用足够复杂，数据不一定保存到数据库，比如电商平台，有商品信息，有商品表，还有订单表，还有购物车表，三张表。但是为咯进行系统优化，可能会出现这种情况，三张表存在不同的数据库里边。还有一种情况，为咯让用户访问的时候性能非常好，还可能把三张表存在"),a("a",m,[e("Redis"),n(i)]),e("里边，就是说不但数据库里有这些表，"),a("a",h,[e("Redis"),n(i)]),e("内存里边也有这些表，所以实际项目中services是非常复杂的。。。下面以pay这个demo为例进行举例说明")]),b])}const x=s(v,[["render",_],["__file","java71.html.vue"]]);export{x as default};
