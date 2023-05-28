import{_ as l,X as n,Y as t,a1 as d,Z as i,$ as e,a2 as s,a0 as r,F as p}from"./framework-68dd73a2.js";const o="/blog/assets/Kingdee_12_1.png",c="/blog/assets/Kingdee_12_2.png",u="/blog/assets/Kingdee_12_3.png",g="/blog/assets/Kingdee_12_4.png",m="/blog/assets/Kingdee_12_5.png",h="/blog/assets/Kingdee_12_6.png",v="/blog/assets/Kingdee_12_7.png",b="/blog/assets/Kingdee_12_8.png",f="/blog/assets/Kingdee_12_9.png",_="/blog/assets/Kingdee_12_10.png",x="/blog/assets/Kingdee_12_11.png",y="/blog/assets/Kingdee_12_12.png",k="/blog/assets/Kingdee_12_13.png",K={},C={id:"_12-金蝶云苍穹自定义控件开发-md",tabindex:"-1"},j=i("a",{class:"header-anchor",href:"#_12-金蝶云苍穹自定义控件开发-md","aria-hidden":"true"},"#",-1),S={href:"http://xn--12--498dxmhu35yq9p1ghiqm8i7dfxsjucfvyeu0b.md",target:"_blank",rel:"noopener noreferrer"},D=r('<h4 id="什么是自定义控件" tabindex="-1"><a class="header-anchor" href="#什么是自定义控件" aria-hidden="true">#</a> 什么是自定义控件？</h4><blockquote><p>自定义控件，顾名思义即是开发者可以自己开发业务组件。苍穹本身提供比较丰 富的通用控件，业务控件。特殊业务场景下，系统提供的控件无法满足需求，例如需要 使用甘特图，时间轴等系统内本身没有的组件，此时通过自定义控件，按照苍穹自定义 控件的标准封装，即可把这些组件引入到系统中。自定义控件也有特定的JAVA插件事 件，在表单插件中可以轻松获取到自定义控件的数据或者往自定义控件中传入值。</p></blockquote><h4 id="自定义控件的封装" tabindex="-1"><a class="header-anchor" href="#自定义控件的封装" aria-hidden="true">#</a> 自定义控件的封装</h4><p>一个完整的自定义控件目录：</p><ul><li><p>css 存放自定义控件的样式</p></li><li><p>html存放自定义控件的html片段</p></li><li><p>js 存放自定义控件的js文件</p></li><li><p>index.js 为自定义控件的主要文件</p></li></ul><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="index-js方法" tabindex="-1"><a class="header-anchor" href="#index-js方法" aria-hidden="true">#</a> index.js方法</h4><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>(function(KDApi, $) {
    function MyComponent(model) {
        this._setModel(model);
    }

    MyComponent.prototype = {
        _setModel: function(model) {
            this.model = model;
        },
        init: function(props) {
            console.log(&#39;-----init&#39;, this.model, props);
        },
        update: function(props) {
            console.log(&#39;-----update&#39;, this.model, props)
        },
        destoryed: function() {
            console.log(&#39;-----destoryed&#39;, this.model)
        }
    }
    KDApi.register(&#39;avatar_map&#39;, MyComponent)
})(window.KDApi, jQuery);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h4><ul><li><p>init() 控件初始化触发，只调用一次,常用于控件渲染，资源文件加载</p></li><li><p>update() 后台插件设置控件值变化时触发，用以更新控件</p></li><li><p>destoryed() 控件销毁，只调用一次</p></li></ul><h4 id="index-js-参数详解" tabindex="-1"><a class="header-anchor" href="#index-js-参数详解" aria-hidden="true">#</a> index.js 参数详解</h4><p>控件参数:</p><ol><li>model</li></ol><p>模型对象，自定义控件默认提供，值不能修改，其中包含以下内容 :</p><ul><li><p>pageId 页面标识</p></li><li><p>key 控件标识</p></li><li><p>dom 自定义控件挂载的dom元素对象</p></li><li><p>schemaId 方案id</p></li><li><p>isvId 开发商标识</p></li><li><p>moduleId 领域标识</p></li><li><p>invoke 函数，将自定义控件事件发送给平台后端，接收两个参数:</p></li><li><p>eventName 执行事件名称，</p></li><li><p>eventArgs(String|Object) 执行事件所需参数，推荐使用字符串</p></li></ul><ol start="2"><li>prop</li></ol><p>自定义控件数据对象，其中包含以下内容：</p><ul><li><p>themeColor 主题色</p></li><li><p>lock 是否锁定</p></li><li><p>data 数据对象，插件中setData接口设置的数据</p></li><li><p>configItems 控件配置项</p></li><li><p>cardRowData 卡片行数据</p></li></ul><h5 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h5><p>init为自定义控件的初始化事件，常用于对控件渲染，状态的设置</p><ul><li>在init事件中可调用框架方法加载html，css，js等资源文件， 加载完毕后即可按照第三方组件的规范创建控件</li></ul><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h5><p>update事件，自定义控件接收到服务端的数据触 发此事件</p><ul><li>在后台插件中调用：</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>CustomControl control = this.getControl(&quot;customcontrolap&quot;); control.setData(&quot;xxxxxx&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即会触发自定义控件的update事件</p><p><strong>参数 prop</strong></p><p>自定义控件数据对象，其中包含以下内容：</p><ul><li><p>themeColor 主题色</p></li><li><p>lock 是否锁定</p></li><li><p>data 数据对象，插件中setData接口设置的数据</p></li><li><p>configItems 控件配置项</p></li><li><p>cardRowData 卡片行数据</p></li></ul><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="destory" tabindex="-1"><a class="header-anchor" href="#destory" aria-hidden="true">#</a> destory</h5><ul><li>自定义控件销毁事件 控件被销毁时会调用，一般不需要做什么操作</li></ul><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="kdapi-loadfile-path-model-callback" tabindex="-1"><a class="header-anchor" href="#kdapi-loadfile-path-model-callback" aria-hidden="true">#</a> KDApi.loadFile（path,model,callBack）</h5><p>将js、css文件加载到苍穹前端，参数：</p><ul><li><p>filePaths: String|Array ，模版文件路径，可以是单个文件，也可 以是多个文件路径数组，必填，文件路径为相对路径</p></li><li><p>model: Object 组件的model对象，必填</p></li><li><p>callback: Function 回调函数，文件加载完成后进入回调，必填</p></li></ul><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="kdapi-templatefilepath-path-model-callback" tabindex="-1"><a class="header-anchor" href="#kdapi-templatefilepath-path-model-callback" aria-hidden="true">#</a> KDApi.templateFilePath（path,model,callBack）</h5><p>通过文件路径加载HTML片段：</p><ul><li><p>filePath: String 模版文件路径，文件路径为相对路径，必填 +</p></li><li><p>Mod78 el: Object 组件的model对象，必填</p></li><li><p>data: Object 模版所需数据对象，必填</p></li></ul><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="kdapi-template-tpl-data" tabindex="-1"><a class="header-anchor" href="#kdapi-template-tpl-data" aria-hidden="true">#</a> KDApi. template（tpl,data）</h5><p>通过传入字符串加载HTML片段：</p><ul><li><p>tpl: String 模版的html片段，必填</p></li><li><p>data:模版所需数据对象，必须。例如资源文件 的地址</p></li></ul><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="kdapi-getnamespace-model" tabindex="-1"><a class="header-anchor" href="#kdapi-getnamespace-model" aria-hidden="true">#</a> KDApi. getNameSpace（model）</h5><p>获取当前服务的路径前缀： 常用来加载添加拼接图片地址</p><ul><li>Model :object ，组件的对象，必填</li></ul><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="kdapi-register-type-ctrl" tabindex="-1"><a class="header-anchor" href="#kdapi-register-type-ctrl" aria-hidden="true">#</a> KDApi.register(type , ctrl)</h5><p>将自定义控件注册到苍穹平台中，所有自定义控件 都需调用，接收两个参数</p><ul><li><p>type: String 组件标识，必须，值与方案ID相同</p></li><li><p>ctrl: Object 组件对象，必须，需包含init方法的组件对象</p></li></ul><figure><img src="'+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="服务端控件编程模型" tabindex="-1"><a class="header-anchor" href="#服务端控件编程模型" aria-hidden="true">#</a> 服务端控件编程模型</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@KSObject
@DataEntityTypeAttribute(name = &quot;kd.bos.ext.form.control.CustomControl&quot;)
public class CustomControl extends Control {
    @KSMethod
    public String getData() {
        IClientViewProxy proxy = (IClientViewProxy) this.view.getService(IClientViewProxy.class);

        return (String) proxy.getViewState(this.getKey());
    }

    @KSMethod
    public void setData(Object data) {
        IClientViewProxy proxy = (IClientViewProxy) this.view.getService(IClientViewProxy.class);
        proxy.setFieldProperty(this.getKey(), &quot;v&quot;, data);
        proxy.postBack(this.getKey(), data);
    }

    @KSMethod
    public void setConfigItems(List&lt;Map&lt;String, String&gt;&gt; items) {
        if ((items != null) &amp;&amp; (items.size() &gt; 0)) {
            IClientViewProxy proxy = (IClientViewProxy) this.view.getService(IClientViewProxy.class);
            proxy.setFieldProperty(this.getKey(), &quot;ci&quot;, items);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义控件的后台编程模型，提供以下方法：</p><ul><li><p>getData: 返回自定义控件当前的值</p></li><li><p>setData: 设置自定义控件的值,将触发前端的update方法</p></li><li><p>setConfigItems：设置自定义插件的配置</p></li></ul><h4 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用？</h4><p>自定义控件可放置在以下容器：</p><ul><li><p>页面容器</p></li><li><p>Flex面板</p></li><li><p>高级面板</p></li><li><p>分割容器</p></li><li><p>页签控件</p></li></ul><p>使用步骤：</p><ol><li><p>将自定义控件拖拽到合适的容器</p></li><li><p>点击控件方案属性，选择控件方案后返回数据</p></li></ol><figure><img src="`+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用步骤：</p><ol><li><p>选择方案时可点击新增方案</p></li><li><p>方案id必须和自定义控件index.js中 KDApi.register(&#39;avatar_xxx&#39;, MyComponent)注册的id一致，否则无法加载</p></li><li><p>领域ID填写相关领域即可，例如hr,fi，注意：填写后 即保存会在静态资源文件下创建同名文件夹</p></li><li><p>开发商标示自动根据当前开发商填写 tips：点击开发文档超链接，可下载自定义控件开发指南</p></li></ol><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="实操" tabindex="-1"><a class="header-anchor" href="#实操" aria-hidden="true">#</a> 实操</h4><p><strong>以上就是我关于 <em>金蝶云苍穹自定义控件开发</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',75);function I(w,V){const a=p("ExternalLinkIcon");return n(),t("div",null,[d(" more "),i("h1",C,[j,e(),i("a",S,[e("12-金蝶云苍穹自定义控件开发.md"),s(a)])]),D])}const z=l(K,[["render",I],["__file","kingdee12.html.vue"]]);export{z as default};
