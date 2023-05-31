import{_ as t,X as a,Y as s,a1 as l,Z as e,$ as i,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const o="/blog/assets/Kingdee_46_1.png",c="/blog/assets/Kingdee_46_2.png",u="/blog/assets/Kingdee_46_3.png",m="/blog/assets/Kingdee_46_4.png",b="/blog/assets/Kingdee_46_5.png",g="/blog/assets/Kingdee_46_6.png",p="/blog/assets/Kingdee_46_7.png",f="/blog/assets/Kingdee_46_8.png",h={},_={id:"_46-金蝶云苍穹插件开发之动态表单界面初始化事件测试-md",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#_46-金蝶云苍穹插件开发之动态表单界面初始化事件测试-md","aria-hidden":"true"},"#",-1),q={href:"http://xn--46--db9dml8a90dc573eymbv8atvj4ce19be1ruvdn8urh4bf15a5vvg53b3ovl5evzyyf8a8i4a.md",target:"_blank",rel:"noopener noreferrer"},k=r('<h4 id="新建基础资料" tabindex="-1"><a class="header-anchor" href="#新建基础资料" aria-hidden="true">#</a> 新建基础资料</h4><blockquote><p>如图所示为我所新建的基础资料，新建步骤省略</p></blockquote><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="新建插件类" tabindex="-1"><a class="header-anchor" href="#新建插件类" aria-hidden="true">#</a> 新建插件类</h4><blockquote><p>如图所示为我所新建的插件类 DemoFormPlugin</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>注册插件</p></blockquote><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="编码测试" tabindex="-1"><a class="header-anchor" href="#编码测试" aria-hidden="true">#</a> 编码测试</h4><ol><li>不嫌麻烦就可以重写父类所有方法，当然我是按需所复写方法</li></ol><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>Debug启动DebugServer类</li></ol><blockquote><p>这个步骤相当于重新布署，即手动布署</p></blockquote><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
package kd.bos.form.plugin;

import java.util.EventObject;

import kd.bos.form.events.PreOpenFormEventArgs;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    表单插件验证
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年2月27日
 * @return the bare_field_name
 * @version 1.0
 */
public class DemoFormPlugin extends AbstractFormPlugin {
	
	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: preOpenForm&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    打开表单之前的执行的方法
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年2月27日
	 * @param e
	 * @see kd.bos.form.plugin.AbstractFormPlugin#preOpenForm(kd.bos.form.events.PreOpenFormEventArgs)
	 */
	@Override
	public void preOpenForm(PreOpenFormEventArgs e) {
		// TODO Auto-generated method stub
//		super.preOpenForm(e);
		e.getFormShowParameter().setCaption(&quot;涎涎的测试页面&quot;);
//		e.setCancel(true);//设置点击预览时取消打开页面
	}
	
	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: afterCreateNewData&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    创建表单之后执行的方法
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年2月27日
	 * @param e
	 * @see kd.bos.entity.datamodel.events.IDataModelListener#afterCreateNewData(java.util.EventObject)
	 */
	@Override
	public void afterCreateNewData(EventObject e) {
		// TODO Auto-generated method stub
//		super.afterCreateNewData(e);
		this.getModel().setValue(&quot;textfield&quot;, &quot;你好金蝶&quot;);
		this.getModel().setValue(&quot;currencyfield&quot;, &quot;6&quot;);
		
	}
	
	/**
	 * (non-Javadoc)
	 * &lt;p&gt;Title: afterBindData&lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年2月27日
	 * @param e
	 * @see kd.bos.form.plugin.AbstractFormPlugin#afterBindData(java.util.EventObject)
	 */
	@Override
	public void afterBindData(EventObject e) {
		// TODO Auto-generated method stub
//		super.afterBindData(e);
		this.getView().setVisible(false, &quot;baritemap1&quot;);
		this.getView().setEnable(false, &quot;baritemap2&quot;);
//		this.getView().setEnable(false,0,&quot;id&quot;);//设置单据体的某一行不可用
	}	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="预览效果" tabindex="-1"><a class="header-anchor" href="#预览效果" aria-hidden="true">#</a> 预览效果</h4><blockquote><p>预览前的效果</p></blockquote><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>预览后的效果</p></blockquote><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹插件开发之动态表单界面初始化事件测试</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',27);function y(O,D){const n=v("ExternalLinkIcon");return a(),s("div",null,[l(" more "),e("h1",_,[x,i(),e("a",q,[i("46-金蝶云苍穹插件开发之动态表单界面初始化事件测试.md"),d(n)])]),k])}const F=t(h,[["render",y],["__file","kingdee46.html.vue"]]);export{F as default};
