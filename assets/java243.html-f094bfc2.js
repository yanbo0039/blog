const t=JSON.parse('{"key":"v-7d96652a","path":"/zh/programBlog/ServerSideLanguage/Java/java243.html","title":"Java多线程编程-常用方法_线程优先级priority","lang":"zh-CN","frontmatter":{"title":"Java多线程编程-常用方法_线程优先级priority","icon":"page","order":243,"author":"涎涎","date":"2023-01-17T19:04:21.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java243.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java多线程编程-常用方法_线程优先级priority"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java243.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java多线程编程-常用方法_线程优先级priority"}],["meta",{"property":"og:description","content":"243-Java多线程编程-常用方法_线程优先级priority.md 概念 示例代码 package com.tencent.chapter04.常用方法; /** * * 线程的优先级：默认所有线程优先级为5，取值1~10之间，数字越大，优先级越高，能够获得的CPU的时间越多， * 反之，数字越小，优先级越低，能够获得的CPU的时间越少 * * Thread类的三个常量，表示常用的线程优先级： \\t\\tThread.MIN_PRIORITY //1 \\t\\tThread.NORM_PRIORITY //5 \\t\\tThread.MAX_PRIORITY //10 */ public class PriorityDemo { \\tpublic static void main(String[] args) { \\t\\t//线程一 \\t\\tThread2 t1 = new Thread2(); \\t\\tt1.setName(\\"线程1\\"); \\t\\tt1.start(); \\t\\t \\t\\t//线程二 \\t\\tThread2 t2 = new Thread2(); \\t\\tt2.setName(\\"线程2\\"); \\t\\tt2.start(); \\t\\t \\t\\t//getPriority() 获取线程的优先级 \\t\\tSystem.out.println(\\"t1默认优先级:\\" + t1.getPriority());//5 \\t\\tSystem.out.println(\\"t2默认优先级:\\" + t2.getPriority());//5 \\t\\t \\t\\t//setPriority() 设置线程的优先级 \\t\\tt1.setPriority(Thread.MIN_PRIORITY);//1 \\t\\tt2.setPriority(Thread.MAX_PRIORITY);//10 \\t\\t \\t\\tSystem.out.println(\\"t1修改后的优先级:\\" + t1.getPriority());//1 \\t\\tSystem.out.println(\\"t2修改后的优先级:\\" + t2.getPriority());//10 \\t} } class Thread2 extends Thread{ \\t@Override \\tpublic void run() { \\t\\tfor (int i = 1; i &lt;= 20; i++) { \\t\\t\\tSystem.out.println(Thread.currentThread().getName() + \\" : \\" + i); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-31T00:37:27.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-17T19:04:21.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-31T00:37:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java多线程编程-常用方法_线程优先级priority\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-17T19:04:21.000Z\\",\\"dateModified\\":\\"2023-05-31T00:37:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"243-Java多线程编程-常用方法_线程优先级priority.md 概念 示例代码 package com.tencent.chapter04.常用方法; /** * * 线程的优先级：默认所有线程优先级为5，取值1~10之间，数字越大，优先级越高，能够获得的CPU的时间越多， * 反之，数字越小，优先级越低，能够获得的CPU的时间越少 * * Thread类的三个常量，表示常用的线程优先级： \\t\\tThread.MIN_PRIORITY //1 \\t\\tThread.NORM_PRIORITY //5 \\t\\tThread.MAX_PRIORITY //10 */ public class PriorityDemo { \\tpublic static void main(String[] args) { \\t\\t//线程一 \\t\\tThread2 t1 = new Thread2(); \\t\\tt1.setName(\\"线程1\\"); \\t\\tt1.start(); \\t\\t \\t\\t//线程二 \\t\\tThread2 t2 = new Thread2(); \\t\\tt2.setName(\\"线程2\\"); \\t\\tt2.start(); \\t\\t \\t\\t//getPriority() 获取线程的优先级 \\t\\tSystem.out.println(\\"t1默认优先级:\\" + t1.getPriority());//5 \\t\\tSystem.out.println(\\"t2默认优先级:\\" + t2.getPriority());//5 \\t\\t \\t\\t//setPriority() 设置线程的优先级 \\t\\tt1.setPriority(Thread.MIN_PRIORITY);//1 \\t\\tt2.setPriority(Thread.MAX_PRIORITY);//10 \\t\\t \\t\\tSystem.out.println(\\"t1修改后的优先级:\\" + t1.getPriority());//1 \\t\\tSystem.out.println(\\"t2修改后的优先级:\\" + t2.getPriority());//10 \\t} } class Thread2 extends Thread{ \\t@Override \\tpublic void run() { \\t\\tfor (int i = 1; i &lt;= 20; i++) { \\t\\t\\tSystem.out.println(Thread.currentThread().getName() + \\" : \\" + i); \\t\\t} \\t} }"},"headers":[],"git":{"createdTime":1684701424000,"updatedTime":1685493447000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":5}]},"readingTime":{"minutes":1.46,"words":437},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/243-Java多线程编程-常用方法_线程优先级priority.md","localizedDate":"2023年1月17日","excerpt":"<!-- more -->\\n<h1> 243-Java多线程编程-常用方法_线程优先级priority.md</h1>\\n<h4> 概念</h4>\\n<figure><img src=\\"/assets/Java_243_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter04.常用方法;\\n\\n/**\\n * \\n * 线程的优先级：默认所有线程优先级为5，取值1~10之间，数字越大，优先级越高，能够获得的CPU的时间越多，\\n *                                 反之，数字越小，优先级越低，能够获得的CPU的时间越少\\n * \\n * Thread类的三个常量，表示常用的线程优先级：\\n\\t\\tThread.MIN_PRIORITY       //1\\n\\t\\tThread.NORM_PRIORITY      //5\\n\\t\\tThread.MAX_PRIORITY       //10\\n\\n */\\npublic class PriorityDemo {\\n\\n\\tpublic static void main(String[] args) {\\n\\t\\t//线程一\\n\\t\\tThread2 t1 = new Thread2();\\n\\t\\tt1.setName(\\"线程1\\");\\n\\t\\tt1.start();\\n\\t\\t\\n\\t\\t//线程二\\n\\t\\tThread2 t2 = new Thread2();\\n\\t\\tt2.setName(\\"线程2\\");\\n\\t\\tt2.start();\\n\\t\\t\\n\\t\\t//getPriority() 获取线程的优先级\\n\\t\\tSystem.out.println(\\"t1默认优先级:\\" + t1.getPriority());//5\\n\\t\\tSystem.out.println(\\"t2默认优先级:\\" + t2.getPriority());//5\\n\\t\\t\\n\\t\\t//setPriority() 设置线程的优先级\\n\\t\\tt1.setPriority(Thread.MIN_PRIORITY);//1\\n\\t\\tt2.setPriority(Thread.MAX_PRIORITY);//10\\n\\t\\t\\n\\t\\tSystem.out.println(\\"t1修改后的优先级:\\" + t1.getPriority());//1\\n\\t\\tSystem.out.println(\\"t2修改后的优先级:\\" + t2.getPriority());//10\\n\\t}\\n}\\n\\nclass Thread2 extends Thread{\\n\\n\\t@Override\\n\\tpublic void run() {\\n\\t\\tfor (int i = 1; i &lt;= 20; i++) {\\n\\t\\t\\tSystem.out.println(Thread.currentThread().getName() + \\" : \\" + i);\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
