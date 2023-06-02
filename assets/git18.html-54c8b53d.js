import{_ as n,X as s,Y as a,a1 as e,a0 as t}from"./framework-68dd73a2.js";const i="/blog/assets/Git_18_1.png",l={},p=t(`<h1 id="git-githubaction实现提交代码至私有库自动打包编译提交部署至公开库" tabindex="-1"><a class="header-anchor" href="#git-githubaction实现提交代码至私有库自动打包编译提交部署至公开库" aria-hidden="true">#</a> Git-GithubAction实现提交代码至私有库自动打包编译提交部署至公开库？</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h3><ol><li>我有这样一个需求，如果我能够通过Git提交代码它能帮我自动打包部署至Github服务器那我不就会很省事</li></ol><ul><li>当然很幸运github action提供了这样一个功能</li></ul><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><ol><li>我是这样实现的，我有一个源码仓库 vuepress-theme-hope 这是不公开的 一个公开库 blog 这是展示打包编译后的代码的库</li><li>私有库 vuepress-theme-hope 只有一个分支 master</li><li>私有库 vuepress-theme-hope 在仓库的setting --&gt; Sercets and variables --&gt; Actions --&gt; New repository secrets 里新建四个变量值以备后续使用</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>AS_TOKEN ： 页面右上解用户名的setting --&gt; Developer settings --&gt; Presonal access tokens --&gt; Tokens(classic) 
---&gt; 自己新建就行了 用户名 AS_TOKEN  权限全部勾选 过期日期设置永不过期  之后生成的值就是你所需要的值

GITEE_RSA_PRIVATE_KEY ： ssh-keygen -t rsa -b 4096 -C &quot;你的github邮箱全名&quot; 然后一直下一步直到生成对应的文件
比如我的就是ssh-keygen -t rsa -b 4096 -C &quot;yanbo0039@yeah.net&quot;生成在 C:\\Users\\Administrator\\.ssh文件夹下
的 id_rsa 和 id_rsa.pub 文件 其中 id_rsa 里全部的值就是你 GITEE_RSA_PRIVATE_KEY 的值，记住是全部
id_rsa.pub 里的全部的值复制到 gitee 页面右上解用户名的设置 --&gt; 安全设置 --&gt; SSH公钥 其中标题随便填写 值一定要是 id_rsa.pub 里的全部

GITEE_USERNAME : 你的gitee的用户名

GITEE_PASSWORD ： 你的gitee的密码

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>公开库 blog 只有一个分支 gh-page 只为跟上面的库的分支区分开来</li><li>公开库 blog 设置允许github action 操作的权限</li></ol><ul><li>仓库setting --&gt; Action --&gt; General --&gt; 右侧划到醉底部 Workflow permissions --&gt;</li><li>勾选 Read and write permissions 以及 Allow Github Actions to create and approve pull requests</li><li>醉后点击Save即可</li></ul><ol start="6"><li>在公开库的要目录的 .github 文件夹下的workflows里配置deploy-docs.yml，其内容如下</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>照如上步骤配置完成后，即可实现每次向 vuepress-theme-hope 的 master 分支提交代码后则会自动打包提交部署至Github 以及 Gitee 的blog仓库 即可通过github生成的url进行访问生成的网页</li><li>当前前提是你的Github 及 Gitee 里 对应的仓库</li></ul><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><ul><li>下图是我多次测试成功的记录</li></ul><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Git-GithubAction实现提交代码至私有库自动打包编译提交部署至公开库</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',20);function c(o,u){return s(),a("div",null,[e(" more "),p])}const d=n(l,[["render",c],["__file","git18.html.vue"]]);export{d as default};
