import{_ as e,X as l,Y as i,a1 as p,Z as a,$ as n,a2 as t,a0 as o,F as c}from"./framework-68dd73a2.js";const r="/blog/assets/Java_263_1.png",u="/blog/assets/Java_263_2.png",g="/blog/assets/Java_263_3.png",d="/blog/assets/Java_263_4.png",m="/blog/assets/Java_263_5.png",v="/blog/assets/Java_263_6.png",k="/blog/assets/Java_263_7.png",_="/blog/assets/Java_263_8.png",f="/blog/assets/Java_263_9.png",b="/blog/assets/Java_263_10.png",h="/blog/assets/Java_263_11.png",x={},y={id:"_263-java如何配置安装本地maven-md",tabindex:"-1"},J=a("a",{class:"header-anchor",href:"#_263-java如何配置安装本地maven-md","aria-hidden":"true"},"#",-1),w={href:"http://xn--263-Javamaven-ww4ud82gr0he2icu8cdl5flbtblpzb.md",target:"_blank",rel:"noopener noreferrer"},z=o('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li>下载maven,下载完成后自己解压到自己看得顺眼的目录即可</li></ol><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>配置环境变量</li></ol><ul><li>win+r 输入 sysdm.cpl 按下确定键 ---&gt; 高级 --&gt; 环境变量 --&gt; 在系统变量里设置如下两个值即可</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MAVEN_HOME:D:\\ProgramFiles\\soft\\apache-maven-3.9.0\\apache-maven-3.9.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Path:%MAVEN_HOME%\\bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>添加本地仓库且命名为 maven-repository</li></ol><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>更改maven路径conf下的settings.xml文件</li></ol><ul><li>找到节点 localRepository ，在注释外添加</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>localRepository</span><span class="token punctuation">&gt;</span></span>D:\\ProgramFiles\\soft\\apache-maven-3.9.0\\maven-repository<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>localRepository</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>找到 mirrors 节点， 添加如下代码</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>    <span class="token comment">&lt;!-- 阿里云仓库 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>alimaven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>aliyun maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://maven.aliyun.com/nexus/content/repositories/central/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>找到 profiles 节点， 添加如下代码</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- java版本 --&gt;</span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>jdk-1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activation</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>jdk</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>jdk</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activation</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.compilerVersion</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.compilerVersion</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>运行命令，看看是否能构建成功</li></ol><ul><li>win+R运行cmd，输入mvn help:system测试，配置成功则本地仓库（maven-repository）文件夹 中会出现一些文件，如无意外你会出现如下的界面</li></ul><figure><img src="'+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>这表明呢，你就是个辣鸡，构建失败了，欧了个耶，表慌，运和如下命令可以解决这个问题</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn help:system -Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true -Dmaven.wagon.http.ssl.ignore.valid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>当出现构建成功的提示且对应的文件夹中是有东西那么才算是成功，如下图所示</li></ul><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java如何配置安装本地maven</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div><h3 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h3>',35),V={href:"https://blog.csdn.net/qq_38190185/article/details/115921070",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.cnblogs.com/byuan/p/14853891.html#p1",target:"_blank",rel:"noopener noreferrer"},N=a("hr",null,null,-1),D=a("h3",{id:"分割线-1",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#分割线-1","aria-hidden":"true"},"#"),n(" 分割线")],-1),E=a("hr",null,null,-1);function M(B,R){const s=c("ExternalLinkIcon");return l(),i("div",null,[p(" more "),a("h1",y,[J,n(),a("a",w,[n("263-Java如何配置安装本地maven.md"),t(s)])]),z,a("ol",null,[a("li",null,[a("p",null,[a("a",V,[n("Maven安装与配置"),t(s)])])]),a("li",null,[a("p",null,[a("a",j,[n("Maven配置完毕后构建失败，无法下载JAR包，输入mvn help:system后出现No plugin found for prefix 'help'...问题的解决方案"),t(s)])])])]),N,D,E])}const A=e(x,[["render",M],["__file","java263.html.vue"]]);export{A as default};
