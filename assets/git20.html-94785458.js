import{_ as e,X as i,Y as t,a1 as a,a0 as n}from"./framework-68dd73a2.js";const l="/blog/assets/Git_20_1.png",s={},d=n(`<h1 id="git报错connection-reset-by-xxx-port-22" tabindex="-1"><a class="header-anchor" href="#git报错connection-reset-by-xxx-port-22" aria-hidden="true">#</a> Git报错Connection_reset_by_xxx_port_22</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="场景复现" tabindex="-1"><a class="header-anchor" href="#场景复现" aria-hidden="true">#</a> 场景复现</h3><ul><li>如下所示</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>E:\\Google\\vuepress-theme-hope&gt;git push github master
Connection reset by 20.205.243.166 port 22
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="错误原因" tabindex="-1"><a class="header-anchor" href="#错误原因" aria-hidden="true">#</a> 错误原因</h3><ul><li>这个问题通常是由于 SSH 连接被阻止或端口 22 被阻止所导致的。可能的原因包括：</li></ul><ul><li>网络问题：你的网络连接可能存在问题，例如防火墙或代理服务器等可能会阻止 SSH 连接。</li><li>GitHub 服务器问题：GitHub 服务器可能存在问题，例如维护或升级等，导致 SSH 连接失败。</li><li>SSH 密钥问题：你的 SSH 密钥可能存在问题，例如权限不足或密钥已过期等。</li></ul><ul><li>为了解决这个问题，你可以尝试以下几种方法：</li></ul><ul><li>检查网络连接：确保你的网络连接正常，并尝试使用其他网络连接。</li><li>更改 SSH 端口：如果端口 22 被阻止，你可以尝试更改 SSH 连接端口，例如使用端口 443。</li><li>检查 SSH 密钥：确保你的 SSH 密钥正确配置，并且具有足够的权限。你可以尝试重新生成和添加 SSH 密钥。</li><li>尝试 HTTPS 连接：如果以上方法都无法解决问题，你可以尝试使用 HTTPS 连接到 GitHub。</li></ul><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><ul><li>以更改端口为例</li></ul><blockquote><p>要更改 SSH 连接端口为 443，你需要在 SSH 配置文件中添加以下内容：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Host github.com
  Hostname ssh.github.com
  Port 443
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这样，当你使用 <code>git clone</code> 或 <code>git push</code> 等命令时，Git 将使用 SSH 连接到 <code>ssh.github.com</code> 的 443 端口而不是默认的 22 端口。</p></blockquote><ul><li>如果你使用的是 Windows 操作系统，你可以按照以下步骤进行操作：</li></ul><ol><li><p>打开 Git Bash 终端。</p></li><li><p>输入以下命令打开 SSH 配置文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi ~/.ssh/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>按下 <code>i</code> 键进入编辑模式，然后添加以下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Host github.com
  Hostname ssh.github.com
  Port 443
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>按下 <code>Esc</code> 键退出编辑模式，然后输入 <code>:wq</code> 命令保存并退出。</p></li></ol><blockquote><p>现在，你可以尝试使用 Git 命令进行操作，Git 将使用 SSH 连接到 <code>ssh.github.com</code> 的 443 端口。</p></blockquote><blockquote><p>网络上各种博文我都有参考， 但都没有解决这个核心问题， 基本上是你抄我我抄你，这是我花一整夜研究出来的不容易呀！</p></blockquote><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Git报错Connection_reset_by_xxx_port_22</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,24);function o(r,c){return i(),t("div",null,[a(" more "),d])}const h=e(s,[["render",o],["__file","git20.html.vue"]]);export{h as default};
