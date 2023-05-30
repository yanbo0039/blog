const t=JSON.parse('{"key":"v-f8d8e414","path":"/zh/programBlog/ServerSideLanguage/Java/java33.html","title":"Java中级测试题四-多线程编程(4-4)","lang":"zh-CN","frontmatter":{"title":"Java中级测试题四-多线程编程(4-4)","icon":"page","order":33,"author":"涎涎","date":"2019-06-16T22:14:19.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java33.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java中级测试题四-多线程编程(4-4)"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java33.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java中级测试题四-多线程编程(4-4)"}],["meta",{"property":"og:description","content":"Java中级测试题四-多线程编程(4-4) 利用Thread实现，要求多线程求解某范围素数每个线程负责1000范围：线程1找1-1000；线程&nbsp;2&nbsp;找&nbsp;1001-2000；线程&nbsp;3&nbsp;找2001-3000。编程程序将每个线程找到的素数及时打印。 public class Topic1 extends Thread{ \\tprivate int startNumber; \\tprivate int endNumber; \\t \\tpublic Topic1() { \\t\\tsuper(); \\t} \\tpublic Topic1(int startNumber, int endNumber) { \\t\\tsuper(); \\t\\tthis.startNumber = startNumber; \\t\\tthis.endNumber = endNumber; \\t} \\t@Override \\tpublic String toString() { \\t\\treturn \\"Topic1 [startNumber=\\" + startNumber + \\", endNumber=\\" + endNumber + \\"]\\"; \\t} \\tpublic int getStartNumber() { \\t\\treturn startNumber; \\t} \\tpublic void setStartNumber(int startNumber) { \\t\\tthis.startNumber = startNumber; \\t} \\tpublic int getEndNumber() { \\t\\treturn endNumber; \\t} \\tpublic void setEndNumber(int endNumber) { \\t\\tthis.endNumber = endNumber; \\t} \\t \\tpublic void isPrime() { \\t\\t boolean flag; \\t for(int i = this.startNumber;i&lt;=this.endNumber;i++) { \\t flag = false; \\t for(int j = 2;j &lt; i;j++) { \\t if(i % j == 0) { \\t flag = true; \\t break; \\t } \\t } \\t if(flag == false) { \\t System.out.println(i); \\t } \\t } \\t} \\t@Override \\tpublic void run(){ \\t\\tthis.isPrime(); \\t} \\tpublic static void main(String[] args) { \\t\\tTopic1 tp1 = new Topic1(1,1000); \\t\\tTopic1 tp2 = new Topic1(1001,2000); \\t\\tTopic1 tp3 = new Topic1(2001,3000); \\t\\t \\t\\tThread td1 = new Thread(tp1); \\t\\ttd1.start(); \\t\\tThread td2 = new Thread(tp2); \\t\\ttd2.start(); \\t\\tThread td3 = new Thread(tp3); \\t\\ttd3.start(); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-30T04:53:46.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:14:19.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-30T04:53:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java中级测试题四-多线程编程(4-4)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:14:19.000Z\\",\\"dateModified\\":\\"2023-05-30T04:53:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java中级测试题四-多线程编程(4-4) 利用Thread实现，要求多线程求解某范围素数每个线程负责1000范围：线程1找1-1000；线程&nbsp;2&nbsp;找&nbsp;1001-2000；线程&nbsp;3&nbsp;找2001-3000。编程程序将每个线程找到的素数及时打印。 public class Topic1 extends Thread{ \\tprivate int startNumber; \\tprivate int endNumber; \\t \\tpublic Topic1() { \\t\\tsuper(); \\t} \\tpublic Topic1(int startNumber, int endNumber) { \\t\\tsuper(); \\t\\tthis.startNumber = startNumber; \\t\\tthis.endNumber = endNumber; \\t} \\t@Override \\tpublic String toString() { \\t\\treturn \\"Topic1 [startNumber=\\" + startNumber + \\", endNumber=\\" + endNumber + \\"]\\"; \\t} \\tpublic int getStartNumber() { \\t\\treturn startNumber; \\t} \\tpublic void setStartNumber(int startNumber) { \\t\\tthis.startNumber = startNumber; \\t} \\tpublic int getEndNumber() { \\t\\treturn endNumber; \\t} \\tpublic void setEndNumber(int endNumber) { \\t\\tthis.endNumber = endNumber; \\t} \\t \\tpublic void isPrime() { \\t\\t boolean flag; \\t for(int i = this.startNumber;i&lt;=this.endNumber;i++) { \\t flag = false; \\t for(int j = 2;j &lt; i;j++) { \\t if(i % j == 0) { \\t flag = true; \\t break; \\t } \\t } \\t if(flag == false) { \\t System.out.println(i); \\t } \\t } \\t} \\t@Override \\tpublic void run(){ \\t\\tthis.isPrime(); \\t} \\tpublic static void main(String[] args) { \\t\\tTopic1 tp1 = new Topic1(1,1000); \\t\\tTopic1 tp2 = new Topic1(1001,2000); \\t\\tTopic1 tp3 = new Topic1(2001,3000); \\t\\t \\t\\tThread td1 = new Thread(tp1); \\t\\ttd1.start(); \\t\\tThread td2 = new Thread(tp2); \\t\\ttd2.start(); \\t\\tThread td3 = new Thread(tp3); \\t\\ttd3.start(); \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685422426000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":4}]},"readingTime":{"minutes":3.59,"words":1078},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/33-Java中级测试题四-多线程编程(4-4).md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java中级测试题四-多线程编程(4-4)</h1>\\n<ol>\\n<li>利用Thread实现，要求多线程求解某范围素数每个线程负责1000范围：线程1找1-1000；线程&nbsp;2&nbsp;找&nbsp;1001-2000；线程&nbsp;3&nbsp;找2001-3000。编程程序将每个线程找到的素数及时打印。</li>\\n</ol>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>public class Topic1 extends Thread{\\n\\n\\tprivate int startNumber;\\n\\tprivate int endNumber;\\n\\t\\n\\tpublic Topic1() {\\n\\t\\tsuper();\\n\\t}\\n\\n\\tpublic Topic1(int startNumber, int endNumber) {\\n\\t\\tsuper();\\n\\t\\tthis.startNumber = startNumber;\\n\\t\\tthis.endNumber = endNumber;\\n\\t}\\n\\n\\t@Override\\n\\tpublic String toString() {\\n\\t\\treturn \\"Topic1 [startNumber=\\" + startNumber + \\", endNumber=\\" + endNumber + \\"]\\";\\n\\t}\\n\\n\\tpublic int getStartNumber() {\\n\\t\\treturn startNumber;\\n\\t}\\n\\n\\tpublic void setStartNumber(int startNumber) {\\n\\t\\tthis.startNumber = startNumber;\\n\\t}\\n\\n\\tpublic int getEndNumber() {\\n\\t\\treturn endNumber;\\n\\t}\\n\\n\\tpublic void setEndNumber(int endNumber) {\\n\\t\\tthis.endNumber = endNumber;\\n\\t}\\n\\t\\n\\tpublic void isPrime() {\\n\\t\\t   boolean flag;\\n\\t        for(int i = this.startNumber;i&lt;=this.endNumber;i++) {\\n\\t            flag = false;\\n\\t            for(int j = 2;j &lt; i;j++) {\\n\\t                if(i % j == 0) {\\n\\t                    flag = true;\\n\\t                    break;\\n\\t                }\\n\\t            }\\n\\t            if(flag == false) {\\n\\t                System.out.println(i);\\n\\t            }\\n\\t        }\\n\\t}\\n\\t@Override\\n\\tpublic void run(){\\n\\t\\tthis.isPrime();\\n\\t}\\n\\n\\tpublic static void main(String[] args) {\\n\\t\\tTopic1 tp1 = new Topic1(1,1000);\\n\\t\\tTopic1 tp2 = new Topic1(1001,2000);\\n\\t\\tTopic1 tp3 = new Topic1(2001,3000);\\n\\t\\t\\n\\t\\tThread td1 = new Thread(tp1);\\n\\t\\ttd1.start();\\n\\t\\tThread td2 = new Thread(tp2);\\n\\t\\ttd2.start();\\n\\t\\tThread td3 = new Thread(tp3);\\n\\t\\ttd3.start();\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
