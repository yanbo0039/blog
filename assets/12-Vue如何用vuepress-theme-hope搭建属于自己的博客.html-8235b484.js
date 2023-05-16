import{_ as i,X as l,Y as p,a1 as o,Z as n,$ as s,a2 as e,a0 as t,F as c}from"./framework-68dd73a2.js";const u="/blog/assets/Vue_12_1.png",r="/blog/assets/Vue_12_2.png",d="/blog/assets/Vue_12_3.png",k="/blog/assets/Vue_12_4.png",m="/blog/assets/Vue_12_5.png",v="/blog/assets/Vue_12_6.png",b="/blog/assets/Vue_12_7.png",g="/blog/assets/Vue_12_8.png",h="/blog/assets/Vue_12_9.png",_={},y=n("h1",{id:"vue如何用vuepress-theme-hope搭建属于自己的博客",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue如何用vuepress-theme-hope搭建属于自己的博客","aria-hidden":"true"},"#"),s(" Vue如何用vuepress-theme-hope搭建属于自己的博客?")],-1),f=n("h4",{id:"找到官网",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#找到官网","aria-hidden":"true"},"#"),s(" 找到官网")],-1),x=n("ol",null,[n("li",null,"点击如下地址进入官网")],-1),E={href:"https://vuepress-theme-hope.gitee.io/v2/zh/",target:"_blank",rel:"noopener noreferrer"},V=t('<h4 id="本地安装启动项目" tabindex="-1"><a class="header-anchor" href="#本地安装启动项目" aria-hidden="true">#</a> 本地安装启动项目</h4><ol><li>本地新建文件夹 vuepress-hope-myblog 并在此文件夹路径下启动cmd或power shell 但不能是git bash 因为需要一个交互式的命令窗口</li></ol><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>运行如下命令</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm create vuepress-theme-hope add docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>在命令窗口向你提问时依次利用键盘的上下键选择</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 简体中文
2. pnpm
3. 请连续按四个回车
4. y
5. blog
6. y
7. y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="配置项目" tabindex="-1"><a class="header-anchor" href="#配置项目" aria-hidden="true">#</a> 配置项目</h4><ol><li>更改头部文字以及其配置</li></ol><ul><li>如下所示的地方都需要更改</li></ul><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>对应需要更改的文件</li></ul><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>放进你写的博客到指定位置且按固定格式以及文件配置</li></ol>',16),G={href:"https://gitee.com/JavaObjects/file-crud",target:"_blank",rel:"noopener noreferrer"},S=t(`<ol start="3"><li><p>配置头部以及侧边栏</p></li><li><p>配置搜索框</p></li><li><p>配置加密文章</p></li><li><p>配置留言评论</p></li><li><p>配置github action完成从私有库提交触发提交代码至公库并部署至该库的服务器以及gitee服务器</p></li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>
<span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档

<span class="token comment"># 触发条件：在 push 到 master 分支后</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token comment"># 确保这是你正在使用的分支名称</span>
      <span class="token punctuation">-</span> master
<span class="token comment"># 任务</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
    <span class="token comment"># 服务器环境：最新版 Ubuntu</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># 1. 拉取代码</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
          <span class="token comment"># 如果你文档需要 Git 子模块，取消注释下一行</span>
          <span class="token key atrule">submodules</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#        2. 安装pnpm</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装 pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> 8.4.0 <span class="token comment"># 添加版本号</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#        3. 安装node</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm
<span class="token comment">#        4. 执行打包命令</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 执行打包命令
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192
        <span class="token key atrule">run</span><span class="token punctuation">:</span>
          pnpm run docs<span class="token punctuation">:</span>build
      <span class="token comment"># 5. 部署到 GitHub Pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 提交以及部署到Github指定公开库
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.AS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">REPOSITORY-NAME</span><span class="token punctuation">:</span> yanbo0039/blog
          <span class="token comment"># 这是文档部署到的分支名称</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># 这是待提交的目录</span>
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> docs/.vuepress/dist

      <span class="token comment"># 6. 同步到 gitee 的仓库</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 同步到Gitee
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> wearerequired/git<span class="token punctuation">-</span>mirror<span class="token punctuation">-</span>action@master
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># 注意在 Settings-&gt;Secrets 配置 GITEE_RSA_PRIVATE_KEY</span>
          <span class="token key atrule">SSH_PRIVATE_KEY</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_RSA_PRIVATE_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 注意替换为你的 GitHub 源仓库地址</span>
          <span class="token key atrule">source-repo</span><span class="token punctuation">:</span> git@github.com<span class="token punctuation">:</span>yanbo0039/blog.git
          <span class="token comment"># 注意替换为你的 Gitee 目标仓库地址</span>
          <span class="token key atrule">destination-repo</span><span class="token punctuation">:</span> git@gitee.com<span class="token punctuation">:</span>yanbo0039/blog.git
            
      <span class="token comment"># 4、部署到 Gitee Pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署到 Gitee 服务器
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> yanglbme/gitee<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>action@main
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 注意替换为你的 Gitee 用户名</span>
          <span class="token key atrule">gitee-username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_USERNAME <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token comment"># 注意在 Settings-&gt;Secrets 配置 GITEE_PASSWORD</span>
          <span class="token key atrule">gitee-password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITEE_PASSWORD <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token comment"># 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错</span>
          <span class="token key atrule">gitee-repo</span><span class="token punctuation">:</span> yanbo0039/blog
          <span class="token comment"># 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="项目难点" tabindex="-1"><a class="header-anchor" href="#项目难点" aria-hidden="true">#</a> 项目难点</h4><ol><li>上面的3至5条都是官网上写得清清楚楚需要对于官网文档阅读理解即可</li><li>配置留言我用的 vercel 但现在还是有没有申请成功,暂时用的别人配置的</li></ol><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>第7条需要你有两个库一个私有库放源码一个公开库放打包编译好的代码，且在私有库配置四个变量，在公开库配置允许github action访问的权限,公开库的路径则为你的博客的路径。 相关的参考链接己放入本文的底部</li></ol><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li><a href="yanbo0039.gitee.io/blog/zh">我的博客请参考</a></li></ol><p><strong>以上就是我关于 <em>Vue如何用vuepress-theme-hope搭建属于自己的博客</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4>',15),z={href:"https://zhuanlan.zhihu.com/p/364366127",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/yanglbme/gitee-pages-action",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/Yikun/hub-mirror-action",target:"_blank",rel:"noopener noreferrer"},A={href:"https://hbuecx.com/post/github-action-gou-jian-shi-bai-chu-li/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/JamesIves/github-pages-deploy-action",target:"_blank",rel:"noopener noreferrer"},w={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://waline.js.org/",target:"_blank",rel:"noopener noreferrer"},R=n("hr",null,null,-1),P=n("p",null,"分割线",-1),H=n("hr",null,null,-1);function j(Y,K){const a=c("ExternalLinkIcon");return l(),p("div",null,[o(" more "),y,f,x,n("p",null,[n("a",E,[s("vuepress-theme-hope"),e(a)])]),V,n("p",null,[n("a",G,[s("这里我写了一些Java方法处理头部博客文件，可能你用得上"),e(a)])]),S,n("ol",null,[n("li",null,[n("a",z,[s("GitHub Actions入门教程-自动部署静态博客"),e(a)])]),n("li",null,[n("a",T,[s("gitee-pages-action"),e(a)])]),n("li",null,[n("a",I,[s("Hub Mirror Action"),e(a)])]),n("li",null,[n("a",A,[s("GitHub Action: The process '/usr/bin/git' failed with exit code 128"),e(a)])]),n("li",null,[n("a",N,[s("github-pages-deploy-action"),e(a)])]),n("li",null,[n("a",w,[s("hope主题官网"),e(a)])]),n("li",null,[n("a",O,[s("Waline"),e(a)])])]),R,P,H])}const J=i(_,[["render",j],["__file","12-Vue如何用vuepress-theme-hope搭建属于自己的博客.html.vue"]]);export{J as default};
