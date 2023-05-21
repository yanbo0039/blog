const t=JSON.parse(`{"key":"v-f349fd0e","path":"/zh/programBlog/ServerSideLanguage/Java/216-Java%E5%B7%A5%E5%85%B7%E7%B1%BB-String%E7%B1%BB.html","title":"Java工具类-String类","lang":"zh-CN","frontmatter":{"title":"Java工具类-String类","icon":"page","order":216,"author":"涎涎","date":"2023-01-12T14:09:08.000Z","isOriginal":true,"category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java工具类-String类"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/216-Java%E5%B7%A5%E5%85%B7%E7%B1%BB-String%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java工具类-String类"}],["meta",{"property":"og:description","content":"216-Java工具类-String类.md 概念 示例代码 package com.tencent.chapter01.String类; import java.io.UnsupportedEncodingException; import java.util.Arrays; public class StringDemo { \\tpublic static void main(String[] args) throws UnsupportedEncodingException { \\t\\t/** \\t\\t * 1.创建对象（构造函数） \\t\\t */ \\t\\t/**静态方式（常用）*/ \\t\\tString str = \\"abc中文\\"; \\t\\t \\t\\t/**动态方式*/ \\t\\t//① 初始化一个新创建的 String 对象，使其表示一个空字符序列 \\t\\tString str2 = new String(); \\t\\t \\t\\t//② 初始化一个新创建的 String 对象，使其表示一个与参数相同的字符序列 \\t\\tString str3 = new String(\\"abc\\"); \\t\\t \\t\\t//③ 分配一个新的字符串，它包含字符串缓冲区参数中当前包含的字符序列 \\t\\tStringBuffer sb = new StringBuffer(\\"abc\\"); \\t\\tString str4 = new String(sb); \\t\\t \\t\\t//④.① 编码（字符串 -&gt;字节数组） ： 使用给定的 charset 将此 String 编码到 byte 序列，并将结果存储到新的 byte 数组 \\t\\t// 常用字符集编码格式： GBK（中文） GB2312（中文） UTF-8（通用） ISO-8859-1（西欧语言） \\t\\tbyte[] bytes = str.getBytes(\\"GBK\\"); \\t\\t \\t\\t//④.② 解码（字节数组 -&gt; 字符串）：通过使用指定的 charset 解码指定的 byte 数组，构造一个新的 String \\t\\tString str5 = new String(bytes, \\"GBK\\"); \\t\\tSystem.out.println(str5); \\t\\t \\t\\t/** \\t\\t * 2.常用方法 \\t\\t */ \\t\\tString str6 = \\"abc\\";//\\"abc\\"保存在【常量池】中 \\t\\tString str7 = \\"abc\\";//\\"abc\\"保存在【常量池】中 \\t\\t \\t\\tString str8 = new String(\\"abc\\");//\\"abc\\"保存在【堆内存】中 \\t\\tString str9 = new String(\\"abc\\");//\\"abc\\"保存在【堆内存】中 \\t\\t \\t\\tSystem.out.println(str6 == str7); //true 比较地址值 \\t\\tSystem.out.println(str6.equals(str7));//true \\t\\t \\t\\tSystem.out.println(str8 == str9); //false 比较地址值 \\t\\tSystem.out.println(str8.equals(str9));//true \\t\\t \\t\\tSystem.out.println(str6 == str8); //false 比较地址值 \\t\\tSystem.out.println(str6.equals(str8));//true \\t\\t/** \\t\\t * ==： 比较String类型的地址值 \\t\\t * \\t\\t * equals（已经重写父类Object的equals）的比较机制 ： \\t\\t * \\t1.先比较引用地址：如果相等，返回true，如果不等，继续判断字面值 \\t\\t * 2.比较字面值：如果字面值相等，返回true，如果不等，再返回false \\t\\t */ \\t\\t \\t\\t/** \\t\\t * 连接操作符\\"+\\" \\t\\t */ \\t\\tSystem.out.println(10 + 20 + 'a');//127 a-&gt;97 byte、short、char默认转换为int类型再计算 \\t\\tSystem.out.println(10 + 20 + \\"a\\");//30a \\t\\tSystem.out.println('a' + 10 + 20);//127 \\t\\t \\t\\t/** \\t\\t * String char[] byte[] 三者之间的转换 \\t\\t */ \\t\\tString str10 = \\"123abc中文\\";// 英文与数字各占1个字节 GBK编码下中文占2个字节 \\t\\t \\t\\t//getBytes() 字符串 -&gt; 字节数组 \\t\\tbyte[] bytes2 = str10.getBytes(); \\t\\tSystem.out.println(Arrays.toString(bytes2));//[49, 50, 51, 97, 98, 99, -42, -48, -50, -60] \\t\\t \\t\\t//toCharArray() 字符串 -&gt; 字符数组 \\t\\tchar[] chars = str10.toCharArray(); \\t\\tSystem.out.println(Arrays.toString(chars));//[1, 2, 3, a, b, c, 中, 文] \\t\\t \\t\\t//字节数组 -&gt; 字符串 \\t\\tString str11 = new String(bytes2); \\t\\t \\t\\t//字符数组-&gt; 字符串 \\t\\tString str12 = new String(chars); \\t\\t \\t\\t/** \\t\\t * 其他常用方法 \\t\\t */ \\t\\t//charAt(index)返回指定index位置的字符 \\t\\tString str13 = \\"zhaorong@neusoft.com\\"; \\t\\tSystem.out.println(str13.charAt(8));//@ \\t\\t \\t\\t//concat() 拼接字符串 \\t\\tString str14 = \\"abc\\"; \\t\\t \\t\\tstr14 = str14 + \\"123\\" + \\"中文\\"; \\t\\tstr14 = str14.concat(\\"123\\").concat(\\"中文\\"); \\t\\t \\t\\t//contains() 判断字符串是否包含指定的值---类似于oracle的like \\t\\tSystem.out.println(str13.contains(\\"@\\"));//true \\t\\t \\t\\t//endWith() 判断以....结尾 \\t\\tString fileName = \\"caixukun.jpg\\"; \\t\\tSystem.out.println(fileName.endsWith(\\".jpg\\"));//true \\t\\tSystem.out.println(fileName.endsWith(\\".gif\\"));//false \\t\\t \\t\\t//startWith() 判断以....开头 \\t\\tString username = \\"黎杰成\\"; \\t\\tSystem.out.println(username.startsWith(\\"黎\\"));//true \\t\\tSystem.out.println(username.startsWith(\\"李\\"));//false \\t\\t \\t\\t//equals() 判断两个字符串是否相等，区分大小写 \\t\\tString code = \\"Ea8K\\"; //界面上的验证码 \\t\\tString userCode = \\"ea8k\\"; //用户输入的验证码 \\t\\tSystem.out.println(code.equals(userCode));//false \\t\\t \\t\\t//equalsIgnoreCase() 判断两个字符串是否相等，忽略大小写 \\t\\tSystem.out.println(code.equalsIgnoreCase(userCode));//true \\t\\t \\t\\t//toLowerCase() 转小写 \\t\\tSystem.out.println(userCode.toLowerCase());//ea8k \\t\\t \\t\\t//toUpperCase() 转大写 \\t\\tSystem.out.println(userCode.toUpperCase());//EA8K \\t\\t \\t\\t//indexOf(char) 查找指定下标的字符-------从左往右查找第一个出现的字符，如果不存在，返回-1 \\t\\tString str15 = \\"zhaorong@neusoft.com\\"; \\t\\tSystem.out.println(str15.indexOf('@'));//8 \\t\\t \\t\\t//lastIndexOf(char) 查找指定下标的字符-------从右往左查找第一个出现的字符，如果不存在，返回-1 \\t\\tSystem.out.println(str15.lastIndexOf('.'));//16 \\t\\t \\t\\t/** \\t\\t * 校验一个邮箱是否合法： \\t\\t * \\t\\t1.必须包含@符号 \\t\\t * \\t\\t2.必须包含.符号 \\t\\t * \\t\\t3.@符号必须在.符号前面 \\t\\t * \\t\\t4.只允许出现一个@符号 \\t\\t */ \\t\\tint atIndex = str15.indexOf('@'); \\t\\tint dotIndex = str15.lastIndexOf('.'); \\t\\tint atLastIndex = str15.lastIndexOf('@'); \\t\\t \\t\\tif(atIndex &gt;= 0 &amp;&amp; dotIndex &gt;= 0 &amp;&amp; atIndex &lt; dotIndex &amp;&amp; atIndex == atLastIndex) \\t\\t{ \\t\\t\\tSystem.out.println(\\"邮箱合法\\"); \\t\\t} \\t\\telse \\t\\t{ \\t\\t\\tSystem.out.println(\\"邮箱不合法，请参考以下格式xxxxx@xxxx.xxx\\"); \\t\\t} \\t\\t \\t\\t//isEmpty() 判断字符串是否为空（即长度是否&gt;0） \\t\\tString str16 = null; \\t\\t//System.out.println(str16.isEmpty());//NullPointerException空指针异常 \\t\\t \\t\\tString str17 = \\"\\"; \\t\\tSystem.out.println(str17.isEmpty());//true \\t\\t \\t\\tString str18 = \\" \\"; \\t\\tSystem.out.println(str18.isEmpty());//false \\t\\t \\t\\t//length() 判断字符串的长度 \\t\\t//System.out.println(str16.length());//NullPointerException空指针异常 \\t\\tSystem.out.println(str17.length());//0 \\t\\tSystem.out.println(str18.length());//1 \\t\\t \\t\\tif(str16 != null &amp;&amp; !\\"\\".equals(str16)) \\t\\t{ \\t\\t\\tSystem.out.println(\\"str16不为空\\"); \\t\\t} \\t\\telse \\t\\t{ \\t\\t\\tSystem.out.println(\\"str16为空\\"); \\t\\t} \\t\\t \\t\\t//substring(beginIndex) 截取字符串 ，默认从beginIndex位置截取到末尾 \\t\\tString str19 = \\"zhaorong@neusoft.com\\"; \\t\\tSystem.out.println(str19.substring(8));//@neusoft.com \\t\\tSystem.out.println(str19.substring(str19.indexOf('@')));//@neusoft.com \\t\\t \\t\\t//substring(beginIndex,endIndex)截取字符串 ，默认从beginIndex位置截取到endIndex，不包括结束位置 \\t\\tSystem.out.println(str19.substring(0,8));//zhaorong \\t\\tSystem.out.println(str19.substring(0,str19.indexOf('@')));//zhaorong \\t\\t \\t\\t//trim() 去首尾空格 \\t\\tString str20 = \\" zhao rong \\"; \\t\\tSystem.out.println(str20); //\\" zhao rong \\" \\t\\tSystem.out.println(str20.trim());//\\"zhao rong\\" \\t\\t \\t\\t//replace(oldChar,newChar) 替换字符串 \\t\\tSystem.out.println(str20.replace(\\" \\", \\"\\")); //\\"zhaorong\\" \\t\\t \\t\\tString str21 = \\"发表香港言论，涉及废青，涉及政治问题，涉及习大大的举措\\"; \\t\\tSystem.out.println(str21.replace(\\"废青\\", \\"**\\").replace(\\"政治\\", \\"**\\")); \\t\\t \\t\\t/** \\t\\t * 使用正则表达式的方法： \\t\\t * [0-9] : 表示0-9之间的任意一个数字， \\\\d \\t\\t * [a-zA-Z] : 表达26个大小写字母的任意一个字符 \\t\\t * [a-zA-Z_0-9] ： \\\\w \\t\\t * \\t\\t * \\t\\t * \\t 邮箱：[0-9]{6} 或者 \\\\d{6} \\t\\t * 手机号码：[1]{1}[3|4|5|7|8|9]{1}[0-9]{9} \\t\\t * 邮箱：[a-zA-Z_0-9]+@[a-zA-Z0-9]+\\\\\\\\.[a-zA-Z]{2,3} \\t\\t */ \\t\\t//matches() 使用正则表达式校验字符串是否符合指定规则 \\t\\tString postCode = \\"510663\\"; \\t\\tString postCodeRegex = \\"^[0-9]{6}$\\"; //[0-9]{6} \\\\d{6} \\t\\tSystem.out.println(postCode.matches(postCodeRegex)); \\t\\t \\t\\tString email = \\"zhaorong@neusoft.com\\"; \\t\\tString emailRegex = \\"[a-zA-Z_0-9]+@[a-zA-Z0-9]+\\\\\\\\.[a-zA-Z]{2,3}\\"; \\t\\tSystem.out.println(email.matches(emailRegex)); \\t\\t \\t\\t//replaceAll() 使用正则表达式替换所有字符 \\t\\tString str22 = \\"i4like5you6hahaha\\"; \\t\\tSystem.out.println(str22.replaceAll(\\"[0-9]\\", \\" \\")); \\t\\t \\t\\t//split() 分割字符串 \\t\\tString str23 = \\"锦权;18;男;110\\"; \\t\\tString[] array = str23.split(\\";\\"); \\t\\tfor (String str24 : array) { \\t\\t\\tSystem.out.println(str24); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-01-12T14:09:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java工具类-String类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-12T14:09:08.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"216-Java工具类-String类.md 概念 示例代码 package com.tencent.chapter01.String类; import java.io.UnsupportedEncodingException; import java.util.Arrays; public class StringDemo { \\tpublic static void main(String[] args) throws UnsupportedEncodingException { \\t\\t/** \\t\\t * 1.创建对象（构造函数） \\t\\t */ \\t\\t/**静态方式（常用）*/ \\t\\tString str = \\"abc中文\\"; \\t\\t \\t\\t/**动态方式*/ \\t\\t//① 初始化一个新创建的 String 对象，使其表示一个空字符序列 \\t\\tString str2 = new String(); \\t\\t \\t\\t//② 初始化一个新创建的 String 对象，使其表示一个与参数相同的字符序列 \\t\\tString str3 = new String(\\"abc\\"); \\t\\t \\t\\t//③ 分配一个新的字符串，它包含字符串缓冲区参数中当前包含的字符序列 \\t\\tStringBuffer sb = new StringBuffer(\\"abc\\"); \\t\\tString str4 = new String(sb); \\t\\t \\t\\t//④.① 编码（字符串 -&gt;字节数组） ： 使用给定的 charset 将此 String 编码到 byte 序列，并将结果存储到新的 byte 数组 \\t\\t// 常用字符集编码格式： GBK（中文） GB2312（中文） UTF-8（通用） ISO-8859-1（西欧语言） \\t\\tbyte[] bytes = str.getBytes(\\"GBK\\"); \\t\\t \\t\\t//④.② 解码（字节数组 -&gt; 字符串）：通过使用指定的 charset 解码指定的 byte 数组，构造一个新的 String \\t\\tString str5 = new String(bytes, \\"GBK\\"); \\t\\tSystem.out.println(str5); \\t\\t \\t\\t/** \\t\\t * 2.常用方法 \\t\\t */ \\t\\tString str6 = \\"abc\\";//\\"abc\\"保存在【常量池】中 \\t\\tString str7 = \\"abc\\";//\\"abc\\"保存在【常量池】中 \\t\\t \\t\\tString str8 = new String(\\"abc\\");//\\"abc\\"保存在【堆内存】中 \\t\\tString str9 = new String(\\"abc\\");//\\"abc\\"保存在【堆内存】中 \\t\\t \\t\\tSystem.out.println(str6 == str7); //true 比较地址值 \\t\\tSystem.out.println(str6.equals(str7));//true \\t\\t \\t\\tSystem.out.println(str8 == str9); //false 比较地址值 \\t\\tSystem.out.println(str8.equals(str9));//true \\t\\t \\t\\tSystem.out.println(str6 == str8); //false 比较地址值 \\t\\tSystem.out.println(str6.equals(str8));//true \\t\\t/** \\t\\t * ==： 比较String类型的地址值 \\t\\t * \\t\\t * equals（已经重写父类Object的equals）的比较机制 ： \\t\\t * \\t1.先比较引用地址：如果相等，返回true，如果不等，继续判断字面值 \\t\\t * 2.比较字面值：如果字面值相等，返回true，如果不等，再返回false \\t\\t */ \\t\\t \\t\\t/** \\t\\t * 连接操作符\\"+\\" \\t\\t */ \\t\\tSystem.out.println(10 + 20 + 'a');//127 a-&gt;97 byte、short、char默认转换为int类型再计算 \\t\\tSystem.out.println(10 + 20 + \\"a\\");//30a \\t\\tSystem.out.println('a' + 10 + 20);//127 \\t\\t \\t\\t/** \\t\\t * String char[] byte[] 三者之间的转换 \\t\\t */ \\t\\tString str10 = \\"123abc中文\\";// 英文与数字各占1个字节 GBK编码下中文占2个字节 \\t\\t \\t\\t//getBytes() 字符串 -&gt; 字节数组 \\t\\tbyte[] bytes2 = str10.getBytes(); \\t\\tSystem.out.println(Arrays.toString(bytes2));//[49, 50, 51, 97, 98, 99, -42, -48, -50, -60] \\t\\t \\t\\t//toCharArray() 字符串 -&gt; 字符数组 \\t\\tchar[] chars = str10.toCharArray(); \\t\\tSystem.out.println(Arrays.toString(chars));//[1, 2, 3, a, b, c, 中, 文] \\t\\t \\t\\t//字节数组 -&gt; 字符串 \\t\\tString str11 = new String(bytes2); \\t\\t \\t\\t//字符数组-&gt; 字符串 \\t\\tString str12 = new String(chars); \\t\\t \\t\\t/** \\t\\t * 其他常用方法 \\t\\t */ \\t\\t//charAt(index)返回指定index位置的字符 \\t\\tString str13 = \\"zhaorong@neusoft.com\\"; \\t\\tSystem.out.println(str13.charAt(8));//@ \\t\\t \\t\\t//concat() 拼接字符串 \\t\\tString str14 = \\"abc\\"; \\t\\t \\t\\tstr14 = str14 + \\"123\\" + \\"中文\\"; \\t\\tstr14 = str14.concat(\\"123\\").concat(\\"中文\\"); \\t\\t \\t\\t//contains() 判断字符串是否包含指定的值---类似于oracle的like \\t\\tSystem.out.println(str13.contains(\\"@\\"));//true \\t\\t \\t\\t//endWith() 判断以....结尾 \\t\\tString fileName = \\"caixukun.jpg\\"; \\t\\tSystem.out.println(fileName.endsWith(\\".jpg\\"));//true \\t\\tSystem.out.println(fileName.endsWith(\\".gif\\"));//false \\t\\t \\t\\t//startWith() 判断以....开头 \\t\\tString username = \\"黎杰成\\"; \\t\\tSystem.out.println(username.startsWith(\\"黎\\"));//true \\t\\tSystem.out.println(username.startsWith(\\"李\\"));//false \\t\\t \\t\\t//equals() 判断两个字符串是否相等，区分大小写 \\t\\tString code = \\"Ea8K\\"; //界面上的验证码 \\t\\tString userCode = \\"ea8k\\"; //用户输入的验证码 \\t\\tSystem.out.println(code.equals(userCode));//false \\t\\t \\t\\t//equalsIgnoreCase() 判断两个字符串是否相等，忽略大小写 \\t\\tSystem.out.println(code.equalsIgnoreCase(userCode));//true \\t\\t \\t\\t//toLowerCase() 转小写 \\t\\tSystem.out.println(userCode.toLowerCase());//ea8k \\t\\t \\t\\t//toUpperCase() 转大写 \\t\\tSystem.out.println(userCode.toUpperCase());//EA8K \\t\\t \\t\\t//indexOf(char) 查找指定下标的字符-------从左往右查找第一个出现的字符，如果不存在，返回-1 \\t\\tString str15 = \\"zhaorong@neusoft.com\\"; \\t\\tSystem.out.println(str15.indexOf('@'));//8 \\t\\t \\t\\t//lastIndexOf(char) 查找指定下标的字符-------从右往左查找第一个出现的字符，如果不存在，返回-1 \\t\\tSystem.out.println(str15.lastIndexOf('.'));//16 \\t\\t \\t\\t/** \\t\\t * 校验一个邮箱是否合法： \\t\\t * \\t\\t1.必须包含@符号 \\t\\t * \\t\\t2.必须包含.符号 \\t\\t * \\t\\t3.@符号必须在.符号前面 \\t\\t * \\t\\t4.只允许出现一个@符号 \\t\\t */ \\t\\tint atIndex = str15.indexOf('@'); \\t\\tint dotIndex = str15.lastIndexOf('.'); \\t\\tint atLastIndex = str15.lastIndexOf('@'); \\t\\t \\t\\tif(atIndex &gt;= 0 &amp;&amp; dotIndex &gt;= 0 &amp;&amp; atIndex &lt; dotIndex &amp;&amp; atIndex == atLastIndex) \\t\\t{ \\t\\t\\tSystem.out.println(\\"邮箱合法\\"); \\t\\t} \\t\\telse \\t\\t{ \\t\\t\\tSystem.out.println(\\"邮箱不合法，请参考以下格式xxxxx@xxxx.xxx\\"); \\t\\t} \\t\\t \\t\\t//isEmpty() 判断字符串是否为空（即长度是否&gt;0） \\t\\tString str16 = null; \\t\\t//System.out.println(str16.isEmpty());//NullPointerException空指针异常 \\t\\t \\t\\tString str17 = \\"\\"; \\t\\tSystem.out.println(str17.isEmpty());//true \\t\\t \\t\\tString str18 = \\" \\"; \\t\\tSystem.out.println(str18.isEmpty());//false \\t\\t \\t\\t//length() 判断字符串的长度 \\t\\t//System.out.println(str16.length());//NullPointerException空指针异常 \\t\\tSystem.out.println(str17.length());//0 \\t\\tSystem.out.println(str18.length());//1 \\t\\t \\t\\tif(str16 != null &amp;&amp; !\\"\\".equals(str16)) \\t\\t{ \\t\\t\\tSystem.out.println(\\"str16不为空\\"); \\t\\t} \\t\\telse \\t\\t{ \\t\\t\\tSystem.out.println(\\"str16为空\\"); \\t\\t} \\t\\t \\t\\t//substring(beginIndex) 截取字符串 ，默认从beginIndex位置截取到末尾 \\t\\tString str19 = \\"zhaorong@neusoft.com\\"; \\t\\tSystem.out.println(str19.substring(8));//@neusoft.com \\t\\tSystem.out.println(str19.substring(str19.indexOf('@')));//@neusoft.com \\t\\t \\t\\t//substring(beginIndex,endIndex)截取字符串 ，默认从beginIndex位置截取到endIndex，不包括结束位置 \\t\\tSystem.out.println(str19.substring(0,8));//zhaorong \\t\\tSystem.out.println(str19.substring(0,str19.indexOf('@')));//zhaorong \\t\\t \\t\\t//trim() 去首尾空格 \\t\\tString str20 = \\" zhao rong \\"; \\t\\tSystem.out.println(str20); //\\" zhao rong \\" \\t\\tSystem.out.println(str20.trim());//\\"zhao rong\\" \\t\\t \\t\\t//replace(oldChar,newChar) 替换字符串 \\t\\tSystem.out.println(str20.replace(\\" \\", \\"\\")); //\\"zhaorong\\" \\t\\t \\t\\tString str21 = \\"发表香港言论，涉及废青，涉及政治问题，涉及习大大的举措\\"; \\t\\tSystem.out.println(str21.replace(\\"废青\\", \\"**\\").replace(\\"政治\\", \\"**\\")); \\t\\t \\t\\t/** \\t\\t * 使用正则表达式的方法： \\t\\t * [0-9] : 表示0-9之间的任意一个数字， \\\\d \\t\\t * [a-zA-Z] : 表达26个大小写字母的任意一个字符 \\t\\t * [a-zA-Z_0-9] ： \\\\w \\t\\t * \\t\\t * \\t\\t * \\t 邮箱：[0-9]{6} 或者 \\\\d{6} \\t\\t * 手机号码：[1]{1}[3|4|5|7|8|9]{1}[0-9]{9} \\t\\t * 邮箱：[a-zA-Z_0-9]+@[a-zA-Z0-9]+\\\\\\\\.[a-zA-Z]{2,3} \\t\\t */ \\t\\t//matches() 使用正则表达式校验字符串是否符合指定规则 \\t\\tString postCode = \\"510663\\"; \\t\\tString postCodeRegex = \\"^[0-9]{6}$\\"; //[0-9]{6} \\\\d{6} \\t\\tSystem.out.println(postCode.matches(postCodeRegex)); \\t\\t \\t\\tString email = \\"zhaorong@neusoft.com\\"; \\t\\tString emailRegex = \\"[a-zA-Z_0-9]+@[a-zA-Z0-9]+\\\\\\\\.[a-zA-Z]{2,3}\\"; \\t\\tSystem.out.println(email.matches(emailRegex)); \\t\\t \\t\\t//replaceAll() 使用正则表达式替换所有字符 \\t\\tString str22 = \\"i4like5you6hahaha\\"; \\t\\tSystem.out.println(str22.replaceAll(\\"[0-9]\\", \\" \\")); \\t\\t \\t\\t//split() 分割字符串 \\t\\tString str23 = \\"锦权;18;男;110\\"; \\t\\tString[] array = str23.split(\\";\\"); \\t\\tfor (String str24 : array) { \\t\\t\\tSystem.out.println(str24); \\t\\t} \\t} }"},"headers":[],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":5.09,"words":1526},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/216-Java工具类-String类.md","localizedDate":"2023年1月12日","excerpt":"<!-- more -->\\n<h1> <a href=\\"http://xn--216-Java-String-pz4ys95m5byhha.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">216-Java工具类-String类.md</a></h1>\\n<h4> 概念</h4>\\n<figure><img src=\\"/assets/Java_216_1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h4> 示例代码</h4>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>package com.tencent.chapter01.String类;\\n\\nimport java.io.UnsupportedEncodingException;\\nimport java.util.Arrays;\\n\\npublic class StringDemo {\\n\\n\\tpublic static void main(String[] args) throws UnsupportedEncodingException {\\n\\t\\t/**\\n\\t\\t * 1.创建对象（构造函数）\\n\\t\\t */\\n\\t\\t/**静态方式（常用）*/\\n\\t\\tString str = \\"abc中文\\";\\n\\t\\t\\n\\t\\t/**动态方式*/\\n\\t\\t//① 初始化一个新创建的 String 对象，使其表示一个空字符序列\\n\\t\\tString str2 = new String();\\n\\t\\t\\n\\t\\t//②  初始化一个新创建的 String 对象，使其表示一个与参数相同的字符序列\\n\\t\\tString str3 = new String(\\"abc\\");\\n\\t\\t\\n\\t\\t//③ 分配一个新的字符串，它包含字符串缓冲区参数中当前包含的字符序列\\n\\t\\tStringBuffer sb = new StringBuffer(\\"abc\\");\\n\\t\\tString str4 = new String(sb);\\n\\t\\t\\n\\t\\t//④.① 编码（字符串 -&gt;字节数组） ： 使用给定的 charset 将此 String 编码到 byte 序列，并将结果存储到新的 byte 数组\\n\\t\\t//    常用字符集编码格式： GBK（中文）  GB2312（中文）  UTF-8（通用）  ISO-8859-1（西欧语言）\\n\\t\\tbyte[] bytes = str.getBytes(\\"GBK\\");\\n\\t\\t\\n\\t\\t//④.② 解码（字节数组 -&gt; 字符串）：通过使用指定的 charset 解码指定的 byte 数组，构造一个新的 String\\n\\t\\tString str5 = new String(bytes, \\"GBK\\");\\n\\t\\tSystem.out.println(str5);\\n\\t\\t\\n\\t\\t/**\\n\\t\\t * 2.常用方法\\n\\t\\t */\\n\\t\\tString str6 = \\"abc\\";//\\"abc\\"保存在【常量池】中\\n\\t\\tString str7 = \\"abc\\";//\\"abc\\"保存在【常量池】中\\n\\t\\t\\n\\t\\tString str8 = new String(\\"abc\\");//\\"abc\\"保存在【堆内存】中\\n\\t\\tString str9 = new String(\\"abc\\");//\\"abc\\"保存在【堆内存】中  \\n\\t\\t\\n\\t\\tSystem.out.println(str6 == str7);     //true 比较地址值\\n\\t\\tSystem.out.println(str6.equals(str7));//true\\n\\t\\t\\n\\t\\tSystem.out.println(str8 == str9);     //false 比较地址值\\n\\t\\tSystem.out.println(str8.equals(str9));//true\\n\\t\\t\\n\\t\\tSystem.out.println(str6 == str8);    //false 比较地址值\\n\\t\\tSystem.out.println(str6.equals(str8));//true\\n\\t\\t/**\\n\\t\\t *  ==： 比较String类型的地址值\\n\\t\\t *  \\n\\t\\t *  equals（已经重写父类Object的equals）的比较机制 ：\\n\\t\\t *  \\t1.先比较引用地址：如果相等，返回true，如果不等，继续判断字面值\\n\\t\\t *      2.比较字面值：如果字面值相等，返回true，如果不等，再返回false\\n\\t\\t */\\n\\t\\t\\n\\t\\t/**\\n\\t\\t * 连接操作符\\"+\\"\\n\\t\\t */\\n\\t\\tSystem.out.println(10 + 20 + 'a');//127   a-&gt;97  byte、short、char默认转换为int类型再计算\\n\\t\\tSystem.out.println(10 + 20 + \\"a\\");//30a\\n\\t\\tSystem.out.println('a' + 10 + 20);//127\\n\\t\\t\\n\\t\\t/**\\n\\t\\t * String  char[]  byte[] 三者之间的转换\\n\\t\\t */\\n\\t\\tString str10 = \\"123abc中文\\";// 英文与数字各占1个字节      GBK编码下中文占2个字节\\n\\t\\t\\n\\t\\t//getBytes() 字符串 -&gt; 字节数组\\n\\t\\tbyte[] bytes2 = str10.getBytes();\\n\\t\\tSystem.out.println(Arrays.toString(bytes2));//[49, 50, 51, 97, 98, 99, -42, -48, -50, -60]\\n\\t\\t\\n\\t\\t//toCharArray() 字符串 -&gt; 字符数组\\n\\t\\tchar[] chars = str10.toCharArray();\\n\\t\\tSystem.out.println(Arrays.toString(chars));//[1, 2, 3, a, b, c, 中, 文]\\n\\t\\t\\n\\t\\t//字节数组 -&gt; 字符串\\n\\t\\tString str11 = new String(bytes2);\\n\\t\\t\\n\\t\\t//字符数组-&gt; 字符串\\n\\t\\tString str12 = new String(chars);\\n\\t\\t\\n\\t\\t/**\\n\\t\\t * 其他常用方法\\n\\t\\t */\\n\\t\\t//charAt(index)返回指定index位置的字符\\n\\t\\tString str13 = \\"zhaorong@neusoft.com\\";\\n\\t\\tSystem.out.println(str13.charAt(8));//@\\n\\t\\t\\n\\t\\t//concat() 拼接字符串\\n\\t\\tString str14 = \\"abc\\";\\n\\t\\t\\n\\t\\tstr14 = str14 + \\"123\\" + \\"中文\\"; \\n\\t\\tstr14 = str14.concat(\\"123\\").concat(\\"中文\\");\\n\\t\\t\\n\\t\\t//contains() 判断字符串是否包含指定的值---类似于oracle的like\\n\\t\\tSystem.out.println(str13.contains(\\"@\\"));//true\\n\\t\\t\\n\\t\\t//endWith() 判断以....结尾\\n\\t\\tString fileName = \\"caixukun.jpg\\";\\n\\t\\tSystem.out.println(fileName.endsWith(\\".jpg\\"));//true\\n\\t\\tSystem.out.println(fileName.endsWith(\\".gif\\"));//false\\n\\t\\t\\n\\t\\t//startWith() 判断以....开头\\n\\t\\tString username = \\"黎杰成\\";\\n\\t\\tSystem.out.println(username.startsWith(\\"黎\\"));//true\\n\\t\\tSystem.out.println(username.startsWith(\\"李\\"));//false\\n\\t\\t\\n\\t\\t//equals() 判断两个字符串是否相等，区分大小写\\n\\t\\tString code = \\"Ea8K\\"; //界面上的验证码\\n\\t\\tString userCode = \\"ea8k\\"; //用户输入的验证码\\n\\t\\tSystem.out.println(code.equals(userCode));//false\\n\\t\\t\\n\\t\\t//equalsIgnoreCase() 判断两个字符串是否相等，忽略大小写\\n\\t\\tSystem.out.println(code.equalsIgnoreCase(userCode));//true\\n\\t\\t\\n\\t\\t//toLowerCase() 转小写\\n\\t\\tSystem.out.println(userCode.toLowerCase());//ea8k\\n\\t\\t\\n\\t\\t//toUpperCase() 转大写\\n\\t\\tSystem.out.println(userCode.toUpperCase());//EA8K\\n\\t\\t\\n\\t\\t//indexOf(char) 查找指定下标的字符-------从左往右查找第一个出现的字符，如果不存在，返回-1\\n\\t\\tString str15 = \\"zhaorong@neusoft.com\\";\\n\\t\\tSystem.out.println(str15.indexOf('@'));//8\\n\\t\\t\\n\\t\\t//lastIndexOf(char) 查找指定下标的字符-------从右往左查找第一个出现的字符，如果不存在，返回-1\\n\\t\\tSystem.out.println(str15.lastIndexOf('.'));//16\\n\\t\\t\\n\\t\\t/**\\n\\t\\t * 校验一个邮箱是否合法：\\n\\t\\t * \\t\\t1.必须包含@符号\\n\\t\\t * \\t\\t2.必须包含.符号\\n\\t\\t * \\t\\t3.@符号必须在.符号前面\\n\\t\\t * \\t\\t4.只允许出现一个@符号\\n\\t\\t */\\n\\t\\tint atIndex = str15.indexOf('@');\\n\\t\\tint dotIndex = str15.lastIndexOf('.');\\n\\t\\tint atLastIndex = str15.lastIndexOf('@');\\n\\t\\t\\n\\t\\tif(atIndex &gt;= 0 &amp;&amp; dotIndex &gt;= 0 &amp;&amp; atIndex &lt; dotIndex &amp;&amp; atIndex == atLastIndex)\\n\\t\\t{\\n\\t\\t\\tSystem.out.println(\\"邮箱合法\\");\\n\\t\\t}\\n\\t\\telse\\n\\t\\t{\\n\\t\\t\\tSystem.out.println(\\"邮箱不合法，请参考以下格式xxxxx@xxxx.xxx\\");\\n\\t\\t}\\n\\t\\t\\n\\t\\t//isEmpty() 判断字符串是否为空（即长度是否&gt;0）\\n\\t\\tString str16 = null;\\n\\t\\t//System.out.println(str16.isEmpty());//NullPointerException空指针异常\\n\\t\\t\\n\\t\\tString str17 = \\"\\";\\n\\t\\tSystem.out.println(str17.isEmpty());//true\\n\\t\\t\\n\\t\\tString str18 = \\" \\";\\n\\t\\tSystem.out.println(str18.isEmpty());//false\\n\\t\\t\\n\\t\\t//length() 判断字符串的长度\\n\\t\\t//System.out.println(str16.length());//NullPointerException空指针异常\\n\\t\\tSystem.out.println(str17.length());//0\\n\\t\\tSystem.out.println(str18.length());//1\\n\\t\\t\\n\\t\\tif(str16 != null &amp;&amp; !\\"\\".equals(str16))\\n\\t\\t{\\n\\t\\t\\tSystem.out.println(\\"str16不为空\\");\\n\\t\\t}\\n\\t\\telse\\n\\t\\t{\\n\\t\\t\\tSystem.out.println(\\"str16为空\\");\\n\\t\\t}\\n\\t\\t\\n\\t\\t//substring(beginIndex) 截取字符串 ，默认从beginIndex位置截取到末尾\\n\\t\\tString str19 = \\"zhaorong@neusoft.com\\";\\n\\t\\tSystem.out.println(str19.substring(8));//@neusoft.com\\n\\t\\tSystem.out.println(str19.substring(str19.indexOf('@')));//@neusoft.com\\n\\t\\t\\n\\t\\t//substring(beginIndex,endIndex)截取字符串 ，默认从beginIndex位置截取到endIndex，不包括结束位置\\n\\t\\tSystem.out.println(str19.substring(0,8));//zhaorong\\n\\t\\tSystem.out.println(str19.substring(0,str19.indexOf('@')));//zhaorong\\n\\t\\t\\n\\t\\t//trim()  去首尾空格\\n\\t\\tString str20 = \\" zhao rong \\";\\n\\t\\tSystem.out.println(str20);       //\\" zhao rong \\"\\n\\t\\tSystem.out.println(str20.trim());//\\"zhao rong\\"\\n\\t\\t\\n\\t\\t//replace(oldChar,newChar) 替换字符串\\n\\t\\tSystem.out.println(str20.replace(\\" \\", \\"\\")); //\\"zhaorong\\"\\n\\t\\t\\n\\t\\tString str21 = \\"发表香港言论，涉及废青，涉及政治问题，涉及习大大的举措\\";\\n\\t\\tSystem.out.println(str21.replace(\\"废青\\", \\"**\\").replace(\\"政治\\", \\"**\\"));\\n\\t\\t\\n\\t\\t/**\\n\\t\\t * 使用正则表达式的方法：\\n\\t\\t *     [0-9] : 表示0-9之间的任意一个数字， \\\\d\\n\\t\\t *     [a-zA-Z] : 表达26个大小写字母的任意一个字符\\n\\t\\t *     [a-zA-Z_0-9] ： \\\\w\\n\\t\\t *     \\n\\t\\t *     \\n\\t\\t * \\t         邮箱：[0-9]{6} 或者   \\\\d{6}\\n\\t\\t *     手机号码：[1]{1}[3|4|5|7|8|9]{1}[0-9]{9}\\n\\t\\t *     邮箱：[a-zA-Z_0-9]+@[a-zA-Z0-9]+\\\\\\\\.[a-zA-Z]{2,3}\\n\\t\\t */\\n\\t\\t//matches() 使用正则表达式校验字符串是否符合指定规则\\n\\t\\tString postCode = \\"510663\\";\\n\\t\\tString postCodeRegex = \\"^[0-9]{6}$\\"; //[0-9]{6}  \\\\d{6}\\n\\t\\tSystem.out.println(postCode.matches(postCodeRegex));\\n\\t\\t\\n\\t\\tString email = \\"zhaorong@neusoft.com\\";\\n\\t\\tString emailRegex = \\"[a-zA-Z_0-9]+@[a-zA-Z0-9]+\\\\\\\\.[a-zA-Z]{2,3}\\";\\n\\t\\tSystem.out.println(email.matches(emailRegex));\\n\\t\\t\\n\\t\\t//replaceAll() 使用正则表达式替换所有字符\\n\\t\\tString str22 = \\"i4like5you6hahaha\\";\\n\\t\\tSystem.out.println(str22.replaceAll(\\"[0-9]\\", \\" \\"));\\n\\t\\t\\n\\t\\t//split() 分割字符串\\n\\t\\tString str23 = \\"锦权;18;男;110\\";\\n\\t\\tString[] array = str23.split(\\";\\");\\n\\t\\tfor (String str24 : array) {\\n\\t\\t\\tSystem.out.println(str24);\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
