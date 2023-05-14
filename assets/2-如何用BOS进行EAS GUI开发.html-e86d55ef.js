import{_ as a,X as g,Y as n,a1 as o,Z as i,$ as e,a2 as l,a0 as s,F as r}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_2_1.png",p="/blog/assets/Kingdee_2_2.png",_="/blog/assets/Kingdee_2_3.png",u="/blog/assets/Kingdee_2_4.png",d="/blog/assets/Kingdee_2_5.png",f="/blog/assets/Kingdee_2_6.png",b="/blog/assets/Kingdee_2_7.png",m="/blog/assets/Kingdee_2_8.png",S="/blog/assets/Kingdee_2_9.png",h="/blog/assets/Kingdee_2_10.png",x="/blog/assets/Kingdee_2_11.png",y="/blog/assets/Kingdee_2_12.png",z="/blog/assets/Kingdee_2_13.png",K="/blog/assets/Kingdee_2_14.png",E="/blog/assets/Kingdee_2_15.png",k="/blog/assets/Kingdee_2_16.png",A="/blog/assets/Kingdee_2_17.png",B="/blog/assets/Kingdee_2_18.png",q="/blog/assets/Kingdee_2_19.png",I="/blog/assets/Kingdee_2_20.png",O="/blog/assets/Kingdee_2_21.png",G="/blog/assets/Kingdee_2_22.png",U={},N={id:"_2-如何用bos进行eas-gui开发-md",tabindex:"-1"},V=i("a",{class:"header-anchor",href:"#_2-如何用bos进行eas-gui开发-md","aria-hidden":"true"},"#",-1),L={href:"http://xn--GUI-yw3e842c.md",target:"_blank",rel:"noopener noreferrer"},v=s('<h2 id="_2-01如何搭建eas-gui开发环境" tabindex="-1"><a class="header-anchor" href="#_2-01如何搭建eas-gui开发环境" aria-hidden="true">#</a> 2.01如何搭建EAS GUI开发环境</h2><h3 id="一、安装金蝶eas-服务器" tabindex="-1"><a class="header-anchor" href="#一、安装金蝶eas-服务器" aria-hidden="true">#</a> 一、安装金蝶EAS 服务器</h3><ul><li>Step 1：拷贝服务器的安装包到自己的电脑上</li></ul><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>运行安装程序：</li></ul><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 2：制定安装的路径</li></ul><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 3：端口的配置</li></ul><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 4：选择应用服务器，可以选择apusic9.0</li></ul><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 5：等待安装完金蝶EAS 服务器</li></ul><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 6：EAS服务器安装完毕，下一步我们要对EAS服务器进行配置</li></ul><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 7：我们先进行对我们安装的EAS 服务器目录结构，进行了解（百度上提供的图）</li></ul><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 8：进入EAS管理控制台</li></ul><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 9：配置信息，部署应用</li></ul><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step 10：下一步新建数据中心</li></ul><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step11：等待部署应用完成</li></ul><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step12：部署应用完成，提示我们License过期，我们需要重新导入新的License</li></ul><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>到此我们的EAS服务器的配置就已经完成了。</p></blockquote><blockquote><p>小技巧：在过程我们搭配完环境之后，可以利用制作虚拟盘的形式，将我们搭好的环境拷给其他同事。</p></blockquote><h3 id="二、bos开发工具解决方案导入" tabindex="-1"><a class="header-anchor" href="#二、bos开发工具解决方案导入" aria-hidden="true">#</a> 二、BOS开发工具解决方案导入</h3><blockquote><p>这里我们直接使用虚拟盘作为环境的开发的工作空间</p></blockquote><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step1.先打开BOS开发工具，已8.0BOS为例</li></ul><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step2.选择工作空间打开</li></ul><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step3.导入解决方案</li></ul><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>或者直接在业务单元管理界面下面右键选择“导入解决方案”</p></blockquote><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step4.</li></ul><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step5.</li></ul><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step6.填写服务器地址、用户名及口令（密码），点击下一步</li></ul><figure><img src="'+O+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Step7.下一步成功之后，选择服务器上面部署好的账套，点击完成就可以导入解决方案了</li></ul><figure><img src="'+G+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>如何用BOS进行EAS GUI开发</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',54);function C(w,F){const t=r("ExternalLinkIcon");return g(),n("div",null,[o(" more "),i("h1",N,[V,e(" 2-如何用BOS进行EAS "),i("a",L,[e("GUI开发.md"),l(t)])]),v])}const X=a(U,[["render",C],["__file","2-如何用BOS进行EAS GUI开发.html.vue"]]);export{X as default};
