import{_ as l,X as n,Y as a,a1 as r,Z as e,$ as i,a2 as s,a0 as c,F as d}from"./framework-68dd73a2.js";const u="/blog/assets/Kingdee_50_1.png",o={},b={id:"_50-金蝶云苍穹之数据服务-md",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#_50-金蝶云苍穹之数据服务-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--50--db9dnm51sg26aqmdiseq80ebft8ymwy6a.md",target:"_blank",rel:"noopener noreferrer"},m=c(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="orm概述" tabindex="-1"><a class="header-anchor" href="#orm概述" aria-hidden="true">#</a> ORM概述</h3><ul><li>什么是ORM？</li></ul><blockquote><p>对象关系映射(Object Relation Mappint)的简称，把实体模型映射到数据库中，提供对象的操作，在数据库中则体现为CRUD。</p></blockquote><ul><li><p>市面上有哪些开源ORM框架？</p><ul><li><p>Hibernate</p></li><li><p>Mybatis</p></li><li><p>JPA</p></li></ul></li><li><p>为什么需要ORM？</p><ul><li><p>多数库访问的需要: 应用主库、基础资料、工作流、日志、权限</p></li><li><p>自动处理繁琐的关联操作: 分录、子分录、多语言表、扩展表(动态)、多选基础资料</p></li><li><p>基于表单实体元数据，更符合业务逻辑</p></li><li><p>集成计算框架接口，可便捷地使用复杂的计算、大数据量的访问</p></li></ul></li></ul><h3 id="businessdataservicehelper-业务操作" tabindex="-1"><a class="header-anchor" href="#businessdataservicehelper-业务操作" aria-hidden="true">#</a> BusinessDataServiceHelper(业务操作)</h3><ul><li>创建对象</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static DynamicObject newDynamicObject(String entityName)
{
    //创建单据对象
    DynamicObject bill = BusinessDataServiceHelper.newDynamicObject(&quot;demo_purapplybill&quot;);
    //设置单据属性
    bill.set(&quot;billno&quot;,System.currentTimeMillis());
    bill.set(&quot;billstatus&quot;,&#39;A&#39;);
    bill.set(&quot;org&quot;,RequestContext.get().getOrgId());
    bill.set(&quot;creator&quot;,RequestContext.get().getUserId());

    //获取单据体集合
    DynamicObjectCollection entrys = bill.getDynamicObjectCollection(&quot;entryentity&quot;);
    //获取单据体Type
    DynamicObjectType type = entrys.getDynamicObjectType();
    //根据Type创建单据体对象
    DynamicObject entry = new DynamicObject(type);
    //设置单据体属性
    entry.set(&quot;price&quot;,12);
    entry.set(&quot;qty&quot;,24);
    //添加到单据体集合
    entrys.add(entry);
    //保存
    SaveServiceHelper.saveOperate(&quot;demo_purapplybill&quot;,new DynamicObject[] {bill});
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>从数据库中加载单个对象</p></li><li><p>loadSingle</p><ul><li>public static DynamicObject loadSingle(Object pk, DynamicObjectType type)</li><li>public static DynamicObject loadSingle(Object pk, String entityName)</li><li>public static DynamicObject loadSingle(Object pk, String entityName, String selectProperties)</li><li>public static DynamicObject loadSingle(String entityName, String selectProperties, QFilter[] filters)</li></ul></li><li><p>从缓存中加载单个对象</p></li><li><p>loadSingleFromCache</p><ul><li>public static DynamicObject loadSingleFromCache(Object pk, String entityName)</li><li>public static DynamicObject loadSingleFromCache(String entityName, QFilter[] filters)</li><li>public static DynamicObject loadSingleFromCache(Object pk, String entityName, String selectProperties)</li><li>public static DynamicObject loadSingleFromCache(String entityName, String selectProperties, QFilter[] filters)</li><li>public static DynamicObject loadSingleFromCache(Object pk, DynamicObjectType type)</li></ul></li><li><p>Load(从数据库加载多个对象)</p><ul><li>public static Object[] load(Object[] pkArray, IDataEntityType type)</li><li>public static DynamicObject[] load(Object[] pkArray, DynamicObjectType type)</li><li>public static DynamicObject[] load(String entityName, String selectProperties, QFilter[] filters)</li><li>public static DynamicObject[] load(String entityName, String selectProperties, QFilter[] filters, String orderBy)</li><li>public static DynamicObject[] load(String entityName, String selectProperties, QFilter[] filters, String orderBy, int top)</li><li>public static DynamicObject[] load(String entityName, String selectProperties, QFilter[] filters, String orderBy, int pageIndex, int pagesize)</li></ul></li><li><p>loadFromCache（从缓存中加载多个对象）</p><ul><li>public static Map&lt;Object, DynamicObject&gt; loadFromCache(Object[] pkArray, DynamicObjectType type)</li><li>public static Map&lt;Object, DynamicObject&gt; loadFromCache(Object[] pkArray, String entityName)</li><li>public static Map&lt;Object, DynamicObject&gt; loadFromCache(String entityName, String selectProperties, QFilter[] filters)</li><li>public static Map&lt;Object, DynamicObject&gt; loadFromCache(String entityName, String selectProperties, QFilter[] filters, String orderBy)</li><li>public static Map&lt;Object, DynamicObject&gt; loadFromCache(String entityName, QFilter[] filters)</li><li>public static Map&lt;Object, DynamicObject&gt; loadFromCache(DynamicObjectType type, QFilter[] filters)</li></ul></li><li><p>Qfilter-查询条件构造器</p></li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>QFilter f1 = new QFilter(&quot;name&quot;,&quot;like&quot;,&quot;kingdee%&quot;);

//表达式比较(最后一个参数=true)
QFilter f2 = new QFilter(&quot;creator.id&quot;,&quot;=&quot;,&quot;auditor.id&quot;,true);

//等同于f2
QFilter f3 = QFilter.of(&quot;creator.id=auditor.id&quot;);

// 值比较务必用？否则认为是比较表达式。
QFilter f4 = QFilter.of(&quot;period.id=? and accountView.number=?&quot;,324324132423L,&quot;1002&quot;);

//链式(qq)：在一个QFilter链里，不能存在跨对象的or关系，否则无法拆分sql进行查询。
QFilter q1 = QFilter.of(&quot;name=?&quot;,&quot;kingdee&quot;);
QFilter q2 = QFilter.of(&quot;number=?&quot;,&quot;xx&quot;);
QFilter q3 = QFilter.of(&quot;bizDate&gt;=?&quot;,new Date());
List&lt;long&gt; idList = new ArrayList&lt;&gt;();

//add to list ...
QFilter q4 = QFilter.of(&quot;id in(?)&quot;,idList);
QFilter qq = q1.and(q2).or((q3.and(q4)));

//是否为空
String property = &quot;name&quot;;
//等同于QFilter.of(&quot;name is not null&quot;);
QFilter t1 = QFilter.isNotNull(property);
//等同于QFilter.of(&quot;name is null&quot;);
QFilter t2 = QFilter.isNull(property);

// 是否存在：参数务必是对象的主键
String pk = &quot;creator.id&quot;;
QFilter t3 = QFilter.exists(pk);
QFilter t4 = QFilter.notExists(pk);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="saveservicehelper-数据保存" tabindex="-1"><a class="header-anchor" href="#saveservicehelper-数据保存" aria-hidden="true">#</a> SaveServiceHelper(数据保存)</h3><ul><li><p>保存对象到数据库</p><ul><li>public static Object[] save(IDataEntityType type, Object[] dataEntities)</li><li>public static Object[] save(DynamicObject[] dataEntities)</li></ul></li><li><p>调用业务对象的保存操作，会触发操作校验，操作插件等服务</p><ul><li>public static OperationResult saveOperate(String entityNumber, DynamicObject[] dataEntities)</li><li>public static OperationResult saveOperate(String entityNumber, DynamicObject[] dataEntities, OperateOption option)</li><li>public static OperationResult saveOperate(String operationKey, String entityNumber, DynamicObject[] dataEntities)</li><li>public static OperationResult saveOperate(String operationKey, String entityNumber, DynamicObject[] dataEntities, OperateOption option)</li></ul></li></ul><h3 id="deleteservicehelper-数据删除" tabindex="-1"><a class="header-anchor" href="#deleteservicehelper-数据删除" aria-hidden="true">#</a> DeleteServiceHelper(数据删除)</h3><ul><li>直接从数据库删除 <ul><li>public static void delete(IDataEntityType type, Object[] pks)</li><li>public static int delete(String entityName, QFilter[] qFilters)</li></ul></li><li>调用业务对象的删除操作，会触发删除校验，插件等服务 <ul><li>public OperationResult deleteOperate(String operationKey, String entityName, Object[] pks)</li><li>public OperationResult deleteOperate(String operationKey, String entityName, Object[] pks, OperateOption option)</li><li>public OperationResult deleteOperate(String entityName, Object[] pks)</li><li>public OperationResult deleteOperate(String entityName, Object[] pks, OperateOption option)</li></ul></li></ul><h3 id="queryservicehelper-数据查询" tabindex="-1"><a class="header-anchor" href="#queryservicehelper-数据查询" aria-hidden="true">#</a> QueryServiceHelper(数据查询)</h3><ul><li><p>查询平铺对象</p><ul><li>public static DynamicObjectCollection query(String entityName, String selectFields, QFilter[] filters)</li><li>public static DynamicObjectCollection query(String entityName, String selectFields, QFilter[] filters, String orderBys)</li><li>public static DynamicObjectCollection query(String entityName, String selectFields, QFilter[] filters, String orderBys, int top)</li><li>public static DynamicObjectCollection query(String algoKey, String entityName, String selectFields, QFilter[] filters, String orderBys)</li><li>public static DynamicObjectCollection query(String algoKey, String entityName, String selectFields,QFilter[] filters, String orderBys, int top)</li></ul></li><li><p>eg :</p></li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>BillList list = this.getControl(&quot;billlistap&quot;);
String entityName = list.getEntityType().getName();
QFilter filter = QFilter.of(&quot;billno&quot;,QCP.equals,&quot;1569136331894&quot;);
DynamicObjectCollection cols = QueryServiceHelper.query(entityName, &quot;id,billno,entryentity.price price&quot;, filter.toArray());
this.getView().showMessage(cols.get(0).getString(&quot;price&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+ 查询单个对象
  + public static DynamicObject queryOne(String entityName, String selectFields, QFilter[] filters)
+ 查询数据集(类似JDBCResultSet)
  + public static DataSet queryDataSet(String algoKey, String entityName, String selectFields, QFilter[] filters,String orderBys)
  + public static DataSet queryDataSet(String algoKey, String entityName, String selectFields, QFilter[] filters,String orderBys, int top)
+ 查询主键
  + public static List&lt;Object&gt; queryPrimaryKeys(String entityName, QFilter[] filters, String orderBys, int top)
  + public static List&lt;Object&gt; queryPrimaryKeys(String algoKey, String entityName, QFilter[] filters, String orderBys,int top)
+ 查询是否存在
  + public static boolean exists(String entityName, Object pkId)
  + public static boolean exists(String entityName, QFilter[] qFilters)
+ 通过全文索引查询单据编码,要求业务对象必须有BillNo字段
  + public static List&lt;BillNoDto&gt; getAllBillNo(String searchKey, int top)

+ kd.bos.db.DB-直接执行SQL的类
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> public static List&lt;String&gt; getPrimaryKeys(DBRoute dbRoute, String table)
 public static &lt;T&gt; T query(DBRoute dbRoute, String sql, ResultSetHandler&lt;T&gt; rh)
 public static &lt;T&gt; T query(DBRoute dbRoute, String sql, Object[] params, ResultSetHandler&lt;T&gt; rh)
 public static DataSet queryDataSet(String algoKey, DBRoute dbRoute, String sql)
 public static DataSet queryDataSet(String algoKey, DBRoute dbRoute, String sql, Object[] params)
 public static List&lt;ExtractQuery&gt; extractQuery(DBRoute dbRoute, String sql, Object[] params)
 public static int update(DBRoute dbRoute, String sql)
 public static int update(DBRoute dbRoute, String sql, Object[] params)
 public static boolean execute(DBRoute dbRoute, String sql)
 public static boolean execute(DBRoute dbRoute, String sql, Object[] params)
 public static int[] executeBatch(DBRoute dbRoute, String sql, List&lt;Object[]&gt; paramsList)
 public static PreparedBatch prepareBatch(DBRoute dbRoute, String sql)
 public static PreparedStatement prepareStatement(DBRoute dbRoute, String sql)
 public static boolean exitsTable(DBRoute dbRoute, String tableName)
 public static boolean exitsIndex(DBRoute dbRoute, String tableName, String indexName)
 kd.bos.db.DBRoute
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>什么是DBRoute？</p></blockquote><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static final DBRoute other = new DBRoute(&quot;&quot;);
public static final DBRoute basedata = new DBRoute(&quot;basedata&quot;);
public static final DBRoute base;
public static final DBRoute main;
public static final DBRoute workflow;
public static final DBRoute log;
public static final DBRoute permission;
public static final DBRoute qing;
public static DBRoute of(String routeKey) {
routeKey = routeKey == null ? &quot;&quot; : routeKey.trim().toLowerCase();
DBRoute route = (DBRoute) sharedDBRouteMap.get(routeKey);
if (route == null) {
route = (DBRoute) sharedDBRouteMap.computeIfAbsent(routeKey, (key) -&gt; { 
return new DBRoute(key);
});
}
return route;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如何在控制台打印SQL</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class DebugServer {
……………………
//设置自定义SQL日志输出
DB.setSqlLogger(new SqlLogger(){
@Override
public void log(String sql) {
System.out.println(sql);
}
});
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>金蝶云苍穹之ORM介绍</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p></div>`,28);function g(y,S){const t=d("ExternalLinkIcon");return n(),a("div",null,[r(" more "),e("h1",b,[v,i(),e("a",p,[i("50-金蝶云苍穹之数据服务.md"),s(t)])]),m])}const O=l(o,[["render",g],["__file","kingdee50.html.vue"]]);export{O as default};
