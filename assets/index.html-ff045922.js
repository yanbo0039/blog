import{_ as t,X as l,Y as r,a1 as d,Z as e,$ as a,a2 as n,a0 as s,F as o}from"./framework-68dd73a2.js";const c="/blog/assets/Java_264_1.png",u="/blog/assets/Java_264_2.png",g="/blog/assets/Java_264_3.png",h="/blog/assets/Java_264_4.png",_="/blog/assets/Java_264_5.png",p="/blog/assets/Java_264_6.png",m="/blog/assets/Java_264_7.png",v={},b={id:"_264-java-redis7-0安装配置详细教程-md",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#_264-java-redis7-0安装配置详细教程-md","aria-hidden":"true"},"#",-1),x={href:"http://264-Java-Redis7.xn--0-0b2bw30arrv7mf12ag29be2furn.md",target:"_blank",rel:"noopener noreferrer"},k=e("h4",{id:"下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载","aria-hidden":"true"},"#"),a(" 下载")],-1),y={href:"https://gitee.com/binghe021/redis-setup/releases/tag/v7.0.5",target:"_blank",rel:"noopener noreferrer"},J=s('<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><ul><li>除了更改路径外其它都下一步下一步</li></ul><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4><ul><li>输入如下命令,出现下面情况说明redis安装且连接成功</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli.exe -h 127.0.0.1 -p 6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>测试是否能够存储成成功,如下图所示则表明设置成功</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set key1 v1

get key1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>查看是否有设置密码,若为空字符串则表明没有设置密码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config get requirepass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>设置密码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config set requirepass 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>有密码时的登录方式</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redis-cli.exe -h 127.0.0.1 -p 6379 -a 123456

或者

auth 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>去除密码</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>config set requirepass ‘’
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="可视化工具" tabindex="-1"><a class="header-anchor" href="#可视化工具" aria-hidden="true">#</a> 可视化工具</h4>`,21),w={href:"https://github.com/uglide/RedisDesktopManager/releases/download/0.9.3/redis-desktop-manager-0.9.3.817.exe",target:"_blank",rel:"noopener noreferrer"},z=e("li",null,[e("p",null,"直接下一步下一步下载就行了")],-1),R=s('<figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>Java-Redis安装配置详细教程</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4>',7),N={href:"https://www.cnblogs.com/pengpengdeyuan/p/14435601.html",target:"_blank",rel:"noopener noreferrer"},V={href:"https://blog.csdn.net/weixin_44893902/article/details/123087435",target:"_blank",rel:"noopener noreferrer"},q=e("hr",null,null,-1),B=e("p",null,"分割线",-1),E=e("hr",null,null,-1),j=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function C(D,I){const i=o("ExternalLinkIcon");return l(),r("div",null,[d(" more "),e("h1",b,[f,a(),e("a",x,[a("264-Java-Redis7.0安装配置详细教程.md"),n(i)])]),k,e("ul",null,[e("li",null,[e("a",y,[a("msi格式下载地址"),n(i)])])]),J,e("ol",null,[e("li",null,[e("p",null,[e("a",w,[a("下载地址-点此直接下载-https://github.com/uglide/RedisDesktopManager/releases/download/0.9.3/redis-desktop-manager-0.9.3.817.exe"),n(i)])])]),z]),R,e("ol",null,[e("li",null,[e("p",null,[e("a",N,[a("redis下载安装教程-Windows版本（详细）"),n(i)])])]),e("li",null,[e("p",null,[e("a",V,[a("Window下Redis的安装和部署详细图文教程（Redis的安装和可视化工具的使用）"),n(i)])])])]),q,B,E,j])}const M=t(v,[["render",C],["__file","index.html.vue"]]);export{M as default};
