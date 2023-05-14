import{_ as i,X as n,Y as e,a1 as s,a0 as l}from"./framework-68dd73a2.js";const d={},v=l(`<h1 id="苍穹考试题" tabindex="-1"><a class="header-anchor" href="#苍穹考试题" aria-hidden="true">#</a> 苍穹考试题</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Q1.单选题（2分）以下使用ORM合计凭证分录贷方金额写法正确的是

OA  &quot;select id，sum（entries.debitori）s from gl_voucher group by id&quot;
OB  &quot;select id，sum（entries.debitori）s from gl_voucher&quot;
OC  &quot;select id，sum（debitori）s from gl_voucher.entries group by id&quot;
OD  select sum（debitori）from t_gl_voucherentry group byid

Q2.单选题（2分）单据列表插件中，对于itemClick事件，以下说法正确的是？

○A用户点击列表主菜单按钮前触发
OB用户点击列表主菜单按钮时触发
OC用户点击列表主菜单按钮后触发
OD用户点击某一条单据进入单据详情后触发

Q3.单选题（2分）可配置式的表单设计包含的阶段范围是（）。

OA设计期、开发期、测试期、运行期
○B设计期、运行期
OC开发期、测试期、运行期
OD设计期、测试期、运行期

Q4.[单选题]（2分）关于苍弯的扩展开发下列说法错误的是

OA可以支撑客户自定义业务需求
OB可持续化升级
OC无法保证二次开发兼容性
OD可以满足个性化功能

Q5.单选题]（2分）单据转换中源单据携带完毕，对目标单数据进一步加工需要配置什么实现

OA业务规则
OB字段映射
OC数据范围
OD分单合并


Q6.选题题（2分）单据列表界面插件，下面哪个事件是在列表打开的单据维护界面关闭后返回时触发？

OA billClosedCallBack
OB beforeShowBill
OC closedCallBack
OD beforeClosed

Q7.选题题（2分）执行查询后报错，提示“缺少主键属性：id”这个错误的原因是

OA 数据库表上没有设置主键
OB 表单上主键标识为空或改成了其它字符
OC 查询内容中没有加id
OD 单据使用的是联合主键

Q8.[单选题]（2分）金蝶云苍穹的引入引出功能的数据引入方式不包括：

OA 新增
OB 覆盖
○C 覆盖新增
OD 分组习引入

Q9.单选题]（2分）完成授权需要有以下几个要素，不包含哪一项？

OA管理员
○B用户
OC权限
OD角色

Q10.单选题]（2分）方法queryOne（String entityName，String selectFields，QFilter[] filters）中entityName 是指元数掘的什么内容。

OA应用编码
OB页面编码
OC表名
OD单据标识

Q11.单选题（2分）当触发保存操作的时候操作校验不通过，则以下事件会触发的是

OA beforeExecuteOperationTransaction
©B beginOperationTransaction
OC afterExecuteOperationTransaction
OD onReturnOperation

Q12.单选题（2分）编写PC端动态表单插件时需要继承哪个基类？

OA AbstractBiPlugln
OBAbstractConvertPlugin
OCAbstractListPlugin
ODAbstractformPlugin

Q13.单选题（2分）以下关于界面插件说法正确的是（）.

○A单据界面只能注册一个插件
OB同一单据多个插件按注册顺序执行
OC同一单据多个插件的执行顺序随机
OD新增插件类并绑定到单据养面后立即生效不需要重启

Q14.单选题（2分）小维同学打开了以前设计的一个单据，突然想将某个整型字段改为文本类型，下列哪项修改操作不会生效

OA删除数据库对应表中的列，在设计器中修改字段类型后保存。
OB设计器中修改字段名，将字段修改为文本类型后保存。
OC设计器只需修改字段为文本类型即可，数据库会自动替换为对应类型。

Q15.单选题2分）配置节点进入和离开插件后，流程正向流转执行时会调用哪个方法

OA calcuserld
OBhasTrueCondition
OCnotify
ODnotifyByWithdraw

Q16.单选题（2分）界面规则的触发时机不包含以下哪一种（）。

OA单据创建时
OB单据初始化时
OC单拓值更新时
OD单据关闭时

Q17.单选题（2分）如果后台给一个单据生成不断号编码需要调用CodeRuleServiceHelper的哪个方法最合适

OA readNumber
○B checkNumber
OCrecycleNumber
ODgetNumber

Q18.单选题（2分）下列关于编码规则的表述不正确的是：

OA表单需在设计器中先启用编码规则，才能在编码规则树中找到
OB编码规则有各种分段属性，可以灵活使用
OC业务单石获取编码规则的时候，系统会根据设置的受控组织进行校验
OD骗码规则的适用条件需要从开发平台进去配置

Q19.单选题（2分）关于报表开发描述错误的是

○A报表插件分为表单插件和取数插件
OB取数插件中getColumns方法用于重新设置列信息
OC取数插件中query方法用于设置查询条件
OD取数插件中gerQueryParam用于返回查询结果集

Q20.单选题（2分）通过设置哪种参数类型可以满足如下需求场景：采购服务中，团公司下有的子公司订货可以进行超额，有的子公司不允许超额。

OA单据参数
○B用户选项参数
OC列表控制参数
○D应用参致

Q21.多选题（3分）苍穹提供了多种类型，支持针对用户不同级别不同场景下的参数配置功能，哪些参数类型需要发布到参数发布平台启用才能生效？

OA公共参数
OB应用参数
OC单据类型参数
OD列表控制参数

Q22.多选题（3分）基础资料带组织模板相较基础资料模板的区别在于；

OA多了“组织”字般
OB数端之间没有父子关系
C支持按姐织隔离数据
OD项加控制策脂字段

Q23.多选题（3分）页面缓存接口使用方法正确的是？

OA页面综存接口：kd.bos.form.lPagecache
OB取当前页面的矮存字段：this.getPageCache0.get（&quot;key&#39;）
OC获取父页面统存字段：this.getView0.getParentCache0.get（&quot;key）
OD页面字段螺存：this.getPageCache0.put（&quot;newBookld&quot;，‘Book-0001）

Q24.多选题题（3分）下面哪些是轻分析数据分析的功能特性

OA拖拽分析
OB数据筛选
OC查看明细
OD导出

Q25.多选题题（3分）设计报表的主要内容包括

OA配置数据源
OB配置报表列表字段
OC配置过滤条件
OD实现数据存储

Q26.多选题（3分）以下哪些是金螺云苍弯套打设计的特点？

OA基于实体模型
OBWeb化的模板设计器
OC支持插件定制
ODJAVA在线调试

Q27.多选题（3分）单指设计中可以选择的主键类型有（）.

OA整型
OB字符串
OC浮点型

Q28.多选题（3分）以下哪些场景可以用后台任务开发实现

OA需要定时执行业务逻辅单元
OB固定时间执行的特殊功能
OC系统定时集成数据同步
OD自动执行的调度任务

Q29.单选题]（3分）业务上的单据类型（例如：付款单上的付款类型），选用基础资料控件而不用下拉列表控件来实现，下面给出的依据正确的是。

OA类型在多种单据上会波引用
OB类型需要频繁扩展
OC下拉的类型不多
OD会在工作流中被使用

Q30.多选题]（3分）在编码规则列表中能选到单据的前提是

OA单据的业务控制中开启编码规则选项
OB启用单据所在的应用
OC需要导入编码规则
OD需要先导入云

Q31.判断题]2分）配置转换路线的关联实体需要在目标单据配置关联配置

○对○错

Q32.判断题2分）对应用户在业务平台没有朋除权限的，可通过调用API接口服务绕过权限校验

○对O错

Q33.判断题（2分）控件如果设置为“隐藏元素”在插件中将无法访问，一般情况下通过设置控件可见性来实现界面不可见

○对O错

Q34.判断题（2分）单据头和单据体都可以通过配置模板来实现单独引入、引出数据的功能。

○对O错

Q35.判断题2分）为了提升运算速度，计算逻辑应尽量用存储过程实现

○对O错

Q36.判断题（2分）普通用户被授权为全功能用户后，能给其他用户授权

○对O错

Q37.判断题（2分）基础资料基于单据，继承了动态表单的全部特性

○对O错

Q38.判断题（2分）应用是整个业务云进行分类管理的根本（侦面、功能），这种说法是否正确

O对O错

Q39.判断题（2分）动态表单是最基本的交互界面，移动端表单、单据、基础资料。报表，都是基于动态表单，表单的视图模型、数据模型、插件模型等，会被这些业务对象继承扩展

○对O错

Q40.判断题（2分）通过对应用和单靠的扩展，用户可以于标准产品打造完全个性化的内容，这些扩展后的内容都是按相户严格隔离的，多个租户之问互不影响

O对O猫

Q41.判断题（2分）以下代码finally中只需要对m关闭

DataSets=QueryServiceHelper.queryDataSet..….）.//获取供应商数据线DataSet p=QueryServiceHelper queryDataSet（..….
DataSet m=s.join（p，JoinType.INNER）.on（&#39;createorg&quot;，&quot;id&quot;），.select...…）.finish0；try{
for（Rowr:m）
]finally（

○对O播

Q42.判断题（2分）如果遇到复杂的SQL使用DBEngine 直接写SQL查询

○对O错

Q43.判断题（2分）用户直接授权时必须先配置功能权限，才能配置字段和数据权限

○对O错

Q44.判断题（2分）移动轻应用支持将可视化结果分享到云之家群组，群组用户可自由分享、查阅、评论和沟通数据内容。

○对O错

Q45.判断题（2分）编码规则设置适用条件后，只有满足对应的适用条件才会按照配置的编码规则编码。

○对O错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,6);function r(a,c){return n(),e("div",null,[s(" more "),v])}const m=i(d,[["render",r],["__file","161-苍穹考试题.html.vue"]]);export{m as default};
