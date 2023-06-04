import{_ as a,X as s,Y as o,a1 as r,Z as e,$ as t,a2 as l,a0 as n,F as d}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_16_1.png",u={},g={id:"_16-金蝶云苍穹基本操作及常见问题总结-md",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_16-金蝶云苍穹基本操作及常见问题总结-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--16--dj9d99ao3pm6hlonpmeg9n0qg938d82l7qni5qvuihw9a4qpi3l.md",target:"_blank",rel:"noopener noreferrer"},v=n('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li>新增用户</li></ol><blockquote><p>苍穹 2.0 轻量级开发环境，新增用户操作步骤：</p></blockquote><ul><li><p>以超级管理员 administrator 进入系统，打开应用–&gt;系统云–&gt;基础服务–&gt;人员管理–&gt;人员–&gt;新增，然后保存即可；</p></li><li><p>为该用户分配许可；</p></li><li><p>退出系统，在登录页输入新增加的用户的手机号码，密码默认为 123456，然后输入图形验证码完成修改密码操作。</p></li></ul><blockquote><p>注意：第一次登陆系统必须以手机号码登陆，并进行修改密码操作，后续可用手 机号码/用户名进行登录。</p></blockquote><ol start="2"><li>分配许可/license</li></ol><blockquote><p>苍穹 2.0 轻量级开发环境，分配许可操作步骤：</p></blockquote><ul><li><p>以超级管理员 administrator 进入系统，打开应用–&gt;系统云–&gt;基础服务–&gt;许可管理–&gt;许可分配用户，点击“同步许可”；</p></li><li><p>选中分组，点击“新增”并选择相应人员，在列表中选中新添加的人员点击“同步许可”。</p></li></ul><blockquote><p>注意：同步许可时报如图所示错误，忽略即可。</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>添加全功能用户</li></ol><ul><li>苍穹 2.0 轻量级开发环境，添加全功能用户操作步骤：以超级管理员 administrator进入系统，</li><li>打开应用–&gt;系统云–&gt;基础服务–&gt;权限管理–&gt;全功能用户–&gt;添加用户。</li></ul><ol start="4"><li>分配管理员</li></ol><blockquote><p>苍穹 2.0 轻量级开发环境，分配管理员操作步骤：以超级管理员 administrator 进 入系统，打开应用–&gt;系统云–&gt;基础服务–&gt;权限管理–&gt;管理员。</p></blockquote><ol start="5"><li>团队协助开发</li></ol>',15),b={href:"https://dev.kdcloud.com/%EF%BC%89%E2%80%94%E2%80%94%E8%B5%84%E6%BA%90%E4%B8%AD%E5%BF%83%E2%80%94%E2%80%94%E6%96%87%E6%A1%A3%E4%B8%AD%E5%BF%83%E2%80%94%E2%80%94%E7%8E%AF%E5%A2%83",target:"_blank",rel:"noopener noreferrer"},h=n(`<ol start="6"><li>配置 SVN 服务器</li></ol><p>6.1 管理整个应用版本的操作步骤</p><blockquote><p>打开开发服务云–&gt;开发平台–&gt;选中相应的业务云（需要做版本管理的应用所属 的业务云）–&gt;点击应用卡片右下角的“&lt;/&gt;”图标即可设置 SVN 服务器地址。</p></blockquote><p>6.2 管理单个页面版本的操作步骤</p><blockquote><p>打开开发服务云–&gt;开发平台–&gt;打开相应的应用（需要做版本管理的页面所属的应用）–&gt;点击页面卡片左下角的“&lt;/&gt;”图标即可设置 SVN 服务器地址.</p></blockquote><ol start="7"><li>启动 start-fileserver.bat 文件时 ， 命令窗口一 闪 而过</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Q：苍穹 2.0 轻量级开发环境，启动 start-fileserver.bat 文件时，命令窗口一闪而过。
A：以文本方式打开 start-fileserver.bat，检查第一个 JAVA_HOME 的值是否为本机jdk的安装路径。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>开发商标识</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Q：如图 5.1.1 中的开发商标识符应该填写什么？
A：可任意规定，不超过 4 位，字母或数字均可。
Q：怎么修改开发商标识？
A：以用户 administrator 进入系统，应用–&gt;系统云–&gt;系统管理–&gt; 开发商配置，修改并保存“开发商标识”。 注意：同一开发团队请设置相同的开发商标识。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>数据库账号密码、租户管理中心（mc ）账号密码、苍穹登录账号密码</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Q：轻量级开发环境，数据库账号密码、租户管理中心（mc）账号密码、苍穹登录账
号密码分别是什么？
A：数据库账号密码：root/kingdee，租户管理中心（mc）账号密码：
admin/Kadmin001，
苍穹登录账号密码：administrator/1234567。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li>打开提示框堆栈信息</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Q：苍穹 2.0 轻量级开发环境如何打开提示框堆栈信息？
A：administrator 用户登录苍穹 – 系统云 – 配置工具 – 参数配置 – 系统参数 –
公共参数 – 打开或关闭“异常显示配置” 来控制报错时是否显示相关异常堆栈信
息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>金蝶云苍穹基本操作及常见问题总结</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,17);function _(k,x){const i=d("ExternalLinkIcon");return s(),o("div",null,[r(" more "),e("h1",g,[p,t(),e("a",m,[t("16-金蝶云苍穹基本操作及常见问题总结.md"),l(i)])]),v,e("blockquote",null,[e("p",null,[t("请参阅门户网站（"),e("a",b,[t("https://dev.kdcloud.com/）——资源中心——文档中心——环境"),l(i)]),t(" 与部署——开发环境搭建——团队协助开发模式方案。")])]),h])}const f=a(u,[["render",_],["__file","kingdee16.html.vue"]]);export{f as default};
