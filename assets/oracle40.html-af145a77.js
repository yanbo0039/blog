import{_ as n,X as s,Y as t,a1 as a,a0 as e}from"./framework-68dd73a2.js";const i="/blog/assets/Oracle_40_1.png",l="/blog/assets/Oracle_40_2.png",o={},r=e('<h1 id="_40-oracle-在plsql中执行sql语句报-ora-00911-无效字符如何解决-md" tabindex="-1"><a class="header-anchor" href="#_40-oracle-在plsql中执行sql语句报-ora-00911-无效字符如何解决-md" aria-hidden="true">#</a> 40-Oracle 在PLSQL中执行sql语句报 ORA-00911：无效字符如何解决？.md</h1><h4 id="报错截图" tabindex="-1"><a class="header-anchor" href="#报错截图" aria-hidden="true">#</a> 报错截图</h4><figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="报错详情" tabindex="-1"><a class="header-anchor" href="#报错详情" aria-hidden="true">#</a> 报错详情</h4><blockquote><p>如上图所示为sql语句在pl/sql中执行时的报错,sql语句如下</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>\uFEFF<span class="token keyword">create</span> <span class="token keyword">table</span> myLibary_book
<span class="token punctuation">(</span>
  book_id number<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
  book_name varchar2<span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
  lend_count number<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
  <span class="token keyword">status</span> number<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">check</span><span class="token punctuation">(</span><span class="token keyword">status</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">---0表示借出，1表示在馆</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>经过我逐字逐字的排查虽然解决了问题但是依然不知道错在哪里，正确的sql语句如下</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> myLibary_book
<span class="token punctuation">(</span>
  book_id number<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>
  book_name varchar2<span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
  lend_count number<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
  <span class="token keyword">status</span> number<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">check</span><span class="token punctuation">(</span><span class="token keyword">status</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">---0表示借出，1表示在馆</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>这两sql语句鬼才看得出它们之间的有啥区别 反正就是一个不行一个行，无奈我之前写的统计字符的方法统计了一下它们之间的区别如下为统计区别</p></blockquote><ul><li>错误的sql语句统计结果如下：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>该文本共有7行
该文本共有192个字符
其中包含：
8个汉字
121个字母，其中1个大写字母，120个小写字母
10个数字
53个其他字符
该文本共有212个字节
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>正确的的sql语句统计结果如下：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>该文本共有7行
该文本共有191个字符
其中包含：
8个汉字
121个字母，其中1个大写字母，120个小写字母
10个数字
52个其他字符
该文本共有209个字节
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以看到正确的sql语句比错误的sql语句少了一个字符其它没啥区别</p></blockquote><h4 id="得出结论" tabindex="-1"><a class="header-anchor" href="#得出结论" aria-hidden="true">#</a> 得出结论</h4><blockquote><p><strong>如上分析可以得出结论造成这种原因多半是输入法的空格问题，正确应该使用英文的空格而使用了中文的空格，所以平时一定要特别注意，细心细心再细心，可省很多时间!!!!!!!!</strong></p></blockquote><p><strong>以上就是我关于 <em>Oracle 在PLSQL中执行sql语句报 ORA-00911：无效字符如何解决？</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4><ul><li>统计字符的方法</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>	/**
	 * &lt;p&gt;Title: countNumOfWords&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 统计文本的字数 
	 *    可以细分到 汉字 多少 英文（大小写）多少 数据多少 其它字符多少 全文共多少字节
	 * &lt;/p&gt;  
	 * &lt;p&gt;Copyright: Copyright (c) 2017&lt;/p&gt;  
	 * &lt;p&gt;Company: www.baidudu.com&lt;/p&gt;  
	 * @param pathStr  
	 * @author xianxian
	 * @date 2023年1月27日  
	 * @version 1.0
	 */
	private static void countNumOfWords(String pathStr) {
		try {// try代码块，当发生异常时会转到catch代码块中
				// 读取指定的文件
			if (pathStr == null || pathStr.equals(&quot;&quot;)) {
				pathStr = System.getProperty(&quot;user.dir&quot;) + File.separator + &quot;log.log&quot;;
			}
			// 创建类进行文件的读取，并指定编码格式为utf-8
			InputStreamReader read = new InputStreamReader(new FileInputStream(pathStr), &quot;utf-8&quot;);
			BufferedReader in = new BufferedReader(read);// 可用于读取指定文件

			String linDatastr = null;// 定义一个字符串类型变量linDatastr 用于存放一行的文本数据
			String wordStr = null;// 定义一个字符串类型变量wordStr
			int lineCount = 0, // 定义一个整型变量,用于统计行数
					countWords = 0, // 定义整型变量，用于统计字符数
					chineseWords = 0, upperWords = 0, lowerWords = 0, numberWords = 0, otherWords = 0,
					allEnglishWords = 0, countBytes = 0;// 定义一个整型变量，用于统计字节数
			while ((linDatastr = in.readLine()) != null) {// readLine()方法, 用于读取一行,只要读取内容不为空就一直执行
				lineCount++;// 每循环一次就进行一次自增，用于统计文本行数
				countWords += linDatastr.length();// 用于统计总字符数
				byte[] bytes = linDatastr.getBytes();// 求出该行的字节数组
				countBytes += bytes.length;// 用于统计总字节数
				for (int j = 0; j &lt; linDatastr.length(); j++) {// for循环的条件，当j小于该行长度时就一直循环并自增
					wordStr = Character.toString(linDatastr.charAt(j));// 返回一个字符串对象
					if (wordStr.matches(&quot;[\\\\u4e00-\\\\u9fa5]&quot;)) {// if语句的条件，判断是否为汉字
						chineseWords++;// 若为汉字则c1自增
					} else if (wordStr.matches(&quot;[A-Z]&quot;)) {// if语句的条件，判断是否为大写字母
						upperWords++;// 若为大写字母则c2自增
					} else if (wordStr.matches(&quot;[a-z]&quot;)) {// if语句的条件，判断是否为小写字母
						lowerWords++;// 若为小写字母则c3自增
					} else if (wordStr.matches(&quot;[0-9]&quot;)) {// if语句的条件，判断是否为数字
						numberWords++;// 若为数字则c4自增
					} else {// 否则可判断为其他字符
						otherWords++;// 若为其他字符则c5自增
					}
				}
			}
			allEnglishWords = upperWords + lowerWords;// 统计总的字母数
			in.close();// 关闭流
			System.out.println(&quot;该文本共有&quot; + lineCount + &quot;行&quot;);// 输出总的行数
			System.out.println(&quot;该文本共有&quot; + countWords + &quot;个字符&quot;);// 输出总的字符数
			System.out.println(&quot;其中包含：&quot;);// 输出提示信息
			System.out.println(chineseWords + &quot;个汉字&quot;);// 输出汉字数
			System.out.println(allEnglishWords + &quot;个字母，其中&quot; + upperWords + &quot;个大写字母，&quot; + lowerWords + &quot;个小写字母&quot;);// 输出字母数
			System.out.println(numberWords + &quot;个数字&quot;);// 输出数字数
			System.out.println(otherWords + &quot;个其他字符&quot;);// 输出其它字符数
			System.out.println(&quot;该文本共有&quot; + countBytes + &quot;个字节&quot;);// 输出总的字节数

		} catch (IOException e) {// 当try代码块有异常时转到catch代码块
			e.printStackTrace();// printStackTrace()方法是打印异常信息在程序中出错的位置及原因
		}
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>分割线</p><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,28);function d(u,c){return s(),t("div",null,[a(" more "),r])}const v=n(o,[["render",d],["__file","oracle40.html.vue"]]);export{v as default};
