import{_ as i,X as r,Y as a,a1 as n,Z as e,$ as t,a2 as l,a0 as s,F as c}from"./framework-68dd73a2.js";const o="/blog/assets/Kingdee_41_1.png",v="/blog/assets/Kingdee_41_2.png",u="/blog/assets/Kingdee_41_3.png",b={},m={id:"_41-金蝶云苍穹插件开发-md",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_41-金蝶云苍穹插件开发-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--41--dj9d3rs4vu6u9zifm5ceor5wl5i4a.md",target:"_blank",rel:"noopener noreferrer"},g=s('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h4 id="选择插件基类" tabindex="-1"><a class="header-anchor" href="#选择插件基类" aria-hidden="true">#</a> 选择插件基类</h4><table><thead><tr><th>页面类型</th><th>应用场景</th><th>插件基类</th></tr></thead><tbody><tr><td>动态表单</td><td>PC端界面</td><td>AbstractFormPlugin</td></tr><tr><td></td><td>移动端界面</td><td>AbstractMobFormPlugin</td></tr><tr><td>单据/基础资料</td><td>单据界面</td><td>AbstractBillPlugIn</td></tr><tr><td></td><td>标准单据列表</td><td>AbstractListPlugin</td></tr><tr><td></td><td>左树右表单据列表</td><td>AbstractTreeListPlugin</td></tr><tr><td></td><td>树型基础资料列表</td><td>StandardTreeListPlugin</td></tr><tr><td></td><td>移动端单据列表</td><td>AbstractMobListPlugin</td></tr><tr><td></td><td>单据操作</td><td>AbstractOperationServicePlugIn</td></tr><tr><td></td><td>单据转换</td><td>AbstractConvertPlugIn</td></tr><tr><td>报表插件</td><td>报表界面插件</td><td>AbstractReportFormPlugin</td></tr><tr><td></td><td>报表查询插件</td><td>AbstractReportListDataPlugin</td></tr><tr><td>工作流</td><td>工作流参与人插件</td><td>IWorkflowPlugin</td></tr><tr><td></td><td>工作流服务插件</td><td>IWorkflowPlugin</td></tr><tr><td></td><td>工作流条件插件</td><td>IWorkflowPlugin</td></tr><tr><td>开放接口</td><td>自定义开放接口插件</td><td>IBillWebApiPlugin</td></tr><tr><td>打印插件</td><td>打印数据处理插件</td><td>AbstractPrintServicePlugin</td></tr><tr><td>引入插件</td><td>引入数据加工</td><td>IImportPlugin</td></tr></tbody></table><h4 id="插件事件" tabindex="-1"><a class="header-anchor" href="#插件事件" aria-hidden="true">#</a> 插件事件</h4><table><thead><tr><th>分类</th><th>序号</th><th>事件</th><th>触发时机</th></tr></thead><tbody><tr><td>界面显示前</td><td>1</td><td>setPluginName</td><td>显示界面前，准备构建界面显示参数之前，创建插件后，触 发此事件</td></tr><tr><td></td><td>2</td><td>preOpenForm</td><td>显示界面前，准备构建界面显示参数之前，触发此事件</td></tr><tr><td></td><td>3</td><td>loadCustomControlMetas</td><td>显示界面前，构建界面显示参数时，触发此事件 界面初始化</td></tr><tr><td></td><td>4</td><td>setView</td><td>表单视图模型初始化，创建插件时，调用此方法，向插件传 入表单视图模型IFormView实例；</td></tr><tr><td></td><td>5</td><td>initialize</td><td>表单视图模型初始化，创建插件后，触发此事件</td></tr><tr><td></td><td>6</td><td>registerListener</td><td>用户与界面上的控件交互时，触发此事件</td></tr><tr><td></td><td>7</td><td>getEntityType</td><td>表单基于实体模型，创建数据包之前，触发此事件</td></tr><tr><td></td><td>8</td><td>createNewData</td><td>界面初始化或刷新，开始新建数据包时触发此事件</td></tr><tr><td></td><td>9</td><td>afterCreateNewData</td><td>界面初始化或刷新，新建数据包完毕后，触发此事件</td></tr><tr><td></td><td>10</td><td>beforeBindData</td><td>界面数据包构建完毕，开始生成指令，刷新前端字段值、控 件状态之前，触发此事件</td></tr><tr><td></td><td>11</td><td>afterBindData</td><td>界面数据包构建完毕，生成指令，刷新前端字段值、控件状 态之后，触发此事件</td></tr><tr><td>用户交互</td><td>12</td><td>beforeItemClick</td><td>用户点击界面菜单按钮时，执行绑定的操作前，触发此事件</td></tr><tr><td></td><td>13</td><td>itemClick</td><td>用户点击界面菜单按钮时触发此事件</td></tr><tr><td></td><td>14</td><td>beforeDoOperation</td><td>用户点击按钮、菜单，执行绑定的操作前，触发此事件</td></tr><tr><td></td><td>15</td><td>afterDoOperation</td><td>用户点击按钮、菜单，执行完绑定的操作后，不论成功与否， 均会触发此事件</td></tr><tr><td></td><td>16</td><td>confirmCallBack</td><td>前端交互提示确认后，通知插件进行后续处理</td></tr><tr><td></td><td>17</td><td>closedCallBack</td><td>子界面关闭时，如果回调函数由父界面处理，则会触发父界 面的此事</td></tr><tr><td></td><td>18</td><td>beforeClick</td><td>用户点击按钮，标签，执行绑定的操作前，触发此事件</td></tr><tr><td></td><td>19</td><td>click</td><td>用户点击界面按钮或者标签时触发此事件</td></tr><tr><td></td><td>18</td><td>flexBeforeClosed</td><td>弹性域维护界面关闭时，触发父界面此事件</td></tr><tr><td></td><td>19</td><td>onGetControl</td><td>在有代码尝试获取控件的编程模型时，触发此事件</td></tr><tr><td></td><td>20</td><td>customEvent</td><td>触发自定义控件的定制事件</td></tr><tr><td></td><td>21</td><td>TimerElapsed</td><td>定时触发此事件</td></tr><tr><td></td><td>22</td><td>afterDeleteRow</td><td>删除单据体行后触发此事件</td></tr><tr><td></td><td>23</td><td>afterAddRow</td><td>新增单据体行后触发此事件</td></tr><tr><td></td><td>24</td><td>propertyChanged</td><td>字段值更新后触发此事件</td></tr><tr><td></td><td>25</td><td>beforeF7Select</td><td>F7字段打开时触发 界面关闭</td></tr><tr><td></td><td>26</td><td>beforeClosed</td><td>界面关闭之前触发此事件</td></tr><tr><td></td><td>27</td><td>destory</td><td>界面关闭后，释放资源时，触发此事件</td></tr><tr><td></td><td>28</td><td>pageRelease</td><td>界面关闭后，释放资源时，触发此事件</td></tr></tbody></table><h4 id="表单插件及其子类" tabindex="-1"><a class="header-anchor" href="#表单插件及其子类" aria-hidden="true">#</a> 表单插件及其子类</h4><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="表单插件-abstractformplugin常用事件" tabindex="-1"><a class="header-anchor" href="#表单插件-abstractformplugin常用事件" aria-hidden="true">#</a> 表单插件-AbstractFormPlugin常用事件</h4><blockquote><p>preOpenForm</p></blockquote><blockquote><p>afterCreateNewData</p></blockquote><blockquote><p>afterBindData</p></blockquote><blockquote><p>registerListener</p></blockquote><blockquote><p>beforeClick</p></blockquote><blockquote><p>click</p></blockquote><blockquote><p>beforeItemClick</p></blockquote><blockquote><p>ItemClick</p></blockquote><blockquote><p>beforeDoOperation</p></blockquote><blockquote><p>afterDoOperation</p></blockquote><blockquote><p>confirmCallBack</p></blockquote><blockquote><p>closedCallBack</p></blockquote><blockquote><p>propertyChanged</p></blockquote><h5 id="preopenform" tabindex="-1"><a class="header-anchor" href="#preopenform" aria-hidden="true">#</a> preOpenForm</h5><blockquote><p>触发时机：系统收到showForm指令，显示界面前，准备构建界面显示参数时，触发此事件。 此事件触发时，新界面还没有显示出来，可以在此事件，取消界面的显示，或者修改显示参数。</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class PreOpenForm extends AbstractFormPlugin {
    @Override
    public void preOpenForm(PreOpenFormEventArgs e) {
        super.preOpenForm(e);
// TODO : 可以在此取消界面显示
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="aftercreatenewdata" tabindex="-1"><a class="header-anchor" href="#aftercreatenewdata" aria-hidden="true">#</a> afterCreateNewData</h5><blockquote><p>触发时机：界面初始化或刷新，新建表单数据包成功，并给字段填写了默认值之后，触发此事件；</p></blockquote><blockquote><p>插件可以在此事件，重设字段的默认值。部分字段的默认值难以通过设计器配置出来，如需要计算的值、根据系统 参数选项决定的值，必须写插件实现</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class AfterCreateNewData extends AbstractFormPlugin {
    @Override
    public void afterCreateNewData(EventObject e) {
        // TODO 在此添加业务逻辑
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="afterbinddata" tabindex="-1"><a class="header-anchor" href="#afterbinddata" aria-hidden="true">#</a> afterBindData</h5><blockquote><p>触发时机：界面数据包构建完毕，生成指令，刷新前端字段值、控件状态之后，触发此事件； 插件可以在此事件，根据各字段值数据，重新设置控件、字段的可用、可见性等。 不要在此事件，修改字段值</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
public class AfterBindData extends AbstractFormPlugin {
    @Override
    public void afterBindData(EventObject e) {
        super.afterBindData(e);
        // TODO 在此添加业务逻辑
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="registerlistener" tabindex="-1"><a class="header-anchor" href="#registerlistener" aria-hidden="true">#</a> registerListener</h5><blockquote><p>触发时机：用户与界面上的控件进行交互时，即会触发此事件。建议在此事件，侦听各个控件的插件事件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class RegisterListener extends AbstractFormPlugin {
    @Override
    public void registerListener(EventObject e) {
        // TODO 侦听控件的插件事件
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="beforeclick" tabindex="-1"><a class="header-anchor" href="#beforeclick" aria-hidden="true">#</a> beforeClick</h5><blockquote><p>触发时机：用户点击按钮或者标签等控件时，触发此事件；插件可以在此事件，取消后续点击处理，不响应按钮绑定的操作；</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class BeforeClick extends AbstractFormPlugin {
    @Override
    public void beforeClick(BeforeClickEvent evt) {
        super.beforeClick(evt);
        // TODO Auto-generated method stub 
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="click" tabindex="-1"><a class="header-anchor" href="#click" aria-hidden="true">#</a> click</h5><blockquote><p>触发时机：用户点击按钮时，触发此事件；插件可以在此响应点击事件， 实现定制的业务功能。 特别说明： 如果在beforeClick事件中，取消了后续操作，则不会触发本事件；</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Click extends AbstractFormPlugin
{
  @Override 
  public void click(EventObject evt){}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="beforeitemclick" tabindex="-1"><a class="header-anchor" href="#beforeitemclick" aria-hidden="true">#</a> beforeItemClick</h5><blockquote><p>触发时机：用户点击菜单按钮后，在执行按钮绑定的操作前，触发此事件； 插件可以在此事件，取消菜单绑定的操作；</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class BeforeItemClick extends AbstractFormPlugin
{
    private final static String KEY_MAINBAR = &quot;tbar_main&quot;;
    private final static String KEY_BARITEM_NEW = &quot;baritem_new&quot;;
  @Override 
  public void registerListener(EventObject e)
     {
        super.registerListener(e); 
    // 侦听主菜单按钮点击事件 
    this.addItemClickListeners(KEY_MAINBAR);
  }
  @Override 
  public void beforeItemClick(BeforeItemClickEvent evt) { 
    if (StringUtils.equals(KEY_BARITEM_NEW, evt.getItemKey()))
    { 
      // TODO 在此添加业务逻辑 
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="itemclick" tabindex="-1"><a class="header-anchor" href="#itemclick" aria-hidden="true">#</a> ItemClick</h5><blockquote><p>触发时机:用户点击菜单项时，触发此事件；插件可以在此响应自定义菜单项的点击处理。</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class ItemClick extends AbstractFormPlugin
{ 
  //工具栏的标识 
  private final static String KEY_MAINBAR = &quot;tbar_main&quot;; 
  //按钮的标识 
  private final static String KEY_BARITEM_NEW = &quot;baritem_new&quot;; 
  @Override 
  public void registerListener(EventObject e) { 
    super.registerListener(e); 
    // 侦听主菜单按钮点击事件 
    this.addItemClickListeners(KEY_MAINBAR); 
  }
  @Override 
  public void itemClick(ItemClickEvent evt) { 
    super.itemClick(evt); 
    if (StringUtils.equals(KEY_BARITEM_NEW, evt.getItemKey()))
    { 
      // TODO 在此添加业务逻辑 
    } 
  } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="beforedooperation" tabindex="-1"><a class="header-anchor" href="#beforedooperation" aria-hidden="true">#</a> beforeDoOperation</h5><blockquote><p>触发时机:用户点击按钮、菜单，执行绑定的操作逻辑前，触发此事件； 插件可以在此事件：</p></blockquote><ol><li><p>提示确认消息；</p></li><li><p>校验数据，取消操作的执行；</p></li><li><p>传递给自定义操作参数给操作服务、操作插件；</p></li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class BeforeDoOperation extends AbstractFormPlugin
{
    final static String KEY_OPKEY = &quot;myoperation&quot;;
   @Override
    public void beforeDoOperation(BeforeDoOperationEventArgs args)
    {
        super.beforeDoOperation(args);
        FormOperate formOperate = (FormOperate) args.getSource();
        if(StringUtils.equals(KEY_OPKEY, formOperate.getOperateKey()))
        {
            // TODO 在此添加业务逻辑 
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="afterdooperation" tabindex="-1"><a class="header-anchor" href="#afterdooperation" aria-hidden="true">#</a> afterDoOperation</h5><blockquote><p>触发时机:用户点击按钮、菜单，执行完绑定的操作后，不论成功与否，均会触发此事件；插件可以在此事件，根 据操作结果控制界面</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class AfterDoOperation extends AbstractFormPlugin
{
    final static String KEY_OPKEY = &quot;myoperation&quot;;
    @Override
    public void afterDoOperation(AfterDoOperationEventArgs args)
    {
        super.afterDoOperation(args);
        FormOperate formOperate = (FormOperate) args.getSource();
        if(StringUtils.equals(KEY_OPKEY, formOperate.getOperateKey()) &amp;&amp; args.getOperationResult() != null &amp;&amp; args.getOperationResult().isSuccess())
        {
            // TODO 在此添加业务逻辑 
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="confirmcallback" tabindex="-1"><a class="header-anchor" href="#confirmcallback" aria-hidden="true">#</a> confirmCallBack</h5><blockquote><p>触发时机：用户确认了交互提示信息后，触发此事件，通知插件进行后续处理；插件可以在此事件，了解用户的态 度，决定后续业务逻辑。</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class ConfirmCallBack extends AbstractFormPlugin
{
    private final static String CALLBACKID_MYMESSAGE = &quot;mymessage&quot;;
  @Override 
  public void click(EventObject evt)
    {
        ConfirmCallBackListener confirmCallBacks = new ConfirmCallBackListener(&quot;contentChange&quot;, this);
        String confirmTip = sConfirmMsg + &quot;&quot;;
        this.getView().showConfirm(confirmTip, MessageBoxOptions.OKCancel, ConfirmTypes.Default, confirmCallBacks);
    }

  public void confirmCallBack(MessageBoxClosedEvent messageBoxClosedEvent)
    {
        super.confirmCallBack(messageBoxClosedEvent);
        if(StringUtils.equals(CALLBACKID_MYMESSAGE, messageBoxClosedEvent.getCallBackId()) &amp;&amp; messageBoxClosedEvent.getResult() == MessageBoxResult.Yes)
        {
            // TODO 在此添加业务逻辑
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="closedcallback" tabindex="-1"><a class="header-anchor" href="#closedcallback" aria-hidden="true">#</a> closedCallBack</h5><blockquote><p>触发时机：子界面关闭时，触发父界面的closedCallBack事件；父界面的插件，可以在此事件，接收子界面返回的 数据。</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class ClosedCallBack extends AbstractFormPlugin
{
    private final static String CALLBACKID_MYCALLBACK = &quot;mycallback&quot;;
    @Override 
    public void click(EventObject evt)
    {
        FormShowParameter showParameter = new FormShowParameter();
        showParameter.setFormId(GetValByConditionEdit.FormId_ValByCondition);
        showParameter.setCloseCallBack(new CloseCallBack(plugin, CALLBACKID_MYCALLBACK));
        showParameter.getOpenStyle().setShowType(ShowType.Modal);
        this.getView().showForm(showParameter);
    }
    @Override 
    public void closedCallBack(ClosedCallBackEvent closedCallBackEvent)
        {
            super.closedCallBack(closedCallBackEvent);
            if(StringUtils.equals(closedCallBackEvent.getActionId(), CALLBACKID_MYCALLBACK) &amp;&amp; closedCallBackEvent.getReturnData() != null)
            { 
      // TODO 在此添加业务逻辑 
    } 
  } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="propertychanged" tabindex="-1"><a class="header-anchor" href="#propertychanged" aria-hidden="true">#</a> propertyChanged</h5><blockquote><p>触发时机：表单模型某个字段值改变的时候就会触发此事件。 注意：单据头文本字段，日期字段等基础字段需勾选即时触发值更新，基础资料字段，单据体字段不需要。</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class DemoBillPlugin extends AbstractBillPlugIn
{  
    @Override
    public void propertyChanged(PropertyChangedArgs e)
    {
        //获取到改变的属性名 
        String pname = e.getProperty().getName();
        ChangeData[] changeset = e.getChangeSet();
        Object oldvalue = (Date) changeset[0].getOldValue();
        Object newvalue = (Date) changeset[0].getNewValue();
        //如果是单据体字段还可以获取到行索引
        int index = changeset[0].getRowIndex();
        super.propertyChanged(e);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单据插件-abstractbillplugin" tabindex="-1"><a class="header-anchor" href="#单据插件-abstractbillplugin" aria-hidden="true">#</a> 单据插件-AbstractBillPlugIn</h4><blockquote><p>继承自表单插件，拥有所有表单插件事件，默认注册了工具栏的”tbmain”的 点击事件，新增加了以下事件：</p></blockquote><h5 id="afterloaddata" tabindex="-1"><a class="header-anchor" href="#afterloaddata" aria-hidden="true">#</a> afterLoadData</h5><blockquote><p>事件触发时机:单据界面加载完毕，会根据传入的单据主键值，到数据库加载单据数据包。</p></blockquote><blockquote><p>本事件在单据数据包加载完毕后触发。</p></blockquote><blockquote><p>插件可以在此事件，根据单据的数据决定业务逻辑的执行。</p></blockquote><blockquote><p>afterLoadData事件与afterCreateNewData的差别： 这两个事件的触发时机一样，都是在界面数据包准备完毕之后触发，但数据包来源不同： afterCreateNewData事件的数据包，是全新创建的数据包，适合在此事件调整默认值； afterLoadData事件的数据包，来自于数据库，不建议在此事件修改字段值； 这两个事件，在单据界面加载、刷新过程中，只会触发其中一个（互斥）： 单据界面以新增模式打开，不需要到数据库加载单据，触发afterCreateNewData事件； 单据界面以修改、查看模式打开，需到数据库加载单据，触发afterLoadData事件；</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override 
public void afterLoadData(EventObject e)
{
    super.afterLoadData(e);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列表插件-abstractlistplugin" tabindex="-1"><a class="header-anchor" href="#列表插件-abstractlistplugin" aria-hidden="true">#</a> 列表插件-AbstractListPlugin</h4><blockquote><p>继承自表单插件，并新增了IListPlugin、ListRowClickListener等接口</p></blockquote><table><thead><tr><th>分类</th><th>事件</th><th>触发时机</th></tr></thead><tbody><tr><td>列表初始化</td><td>createTreeListView</td><td>不触发，仅树形列表界面会触发此事件；</td></tr><tr><td></td><td>filterContainerInit</td><td>初始化过滤控件时，触发此事件把配置的过滤字段传递给插件</td></tr><tr><td></td><td>beforeCreateListColumns</td><td>在构建列表列之前触发，传入当前待创建的列分组、列</td></tr><tr><td></td><td>beforeCreateListDataProvider</td><td>列表初始化，构建列表取数器前触发此事件</td></tr><tr><td></td><td>setFilter</td><td>列表在生成了过滤条件之后，准备查询数据之前，触发此事件</td></tr><tr><td>用户交互</td><td>filterContainerSearchClick</td><td>用户修改了快捷过滤、常用过滤条件，或者点击过滤面板确定按钮，触发此事件</td></tr><tr><td></td><td>beforeItemClick</td><td>用户点击列表主菜单按钮时，触发此事件</td></tr><tr><td></td><td>itemClick</td><td>用户点击列表主菜单按钮时，触发此事件</td></tr><tr><td></td><td>billListHyperLinkClick</td><td>点击超链接单元格时，触发此事件</td></tr><tr><td></td><td>beforeShowBill</td><td>执行新建、修改、查看等操作，打开单据维护界面之前，触发此事件</td></tr><tr><td></td><td>billClosedCallBack</td><td>列表打开的单据维护界面关闭后返回时，触发此事件</td></tr><tr><td></td><td>listRowClick</td><td>列表行点击时，触发此事件</td></tr><tr><td></td><td>listRowDoubleClick</td><td>列表行双击时，触发此事件</td></tr></tbody></table><h5 id="filtercontainerinit" tabindex="-1"><a class="header-anchor" href="#filtercontainerinit" aria-hidden="true">#</a> filterContainerInit</h5><blockquote><p>本事件，有两次触发时机： 1. 列表界面，初始化过滤面板时，触发此事件； 2. 用户在过滤面板点击搜索时，也会重新初始化过滤面板，触发此事件； 插件可以在此事件，获取到列表过滤面板中，快捷过滤、常用过滤、方案过滤所包含的过 滤字段信息，并对这些过滤字段进行调整； 特别注意： 本事件会多次触发，如果逻辑只能在界面初始化时执行一次，需要增加标志变量，进行区分；</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override 
public void filterContainerInit(FilterContainerInitArgs e)
    {
        List &lt; FilterColumn &gt; filters = e.getCommonFilterColumns();
        CommonFilterColumn comfilter = (CommonFilterColumn) filters.get(1);
        comfilter.setDefaultValue(&quot;A&quot;); 
        //super.filterContainerInit(e); 
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="beforecreatelistcolumns" tabindex="-1"><a class="header-anchor" href="#beforecreatelistcolumns" aria-hidden="true">#</a> beforeCreateListColumns</h5><blockquote><p>事件触发时机 刷新单据列表，构建单据列表显示的列时，触发此事件，传入在设计器中已配置的列集合； 插件可以在此事件中，根据页面参数、过滤条件，动态添加、删除单据列表的显示列；</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override 
public void beforeCreateListColumns(BeforeCreateListColumnsArgs e)
{
    List &lt; IListColumn &gt; columns = e.getListColumns();
    ListColumn colUser = this.createListColumn(&quot;creator.name&quot;, &quot;创建人&quot;);
    columns.add(colUser);
    super.beforeCreateListColumns(e);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="beforecreatelistdataprovider" tabindex="-1"><a class="header-anchor" href="#beforecreatelistdataprovider" aria-hidden="true">#</a> beforeCreateListDataProvider</h5><blockquote><p>事件触发时机 构建列表取数器之前，触发此事件； 插件可以在此事件，构建自定义的列表取数器，实现自主取数；</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override 
public void beforeCreateListDataProvider(BeforeCreateListDataProviderArgs e)
{
    e.setListDataProvider(new ListDataProvider()
    {
      @Override 
      public DynamicObjectCollection getData(int arg0, int arg1)
        {
            return super.getData(arg0, arg1);
        }
    });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="setfilter" tabindex="-1"><a class="header-anchor" href="#setfilter" aria-hidden="true">#</a> setFilter</h5><blockquote><p>事件触发时机 单据列表控件，在构建好取数条件，准备重新取数之前，触发此事件； 插件可以调整条件内容、追加条件，从而影响列表取数；</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override 
public void setFilter(SetFilterEvent e)
{
    QFilter cfilter = new QFilter(&quot;billstatus&quot;, QCP.equals, &quot;B&quot;);
    e.addCustomQFilter(cfilter);
    super.setFilter(e);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="filtercontainersearchclick" tabindex="-1"><a class="header-anchor" href="#filtercontainersearchclick" aria-hidden="true">#</a> filterContainerSearchClick</h5><blockquote><p>用户在过滤条件面版上改变过滤条件，触发此事件： 插件可以在此事件，调整用户在过滤面板上的条件配置，后续系统会根据调整后的条件配 置，生成取数条件；</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override 
public void filterContainerSearchClick(FilterContainerSearchClickArgs e)
{ 
    //获取全部过滤条件，按快捷过滤、常用过滤，方案过滤分开 
    Map&lt;String, List&lt;Map&lt;String, List&lt;Object&gt;&gt;&gt;&gt; filterValues = e.getFilterValues();
    System.out.println(filterValues);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="billlisthyperlinkclick" tabindex="-1"><a class="header-anchor" href="#billlisthyperlinkclick" aria-hidden="true">#</a> billListHyperLinkClick</h5><blockquote><p>事件触发时机 单据列表上显示为超链接的单元格，用户点击时，系统默认会打开单据维护界面。 在打开单据界面之前，触发此事件； 插件可以在此事件，判断点击的列，取消单据界面打开，自行显示其它界面</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override 
public void billListHyperLinkClick(HyperLinkClickArgs args)
{
    String fieldName = args.getFieldName();
    if(&quot;createtime&quot;.equals(fieldName))
    {
        args.setCancel(true);
        this.getView().showMessage(&quot;您点击了创建时间&quot;);
    }
    super.billListHyperLinkClick(args);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="beforeshowbill" tabindex="-1"><a class="header-anchor" href="#beforeshowbill" aria-hidden="true">#</a> beforeShowBill</h5><blockquote><p>事件触发时机 在执行操作时，打开子界面之前，触发此事件； 插件可以修改子界面显示参数，或取消显示；</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override 
public void beforeShowBill(BeforeShowBillFormEvent e)
{ 
    //传值到打开的单据界面 
    e.getParameter().setCustomParam(&quot;test&quot;, &quot;test&quot;); 
    //动态添加插件 
    e.getParameter().addCustPlugin(&quot;kd.bos.demo.formplugin.DemoBillPlugin&quot;); 
    //终止打开 
    e.setCancel(true); 
    super.beforeShowBill(e); 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="listrowclick" tabindex="-1"><a class="header-anchor" href="#listrowclick" aria-hidden="true">#</a> listRowClick</h5><blockquote><p>用户点击单据列表行时，触发此事件。 在移动端的单据列表上，用户点击行时，系统会自动打开单据的详情界面。插件可以在此 事件，取消上述系统内置的逻辑；</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override 
public void listRowClick(ListRowClickEvent evt)
{
    this.getView().showMessage(&quot;点击列表&quot;);
    super.listRowClick(evt);
}
@Override 
public void registerListener(EventObject e)
{
    BillList list = this.getControl(this.BILLLISTID);
    list.addListRowClickListener(this);
    super.registerListener(e);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="操作插件-abstractoperationserviceplugin" tabindex="-1"><a class="header-anchor" href="#操作插件-abstractoperationserviceplugin" aria-hidden="true">#</a> 操作插件-AbstractOperationServicePlugIn</h4><blockquote><p>单据操作插件接口为IOperationServicePlugIn、IOperationService；</p></blockquote><blockquote><p>系统预置了一个操作插件基类 AbstractOperationServicePlugIn，实现了上述操作插件接口；</p></blockquote><blockquote><p>自定义的操作插件，扩展预置的操作插件基类 AbstractOperationServicePlugIn 即可。</p></blockquote><blockquote><p>插件基类 AbstractOperationServicePlugIn 内置了如下属性方法和本地变量，供插件访问，用以获取操 作执行上下文</p></blockquote><table><thead><tr><th>方法 属性</th><th>说明</th></tr></thead><tbody><tr><td>billEntityType</td><td>单据主实体</td></tr><tr><td>operateMeta</td><td>操作配置，据此获知当前执行的操作信息</td></tr><tr><td>operationResult</td><td>操作结果，可以向其中添加操作提示信息</td></tr><tr><td>getOption()</td><td>自定义操作参数选项，可以包含各种自定义操作参数</td></tr><tr><td>onPreparePropertys</td><td>在单据列表上执行单据操作，系统需要先根据传入的单据内码，加载单据 数据包；在加载单据数据包之前，触发此事件；插件需要在此事件，添加 需要用到的字段；</td></tr><tr><td>onAddValidators</td><td>系统预置的操作校验器加载完毕，执行校验之前，触发此事件；</td></tr><tr><td>beforeExecuteOperationTransaction</td><td>操作校验通过之后，开启事务之前，触发此事件；</td></tr><tr><td>beginOperationTransaction</td><td>操作校验通过，开启了事务，准备把数据提交到数据库之前触发此事件；</td></tr><tr><td>endOperationTransaction</td><td>数据已经提交到数据库之后，事务未提交之前，触发此事件；</td></tr><tr><td>rollbackOperation</td><td>操作事务提交失败，事务回滚之后触发此事件；</td></tr><tr><td>afterExecuteOperationTransaction</td><td>操作执行完毕，事务提交之后，触发此事件；</td></tr></tbody></table><h5 id="onpreparepropertys" tabindex="-1"><a class="header-anchor" href="#onpreparepropertys" aria-hidden="true">#</a> onPreparePropertys</h5><blockquote><p>操作执行，加载单据数据包之前，触发此事件；</p></blockquote><blockquote><p>在单据列表上执行单据操作，传入的是单据内码； 操作引擎需要先根据传入的单据内码，加载单据数据包，其中只包含操作要用到的字段， 然后再执行操作；在加载单据数据包之前，触发此事件；</p></blockquote><blockquote><p>在单据维护界面，执行单据操作时，传入的是单据数据包，不需要操作引擎自行加载单据， 不会触发此事件；</p></blockquote><blockquote><p>插件需要在此事件，添加需要用到的字段；否则，操作引擎加载出的单据数据包，可能没 有插件要用到的字段值，从而引发中断</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override 
public void onPreparePropertys(PreparePropertysEventArgs e)
    { 
    // 要求备注字段 
    e.getFieldKeys().add(“note”);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="onaddvalidators" tabindex="-1"><a class="header-anchor" href="#onaddvalidators" aria-hidden="true">#</a> onAddValidators</h5><blockquote><p>构建好操作校验器之后，执行操作校验之前，触发此事件；</p></blockquote><blockquote><p>插件可以在此事件，增加自定义操作校验器，或者去掉内置的校验器。</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override 
public void onAddValidators(AddValidatorsEventArgs e)
    {
        e.addValidator(new AbstractValidator()
                {
        @Override 
        public void validate(){
           for(ExtendedDataEntity obj: this.getDataEntities())
          { 
            
            //this.addErrorMessage(obj, &quot;校验数据不通过&quot;); 
          } 
        } 
      }); 
    super.onAddValidators(e); 
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如何开发插件-运用插件上下文" tabindex="-1"><a class="header-anchor" href="#如何开发插件-运用插件上下文" aria-hidden="true">#</a> 如何开发插件-运用插件上下文</h4><blockquote><p>插件事件参数中，封装了事件源，数 据包等对象，可直接使用。例如： propertyChanged事件的event中 包含有更新前的值和更新后的值。</p></blockquote><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>表单插件实例中，可以获取数据模型和界面模型</p></blockquote><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>IFormView提供的常用接口</p></blockquote><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>getPageId *</td><td>获取界面实例的唯一标识pageId</td></tr><tr><td>getView *</td><td>获取其他界面的视图模型</td></tr><tr><td>getEntityId</td><td>获取表单的主实体编码，如bd_material</td></tr><tr><td>getModel</td><td>获取表单数据模型</td></tr><tr><td>getParentView *</td><td>获取父表单视图模型</td></tr><tr><td>getMainView</td><td>获取主界面视图模型</td></tr><tr><td>updateView *</td><td>把数据模型中的数据，发送到前端界面</td></tr><tr><td>getControl *</td><td>获取控件编程模型</td></tr><tr><td>getRootControl *</td><td>获取表单编程模型</td></tr><tr><td>getService *</td><td>获取服务实例</td></tr><tr><td>invokeOperation</td><td>执行操作</td></tr><tr><td>activate</td><td>激活表单</td></tr><tr><td>close</td><td>关闭表单</td></tr><tr><td>setEnable</td><td>设置控件可用性</td></tr><tr><td>setVisible</td><td>设置控件可见性</td></tr><tr><td>showForm *</td><td>传入表单显示参数，打开一个新的表单，作为本表单的子表单</td></tr><tr><td>getFormShowParameter</td><td>获取表单显示参数</td></tr><tr><td>cacheFormShowParameter</td><td>修改表单显示参数对象属性值之后，调用本方法把参数更新到缓存</td></tr><tr><td>returnDataToParent</td><td>设置返回到父表单的返回值</td></tr><tr><td>openUrl</td><td>打开一个新窗口链接到指定的URL</td></tr><tr><td>showUpload</td><td>显示一个文件上传界面；文件上传完毕，触发插件afterUpload事件；</td></tr><tr><td>showMessage</td><td>单据内悬浮消息框，默认没有按钮，自动消失</td></tr><tr><td>showErrMessage</td><td>显示错误消息</td></tr><tr><td>showOperationResult</td><td>显示操作结果</td></tr><tr><td>showConfirm</td><td>显示确认消息；用户确认完毕，会触发confirmCallBack事件；</td></tr><tr><td>showSuccessNotification</td><td>单据内成功悬浮消息框，默认2秒自动消失；消息内容,不能超过50字</td></tr><tr><td>showErrorNotification</td><td>单据内失败悬浮消息框，需要手动关闭</td></tr><tr><td>showTipNotification</td><td>单据内提示类别悬浮消息框，提示类会显示按钮，需要手动关闭</td></tr><tr><td>showRobotMessage</td><td>发送消息给机器人助手</td></tr><tr><td>closeRobotMessage</td><td>关闭消息给机器人助手</td></tr><tr><td>showFieldTip</td><td>字段上显示提示信息</td></tr><tr><td>showOperationResult</td><td>显示操作结果</td></tr><tr><td>showConfirm</td><td>显示确认消息；用户确认完毕，会触发confirmCallBack事件；</td></tr><tr><td>showSuccessNotification</td><td>单据内成功悬浮消息框，默认2秒自动消失；消息内容,不能超过50字</td></tr><tr><td>showErrorNotification</td><td>单据内失败悬浮消息框，需要手动关闭</td></tr><tr><td>showTipNotification</td><td>单据内提示类别悬浮消息框，提示类会显示按钮，需要手动关闭</td></tr><tr><td>showRobotMessage</td><td>发送消息给机器人助手</td></tr><tr><td>closeRobotMessage</td><td>关闭消息给机器人助手</td></tr><tr><td>showFieldTip</td><td>字段上显示提示信息</td></tr></tbody></table><blockquote><p>IDataModel提供的常用方法</p></blockquote><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>getDataEntityType *</td><td>获取运行时表单实体元数据对象，又称为主实体模型</td></tr><tr><td>getProperty *</td><td>获取运行时字段元数据对象，又称为实体的属性对象</td></tr><tr><td>createNewData</td><td>根据表单主实体模型，创建表单新的数据包，字段填写好默认值</td></tr><tr><td>getDataEntity *</td><td>获取表单数据包</td></tr><tr><td>updateCache *</td><td>提交当前表单数据包到缓存</td></tr><tr><td>getValue *</td><td>获取字段值</td></tr><tr><td>setValue *</td><td>设置字段值</td></tr><tr><td>setItemValueByNumber</td><td>根据基础资料的编码，设置基础资料字段值</td></tr><tr><td>setItemValueByID</td><td>根据基础资料的内码，设置基础资料字段值</td></tr><tr><td>getContextVariable *</td><td>获取上下文变量</td></tr><tr><td>putContextVariable</td><td>添加上下文变量</td></tr><tr><td>removeContextVariable</td><td>删除上下文变量</td></tr><tr><td>addDataModelListener</td><td>订阅模型相关事件</td></tr><tr><td>addDataModelChangeListener</td><td>订阅模型改变事件</td></tr><tr><td>createNewEntryRow</td><td>创建分录行</td></tr><tr><td>batchCreateNewEntryRow</td><td>批量创建分录行</td></tr></tbody></table><h4 id="如何开发插件-合理运用工具类" tabindex="-1"><a class="header-anchor" href="#如何开发插件-合理运用工具类" aria-hidden="true">#</a> 如何开发插件-合理运用工具类</h4><blockquote><p>bos-servicehelper工程含大量工具类</p></blockquote><table><thead><tr><th>服务类</th><th>说明</th></tr></thead><tbody><tr><td>SaveServiceHelper</td><td>保存服务</td></tr><tr><td>DeleteServiceHelper</td><td>删除服务</td></tr><tr><td>BusinessDataServiceHelper</td><td>单据、基础资料读取</td></tr><tr><td>QueryServiceHelper</td><td>查询服务</td></tr><tr><td>DBServiceHelper</td><td>生成全局唯一的数据内码（字符型、长整型）</td></tr><tr><td>TimeServiceHelper</td><td>获取系统时间</td></tr><tr><td>BaseDataServiceHelper</td><td>基础资料服务</td></tr><tr><td>ConvertServiceHelper</td><td>单据转换服务</td></tr><tr><td>CodeRuleServiceHelper</td><td>单据编号服务</td></tr><tr><td>OperationServiceHelper</td><td>单据各种操作服务（保存、提交、审核、反审核、禁用、作废等）</td></tr></tbody></table><p><strong>以上就是我关于 <em>金蝶云苍穹插件开发</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',130);function f(k,C){const d=c("ExternalLinkIcon");return r(),a("div",null,[n(" more "),e("h1",m,[p,t(),e("a",h,[t("41-金蝶云苍穹插件开发.md"),l(d)])]),g])}const O=i(b,[["render",f],["__file","kingdee41.html.vue"]]);export{O as default};
