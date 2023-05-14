const n=JSON.parse(`{"key":"v-fea97b28","path":"/zh/programBlog/ServerSideLanguage/Java/83-Java-int%E7%B1%BB%E5%9E%8B%E5%92%8Clong%E7%B1%BB%E5%9E%8B%E7%9A%84%E8%AE%B2%E8%A7%A3.html","title":"Java-int类型和long类型的讲解","lang":"zh-CN","frontmatter":{"title":"Java-int类型和long类型的讲解","icon":"page","order":83,"author":"涎涎","date":"2019-07-02T00:00:00.000Z","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-int类型和long类型的讲解"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/83-Java-int%E7%B1%BB%E5%9E%8B%E5%92%8Clong%E7%B1%BB%E5%9E%8B%E7%9A%84%E8%AE%B2%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-int类型和long类型的讲解"}],["meta",{"property":"og:description","content":"83-Java-int类型和long类型的讲解.md int t1 = 1000; int t2 = 0b0101;//二进制 int t3 = 034567;//八进制 int t4 = 0X9ef;//十六进制 int t5 = 'q';//查询对应的ASCII码表得到对应的int值 int t6 = '\\\\u1234';//查询对应的ASCII码表得到对应的int值 int t7 = '\\\\n';//查询对应的ASCII码表得到对应的int值 System.out.println(\\"int min value:\\" + Integer.MIN_VALUE);//-2147483648 System.out.println(\\"int max value:\\" + Integer.MAX_VALUE);//2147483647 //隐式转换是自动进行的，从小房间搬到大房间，不会造成精度丢失 long g1 = 100;//首先内存开辟咯一个32位房间，住着100，然后自动把房间升级到64位，给到g1 //1000L java虚拟机认为它就是long型，直接给64位房间，不会隐式转换 long g2 = 1000L;//long型赋值一般会在后面加个L，表示告诉java虚拟机这是long类型，不会发生隐式转换 // 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 // ---- ---- ---- ---- ---- ---- ---- ---- 0000 0000 0000 0000 0000 0000 0000 0000 //显式转换是手动进行的，也叫做强制转换，从大房间搬到小房间，会造成精度丢失 int w = (int) g1;//这样会造成精度丢失 System.out.println(\\"long min value: \\" + Long.MIN_VALUE);//-9223372036854775808 System.out.println(\\"long max value: \\" + Long.MAX_VALUE);//9223372036854775807"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-02T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-int类型和long类型的讲解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-02T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"83-Java-int类型和long类型的讲解.md int t1 = 1000; int t2 = 0b0101;//二进制 int t3 = 034567;//八进制 int t4 = 0X9ef;//十六进制 int t5 = 'q';//查询对应的ASCII码表得到对应的int值 int t6 = '\\\\u1234';//查询对应的ASCII码表得到对应的int值 int t7 = '\\\\n';//查询对应的ASCII码表得到对应的int值 System.out.println(\\"int min value:\\" + Integer.MIN_VALUE);//-2147483648 System.out.println(\\"int max value:\\" + Integer.MAX_VALUE);//2147483647 //隐式转换是自动进行的，从小房间搬到大房间，不会造成精度丢失 long g1 = 100;//首先内存开辟咯一个32位房间，住着100，然后自动把房间升级到64位，给到g1 //1000L java虚拟机认为它就是long型，直接给64位房间，不会隐式转换 long g2 = 1000L;//long型赋值一般会在后面加个L，表示告诉java虚拟机这是long类型，不会发生隐式转换 // 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 // ---- ---- ---- ---- ---- ---- ---- ---- 0000 0000 0000 0000 0000 0000 0000 0000 //显式转换是手动进行的，也叫做强制转换，从大房间搬到小房间，会造成精度丢失 int w = (int) g1;//这样会造成精度丢失 System.out.println(\\"long min value: \\" + Long.MIN_VALUE);//-9223372036854775808 System.out.println(\\"long max value: \\" + Long.MAX_VALUE);//9223372036854775807"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{},"readingTime":{"minutes":1.86,"words":559},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/83-Java-int类型和long类型的讲解.md","localizedDate":"2019年7月2日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--83-Java-intlong-hb5zs68afa5671mm6yaga0266eiyi.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">83-Java-int类型和long类型的讲解.md</a></h1>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>int t1 = 1000;\\nint t2 = 0b0101;//二进制\\nint t3 = 034567;//八进制\\nint t4 = 0X9ef;//十六进制\\nint t5 = 'q';//查询对应的ASCII码表得到对应的int值\\nint t6 = '\\\\u1234';//查询对应的ASCII码表得到对应的int值\\nint t7 = '\\\\n';//查询对应的ASCII码表得到对应的int值\\nSystem.out.println(\\"int min value:\\" + Integer.MIN_VALUE);//-2147483648\\nSystem.out.println(\\"int max value:\\" + Integer.MAX_VALUE);//2147483647\\n\\n//隐式转换是自动进行的，从小房间搬到大房间，不会造成精度丢失\\nlong g1 = 100;//首先内存开辟咯一个32位房间，住着100，然后自动把房间升级到64位，给到g1\\n//1000L java虚拟机认为它就是long型，直接给64位房间，不会隐式转换\\nlong g2 = 1000L;//long型赋值一般会在后面加个L，表示告诉java虚拟机这是long类型，不会发生隐式转换\\n// 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000\\n// ---- ---- ---- ---- ---- ---- ---- ---- 0000 0000 0000 0000 0000 0000 0000 0000\\n//显式转换是手动进行的，也叫做强制转换，从大房间搬到小房间，会造成精度丢失\\nint w = (int) g1;//这样会造成精度丢失\\nSystem.out.println(\\"long min value: \\" + Long.MIN_VALUE);//-9223372036854775808\\nSystem.out.println(\\"long max value: \\" + Long.MAX_VALUE);//9223372036854775807\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
