import{_ as a,X as t,Y as g,a1 as s,Z as i,$ as e,a2 as o,a0 as r,F as l}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_17_1.png",d="/blog/assets/Kingdee_17_2.png",_="/blog/assets/Kingdee_17_3.png",p="/blog/assets/Kingdee_17_4.png",f="/blog/assets/Kingdee_17_5.png",u="/blog/assets/Kingdee_17_6.png",m="/blog/assets/Kingdee_17_7.png",b="/blog/assets/Kingdee_17_8.png",v="/blog/assets/Kingdee_17_9.png",h="/blog/assets/Kingdee_17_10.png",x="/blog/assets/Kingdee_17_11.png",y="/blog/assets/Kingdee_17_12.png",K="/blog/assets/Kingdee_17_13.png",z="/blog/assets/Kingdee_17_14.png",k="/blog/assets/Kingdee_17_15.png",q="/blog/assets/Kingdee_17_16.png",V="/blog/assets/Kingdee_17_17.png",w="/blog/assets/Kingdee_17_18.png",H="/blog/assets/Kingdee_17_19.png",N="/blog/assets/Kingdee_17_20.png",S="/blog/assets/Kingdee_17_21.png",W="/blog/assets/Kingdee_17_22.png",E="/blog/assets/Kingdee_17_23.png",L="/blog/assets/Kingdee_17_24.png",B="/blog/assets/Kingdee_17_25.png",C={},J={id:"_17-金蝶云苍穹helloworld案例-md",tabindex:"-1"},F=i("a",{class:"header-anchor",href:"#_17-金蝶云苍穹helloworld案例-md","aria-hidden":"true"},"#",-1),I={href:"http://xn--17-HelloWorld-do2u57ics1lxv0cpl5aurs3k1c.md",target:"_blank",rel:"noopener noreferrer"},M=r('<h4 id="新建动态表单页面" tabindex="-1"><a class="header-anchor" href="#新建动态表单页面" aria-hidden="true">#</a> 新建动态表单页面</h4><blockquote><p>在确保启动并登录云苍穹成功后，在开发平台中新建云和应用后，点击创建页面按钮，创建动态表单。</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="新建动态脚本插件" tabindex="-1"><a class="header-anchor" href="#新建动态脚本插件" aria-hidden="true">#</a> 新建动态脚本插件</h4><p>可以在页面上点击插件按钮然后进入KDE插件开发平台，也有其他路径进入，详细请参考动态脚本章节。</p><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+H+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>脚本示例</strong></p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>var plugin = new FormPlugin({
    //处理点击事件
    click : function(e){
		var key  = e.getSource().getKey();
        if(&quot;btnok&quot;==key){
        		//获取当前文本框的值
           		var text  = this.getModel().getValue(&quot;textfield&quot;);
                //弹出当前文本框的值
            	this.getView().showMessage(text);
           }
	},
    //给确定按钮增加点击监听
	registerListener : function(e){
		this.addClickListeners(&quot;btnok&quot;);
	},

});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注册动态脚本插件并预览结果" tabindex="-1"><a class="header-anchor" href="#注册动态脚本插件并预览结果" aria-hidden="true">#</a> 注册动态脚本插件并预览结果</h4><p>动态脚本插件开发完后，回到表单页面进行插件注册。</p><figure><img src="`+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+W+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹HelloWorld案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',38);function D(P,T){const n=l("ExternalLinkIcon");return t(),g("div",null,[s(" more "),i("h1",J,[F,e(),i("a",I,[e("17-金蝶云苍穹HelloWorld案例.md"),o(n)])]),M])}const Y=a(C,[["render",D],["__file","17-金蝶云苍穹HelloWorld案例.html.vue"]]);export{Y as default};
