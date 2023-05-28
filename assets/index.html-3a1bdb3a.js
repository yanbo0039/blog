import{_ as o,X as n,Y as g,a1 as s,Z as i,$ as e,a2 as r,a0 as a,F as l}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_51_1.png",d="/blog/assets/Kingdee_51_2.png",p="/blog/assets/Kingdee_51_3.png",_="/blog/assets/Kingdee_51_4.png",f="/blog/assets/Kingdee_51_5.png",h="/blog/assets/Kingdee_51_6.png",u="/blog/assets/Kingdee_51_7.png",b="/blog/assets/Kingdee_51_8.png",m="/blog/assets/Kingdee_51_9.png",x="/blog/assets/Kingdee_51_10.png",y="/blog/assets/Kingdee_51_11.png",k="/blog/assets/Kingdee_51_12.png",z="/blog/assets/Kingdee_51_13.png",K="/blog/assets/Kingdee_51_14.png",q="/blog/assets/Kingdee_51_15.png",I={},N=a('<h1 id="_51-金蝶云苍穹如何解决当前用户的云之家openid为空的bug-md" tabindex="-1"><a class="header-anchor" href="#_51-金蝶云苍穹如何解决当前用户的云之家openid为空的bug-md" aria-hidden="true">#</a> 51-金蝶云苍穹如何解决当前用户的云之家openId为空的bug？.md</h1><h4 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h4><blockquote><p>如图所示，在添加卡片为<strong>云之家订阅卡片</strong>时报如下错误</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h4><h5 id="下载key文件" tabindex="-1"><a class="header-anchor" href="#下载key文件" aria-hidden="true">#</a> 下载key文件</h5>',6),V={href:"https://www.yunzhijia.com/home/",target:"_blank",rel:"noopener noreferrer"},v=a('<figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>路径: 管理中心 --&gt; 系统设置 --&gt; 系统集成 --&gt; 点击下载</li></ol><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>如下图所示，下载完成</li></ol><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="更改文件服务器配置" tabindex="-1"><a class="header-anchor" href="#更改文件服务器配置" aria-hidden="true">#</a> 更改文件服务器配置</h5><ol><li><p>进入<strong>金蝶云苍穹管理中心(MC)</strong> admin/Kdadmin001</p></li><li><p>路径: 系统管理 --&gt; 管理中心配置</p></li></ol><blockquote><p>更改为如下图所示</p></blockquote><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>为确保成功，请重启服务(即所有的bat文件和eclipse)</li></ol><h5 id="更改数据中心配置" tabindex="-1"><a class="header-anchor" href="#更改数据中心配置" aria-hidden="true">#</a> 更改数据中心配置</h5><ol><li>登录金蝶云苍穹管理中心，进入租户列表，选择需要配置的租户，点击租户ID超级链接</li></ol><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>将数据中心禁用并保存，双击数据中心名片空白处可以进入数据中心配置页面</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>进行如下图所示的配置</li></ol><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>配置完成后开启并保存</li></ol><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>选择集群管理，发布刚编辑的租户所属集群，并重启服务</li></ol><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="配置系统参数" tabindex="-1"><a class="header-anchor" href="#配置系统参数" aria-hidden="true">#</a> 配置系统参数</h5><ol><li>普通用户登录金蝶云苍穹，进入路径 系统云 ---&gt; 配置工具 ---&gt; 系统参数 --&gt; 系统云 --&gt; 基础服务 --&gt; 云之家参数 --&gt; 苍穹从云之家同步组织人员</li></ol><blockquote><p>此处的组织应该之前数据中心的相同</p></blockquote><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>差异化分析</li></ol><blockquote><p>路径: 系统云 --&gt; 基础服务 --&gt; 云之家差异对比列表 --&gt; 检查差异并同步</p></blockquote><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="检验是否成功" tabindex="-1"><a class="header-anchor" href="#检验是否成功" aria-hidden="true">#</a> 检验是否成功</h4><blockquote><p>在首页添加卡片,选择<strong>云之家订阅卡片</strong>，如下图所示配置成功</p></blockquote><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹如何解决当前用户的云之家openId为空的bug？</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',38);function w(B,C){const t=l("ExternalLinkIcon");return n(),g("div",null,[s(" more "),N,i("ol",null,[i("li",null,[e("登录"),i("a",V,[e("云之家官网"),r(t)])])]),v])}const L=o(I,[["render",w],["__file","index.html.vue"]]);export{L as default};
