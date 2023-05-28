import{_ as l,X as s,Y as r,a1 as o,Z as e,$ as n,a2 as a,a0 as t,F as d}from"./framework-68dd73a2.js";const c="/blog/assets/Vue_11_1.png",u="/blog/assets/Vue_11_2.png",g="/blog/assets/Vue_11_3.png",m="/blog/assets/Vue_11_4.png",p="/blog/assets/Vue_11_5.png",v="/blog/assets/Vue_11_6.png",h="/blog/assets/Vue_11_7.png",_="/blog/assets/Vue_11_8.png",b="/blog/assets/Vue_11_9.png",f="/blog/assets/Vue_11_10.png",x="/blog/assets/Vue_11_11.png",V="/blog/assets/Vue_11_12.png",k="/blog/assets/Vue_11_13.png",y="/blog/assets/Vue_11_14.png",j={},z={id:"_11-vue-nvm下载与安装配置以及在命令终端和idea终端中测试-md",tabindex:"-1"},E=e("a",{class:"header-anchor",href:"#_11-vue-nvm下载与安装配置以及在命令终端和idea终端中测试-md","aria-hidden":"true"},"#",-1),N={href:"http://xn--11-Vue-NvmIDEA-4c7vpb10b89hsa471woldqju34cvszqp5h4d8cfa786yga180czy5gkrua6r1a3vn.md",target:"_blank",rel:"noopener noreferrer"},D=e("h4",{id:"下载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载","aria-hidden":"true"},"#"),n(" 下载")],-1),I={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},w=t('<figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><ol><li>卸载之前的node后安装nvm, nvm-setup.exe安装版，直接运行nvm-setup.exe</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>选择nvm安装路径</li></ol><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>选择nodejs路径(注：可以直接在nvm路径下写上nodejs文件夹即可，无需创建对应的文件夹程序会自动创建，若创建了对应的文件夹程序也会自动删除)</li></ol><figure><img src="'+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h4><ol><li>检查环境变量（通常情况环境变量会自动添加好）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sysdm.cpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="配置setting-txt" tabindex="-1"><a class="header-anchor" href="#配置setting-txt" aria-hidden="true">#</a> 配置setting.txt</h4><p>使用如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者直接在setting.txt里添加如下内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>##node淘宝镜像
node_mirror: https://npm.taobao.org/mirrors/node/

##npm淘宝镜像
npm_mirror: https://npm.taobao.org/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注意：</li></ul>`,21),A=e("li",null,[e("p",null,"这里设置的是安装node和npm本身的源，并不是设置安装node包的源。")],-1),q={href:"https://registry.npm.taobao.org",target:"_blank",rel:"noopener noreferrer"},B=e("li",null,[e("p",null,"可通过 npm config list 查看")],-1),L=t(`<h4 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nvm arch：显示node是运行在32位还是64位。
nvm install &lt;version&gt; [arch] ：安装node， version是特定版本也可以是最新稳定版本latest。可选参数arch指定安装32位还是64位版本，默认是系统位数。可以添加--insecure绕过远程服务器的SSL。
nvm list [available] ：显示已安装的列表。可选参数available，显示可安装的所有版本。list可简化为ls。
nvm on ：开启node.js版本管理。
nvm off ：关闭node.js版本管理。
nvm proxy [url] ：设置下载代理。不加可选参数url，显示当前代理。将url设置为none则移除代理。
nvm node_mirror [url] ：设置node镜像。默认是https://nodejs.org/dist/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。
nvm npm_mirror [url] ：设置npm镜像。https://github.com/npm/cli/archive/。如果不写url，则使用默认url。设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。
nvm uninstall &lt;version&gt; ：卸载指定版本node。
nvm use [version] [arch] ：使用制定版本node。可指定32/64位。
nvm root [path] ：设置存储不同版本node的目录。如果未设置，默认使用当前目录。
nvm version ：显示nvm版本。version可简化为v。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><ol><li><p>nvm -v</p></li><li><p>nvm list available</p></li></ol><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="ide工具里测试" tabindex="-1"><a class="header-anchor" href="#ide工具里测试" aria-hidden="true">#</a> IDE工具里测试</h4><figure><img src="'+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>注：之前我不知什么原因安装的nvm在IDEA中一直无法使用命令,后来我来来回回删删装装N多次之后终于可以了 我怀疑是由于之前的nvm以及node没有删除干净的原因！！！！！</strong></p><ol start="3"><li>当然你还得将node设置了全局并添加到环境变量里，如下所示</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>NODE_PATH
D:\\ProgramFiles\\soft\\nodejs\\node_global\\node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="启动vue项目小技巧" tabindex="-1"><a class="header-anchor" href="#启动vue项目小技巧" aria-hidden="true">#</a> 启动VUE项目小技巧</h4><ul><li>当前我们前面的那么多的辅助功能醉终的目的就是为了启动VUE项目，当我们拿着别的人项目时，有很多时候会因为各种报错而导致项目无法启动的情况，这里分享一下一些小技巧.</li></ul><ol><li>删除 node_modules 文件夹命令,有时候不明原因只要你删除这个文件夹重新安装一次就会成功了，所以你可能会常用如下的命令</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rm -rf node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>npm outdated 以及 npm update 命令，有时安装依赖时会出现一些警告信息通常是由于你的项目中使用了一些已经过时的库或包如果你决定升级这些过时的库或包，可以通过以下步骤解决这些警告信息：</li></ol><ul><li><p>执行 npm outdated 命令，查看哪些库或包需要升级。</p></li><li><p>执行 npm update 命令，升级需要更新的库或包。</p></li><li><p>更新完毕后，重新启动你的项目，确保一切正常。</p></li></ul><p>注意：在升级过时的库或包之前，最好先备份你的项目，以防万一。</p><ul><li>当然你也可能手动更改packge.json里的版本，逐个逐个的去试</li></ul><figure><img src="`+y+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>利用 npm-check-updates 功具直接更改packge.json里的所有依赖为最新，当然这种很有可能造成你拿到的项目里面的代码因为是低版本而无法获得高版本的支持，但仍不失为一种方法，也非常适用于懒人</li></ol><ul><li>执行以下命令来全局安装 npm-check-updates：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g npm-check-updates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>进入你的项目根目录，在命令行中输入以下命令来检查你的项目中需要更新的依赖项：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ncu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>如果你想更新 package.json 文件中的依赖项版本，可以在命令行中输入以下命令：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ncu -u
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>运行上述命令后，npm-check-updates 将自动更新 package.json 文件中的依赖项版本，并生成一个新的 package.json 文件，你可以在项目中使用它。</li></ul><p>总之，npm-check-updates 是一个非常方便的工具，可以帮助你快速更新项目中的依赖项版本。不过，注意备份你的项目，以防出现问题.</p>`,31),S={href:"http://xn--11-Vue-NvmIDEA-4c7vpb10b89hsa471woldqju34cvszqp5h4d8cfa786yga180czy5gkrua6r1a3vn.md",target:"_blank",rel:"noopener noreferrer"},C=e("hr",null,null,-1),F=e("h4",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),P=e("hr",null,null,-1),T=e("h4",{id:"扩展知识",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#扩展知识","aria-hidden":"true"},"#"),n(" 扩展知识")],-1),U={href:"https://blog.csdn.net/m0_64697285/article/details/127318141",target:"_blank",rel:"noopener noreferrer"},H={href:"https://nvm.uihtm.com/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://juejin.cn/post/7093787595951308836",target:"_blank",rel:"noopener noreferrer"},O={href:"https://juejin.cn/post/7000652162950758431",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.bilibili.com/read/cv19573679",target:"_blank",rel:"noopener noreferrer"},X=e("hr",null,null,-1),Y=e("p",null,"分割线",-1),Z=e("hr",null,null,-1),$=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function G(J,K){const i=d("ExternalLinkIcon");return s(),r("div",null,[o(" more "),e("h1",z,[E,n(),e("a",N,[n("11-Vue-Nvm下载与安装配置以及在命令终端和IDEA终端中测试.md"),a(i)])]),D,e("ol",null,[e("li",null,[e("a",I,[n("下载地址"),a(i)])])]),w,e("ol",null,[A,e("li",null,[e("p",null,[n("安装npm淘宝镜像：npm config set registry "),e("a",q,[n("https://registry.npm.taobao.org"),a(i)])])]),B]),L,e("p",null,[e("strong",null,[n("以上就是我关于 "),e("em",null,[e("a",S,[n("11-Vue-Nvm下载与安装配置以及在命令终端和IDEA终端中测试.md"),a(i)])]),n(" 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。")])]),C,F,P,T,e("ol",null,[e("li",null,[e("p",null,[e("a",U,[n("nvm的安装和使用（详细）"),a(i)])])]),e("li",null,[e("p",null,[e("a",H,[n("nvm 一个nodejs版本管理工具！"),a(i)])])]),e("li",null,[e("p",null,[e("a",M,[n("Windows nvm安装与使用"),a(i)])])]),e("li",null,[e("p",null,[e("a",O,[n("nvm 安装、卸载与使用（详细步骤）"),a(i)])])]),e("li",null,[e("p",null,[e("a",W,[n("NVM(Node.js version management）安装踩坑及在IDEA中的配置"),a(i)])])])]),X,Y,Z,$])}const R=l(j,[["render",G],["__file","index.html.vue"]]);export{R as default};