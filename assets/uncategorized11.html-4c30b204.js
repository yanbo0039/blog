import{_ as o,X as i,Y as p,a1 as l,Z as n,$ as a,a2 as e,a0 as t,F as c}from"./framework-68dd73a2.js";const r="/blog/assets/Uncategorized_11_1.png",d="/blog/assets/Uncategorized_11_2.png",u="/blog/assets/Uncategorized_11_3.png",k="/blog/assets/Uncategorized_11_4.png",m="/blog/assets/Uncategorized_11_5.png",_="/blog/assets/Uncategorized_11_6.png",g="/blog/assets/Uncategorized_11_7.png",f="/blog/assets/Uncategorized_11_8.png",v="/blog/assets/Uncategorized_11_9.png",b="/blog/assets/Uncategorized_11_10.png",h={},x=t('<h1 id="_11-如何将md格式的文件转换成docx文件-md" tabindex="-1"><a class="header-anchor" href="#_11-如何将md格式的文件转换成docx文件-md" aria-hidden="true">#</a> 11-如何将md格式的文件转换成docx文件？.md</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="序言" tabindex="-1"><a class="header-anchor" href="#序言" aria-hidden="true">#</a> 序言</h3><blockquote><p>因工作需要 将.md文件转换成.docx格式，所以如何实现呢？</p></blockquote><h3 id="正文-将单个的-md文件转换成-docx文件" tabindex="-1"><a class="header-anchor" href="#正文-将单个的-md文件转换成-docx文件" aria-hidden="true">#</a> 正文--将单个的.md文件转换成.docx文件</h3><blockquote><p>依照如下步骤即可解决这个问题</p></blockquote>',6),y={href:"https://docs.conda.io/en/latest/miniconda.html",target:"_blank",rel:"noopener noreferrer"},w=t('<figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li><p>下载之后傻瓜式的安装就是了，安装路径时可以选择它的默认安装路径，也可自定义安装路径，这里笔者是用的自定义安装路径，安装在了自己定义的 <strong>E:/ProgramFiles/miniconda3</strong> 路径</p></li><li><p>在path下配置三个环境变量,以下为笔者自己的，仅供参考</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>环境变量路径： 此电脑 --&gt; 属性 --&gt; 相关设置 --&gt; 高级系统设置

E:/ProgramFiles/miniconda3

E:/ProgramFiles/miniconda3/Scripts

E:/ProgramFiles/miniconda3/Library/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>在windows系统搜索框输入 Miniconda 打开以应的命令窗</li></ol><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>输入如下命令，安装 Pandoc 包,当然在安装过程中它问你yse或者no的时候你输入y即可</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>conda install Pandoc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>然后输入以下命令安装 Pandoc-xnos，用于处理公式、图表等引用：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip  install pandoc-xnos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="7"><li>将对应的.md文件转换成.docx文件</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pandoc test.md -o test.docx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如下图所未，笔者就转换成功了，资助经本人测试内容没一点毛病</p></blockquote><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="md文件批量转换成-docx文件" tabindex="-1"><a class="header-anchor" href="#md文件批量转换成-docx文件" aria-hidden="true">#</a> .md文件批量转换成.docx文件</h3>',18),z={href:"http://xn--mdToWord-t39lfp33d21br7bzw2aznu7wgn4c696q4q1cjowc.py",target:"_blank",rel:"noopener noreferrer"},q={href:"http://mdToWord.py",target:"_blank",rel:"noopener noreferrer"},U=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os  

<span class="token keyword">def</span> <span class="token function">auto_md_to_docx</span><span class="token punctuation">(</span>file_dir<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 获取当前目录下所有的md文件的路径信息</span>
    all_whole_path_files <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> root<span class="token punctuation">,</span> dirs<span class="token punctuation">,</span> files <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>file_dir<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> files<span class="token punctuation">:</span>
            <span class="token keyword">try</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> <span class="token builtin">file</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;.md&quot;</span><span class="token punctuation">:</span>
                    file_info <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token operator">+</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token punctuation">]</span>
                    all_whole_path_files<span class="token punctuation">.</span>append<span class="token punctuation">(</span>file_info<span class="token punctuation">)</span>
            <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;==&gt;&quot;</span><span class="token punctuation">,</span> all_whole_path_files<span class="token punctuation">)</span>

    <span class="token comment"># 将md依次转换为pandoc</span>
    <span class="token keyword">for</span> file_info <span class="token keyword">in</span> all_whole_path_files<span class="token punctuation">:</span>
        md_file_path_file <span class="token operator">=</span> file_info<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> file_info<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        docx_file_name <span class="token operator">=</span> file_info<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;.docx&#39;</span>
        docx_file_path_file <span class="token operator">=</span> file_info<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> docx_file_name
        new_command <span class="token operator">=</span> <span class="token string">&#39;pandoc &#39;</span> <span class="token operator">+</span> md_file_path_file <span class="token operator">+</span> <span class="token string">&#39; -o &#39;</span> <span class="token operator">+</span> docx_file_path_file

        <span class="token keyword">try</span><span class="token punctuation">:</span>
            result <span class="token operator">=</span> os<span class="token punctuation">.</span>popen<span class="token punctuation">(</span>new_command<span class="token punctuation">)</span><span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span>md_file_path_file<span class="token punctuation">,</span> <span class="token string">&quot;已经转换为&quot;</span><span class="token punctuation">,</span> docx_file_path_file<span class="token punctuation">)</span>
        <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    auto_md_to_docx<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>如下所示，不单当前目录文件被转换成 其子目录也转换成功</p></blockquote><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>如何将md格式的文件转换成docx文件？</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div><h3 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h3>',10),E={href:"https://blog.csdn.net/qq_45224889/article/details/123463037",target:"_blank",rel:"noopener noreferrer"},P={href:"https://blog.csdn.net/qq_45224889/article/details/123438416?spm=1001.2014.3001.5501",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.jianshu.com/p/019b49cd4efb",target:"_blank",rel:"noopener noreferrer"},N=n("hr",null,null,-1),T=n("h3",{id:"分割线-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分割线-1","aria-hidden":"true"},"#"),a(" 分割线")],-1),V=n("hr",null,null,-1);function W(B,L){const s=c("ExternalLinkIcon");return i(),p("div",null,[l(" more "),x,n("ol",null,[n("li",null,[a("下载"),n("a",y,[a("Miniconda"),e(s)])])]),w,n("blockquote",null,[n("p",null,[a("上面仅仅是单个文件的转换，如果我们是批量文件则表现得不太友好了，不过也不要紧，"),n("a",z,[a("你只需要将如下代码保存为mdToWord.py"),e(s)]),a(",且在命令行中运行它，则可以解决这个问题 命令行 "),n("strong",null,[a("python "),n("a",q,[a("mdToWord.py"),e(s)])])])]),U,n("ol",null,[n("li",null,[n("p",null,[n("a",E,[a("Pandoc安装与基本使用方法详述"),e(s)])])]),n("li",null,[n("p",null,[n("a",P,[a("Anaconda(Miniconda)的安装配置与简单使用"),e(s)])])]),n("li",null,[n("p",null,[n("a",F,[a("Python将md批量转为docx"),e(s)])])])]),N,T,V])}const j=o(h,[["render",W],["__file","uncategorized11.html.vue"]]);export{j as default};
