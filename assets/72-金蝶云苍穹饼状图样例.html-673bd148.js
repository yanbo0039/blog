import{_ as n,X as l,Y as s,a1 as d,Z as i,$ as e,a2 as a,a0 as r,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Kingdee_72_1.png",o="/blog/assets/Kingdee_72_1.gif",m={},c={id:"_72-金蝶云苍穹饼状图样例-md",tabindex:"-1"},b=i("a",{class:"header-anchor",href:"#_72-金蝶云苍穹饼状图样例-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--72--dj9ds8b50z2l3aetr64peut5wl5i4ai3u.md",target:"_blank",rel:"noopener noreferrer"},g=r('<ol><li><p>新建空白页面动态表单</p></li><li><p>在其添加柱状图，设置显示标题显示图例且设置宽高为600*400后保存</p></li></ol><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.card.plugin;

import java.util.ArrayList;
import java.util.EventObject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import kd.bos.form.chart.ItemValue;
import kd.bos.form.chart.Label;
import kd.bos.form.chart.PieChart;
import kd.bos.form.chart.PieSeries;
import kd.bos.form.chart.Position;
import kd.bos.form.plugin.AbstractFormPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月11日
 * @version 1.0
 */
public class PieChartPlugin extends AbstractFormPlugin {

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    用于存储用例颜色
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @param e
	 * @see kd.bos.entity.datamodel.events.IDataModelListener#afterCreateNewData(java.util.EventObject)
	 * @version 1.0
	 */
	@Override
	public void afterCreateNewData(EventObject e) {
		// TODO Auto-generated method stub
		super.afterCreateNewData(e);
		this.drawChart();

	}

	/**
	 * void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * see_to_overridden
	 * @version 1.0
	 */
	private void drawChart() {
		// TODO Auto-generated method stub
		// 获得饼图控件
		PieChart pieChart = this.getControl(&quot;piechartap&quot;);
		pieChart.clearData();
		pieChart.setShowTooltip(true);
		pieChart.setMargin(Position.right, &quot;80&quot;);
		// 获取需要展示的学校
		List&lt;String&gt; schools = this.getSchools();
		Map&lt;String, ItemValue[]&gt; itemValueMap = this.getProfitData02(schools);
		int schoolsSzie = schools.size();
		int ssIndex = 0;

		String[] percent = this.getPercent(schoolsSzie); // 获取每个学校在图中所占大小比率

		// 遍历得到itemValueMap 将每组数据画一个圆环
		for (String key : itemValueMap.keySet()) {
			System.out.println(key);
			PieSeries series = pieChart.createPieSeries(key);
			series.setRadius(percent[ssIndex++], percent[ssIndex++]); // 设置环的大小

			series = this.setSeriesData(series, itemValueMap.get(key));
			System.out.println(ssIndex);

		}

		// pieChart.setShowTooltip(true);
		pieChart.setShowLegend(true);
		// 设置图例位置
		pieChart.setLegendPropValue(&quot;orient&quot;, &quot;vertical&quot;);
		pieChart.setLegendPropValue(&quot;x&quot;, &quot;right&quot;);
		// pieChart.setLegendPropValue(&quot;top&quot;, &quot;0&quot;);
		// pieChart.setLegendPropValue(&quot;itemWidth&quot;, 30);
		// pieChart.setLegendPropValue(&quot;itemHeight&quot;, 30);
	}

	/**
	 * List&lt;String&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    获取需要展示的学校
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	private List&lt;String&gt; getSchools() {
		// TODO Auto-generated method stub
		List&lt;String&gt; schools = new ArrayList&lt;&gt;();
		schools.add(&quot;A学校&quot;);
		schools.add(&quot;B学校&quot;);
		schools.add(&quot;C学校&quot;);
		return schools;
	}

	/**
	 * PieSeries&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param series
	 * @param items
	 * @return
	 * @version 1.0
	 */
	private PieSeries setSeriesData(PieSeries series, ItemValue[] items) {

		// 将数据加到饼图
		series.setData(items);
		// 设置圆中间数
		// pieChart.setName(new LocaleString(&quot;¥&quot;+555));

		// 设置label类型
		Label label = new Label();
		// label.setBackgroundColor(&quot;#0000FF&quot;);
		label.setShow(true);
		label.setFontSize(&quot;16&quot;);
		label.setFormatter(&quot;{a}:{b}&quot;);
		// 设置位置为inside
		label.setPosition(Position.inside);
		series.setLabel(label);

		// 设置线类型
		Map&lt;String, Map&lt;String, Boolean&gt;&gt; map02 = new HashMap&lt;String, Map&lt;String, Boolean&gt;&gt;();
		Map&lt;String, Boolean&gt; normalMap02 = new HashMap&lt;String, Boolean&gt;();
		map02.put(&quot;normal&quot;, normalMap02);
		normalMap02.put(&quot;show&quot;, Boolean.FALSE);
		series.setPropValue(&quot;labelLine&quot;, map02);

		Object[] points01 = new Object[] { &quot;50%&quot;, &quot;50%&quot; };
		// 设置饼图圆心
		series.setPropValue(&quot;center&quot;, points01);
		return series;
	}

	/**
	 * Map&lt;String,ItemValue[]&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *   String：物料名称 ItemValue[]：长宽高数据
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param schools
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	private Map&lt;String, ItemValue[]&gt; getProfitData02(List&lt;String&gt; schools) {

		Map&lt;String, ItemValue[]&gt; resMap = new HashMap&lt;&gt;();

		int schoolsSize = schools.size();
		Map&lt;String, String&gt; cityColor = this.getCityColor(); // 获取身份和颜色的对应值
		ItemValue[] itemValues01 = new ItemValue[3]; // 环中每个元素的值
		itemValues01[0] = new ItemValue(&quot;江苏&quot;, 120, cityColor.get(&quot;江苏&quot;));
		itemValues01[1] = new ItemValue(&quot;北京&quot;, 250, cityColor.get(&quot;北京&quot;));
		itemValues01[2] = new ItemValue(&quot;江西&quot;, 190, cityColor.get(&quot;江西&quot;));
		resMap.put(schools.get(0), itemValues01);

		ItemValue[] itemValues02 = new ItemValue[4]; // 环中每个元素的值
		itemValues02[0] = new ItemValue(&quot;山东&quot;, 350, cityColor.get(&quot;山东&quot;));
		itemValues02[1] = new ItemValue(&quot;云南&quot;, 420, cityColor.get(&quot;云南&quot;));
		itemValues02[2] = new ItemValue(&quot;湖南&quot;, 446, cityColor.get(&quot;湖南&quot;));
		itemValues02[3] = new ItemValue(&quot;江西&quot;, 140, cityColor.get(&quot;江西&quot;));
		resMap.put(schools.get(1), itemValues02);

		ItemValue[] itemValues03 = new ItemValue[5]; // 环中每个元素的值
		itemValues03[0] = new ItemValue(&quot;湖南&quot;, 170, cityColor.get(&quot;湖南&quot;));
		itemValues03[1] = new ItemValue(&quot;湖北&quot;, 660, cityColor.get(&quot;湖北&quot;));
		itemValues03[2] = new ItemValue(&quot;广东&quot;, 256, cityColor.get(&quot;广东&quot;));
		itemValues03[3] = new ItemValue(&quot;浙江&quot;, 333, cityColor.get(&quot;浙江&quot;));
		itemValues03[4] = new ItemValue(&quot;四川&quot;, 444, cityColor.get(&quot;四川&quot;));
		resMap.put(schools.get(2), itemValues03);

		return resMap;

	}

	/**
	 * String[]&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    根据学校的数据来分割图形
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param itemValueMapSzie 学校的数目
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	private String[] getPercent(int itemValueMapSzie) {

		int rangeNum = (int) (80 / itemValueMapSzie);
		int temp = 0;
		String per[] = new String[itemValueMapSzie * 2];
		for (int i = 0; i &lt; itemValueMapSzie * 2; i++) {
			per[i] = temp + &quot;%&quot;;
			temp += rangeNum;
			i++;
			per[i] = temp + &quot;%&quot;;
			temp += 5;
		}
		return per;

	}

	// private String[] color = { &quot;#6112e4&quot;, &quot;#0a35b0&quot;, &quot;#77b00a&quot;, &quot;#ece917&quot;,
	// &quot;#ecb217&quot;, &quot;#ec6c17&quot;, &quot;#df7ee0&quot;, &quot;#915dc2&quot;,
	// &quot;#7ecfe0&quot;, &quot;#06090e&quot;, &quot;#e917ec&quot; ,&quot;#5F9EA0&quot;,&quot;#008B8B&quot;,&quot;#8FBC8F&quot;};
	/**
	 * Map&lt;String,String&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    城市和颜色的对应表
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * @version 1.0
	 */
	private Map&lt;String, String&gt; getCityColor() {
		Map&lt;String, String&gt; cityColor = new HashMap&lt;&gt;();
		cityColor.put(&quot;江苏&quot;, &quot;#6112e4&quot;);
		cityColor.put(&quot;北京&quot;, &quot;#0a35b0&quot;);
		cityColor.put(&quot;江西&quot;, &quot;#77b00a&quot;);
		cityColor.put(&quot;山东&quot;, &quot;#ece917&quot;);
		cityColor.put(&quot;云南&quot;, &quot;#ecb217&quot;);
		cityColor.put(&quot;湖南&quot;, &quot;#ec6c17&quot;);
		cityColor.put(&quot;湖北&quot;, &quot;#df7ee0&quot;);
		cityColor.put(&quot;广东&quot;, &quot;#915dc2&quot;);
		cityColor.put(&quot;浙江&quot;, &quot;#7ecfe0&quot;);
		cityColor.put(&quot;四川&quot;, &quot;#06090e&quot;);
		return cityColor;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>重启服务器后注册插件预览测试，如下图所示测试成功</li></ol><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹饼状图样例</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',11);function q(h,_){const t=v("ExternalLinkIcon");return l(),s("div",null,[d(" more "),i("h1",c,[b,e(),i("a",p,[e("72-金蝶云苍穹饼状图样例.md"),a(t)])]),g])}const V=n(m,[["render",q],["__file","72-金蝶云苍穹饼状图样例.html.vue"]]);export{V as default};
