import{_ as l,X as r,Y as o,a1 as s,Z as e,$ as i,a2 as a,a0 as n,F as c}from"./framework-68dd73a2.js";const d="/blog/assets/Vue_12_1.png",h="/blog/assets/Vue_12_2.png",g="/blog/assets/Vue_12_3.png",u="/blog/assets/Vue_12_4.png",p="/blog/assets/Vue_12_5.png",_="/blog/assets/Vue_12_6.png",f="/blog/assets/Vue_12_7.png",b="/blog/assets/Vue_12_8.png",m="/blog/assets/Vue_12_9.png",v={},x=e("h1",{id:"vue如何用vuepress-theme-hope搭建属于自己的博客",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue如何用vuepress-theme-hope搭建属于自己的博客","aria-hidden":"true"},"#"),i(" Vue如何用vuepress-theme-hope搭建属于自己的博客")],-1),y=e("h3",{id:"找到官网",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#找到官网","aria-hidden":"true"},"#"),i(" 找到官网")],-1),k=e("ol",null,[e("li",null,"点击如下地址进入官网")],-1),V={href:"https://vuepress-theme-hope.gitee.io/v2/zh/",target:"_blank",rel:"noopener noreferrer"},z=n('<h3 id="本地安装启动项目" tabindex="-1"><a class="header-anchor" href="#本地安装启动项目" aria-hidden="true">#</a> 本地安装启动项目</h3><ol><li>本地新建文件夹 vuepress-hope-myblog 并在此文件夹路径下启动cmd或power shell 但不能是git bash 因为需要一个交互式的命令窗口</li></ol><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>运行如下命令</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm create vuepress-theme-hope add docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>在命令窗口向你提问时依次利用键盘的上下键选择</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 简体中文
2. pnpm
3. 请连续按四个回车
4. y
5. blog
6. y
7. y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="配置项目" tabindex="-1"><a class="header-anchor" href="#配置项目" aria-hidden="true">#</a> 配置项目</h3><ol><li>更改头部文字以及其配置</li></ol><ul><li>如下所示的地方都需要更改</li></ul><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>对应需要更改的文件</li></ul><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>放进你写的博客到指定位置且按固定格式以及文件配置</li></ol>',16),w={href:"https://gitee.com/JavaObjects/file-crud",target:"_blank",rel:"noopener noreferrer"},j=n('<ol start="3"><li><p>配置头部以及侧边栏</p></li><li><p>配置搜索框</p></li><li><p>配置加密文章</p></li><li><p>配置留言评论</p></li><li><p>配置github action完成从私有库提交触发提交代码至公库并部署至该库的服务器以及gitee服务器</p></li></ol><ul><li>详细信息请参考我的另一篇博客 <strong>Git-GithubAction实现提交代码至私有库自动打包编译提交部署至公开库</strong></li></ul><h3 id="项目难点" tabindex="-1"><a class="header-anchor" href="#项目难点" aria-hidden="true">#</a> 项目难点</h3><ol><li>上面的3至5条都是官网上写得清清楚楚需要对于官网文档阅读理解即可</li><li>配置留言我用的 vercel 但现在还是有没有申请成功,暂时用的别人配置的</li></ol><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>2023年05月17日完成了留言注册，我犯了一个致命的错误，使用了国内的 leancloud 事实证明用国际版的哪有那么多事</li><li>有几个注意点</li><li>一是 leancloud必须使用国际版本</li><li>二是 部署 waline 时的键值对时 键是用官方提供的键 值却必须是 leancloud的值</li><li>其它照常做 反正这玩意把我坑不少时间</li></ul><ol start="3"><li>第7条需要你有两个库一个私有库放源码一个公开库放打包编译好的代码，且在私有库配置四个变量，在公开库配置允许github action访问的权限,公开库的路径则为你的博客的路径。 相关的参考链接己放入本文的底部</li></ol><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>以上就是我关于 <em>Vue如何用vuepress-theme-hope搭建属于自己的博客</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><h3 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h3>',15),N={href:"https://zhuanlan.zhihu.com/p/364366127",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/yanglbme/gitee-pages-action",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/Yikun/hub-mirror-action",target:"_blank",rel:"noopener noreferrer"},B={href:"https://hbuecx.com/post/github-action-gou-jian-shi-bai-chu-li/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/JamesIves/github-pages-deploy-action",target:"_blank",rel:"noopener noreferrer"},H={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://waline.js.org/",target:"_blank",rel:"noopener noreferrer"},J=e("li",null,[e("a",{href:"yanbo0039.gitee.io/blog/zh"},"我的博客请参考")],-1),C={href:"https://console.leancloud.app/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://waline.js.org/guide/get-started/",target:"_blank",rel:"noopener noreferrer"};function T(Y,F){const t=c("ExternalLinkIcon");return r(),o("div",null,[s(" more "),x,y,k,e("p",null,[e("a",V,[i("vuepress-theme-hope"),a(t)])]),z,e("p",null,[e("a",w,[i("这里我写了一些Java方法处理头部博客文件，可能你用得上"),a(t)])]),j,e("ol",null,[e("li",null,[e("a",N,[i("GitHub Actions入门教程-自动部署静态博客"),a(t)])]),e("li",null,[e("a",A,[i("gitee-pages-action"),a(t)])]),e("li",null,[e("a",G,[i("Hub Mirror Action"),a(t)])]),e("li",null,[e("a",B,[i("GitHub Action: The process '/usr/bin/git' failed with exit code 128"),a(t)])]),e("li",null,[e("a",E,[i("github-pages-deploy-action"),a(t)])]),e("li",null,[e("a",H,[i("hope主题官网"),a(t)])]),e("li",null,[e("a",I,[i("Waline"),a(t)])]),J,e("li",null,[e("a",C,[i("leancloud国际版"),a(t)])]),e("li",null,[e("a",L,[i("waline官网"),a(t)])])])])}const O=l(v,[["render",T],["__file","index.html.vue"]]);export{O as default};