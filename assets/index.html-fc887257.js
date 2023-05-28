import{_ as t,X as n,Y as g,a1 as o,Z as i,$ as a,a2 as s,a0 as r,F as l}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_151_1.png",d="/blog/assets/Kingdee_151_2.png",_="/blog/assets/Kingdee_151_3.png",p="/blog/assets/Kingdee_151_4.png",f="/blog/assets/Kingdee_151_5.png",u="/blog/assets/Kingdee_151_6.png",b="/blog/assets/Kingdee_151_7.png",m="/blog/assets/Kingdee_151_8.png",h="/blog/assets/Kingdee_151_9.png",x="/blog/assets/Kingdee_151_10.png",y="/blog/assets/Kingdee_151_11.png",z="/blog/assets/Kingdee_151_12.png",K="/blog/assets/Kingdee_151_13.png",k="/blog/assets/Kingdee_151_14.png",q="/blog/assets/Kingdee_151_15.png",E="/blog/assets/Kingdee_151_16.png",v="/blog/assets/Kingdee_151_17.png",N="/blog/assets/Kingdee_151_18.png",V="/blog/assets/Kingdee_151_19.png",S="/blog/assets/Kingdee_151_20.png",w="/blog/assets/Kingdee_151_21.png",A="/blog/assets/Kingdee_151_22.png",B="/blog/assets/Kingdee_151_23.png",C="/blog/assets/Kingdee_151_24.png",I="/blog/assets/Kingdee_151_25.png",L="/blog/assets/Kingdee_151_26.png",j={},F={id:"_151-eas扩展报表开发简介-md",tabindex:"-1"},T=i("a",{class:"header-anchor",href:"#_151-eas扩展报表开发简介-md","aria-hidden":"true"},"#",-1),X={href:"http://xn--151-EAS-q54kk78a3nvxwgj3klwar31y6pwb.md",target:"_blank",rel:"noopener noreferrer"},Y=r('<h4 id="什么是扩展报表" tabindex="-1"><a class="header-anchor" href="#什么是扩展报表" aria-hidden="true">#</a> 什么是扩展报表</h4><blockquote><p>我们可以将其理解成一个可视化sql工具查询的结果集，类似于navicat等可视化工具查询出来的sql结果集</p></blockquote><h4 id="客户端路径" tabindex="-1"><a class="header-anchor" href="#客户端路径" aria-hidden="true">#</a> 客户端路径</h4><blockquote><p>商业分析 --&gt; 扩展报表中心 --&gt; 报表平台 ---&gt; 报表工具</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="业务需求" tabindex="-1"><a class="header-anchor" href="#业务需求" aria-hidden="true">#</a> 业务需求</h4><blockquote><p>如下图所示，笔者曾遇到过的需求如下</p></blockquote><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h4><h5 id="新建报表" tabindex="-1"><a class="header-anchor" href="#新建报表" aria-hidden="true">#</a> 新建报表</h5><ol><li>在对应的路径下新建扩展报表</li></ol><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>设置好基本的样式</li></ol><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="新建数据集" tabindex="-1"><a class="header-anchor" href="#新建数据集" aria-hidden="true">#</a> 新建数据集</h5><ol><li>应付票据</li></ol><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>借款业务处理</li></ol><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>授信额度</li></ol><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>融资租赁合同</li></ol><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="配置报表公式" tabindex="-1"><a class="header-anchor" href="#配置报表公式" aria-hidden="true">#</a> 配置报表公式</h5><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="实现效果" tabindex="-1"><a class="header-anchor" href="#实现效果" aria-hidden="true">#</a> 实现效果</h4><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>EAS扩展报表开发简介</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr>',47);function Z($,D){const e=l("ExternalLinkIcon");return n(),g("div",null,[o(" more "),i("h1",F,[T,a(),i("a",X,[a("151-EAS扩展报表开发简介.md"),s(e)])]),Y])}const H=t(j,[["render",Z],["__file","index.html.vue"]]);export{H as default};
