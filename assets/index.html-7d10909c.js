const t=JSON.parse('{"key":"v-1cc0db00","path":"/zh/java27/","title":"Java初级测试题六-面向对象基础(7-7)","lang":"zh-CN","frontmatter":{"title":"Java初级测试题六-面向对象基础(7-7)","icon":"page","order":27,"author":"涎涎","date":"2019-06-16T22:11:28.000Z","isOriginal":true,"permalinkPattern":"java27","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java初级测试题六-面向对象基础(7-7)"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/java27/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java初级测试题六-面向对象基础(7-7)"}],["meta",{"property":"og:description","content":"Java初级测试题六-面向对象基础(7-7) 定义一个点类Point，包含2个成员变量x、y分别表示x和y坐标，2个构造器Point()和Point(int x0,y0),以及一个movePoint（int dx,int dy）方法实现点的位置移动，创建两个Point对象p1、p2，分别调用movePoint方法后，打印p1和p2的坐标。 package chapter6; public class Point { \\t //\\t1、定义一个点类Point， //\\t包含2个成员变量x、y分别表示x和y坐标， //\\t2个构造器Point()和Point(int x0,y0),以及一个movePoint（int dx,int dy） //\\t方法实现点的位置移动，创建两个Point对象p1、p2， //\\t分别调用movePoint方法后，打印p1和p2的坐标。 \\t \\tprivate int x;//x坐标 \\tprivate int y;//y坐标 \\t \\tpublic int getX() { \\t\\treturn x; \\t} \\tpublic void setX(int x) { \\t\\tthis.x = x; \\t} \\tpublic int getY() { \\t\\treturn y; \\t} \\tpublic void setY(int y) { \\t\\tthis.y = y; \\t} \\t@Override \\tpublic String toString() { \\t\\treturn \\"Point [x=\\" + x + \\", y=\\" + y + \\"]\\"; \\t} \\tpublic Point() {//空的构造方法 \\t\\t \\t} \\t \\tpublic Point(int x0,int y0) {//有参构造方法 \\t\\tthis.x = x0; \\t\\tthis.y = y0; \\t} \\t \\t \\tpublic void movePoint(int dx,int dy) {//移动点的方法 \\t\\tthis.x = dx; \\t\\tthis.y = dy; \\t} \\t \\t \\tpublic static void main(String[] args) {//测试类 \\t\\tPoint p1 = new Point(); \\t\\tp1.movePoint(10, 20); \\t\\tSystem.out.println(p1.toString()); \\t\\t \\t\\tPoint p2 = new Point(); \\t\\tp2.movePoint(20, 30); \\t\\tSystem.out.println(p2.toString()); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:11:28.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java初级测试题六-面向对象基础(7-7)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:11:28.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java初级测试题六-面向对象基础(7-7) 定义一个点类Point，包含2个成员变量x、y分别表示x和y坐标，2个构造器Point()和Point(int x0,y0),以及一个movePoint（int dx,int dy）方法实现点的位置移动，创建两个Point对象p1、p2，分别调用movePoint方法后，打印p1和p2的坐标。 package chapter6; public class Point { \\t //\\t1、定义一个点类Point， //\\t包含2个成员变量x、y分别表示x和y坐标， //\\t2个构造器Point()和Point(int x0,y0),以及一个movePoint（int dx,int dy） //\\t方法实现点的位置移动，创建两个Point对象p1、p2， //\\t分别调用movePoint方法后，打印p1和p2的坐标。 \\t \\tprivate int x;//x坐标 \\tprivate int y;//y坐标 \\t \\tpublic int getX() { \\t\\treturn x; \\t} \\tpublic void setX(int x) { \\t\\tthis.x = x; \\t} \\tpublic int getY() { \\t\\treturn y; \\t} \\tpublic void setY(int y) { \\t\\tthis.y = y; \\t} \\t@Override \\tpublic String toString() { \\t\\treturn \\"Point [x=\\" + x + \\", y=\\" + y + \\"]\\"; \\t} \\tpublic Point() {//空的构造方法 \\t\\t \\t} \\t \\tpublic Point(int x0,int y0) {//有参构造方法 \\t\\tthis.x = x0; \\t\\tthis.y = y0; \\t} \\t \\t \\tpublic void movePoint(int dx,int dy) {//移动点的方法 \\t\\tthis.x = dx; \\t\\tthis.y = dy; \\t} \\t \\t \\tpublic static void main(String[] args) {//测试类 \\t\\tPoint p1 = new Point(); \\t\\tp1.movePoint(10, 20); \\t\\tSystem.out.println(p1.toString()); \\t\\t \\t\\tPoint p2 = new Point(); \\t\\tp2.movePoint(20, 30); \\t\\tSystem.out.println(p2.toString()); \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":8.2,"words":2461},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/27-Java初级测试题六-面向对象基础(7-7).md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java初级测试题六-面向对象基础(7-7)</h1>\\n<ol>\\n<li>定义一个点类Point，包含2个成员变量x、y分别表示x和y坐标，2个构造器Point()和Point(int x0,y0),以及一个movePoint（int dx,int dy）方法实现点的位置移动，创建两个Point对象p1、p2，分别调用movePoint方法后，打印p1和p2的坐标。</li>\\n</ol>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package chapter6;\\n\\npublic class Point {\\n\\t\\n//\\t1、定义一个点类Point，\\n//\\t包含2个成员变量x、y分别表示x和y坐标，\\n//\\t2个构造器Point()和Point(int x0,y0),以及一个movePoint（int dx,int dy）\\n//\\t方法实现点的位置移动，创建两个Point对象p1、p2，\\n//\\t分别调用movePoint方法后，打印p1和p2的坐标。\\n\\t\\n\\tprivate int x;//x坐标\\n\\tprivate int y;//y坐标\\n\\t\\n\\tpublic int getX() {\\n\\t\\treturn x;\\n\\t}\\n\\n\\tpublic void setX(int x) {\\n\\t\\tthis.x = x;\\n\\t}\\n\\n\\tpublic int getY() {\\n\\t\\treturn y;\\n\\t}\\n\\n\\tpublic void setY(int y) {\\n\\t\\tthis.y = y;\\n\\t}\\n\\n\\t@Override\\n\\tpublic String toString() {\\n\\t\\treturn \\"Point [x=\\" + x + \\", y=\\" + y + \\"]\\";\\n\\t}\\n\\n\\tpublic Point() {//空的构造方法\\n\\t\\t\\n\\t}\\n\\t\\n\\tpublic Point(int x0,int y0) {//有参构造方法\\n\\t\\tthis.x = x0;\\n\\t\\tthis.y = y0;\\n\\t}\\n\\t\\n\\t\\n\\tpublic void movePoint(int dx,int dy) {//移动点的方法\\n\\t\\tthis.x = dx;\\n\\t\\tthis.y = dy;\\n\\t}\\n\\t\\n\\t\\n\\tpublic static void main(String[] args) {//测试类\\n\\t\\tPoint p1 = new Point();\\n\\t\\tp1.movePoint(10, 20);\\n\\t\\tSystem.out.println(p1.toString());\\n\\t\\t\\n\\t\\tPoint p2 = new Point();\\n\\t\\tp2.movePoint(20, 30);\\n\\t\\tSystem.out.println(p2.toString());\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
