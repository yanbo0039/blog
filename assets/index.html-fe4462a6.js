const t=JSON.parse('{"key":"v-7b59fe2a","path":"/zh/java120/","title":"Java-字符串类String对象的创建原理","lang":"zh-CN","frontmatter":{"title":"Java-字符串类String对象的创建原理","icon":"page","order":120,"author":"涎涎","date":"2019-07-12T09:59:05.000Z","isOriginal":true,"permalinkPattern":"java120","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-字符串类String对象的创建原理"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/java120/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-字符串类String对象的创建原理"}],["meta",{"property":"og:description","content":"120-Java-字符串类String对象的创建原理.md 字符串是我们在编程中最常使用的一种数据类型，它的表现形式可以分为两种：String和StringBuffer。 它不属于8种基本的数据类型，而是一种引用类型。 String对象代表一组不可改变的Unicode字符序列，对它的任何修改实际上又产生一个新的字符串，String类对象的内容一旦被初始化就不能再改变。 StringBuffer对象代表一组可改变的Unicode字符序列。 同时，String类是final类型的类。 String的创建：有两种方式: 静态方式（常用）。像是给变量直接赋值一样来使用。如：String s1 = “abc”; String s2 = “abc”; 动态方式。动态的内存分配，使用new运算符。如：String s3= new String(“abc”); String s4= new String(“abc”);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-12T09:59:05.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-字符串类String对象的创建原理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-12T09:59:05.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"120-Java-字符串类String对象的创建原理.md 字符串是我们在编程中最常使用的一种数据类型，它的表现形式可以分为两种：String和StringBuffer。 它不属于8种基本的数据类型，而是一种引用类型。 String对象代表一组不可改变的Unicode字符序列，对它的任何修改实际上又产生一个新的字符串，String类对象的内容一旦被初始化就不能再改变。 StringBuffer对象代表一组可改变的Unicode字符序列。 同时，String类是final类型的类。 String的创建：有两种方式: 静态方式（常用）。像是给变量直接赋值一样来使用。如：String s1 = “abc”; String s2 = “abc”; 动态方式。动态的内存分配，使用new运算符。如：String s3= new String(“abc”); String s4= new String(“abc”);"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":4.51,"words":1354},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/120-Java-字符串类String对象的创建原理.md","localizedDate":"2019年7月12日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--120-Java-String-313xn00ctngp64b1wcpvw1h3if8l960avmhw05i.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">120-Java-字符串类String对象的创建原理.md</a></h1>\\n<ul>\\n<li>\\n<p>字符串是我们在编程中最常使用的一种数据类型，它的表现形式可以分为两种：String和StringBuffer。</p>\\n</li>\\n<li>\\n<p>它不属于8种基本的数据类型，而是一种引用类型。</p>\\n</li>\\n<li>\\n<p>String对象代表一组不可改变的Unicode字符序列，对它的任何修改实际上又产生一个新的字符串，String类对象的内容一旦被初始化就不能再改变。</p>\\n</li>\\n<li>\\n<p>StringBuffer对象代表一组可改变的Unicode字符序列。</p>\\n</li>\\n<li>\\n<p>同时，String类是final类型的类。</p>\\n</li>\\n<li>\\n<p>String的创建：有两种方式:</p>\\n<ul>\\n<li>静态方式（常用）。像是给变量直接赋值一样来使用。如：String s1 = “abc”; String s2 = “abc”;</li>\\n<li>动态方式。动态的内存分配，使用new运算符。如：String s3= new String(“abc”); String s4= new String(“abc”);</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{t as data};