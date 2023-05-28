import{_ as n,X as l,Y as s,a1 as a,Z as t,$ as i,a2 as d,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_265_1.png",u="/blog/assets/Java_265_2.png",m="/blog/assets/Java_265_3.png",b={},o={id:"_265-实操-java-实现合并本地图片文件去重功能-md",tabindex:"-1"},g=t("a",{class:"header-anchor",href:"#_265-实操-java-实现合并本地图片文件去重功能-md","aria-hidden":"true"},"#",-1),p={href:"http://xn--265--Java--bn4pm56aqsd04a483a3wa579cga749kg14a6gdt7llu0enchp33ghmxe.md",target:"_blank",rel:"noopener noreferrer"},_=r(`<h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter03.照片去重功能;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
/**
 * &lt;p&gt;Title: Photoquchong&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月15日
 */
public class Photoquchong {
	public static void main(String[] args) {

		File file_a = new File(&quot;F:\\\\Java测试文件夹\\\\新建文件夹&quot;),
				file_b = new File(&quot;F:\\\\Java测试文件夹\\\\合并文件汇总&quot;);
		String file_c = &quot;F:\\\\Java测试文件夹\\\\c相同照片质量较小&quot;,
				file_d =  &quot;F:\\\\Java测试文件夹\\\\d相同质量相等照片&quot;;
		hbFiles(file_a,file_b,file_c,file_d);
	}
	
	/**
	 * &lt;p&gt;Title: compareString&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 *    比较 destStr 字符串 是否 包含 srcStr 字符串
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;  
	 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;  
	 * @param srcStr
	 * @param destStr
	 * @param headortail 从头或者尾截取 destStr 字符串进行比较 从头传参为 0 尾部 为 -1
	 * @return  
	 * @author xianxian
	 * @date 2023年1月16日  
	 * @version 1.0
	 */
	private static Boolean compareString(String srcStr,String destStr,int headortail) {
		if(destStr.length() &gt; srcStr.length()) {
			if(headortail == 0) {//如果为0则从开始截取字符串相比较
				return destStr.substring(0, srcStr.length()).equals(srcStr);
			}else {//否则从尾部截取比较
				return destStr.substring(destStr.length() -  srcStr.length()).equals(srcStr);
			}
		}else {
			return false ;
		}
	}
	/**
	 * &lt;p&gt;Title: hbFiles&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 *    实现图片的两文件夹合并去重功能
	 *    例a 文件夹 与 b 文件夹中 有很多同名文件 该方法将 a 文件夹合并到b文件夹中
	 *    同名文件 内存较小存放c文件夹
	 *          内存相同存放d文件夹
	 *          内存较大的存放b文件夹
	 *          最终清空a文件夹为目的
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;  
	 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;  
	 * @param file_a 源文件夹
	 * @param file_b 目标文件夹
	 * @param file_c 存放 相同照片质量较小 文件夹
	 * @param file_d 存放 相同质量相等照片 文件夹
	 * @author xianxian
	 * @date 2023年1月15日  
	 * @version 1.0
	 */
	private static void hbFiles(File file_a, File file_b, String file_c, String file_d) {
		File[] fileas = file_a.listFiles(), filebs = file_b.listFiles();
		for (File file_a_iteam : fileas) {
			Boolean result = false;// 是否有重复 默认没有重复
			if(file_a_iteam.isFile() &amp;&amp; compareString(&quot;&quot;, file_a_iteam.getName(), 0)) {
				// 将a文件夹中的元素与b文件夹中的每一个元素相比较
				for (File file_b_iteam : filebs) {// 如果目标文件为空进不了这个循环
					if (file_b_iteam.isFile()) {
						/**
						 * 1. 如果 a文件夹中元素 与 与 b文件夹中的任意一个元素 名字相同 则 比较 它们的大小 否则 将 其移动到对应的文件夹
						 */
						if (file_a_iteam.getName().equals(file_b_iteam.getName())) {
							result = true;// 名字相同了 表示有复复的了 更改为true
							if (file_a_iteam.length() &gt; file_b_iteam.length()) {
								// b元素应该先移动至 F:\\Java测试文件夹\\相同照片质量较小 文件夹
								// 如果a无互比b元素大 则 将大的元素 移动至 F:\\Java测试文件夹\\相同照片质量较大 文件夹

								moveFile(file_b_iteam.getAbsolutePath(), file_c);
								moveFile(file_a_iteam.getAbsolutePath(), file_b_iteam.getParent());

								System.out.println(file_b.getAbsolutePath() + &quot; 移动至了 &quot; + file_c + &quot; NO.149 result: 1 &quot;);
								System.out.println(file_a_iteam.getAbsolutePath() + &quot; 移动至了 &quot; + file_b.getAbsolutePath()
										+ &quot; NO.150 result:1 &quot;);
								break;
							} else {
								// 否则将其再进行比较
								if (file_a_iteam.length() == file_b_iteam.length()) {
									// 如果质量相同则将其移动至 F:\\Java测试文件夹\\相同照片质量相等 文件夹
									moveFile(file_a_iteam.getAbsolutePath(), file_d);
									System.err.println(
											file_a_iteam.getAbsolutePath() + &quot; 移动至了 &quot; + file_d + &quot; NO.155 result:2 &quot;);
									break;
								} else {
									// 否则将其移动至 F:\\Java测试文件夹\\相同照片质量较小 文件夹
									moveFile(file_a_iteam.getAbsolutePath(), file_c);
									System.out.println(
											file_a_iteam.getAbsolutePath() + &quot; 移动至了 &quot; + file_c + &quot; NO.159 result:3 &quot;);
									break;
								}
							}
						}

					}
				}

				if (!result) {// 无重复时 将aitem 直接 存入到 b文件夹
					moveFile(file_a_iteam.getAbsolutePath(), file_b.getAbsolutePath());
					System.out.println(
							file_a_iteam.getAbsolutePath() + &quot; 移动至了 &quot; + file_b.getAbsolutePath() + &quot; NO.163 result:4 &quot;);
				}
			}

		}
	}
	/**
	 * &lt;p&gt;Title: moveFile&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 移动文件
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;  
	 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;  
	 * @param src
	 * @param dest  
	 * @author xianxian
	 * @date 2023年1月15日  
	 * @version 1.0
	 */
	private static void moveFile(String src, String dest) {
		File targetPart = new File(dest);
		if (!targetPart.exists()) {
			targetPart.mkdirs();//创建此抽象路径名指定的目录。
		}
		// 以src的最后一个&quot;\\&quot;取其下标 截取字符从 最后一个 &quot;\\&quot; 到结束 得到 src 的文件全名 再将其 拼接到目标文件名中
		dest = dest + File.separator + src.substring(src.lastIndexOf(File.separator) + 1, src.length());
		try {
			Files.move(Paths.get(src), Paths.get(dest),StandardCopyOption.ATOMIC_MOVE);
			System.out.println(&quot;成功了&quot;);
		} catch (IOException e) {
			System.out.println(&quot;失败了，失败信息： &quot; + e.getMessage());
			e.printStackTrace();
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="实现效果" tabindex="-1"><a class="header-anchor" href="#实现效果" aria-hidden="true">#</a> 实现效果</h4><ol><li>运行代码得到如下结果</li></ol><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>手动 <em>F:\\Java测试文件夹\\c相同照片质量较小</em> 挪动到 <em>F:\\Java测试文件夹\\合并文件汇总</em> 进行比对如下</li></ol><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>手动 <em>F:\\Java测试文件夹\\d相同质量相等照片</em> 挪动到 <em>F:\\Java测试文件夹\\合并文件汇总</em> 进行比对如下</li></ol><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>以上就是我关于 <em>Java-实现合并本地图片文件去重功能</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',18);function f(h,q){const e=v("ExternalLinkIcon");return l(),s("div",null,[a(" more "),t("h1",o,[g,i(),t("a",p,[i("265-实操-Java-实现合并本地图片文件去重功能.md"),d(e)])]),_])}const S=n(b,[["render",f],["__file","index.html.vue"]]);export{S as default};
