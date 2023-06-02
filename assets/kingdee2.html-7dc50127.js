import{_ as a,X as n,Y as g,a1 as l,Z as i,$ as e,a2 as o,a0 as s,F as r}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_2_1.png",p="/blog/assets/Kingdee_2_2.png",_="/blog/assets/Kingdee_2_3.png",d="/blog/assets/Kingdee_2_4.png",u="/blog/assets/Kingdee_2_5.png",f="/blog/assets/Kingdee_2_6.png",b="/blog/assets/Kingdee_2_7.png",m="/blog/assets/Kingdee_2_8.png",h="/blog/assets/Kingdee_2_9.png",S="/blog/assets/Kingdee_2_10.png",x="/blog/assets/Kingdee_2_11.png",y="/blog/assets/Kingdee_2_12.png",z="/blog/assets/Kingdee_2_13.png",K="/blog/assets/Kingdee_2_14.png",k="/blog/assets/Kingdee_2_15.png",E="/blog/assets/Kingdee_2_16.png",A="/blog/assets/Kingdee_2_17.png",q="/blog/assets/Kingdee_2_18.png",B="/blog/assets/Kingdee_2_19.png",v="/blog/assets/Kingdee_2_20.png",I="/blog/assets/Kingdee_2_21.png",N="/blog/assets/Kingdee_2_22.png",O={},V={id:"_2-如何用bos进行eas-gui开发-md",tabindex:"-1"},G=i("a",{class:"header-anchor",href:"#_2-如何用bos进行eas-gui开发-md","aria-hidden":"true"},"#",-1),L={href:"http://xn--GUI-yw3e842c.md",target:"_blank",rel:"noopener noreferrer"},U=s('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h2 id="_2-01如何搭建eas-gui开发环境" tabindex="-1"><a class="header-anchor" href="#_2-01如何搭建eas-gui开发环境" aria-hidden="true">#</a> 2.01如何搭建EAS GUI开发环境</h2><h3 id="一、安装金蝶eas-服务器" tabindex="-1"><a class="header-anchor" href="#一、安装金蝶eas-服务器" aria-hidden="true">#</a> 一、安装金蝶EAS 服务器</h3><ul><li>Step 1：拷贝服务器的安装包到自己的电脑上</li></ul><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>运行安装程序：</li></ul><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 2：制定安装的路径</li></ul><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 3：端口的配置</li></ul><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 4：选择应用服务器，可以选择apusic9.0</li></ul><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 5：等待安装完金蝶EAS 服务器</li></ul><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 6：EAS服务器安装完毕，下一步我们要对EAS服务器进行配置</li></ul><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 7：我们先进行对我们安装的EAS 服务器目录结构，进行了解（百度上提供的图）</li></ul><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 8：进入EAS管理控制台</li></ul><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 9：配置信息，部署应用</li></ul><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 10：下一步新建数据中心</li></ul><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step11：等待部署应用完成</li></ul><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step12：部署应用完成，提示我们License过期，我们需要重新导入新的License</li></ul><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>到此我们的EAS服务器的配置就已经完成了。</p></blockquote><blockquote><p>小技巧：在过程我们搭配完环境之后，可以利用制作虚拟盘的形式，将我们搭好的环境拷给其他同事。</p></blockquote><h3 id="二、bos开发工具解决方案导入" tabindex="-1"><a class="header-anchor" href="#二、bos开发工具解决方案导入" aria-hidden="true">#</a> 二、BOS开发工具解决方案导入</h3><blockquote><p>这里我们直接使用虚拟盘作为环境的开发的工作空间</p></blockquote><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step1.先打开BOS开发工具，已8.0BOS为例</li></ul><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step2.选择工作空间打开</li></ul><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step3.导入解决方案</li></ul><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>或者直接在业务单元管理界面下面右键选择“导入解决方案”</p></blockquote><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step4.</li></ul><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step5.</li></ul><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step6.填写服务器地址、用户名及口令（密码），点击下一步</li></ul><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step7.下一步成功之后，选择服务器上面部署好的账套，点击完成就可以导入解决方案了</li></ul><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>如何用BOS进行EAS GUI开发</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',54);function w(C,F){const t=r("ExternalLinkIcon");return n(),g("div",null,[l(" more "),i("h1",V,[G,e(" 2-如何用BOS进行EAS "),i("a",L,[e("GUI开发.md"),o(t)])]),U])}const X=a(O,[["render",w],["__file","kingdee2.html.vue"]]);export{X as default};
