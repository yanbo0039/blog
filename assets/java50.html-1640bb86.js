const t=JSON.parse(`{"key":"v-2f7d0aca","path":"/zh/programBlog/ServerSideLanguage/Java/java50.html","title":"Java-使用MD5对密码进行加密","lang":"zh-CN","frontmatter":{"title":"Java-使用MD5对密码进行加密","icon":"page","order":50,"author":"涎涎","date":"2019-06-16T23:31:09.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java50.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-使用MD5对密码进行加密"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java50.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-使用MD5对密码进行加密"}],["meta",{"property":"og:description","content":"Java-使用MD5对密码进行加密 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 Md5Utils.java package net.ptcs.my12306.util; import java.security.MessageDigest; public class Md5Utils { \\tpublic static void main(String[] args) { \\t\\tSystem.out.println(Md5Utils.md5(\\"123456\\")); \\t} \\tpublic final static String md5(String s) { \\t\\tchar hexDigits[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', \\t\\t\\t\\t'a', 'b', 'c', 'd', 'e', 'f' }; \\t\\ttry { \\t\\t\\tbyte[] btInput = s.getBytes(); \\t\\t\\tMessageDigest mdInst = MessageDigest.getInstance(\\"MD5\\"); \\t\\t\\tmdInst.update(btInput); \\t\\t\\tbyte[] md = mdInst.digest(); \\t\\t\\tint j = md.length; \\t\\t\\tchar str[] = new char[j * 2]; \\t\\t\\tint k = 0; \\t\\t\\tfor (int i = 0; i &lt; j; i++) { \\t\\t\\t\\tbyte byte0 = md[i]; \\t\\t\\t\\tstr[k++] = hexDigits[byte0 &gt;&gt;&gt; 4 &amp; 0xf]; \\t\\t\\t\\tstr[k++] = hexDigits[byte0 &amp; 0xf]; \\t\\t\\t} \\t\\t\\treturn new String(str); \\t\\t} catch (Exception e) { \\t\\t\\te.printStackTrace(); \\t\\t\\treturn null; \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T05:58:29.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T23:31:09.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T05:58:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-使用MD5对密码进行加密\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T23:31:09.000Z\\",\\"dateModified\\":\\"2023-06-02T05:58:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java-使用MD5对密码进行加密 注意 本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。 Md5Utils.java package net.ptcs.my12306.util; import java.security.MessageDigest; public class Md5Utils { \\tpublic static void main(String[] args) { \\t\\tSystem.out.println(Md5Utils.md5(\\"123456\\")); \\t} \\tpublic final static String md5(String s) { \\t\\tchar hexDigits[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', \\t\\t\\t\\t'a', 'b', 'c', 'd', 'e', 'f' }; \\t\\ttry { \\t\\t\\tbyte[] btInput = s.getBytes(); \\t\\t\\tMessageDigest mdInst = MessageDigest.getInstance(\\"MD5\\"); \\t\\t\\tmdInst.update(btInput); \\t\\t\\tbyte[] md = mdInst.digest(); \\t\\t\\tint j = md.length; \\t\\t\\tchar str[] = new char[j * 2]; \\t\\t\\tint k = 0; \\t\\t\\tfor (int i = 0; i &lt; j; i++) { \\t\\t\\t\\tbyte byte0 = md[i]; \\t\\t\\t\\tstr[k++] = hexDigits[byte0 &gt;&gt;&gt; 4 &amp; 0xf]; \\t\\t\\t\\tstr[k++] = hexDigits[byte0 &amp; 0xf]; \\t\\t\\t} \\t\\t\\treturn new String(str); \\t\\t} catch (Exception e) { \\t\\t\\te.printStackTrace(); \\t\\t\\treturn null; \\t\\t} \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685685509000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":6}]},"readingTime":{"minutes":6.45,"words":1935},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/50-Java-使用MD5对密码进行加密.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java-使用MD5对密码进行加密</h1>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p>\\n</div>\\n<p><strong>Md5Utils.java</strong></p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package net.ptcs.my12306.util;\\nimport java.security.MessageDigest;\\npublic class Md5Utils {\\n\\tpublic static void main(String[] args) {\\n\\t\\tSystem.out.println(Md5Utils.md5(\\"123456\\"));\\n\\t}\\n\\tpublic final static String md5(String s) {\\n\\t\\tchar hexDigits[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',\\n\\t\\t\\t\\t'a', 'b', 'c', 'd', 'e', 'f' };\\n\\t\\ttry {\\n\\t\\t\\tbyte[] btInput = s.getBytes();\\n\\t\\t\\tMessageDigest mdInst = MessageDigest.getInstance(\\"MD5\\");\\n\\t\\t\\tmdInst.update(btInput);\\n\\t\\t\\tbyte[] md = mdInst.digest();\\n\\t\\t\\tint j = md.length;\\n\\t\\t\\tchar str[] = new char[j * 2];\\n\\t\\t\\tint k = 0;\\n\\t\\t\\tfor (int i = 0; i &lt; j; i++) {\\n\\t\\t\\t\\tbyte byte0 = md[i];\\n\\t\\t\\t\\tstr[k++] = hexDigits[byte0 &gt;&gt;&gt; 4 &amp; 0xf];\\n\\t\\t\\t\\tstr[k++] = hexDigits[byte0 &amp; 0xf];\\n\\t\\t\\t}\\n\\t\\t\\treturn new String(str);\\n\\t\\t} catch (Exception e) {\\n\\t\\t\\te.printStackTrace();\\n\\t\\t\\treturn null;\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
