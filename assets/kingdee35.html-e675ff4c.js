import{_ as i,X as a,Y as t,a1 as e,a0 as g}from"./framework-68dd73a2.js";const n="/blog/assets/Kingdee_35_1.png",o="/blog/assets/Kingdee_35_2.png",s="/blog/assets/Kingdee_35_3.png",r="/blog/assets/Kingdee_35_4.png",c="/blog/assets/Kingdee_35_5.png",l="/blog/assets/Kingdee_35_6.png",p="/blog/assets/Kingdee_35_7.png",d="/blog/assets/Kingdee_35_8.png",_="/blog/assets/Kingdee_35_9.png",f="/blog/assets/Kingdee_35_10.png",u="/blog/assets/Kingdee_35_11.png",b="/blog/assets/Kingdee_35_12.png",m="/blog/assets/Kingdee_35_13.png",h="/blog/assets/Kingdee_35_14.png",x="/blog/assets/Kingdee_35_15.png",y="/blog/assets/Kingdee_35_16.png",z="/blog/assets/Kingdee_35_17.png",K="/blog/assets/Kingdee_35_18.png",k="/blog/assets/Kingdee_35_19.png",q="/blog/assets/Kingdee_35_20.png",I="/blog/assets/Kingdee_35_21.png",P="/blog/assets/Kingdee_35_22.png",v="/blog/assets/Kingdee_35_23.png",C="/blog/assets/Kingdee_35_24.png",V="/blog/assets/Kingdee_35_25.png",w={},B=g('<h1 id="_35-金蝶云苍穹如何固定数据库ip为本地地址-md" tabindex="-1"><a class="header-anchor" href="#_35-金蝶云苍穹如何固定数据库ip为本地地址-md" aria-hidden="true">#</a> 35-金蝶云苍穹如何固定数据库IP为本地地址？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><blockquote><p>云苍穹有一个很坑的点，在安装时其数据库IP为安装时本机的IP地址，而不是127.0.0.1，这就会造成一个问题， 一但本地IP地址有变化，往往是出现各种车祸式的bug。。。。所以才有更改数据库IP的必要。。。</p></blockquote><h3 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h3><ol><li>MC账号登录更改数据库连接管理</li></ol><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>更改集群管理</li></ol><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>更改完成后关闭此模块后重新打开，下以截图有误。。</p></blockquote><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>更改ZooViewer中的所有IP地址</li></ol><blockquote><p>如图所示，需要将此压缩包解压后放在云苍穹的子目录</p></blockquote><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>双击此.bat文件</p></blockquote><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>找到对应的目录后将此内空复制到记事本，将找到所有的192.168的IP地址将其替换成127.0.0.1后再复制回来并更新。。。</p></blockquote><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="后言" tabindex="-1"><a class="header-anchor" href="#后言" aria-hidden="true">#</a> 后言</h3><blockquote><p>做完以上步骤后重新登录MC再次确定无误后即可在任何地点都可以玩了，再也不用担心IP地址变化所带来的烦扰了。。。</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>修改IP操作</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',43);function M(N,E){return a(),t("div",null,[e(" more "),B])}const X=i(w,[["render",M],["__file","kingdee35.html.vue"]]);export{X as default};
