import{_ as t,X as l,Y as s,a1 as o,Z as e,$ as i,a2 as n,a0 as r,F as d}from"./framework-68dd73a2.js";const g="/blog/assets/Vue_10_1.png",c="/blog/assets/Vue_10_2.png",u="/blog/assets/Vue_10_3.png",p="/blog/assets/Vue_10_4.png",m="/blog/assets/Vue_10_5.png",_="/blog/assets/Vue_10_6.png",v="/blog/assets/Vue_10_7.png",f="/blog/assets/Vue_10_8.png",b="/blog/assets/Vue_10_9.png",x="/blog/assets/Vue_10_10.png",h="/blog/assets/Vue_10_11.png",V="/blog/assets/Vue_10_12.png",y={},z={id:"_10-vue-node下载安装与配置-md",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#_10-vue-node下载安装与配置-md","aria-hidden":"true"},"#",-1),D={href:"http://xn--10-Vue-Node-nq8qhbz831bgs2h8h5an4xzhh.md",target:"_blank",rel:"noopener noreferrer"},k={href:"http://nodejs.cn/download/",target:"_blank",rel:"noopener noreferrer"},P=r('<figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>安装，直接下一步下一下就行</li></ol><ul><li>有两个地方需要注意 一是自定义路径自己更改 二是醉后的复选框不要去勾选就行了</li></ul><ol start="3"><li>检查是否安装成功，在cmd里输入如下命令看看是否有版本提示，若有则是安装成功</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node -v
npm -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>在node安装路径下新建两个文件夹</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>node_cache(缓存目录) 
node_global(全局包存放目录)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>设置文件夹权限</li></ol><ul><li>node文件夹权限</li></ul><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>node_cache，node_global文件也修改权限，跟上面是一样的操作</li></ul><ol start="6"><li>在命令提示符里输入如下两段命令</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config set prefix “D:\\ProgramFiles\\soft\\node-v16.18.1\\node_global”
npm config set cache “D:\\ProgramFiles\\soft\\node-v16.18.1\\node_cache”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>检查是否配置成功</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm root -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>出现如下图所示，证明配置成功</li></ul><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="8"><li>配置环境变量</li></ol><ul><li><p>窗口+R 输入 命令 sysdm.cpl --&gt; 高级 --&gt; 环境变量</p></li><li><p>在系统变量里新建如下变量名+变量值</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>变量名：NODE_PATH
变量值：D:\\ProgramFiles\\soft\\node-v16.18.1\\node_global\\node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>修改用户变量中的path的值 将 C:\\Users\\Administrator\\AppData\\Roaming\\npm 修改为D:\\ProgramFiles\\soft\\node-v16.18.1\\node_global</li></ul><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>系统变量的path添加 %NODE_PATH%</li></ul><figure><img src="'+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="9"><li>测试，配置完成后，安装个module测试下，咱们就安装最经常使用的express模块，打开cmd窗口，输入以下命令进行模块的全局安装</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install express -g   // -g是全局安装的意思

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="10"><li>添加国内镜像源</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config set registry https://registry.npm.taobao.org

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li>使用定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g cnpm --registry=https://registry.npmmirror.com

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>Vue-Node下载安装与配置</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',46);function E(F,A){const a=d("ExternalLinkIcon");return l(),s("div",null,[o(" more "),e("h1",z,[N,i(),e("a",D,[i("10-Vue-Node下载安装与配置.md"),n(a)])]),e("ol",null,[e("li",null,[i("下载，一定要去中文网下载，"),e("a",k,[i("下载地址"),n(a)])])]),P])}const C=t(y,[["render",E],["__file","index.html.vue"]]);export{C as default};
