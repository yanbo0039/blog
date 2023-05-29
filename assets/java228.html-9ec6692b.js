const t=JSON.parse(`{"key":"v-5ff09204","path":"/zh/programBlog/ServerSideLanguage/Java/java228.html","title":"Java集合类-HashMap集合","lang":"zh-CN","frontmatter":{"title":"Java集合类-HashMap集合","icon":"page","order":228,"author":"涎涎","date":"2023-01-12T19:12:30.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java228.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java集合类-HashMap集合"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java228.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java集合类-HashMap集合"}],["meta",{"property":"og:description","content":"228-Java集合类-HashMap集合.md 概念 示例代码 package com.tencent.chapter02; import java.util.Collection; import java.util.HashMap; import java.util.Map.Entry; import java.util.Set; public class HashMapDemo { \\tpublic static void main(String[] args) { \\t\\t/** \\t\\t \\t HashMap：键值对存值 \\t\\t \\t \\t\\t\\t\\t1.无序：添加元素的顺序与内存中存储的顺序不一致 \\t\\t\\t\\t2.是否允许重复：key值一般不允许重复（唯一性），value值可以重复 \\t\\t\\t\\t3.允许null值 \\t\\t\\t\\t4.存储结构：哈希存储 \\t\\t\\t\\t5.集合只允许存储引用类型对象，但是基本数据类型可以自动装箱 \\t\\t\\t\\t6.HashMap的效率 &gt; TreeMap的效率 \\t\\t */ \\t\\t//构造一个具有默认初始容量 (16) 和默认加载因子 (0.75) 的空 HashMap \\t\\tHashMap map = new HashMap(); \\t\\tmap.put(null, null); //被覆盖 \\t\\tmap.put(null, \\"123\\"); \\t\\tmap.put(1, \\"张三\\"); \\t\\tmap.put(true, 'a'); \\t\\tmap.put(2, \\"李四\\"); \\t\\tmap.put(3, \\"123\\"); \\t\\t \\t\\tSystem.out.println(map);//{null=123, 1=张三, 2=李四, 3=123, true=a} \\t\\t//clear() 清除键值对 \\t\\t//map.clear(); \\t\\tSystem.out.println(map);//{} \\t\\t//isEmpty() 判断是否为空 \\t\\tSystem.out.println(map.isEmpty());//true \\t\\t \\t\\t//size() 获取键值对的个数 \\t\\tSystem.out.println(map.size());//5 \\t\\t \\t\\t//containsKey(key) 判断是否包含指定key \\t\\tSystem.out.println(map.containsKey(1));//true \\t\\t \\t\\t//containsValue(value) 判断是否包含指定value \\t\\tSystem.out.println(map.containsValue(\\"张三\\"));//true \\t\\t \\t\\t//get(key) 通过key获取value值 \\t\\tSystem.out.println(map.get(2));//李四 \\t\\t \\t\\t//remove(key) 根据指定的key移除键值对 \\t\\tmap.remove(null); \\t\\tSystem.out.println(map);//{1=张三, 2=李四, 3=123, true=a} \\t\\t/** \\t\\t * 遍历 \\t\\t */ \\t\\t//values() ------------获取所有【值】的视图 \\t\\tCollection values = map.values(); \\t\\tfor (Object value : values) { \\t\\t\\tSystem.out.println(\\"值：\\" + value); \\t\\t} \\t\\t \\t\\tSystem.out.println(\\"----------------------\\"); \\t\\t \\t\\t//keySet()------------获取所有【键】的视图 \\t\\tSet keys = map.keySet(); \\t\\tfor (Object key : keys) { \\t\\t\\t \\t\\t\\t//根据key获取value \\t\\t\\tObject value = map.get(key); \\t\\t\\t \\t\\t\\tSystem.out.println(\\"键：\\" + key + \\" 值：\\" + value); \\t\\t} \\t\\t \\t\\tSystem.out.println(\\"----------------------\\"); \\t\\t \\t\\t//enrtySet()------------获取所有【键-值】的视图 \\t\\tSet keyValues = map.entrySet(); \\t\\tfor (Object keyValue : keyValues) { \\t\\t\\tEntry entry = (Entry)keyValue; \\t\\t\\t \\t\\t\\tObject key = entry.getKey(); \\t\\t\\tObject value = entry.getValue(); \\t\\t\\t \\t\\t\\tSystem.out.println(\\"键：\\" + key + \\" 值：\\" + value); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-12T19:12:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java集合类-HashMap集合\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-12T19:12:30.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"228-Java集合类-HashMap集合.md 概念 示例代码 package com.tencent.chapter02; import java.util.Collection; import java.util.HashMap; import java.util.Map.Entry; import java.util.Set; public class HashMapDemo { \\tpublic static void main(String[] args) { \\t\\t/** \\t\\t \\t HashMap：键值对存值 \\t\\t \\t \\t\\t\\t\\t1.无序：添加元素的顺序与内存中存储的顺序不一致 \\t\\t\\t\\t2.是否允许重复：key值一般不允许重复（唯一性），value值可以重复 \\t\\t\\t\\t3.允许null值 \\t\\t\\t\\t4.存储结构：哈希存储 \\t\\t\\t\\t5.集合只允许存储引用类型对象，但是基本数据类型可以自动装箱 \\t\\t\\t\\t6.HashMap的效率 &gt; TreeMap的效率 \\t\\t */ \\t\\t//构造一个具有默认初始容量 (16) 和默认加载因子 (0.75) 的空 HashMap \\t\\tHashMap map = new HashMap(); \\t\\tmap.put(null, null); //被覆盖 \\t\\tmap.put(null, \\"123\\"); \\t\\tmap.put(1, \\"张三\\"); \\t\\tmap.put(true, 'a'); \\t\\tmap.put(2, \\"李四\\"); \\t\\tmap.put(3, \\"123\\"); \\t\\t \\t\\tSystem.out.println(map);//{null=123, 1=张三, 2=李四, 3=123, true=a} \\t\\t//clear() 清除键值对 \\t\\t//map.clear(); \\t\\tSystem.out.println(map);//{} \\t\\t//isEmpty() 判断是否为空 \\t\\tSystem.out.println(map.isEmpty());//true \\t\\t \\t\\t//size() 获取键值对的个数 \\t\\tSystem.out.println(map.size());//5 \\t\\t \\t\\t//containsKey(key) 判断是否包含指定key \\t\\tSystem.out.println(map.containsKey(1));//true \\t\\t \\t\\t//containsValue(value) 判断是否包含指定value \\t\\tSystem.out.println(map.containsValue(\\"张三\\"));//true \\t\\t \\t\\t//get(key) 通过key获取value值 \\t\\tSystem.out.println(map.get(2));//李四 \\t\\t \\t\\t//remove(key) 根据指定的key移除键值对 \\t\\tmap.remove(null); \\t\\tSystem.out.println(map);//{1=张三, 2=李四, 3=123, true=a} \\t\\t/** \\t\\t * 遍历 \\t\\t */ \\t\\t//values() ------------获取所有【值】的视图 \\t\\tCollection values = map.values(); \\t\\tfor (Object value : values) { \\t\\t\\tSystem.out.println(\\"值：\\" + value); \\t\\t} \\t\\t \\t\\tSystem.out.println(\\"----------------------\\"); \\t\\t \\t\\t//keySet()------------获取所有【键】的视图 \\t\\tSet keys = map.keySet(); \\t\\tfor (Object key : keys) { \\t\\t\\t \\t\\t\\t//根据key获取value \\t\\t\\tObject value = map.get(key); \\t\\t\\t \\t\\t\\tSystem.out.println(\\"键：\\" + key + \\" 值：\\" + value); \\t\\t} \\t\\t \\t\\tSystem.out.println(\\"----------------------\\"); \\t\\t \\t\\t//enrtySet()------------获取所有【键-值】的视图 \\t\\tSet keyValues = map.entrySet(); \\t\\tfor (Object keyValue : keyValues) { \\t\\t\\tEntry entry = (Entry)keyValue; \\t\\t\\t \\t\\t\\tObject key = entry.getKey(); \\t\\t\\tObject value = entry.getValue(); \\t\\t\\t \\t\\t\\tSystem.out.println(\\"键：\\" + key + \\" 值：\\" + value); \\t\\t} \\t} }"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":1.9,"words":570},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/228-Java集合类-HashMap集合.md","localizedDate":"2023年1月12日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--228-Java-HashMap-0001aia0587qi5neka.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">228-Java集合类-HashMap集合.md</a></h1>\\n<h4> 概念</h4>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter02;\\n\\nimport java.util.Collection;\\nimport java.util.HashMap;\\nimport java.util.Map.Entry;\\nimport java.util.Set;\\n\\npublic class HashMapDemo {\\n\\n\\tpublic static void main(String[] args) {\\n\\t\\t/**\\n\\t\\t \\t HashMap：键值对存值\\n\\t\\t \\t \\n\\t\\t\\t\\t1.无序：添加元素的顺序与内存中存储的顺序不一致\\n\\t\\t\\t\\t2.是否允许重复：key值一般不允许重复（唯一性），value值可以重复\\n\\t\\t\\t\\t3.允许null值\\n\\t\\t\\t\\t4.存储结构：哈希存储\\n\\t\\t\\t\\t5.集合只允许存储引用类型对象，但是基本数据类型可以自动装箱\\n\\t\\t\\t\\t6.HashMap的效率   &gt; TreeMap的效率\\n\\t\\t */\\n\\t\\t//构造一个具有默认初始容量 (16) 和默认加载因子 (0.75) 的空 HashMap\\n\\t\\tHashMap map = new HashMap();\\n\\t\\tmap.put(null, null); //被覆盖\\n\\t\\tmap.put(null, \\"123\\");\\n\\t\\tmap.put(1, \\"张三\\");\\n\\t\\tmap.put(true, 'a');\\n\\t\\tmap.put(2, \\"李四\\");\\n\\t\\tmap.put(3, \\"123\\");\\n\\t\\t\\n\\t\\tSystem.out.println(map);//{null=123, 1=张三, 2=李四, 3=123, true=a}\\n\\n\\t\\t//clear() 清除键值对\\n\\t\\t//map.clear();\\n\\t\\tSystem.out.println(map);//{}\\n\\n\\t\\t//isEmpty() 判断是否为空\\n\\t\\tSystem.out.println(map.isEmpty());//true\\n\\t\\t \\n\\t\\t//size() 获取键值对的个数\\n\\t\\tSystem.out.println(map.size());//5\\n\\t\\t\\n\\t\\t//containsKey(key) 判断是否包含指定key\\n\\t\\tSystem.out.println(map.containsKey(1));//true\\n\\t\\t\\n\\t\\t//containsValue(value) 判断是否包含指定value\\n\\t\\tSystem.out.println(map.containsValue(\\"张三\\"));//true\\n\\t\\t\\n\\t\\t//get(key) 通过key获取value值\\n\\t\\tSystem.out.println(map.get(2));//李四\\n\\t\\t\\n\\t\\t//remove(key) 根据指定的key移除键值对\\n\\t\\tmap.remove(null);\\n\\t\\tSystem.out.println(map);//{1=张三, 2=李四, 3=123, true=a}\\n\\n\\t\\t/**\\n\\t\\t * 遍历\\n\\t\\t */\\n\\t\\t//values() ------------获取所有【值】的视图\\n\\t\\tCollection values = map.values();\\n\\t\\tfor (Object value : values) {\\n\\t\\t\\tSystem.out.println(\\"值：\\" + value);\\n\\t\\t}\\n\\t\\t\\n\\t\\tSystem.out.println(\\"----------------------\\");\\n\\t\\t\\n\\t\\t//keySet()------------获取所有【键】的视图\\n\\t\\tSet keys = map.keySet();\\n\\t\\tfor (Object key : keys) {\\n\\t\\t\\t\\n\\t\\t\\t//根据key获取value\\n\\t\\t\\tObject value = map.get(key);\\n\\t\\t\\t\\n\\t\\t\\tSystem.out.println(\\"键：\\" + key + \\"  值：\\" + value);\\n\\t\\t}\\n\\t\\t\\n\\t\\tSystem.out.println(\\"----------------------\\");\\n\\t\\t\\n\\t\\t//enrtySet()------------获取所有【键-值】的视图\\n\\t\\tSet keyValues = map.entrySet();\\n\\t\\tfor (Object keyValue : keyValues) {\\n\\t\\t\\tEntry entry = (Entry)keyValue;\\n\\t\\t\\t\\n\\t\\t\\tObject key = entry.getKey();\\n\\t\\t\\tObject value = entry.getValue();\\n\\t\\t\\t\\n\\t\\t\\tSystem.out.println(\\"键：\\" + key + \\"  值：\\" + value);\\n\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};