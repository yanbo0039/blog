const t=JSON.parse('{"key":"v-1bce9a51","path":"/zh/programBlog/ServerSideLanguage/Java/224-Java%E9%9B%86%E5%90%88%E7%B1%BB-LinkeList%E9%9B%86%E5%90%88.html","title":"Java集合类-LinkeList集合","lang":"zh-CN","frontmatter":{"title":"Java集合类-LinkeList集合","icon":"page","order":224,"author":"涎涎","date":"2023-01-12T00:00:00.000Z","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java集合类-LinkeList集合"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/224-Java%E9%9B%86%E5%90%88%E7%B1%BB-LinkeList%E9%9B%86%E5%90%88.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java集合类-LinkeList集合"}],["meta",{"property":"og:description","content":"224-Java集合类-LinkeList集合.md 概念 示例代码 package com.tencent.chapter02; import java.util.LinkedList; public class LinkedListDemo { \\t/** \\t\\tLinkedList: \\t\\t\\t1.有序：添加元素的顺序与内存中存储的顺序一致 \\t\\t\\t2.允许重复 \\t\\t\\t3.允许null值 \\t\\t\\t4.存储结构：链表存储，查询效率较低，但新增与删除效率较高 \\t\\t\\t5.集合只允许存储引用类型对象，但是基本数据类型可以自动装箱 \\t\\t\\t6.LinkedList的方法 &gt; ArrayList的方法 \\t */ \\tpublic static void main(String[] args) { \\t\\t \\t\\t/** \\t\\t * 1.创建对象 \\t\\t */ \\t\\t//构造一个空列 \\t\\tLinkedList list = new LinkedList(); \\t\\tlist.add(null); \\t\\tlist.add(null); \\t\\tlist.add(\\"abc\\"); \\t\\tlist.add(new String(\\"abc\\")); \\t\\tlist.add(10); //自动装箱 基本类型 -&gt; 包装类Integer \\t\\tlist.add(true); //自动装箱 基本类型 -&gt; 包装类Boolean \\t\\t \\t\\tSystem.out.println(list);//[null, null, abc, abc, 10, true] \\t\\t \\t\\t/** \\t\\t * 2.特有的方法：针对首尾元素进行新增、删除、获取等 \\t\\t */ \\t\\t//addFirst() 将元素添加到第一位 \\t\\tlist.addFirst(\\"首部\\"); \\t\\tSystem.out.println(list);//[首部, null, null, abc, abc, 10, true] \\t\\t//addLast() 将元素添加到最后一位 \\t\\tlist.addLast(\\"尾部\\"); \\t\\tSystem.out.println(list);//[首部, null, null, abc, abc, 10, true, 尾部] \\t\\t \\t\\t//getFirst() 获取第一个元素 \\t\\tSystem.out.println(list.getFirst());//首部 \\t\\t \\t\\t//getLast() 获取最后一个元素 \\t\\tSystem.out.println(list.getLast());//尾部 \\t\\t \\t\\t//removeFirst() 删除并返回第一个元素 \\t\\tSystem.out.println(list.removeFirst());//首部 \\t\\tSystem.out.println(list);//[null, null, abc, abc, 10, true, 尾部] \\t\\t \\t\\t//removeLast() 删除并返回最后一个元素 \\t\\tSystem.out.println(list.removeLast());//尾部 \\t\\tSystem.out.println(list); //[null, null, abc, abc, 10, true] \\t\\t \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-12T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java集合类-LinkeList集合\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-12T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"224-Java集合类-LinkeList集合.md 概念 示例代码 package com.tencent.chapter02; import java.util.LinkedList; public class LinkedListDemo { \\t/** \\t\\tLinkedList: \\t\\t\\t1.有序：添加元素的顺序与内存中存储的顺序一致 \\t\\t\\t2.允许重复 \\t\\t\\t3.允许null值 \\t\\t\\t4.存储结构：链表存储，查询效率较低，但新增与删除效率较高 \\t\\t\\t5.集合只允许存储引用类型对象，但是基本数据类型可以自动装箱 \\t\\t\\t6.LinkedList的方法 &gt; ArrayList的方法 \\t */ \\tpublic static void main(String[] args) { \\t\\t \\t\\t/** \\t\\t * 1.创建对象 \\t\\t */ \\t\\t//构造一个空列 \\t\\tLinkedList list = new LinkedList(); \\t\\tlist.add(null); \\t\\tlist.add(null); \\t\\tlist.add(\\"abc\\"); \\t\\tlist.add(new String(\\"abc\\")); \\t\\tlist.add(10); //自动装箱 基本类型 -&gt; 包装类Integer \\t\\tlist.add(true); //自动装箱 基本类型 -&gt; 包装类Boolean \\t\\t \\t\\tSystem.out.println(list);//[null, null, abc, abc, 10, true] \\t\\t \\t\\t/** \\t\\t * 2.特有的方法：针对首尾元素进行新增、删除、获取等 \\t\\t */ \\t\\t//addFirst() 将元素添加到第一位 \\t\\tlist.addFirst(\\"首部\\"); \\t\\tSystem.out.println(list);//[首部, null, null, abc, abc, 10, true] \\t\\t//addLast() 将元素添加到最后一位 \\t\\tlist.addLast(\\"尾部\\"); \\t\\tSystem.out.println(list);//[首部, null, null, abc, abc, 10, true, 尾部] \\t\\t \\t\\t//getFirst() 获取第一个元素 \\t\\tSystem.out.println(list.getFirst());//首部 \\t\\t \\t\\t//getLast() 获取最后一个元素 \\t\\tSystem.out.println(list.getLast());//尾部 \\t\\t \\t\\t//removeFirst() 删除并返回第一个元素 \\t\\tSystem.out.println(list.removeFirst());//首部 \\t\\tSystem.out.println(list);//[null, null, abc, abc, 10, true, 尾部] \\t\\t \\t\\t//removeLast() 删除并返回最后一个元素 \\t\\tSystem.out.println(list.removeLast());//尾部 \\t\\tSystem.out.println(list); //[null, null, abc, abc, 10, true] \\t\\t \\t} }"},"headers":[],"git":{},"readingTime":{"minutes":1.69,"words":506},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/224-Java集合类-LinkeList集合.md","localizedDate":"2023年1月12日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--224-Java-LinkeList-yx54aka8558s44uema.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">224-Java集合类-LinkeList集合.md</a></h1>\\n<h4> 概念</h4>\\n<figure><img src=\\"/assets/Java_224_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter02;\\n\\nimport java.util.LinkedList;\\n\\npublic class LinkedListDemo {\\n\\t/**\\n\\t\\tLinkedList:\\n\\t\\t\\t1.有序：添加元素的顺序与内存中存储的顺序一致\\n\\t\\t\\t2.允许重复\\n\\t\\t\\t3.允许null值\\n\\t\\t\\t4.存储结构：链表存储，查询效率较低，但新增与删除效率较高\\n\\t\\t\\t5.集合只允许存储引用类型对象，但是基本数据类型可以自动装箱\\n\\t\\t\\t6.LinkedList的方法 &gt; ArrayList的方法\\n\\t */\\n\\tpublic static void main(String[] args) {\\n\\t\\t\\n\\t\\t/**\\n\\t\\t * 1.创建对象\\n\\t\\t */\\n\\t\\t//构造一个空列\\n\\t\\tLinkedList list = new LinkedList();\\n\\t\\tlist.add(null);\\n\\t\\tlist.add(null);\\n\\t\\tlist.add(\\"abc\\");\\n\\t\\tlist.add(new String(\\"abc\\"));\\n\\t\\tlist.add(10);   //自动装箱  基本类型 -&gt; 包装类Integer\\n\\t\\tlist.add(true); //自动装箱  基本类型 -&gt; 包装类Boolean\\n\\t\\t\\n\\t\\tSystem.out.println(list);//[null, null, abc, abc, 10, true]\\n\\t\\t\\n\\t\\t/**\\n\\t\\t * 2.特有的方法：针对首尾元素进行新增、删除、获取等\\n\\t\\t */\\n\\t\\t//addFirst() 将元素添加到第一位\\n\\t\\tlist.addFirst(\\"首部\\");\\n\\t\\tSystem.out.println(list);//[首部, null, null, abc, abc, 10, true]\\n\\n\\t\\t//addLast() 将元素添加到最后一位\\n\\t\\tlist.addLast(\\"尾部\\");\\n\\t\\tSystem.out.println(list);//[首部, null, null, abc, abc, 10, true, 尾部]\\n\\t\\t\\n\\t\\t//getFirst() 获取第一个元素\\n\\t\\tSystem.out.println(list.getFirst());//首部\\n\\t\\t\\n\\t\\t//getLast() 获取最后一个元素\\n\\t\\tSystem.out.println(list.getLast());//尾部\\n\\t\\t\\n\\t\\t//removeFirst()  删除并返回第一个元素\\n\\t\\tSystem.out.println(list.removeFirst());//首部\\n\\t\\tSystem.out.println(list);//[null, null, abc, abc, 10, true, 尾部]\\n\\t\\t\\n\\t\\t//removeLast()  删除并返回最后一个元素\\n\\t\\tSystem.out.println(list.removeLast());//尾部\\n\\t\\tSystem.out.println(list); //[null, null, abc, abc, 10, true]\\n\\t\\t\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
