import{_ as s,X as a,Y as r,a1 as l,Z as e,$ as t,a2 as o,a0 as n,F as c}from"./framework-68dd73a2.js";const d="/blog/assets/Kingdee_15_1.png",g="/blog/assets/Kingdee_15_2.png",u="/blog/assets/Kingdee_15_3.png",p="/blog/assets/Kingdee_15_4.png",b="/blog/assets/Kingdee_15_5.png",m="/blog/assets/Kingdee_15_6.png",_="/blog/assets/Kingdee_15_7.png",f="/blog/assets/Kingdee_15_8.png",q="/blog/assets/Kingdee_15_9.png",v="/blog/assets/Kingdee_15_10.png",h="/blog/assets/Kingdee_15_11.png",y="/blog/assets/Kingdee_15_12.png",k="/blog/assets/Kingdee_15_13.png",x="/blog/assets/Kingdee_15_14.png",P="/blog/assets/Kingdee_15_15.png",S="/blog/assets/Kingdee_15_16.png",K="/blog/assets/Kingdee_15_17.png",z="/blog/assets/Kingdee_15_18.png",w="/blog/assets/Kingdee_15_19.png",E="/blog/assets/Kingdee_15_20.png",T="/blog/assets/Kingdee_15_21.png",N="/blog/assets/Kingdee_15_22.png",A="/blog/assets/Kingdee_15_23.png",C="/blog/assets/Kingdee_15_24.png",I="/blog/assets/Kingdee_15_25.png",M="/blog/assets/Kingdee_15_26.png",W="/blog/assets/Kingdee_15_27.png",j="/blog/assets/Kingdee_15_28.png",J="/blog/assets/Kingdee_15_29.png",U="/blog/assets/Kingdee_15_30.png",V="/blog/assets/Kingdee_15_31.png",O={},R={id:"_15-windows金蝶云苍穹开发环境搭建-md",tabindex:"-1"},Y=e("a",{class:"header-anchor",href:"#_15-windows金蝶云苍穹开发环境搭建-md","aria-hidden":"true"},"#",-1),B={href:"http://xn--15-Windows-kq3p671cqmo9kvrcr92iii4d0szamc7axqtuw3c.md",target:"_blank",rel:"noopener noreferrer"},H=n('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="工具整体介绍" tabindex="-1"><a class="header-anchor" href="#工具整体介绍" aria-hidden="true">#</a> 工具整体介绍</h4><p>该轻量级开发工具目前可快速搭建一套完整的苍穹开发运行环境，仅用于开发环境快速搭建（限制了3个用户的限时许可）。包括了基本的开发组件：数据库、文件服务器、Zookeeper、管理中心（MC）、Eclipse开发调试环境等。</p><h4 id="安装环境准备" tabindex="-1"><a class="header-anchor" href="#安装环境准备" aria-hidden="true">#</a> 安装环境准备</h4><p><strong>支持操作系统：</strong> Windows7及以上版本</p><p><strong>硬件配置要求：</strong> 推荐内存不小于8G</p><p><strong>应用配置要求：</strong> 本机已经安装好JDK 1.8且配置了JAVA_HOME环境变量</p><h4 id="安装装准备" tabindex="-1"><a class="header-anchor" href="#安装装准备" aria-hidden="true">#</a> 安装装准备</h4><p>三种方式</p><ol><li>总部办公网访问： \\172.18.8.70\\nextpack\\Kingdee_Cloud_Lite\\InstallPack-1.5</li></ol><blockquote><p>这个我是不满足</p></blockquote>',11),G={start:"2"},L={href:"https://pan.kingdee.com/s/MTA5NzI1NSwxMjVl",target:"_blank",rel:"noopener noreferrer"},D=e("blockquote",null,[e("p",null,"如图所示，我也不满足")],-1),F=e("figure",null,[e("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),Z=e("ol",{start:"3"},[e("li",null,"伙伴申请环境的流程：先在生态门户注册成为伙伴，审核通过后联系伙伴管理员申请环境！")],-1),X=e("figure",null,[e("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),$=e("p",null,"点击则会跳到如下链接",-1),Q={href:"https://dev.kdcloud.com/index/joinPartner?id=149026cf-1c86-4ea7-864c-78a6b1f754f6",target:"_blank",rel:"noopener noreferrer"},ee=n('<figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>用第三种方式下载会得到四个压缩包，如下图所示</p></blockquote><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>将其同时解压</p></blockquote><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在此之前需确认</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 需安装软件
① jdk:1.8
② 数据库操作工具软件，推荐 Navicat
注意：jdk 版本必须是 1.8，小版本号不做要求！

2 待确认事项
① 确认以下端口没有被占用
3306、2181、8100、8090、8080
注意：如本机已安装过 mysql，请先停止 mysql 服务！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装与部署步骤" tabindex="-1"><a class="header-anchor" href="#安装与部署步骤" aria-hidden="true">#</a> 安装与部署步骤</h4><h5 id="第一步-工具安装" tabindex="-1"><a class="header-anchor" href="#第一步-工具安装" aria-hidden="true">#</a> 第一步：工具安装</h5><blockquote><p>点击第一个disk文件夹，找到exe文件双击运行</p></blockquote><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>备注：安装步骤省略，有的人安装环境特别顺利，而有的人却十分不顺，我就属于后者，遗憾的是我当时没有做记录……最后祝好运。</p></blockquote><p>安装完成后会得到这样一个文件夹这样的目录</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="第二步-初始化配置" tabindex="-1"><a class="header-anchor" href="#第二步-初始化配置" aria-hidden="true">#</a> 第二步：初始化配置</h5><p><strong>启动初始化环境</strong></p><p>进入安装主目录，按顺序依次执行启动脚本：</p><p>Mysql数据库（如果已经启动则跳过）：执行start-mysql.bat ,启动完成后控制不会输入任何内容，忽略即可。</p><p>Zookeepper（如果已经启动则跳过）:执行start-zk.bat</p><p>文件服务器（如果已经启动则跳过）：执行启动脚本start-fileserver.bat</p><p>管理中心(MC) （如果已经启动则跳过）:执行start-mc.bat</p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>注: 我的常规操作是直接双击<strong>start-all.bat</strong></p></blockquote><p><strong>数据库服务IP调整（如有必要）</strong></p><p>目前默认数据库连接地址设置的是本机的实际IP（团队开发需要开放数据库服务），如果仅仅是本机开发且本机的IP可能会动态变化请将数据库连接地址调整为本机回环地址。</p>',25),te={href:"http://127.0.0.1:8090",target:"_blank",rel:"noopener noreferrer"},ie=n('<p>或</p><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>启动苍穹服务:执行start-cosmic.bat</strong></p><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>管理员登录</strong></p><blockquote><p>主目录下用浏览器打开首页文件【金蝶云苍穹.html】进入主页（注意：如果在安装修改了web端口则需要手动在浏览器地址栏用修改后的端口访问），初始需要用管理员登录，初始用户和密码为：administrator/1234567</p></blockquote><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>添加开发人员并授功能权限权</strong></p><blockquote><p>进入应用-基础业务服务-人员-新增，添加一个开发者用户,手机号必录，然后保存即可。</p></blockquote><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>同步许可并为开发人员分配许可</strong></p><blockquote><p>首次需要同步许可，如果已经同步过则忽略此步骤。进入应用-基础业务服务-许可管理-许可分配用户，点击【同步许可】，开发环境会默认给每个分组3个用户。</p></blockquote><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>分配许可：选中功能对应分组，新增后选择对应开发者用户然后再同步许可即可。</p></blockquote><figure><img src="'+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>为开发者授权</strong></p><blockquote><p>需要在基础服务-权限管理-用户授权中，为开发者授予开发服务云全部权限（如为方便管理也可同时授予系统云、流程服务云等相关权限）即可</p></blockquote><p><strong>初次使用需开发商标识</strong></p><blockquote><p>登录后在系统管理-开发商配置，设置开发商标识。如果已经设置过则可以忽略 注：同一开发团队同一应用最好统一设置同一开发商标识</p></blockquote><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="第三步-开发工程调试配置" tabindex="-1"><a class="header-anchor" href="#第三步-开发工程调试配置" aria-hidden="true">#</a> 第三步：开发工程调试配置</h5><p><strong>启动Eclipse并配置工程空间</strong></p><blockquote><p>进入安装主目录下的eclipse目录，启动eclipse。选择工作空间为%安装主目录%\\bos-dev-tool\\debug-service 。</p></blockquote><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>配置Gradle</strong></p><blockquote><p>启动Eclipse后进入Window-Preferences-Gradle，在Gradle User Home 选择主目录为%安装主目录%\\gradle-4.8 即可</p></blockquote><figure><img src="'+M+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+W+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>引入工程</strong></p><blockquote><p>在工程视图右键Import-Import-Existing Projects into Workspace引入已存在的工程即可，工程路径为： %安装主目录% \\bos-dev-tool\\debug-service\\node-debug-mservice</p></blockquote><figure><img src="'+j+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+U+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>启动Debug服务</strong></p><blockquote><p>以调试模式启动入口类(kd.bos.debug.mservice.DebugServer)即可。</p></blockquote><blockquote><p>说明：由于端口原因在开启调试模式前确保运行环境是关闭的，即start-cosmic.bat 开启的服务已被关闭</p></blockquote><figure><img src="'+V+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如果需要修改本地服务的端口按图示中修改对应服务的ip和端口即可。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package kd.bos.debug.mservice;

import kd.bos.config.client.util.ConfigUtils;
import kd.bos.service.webserver.JettyServer;

public class DebugServer {

	public static void main(String[] args) throws Exception 
	{
		System.setProperty(ConfigUtils.APP_NAME_KEY, &quot;mservice-biz1.5-cosmic&quot;);//APP的名字，标识和区别启动应用的名称，一般不需要修改

		//设置集群环境名称和配置服务器地址
		System.setProperty(ConfigUtils.CLUSTER_NAME_KEY, &quot;cosmic&quot;);//集群编码，可在web中查询，默认不需要修改
		System.setProperty(ConfigUtils.CONFIG_URL_KEY, &quot;127.0.0.1:2181&quot;);//地址与端口，一 般不需要修改，需要修改时间在mc的集群配置中查询
	    System.setProperty(&quot;configAppName&quot;, &quot;mservice,web&quot;);
	    System.setProperty(&quot;webmserviceinone&quot;, &quot;true&quot;);

		System.setProperty(&quot;file.encoding&quot;, &quot;utf-8&quot;);
	    System.setProperty(&quot;xdb.enable&quot;, &quot;false&quot;);
		
		System.setProperty(&quot;mq.consumer.register&quot;, &quot;true&quot;);
	    System.setProperty(&quot;MONITOR_HTTP_PORT&quot;, &quot;9998&quot;);
	    System.setProperty(&quot;JMX_HTTP_PORT&quot;, &quot;9091&quot;);
	    System.setProperty(&quot;dubbo.protocol.port&quot;, &quot;28888&quot;);
	    System.setProperty(&quot;dubbo.consumer.url&quot;, &quot;dubbo://localhost:28888&quot;);
	    System.setProperty(&quot;dubbo.consumer.url.qing&quot;, &quot;dubbo://localhost:30880&quot;);
	    System.setProperty(&quot;dubbo.registry.register&quot;, &quot;false&quot;);
		//System.setProperty(&quot;mq.debug.queue.tag&quot;, &quot;whb1133&quot;);
		System.setProperty(&quot;dubbo.service.lookup.local&quot;, &quot;false&quot;);
	    System.setProperty(&quot;appSplit&quot;, &quot;false&quot;);

	    System.setProperty(&quot;lightweightdeploy&quot;,&quot;true&quot;);
		
		System.setProperty(&quot;db.sql.out&quot;, &quot;false&quot;);

		System.setProperty(&quot;JETTY_WEB_PORT&quot;,&quot;8080&quot;);//启动服务的web端口，一般不需要修改
		System.setProperty(&quot;JETTY_WEBAPP_PATH&quot;, &quot;../../../mservice-cosmic/webapp&quot;);
		System.setProperty(&quot;JETTY_WEBRES_PATH&quot;, &quot;../../../static-file-service&quot;);
		System.setProperty(&quot;ActionConfigFile&quot;, &quot;../../../mservice-cosmic/conf/actionconfig.xml&quot;);

		System.setProperty(&quot;domain.contextUrl&quot;,&quot;http://localhost:8080/ierp&quot;);//上下文地址，一般不需要修改同web端口保持一致
	    System.setProperty(&quot;domain.tenantCode&quot;,&quot;cosmic-simple&quot;);
	    System.setProperty(&quot;tenant.code.type&quot;,&quot;config&quot;);
		
		System.setProperty(&quot;mc.server.url&quot;,&quot;http://127.0.0.1:8090/&quot;);//web服务的ip和端口，默认不需要修改
		JettyServer.main(null);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第四步-开启应用开发之旅" tabindex="-1"><a class="header-anchor" href="#第四步-开启应用开发之旅" aria-hidden="true">#</a> 第四步：开启应用开发之旅</h5><blockquote><p>调试启动后打开%安装主目录%\\金蝶云苍穹.html即可进入调试模式登录入口，用开发者用户登录即可（用户首次登录默认用户名/密码为：手机号/123456，首次登录后需要手机号激活，按提示操作即可）。登录成功后，就可以通过应用-开发平台，开启你的第一个应用开发啦！！</p></blockquote><h4 id="拓展知识点" tabindex="-1"><a class="header-anchor" href="#拓展知识点" aria-hidden="true">#</a> 拓展知识点</h4>`,51),oe={href:"https://www.jianshu.com/p/6fa798bdbe33",target:"_blank",rel:"noopener noreferrer"},ne=e("p",null,[e("strong",null,[t("以上就是我关于 "),e("em",null,"Windows金蝶云苍穹1.5版本开发环境搭建"),t(" 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。")])],-1),se=e("hr",null,null,-1),ae=e("p",null,"分割线",-1),re=e("hr",null,null,-1),le=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function ce(de,ge){const i=c("ExternalLinkIcon");return a(),r("div",null,[l(" more "),e("h1",R,[Y,t(),e("a",B,[t("15-Windows金蝶云苍穹开发环境搭建.md"),o(i)])]),H,e("ol",G,[e("li",null,[t("公网共享路径1：金蝶云盘，金蝶账号(目前暂只支持金蝶国际工作圈)登录 "),e("a",L,[t("https://pan.kingdee.com/s/MTA5NzI1NSwxMjVl"),o(i)])])]),D,F,Z,X,$,e("p",null,[e("a",Q,[t("https://dev.kdcloud.com/index/joinPartner?id=149026cf-1c86-4ea7-864c-78a6b1f754f6"),o(i)])]),ee,e("blockquote",null,[e("p",null,[t("方法：登录管理中心（"),e("a",te,[t("http://127.0.0.1:8090"),o(i)]),t(" 如果端口变化过请换成实际端口 admin/Kdadmin001 ），在组件管理-数据库管理，将数据库地址改成127.0.0.1，保存。然后在集群中选中对应集群-发布即可。")])]),ie,e("p",null,[e("a",oe,[t("Windows如何搭建云苍穹2.0开发环境？"),o(i)])]),ne,se,ae,re,le])}const pe=s(O,[["render",ce],["__file","kingdee15.html.vue"]]);export{pe as default};
