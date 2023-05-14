const t=JSON.parse('{"key":"v-3af6793e","path":"/zh/programBlog/ServerSideLanguage/Java/227-Java%E9%9B%86%E5%90%88%E7%B1%BB-Collections%E9%9B%86%E5%90%88%E5%B7%A5%E5%85%B7%E7%B1%BB.html","title":"Java集合类-Collections集合工具类","lang":"zh-CN","frontmatter":{"title":"Java集合类-Collections集合工具类","icon":"page","order":227,"author":"涎涎","date":"2023-01-12T00:00:00.000Z","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java集合类-Collections集合工具类"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/227-Java%E9%9B%86%E5%90%88%E7%B1%BB-Collections%E9%9B%86%E5%90%88%E5%B7%A5%E5%85%B7%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java集合类-Collections集合工具类"}],["meta",{"property":"og:description","content":"227-Java集合类-Collections集合工具类.md 示例代码 package com.tencent.chapter02; import java.util.ArrayList; import java.util.Collections; public class CollectionsDemo { \\tpublic static void main(String[] args) { \\t\\t//addAll(collection,....elements)添N个加元素 \\t\\tArrayList list = new ArrayList(); \\t\\tCollections.addAll(list, \\"abc\\",123,true,\\"中文\\"); \\t\\t \\t\\tSystem.out.println(list);//[abc, 123, true, 中文] \\t\\t//copy(dest,src) 将所有元素从src复制到dest \\t\\tArrayList src = new ArrayList(); \\t\\tCollections.addAll(src, 1,2,3,4,5); \\t\\t \\t\\tArrayList dest = new ArrayList(); \\t\\tCollections.addAll(dest, 6,7,8,9,10,11); \\t\\t \\t\\tSystem.out.println(\\"复制前src：\\" + src); //[1, 2, 3, 4, 5] \\t\\tSystem.out.println(\\"复制前dest：\\" + dest);//[6, 7, 8, 9, 10, 11] \\t\\t \\t\\tCollections.copy(dest, src); \\t\\t \\t\\tSystem.out.println(\\"复制后src：\\" + src); //[1, 2, 3, 4, 5] \\t\\tSystem.out.println(\\"复制后dest：\\" + dest);//[1, 2, 3, 4, 5, 11] \\t\\t \\t\\t//addAll（） 将dest的元素全部复制到src \\t\\tsrc.addAll(dest); \\t\\tSystem.out.println(\\"addAll复制后src：\\" + src); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] \\t\\tSystem.out.println(\\"addAll复制后dest：\\" + dest);//[1, 2, 3, 4, 5, 11] \\t\\t \\t\\t//fill()使用指定元素填充集合 \\t\\t//Collections.fill(list, null); \\t\\t//System.out.println(list);//[null, null, null, null] \\t\\t \\t\\t//max() 获取集合中最大的元素,必须保证数组元素为同一类型 \\t\\tSystem.out.println(Collections.max(src));//11 \\t\\t \\t\\t//min() 获取集合中最小的元素,必须保证数组元素为同一类型 \\t\\tSystem.out.println(Collections.min(src));//1 \\t\\t \\t\\t//sort() 默认升序排序,必须保证数组元素为同一类型 \\t\\tArrayList list2 = new ArrayList(); \\t\\tCollections.addAll(list2, 66,7,8,129,10,111); \\t\\t \\t\\tCollections.sort(list2); \\t\\tSystem.out.println(list2);//[7, 8, 10, 66, 111, 129] \\t\\t \\t\\t//reverse() 颠倒元素顺序 \\t\\tCollections.reverse(list2); \\t\\tSystem.out.println(list2);//[129, 111, 66, 10, 8, 7] \\t} \\t }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-12T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java集合类-Collections集合工具类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-12T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"227-Java集合类-Collections集合工具类.md 示例代码 package com.tencent.chapter02; import java.util.ArrayList; import java.util.Collections; public class CollectionsDemo { \\tpublic static void main(String[] args) { \\t\\t//addAll(collection,....elements)添N个加元素 \\t\\tArrayList list = new ArrayList(); \\t\\tCollections.addAll(list, \\"abc\\",123,true,\\"中文\\"); \\t\\t \\t\\tSystem.out.println(list);//[abc, 123, true, 中文] \\t\\t//copy(dest,src) 将所有元素从src复制到dest \\t\\tArrayList src = new ArrayList(); \\t\\tCollections.addAll(src, 1,2,3,4,5); \\t\\t \\t\\tArrayList dest = new ArrayList(); \\t\\tCollections.addAll(dest, 6,7,8,9,10,11); \\t\\t \\t\\tSystem.out.println(\\"复制前src：\\" + src); //[1, 2, 3, 4, 5] \\t\\tSystem.out.println(\\"复制前dest：\\" + dest);//[6, 7, 8, 9, 10, 11] \\t\\t \\t\\tCollections.copy(dest, src); \\t\\t \\t\\tSystem.out.println(\\"复制后src：\\" + src); //[1, 2, 3, 4, 5] \\t\\tSystem.out.println(\\"复制后dest：\\" + dest);//[1, 2, 3, 4, 5, 11] \\t\\t \\t\\t//addAll（） 将dest的元素全部复制到src \\t\\tsrc.addAll(dest); \\t\\tSystem.out.println(\\"addAll复制后src：\\" + src); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] \\t\\tSystem.out.println(\\"addAll复制后dest：\\" + dest);//[1, 2, 3, 4, 5, 11] \\t\\t \\t\\t//fill()使用指定元素填充集合 \\t\\t//Collections.fill(list, null); \\t\\t//System.out.println(list);//[null, null, null, null] \\t\\t \\t\\t//max() 获取集合中最大的元素,必须保证数组元素为同一类型 \\t\\tSystem.out.println(Collections.max(src));//11 \\t\\t \\t\\t//min() 获取集合中最小的元素,必须保证数组元素为同一类型 \\t\\tSystem.out.println(Collections.min(src));//1 \\t\\t \\t\\t//sort() 默认升序排序,必须保证数组元素为同一类型 \\t\\tArrayList list2 = new ArrayList(); \\t\\tCollections.addAll(list2, 66,7,8,129,10,111); \\t\\t \\t\\tCollections.sort(list2); \\t\\tSystem.out.println(list2);//[7, 8, 10, 66, 111, 129] \\t\\t \\t\\t//reverse() 颠倒元素顺序 \\t\\tCollections.reverse(list2); \\t\\tSystem.out.println(list2);//[129, 111, 66, 10, 8, 7] \\t} \\t }"},"headers":[],"git":{},"readingTime":{"minutes":1.68,"words":504},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/227-Java集合类-Collections集合工具类.md","localizedDate":"2023年1月12日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--227-Java-Collections-1l96av19ama4171dq17jpa3382poa.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">227-Java集合类-Collections集合工具类.md</a></h1>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter02;\\n\\nimport java.util.ArrayList;\\nimport java.util.Collections;\\n\\npublic class CollectionsDemo {\\n\\n\\tpublic static void main(String[] args) {\\n\\t\\t//addAll(collection,....elements)添N个加元素\\n\\t\\tArrayList list = new ArrayList();\\n\\t\\tCollections.addAll(list, \\"abc\\",123,true,\\"中文\\");\\n\\t\\t\\n\\t\\tSystem.out.println(list);//[abc, 123, true, 中文]\\n\\n\\t\\t//copy(dest,src) 将所有元素从src复制到dest\\n\\t\\tArrayList src = new ArrayList();\\n\\t\\tCollections.addAll(src, 1,2,3,4,5);\\n\\t\\t\\n\\t\\tArrayList dest = new ArrayList();       \\n\\t\\tCollections.addAll(dest, 6,7,8,9,10,11);\\n\\t\\t\\n\\t\\tSystem.out.println(\\"复制前src：\\" + src); //[1, 2, 3, 4, 5]\\n\\t\\tSystem.out.println(\\"复制前dest：\\" + dest);//[6, 7, 8, 9, 10, 11]\\n\\t\\t\\n\\t\\tCollections.copy(dest, src);\\n\\t\\t\\n\\t\\tSystem.out.println(\\"复制后src：\\" + src); //[1, 2, 3, 4, 5]\\n\\t\\tSystem.out.println(\\"复制后dest：\\" + dest);//[1, 2, 3, 4, 5, 11]\\n\\t\\t\\n\\t\\t//addAll（） 将dest的元素全部复制到src\\n\\t\\tsrc.addAll(dest);\\n\\t\\tSystem.out.println(\\"addAll复制后src：\\" + src); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]\\n\\t\\tSystem.out.println(\\"addAll复制后dest：\\" + dest);//[1, 2, 3, 4, 5, 11]\\n\\t\\t\\n\\t\\t//fill()使用指定元素填充集合\\n\\t\\t//Collections.fill(list, null);\\n\\t\\t//System.out.println(list);//[null, null, null, null]\\n\\t\\t\\n\\t\\t//max() 获取集合中最大的元素,必须保证数组元素为同一类型\\n\\t\\tSystem.out.println(Collections.max(src));//11\\n\\t\\t\\n\\t\\t//min() 获取集合中最小的元素,必须保证数组元素为同一类型\\n\\t\\tSystem.out.println(Collections.min(src));//1\\n\\t\\t\\n\\t\\t//sort() 默认升序排序,必须保证数组元素为同一类型\\n\\t\\tArrayList list2 = new ArrayList();       \\n\\t\\tCollections.addAll(list2, 66,7,8,129,10,111);\\n\\t\\t\\n\\t\\tCollections.sort(list2);\\n\\t\\tSystem.out.println(list2);//[7, 8, 10, 66, 111, 129]\\n\\t\\t\\n\\t\\t//reverse() 颠倒元素顺序\\n\\t\\tCollections.reverse(list2);\\n\\t\\tSystem.out.println(list2);//[129, 111, 66, 10, 8, 7]\\n\\t}\\n\\t\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
