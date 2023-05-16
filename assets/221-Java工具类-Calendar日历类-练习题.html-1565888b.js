const t=JSON.parse('{"key":"v-17312526","path":"/zh/programBlog/ServerSideLanguage/Java/221-Java%E5%B7%A5%E5%85%B7%E7%B1%BB-Calendar%E6%97%A5%E5%8E%86%E7%B1%BB-%E7%BB%83%E4%B9%A0%E9%A2%98.html","title":"Java工具类-Calendar日历类-练习题","lang":"zh-CN","frontmatter":{"title":"Java工具类-Calendar日历类-练习题","icon":"page","order":221,"author":"涎涎","date":"2023-01-12T00:00:00.000Z","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java工具类-Calendar日历类-练习题"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/221-Java%E5%B7%A5%E5%85%B7%E7%B1%BB-Calendar%E6%97%A5%E5%8E%86%E7%B1%BB-%E7%BB%83%E4%B9%A0%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java工具类-Calendar日历类-练习题"}],["meta",{"property":"og:description","content":"221-Java工具类-Calendar日历类-练习题.md 示例代码 package com.tencent.chapter01.日期类.练习; import java.text.ParseException; import java.text.SimpleDateFormat; import java.util.Date; import java.util.Scanner; /** * 9. 【综合练习】输入日期格式字符串作为商品的生产日期，输入保质期（天）；计算截止到今天，该商品还有多少天会过保质期 \\t1、控制台输入字符串转为日期格式 \\t2、将输入日期增加保质期天数 \\t3、取得当前系统日期，比较两个日期，如果过期输出“该商品已经过期” \\t \\t4、如果没有过期，输出天数 */ public class _01 { \\tpublic static void main(String[] args) throws ParseException { \\t\\tScanner scanner = new Scanner(System.in); \\t\\t \\t\\t//1、控制台输入字符串转为日期格式 \\t\\tSystem.out.println(\\"请输入商品的生产日期:（yyyy-MM-dd）\\"); \\t\\tString strDate = scanner.nextLine(); \\t\\t \\t\\t//字符串 -&gt; 日期 \\t\\tSimpleDateFormat sdf = new SimpleDateFormat(\\"yyyy-MM-dd\\"); \\t\\tDate produceDate = sdf.parse(strDate); \\t\\t \\t\\t//输入保质期天数 \\t\\tSystem.out.println(\\"请输入保质期（天）：\\"); \\t\\tlong day = scanner.nextLong(); \\t\\t \\t\\t//2、将输入日期增加保质期天数（得到：过期日期） \\t\\tlong millionSecond = produceDate.getTime() + day*24*60*60*1000; \\t\\tDate deadLineDate = new Date(millionSecond); \\t\\t \\t\\t//今天的日期 \\t\\tDate today = new Date(); \\t\\tSystem.out.println(\\"今天的日期为：\\" + sdf.format(today) ); \\t\\tSystem.out.println(\\"过期的日期为：\\" + sdf.format(deadLineDate) ); \\t\\t \\t\\t//3、取得当前系统日期，比较两个日期，如果过期输出“该商品已经过期” \\t\\tif(deadLineDate.compareTo(today) == -1) \\t\\t{ \\t\\t\\tSystem.out.println(\\"该商品已经过期\\"); \\t\\t} \\t\\t//4、如果没有过期，输出天数 \\t\\telse \\t\\t{ \\t\\t\\t//剩余天数 \\t\\t\\tlong availableDays = (deadLineDate.getTime() - today.getTime())/1000/60/60/24; \\t\\t\\tSystem.out.println(\\"还有 \\" + availableDays + \\"天过期\\"); \\t\\t} \\t} \\t }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-15T10:10:00.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-15T10:10:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java工具类-Calendar日历类-练习题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-15T10:10:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"221-Java工具类-Calendar日历类-练习题.md 示例代码 package com.tencent.chapter01.日期类.练习; import java.text.ParseException; import java.text.SimpleDateFormat; import java.util.Date; import java.util.Scanner; /** * 9. 【综合练习】输入日期格式字符串作为商品的生产日期，输入保质期（天）；计算截止到今天，该商品还有多少天会过保质期 \\t1、控制台输入字符串转为日期格式 \\t2、将输入日期增加保质期天数 \\t3、取得当前系统日期，比较两个日期，如果过期输出“该商品已经过期” \\t \\t4、如果没有过期，输出天数 */ public class _01 { \\tpublic static void main(String[] args) throws ParseException { \\t\\tScanner scanner = new Scanner(System.in); \\t\\t \\t\\t//1、控制台输入字符串转为日期格式 \\t\\tSystem.out.println(\\"请输入商品的生产日期:（yyyy-MM-dd）\\"); \\t\\tString strDate = scanner.nextLine(); \\t\\t \\t\\t//字符串 -&gt; 日期 \\t\\tSimpleDateFormat sdf = new SimpleDateFormat(\\"yyyy-MM-dd\\"); \\t\\tDate produceDate = sdf.parse(strDate); \\t\\t \\t\\t//输入保质期天数 \\t\\tSystem.out.println(\\"请输入保质期（天）：\\"); \\t\\tlong day = scanner.nextLong(); \\t\\t \\t\\t//2、将输入日期增加保质期天数（得到：过期日期） \\t\\tlong millionSecond = produceDate.getTime() + day*24*60*60*1000; \\t\\tDate deadLineDate = new Date(millionSecond); \\t\\t \\t\\t//今天的日期 \\t\\tDate today = new Date(); \\t\\tSystem.out.println(\\"今天的日期为：\\" + sdf.format(today) ); \\t\\tSystem.out.println(\\"过期的日期为：\\" + sdf.format(deadLineDate) ); \\t\\t \\t\\t//3、取得当前系统日期，比较两个日期，如果过期输出“该商品已经过期” \\t\\tif(deadLineDate.compareTo(today) == -1) \\t\\t{ \\t\\t\\tSystem.out.println(\\"该商品已经过期\\"); \\t\\t} \\t\\t//4、如果没有过期，输出天数 \\t\\telse \\t\\t{ \\t\\t\\t//剩余天数 \\t\\t\\tlong availableDays = (deadLineDate.getTime() - today.getTime())/1000/60/60/24; \\t\\t\\tSystem.out.println(\\"还有 \\" + availableDays + \\"天过期\\"); \\t\\t} \\t} \\t }"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684145400000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":1}]},"readingTime":{"minutes":3.99,"words":1197},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/221-Java工具类-Calendar日历类-练习题.md","localizedDate":"2023年1月12日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--221-Java-Calendar--6h32ay56bqgktp1deqzbsj3hla992mr53o.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">221-Java工具类-Calendar日历类-练习题.md</a></h1>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter01.日期类.练习;\\n\\nimport java.text.ParseException;\\nimport java.text.SimpleDateFormat;\\nimport java.util.Date;\\nimport java.util.Scanner;\\n\\n/**\\n * 9. 【综合练习】输入日期格式字符串作为商品的生产日期，输入保质期（天）；计算截止到今天，该商品还有多少天会过保质期\\n\\t1、控制台输入字符串转为日期格式\\n\\t2、将输入日期增加保质期天数\\n\\t3、取得当前系统日期，比较两个日期，如果过期输出“该商品已经过期”\\n  \\t    \\n\\t4、如果没有过期，输出天数\\n */\\npublic class _01 {\\n\\n\\tpublic static void main(String[] args) throws ParseException {\\n\\t\\tScanner scanner = new Scanner(System.in);\\n\\t\\t\\n\\t\\t//1、控制台输入字符串转为日期格式\\n\\t\\tSystem.out.println(\\"请输入商品的生产日期:（yyyy-MM-dd）\\");\\n\\t\\tString strDate = scanner.nextLine();\\n\\t\\t\\n\\t\\t//字符串 -&gt; 日期\\n\\t\\tSimpleDateFormat sdf = new SimpleDateFormat(\\"yyyy-MM-dd\\");\\n\\t\\tDate produceDate = sdf.parse(strDate);\\n\\t\\t\\n\\t\\t//输入保质期天数\\n\\t\\tSystem.out.println(\\"请输入保质期（天）：\\");\\n\\t\\tlong day = scanner.nextLong();\\n\\t\\t\\n\\t\\t//2、将输入日期增加保质期天数（得到：过期日期）\\n\\t\\tlong millionSecond = produceDate.getTime() + day*24*60*60*1000;\\n\\t\\tDate deadLineDate = new Date(millionSecond);\\n\\t\\t\\n\\t\\t//今天的日期\\n\\t\\tDate today = new Date();\\n\\t\\tSystem.out.println(\\"今天的日期为：\\" + sdf.format(today) );\\n\\t\\tSystem.out.println(\\"过期的日期为：\\" + sdf.format(deadLineDate) );\\n\\t\\t\\n\\t\\t//3、取得当前系统日期，比较两个日期，如果过期输出“该商品已经过期”\\n\\t\\tif(deadLineDate.compareTo(today) == -1)\\n\\t\\t{\\n\\t\\t\\tSystem.out.println(\\"该商品已经过期\\");\\n\\t\\t}\\n\\t\\t//4、如果没有过期，输出天数\\n\\t\\telse\\n\\t\\t{\\n\\t\\t\\t//剩余天数\\n\\t\\t\\tlong availableDays = (deadLineDate.getTime() - today.getTime())/1000/60/60/24;\\n\\t\\t\\tSystem.out.println(\\"还有 \\" + availableDays + \\"天过期\\");\\n\\t\\t}\\n\\t}\\n\\t\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
