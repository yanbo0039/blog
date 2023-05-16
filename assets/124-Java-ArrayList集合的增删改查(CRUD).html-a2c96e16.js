const t=JSON.parse('{"key":"v-59e55c43","path":"/zh/programBlog/ServerSideLanguage/Java/124-Java-ArrayList%E9%9B%86%E5%90%88%E7%9A%84%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5(CRUD).html","title":"Java-ArrayList集合的增删改查(CRUD)","lang":"zh-CN","frontmatter":{"title":"Java-ArrayList集合的增删改查(CRUD)","icon":"page","order":124,"author":"涎涎","date":"2019-07-13T00:00:00.000Z","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-ArrayList集合的增删改查(CRUD)"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/124-Java-ArrayList%E9%9B%86%E5%90%88%E7%9A%84%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5(CRUD).html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-ArrayList集合的增删改查(CRUD)"}],["meta",{"property":"og:description","content":"124-Java-ArrayList集合的增删改查(CRUD).md 闲话少说，直接上代码： package List集合; import java.util.ArrayList; import java.util.List; /** * 集合的CRUD * &lt;p&gt;Title: TestArrayList&lt;/p&gt; * &lt;p&gt;Description: &lt;/p&gt; * @author xianxian * @date 2019年7月12日 */ public class TestArrayList { \\t/** \\t * 1. 声明集合时需要把泛型具体化，否则黄色警告 \\t * 2.list集合是三有产品：有序(索引)，有重复，有null值 \\t * &lt;p&gt;Title: main&lt;/p&gt; \\t * &lt;p&gt;Description: &lt;/p&gt; \\t * @param args \\t */ \\tpublic static void main(String[] args) { \\t\\t//1.ArrayList的创建 //\\t\\tList list = new ArrayList(); //\\t\\t //\\t\\tlist.add(\\"abc\\"); //\\t\\t //\\t\\tlist.add(123); \\t\\t //\\t\\tfor (int i = 0; i &lt; list.size(); i++) { //\\t\\t\\tint num = Integer.valueOf((String)list.get(i)); //\\t\\t\\tSystem.out.println(num); //\\t\\t}//这个代码有隐患，会抛出异常，解决方法是声明的时候：List&lt;String&gt; \\t\\t \\t\\tList&lt;Integer&gt; list = new ArrayList&lt;Integer&gt;();//前面声明咯类型后面也要这样写，然后构造方法一组圆括号 \\t\\tlist.add(123); \\t\\tlist.add(null); \\t\\tlist.add(234); \\t\\tlist.add(123); \\t\\t \\t\\tfor (int i = 0; i &lt; list.size(); i++) { \\t\\t\\tSystem.out.println(list.get(i)); \\t\\t} \\t\\tSystem.out.println(\\"list.contains(123): \\" + list.contains(123)); \\t\\t \\t\\t//修改方法 \\t\\tlist.set(0,666); \\t\\tfor (int i = 0; i &lt; list.size(); i++) { \\t\\t\\tSystem.out.println(list.get(i)); \\t\\t} \\t\\t \\t\\tlist.remove(0);//这是真正的删除方法，会把这个元素从集合中拿走，然后后面的元素都往前挪 \\t\\t \\t\\tSystem.out.println(\\"================\\"); \\t\\tSystem.out.println(list.size()); \\t\\t \\t\\tfor (int i = 0; i &lt; list.size(); i++) { \\t\\t\\tSystem.out.println(list.get(i)); \\t\\t} \\t\\t //\\t\\tlist.clear(); //\\t\\tSystem.out.println(list.size()); \\t\\t \\t\\tList subList = list.subList(1,3); \\t\\tSystem.out.println(\\"====================\\"); \\t\\tfor (int i = 0; i &lt; subList.size(); i++) { \\t\\t\\tSystem.out.println(subList.get(i)); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-15T10:10:00.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-07-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-15T10:10:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-ArrayList集合的增删改查(CRUD)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-07-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-15T10:10:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"124-Java-ArrayList集合的增删改查(CRUD).md 闲话少说，直接上代码： package List集合; import java.util.ArrayList; import java.util.List; /** * 集合的CRUD * &lt;p&gt;Title: TestArrayList&lt;/p&gt; * &lt;p&gt;Description: &lt;/p&gt; * @author xianxian * @date 2019年7月12日 */ public class TestArrayList { \\t/** \\t * 1. 声明集合时需要把泛型具体化，否则黄色警告 \\t * 2.list集合是三有产品：有序(索引)，有重复，有null值 \\t * &lt;p&gt;Title: main&lt;/p&gt; \\t * &lt;p&gt;Description: &lt;/p&gt; \\t * @param args \\t */ \\tpublic static void main(String[] args) { \\t\\t//1.ArrayList的创建 //\\t\\tList list = new ArrayList(); //\\t\\t //\\t\\tlist.add(\\"abc\\"); //\\t\\t //\\t\\tlist.add(123); \\t\\t //\\t\\tfor (int i = 0; i &lt; list.size(); i++) { //\\t\\t\\tint num = Integer.valueOf((String)list.get(i)); //\\t\\t\\tSystem.out.println(num); //\\t\\t}//这个代码有隐患，会抛出异常，解决方法是声明的时候：List&lt;String&gt; \\t\\t \\t\\tList&lt;Integer&gt; list = new ArrayList&lt;Integer&gt;();//前面声明咯类型后面也要这样写，然后构造方法一组圆括号 \\t\\tlist.add(123); \\t\\tlist.add(null); \\t\\tlist.add(234); \\t\\tlist.add(123); \\t\\t \\t\\tfor (int i = 0; i &lt; list.size(); i++) { \\t\\t\\tSystem.out.println(list.get(i)); \\t\\t} \\t\\tSystem.out.println(\\"list.contains(123): \\" + list.contains(123)); \\t\\t \\t\\t//修改方法 \\t\\tlist.set(0,666); \\t\\tfor (int i = 0; i &lt; list.size(); i++) { \\t\\t\\tSystem.out.println(list.get(i)); \\t\\t} \\t\\t \\t\\tlist.remove(0);//这是真正的删除方法，会把这个元素从集合中拿走，然后后面的元素都往前挪 \\t\\t \\t\\tSystem.out.println(\\"================\\"); \\t\\tSystem.out.println(list.size()); \\t\\t \\t\\tfor (int i = 0; i &lt; list.size(); i++) { \\t\\t\\tSystem.out.println(list.get(i)); \\t\\t} \\t\\t //\\t\\tlist.clear(); //\\t\\tSystem.out.println(list.size()); \\t\\t \\t\\tList subList = list.subList(1,3); \\t\\tSystem.out.println(\\"====================\\"); \\t\\tfor (int i = 0; i &lt; subList.size(); i++) { \\t\\t\\tSystem.out.println(subList.get(i)); \\t\\t} \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684145400000,"updatedTime":1684145400000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":1}]},"readingTime":{"minutes":1.63,"words":488},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/124-Java-ArrayList集合的增删改查(CRUD).md","localizedDate":"2019年7月13日","excerpt":"<!-- more -->\\n<h1> 124-Java-ArrayList集合的增删改查(CRUD).md</h1>\\n<p>闲话少说，直接上代码：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package List集合;\\n\\nimport java.util.ArrayList;\\nimport java.util.List;\\n\\n/**\\n * 集合的CRUD\\n* &lt;p&gt;Title: TestArrayList&lt;/p&gt;  \\n* &lt;p&gt;Description: &lt;/p&gt;  \\n* @author xianxian \\n* @date 2019年7月12日\\n */\\npublic class TestArrayList {\\n\\n\\t/**\\n\\t * 1. 声明集合时需要把泛型具体化，否则黄色警告\\n\\t * 2.list集合是三有产品：有序(索引)，有重复，有null值\\n\\t * &lt;p&gt;Title: main&lt;/p&gt;  \\n\\t * &lt;p&gt;Description: &lt;/p&gt;  \\n\\t * @param args\\n\\t */\\n\\tpublic static void main(String[] args) {\\n\\t\\t//1.ArrayList的创建\\n//\\t\\tList list = new ArrayList(); \\n//\\t\\t\\n//\\t\\tlist.add(\\"abc\\");\\n//\\t\\t\\n//\\t\\tlist.add(123);\\n\\t\\t\\n//\\t\\tfor (int i = 0; i &lt; list.size(); i++) {\\n//\\t\\t\\tint num = Integer.valueOf((String)list.get(i));\\n//\\t\\t\\tSystem.out.println(num);\\n//\\t\\t}//这个代码有隐患，会抛出异常，解决方法是声明的时候：List&lt;String&gt;\\n\\t\\t\\n\\t\\tList&lt;Integer&gt; list = new ArrayList&lt;Integer&gt;();//前面声明咯类型后面也要这样写，然后构造方法一组圆括号\\n\\t\\tlist.add(123);\\n\\t\\tlist.add(null);\\n\\t\\tlist.add(234);\\n\\t\\tlist.add(123);\\n\\t\\t\\n\\t\\tfor (int i = 0; i &lt; list.size(); i++) {\\n\\t\\t\\tSystem.out.println(list.get(i));\\n\\t\\t}\\n\\t\\tSystem.out.println(\\"list.contains(123): \\" + list.contains(123));\\n\\t\\t\\n\\t\\t//修改方法\\n\\t\\tlist.set(0,666);\\n\\t\\tfor (int i = 0; i &lt; list.size(); i++) {\\n\\t\\t\\tSystem.out.println(list.get(i));\\n\\t\\t}\\n\\t\\t\\n\\t\\tlist.remove(0);//这是真正的删除方法，会把这个元素从集合中拿走，然后后面的元素都往前挪\\n\\t\\t\\n\\t\\tSystem.out.println(\\"================\\");\\n\\t\\tSystem.out.println(list.size());\\n\\t\\t\\n\\t\\tfor (int i = 0; i &lt; list.size(); i++) {\\n\\t\\t\\tSystem.out.println(list.get(i));\\n\\t\\t}\\n\\t\\t\\n//\\t\\tlist.clear();\\n//\\t\\tSystem.out.println(list.size());\\n\\t\\t\\n\\t\\tList subList = list.subList(1,3);\\n\\t\\tSystem.out.println(\\"====================\\");\\n\\t\\tfor (int i = 0; i &lt; subList.size(); i++) {\\n\\t\\t\\tSystem.out.println(subList.get(i));\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
