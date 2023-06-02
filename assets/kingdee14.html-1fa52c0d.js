import{_ as t,X as n,Y as l,a1 as o,Z as i,$ as a,a2 as r,a0 as s,F as g}from"./framework-68dd73a2.js";const p="/blog/assets/Kingdee_14_1.png",d="/blog/assets/Kingdee_14_2.png",c="/blog/assets/Kingdee_14_3.png",h="/blog/assets/Kingdee_14_4.png",f="/blog/assets/Kingdee_14_5.png",_="/blog/assets/Kingdee_14_6.png",u="/blog/assets/Kingdee_14_7.png",b="/blog/assets/Kingdee_14_8.png",m="/blog/assets/Kingdee_14_9.png",x="/blog/assets/Kingdee_14_10.png",y="/blog/assets/Kingdee_14_11.png",z="/blog/assets/Kingdee_14_12.png",K="/blog/assets/Kingdee_14_13.png",k="/blog/assets/Kingdee_14_14.png",q="/blog/assets/Kingdee_14_15.png",v="/blog/assets/Kingdee_14_16.png",N="/blog/assets/Kingdee_14_17.png",V="/blog/assets/Kingdee_14_18.png",B="/blog/assets/Kingdee_14_19.png",E="/blog/assets/Kingdee_14_20.png",j="/blog/assets/Kingdee_14_21.png",w="/blog/assets/Kingdee_14_22.png",C={},I={id:"_14-云苍穹权限管理-md",tabindex:"-1"},L=i("a",{class:"header-anchor",href:"#_14-云苍穹权限管理-md","aria-hidden":"true"},"#",-1),F={href:"http://xn--14--dj9d024ic9pfkkyjcbwzh69b.md",target:"_blank",rel:"noopener noreferrer"},S=s('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="授权模型" tabindex="-1"><a class="header-anchor" href="#授权模型" aria-hidden="true">#</a> 授权模型</h3><h3 id="功能简介" tabindex="-1"><a class="header-anchor" href="#功能简介" aria-hidden="true">#</a> 功能简介</h3><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="用户直接授权" tabindex="-1"><a class="header-anchor" href="#用户直接授权" aria-hidden="true">#</a> 用户直接授权</h3><blockquote><p>管理员直接对单个用户授予权限，适用于临时或者少数人员的授权</p></blockquote><p>操作步骤：</p><p>说明：必须先配置功能权限，才能配置字段权限和数据规则；</p><ol><li>在用户授权列表选中待授权的用户，点击工具栏中的“直接授权”按钮，进入到授权页面。</li></ol><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>对用户添加业务单元，添加功能权限</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>添加字段权限</li></ol><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>添加数据规则（数据权限）</li></ol><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="角色授权" tabindex="-1"><a class="header-anchor" href="#角色授权" aria-hidden="true">#</a> 角色授权</h3><blockquote><p>管理员需要先创建角色，然后将用户和角色关联，用户便拥有该角色的权限。适用于批量的对具有相同权限的人员授权</p></blockquote><p>操作步骤：</p><p>说明：必须先维护好功能权限才能维护字段权限和数据规则;也可在用户授权功能中通过分配角色按钮将用户和角色关联</p><p>1.创建角色，包括维护角色基本信息、功能权限、字段权限、数据规则</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>2.通过“分配组织用户”和“分配用户组织”按钮，给创建好的角色关联上组织用户。</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="授权要素" tabindex="-1"><a class="header-anchor" href="#授权要素" aria-hidden="true">#</a> 授权要素</h3><blockquote><p>四大要素：管理员，用户，业务单元，权限</p></blockquote><h3 id="管理员分类" tabindex="-1"><a class="header-anchor" href="#管理员分类" aria-hidden="true">#</a> 管理员分类</h3><h4 id="超级管理员" tabindex="-1"><a class="header-anchor" href="#超级管理员" aria-hidden="true">#</a> 超级管理员</h4><blockquote><p>系统中只存在一个超级管理员：administrator ，租户开通时生成。拥有系统云的权限，组织管辖范围包含所有组织，可以创建管理组织管理员。</p></blockquote><h4 id="管理组织管理员" tabindex="-1"><a class="header-anchor" href="#管理组织管理员" aria-hidden="true">#</a> 管理组织管理员</h4><blockquote><p>超级管理员创建或者由上级管理组织管理员创建 ，组织管辖范围由创建者指定。</p></blockquote><h4 id="商务伙伴用户管理员" tabindex="-1"><a class="header-anchor" href="#商务伙伴用户管理员" aria-hidden="true">#</a> 商务伙伴用户管理员</h4><blockquote><p>可以指定商务伙伴用户管理员，有商务伙伴用户新增权限的皆可创建</p></blockquote><ul><li>管理员 <ul><li>创建路径：</li></ul></li></ul><p>系统云-基础服务-权限管理-管理员</p><ul><li>组织管辖范围设置：</li></ul><p>左边树展示上级管理员的组织管辖范围，勾选对应的组织后点击添加按钮，右边则会展示出已添加的组织视图</p><ul><li>非组织管辖范围内用户：</li></ul><p>用来添加组织管辖范围外的用户</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>用户</li></ul><p>人员的类型分为职员、客户、供应商，经销商，其他伙伴等类型。</p><ul><li><p>职员类型的人员直接在【人员】中创建维护，路径：系统云-基础服务-人员管理-人员。</p></li><li><p>客户、供应商，经销商，其他伙伴等类型的人员在【商务伙伴用户】中创建维护， 商务伙伴用户保存之后，也可以 在【人员】列表中查询维护，路径：系统云-基础服务-权限管理-商务伙伴用户。</p></li></ul><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>业务单元</li></ul><p>包括有行政组织职能和无行政组织职能两类业务单元</p><ul><li>有行政组织职能创建路径：系统云-基础服务-组织管理-行政组织。行政组织创建之后，同时会在【业务单元】中显示。</li></ul><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>非行政组织业务单元创建路径：系统云-基础 服务-组织管理-业务单元</li></ul><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>权限</strong></p><ul><li>功能权限</li></ul><p>控制业务对象的增删改查等操作权限</p><ul><li>字段权限</li></ul><p>控制用户可查询及编辑的字段范围，也称列权限。</p><ul><li>数据规则</li></ul><p>控制用户可查询业务对象的行数据范围，也称行权限</p><ul><li>特殊数据权限</li></ul><p>控制特定场景下的操作权限，如审核人不能为创建人</p><p>业务对象和权限项的组合称为功能权限，如物料的新增，修改，查询权。只有配置了业务对象的权限项，才能进行功能权限的授权。</p><p>举例：设计器配置物料“新增”权限项</p><p>第一步：字段配置区，物料的【权限控制】选项中添加“新增”选项 ；</p><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第二步：物料的【操作】中添加“新增”选项；</p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第三步：将【权限控制】和【操 作】中的“新增”绑定；</p><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>第四步：选中物料工具栏的新增，将其与【操作代码】绑定“新增”</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>权限-字段权限</li></ul><p>控制用户可查询及编辑的字段范围，也称列权限。</p><p>举例：右图展示的字段规则为：拥有该角色的用户不能查看付款单中的创建人和修改人字段</p><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>权限-数据权限</li></ul><p>控制用户可查询业务对象的行数据范围，也称行权限。</p><p>举例：右图展示数据规则为：拥有该角色的用户只能查询单据状态等于已审核且创建人的工号等于40081的电子回单。</p><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>权限-特殊数据权限</li></ul><p>针对业务单据设置，基础数据不受控制；每个单据下的特殊数据权限所绑定的操作不能重复</p><p>举例：查询本人或本部门人员的出差申请单，配置如下：</p><p>1、在左树中选中人人差旅-出差申请单，点击新增；</p><p>2、在编辑页面维护名称：查询本人或负责部门的数据，操作为：查看，条件规则设置：创建人为当前用户，组织为我负责的部门</p><p><strong>指定主管：</strong> 只有当条件规则设置中包含“我负责的部门”条件时，才能配置。使用场景：小明是 某部门主管，某天请假则可以将小王指定为临时主管，小王便可以看到该部门下人员的单据。</p><p><strong>例外用户：</strong> 添加到例外用户后，该用户不受该条规则限制。例如，查询本人或负责部门的数据中 将小王添加到例外用户，小王则可以看到所有人的出差申请单（前提是没有其他权限约束）。</p><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="权限补充" tabindex="-1"><a class="header-anchor" href="#权限补充" aria-hidden="true">#</a> 权限补充</h3><figure><img src="'+j+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="全功能用户-复制权限" tabindex="-1"><a class="header-anchor" href="#全功能用户-复制权限" aria-hidden="true">#</a> 全功能用户-复制权限</h3><h4 id="全功能用户" tabindex="-1"><a class="header-anchor" href="#全功能用户" aria-hidden="true">#</a> 全功能用户</h4><p>全功能用户拥有所有权限，但是全功能用户不能给其他用户授权。</p><p>创建路径：系统云-基础服务-权限管理-全功能用户。</p><h4 id="复制权限" tabindex="-1"><a class="header-anchor" href="#复制权限" aria-hidden="true">#</a> 复制权限</h4><p>在【用户授权】列表中有个“复制权限”按钮，该功能可以快速将一个用户的权限（包括被复制用户的角色、禁用权限、已分配的权限）复制到另外一个用户。</p><h3 id="权限控制体系" tabindex="-1"><a class="header-anchor" href="#权限控制体系" aria-hidden="true">#</a> 权限控制体系</h3><h4 id="应用中心的应用卡片出现条件" tabindex="-1"><a class="header-anchor" href="#应用中心的应用卡片出现条件" aria-hidden="true">#</a> 应用中心的应用卡片出现条件</h4><ol><li>全员应用必出现；</li><li>非全员应用必须可见而且已启用，否则不出现。</li><li>非全员应用，如果没有任何实体需要权限控制，则出现； 如果有实体绑定了权限项，那么当前用户对至少一个实体拥有权限项，才出现。</li><li>每个应用都有适用用户类型，如果当前用户的类型与其不匹配，则不显示。</li><li>如果用户曾经修改过应用中心的布局，则按最新设定布局显示。可以通过点击右上角的“调整布局”，然后点击“重置”按钮，就可以清除掉自定义布局，按前面规则显示。</li></ol><h4 id="菜单出现条件" tabindex="-1"><a class="header-anchor" href="#菜单出现条件" aria-hidden="true">#</a> 菜单出现条件</h4><ol><li>某菜单绑定表单所对应的实体如果要求权限控制，则继续下面判断；否则显示。</li><li>某菜单配置了“权限项”属性，则判断当前用户有无该菜单绑定表单对应的实体的该权限项，如果有则显示，反之不显示。</li><li>某菜单的参数类型如果是列表，动态表单，报表，则需要有该菜单绑定表单所对应的实体的查询权，如有则显示，反之不显示。</li></ol><h4 id="出现在权限左树的条件" tabindex="-1"><a class="header-anchor" href="#出现在权限左树的条件" aria-hidden="true">#</a> 出现在权限左树的条件</h4><ol><li>非全员应用，且可见和启用；</li><li>实体不能是模版，必须打开“控制功能权限”的开关，并且至少绑定了一个权限项；</li></ol><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>云苍穹权限管理</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',107);function T(X,Y){const e=g("ExternalLinkIcon");return n(),l("div",null,[o(" more "),i("h1",I,[L,a(),i("a",F,[a("14-云苍穹权限管理.md"),r(e)])]),S])}const $=t(C,[["render",T],["__file","kingdee14.html.vue"]]);export{$ as default};
