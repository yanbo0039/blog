import{_ as i,X as s,Y as r,a1 as c,Z as e,$ as o,a2 as t,a0 as a,F as g}from"./framework-68dd73a2.js";const p="/blog/assets/Es6_1_1.png",l="/blog/assets/Es6_1_2.png",d="/blog/assets/Es6_1_3.png",_="/blog/assets/Es6_1_4.png",f="/blog/assets/Es6_1_5.png",m="/blog/assets/Es6_1_6.png",h="/blog/assets/Es6_1_7.png",u="/blog/assets/Es6_1_8.png",b="/blog/assets/Es6_1_9.png",x="/blog/assets/Es6_1_10.png",y={},E=a(`<h1 id="es6快速入门" tabindex="-1"><a class="header-anchor" href="#es6快速入门" aria-hidden="true">#</a> ES6快速入门</h1><p>. 常量 . 作用域 . 箭头函数 . 默认参数 . 对象代理</p><p><a href="%5Bhttps://github.com/cucygh/fe-material%5D(https://github.com/cucygh/fe-material)">学前必备网站</a></p><h3 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h3><p>安装</p><pre><code>window:
      1.安装git
      2. 执行git clone https://github.com/cucygh/es6-webpack.git
      3. cd es6-webpack &amp;&amp; npm install
 Mac ox 
      1. 执行git clone https://github.com/cucygh/es6-webpack.git
      2. cd es6-webpack &amp;&amp; npm install
</code></pre><p>拓展：</p>`,7),k={href:"https://blog.csdn.net/pp814274513/article/details/86615355",target:"_blank",rel:"noopener noreferrer"},z=e("pre",null,[e("code",null,`若进入某个文件夹的名字中间有空格 则需在文件名上加个单引号就可以了，如 cd 'program files'
`)],-1),q=e("figure",null,[e("img",{src:p,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),D={href:"https://blog.csdn.net/wjnf012/article/details/80422313",target:"_blank",rel:"noopener noreferrer"},w=a(`<pre><code>1.下载nodejs
2.傻瓜式的下一步下一步安装（备注安装路径我是安装在D盘）
3. node -v检查是否安装成功
4. npm config set prefix &quot;D:\\Program Files\\nodeJs\\node_global&quot;
5. npm config set cache&quot;D:\\Program Files\\nodeJs\\node_cache&quot;
</code></pre><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>完成之后会看到对应路径多出两文件夹
</code></pre><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>6. 添加系统环境变量
  在系统环境变量添加NODE_PATH,输入路径为： 
  D:\\Program Files\\nodeJs\\node_global 
 操作如下：我的电脑右击，打开属性-&gt;高级系统设置-&gt;
 环境变量-&gt;新建（系统变量下）-&gt;输入变量名NODE_PATH-&gt;
 变量值：输入上面路径，确定即可。
</code></pre><figure><img src="`+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>7.安装express
npm install -g express-generator
</code></pre><figure><img src="`+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>可以看到node_global/node_modules下有express了，如图：
</code></pre><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>我也不知道怎么回事输入入命令 node
require(&#39;express&#39;)
报错信息为
D:\\Program Files\\nodeJs\\node_global\\express:2
basedir=$(dirname &quot;$(echo &quot;$0&quot; | sed -e &#39;s,\\\\,/,g&#39;)&quot;)
      ^^^^^^^
</code></pre><p>如图：</p><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>8.安装cnpm
输入npm install -g cnpm --registry=https://registry.npm.taobao.org
</code></pre><p>如下图：</p><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>输入cnpm -v
</code></pre><figure><img src="`+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>即安装成功</p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',24);function N(P,v){const n=g("ExternalLinkIcon");return s(),r("div",null,[c(" more "),E,e("p",null,[e("a",k,[o("git clone会存在哪个盘"),t(n)])]),z,q,e("p",null,[e("a",D,[o("cnpm全局安装"),t(n)])]),w])}const V=i(y,[["render",N],["__file","index.html.vue"]]);export{V as default};
