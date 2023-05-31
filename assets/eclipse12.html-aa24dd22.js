import{_ as e,X as o,Y as a,a1 as n,Z as s,$ as i,a2 as g,a0 as l,F as r}from"./framework-68dd73a2.js";const c="/blog/assets/Eclipse_12_1.png",p="/blog/assets/Eclipse_12_2.png",_="/blog/assets/Eclipse_12_3.png",m="/blog/assets/Eclipse_12_4.png",d="/blog/assets/Eclipse_12_5.png",f="/blog/assets/Eclipse_12_6.png",h="/blog/assets/Eclipse_12_7.png",u="/blog/assets/Eclipse_12_8.png",b="/blog/assets/Eclipse_12_9.png",y="/blog/assets/Eclipse_12_10.png",E="/blog/assets/Eclipse_12_11.png",z="/blog/assets/Eclipse_12_12.png",x="/blog/assets/Eclipse_12_13.png",k="/blog/assets/Eclipse_12_14.png",G="/blog/assets/Eclipse_12_15.png",w="/blog/assets/Eclipse_12_16.png",N="/blog/assets/Eclipse_12_17.png",P="/blog/assets/Eclipse_12_18.png",v="/blog/assets/Eclipse_12_19.png",C={},V=l('<h1 id="eclipse-git提交项目到本地仓库时报错unable-to-find-a-gpg-key-for-signing-configure-gpg-key-with-committer-em" tabindex="-1"><a class="header-anchor" href="#eclipse-git提交项目到本地仓库时报错unable-to-find-a-gpg-key-for-signing-configure-gpg-key-with-committer-em" aria-hidden="true">#</a> Eclipse git提交项目到本地仓库时报错Unable to find a GPG key for signing . Configure GPG key with committer em...</h1><p>报错信息如图所示<strong>missing signing key</strong>： <img src="'+c+'" alt="" loading="lazy"></p><p>翻译成中文就是： 无法找到用于签名的GPG密钥。使用提交者电子邮件地址配置GPG密钥，设置用户.signingKey或禁用提交签名</p><p><strong>我曾经尝试的解决办法（但未成功）</strong></p><p>window----&gt;Preferences <img src="'+p+'" alt="" loading="lazy"> 于是。。我把这个文 件里的内容都给删除咯。。。祝我好运。。。 <img src="'+_+'" alt="" loading="lazy"> 但是死活搞不定。。。于是我又从垃圾桶里给捡咯回来。。。但是还是没有搞定。。。。我只能暂时放弃。。 <img src="'+m+'" alt="" loading="lazy"></p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>以上问题我一直没有找到原因。。</p><h3 id="最终解决方法-已成功解决bug" tabindex="-1"><a class="header-anchor" href="#最终解决方法-已成功解决bug" aria-hidden="true">#</a> 最终解决方法（已成功解决bug）：</h3><p>File----&gt;Import-----&gt;Git---&gt;Projects from Git--------&gt;Clone URI---&gt;NEXT <img src="'+f+'" alt="" loading="lazy"></p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><img src="'+u+'" alt="" loading="lazy"><strong>下载项目到本地（备注：记得选择路径）</strong><img src="'+b+'" alt="" loading="lazy"></p><p>下面的步骤我还是选择咯第一个<strong>导入现有的eclipse项目</strong>，此截图我勾先错咯 <img src="'+y+'" alt="" loading="lazy"></p><p><img src="'+E+'" alt="" loading="lazy"><img src="'+z+'" alt="" loading="lazy"></p><p>而后项目右键-----&gt;Team----&gt;Commit <img src="'+x+'" alt="" loading="lazy"></p><p><strong>提交本地仓库成功！！！！我的个天！！！！！！！到底发生咯什么！！！我也不知道。。。但我知道在以结果为导向的今天。。我是解决咯这个bug。。但是具体我也回避咯这个问题的本身。。。。</strong></p><p>而后提交到远程仓库 Team-----&gt;Remote-----&gt;push <img src="'+k+'" alt="" loading="lazy"></p><figure><img src="'+G+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="以上就是我遇到这个问题的解决步骤-若有大神有更好的解决方法-求赐教-拜托咯。希望以上对你有所帮助-。。。" tabindex="-1"><a class="header-anchor" href="#以上就是我遇到这个问题的解决步骤-若有大神有更好的解决方法-求赐教-拜托咯。希望以上对你有所帮助-。。。" aria-hidden="true">#</a> 以上就是我遇到这个问题的解决步骤，若有大神有更好的解决方法，求赐教，拜托咯。希望以上对你有所帮助 。。。</h4>',22),I={href:"https://stackoverflow.com/questions/55056182/signing-a-verified-commit-with-eclipse-macos-to-github-gpg",target:"_blank",rel:"noopener noreferrer"},T=s("hr",null,null,-1),B=s("h3",{id:"分割线",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),i(" 分割线")],-1),F=s("hr",null,null,-1),L=s("p",null,[s("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function R(U,X){const t=r("ExternalLinkIcon");return o(),a("div",null,[n(" more "),V,s("p",null,[s("a",I,[i("参考链接"),g(t)])]),T,B,F,L])}const q=e(C,[["render",R],["__file","eclipse12.html.vue"]]);export{q as default};
