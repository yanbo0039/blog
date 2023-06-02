import{_ as t,X as s,Y as l,a1 as d,Z as i,$ as n,a2 as r,a0 as a,F as v}from"./framework-68dd73a2.js";const u="/blog/assets/Kingdee_73_1.png",m="/blog/assets/Kingdee_73_1.gif",c={},b={id:"_73-金蝶云苍穹通用图样例-md",tabindex:"-1"},o=i("a",{class:"header-anchor",href:"#_73-金蝶云苍穹通用图样例-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--73--dj9ds8b50z2l3ahwv7tkeju5wlriz68e.md",target:"_blank",rel:"noopener noreferrer"},g=a('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li><p>新建空白页面动态表单</p></li><li><p>在其添加柱状图，设置显示标题显示图例且设置宽高为900*400后保存</p></li></ol><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>编码</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.wzy.card;

import java.util.EventObject;

import kd.bos.form.chart.CustomChart;
import kd.bos.form.plugin.AbstractFormPlugin;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月11日
 * see_to_overridden
 * @version 1.0
 */
public class CustomChartPlugin extends AbstractFormPlugin {
	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
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
		CustomChartAllHelper customChartHepler = new CustomChartAllHelper();
		// 获得通用图控件
		CustomChart customChart = this.getControl(&quot;customchartap&quot;);
		// 调用画布填充方法
		customChartHepler.drawChart(customChart);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package kd.bos.wzy.card;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import com.google.common.collect.Maps;

import kd.bos.form.chart.Axis;
import kd.bos.form.chart.AxisType;
import kd.bos.form.chart.BarSeries;
import kd.bos.form.chart.ChartType;
import kd.bos.form.chart.CustomChart;
import kd.bos.form.chart.Label;
import kd.bos.form.chart.Position;

/**
 * &lt;p&gt;Title: &lt;/p&gt;
 * &lt;p&gt;
 *    Description:
 * &lt;/p&gt;
 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
 * @author xx
 * @date 2020年3月11日
 * see_to_overridden
 * @version 1.0
 */
public class CustomChartAllHelper {

	private CustomChart customChart;

	/**
	 * void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    画图
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param customChart
	 * see_to_overridden
	 * @version 1.0
	 */
	void drawChart(CustomChart customChart) {
		this.setCustomChart(customChart);
		// 清理通用图数据
		customChart.clearData();
		// 设置
		List&lt;String&gt; categorys = this.getSMonth();
		// 获得分析数量
		Map&lt;Group, List&lt;Number&gt;&gt; datas = this.getData();
		datas.forEach((group, data) -&gt; {
			this.createBarSeries(group, data, &quot;yAxisIndex&quot;);
		});
		// 设置默认图标显示
		this.setDefaultLegend();
		// 创建x轴
		Axis xAxis = this.createCategoryAxis(&quot;&quot;, true);
		// 创建y轴
		Axis yAxis = this.createValueAxis(&quot;水量&quot;, false);
		// 创建y2Axis
		Axis y2Axis = this.createValueAxis(&quot;温度&quot;, false);
		this.setAxisProp(xAxis, null, null, null, null);
		// 设置x轴数据
		xAxis.setCategorys(categorys);

		this.setAxisProp(yAxis, Position.right, &quot;{value} ml&quot;, 50, 250);
		this.setAxisProp(y2Axis, Position.left, &quot;{value} ℃&quot;, 5, 25);

		customChart.setLegendPropValue(&quot;itemWidth&quot;, Integer.valueOf(50));
		customChart.setLegendPropValue(&quot;itemHeight&quot;, Integer.valueOf(20));
		customChart.setLegendPropValue(&quot;top&quot;, &quot;10&quot;);
		Map&lt;String, Object&gt; textStyle = new HashMap&lt;String, Object&gt;();
		textStyle.put(&quot;color&quot;, &quot;#ffffff&quot;);
		textStyle.put(&quot;fontSize&quot;, 16);
		customChart.setLegendPropValue(&quot;textStyle&quot;, textStyle);
		// 设置图标边距
		customChart.setMargin(Position.right, &quot;80px&quot;);
		customChart.setShowLegend(true);
		customChart.setMargin(Position.top, &quot;60px&quot;);
		// 刷新图表
		customChart.refresh();

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
	 * @param axis
	 * @param position
	 * @param formatter
	 * @param interval
	 * @param max
	 * see_to_overridden
	 * @version 1.0
	 */
	private void setAxisProp(Axis axis, Position position, String formatter, Number interval, Number max) {
		// 设置轴数据显示格式
		Map&lt;String, Object&gt; axisLabel = Maps.newHashMap();
		axisLabel.put(&quot;formatter&quot;, formatter);
		axis.setPropValue(&quot;axisLabel&quot;, axisLabel);
		// 轴设置刻度
		axis.setPropValue(&quot;interval&quot;, interval);
		// 设置轴最大刻度
		axis.setMax(max);
		// 轴指示器属性
		Map&lt;String, Object&gt; AxisPointer = Maps.newHashMap();
		AxisPointer.put(&quot;show&quot;, true);
		AxisPointer.put(&quot;type&quot;, &quot;line&quot;);
		// 轴文本标签设置
		Label AxisLabel = new Label();
		AxisLabel.setShow(true);
		AxisLabel.setBackgroundColor(&quot;black&quot;);
		AxisPointer.put(&quot;label&quot;, AxisLabel);
		// 轴设置指示线类型
		Map&lt;String, Object&gt; lineStyle = Maps.newHashMap();
		lineStyle.put(&quot;type&quot;, &quot;dotted&quot;);
		AxisPointer.put(&quot;lineStyle&quot;, lineStyle);
		// 设置Y轴不触发悬浮提示信息
		AxisPointer.put(&quot;triggerTooltip&quot;, false);
		axis.setPosition(position);
		axis.setPropValue(&quot;axisPointer&quot;, AxisPointer);
	}

	/**
	 * Map&lt;Group,List&lt;Number&gt;&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    获取数据
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	private Map&lt;Group, List&lt;Number&gt;&gt; getData() {
		// 用于储存结果数据
		Map&lt;Group, List&lt;Number&gt;&gt; results = new LinkedHashMap&lt;Group, List&lt;Number&gt;&gt;();
		// 获得默认分组
		List&lt;Group&gt; gList = this.getDefaultGroup();
		// 设置
		Iterator&lt;Group&gt; iter = gList.iterator();
		Number[] nq = { 2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3 };
		Number[] nw = { 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3 };
		Number[] nc = { 2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2 };
		while (iter.hasNext()) {// 组别
			Group g = iter.next();
			List&lt;Number&gt; sm = new ArrayList&lt;Number&gt;();// 月份
			if (g.groupKey.equals(&quot;Q&quot;)) {
				for (int i = 0; i &lt; this.getSMonth().size(); i++) {
					sm.add(nq[i]);
				}
			}
			if (g.groupKey.equals(&quot;W&quot;)) {
				for (int i = 0; i &lt; this.getSMonth().size(); i++) {
					sm.add(nw[i]);
				}
			}
			if (g.groupKey.equals(&quot;C&quot;)) {
				for (int i = 0; i &lt; this.getSMonth().size(); i++) {
					sm.add(nc[i]);
				}
			}
			results.put(g, sm);
		}
		return results;
	}

	/**
	 * List&lt;String&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    获取月份类别数据
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	private List&lt;String&gt; getSMonth() {
		List&lt;String&gt; months = new ArrayList&lt;String&gt;();
		StringBuilder s = null;
		int index = 0;
		for (int i = 0; i &lt; 12; i++) {
			s = new StringBuilder();
			index = i + 1;
			s.append(index).append(&quot;月&quot;);
			months.add(s.toString());
		}
		return months;
	}

	/**
	 * Axis&lt;/br&gt;
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
	 * @param name
	 * @param isX true创建x轴，false创建y轴
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	private Axis createCategoryAxis(String name, boolean isX) {
		// TODO Auto-generated method stub
		Axis axis = null;
		if (isX) {
			// 如果是X轴
			axis = customChart.createXAxis(name, AxisType.category);
		} else {
			// Y轴
			axis = customChart.createYAxis(name, AxisType.category);
		}
		// 坐标轴刻度相关设置
		Map&lt;String, Object&gt; axisTick = new HashMap&lt;&gt;();
		// 坐标轴刻度的显示间隔为0
		axisTick.put(&quot;interval&quot;, 0);
		// 设置坐标轴的属性-刻度
		axis.setPropValue(&quot;axisTick&quot;, axisTick);
		// 设置坐标轴轴线颜色
		this.setLineColor(axis, &quot;#ffffff&quot;);
		return axis;

	}

	/** Axis&lt;/br&gt;
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
	 * @param name 坐标轴名称
	 * @param isX 是否是x轴
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	private Axis createValueAxis(String name, boolean isX) {
		Axis axis = null;
		if (isX) {
			// X轴
			axis = customChart.createXAxis(name, AxisType.value);
		} else {
			// Y轴
			axis = customChart.createYAxis(name, AxisType.value);
		}
		// 坐标轴刻度相关设置
		Map&lt;String, Object&gt; axisTick = new HashMap&lt;&gt;();
		axis.setPropValue(&quot;axisTick&quot;, axisTick);
		Map&lt;String, Object&gt; splitLine = new HashMap&lt;&gt;();
		Map&lt;String, Object&gt; lineStyle = new HashMap&lt;&gt;();
		// 分隔线的类型
		lineStyle.put(&quot;type&quot;, &quot;dotted&quot;);
		// 分隔线的颜色
		lineStyle.put(&quot;color&quot;, &quot;#E2E2E2&quot;);
		splitLine.put(&quot;lineStyle&quot;, lineStyle);
		// 设置坐标轴的属性-分隔线
		axis.setPropValue(&quot;splitLine&quot;, splitLine);
		// 设置坐标轴轴线颜色
		this.setLineColor(axis, &quot;#ffffff&quot;);
		// 显示悬浮提示框
		customChart.setShowTooltip(true);
		return axis;
	}

	/** void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    设置坐标轴轴线的颜色
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param axix 坐标轴对象
	 * @param color 颜色色值
	 * see_to_overridden
	 * @version 1.0
	 */
	private void setLineColor(Axis axix, String color) {
		Map&lt;String, Object&gt; axisLineMap = new HashMap&lt;&gt;();
		Map&lt;String, Object&gt; lineStyleMap = new HashMap&lt;&gt;();
		// 坐标轴轴线的颜色
		lineStyleMap.put(&quot;color&quot;, color);
		axisLineMap.put(&quot;lineStyle&quot;, lineStyleMap);
		// 设置坐标轴的属性-轴线
		axix.setPropValue(&quot;axisLine&quot;, axisLineMap);
	}

	/** void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    设置柱状图
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @param group
	 * @param values
	 * @param AxisIndex
	 * see_to_overridden
	 * @version 1.0
	 */
	private void createBarSeries(Group group, List&lt;Number&gt; values, String AxisIndex) {
		BarSeries barSeries = customChart.createBarSeries(group.groupName);
		// 设置系列宽度
		barSeries.setBarWidth(&quot;20px&quot;);
		// 设置系列颜色
		barSeries.setColor(group.color);
		// 动画过度时间
		barSeries.setAnimationDuration(2000);
		// 设置图类型
		barSeries.setType(group.type);
		Label label = barSeries.getLabel();// 获取label
		label.setShow(false);// #1771eb
		barSeries.setLabel(label);
		// 设置系列之间的间隔
		barSeries.setPropValue(&quot;barGap&quot;, &quot;15%&quot;);
		// 设置类别之间的间隔
		barSeries.setPropValue(&quot;barCategoryGap&quot;, &quot;15%&quot;);
		// 设置所属坐标
		if (AxisIndex.equals(&quot;xAxisIndex&quot;)) {
			barSeries.setPropValue(&quot;xAxisIndex&quot;, group.xAxisIndex);
		} else {
			barSeries.setPropValue(&quot;yAxisIndex&quot;, group.yAxisIndex);
		}
		// 设置类别对应的数据包
		barSeries.setData((Number[]) values.toArray(new Number[0]));
	}

	/** List&lt;Group&gt;&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    获取默认分组
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	private List&lt;Group&gt; getDefaultGroup() {
		List&lt;Group&gt; defaultGroup = new ArrayList&lt;&gt;(3);
		defaultGroup.add(new Group(&quot;蒸发量&quot;, &quot;Q&quot;, &quot;#030303&quot;, true, ChartType.bar, 0, 0));
		defaultGroup.add(new Group(&quot;降水&quot;, &quot;W&quot;, &quot;#CD0000&quot;, true, ChartType.bar, 0, 0));
		defaultGroup.add(new Group(&quot;平均温度&quot;, &quot;C&quot;, &quot;#EEEE00&quot;, true, ChartType.line, 1, 0));
		return defaultGroup;

	}

	/** void&lt;/br&gt;
	 * 
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    设置图例
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * @param param the bare_field_name
	 * @return the bare_field_name
	 * see_to_overridden
	 * @version 1.0
	 */
	private void setDefaultLegend() {
		Map&lt;String, Boolean&gt; selected = new HashMap&lt;String, Boolean&gt;();
		for (Group group : this.getDefaultGroup()) {
			selected.put(group.groupName, group.selected);
		}
		customChart.setLegendPropValue(&quot;selected&quot;, selected);
	}

	/**
	 * &lt;p&gt;Title: &lt;/p&gt;
	 * &lt;p&gt;
	 *    Description:
	 *    分组实体类
	 * &lt;/p&gt;
	 * &lt;p&gt;Copyright: Copyright (c) 2020&lt;/p&gt;
	 * @author xx
	 * @date 2020年3月11日
	 * see_to_overridden
	 * @version 1.0
	 */
	class Group {
		// 组名
		String groupName;
		// 组别key
		String groupKey;
		// 组别显示颜色
		String color;
		// 是否是选中
		Boolean selected;
		// 展示类型 柱形，折线
		ChartType type;
		// 所属轴标识，这里用多个y轴
		Integer yAxisIndex;
		// 所属轴标识，这里多用在多个x轴
		Integer xAxisIndex;

		public Group(String groupName, String groupKey, String color, Boolean selected, ChartType type,
				Integer yAxisIndex, Integer xAxisIndex) {
			super();
			this.groupName = groupName;
			this.groupKey = groupKey;
			this.color = color;
			this.selected = selected;
			this.type = type;
			this.yAxisIndex = yAxisIndex;
			this.xAxisIndex = xAxisIndex;
		}
	}

	/**
	 * CustomChart&lt;/br&gt;
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
	 * @return
	 * see_to_overridden
	 * @version 1.0
	 */
	public CustomChart getCustomChart() {
		return customChart;
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
	 * @param customChart
	 * see_to_overridden
	 * @version 1.0
	 */
	public void setCustomChart(CustomChart customChart) {
		this.customChart = customChart;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>重启服务器后注册插件预览测试，如下图所示测试成功</li></ol><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>金蝶云苍穹通用图样例</em> 知识点的整理与总结的全部内容,希望对你有帮助。。。。。。</strong></p><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',13);function h(x,q){const e=v("ExternalLinkIcon");return s(),l("div",null,[d(" more "),i("h1",b,[o,n(),i("a",p,[n("73-金蝶云苍穹通用图样例.md"),r(e)])]),g])}const _=t(c,[["render",h],["__file","kingdee73.html.vue"]]);export{_ as default};
