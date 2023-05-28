const t=JSON.parse('{"key":"v-7b5a7723","path":"/zh/java237/","title":"Java文件与流-文件与流-ByteArrayInputStream字节输入流","lang":"zh-CN","frontmatter":{"title":"Java文件与流-文件与流-ByteArrayInputStream字节输入流","icon":"page","order":237,"author":"涎涎","date":"2023-01-14T09:06:15.000Z","isOriginal":true,"permalinkPattern":"java237","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java文件与流-文件与流-ByteArrayInputStream字节输入流"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/java237/"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java文件与流-文件与流-ByteArrayInputStream字节输入流"}],["meta",{"property":"og:description","content":"237-Java文件与流-文件与流-ByteArrayInputStream字节输入流.md 示例代码 package com.tencent.chapter03.io流; import java.io.ByteArrayInputStream; public class ByteArrayInputStreamDemo { \\tpublic static void main(String[] args) { \\t\\tbyte[] b = new byte[]{1,2,3,4,5,6,7}; \\t\\t \\t\\tByteArrayInputStream input = new ByteArrayInputStream(b); \\t\\t \\t\\t//read() 读取一个字节 \\t\\tint content = input.read(); \\t\\tSystem.out.println(content);//1 \\t\\t \\t\\t//available() 剩余可读字节数 \\t\\tSystem.out.println(input.available());//6 \\t\\t \\t\\t//mark() 设置标记1,通常与reset()方法结合使用 \\t\\tinput.mark(1); \\t\\t \\t\\t//skip() 跳跃过N个字节，再继续读取 \\t\\tinput.skip(3); \\t\\t \\t\\t//read() 读取一个字节 \\t\\tcontent = input.read(); \\t\\tSystem.out.println(content);//5 \\t\\t \\t\\t//reset() 重置到最近的mark位置,通常与mark()方法结合使用 \\t\\tinput.reset(); \\t\\t \\t\\tcontent = input.read(); \\t\\tSystem.out.println(content);//2 \\t} \\t }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T05:50:51.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-14T09:06:15.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T05:50:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java文件与流-文件与流-ByteArrayInputStream字节输入流\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-14T09:06:15.000Z\\",\\"dateModified\\":\\"2023-05-28T05:50:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"237-Java文件与流-文件与流-ByteArrayInputStream字节输入流.md 示例代码 package com.tencent.chapter03.io流; import java.io.ByteArrayInputStream; public class ByteArrayInputStreamDemo { \\tpublic static void main(String[] args) { \\t\\tbyte[] b = new byte[]{1,2,3,4,5,6,7}; \\t\\t \\t\\tByteArrayInputStream input = new ByteArrayInputStream(b); \\t\\t \\t\\t//read() 读取一个字节 \\t\\tint content = input.read(); \\t\\tSystem.out.println(content);//1 \\t\\t \\t\\t//available() 剩余可读字节数 \\t\\tSystem.out.println(input.available());//6 \\t\\t \\t\\t//mark() 设置标记1,通常与reset()方法结合使用 \\t\\tinput.mark(1); \\t\\t \\t\\t//skip() 跳跃过N个字节，再继续读取 \\t\\tinput.skip(3); \\t\\t \\t\\t//read() 读取一个字节 \\t\\tcontent = input.read(); \\t\\tSystem.out.println(content);//5 \\t\\t \\t\\t//reset() 重置到最近的mark位置,通常与mark()方法结合使用 \\t\\tinput.reset(); \\t\\t \\t\\tcontent = input.read(); \\t\\tSystem.out.println(content);//2 \\t} \\t }"},"headers":[{"level":3,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685253051000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":1.13,"words":338},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/237-Java文件与流-文件与流-ByteArrayInputStream字节输入流.md","localizedDate":"2023年1月14日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--237-Java--ByteArrayInputStream-hp61cba767eca149sz05fj0ydda4528eeax4369tuore.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">237-Java文件与流-文件与流-ByteArrayInputStream字节输入流.md</a></h1>\\n<h3> 示例代码</h3>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter03.io流;\\n\\nimport java.io.ByteArrayInputStream;\\n\\npublic class ByteArrayInputStreamDemo {\\n\\n\\tpublic static void main(String[] args) {\\n\\t\\tbyte[] b = new byte[]{1,2,3,4,5,6,7};\\n\\t\\t\\n\\t\\tByteArrayInputStream input = new ByteArrayInputStream(b);\\n\\t\\t\\n\\t\\t//read() 读取一个字节\\n\\t\\tint content = input.read();\\n\\t\\tSystem.out.println(content);//1\\n\\t\\t\\n\\t\\t//available() 剩余可读字节数\\n\\t\\tSystem.out.println(input.available());//6\\n\\t\\t\\n\\t\\t//mark() 设置标记1,通常与reset()方法结合使用\\n\\t\\tinput.mark(1);\\n\\t\\t\\n\\t\\t//skip() 跳跃过N个字节，再继续读取\\n\\t\\tinput.skip(3);\\n\\t\\t\\n\\t\\t//read() 读取一个字节\\n\\t\\tcontent = input.read();\\n\\t\\tSystem.out.println(content);//5\\n\\t\\t\\n\\t\\t//reset() 重置到最近的mark位置,通常与mark()方法结合使用\\n\\t\\tinput.reset();\\n\\t\\t \\n\\t\\tcontent = input.read();\\n\\t\\tSystem.out.println(content);//2\\n\\t}\\n\\t\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
