import{_ as l,X as s,Y as a,a1 as d,Z as i,$ as e,a2 as r,a0 as t,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Kingdee_90_1.png",u="/blog/assets/Kingdee_90_2.png",m="/blog/assets/Kingdee_90_3.png",o="/blog/assets/Kingdee_90_4.png",b="/blog/assets/Kingdee_90_5.png",g="/blog/assets/Kingdee_90_6.png",p="/blog/assets/Kingdee_90_1.gif",h={},_={id:"_90-金蝶云苍穹弹窗自定义动态表单案例-md",tabindex:"-1"},f=i("a",{class:"header-anchor",href:"#_90-金蝶云苍穹弹窗自定义动态表单案例-md","aria-hidden":"true"},"#",-1),E={href:"http://xn--90--498dxm53cn7jtobky4b3qi78bt35bt77cbmap15gxedo70a02do52d.md",target:"_blank",rel:"noopener noreferrer"},k=t('<hr><p>向日葵有个很好的的花语---入目无他人，四下皆是你。有你时，你是太阳我目不转睛;无你时，我低下头谁也不见。</p><hr><h4 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h4><ol><li>新建请假申请单单据</li></ol><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>新建请假类型基础资料</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>新建请假初始天数基础资料</li></ol><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>新建对话框动态表单</li></ol><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h4><blockquote><p>请假申请单插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

import java.util.HashMap;

import kd.bos.bill.AbstractBillPlugIn;
import kd.bos.dataentity.utils.StringUtils;
import kd.bos.entity.datamodel.events.PropertyChangedArgs;
import kd.bos.form.CloseCallBack;
import kd.bos.form.FormShowParameter;
import kd.bos.form.ShowType;
import kd.bos.form.events.ClosedCallBackEvent;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    试验成功
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月21日
 * @version 1.0
 */
public class LeaveBillPopReasonPlugin extends AbstractBillPlugIn {
	//页面请假天数控件标识
    private static final String KEY_LEAVE_DAYS = &quot;leavedays&quot;;
    //弹出动态表单页面标识
    private static final String KEY_POP_FORM = &quot;op_dtbd_test1&quot;;
    //页面工作交接安排控件标识
    private final static String KEY_WORK_ARRANGE = &quot;leave_workarrangement&quot;;
    //页面备注信息控件标识
    private final static String KEY_REMARK = &quot;leave_info&quot;;

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     *  控件改变事件
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年3月21日
     * @param param the bare_field_name
     * @param e
     * @see kd.bos.entity.datamodel.events.IDataModelChangeListener#propertyChanged(kd.bos.entity.datamodel.events.PropertyChangedArgs)
     * @version 1.0
     */
    @Override
    public void propertyChanged(PropertyChangedArgs e) {
        super.propertyChanged(e);
        String name = e.getProperty().getName();
        //获取改变控件的编码，如果是请假天数被修改，则获取请假天数的具体值，如果大于3天，则弹出编码为9z8e_popdetail的表单
        //这里弹出表单参数使用FormShowParameter表示弹出动态表单，如果是弹出页面是单据也可使用BillShowParameter
        if (StringUtils.equals(KEY_LEAVE_DAYS, name)) {
            Integer leaveDays = Integer.parseInt(String.valueOf(e.getChangeSet()[0].getNewValue()));
            if (null != leaveDays) {
                if (leaveDays&gt;3) {
                    //创建弹出页面对象，FormShowParameter表示弹出页面为动态表单
                    FormShowParameter ShowParameter = new FormShowParameter();
                    //设置弹出页面的编码
                    ShowParameter.setFormId(KEY_POP_FORM);
                    //设置弹出页面标题
                    ShowParameter.setCaption(&quot;您的请假天数大于3天，请填写工作交接安排说明&quot;);
                    //设置页面关闭回调方法
                    //CloseCallBack参数：回调插件，回调标识
                    ShowParameter.setCloseCallBack(new CloseCallBack(this, KEY_LEAVE_DAYS));
                    //设置弹出页面打开方式，支持模态，新标签等
                    ShowParameter.getOpenStyle().setShowType(ShowType.Modal);
                    //弹出页面对象赋值给父页面
                    this.getView().showForm(ShowParameter);
                }
            }
        }
    }

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     *    页面关闭回调事件
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年3月21日
     * @param param the bare_field_name
     * @param closedCallBackEvent
     * @see kd.bos.form.plugin.AbstractFormPlugin#closedCallBack(kd.bos.form.events.ClosedCallBackEvent)
     * @version 1.0
     */
    @Override
    public void closedCallBack(ClosedCallBackEvent closedCallBackEvent) {
        super.closedCallBack(closedCallBackEvent);
        
        //判断标识是否匹配，并验证返回值不为空，不验证返回值可能会报空指针
        if (StringUtils.equals(closedCallBackEvent.getActionId(), KEY_LEAVE_DAYS) &amp;&amp; null != closedCallBackEvent.getReturnData()) {
            //这里返回对象为Object，可强转成相应的其他类型，
            // 单条数据可用String类型传输，返回多条数据可放入map中，也可使用json等方式传输
            HashMap&lt;String, String&gt; returnData = (HashMap&lt;String, String&gt;) closedCallBackEvent.getReturnData();
            this.getModel().setValue(KEY_WORK_ARRANGE, returnData.get(KEY_WORK_ARRANGE));
            this.getModel().setValue(KEY_REMARK, returnData.get(KEY_REMARK));
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>对话框动态表单插件</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.plugin.leave.message;

import java.util.EventObject;
import java.util.HashMap;

import kd.bos.dataentity.utils.StringUtils;
import kd.bos.form.control.Control;
import kd.bos.form.plugin.AbstractFormPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 *    试验成功
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月21日
 * @version 1.0
 */
public class PopDetailForm extends AbstractFormPlugin {
	//页面确认按钮标识
    private final static String KEY_OK = &quot;btnok&quot;;
    //页面取消按钮标识
    private final static String KEY_CANCEL = &quot;btncancel&quot;;
    //页面工作交接安排控件标识
    private final static String KEY_WORK_ARRANGE = &quot;leave_workarrangement&quot;;
    //页面备注信息控件标识
    private final static String KEY_REMARK = &quot;leave_info&quot;;

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * 注册监听，监听页面确认按钮和取消按钮
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年3月21日
     * @param param the bare_field_name
     * @param e
     * @see kd.bos.form.plugin.AbstractFormPlugin#registerListener(java.util.EventObject)
     * @version 1.0
     */
    @Override
    public void registerListener(EventObject e) {
        super.registerListener(e);
        //页面确认按钮和取消按钮添加监听
        this.addClickListeners(KEY_OK, KEY_CANCEL);
    }

    /**
     * &lt;p&gt;Title: &lt;/p&gt;
     * &lt;p&gt;
     *    Description:
     * 页面点击事件
     * &lt;/p&gt;
     * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
     * @author xx
     * @date 2020年3月21日
     * @param param the bare_field_name
     * @param evt
     * @see kd.bos.form.plugin.AbstractFormPlugin#click(java.util.EventObject)
     * @version 1.0
     */
    @Override
    public void click(EventObject evt) {
        super.click(evt);
        //获取被点击的控件对象
        Control source = (Control) evt.getSource();
        if (StringUtils.equals(source.getKey(), KEY_OK)) {
            HashMap&lt;String, String&gt; hashMap = new HashMap&lt;&gt;();
            //如果被点击控件为确认，则获取页面相关控件值，组装数据传入returnData返回给父页面，最后关闭页面
            hashMap.put(KEY_REMARK, String.valueOf(this.getModel().getValue(KEY_REMARK)));
            hashMap.put(KEY_WORK_ARRANGE, String.valueOf(this.getModel().getValue(KEY_WORK_ARRANGE)));
            this.getView().returnDataToParent(hashMap);
            this.getView().close();
        } else if (StringUtils.equals(source.getKey(), KEY_CANCEL)) {
            //被点击控件为取消则设置返回值为空并关闭页面（在页面关闭回调方法中必须验证返回值不为空，否则会报空指针）
            this.getView().returnDataToParent(null);
            this.getView().close();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注册插件并重启服务" tabindex="-1"><a class="header-anchor" href="#注册插件并重启服务" aria-hidden="true">#</a> 注册插件并重启服务</h4><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="预览测试" tabindex="-1"><a class="header-anchor" href="#预览测试" aria-hidden="true">#</a> 预览测试</h4><blockquote><p>如下图所示，测试成功</p></blockquote><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹弹窗自定义动态表单案例</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',28);function C(K,S){const n=v("ExternalLinkIcon");return s(),a("div",null,[d(" more "),i("h1",_,[f,e(),i("a",E,[e("90-金蝶云苍穹弹窗自定义动态表单案例.md"),r(n)])]),k])}const A=l(h,[["render",C],["__file","kingdee90.html.vue"]]);export{A as default};
