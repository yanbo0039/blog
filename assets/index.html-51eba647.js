import{_ as s,X as n,Y as l,a1 as o,Z as t,$ as i,a2 as a,a0 as r,F as d}from"./framework-68dd73a2.js";const c="/blog/assets/Git_17_1.png",u="/blog/assets/Git_17_2.png",g="/blog/assets/Git_17_3.png",h="/blog/assets/Git_17_4.png",b="/blog/assets/Git_17_5.png",_="/blog/assets/Git_17_6.png",p="/blog/assets/Git_17_7.png",m="/blog/assets/Git_17_8.png",f={},v={id:"_17-git提交代码报错fatal-unable-to-access-https-github-com-javaobjects-studylog-git-failed-to-connect-to-github-com-port-443-timed-out如何解决-md",tabindex:"-1"},S=t("a",{class:"header-anchor",href:"#_17-git提交代码报错fatal-unable-to-access-https-github-com-javaobjects-studylog-git-failed-to-connect-to-github-com-port-443-timed-out如何解决-md","aria-hidden":"true"},"#",-1),x={href:"https://github.com/javaobjects/studyLog.git/",target:"_blank",rel:"noopener noreferrer"},y={href:"http://github.com",target:"_blank",rel:"noopener noreferrer"},G=r(`<h4 id="场景再现" tabindex="-1"><a class="header-anchor" href="#场景再现" aria-hidden="true">#</a> 场景再现</h4><ul><li>如下图所示，报错如下</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fatal: unable to access &#39;https://github.com/javaobjects/studyLog.git/&#39;: Failed to connect to github.com port 443: Timed out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="bug原因" tabindex="-1"><a class="header-anchor" href="#bug原因" aria-hidden="true">#</a> bug原因</h4><ol><li><p>检查网络连接：首先，请确保您的计算机已连接到互联网，并检查您的网络连接是否稳定。如果您使用的是公司网络，请联系网络管理员，以确保您可以访问Github。</p></li><li><p>检查代理配置：如果您使用代理服务器连接到互联网，请检查您的代理配置是否正确。在Git Bash中输入以下命令可以检查代理设置：git config --global --get http.proxy和git config --global --get https.proxy。如果它们返回一个非空值，请尝试将代理设置为正确的值。</p></li><li><p>检查防火墙配置：如果您使用的是防火墙，请确保您已允许出站流量连接到Github。您可以联系您的系统管理员或网络管理员以获得有关如何配置防火墙的更多信息</p></li><li><p>切换到SSH协议：如果您无法使用HTTP协议连接到Github，请尝试切换到SSH协议。这需要您在Github上配置SSH密钥。Github官方网站提供了如何配置SSH密钥的文档，您可以参考这些文档以配置您的SSH密钥。</p></li></ol><ul><li>经排除我的是第四个原因</li></ul><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h4><ul><li>我菜取的方法是切换到ssh协议连接到github</li></ul><ol><li>输入 ls -al ~/.ssh 检查本地是否已存在SSH密钥 如果返回“没有那个文件或目录”的错误信息，则表示本地没有SSH密钥，需要生成新的SSH密钥</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>可以看出您已经在本地计算机上有一个名为&quot;known_hosts&quot;的文件。这是SSH在首次连接到远程主机时自动生成的。因此，您的本地计算机已经在之前连接到远程主机并将其公钥添加到了known_hosts文件中。然而，这并不意味着本地计算机上已经创建了SSH密钥。可以通过运行以下命令在本地计算机上检查是否存在SSH密钥：ls -al ~/.ssh。如果该目录下有名为&quot;id_rsa&quot;和&quot;id_rsa.pub&quot;的文件，则表示已经创建了SSH密钥对,由于我们刚刚已执行过了此命令故执行如下命令 <strong>ssh-keygen</strong> 命令生成一个新的SSH密钥对。</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>当它问你是否需要密码时你需要你就设置不需要就可以像我一样直接确定到最后即可</li></ul><ol start="3"><li>使用 ls -al ~/.ssh 查看是否生成id_rsa 和 id_rsa.pub 文件，如果生成则表明成功</li></ol><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>使用 cat ~/.ssh/id_rsa.pub 显示公钥，反正命令后那一堆都是，别管它带不带空格什么的</li></ol><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>将公钥添到的github中</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>登录到您的 Github 账户。

单击右上角的个人资料图标，然后单击“Settings”。

单击左侧菜单中的“SSH and GPG keys”。

单击“New SSH key”创建新的 SSH 密钥。

在“Title”字段中输入有意义的名称以标识您的密钥。

在“Key”字段中粘贴您的公钥。

单击“Add SSH key”按钮。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>将仓库切换到ssh协议来进行推送</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查看你的仓库地址命令： git remote -v 

修改你的仓库地址命令： git remote set-url 你的仓库名 你的SSH协议地址 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><ul><li>如下图所示，测试成功</li></ul><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',27),H={href:"https://github.com/javaobjects/studyLog.git/",target:"_blank",rel:"noopener noreferrer"},j={href:"http://github.com",target:"_blank",rel:"noopener noreferrer"},k=t("hr",null,null,-1),z=t("h4",{id:"分割线",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),L=t("hr",null,null,-1),T=t("h4",{id:"扩展知识",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#扩展知识","aria-hidden":"true"},"#"),i(" 扩展知识")],-1),q=t("p",null,"使用http协议连接推送githu会比较烦，它醉大的不便之处在于重复性的输入用户名密码什么的，我现在已经放弃使用http的使用方法了,改用ssh连接方便快捷，不会过多的浪费我的时间与精力",-1),N=t("hr",null,null,-1),V=t("p",null,"分割线",-1),B=t("hr",null,null,-1),F=t("p",null,[t("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function w(E,C){const e=d("ExternalLinkIcon");return n(),l("div",null,[o(" more "),t("h1",v,[S,i(" 17-Git提交代码报错fatal: unable to access '"),t("a",x,[i("https://github.com/javaobjects/studyLog.git/"),a(e)]),i("': Failed to connect to "),t("a",y,[i("github.com"),a(e)]),i(" port 443: Timed out如何解决？.md")]),G,t("p",null,[t("strong",null,[i("以上就是我关于 "),t("em",null,[i("Git提交代码报错fatal: unable to access '"),t("a",H,[i("https://github.com/javaobjects/studyLog.git/"),a(e)]),i("': Failed to connect to "),t("a",j,[i("github.com"),a(e)]),i(" port 443: Timed out如何解决？")]),i(" 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。")])]),k,z,L,T,q,N,V,B,F])}const P=s(f,[["render",w],["__file","index.html.vue"]]);export{P as default};