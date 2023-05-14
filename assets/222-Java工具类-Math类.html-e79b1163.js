const t=JSON.parse(`{"key":"v-154fcdf5","path":"/zh/programBlog/ServerSideLanguage/Java/222-Java%E5%B7%A5%E5%85%B7%E7%B1%BB-Math%E7%B1%BB.html","title":"Java工具类-Math类","lang":"zh-CN","frontmatter":{"title":"Java工具类-Math类","icon":"page","order":222,"author":"涎涎","date":"2023-01-12T00:00:00.000Z","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java工具类-Math类"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/222-Java%E5%B7%A5%E5%85%B7%E7%B1%BB-Math%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java工具类-Math类"}],["meta",{"property":"og:description","content":"222-Java工具类-Math类.md 概念 示例代码 package com.tencent.chapter01.math算数类; import java.util.Random; public class MathDemo { \\tpublic static void main(String[] args) { \\t\\t/** \\t\\t * 1.创建对象：Math的所有的属性与方法均为static修饰，不需要new对象 \\t\\t */ \\t\\t \\t\\t/** \\t\\t * 2.常用属性 \\t\\t */ \\t\\t//圆周率 \\t\\tSystem.out.println(Math.PI);//3.141592653589793 \\t\\t \\t\\t//自然对数底数 \\t\\tSystem.out.println(Math.E);//2.718281828459045 \\t\\t \\t\\t/** \\t\\t * 3.常用方法 \\t\\t */ \\t\\t//abs() 取绝对值 \\t\\tSystem.out.println(Math.abs(123.456));//123.456 \\t\\tSystem.out.println(Math.abs(-123.456));//123.456 \\t\\t \\t\\t//round() 四舍五入取整 \\t\\tSystem.out.println(Math.round(123.456));//123 \\t\\tSystem.out.println(Math.round(123.556));//124 \\t\\tSystem.out.println(Math.round(-123.456));//-123 \\t\\tSystem.out.println(Math.round(-123.556));//-124 \\t\\t \\t\\t//ceil() 向上取整:取大于该值最小的整数 \\t\\tSystem.out.println(Math.ceil(123.456));//124 \\t\\tSystem.out.println(Math.ceil(123.556));//124 \\t\\tSystem.out.println(Math.ceil(-123.456));//-123 \\t\\tSystem.out.println(Math.ceil(-123.556));//-123 \\t\\t \\t\\t//floor() 向下取整：取小于该值的最大的整数 \\t\\tSystem.out.println(Math.floor(123.456));//123 \\t\\tSystem.out.println(Math.floor(123.556));//123 \\t\\tSystem.out.println(Math.floor(-123.456));//-124 \\t\\tSystem.out.println(Math.floor(-123.556));//-124 \\t\\t \\t\\t//max() 取最大值 \\t\\tSystem.out.println(Math.max(10, 20));//20 \\t\\t \\t\\t//min() 取最小值 \\t\\tSystem.out.println(Math.min(10, 20));//10 \\t\\t \\t\\t//random() 获取随机值，默认0.0~1.0之间 \\t\\tSystem.out.println(Math.random());//0.0~1.0之间 \\t\\tSystem.out.println(Math.round(Math.random()*10));//0~10之间的整数 \\t\\t \\t\\t//Random类 \\t\\tRandom random = new Random(); \\t\\tSystem.out.println(random.nextInt()); //生成int返回内的有效int整数 \\t\\tSystem.out.println(random.nextInt(11));//0~10之间的整数 \\t\\t \\t\\t/** \\t\\t * 生成随机验证码: \\t\\t * \\t\\t * \\t\\t数字、大写字母、小写字母：不包括 0、1、O、o、L、l \\t\\t */ \\t\\tchar[] codes = new char[]{'2','3','4','5','6','7','8','9','a','b','c','d','e','f','A','B','C','D','E','F','G','H'}; \\t\\t \\t\\t//验证码 \\t\\tString code = \\"\\"; \\t\\t \\t\\tfor (int i = 1; i &lt;= 4; i++) { \\t\\t\\tint index = random.nextInt(codes.length); \\t\\t\\tcode += codes[index]; \\t\\t} \\t\\t \\t\\tSystem.out.println(\\"随机验证码：\\" + code); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-12T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java工具类-Math类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-12T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"222-Java工具类-Math类.md 概念 示例代码 package com.tencent.chapter01.math算数类; import java.util.Random; public class MathDemo { \\tpublic static void main(String[] args) { \\t\\t/** \\t\\t * 1.创建对象：Math的所有的属性与方法均为static修饰，不需要new对象 \\t\\t */ \\t\\t \\t\\t/** \\t\\t * 2.常用属性 \\t\\t */ \\t\\t//圆周率 \\t\\tSystem.out.println(Math.PI);//3.141592653589793 \\t\\t \\t\\t//自然对数底数 \\t\\tSystem.out.println(Math.E);//2.718281828459045 \\t\\t \\t\\t/** \\t\\t * 3.常用方法 \\t\\t */ \\t\\t//abs() 取绝对值 \\t\\tSystem.out.println(Math.abs(123.456));//123.456 \\t\\tSystem.out.println(Math.abs(-123.456));//123.456 \\t\\t \\t\\t//round() 四舍五入取整 \\t\\tSystem.out.println(Math.round(123.456));//123 \\t\\tSystem.out.println(Math.round(123.556));//124 \\t\\tSystem.out.println(Math.round(-123.456));//-123 \\t\\tSystem.out.println(Math.round(-123.556));//-124 \\t\\t \\t\\t//ceil() 向上取整:取大于该值最小的整数 \\t\\tSystem.out.println(Math.ceil(123.456));//124 \\t\\tSystem.out.println(Math.ceil(123.556));//124 \\t\\tSystem.out.println(Math.ceil(-123.456));//-123 \\t\\tSystem.out.println(Math.ceil(-123.556));//-123 \\t\\t \\t\\t//floor() 向下取整：取小于该值的最大的整数 \\t\\tSystem.out.println(Math.floor(123.456));//123 \\t\\tSystem.out.println(Math.floor(123.556));//123 \\t\\tSystem.out.println(Math.floor(-123.456));//-124 \\t\\tSystem.out.println(Math.floor(-123.556));//-124 \\t\\t \\t\\t//max() 取最大值 \\t\\tSystem.out.println(Math.max(10, 20));//20 \\t\\t \\t\\t//min() 取最小值 \\t\\tSystem.out.println(Math.min(10, 20));//10 \\t\\t \\t\\t//random() 获取随机值，默认0.0~1.0之间 \\t\\tSystem.out.println(Math.random());//0.0~1.0之间 \\t\\tSystem.out.println(Math.round(Math.random()*10));//0~10之间的整数 \\t\\t \\t\\t//Random类 \\t\\tRandom random = new Random(); \\t\\tSystem.out.println(random.nextInt()); //生成int返回内的有效int整数 \\t\\tSystem.out.println(random.nextInt(11));//0~10之间的整数 \\t\\t \\t\\t/** \\t\\t * 生成随机验证码: \\t\\t * \\t\\t * \\t\\t数字、大写字母、小写字母：不包括 0、1、O、o、L、l \\t\\t */ \\t\\tchar[] codes = new char[]{'2','3','4','5','6','7','8','9','a','b','c','d','e','f','A','B','C','D','E','F','G','H'}; \\t\\t \\t\\t//验证码 \\t\\tString code = \\"\\"; \\t\\t \\t\\tfor (int i = 1; i &lt;= 4; i++) { \\t\\t\\tint index = random.nextInt(codes.length); \\t\\t\\tcode += codes[index]; \\t\\t} \\t\\t \\t\\tSystem.out.println(\\"随机验证码：\\" + code); \\t} }"},"headers":[],"git":{},"readingTime":{"minutes":1.71,"words":514},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/222-Java工具类-Math类.md","localizedDate":"2023年1月12日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--222-Java-Math-b50vl06lqj4gfa.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">222-Java工具类-Math类.md</a></h1>\\n<h4> 概念</h4>\\n<figure><img src=\\"/assets/Java_222_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter01.math算数类;\\n\\nimport java.util.Random;\\n\\npublic class MathDemo {\\n\\n\\tpublic static void main(String[] args) {\\n\\t\\t/**\\n\\t\\t * 1.创建对象：Math的所有的属性与方法均为static修饰，不需要new对象\\n\\t\\t */\\n\\t\\t\\n\\t\\t/**\\n\\t\\t * 2.常用属性\\n\\t\\t */\\n\\t\\t//圆周率\\n\\t\\tSystem.out.println(Math.PI);//3.141592653589793\\n\\t\\t\\n\\t\\t//自然对数底数\\n\\t\\tSystem.out.println(Math.E);//2.718281828459045\\n\\t\\t\\n\\t\\t/**\\n\\t\\t * 3.常用方法\\n\\t\\t */\\n\\t\\t//abs() 取绝对值\\n\\t\\tSystem.out.println(Math.abs(123.456));//123.456\\n\\t\\tSystem.out.println(Math.abs(-123.456));//123.456\\n\\t\\t\\n\\t\\t//round() 四舍五入取整\\n\\t\\tSystem.out.println(Math.round(123.456));//123\\n\\t\\tSystem.out.println(Math.round(123.556));//124\\n\\t\\tSystem.out.println(Math.round(-123.456));//-123\\n\\t\\tSystem.out.println(Math.round(-123.556));//-124\\n\\t\\t\\n\\t\\t//ceil() 向上取整:取大于该值最小的整数\\n\\t\\tSystem.out.println(Math.ceil(123.456));//124\\n\\t\\tSystem.out.println(Math.ceil(123.556));//124\\n\\t\\tSystem.out.println(Math.ceil(-123.456));//-123\\n\\t\\tSystem.out.println(Math.ceil(-123.556));//-123\\n\\t\\t\\n\\t\\t//floor() 向下取整：取小于该值的最大的整数\\n\\t\\tSystem.out.println(Math.floor(123.456));//123\\n\\t\\tSystem.out.println(Math.floor(123.556));//123\\n\\t\\tSystem.out.println(Math.floor(-123.456));//-124\\n\\t\\tSystem.out.println(Math.floor(-123.556));//-124\\n\\t\\t\\n\\t\\t//max() 取最大值\\n\\t\\tSystem.out.println(Math.max(10, 20));//20\\n\\t\\t\\n\\t\\t//min() 取最小值\\n\\t\\tSystem.out.println(Math.min(10, 20));//10\\n\\t\\t\\n\\t\\t//random() 获取随机值，默认0.0~1.0之间\\n\\t\\tSystem.out.println(Math.random());//0.0~1.0之间\\n\\t\\tSystem.out.println(Math.round(Math.random()*10));//0~10之间的整数\\n\\t\\t\\n\\t\\t//Random类\\n\\t\\tRandom random = new Random();\\n\\t\\tSystem.out.println(random.nextInt());  //生成int返回内的有效int整数\\n\\t\\tSystem.out.println(random.nextInt(11));//0~10之间的整数\\n\\t\\t\\n\\t\\t/**\\n\\t\\t * 生成随机验证码:\\n\\t\\t * \\n\\t\\t * \\t\\t数字、大写字母、小写字母：不包括 0、1、O、o、L、l\\n\\t\\t */\\n\\t\\tchar[] codes = new char[]{'2','3','4','5','6','7','8','9','a','b','c','d','e','f','A','B','C','D','E','F','G','H'};\\n\\t\\t\\n\\t\\t//验证码\\n\\t\\tString code = \\"\\";\\n\\t\\t\\n\\t\\tfor (int i = 1; i &lt;= 4; i++) {\\n\\t\\t\\tint index = random.nextInt(codes.length);\\n\\t\\t\\tcode += codes[index];\\n\\t\\t}\\n\\t\\t\\n\\t\\tSystem.out.println(\\"随机验证码：\\" + code);\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
