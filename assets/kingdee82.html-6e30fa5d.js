import{_ as t,X as l,Y as s,a1 as a,Z as e,$ as i,a2 as d,a0 as r,F as o}from"./framework-68dd73a2.js";const v="/blog/assets/Kingdee_82_1.png",c="/blog/assets/Kingdee_82_2.png",u="/blog/assets/Kingdee_82_3.png",m={},b={id:"_82-金蝶云苍穹树形基础资料initializetree事件案例-md",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#_82-金蝶云苍穹树形基础资料initializetree事件案例-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--82-initializeTree-ou70a3c94ho3ev04e6u9a9f5am5molbd74xd9mr02dsh3anv1b5o4a.md",target:"_blank",rel:"noopener noreferrer"},h=r('<h4 id="导读" tabindex="-1"><a class="header-anchor" href="#导读" aria-hidden="true">#</a> 导读</h4><hr><blockquote><p>坎坷并不可怕，可怕是的没有淡然的心态,没有面对的勇气，没有战胜的智慧，甚至没有站起来的毅力。</p></blockquote><hr><h4 id="正文" tabindex="-1"><a class="header-anchor" href="#正文" aria-hidden="true">#</a> 正文</h4><ol><li><p>新建树形基础资料，并且管理员授权</p></li><li><p>切换到列表界面预览新增多条数据，将新增的数据进行保存提交审核操作后，即可生成左树，如下图所示</p></li></ol><figure><img src="'+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.zsybbill.plugin;

import java.util.EventObject;

import kd.bos.list.plugin.AbstractTreeListPlugin;
import kd.bos.orm.query.QFilter;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    暂未做试验
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月16日
 * @version 1.0
 */
public class InitializeTreeSample extends AbstractTreeListPlugin {

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月16日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.list.plugin.AbstractTreeListPlugin#initializeTree(java.util.EventObject)
	 * @version 1.0
	 */
	@Override
	public void initializeTree(EventObject e) {
		super.initializeTree(e);
		// 根节点是否显示
		this.getTreeModel().setRootVisable(true);
		if (this.getTreeModel().getGroupProp() != null){
			// 分组节点取数条件：
			// 只有单据有分组字段，分组节点由系统自动读取、构建时，才会用到这个条件
			this.getTreeModel().getTreeFilter().add(new QFilter(&quot;number&quot;, &quot;like&quot;, &quot;%abc%&quot;));
			// 分组节点内容格式化
//			this.getTreeModel().setTextFormat(&quot;名称{name}(编码{code})&quot;);
			this.getTreeModel().setTextFormat(&quot;涎涎{name}(编码{code})&quot;);
			// 分组节点取数级次 (暂未发现在何处使用到这个属性)
			this.getTreeModel().setDefaultQueryLevel(5);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>重启服务后在列表界面注册插件后预览效果</li></ol><blockquote><p>会看到如下图所示</p></blockquote><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>更改代码后再次预览测试</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//this.getTreeModel().getTreeFilter().add(new QFilter(&quot;number&quot;, &quot;like&quot;, &quot;%abc%&quot;));
this.getTreeModel().setTextFormat(&quot;涎涎{name}(编码{code})&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>效果如下</p></blockquote><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹树形基础资料initializeTree事件案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',21);function _(f,T){const n=o("ExternalLinkIcon");return l(),s("div",null,[a(" more "),e("h1",b,[g,i(),e("a",p,[i("82-金蝶云苍穹树形基础资料initializeTree事件案例.md"),d(n)])]),h])}const x=t(m,[["render",_],["__file","kingdee82.html.vue"]]);export{x as default};
