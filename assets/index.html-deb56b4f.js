import{_ as s,X as a,Y as l,a1 as g,Z as i,$ as e,a2 as o,a0 as n,F as r}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_33_1.png",d="/blog/assets/Kingdee_33_2.png",u="/blog/assets/Kingdee_33_3.png",p="/blog/assets/Kingdee_33_4.png",_="/blog/assets/Kingdee_33_5.png",b="/blog/assets/Kingdee_33_6.png",f="/blog/assets/Kingdee_33_7.png",m="/blog/assets/Kingdee_33_8.png",q="/blog/assets/Kingdee_33_9.png",v="/blog/assets/Kingdee_33_10.png",h="/blog/assets/Kingdee_33_11.png",y="/blog/assets/Kingdee_33_12.png",x="/blog/assets/Kingdee_33_13.png",k="/blog/assets/Kingdee_33_14.png",K="/blog/assets/Kingdee_33_15.png",z="/blog/assets/Kingdee_33_16.png",P="/blog/assets/Kingdee_33_17.png",S="/blog/assets/Kingdee_33_18.png",w="/blog/assets/Kingdee_33_19.png",E="/blog/assets/Kingdee_33_20.png",T="/blog/assets/Kingdee_33_21.png",J="/blog/assets/Kingdee_33_22.png",N="/blog/assets/Kingdee_33_23.png",A="/blog/assets/Kingdee_33_24.png",C="/blog/assets/Kingdee_33_25.png",M="/blog/assets/Kingdee_33_26.png",D="/blog/assets/Kingdee_33_27.png",I="/blog/assets/Kingdee_33_28.png",W="/blog/assets/Kingdee_33_29.png",V="/blog/assets/Kingdee_33_30.png",Y="/blog/assets/Kingdee_33_31.png",U="/blog/assets/Kingdee_33_32.png",O="/blog/assets/Kingdee_33_33.png",R="/blog/assets/Kingdee_33_34.png",B="/blog/assets/Kingdee_33_35.png",G="/blog/assets/Kingdee_33_36.png",H="/blog/assets/Kingdee_33_37.png",L="/blog/assets/Kingdee_33_38.png",j="/blog/assets/Kingdee_33_39.png",X="/blog/assets/Kingdee_33_40.png",F="/blog/assets/Kingdee_33_41.png",Z="/blog/assets/Kingdee_33_42.png",$="/blog/assets/Kingdee_33_43.png",Q="/blog/assets/Kingdee_33_44.png",ii="/blog/assets/Kingdee_33_45.png",ei="/blog/assets/Kingdee_33_46.png",ti="/blog/assets/Kingdee_33_47.png",oi="/blog/assets/Kingdee_33_48.png",ni="/blog/assets/Kingdee_33_49.png",si="/blog/assets/Kingdee_33_50.png",ai="/blog/assets/Kingdee_33_51.png",li="/blog/assets/Kingdee_33_52.png",gi="/blog/assets/Kingdee_33_53.png",ri="/blog/assets/Kingdee_33_54.png",ci={},di=n('<h1 id="_33-windows如何搭建云苍穹2-0开发环境-md" tabindex="-1"><a class="header-anchor" href="#_33-windows如何搭建云苍穹2-0开发环境-md" aria-hidden="true">#</a> 33-Windows如何搭建云苍穹2.0开发环境？.md</h1><h4 id="安装前准备" tabindex="-1"><a class="header-anchor" href="#安装前准备" aria-hidden="true">#</a> 安装前准备</h4><h5 id="工具整体介绍" tabindex="-1"><a class="header-anchor" href="#工具整体介绍" aria-hidden="true">#</a> 工具整体介绍</h5><p>该轻量级开发工具目前可快速搭建一套完整的苍穹开发运行环境，仅用于开发环境快速搭建 （限制了 3 个用户的限时许可）。包括了基本的开发组件：数据库、文件服务器、Zookeeper、 管理中心（MC）、Eclipse 开发调试环境等。</p><h5 id="安装环境准备" tabindex="-1"><a class="header-anchor" href="#安装环境准备" aria-hidden="true">#</a> 安装环境准备</h5><p>支持操作系统：Windows7 及以上版本</p><p>硬件配置要求：推荐内存不小于 8G</p><p>应用配置要求：本机已经安装好 JDK 1.8</p><h5 id="安装程序准备" tabindex="-1"><a class="header-anchor" href="#安装程序准备" aria-hidden="true">#</a> 安装程序准备</h5>',9),ui=i("li",null,[i("p",null,"总部办公网访问： \\172.18.8.70\\nextpack\\Kingdee_Cloud_Lite\\InstallPack-1.5")],-1),pi={href:"https://pan.kingdee.com/s/MTA5NzI1NSwxMjVl",target:"_blank",rel:"noopener noreferrer"},_i={href:"https://pan.baidu.com/s/1SKShYXvDv07qdiJwJpkllg&shfl=shareset",target:"_blank",rel:"noopener noreferrer"},bi=n('<p>下载 4 个 Disk 的文件全部解压到同一目录后可直接安装</p><h5 id="_2-0-与-1-5-可以共存吗" tabindex="-1"><a class="header-anchor" href="#_2-0-与-1-5-可以共存吗" aria-hidden="true">#</a> 2.0 与 1.5 可以共存吗？</h5><blockquote><p>2.0 与 1.5 版本是可以共存的，但命名不要相同就行，比如1.5命名为 cosmic ，那么2.0版命名为cosmic2即可</p></blockquote><h4 id="安装部署步骤" tabindex="-1"><a class="header-anchor" href="#安装部署步骤" aria-hidden="true">#</a> 安装部署步骤</h4><h5 id="第一步-工具安装" tabindex="-1"><a class="header-anchor" href="#第一步-工具安装" aria-hidden="true">#</a> 第一步：工具安装</h5><p>到%解压后的工具包目录% \\Windows\\Disk1\\InstData\\VM\\下执行 setup.exe ，按工具提 示逐步完成选择安装主目录（所在磁盘空间不小于 10G）、主要组件端口及 JDK 主目录配置即可。</p><blockquote><p>注：如果之前已经安装老版本的轻量级开发入口，为保留原有开发数据请安装在 不同的目录，同时请备份出原有库。待新版本安装完成后将备份库导入到新库去，然 后注册到数据中心即可实现旧开发数据和方案的延续（开发代码请自行备份和迁移）</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>此处更改mysql端口，为防与本地mysql(3306)与1.5版本(3307)冲突，所以此处我更改为3308</p></blockquote><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>上图中的JAVA_HOME路径请参照下图，否则完装完成之后会报错</p></blockquote><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="第二步-初始化配置" tabindex="-1"><a class="header-anchor" href="#第二步-初始化配置" aria-hidden="true">#</a> 第二步：初始化配置</h5><h6 id="启动初始化环境" tabindex="-1"><a class="header-anchor" href="#启动初始化环境" aria-hidden="true">#</a> 启动初始化环境</h6><ul><li>进入安装主目录，按顺序依次执行启动脚本</li></ul><blockquote><p>Mysql 数据库（如果已经启动则跳过）：执行 start-mysql.bat ,启动完成后控制不会输入任何内容，忽略即可。</p></blockquote><blockquote><p>Zookeepper（如果已经启动则跳过）:执行 start-zk.bat</p></blockquote><blockquote><p>文件服务器（如果已经启动则跳过）：执行启动脚本 start-fileserver.bat</p></blockquote><blockquote><p>管理中心(MC) （如果已经启动则跳过）:执行 start-mc.bat</p></blockquote><blockquote><p>启动苍穹服务:执行 start-cosmic.bat</p></blockquote><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+T+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如果没有上述操作则会出现如下的bug，上述操作完成后重启云苍穹</p></blockquote><figure><img src="'+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h6 id="管理员登录" tabindex="-1"><a class="header-anchor" href="#管理员登录" aria-hidden="true">#</a> 管理员登录</h6><p>主目录下用浏览器打开首页文件【金蝶云苍穹.html】进入主页（注意：如果在安装修改了 web 端口则需要手动在浏览器地址栏用修改后的端口访问），初始需要用管理员登录，初始用户和密 码为：administrator/1234567</p><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li>添加开发人员并授功能权限权</li></ol><p>进入应用-基础业务服务-人员-新增，添加一个开发者用户,手机号必录，然后保存即可。</p><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+M+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>同步许可并为开发人员分配许可</li></ol><blockquote><p>首次需要同步许可，如果已经同步过则忽略此步骤。进入应用-基础业务服务-许可管理-许可 分配用户，点击【同步许可】，开发环境会默认给每个分组 3 个用户。</p></blockquote><figure><img src="'+W+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>分配许可：选中功能对应分组，新增后选择对应开发者用户然后再同步许可即可。</p></blockquote><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>当如下图所示才算成功</p></blockquote><figure><img src="'+Y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>为开发者授权</li></ol><blockquote><p>需要在基础服务-权限管理-用户授权中，为开发者授予开发服务云全部权限（如为方便管理也可 同时授予系统云、流程服务云等相关权限）即可</p></blockquote><figure><img src="'+U+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+O+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+R+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+G+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>初次使用需开发商标识</li></ol><p>登录后在系统管理-开发商配置，设置开发商标识。如果已经设置过则可以忽略 注：同一开发团队同一应用最好统一设置同一开发商标识</p><blockquote><p>2.0 进入开发平台会弹出让配置，跟1.5有路径专门配置不一样。</p></blockquote><figure><img src="'+H+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h5 id="第三步-开发工程调试配置" tabindex="-1"><a class="header-anchor" href="#第三步-开发工程调试配置" aria-hidden="true">#</a> 第三步：开发工程调试配置</h5><ol><li>启动 Eclipse 并配置工程空间</li></ol><blockquote><p>进入安装主目录下的 eclipse 目录，启动 eclipse 。 选 择 工 作 空 间 为 % 安装主目 录%\\bos-dev-tool\\debug-service 。</p></blockquote><figure><img src="'+j+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+X+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>配置 Gradle</li></ol><blockquote><p>启动 Eclipse 后进入 Window-Preferences-Gradle，在 Gradle User Home 选择主目录为% 安装主目录%\\gradle-4.8 即可</p></blockquote><figure><img src="'+F+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>引入工程</li></ol><blockquote><p>在工程视图右键 Import-Import-Existing Projects into Workspace 引入已存在的工程即可，工程路径为： %安装主目录% \\bos-dev-tool\\debug-service\\node-debug-mservice</p></blockquote><figure><img src="'+$+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+ii+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+ei+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>启动 Debug 服务</li></ol><blockquote><p>以调试模式启动入口类(kd.bos.debug.mservice.DebugServer)即可。说明：由于端口原因 在开启调试模式前确保运行环境是关闭的，即 start-cosmic.bat 开启的服务已被关闭</p></blockquote><figure><img src="'+ti+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+oi+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如果需要修改本地服务的端口按图示中修改对应服务的 ip 和端口即可。</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.debug.mservice;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第四步-开启应用开发之旅" tabindex="-1"><a class="header-anchor" href="#第四步-开启应用开发之旅" aria-hidden="true">#</a> 第四步：开启应用开发之旅</h5><p>调试启动后打开%安装主目录%\\金蝶云苍穹.html 即可进入调试模式登录入口，用开发者用 户登录即可（用户首次登录默认用户名/密码为：手机号/123456，首次登录后需要手机号激活， 按提示操作即可）。登录成功后，就可以通过应用-开发平台，开启你的第一个应用开发啦！！</p><figure><img src="`+ni+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+si+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+ai+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>出现如下图所示，则可以进行2.0云苍穹开发了。。。。</p></blockquote><figure><img src="'+li+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="扩展知识点" tabindex="-1"><a class="header-anchor" href="#扩展知识点" aria-hidden="true">#</a> 扩展知识点</h4><blockquote><p>若需要卸载云苍穹，请删除本地文件夹后参照如下步骤</p></blockquote><figure><img src="'+gi+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+ri+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',101),fi={href:"https://www.jianshu.com/p/34b636177422",target:"_blank",rel:"noopener noreferrer"},mi=i("p",null,[i("strong",null,[e("以上就是我关于 "),i("em",null,"Windows如何搭建云苍穹2.0开发环境？"),e(" 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。")])],-1),qi=i("hr",null,null,-1),vi=i("p",null,"分割线",-1),hi=i("hr",null,null,-1),yi=i("p",null,[i("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function xi(ki,Ki){const t=r("ExternalLinkIcon");return a(),l("div",null,[g(" more "),di,i("ol",null,[ui,i("li",null,[i("p",null,[e("公网共享路径 1：金蝶云盘，金蝶账号登录 "),i("a",pi,[e("https://pan.kingdee.com/s/MTA5NzI1NSwxMjVl"),o(t)])])]),i("li",null,[i("p",null,[e("公网共享路径 2（备用共享路径，路径 1 下载报错后可选择该路径）：百度网盘链接: "),i("a",_i,[e("https://pan.baidu.com/s/1SKShYXvDv07qdiJwJpkllg&shfl=shareset"),o(t)]),e(" 提取码: 26n1")])])]),bi,i("p",null,[i("a",fi,[e("Windows金蝶云苍穹1.5版本开发环境搭建"),o(t)])]),mi,qi,vi,hi,yi])}const Pi=s(ci,[["render",xi],["__file","index.html.vue"]]);export{Pi as default};
