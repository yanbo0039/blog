import{_ as a,X as i,Y as e,a1 as t,a0 as n}from"./framework-68dd73a2.js";const r="/blog/assets/AngularJS_1_1.png",l="/blog/assets/AngularJS_1_2.png",g="/blog/assets/AngularJS_1_3.png",s="/blog/assets/AngularJS_1_4.png",o="/blog/assets/AngularJS_1_5.png",c="/blog/assets/AngularJS_1_6.png",d="/blog/assets/AngularJS_1_7.png",u="/blog/assets/AngularJS_1_8.png",h="/blog/assets/AngularJS_1_9.png",p="/blog/assets/AngularJS_1_10.png",f="/blog/assets/AngularJS_1_11.png",_="/blog/assets/AngularJS_1_12.png",b="/blog/assets/AngularJS_1_13.png",m="/blog/assets/AngularJS_1_14.png",x="/blog/assets/AngularJS_1_15.png",S="/blog/assets/AngularJS_1_16.png",A="/blog/assets/AngularJS_1_17.png",y="/blog/assets/AngularJS_1_18.png",v="/blog/assets/AngularJS_1_19.png",J="/blog/assets/AngularJS_1_20.png",z="/blog/assets/AngularJS_1_21.png",j={},C=n('<h1 id="angularjs入门必学-一" tabindex="-1"><a class="header-anchor" href="#angularjs入门必学-一" aria-hidden="true">#</a> AngularJS入门必学（一）</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h2 id="angularjs介绍" tabindex="-1"><a class="header-anchor" href="#angularjs介绍" aria-hidden="true">#</a> AngularJS介绍：</h2><ul><li><p>AngularJS是一款来自Google的前端JavaScript框架，也是SPA框架。AngularJS框架的体积非常小，</p></li><li><p>但是设计理念和功能却非常强大，极大的简化前端开发的负担，它快速成为咯JavaScript的主流框架，帮助开发者从事web开发。</p></li><li><p>诞生于2009年1.5和4.0为两个重要的版本。Angular4是语义化的版本，将尽可能兼容Aangular</p></li><li><p>2，因为Angular团队不想重蹈从Angular 1.X 到 Angular 2.X 的覆辙。</p></li><li><p>速度更快、体积更小、优化view引擎、精简@angular/core、优化Nglf和NgFor。</p></li></ul><h3 id="接下来的规划" tabindex="-1"><a class="header-anchor" href="#接下来的规划" aria-hidden="true">#</a> 接下来的规划：</h3><h3 id="predictable-transparent-incremental-evolution" tabindex="-1"><a class="header-anchor" href="#predictable-transparent-incremental-evolution" aria-hidden="true">#</a> Predictable,Transparent &amp; Incremental Evolution</h3><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;">Version 4</td><td style="text-align:center;">March 2017</td></tr><tr><td style="text-align:center;">Version 5</td><td style="text-align:center;">September/October 2017</td></tr><tr><td style="text-align:center;">Version 6</td><td style="text-align:center;">March 2018</td></tr><tr><td style="text-align:center;">Version 7</td><td style="text-align:center;">September/October 2018</td></tr></tbody></table><h3 id="学习曲线" tabindex="-1"><a class="header-anchor" href="#学习曲线" aria-hidden="true">#</a> 学习曲线</h3><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="angular-js-核心概念" tabindex="-1"><a class="header-anchor" href="#angular-js-核心概念" aria-hidden="true">#</a> Angular JS 核心概念</h3><h3 id="angular-第一代" tabindex="-1"><a class="header-anchor" href="#angular-第一代" aria-hidden="true">#</a> Angular 第一代</h3><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>JavaScript不可变对象 Angular</li><li>2系统架构中组件是最核心的概念，组件由元数据（Metadata)、组件类（Component) 和模板 （Template) 组成 ，其中：</li></ul><ul><li>1、元数据描述组件的属性</li><li>2、组件类实现组件的功能，可调用依赖注入（Dependent Injection) 的服务（Service)</li><li>3、模板定义组件的神力（View)，其中包括HTML元素（element)、其他组件和/或Directive。</li><li>组件类和模板通过数据绑定关联：通过属性绑定（Perperty Binding)在模板视图中显示属性值，</li><li>用户操作模板视图触发事件通过事件绑定（Event Binding)回调组件的事件处理函数。</li><li>注意：系统架构仅包括Angular 2 核心，可选的路由、HTTP服务未包括在内。</li></ul><h3 id="组件component" tabindex="-1"><a class="header-anchor" href="#组件component" aria-hidden="true">#</a> 组件Component</h3><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>selector : CSS selector,对组件一般是元素名称</li><li>template : 组件视图模板</li><li>providers : 组件级依赖注入的服务列表</li><li>directives : 模板可使用的其他组件和Directive</li><li>模板可使用的 Pipe列表</li><li>本组件使用的CSS样式表。</li></ul><h3 id="组件类class" tabindex="-1"><a class="header-anchor" href="#组件类class" aria-hidden="true">#</a> 组件类Class</h3><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="组件类" tabindex="-1"><a class="header-anchor" href="#组件类" aria-hidden="true">#</a> 组件类</h3><ul><li>@Input声明输入的属性绑定成员字段</li><li>@Output声明输出的事件绑定成员字段</li><li>构造函数通过参数类型CalcService自动注入服务实例，并由TypeScript自动赋值给私有的this.calc成员字段</li><li>在事件绑定的处理函数中,可以调用依赖注入的服务,并更新成员变量值.成员变量值更新后，由Angular 2的变更检测自动更新到视图中</li><li>this.changed.next()向父组件输出事件，事件参数是字符串。</li></ul><h3 id="元数据-metadata" tabindex="-1"><a class="header-anchor" href="#元数据-metadata" aria-hidden="true">#</a> 元数据 Metadata</h3><blockquote><p>元数据告诉Angular 2 如何处理类。如@Component是采用TypeScript标注（decorator)方式表示的组件配置信息。 TypeScript标注是一个函数，将组件配置信息转换为附加在类定义上的元数据，Angular 2在运行时根据元数据创建和显示组件实例。 其他常的元数据包括@Injectable、@Input、@Output、@RouteConfig等</p></blockquote><h3 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h3><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="依赖注入dependency-injection" tabindex="-1"><a class="header-anchor" href="#依赖注入dependency-injection" aria-hidden="true">#</a> 依赖注入Dependency Injection</h3><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="directive" tabindex="-1"><a class="header-anchor" href="#directive" aria-hidden="true">#</a> Directive</h3><blockquote><p>Angular 2模板根据directive指令动态生成DOM。 Directive是使用@Directive标注的类， 分为结构型（structural )和属性型（attribute)。系统预定义的结构型Directive包括ngIf、 ngFor和ngSwitch,属性型Directive包括ngClass、ngStyle等。Directive可以自定义。</p></blockquote><h3 id="服务service" tabindex="-1"><a class="header-anchor" href="#服务service" aria-hidden="true">#</a> 服务Service</h3><blockquote><p>Angular 2对服务没有特殊定义；一般地，任何独立的功能均可定义为服务。 服务主要被组件调用，组件通过依赖注入使用服务。一个定义良好的组件一般地仅处理输入属性和事件回调， 其他功能均可封装为服务。</p></blockquote><h3 id="其他需要储备的部分技术栈" tabindex="-1"><a class="header-anchor" href="#其他需要储备的部分技术栈" aria-hidden="true">#</a> 其他需要储备的部分技术栈</h3><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点：</h3><ul><li>趋近于Webcompents</li><li>模版功能丰富</li><li>比较完善的前端MVC框架</li><li>引入Java中大师的优秀概念</li><li>全新的命令行工具 Angular-CLI</li><li>完美实现MVC、模块化、自动化双向数据绑定、语义化标签、依赖注入等等。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点：</h3><ul><li>双向数据绑定，任何操作都会造成scope脏检查的机制。</li></ul><blockquote><p>默认的绑定方式为单向绑定，每个组件的背后都维护着一个独立的变化监听器。 当Zones捕获到异步常，都会通过Angular执行变化操作。每次检测都始于根组件， 并已深度优先的员向叶子组件遍历执行（组件均已树的形式组织）。</p></blockquote><ul><li>Angular1对移动端超级不友好</li><li>第三方模块对路由的支持并不友好</li><li>$scope观察机制，隔离浏览器原生模块，并用流的形式</li><li>响应式表单以及JS的强类型语言</li></ul><h3 id="对比react" tabindex="-1"><a class="header-anchor" href="#对比react" aria-hidden="true">#</a> 对比React</h3><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="对比-vue" tabindex="-1"><a class="header-anchor" href="#对比-vue" aria-hidden="true">#</a> 对比 Vue</h3><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="综合" tabindex="-1"><a class="header-anchor" href="#综合" aria-hidden="true">#</a> 综合</h3><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="angularjs-hello-world" tabindex="-1"><a class="header-anchor" href="#angularjs-hello-world" aria-hidden="true">#</a> AngularJS Hello World</h3><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>AngularJS入门必学（一）</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',61);function D(k,V){return i(),e("div",null,[t(" more "),C])}const I=a(j,[["render",D],["__file","angularjs1.html.vue"]]);export{I as default};