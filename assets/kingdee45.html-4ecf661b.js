import{_ as l,X as n,Y as d,a1 as a,Z as i,$ as e,a2 as r,a0 as s,F as o}from"./framework-68dd73a2.js";const c={},u={id:"_45-金蝶云苍穹扩展开发简单介绍-md",tabindex:"-1"},p=i("a",{class:"header-anchor",href:"#_45-金蝶云苍穹扩展开发简单介绍-md","aria-hidden":"true"},"#",-1),v={href:"http://xn--45--dj9dkkl4v1yaj21cwufnyj852ekuc67om6ni5q472b.md",target:"_blank",rel:"noopener noreferrer"},b=s(`<h3 id="产品简介" tabindex="-1"><a class="header-anchor" href="#产品简介" aria-hidden="true">#</a> 产品简介</h3><h4 id="扩展开发" tabindex="-1"><a class="header-anchor" href="#扩展开发" aria-hidden="true">#</a> 扩展开发</h4><blockquote><p>当金蝶云苍穹提供的标准产品无法满足终端用户的个性化需求时采取的开发模式，通过对应用和单据的扩展，用户可以基于标准产品打造完全个性化的内容，这些扩展后的内容都是按租户严格隔离的，多个租户之间互不影响。扩展模式一般只提供给终端用户对标准产品进行个性化处理，当对单据进行扩展开发后，系统中原来访问原单据的地方会自动展示扩展后的单据，包括菜单、工作流，上下查等。</p></blockquote><h4 id="扩展的优点" tabindex="-1"><a class="header-anchor" href="#扩展的优点" aria-hidden="true">#</a> 扩展的优点</h4><ul><li><p>支撑客户自定义业务需求</p></li><li><p>满足个性化功能</p></li><li><p>可持续化升级</p></li><li><p>保证二次开发兼容性</p></li><li><p>最小化升级包</p></li></ul><h4 id="扩展的场景" tabindex="-1"><a class="header-anchor" href="#扩展的场景" aria-hidden="true">#</a> 扩展的场景</h4><ul><li><p>当前业务流程保持不变</p></li><li><p>原单据增加业务字段</p></li><li><p>原单据扩展业务功能</p></li><li><p>原单行业特性开发</p></li></ul><h4 id="扩展的方法" tabindex="-1"><a class="header-anchor" href="#扩展的方法" aria-hidden="true">#</a> 扩展的方法</h4><p>扩展主要包含以下三种方式：</p><ul><li><p>应用扩展</p></li><li><p>表单扩展</p></li><li><p>操作扩展</p></li></ul><h3 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门" aria-hidden="true">#</a> 快速入门</h3><h4 id="扩展的规范和要求" tabindex="-1"><a class="header-anchor" href="#扩展的规范和要求" aria-hidden="true">#</a> 扩展的规范和要求</h4><ol><li>云和应用编码规范</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{ISV标识}_{云编码}
{ISV标识}_{应用编码}

例如：
LT_MFG
LT_PRD (生产任务应用)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>设计器对象命名规范</li></ol><blockquote><p>业务对象命名</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{ISV标识}_{业务对象标识}

整个系统中不允许重复
长度不超过36位
对象名为字符、_、数字
例如：
LT_PurchaseOrder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>元素命名</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>元素包括：控件、字段、容器、实体。

{ISV标识}_{元素标识}

当前业务对象中不允许重复
长度不超过36位
对象名为字符、_、数字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>特殊要求</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>实体的表名属性、字段的字段名属性要求:

长度&lt;=24位
表名：T_{ISV标识}_{表名}
字段名：F_{ISV标识}_{字段名}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>继承体系</li></ol><ul><li>表单类插件 <ul><li>表单、单据、基础资料、移动</li><li>列表、报表</li></ul></li><li>实体类插件 <ul><li>操作</li><li>反写规则</li><li>单据转换</li></ul></li><li>插件命名规范</li><li>增加ISV前缀</li><li>插件继承关系 <ul><li>表单类插件 - bos-form-core.jar</li><li>实体类插件 - bos-entity-core.jar</li></ul></li></ul><table><thead><tr><th>业务对象类型</th><th>应用场景</th><th>预置的Java插件基类</th></tr></thead><tbody><tr><td>动态表单</td><td>PC端界面</td><td>AbstractFormPlugin</td></tr><tr><td></td><td>移动端界面</td><td>AbstractMobFormPlugin</td></tr><tr><td>单据、基础资料</td><td>PC端界面</td><td>AbstractBillPlugIn</td></tr><tr><td></td><td>移动端界面</td><td>AbstractMobBillPlugIn</td></tr><tr><td></td><td>单据列表</td><td>AbstractListPlugin</td></tr><tr><td></td><td>左树右表单据列表</td><td>AbstractTreeListPlugin</td></tr><tr><td></td><td>树形基础资料列表</td><td>StandardTreeListPlugin</td></tr><tr><td></td><td>移动端单据列表</td><td>AbstractMobListPlugin</td></tr><tr><td></td><td>业务操作</td><td>AbstractOperationServicePlugIn</td></tr><tr><td></td><td>单据转换</td><td>AbstractConvertPlugIn</td></tr><tr><td></td><td>关联反写</td><td>AbstractWriteBackPlugIn</td></tr><tr><td></td><td>生成凭证</td><td>AbstractBuildVchPlugin</td></tr></tbody></table><h4 id="应用扩展" tabindex="-1"><a class="header-anchor" href="#应用扩展" aria-hidden="true">#</a> 应用扩展</h4><ol><li>金蝶应用类型</li></ol><ul><li>金蝶原厂应用</li></ul><blockquote><p>应用名称上带有 “原”字样，代表为金蝶原厂应用</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_45_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>第三方应用</li></ul><blockquote><p>应用上的三角形代表为第三方厂商开发应用</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_45_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>租户自建应用</li></ul><blockquote><p>应用名称上带有 “自”字样，代表当前租户自建应用</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_45_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>应用扩展开发</li></ol><blockquote><p>在云应用管理界面，点击需要扩展的应用卡片上的“扩”图标即可快速生成扩展应用</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_45_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>扩展应用可以修改部分属性</p><ul><li>修改菜单</li></ul></li><li><p>修改应用基本信息</p></li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_45_5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>修改应用高级信息中部分属性</li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_45_6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>应用扩展限制</li></ol><blockquote><p>金蝶苍穹的所有类型的应用都支持扩展，但是只能垂直扩展，不能水平扩展</p></blockquote><blockquote><p>扩展过一次的应用不可再次扩展；扩展的应用可以继续向下扩展</p></blockquote><blockquote><p>只能垂直扩展，不能水平扩展</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_45_7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="表单扩展" tabindex="-1"><a class="header-anchor" href="#表单扩展" aria-hidden="true">#</a> 表单扩展</h4><ol><li>扩展方式</li></ol><ul><li><p>点击扩展应用进入扩展应用的页面管理页。</p></li><li><p>自建页面</p></li><li><p>表单扩展</p></li></ul><blockquote><p>扩展方式和应用扩展类似</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_45_8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>如果分组中包含扩展的页面，分组标签会从“源” --&gt; “扩”</p></li><li><p>打开扩展页面开始扩展设计</p></li></ul><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_45_9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>可扩展的内容</li></ol><ul><li>界面规则</li></ul><blockquote><p>允许修改源页面的界面规则，也可以新增自己的界面规则</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_45_10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>业务规则</li></ul><blockquote><p>允许修改源页面的业务规则，也可以新增自己的业务规则</p></blockquote><figure><img src="http://rvg3orptc.hd-bkt.clouddn.com/assets/Kingdee_45_11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>修改字段名称</li></ul><blockquote><p>源页面的字段标识不允许修改，但可以修改字段名称</p></blockquote><ul><li>隐藏字段</li></ul><blockquote><p>如果不需要使用源页面的字段，可以隐藏字段</p></blockquote><ul><li>添加字段</li></ul><blockquote><p>可以在源页面的基础上新增字段以满足扩展的需要</p></blockquote><ul><li>添加按钮</li></ul><blockquote><p>可以新增更多的功能菜单以满足个性化需求</p></blockquote><ul><li>编辑插件</li></ul><blockquote><p>扩展页面可对插件进行编辑，修改源页面的插件或者新增自己的插件</p></blockquote><h4 id="操作扩展" tabindex="-1"><a class="header-anchor" href="#操作扩展" aria-hidden="true">#</a> 操作扩展</h4><ol><li>扩展方式</li></ol><ul><li><p>在页面设计中选中主实体，在属性栏点击操作属性进入操作编辑界面</p></li><li><p>可以编辑已有的操作或者新增操作</p></li><li><p>新增操作</p><ul><li>点击新增按钮进入新增操作界面</li></ul></li><li><p>选择操作类型</p></li><li><p>系统根据不同的业务场景内置有丰富的操作，选择一个已有的操作类型添加新来</p></li><li><p>操作配置</p><ul><li>点击一个已有的操作，点击修改即可进入编辑界面</li></ul></li><li><p>可对操作的参数和相关控制进行配置，主要是配置操作校验器和插件等</p></li></ul><ol start="2"><li>操作插件</li></ol><ul><li>单据操作可配置的插件如下：</li></ul><table><thead><tr><th>事件</th><th>触发时机</th></tr></thead><tbody><tr><td>onPreparePropertys</td><td>在单据列表上执行单据操作，系统需要先根据传入的单据内码，加载单据数据包；在加载单据数据包之前，触发此事件；插件需要在此事件，添加需要用到的字段；</td></tr><tr><td>onAddValidators</td><td>系统预置的操作校验器加载完毕，执行校验之前，触发此事件；</td></tr><tr><td>beforeExecuteOperationTransaction</td><td>操作校验通过之后，开启事务之前，触发此事件；</td></tr><tr><td>beginOperationTransaction</td><td>操作校验通过，开启了事务，准备把数据提交到数据库之前触发此事件；</td></tr><tr><td>endOperationTransaction</td><td>数据已经提交到数据库之后，事务未提交之前，触发此事件；</td></tr><tr><td>rollbackOperation</td><td>操作事务提交失败，事务回滚之后触发此事件；</td></tr><tr><td>afterExecuteOperationTransaction</td><td>操作执行完毕，事务提交之后，触发此事件；</td></tr></tbody></table><ul><li>插件代码如下:</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.form.plugin;

import kd.bos.entity.plugin.AbstractOperationServicePlugIn;
import kd.bos.entity.plugin.AddValidatorsEventArgs;
import kd.bos.entity.plugin.PreparePropertysEventArgs;
import kd.bos.entity.plugin.args.AfterOperationArgs;
import kd.bos.entity.plugin.args.BeforeOperationArgs;
import kd.bos.entity.plugin.args.BeginOperationTransactionArgs;
import kd.bos.entity.plugin.args.EndOperationTransactionArgs;
import kd.bos.entity.plugin.args.RollbackOperationArgs;

public class SampleOperationPlugin extends AbstractOperationServicePlugIn {
	
	@Override
	public void onPreparePropertys(PreparePropertysEventArgs e) {
		// TODO 在此添加业务逻辑
	}
	
	@Override
	public void onAddValidators(AddValidatorsEventArgs e) {
		// TODO 在此添加业务逻辑
	}
	
	@Override
	public void beforeExecuteOperationTransaction(BeforeOperationArgs e) {
		// TODO 在此添加业务逻辑
	}
	

	@Override
	public void beginOperationTransaction(BeginOperationTransactionArgs e) {
		// TODO 在此添加业务逻辑

	}

	@Override
	public void endOperationTransaction(EndOperationTransactionArgs e) {
		// TODO 在此添加业务逻辑
	}
	

	@Override
	public void rollbackOperation(RollbackOperationArgs e) {
		// TODO 在此添加业务逻辑
	}

	@Override
	public void afterExecuteOperationTransaction(AfterOperationArgs e) {
		// TODO 在此添加业务逻辑
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>金蝶云苍穹扩展开发简单介绍</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,84);function g(m,h){const t=o("ExternalLinkIcon");return n(),d("div",null,[a(" more "),i("h1",u,[p,e(),i("a",v,[e("45-金蝶云苍穹扩展开发简单介绍.md"),r(t)])]),b])}const k=l(c,[["render",g],["__file","kingdee45.html.vue"]]);export{k as default};
