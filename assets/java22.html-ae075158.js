const t=JSON.parse('{"key":"v-4cf87a16","path":"/zh/programBlog/ServerSideLanguage/Java/java22.html","title":"Java-编写一个程序现从命令行参数输入两个字符串类型的数值并计算输出两个数值的和XXX","lang":"zh-CN","frontmatter":{"title":"Java-编写一个程序现从命令行参数输入两个字符串类型的数值并计算输出两个数值的和XXX","icon":"page","order":22,"author":"涎涎","date":"2019-06-16T22:08:16.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java22.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-编写一个程序现从命令行参数输入两个字符串类型的数值并计算输出两个数值的和XXX"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java22.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-编写一个程序现从命令行参数输入两个字符串类型的数值并计算输出两个数值的和XXX"}],["meta",{"property":"og:description","content":"Java-编写一个程序现从命令行参数输入两个字符串类型的数值并计算输出两个数值的和XXX package MyTask; import java.util.Arrays; import java.util.Date; import java.util.Random; import java.util.Scanner; public class Task { \\tpublic Task() { \\t} \\t/** \\t * 分割｜特殊符号字符串为数组的方法 \\t */ \\tpublic static void String_split() { \\t\\tString souString = \\"a|n|c|d\\"; \\t\\tString[] reStrings = souString.split(\\"\\\\\\\\|\\"); \\t\\tSystem.out.println(Arrays.toString(reStrings)); \\t} \\t/* \\t * 1、编写一个程序，实现从命令行参数输入两个字符串类型的数值， \\t * 并计算输出两个数值的和 暂未考虑输入的数值型字符串为字母。。 \\t */ \\tpublic static void sumNumStr() { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"请输入第一个数字\\"); \\t\\tint num1 = Integer.parseInt(scanner.next()); \\t\\tSystem.out.println(\\"请输入第二个数字\\"); \\t\\tint num2 = Integer.parseInt(scanner.next()); \\t\\tSystem.out.println(\\"两个数字之和为： \\" + (num1 + num2)); \\t} \\t/* \\t * 2、编写一个程序，实现从命令行参数输入一字符串， \\t * 统计该字符串中字符“e”出现的次数。（识点：String中常用的方法） \\t */ \\tpublic static void countWord_e() { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"请输入一串字符串\\"); \\t\\tString string3 = scanner.next(); \\t\\tString eString = \\"e\\"; \\t\\tint count = 0, index = 0; \\t\\twhile (index &lt; string3.length()) { \\t\\t\\tif (string3.indexOf(\\"e\\", index) == index) { \\t\\t\\t\\tcount++; \\t\\t\\t} \\t\\t\\tindex++; \\t\\t} \\t\\tSystem.out.println(\\"字符串中字符“e”出现的次数是： \\" + count); \\t} \\t/* \\t * 3、生成十个0~100之间的随机数，放到数组中，然后排序输出。 \\t * \\t */ \\tpublic static void mandomNumArraySort() { \\t\\tint[] sumArray = new int[10]; \\t\\tRandom random = new Random(); \\t\\tfor (int i = 0; i &lt; sumArray.length; i++) { // 将随机产生的数字存进数组 此随机数范围为 &gt;=0 &lt;101 \\t\\t\\tsumArray[i] = random.nextInt(101); //另一种产生随机数的方法 此随机数范围为 &gt;=0 &lt;1 //\\t\\t\\tsumArray[i] = (int)Math.floor(Math.random() * 101); \\t\\t} \\t\\tArrays.sort(sumArray);// 数组排序 //\\t\\tfor (int i = 0; i &lt; sumArray.length - 1; i++) { //\\t\\t\\tfor (int j = 0; j &lt; sumArray.length - 1 - i; j++) { //\\t\\t\\t\\tif(sumArray[j] &gt; sumArray[j +1]) { //\\t\\t\\t\\t\\tint temp = sumArray[j]; //\\t\\t\\t\\t\\tsumArray[j] = sumArray[j+1]; //\\t\\t\\t\\t\\tsumArray[j+1] = temp; //\\t\\t\\t\\t} //\\t\\t\\t} //\\t\\t}//冒泡排序 \\t\\tSystem.out.println(Arrays.toString(sumArray)); \\t} \\t/* \\t * 4、巴黎时间比北京时间晚7个小时， 纽约时间比北京时间晚12个小时， \\t * 试编写一程序，根据输入的北京时间输出相应的巴黎和纽约时间。 \\t */ \\tpublic static void getNewYorkandParisTime() { \\t\\tDate date = new Date(); \\t\\tSystem.out.println(\\"此刻北京时间为： \\" + date); \\t\\t// 把时间相加减：操作的是 毫微秒值 \\t\\tDate parisTimeDate = new Date(date.getTime() - 7 * 60 * 60 * 1000); \\t\\tSystem.out.println(\\"此刻的巴黎时间为： \\" + parisTimeDate); \\t\\tDate newYorkTiDate = new Date(date.getTime() - 12 * 60 * 60 * 1000); \\t\\tSystem.out.println(\\"此刻的纽约时间为： \\" + newYorkTiDate); \\t} \\t/* \\t * 5、解析一个邮箱地址是否合法， 如果合法则打印出用户名部分和该邮箱所属的网站域名， \\t * 如果邮箱地址不合法则显示不合法的原因 [选做题] \\t * 5.1提示：邮箱地址不合法的因素： \\t * 5.1.1邮箱地址中不包含@或. \\t * 5.1.2邮箱地址中含有多了@或. \\t * 5.1.3邮箱地址中.出现在@的前面 \\t * 5.1.4用户名里有其他字符 5.2实现步骤： \\t * 5.2.1创建一个类，类名：mailtest \\t */ \\tpublic static void isMail() { \\t} \\t/* \\t * 6、分别在控制台输入字符串和子字符串， \\t * 并计算字符串中子字符串出现的次数 \\t * \\t */ \\tpublic static void countStrChild() { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"请输入一个长度大于1的字符串\\"); \\t\\tString string1 = scanner.next(); \\t\\tSystem.out.println(\\"请输入一个字符串\\"); \\t\\tString string2 = scanner.next(); \\t\\tint index = 0, // 下标值 \\t\\t\\t\\tcount = 0;// 统计次数 \\t\\twhile (index &lt; string1.length()) { \\t\\t\\tif (string1.indexOf(string2, index) == index) { \\t\\t\\t\\tcount++; \\t\\t\\t} \\t\\t\\tindex++; \\t\\t} \\t\\tSystem.out.println(string2 + \\" 在 \\" + string1 + \\" 中出现的次数为：\\" + count + \\" 次\\"); \\t} \\t/* \\t * 7、有一个字符串， 其中包含中文字符、英文字符和数字字符， \\t * 请统计和打印出各个字符的个数。 \\t */ \\tpublic static void countZhEnNum() { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"请输入一个包含中文、字母和数字的字符串\\"); \\t\\tString scString = scanner.next(); \\t\\tStringBuilder zhStringBuilder = new StringBuilder(); \\t\\tStringBuilder enStringBuilder = new StringBuilder(); \\t\\tStringBuilder numStringBuilder = new StringBuilder(); \\t\\tfor (int i = 0; i &lt; scString.length(); i++) { \\t\\t\\t// 使用Character.getType()方法获取字符的类型 \\t\\t\\tswitch (Character.getType(scString.charAt(i))) { \\t\\t\\tcase 1: // 大写字母 \\t\\t\\t\\tenStringBuilder.append(scString.charAt(i)); \\t\\t\\t\\tbreak; \\t\\t\\tcase 2: // 小写字母 \\t\\t\\t\\tenStringBuilder.append(scString.charAt(i)); \\t\\t\\t\\tbreak; \\t\\t\\tcase 5: // 中文字符 \\t\\t\\t\\tzhStringBuilder.append(scString.charAt(i)); \\t\\t\\t\\tbreak; \\t\\t\\tcase 9: // 数字 \\t\\t\\t\\tnumStringBuilder.append(scString.charAt(i)); \\t\\t\\t\\tbreak; \\t\\t\\tdefault: \\t\\t\\t\\tbreak; \\t\\t\\t} \\t\\t} \\t\\tSystem.out.println(scString + \\" 中包含的中文字符为：\\" + zhStringBuilder.length() + \\" 个\\\\t包含的英文字符为：\\" \\t + enStringBuilder.length() + \\" 个\\\\t包含的数字字符为\\" + numStringBuilder.length() + \\"个\\"); \\t} \\t/* \\t * 8、有一种数叫回文数，正读和反读都一样， \\t * 如12321便是一个回文数。 编写一个程序， \\t * 从命令行得到一个整数，判断该数是不是回文数。 \\t * \\t */ \\tpublic static void isPalindromeNumber() { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"请输入一个长度大于1的数字\\"); \\t\\tString numString = scanner.next(); \\t\\tStringBuilder stringBuilder = new StringBuilder(numString); \\t\\tstringBuilder.reverse(); \\t\\t// stringBuilder.toString()将StringBuilder类型转换成String类型 \\t\\tif (Integer.parseInt(numString) == Integer.parseInt(stringBuilder.toString())) { \\t\\t\\tSystem.out.println(numString + \\"是回文数\\"); \\t\\t} else { \\t\\t\\tSystem.out.println(numString + \\"不是回文数\\"); \\t\\t} \\t\\t/** \\t\\t * 第二种方法 \\t\\t * 利用equals()方法判断两个对象是否相等 \\t\\t */ //\\t\\tif (numString.equals(new StringBuilder(numString).reverse().toString())) { //\\t\\t\\tSystem.out.println(\\"是回文数\\"); //\\t\\t} else { //\\t\\t\\tSystem.out.println(\\"不是\\"); //\\t\\t} \\t} \\tpublic static void main(String[] args) { //\\t\\tString_split(); //\\t\\tsumNumStr(); // countWord_e(); // mandomNumArraySort(); //\\t\\tgetNewYorkandParisTime(); //\\t\\tisMail(); //\\t\\tcountStrChild(); //\\t\\tcountZhEnNum(); //\\t\\tisPalindromeNumber(); \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:08:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-编写一个程序现从命令行参数输入两个字符串类型的数值并计算输出两个数值的和XXX\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:08:16.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java-编写一个程序现从命令行参数输入两个字符串类型的数值并计算输出两个数值的和XXX package MyTask; import java.util.Arrays; import java.util.Date; import java.util.Random; import java.util.Scanner; public class Task { \\tpublic Task() { \\t} \\t/** \\t * 分割｜特殊符号字符串为数组的方法 \\t */ \\tpublic static void String_split() { \\t\\tString souString = \\"a|n|c|d\\"; \\t\\tString[] reStrings = souString.split(\\"\\\\\\\\|\\"); \\t\\tSystem.out.println(Arrays.toString(reStrings)); \\t} \\t/* \\t * 1、编写一个程序，实现从命令行参数输入两个字符串类型的数值， \\t * 并计算输出两个数值的和 暂未考虑输入的数值型字符串为字母。。 \\t */ \\tpublic static void sumNumStr() { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"请输入第一个数字\\"); \\t\\tint num1 = Integer.parseInt(scanner.next()); \\t\\tSystem.out.println(\\"请输入第二个数字\\"); \\t\\tint num2 = Integer.parseInt(scanner.next()); \\t\\tSystem.out.println(\\"两个数字之和为： \\" + (num1 + num2)); \\t} \\t/* \\t * 2、编写一个程序，实现从命令行参数输入一字符串， \\t * 统计该字符串中字符“e”出现的次数。（识点：String中常用的方法） \\t */ \\tpublic static void countWord_e() { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"请输入一串字符串\\"); \\t\\tString string3 = scanner.next(); \\t\\tString eString = \\"e\\"; \\t\\tint count = 0, index = 0; \\t\\twhile (index &lt; string3.length()) { \\t\\t\\tif (string3.indexOf(\\"e\\", index) == index) { \\t\\t\\t\\tcount++; \\t\\t\\t} \\t\\t\\tindex++; \\t\\t} \\t\\tSystem.out.println(\\"字符串中字符“e”出现的次数是： \\" + count); \\t} \\t/* \\t * 3、生成十个0~100之间的随机数，放到数组中，然后排序输出。 \\t * \\t */ \\tpublic static void mandomNumArraySort() { \\t\\tint[] sumArray = new int[10]; \\t\\tRandom random = new Random(); \\t\\tfor (int i = 0; i &lt; sumArray.length; i++) { // 将随机产生的数字存进数组 此随机数范围为 &gt;=0 &lt;101 \\t\\t\\tsumArray[i] = random.nextInt(101); //另一种产生随机数的方法 此随机数范围为 &gt;=0 &lt;1 //\\t\\t\\tsumArray[i] = (int)Math.floor(Math.random() * 101); \\t\\t} \\t\\tArrays.sort(sumArray);// 数组排序 //\\t\\tfor (int i = 0; i &lt; sumArray.length - 1; i++) { //\\t\\t\\tfor (int j = 0; j &lt; sumArray.length - 1 - i; j++) { //\\t\\t\\t\\tif(sumArray[j] &gt; sumArray[j +1]) { //\\t\\t\\t\\t\\tint temp = sumArray[j]; //\\t\\t\\t\\t\\tsumArray[j] = sumArray[j+1]; //\\t\\t\\t\\t\\tsumArray[j+1] = temp; //\\t\\t\\t\\t} //\\t\\t\\t} //\\t\\t}//冒泡排序 \\t\\tSystem.out.println(Arrays.toString(sumArray)); \\t} \\t/* \\t * 4、巴黎时间比北京时间晚7个小时， 纽约时间比北京时间晚12个小时， \\t * 试编写一程序，根据输入的北京时间输出相应的巴黎和纽约时间。 \\t */ \\tpublic static void getNewYorkandParisTime() { \\t\\tDate date = new Date(); \\t\\tSystem.out.println(\\"此刻北京时间为： \\" + date); \\t\\t// 把时间相加减：操作的是 毫微秒值 \\t\\tDate parisTimeDate = new Date(date.getTime() - 7 * 60 * 60 * 1000); \\t\\tSystem.out.println(\\"此刻的巴黎时间为： \\" + parisTimeDate); \\t\\tDate newYorkTiDate = new Date(date.getTime() - 12 * 60 * 60 * 1000); \\t\\tSystem.out.println(\\"此刻的纽约时间为： \\" + newYorkTiDate); \\t} \\t/* \\t * 5、解析一个邮箱地址是否合法， 如果合法则打印出用户名部分和该邮箱所属的网站域名， \\t * 如果邮箱地址不合法则显示不合法的原因 [选做题] \\t * 5.1提示：邮箱地址不合法的因素： \\t * 5.1.1邮箱地址中不包含@或. \\t * 5.1.2邮箱地址中含有多了@或. \\t * 5.1.3邮箱地址中.出现在@的前面 \\t * 5.1.4用户名里有其他字符 5.2实现步骤： \\t * 5.2.1创建一个类，类名：mailtest \\t */ \\tpublic static void isMail() { \\t} \\t/* \\t * 6、分别在控制台输入字符串和子字符串， \\t * 并计算字符串中子字符串出现的次数 \\t * \\t */ \\tpublic static void countStrChild() { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"请输入一个长度大于1的字符串\\"); \\t\\tString string1 = scanner.next(); \\t\\tSystem.out.println(\\"请输入一个字符串\\"); \\t\\tString string2 = scanner.next(); \\t\\tint index = 0, // 下标值 \\t\\t\\t\\tcount = 0;// 统计次数 \\t\\twhile (index &lt; string1.length()) { \\t\\t\\tif (string1.indexOf(string2, index) == index) { \\t\\t\\t\\tcount++; \\t\\t\\t} \\t\\t\\tindex++; \\t\\t} \\t\\tSystem.out.println(string2 + \\" 在 \\" + string1 + \\" 中出现的次数为：\\" + count + \\" 次\\"); \\t} \\t/* \\t * 7、有一个字符串， 其中包含中文字符、英文字符和数字字符， \\t * 请统计和打印出各个字符的个数。 \\t */ \\tpublic static void countZhEnNum() { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"请输入一个包含中文、字母和数字的字符串\\"); \\t\\tString scString = scanner.next(); \\t\\tStringBuilder zhStringBuilder = new StringBuilder(); \\t\\tStringBuilder enStringBuilder = new StringBuilder(); \\t\\tStringBuilder numStringBuilder = new StringBuilder(); \\t\\tfor (int i = 0; i &lt; scString.length(); i++) { \\t\\t\\t// 使用Character.getType()方法获取字符的类型 \\t\\t\\tswitch (Character.getType(scString.charAt(i))) { \\t\\t\\tcase 1: // 大写字母 \\t\\t\\t\\tenStringBuilder.append(scString.charAt(i)); \\t\\t\\t\\tbreak; \\t\\t\\tcase 2: // 小写字母 \\t\\t\\t\\tenStringBuilder.append(scString.charAt(i)); \\t\\t\\t\\tbreak; \\t\\t\\tcase 5: // 中文字符 \\t\\t\\t\\tzhStringBuilder.append(scString.charAt(i)); \\t\\t\\t\\tbreak; \\t\\t\\tcase 9: // 数字 \\t\\t\\t\\tnumStringBuilder.append(scString.charAt(i)); \\t\\t\\t\\tbreak; \\t\\t\\tdefault: \\t\\t\\t\\tbreak; \\t\\t\\t} \\t\\t} \\t\\tSystem.out.println(scString + \\" 中包含的中文字符为：\\" + zhStringBuilder.length() + \\" 个\\\\t包含的英文字符为：\\" \\t + enStringBuilder.length() + \\" 个\\\\t包含的数字字符为\\" + numStringBuilder.length() + \\"个\\"); \\t} \\t/* \\t * 8、有一种数叫回文数，正读和反读都一样， \\t * 如12321便是一个回文数。 编写一个程序， \\t * 从命令行得到一个整数，判断该数是不是回文数。 \\t * \\t */ \\tpublic static void isPalindromeNumber() { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"请输入一个长度大于1的数字\\"); \\t\\tString numString = scanner.next(); \\t\\tStringBuilder stringBuilder = new StringBuilder(numString); \\t\\tstringBuilder.reverse(); \\t\\t// stringBuilder.toString()将StringBuilder类型转换成String类型 \\t\\tif (Integer.parseInt(numString) == Integer.parseInt(stringBuilder.toString())) { \\t\\t\\tSystem.out.println(numString + \\"是回文数\\"); \\t\\t} else { \\t\\t\\tSystem.out.println(numString + \\"不是回文数\\"); \\t\\t} \\t\\t/** \\t\\t * 第二种方法 \\t\\t * 利用equals()方法判断两个对象是否相等 \\t\\t */ //\\t\\tif (numString.equals(new StringBuilder(numString).reverse().toString())) { //\\t\\t\\tSystem.out.println(\\"是回文数\\"); //\\t\\t} else { //\\t\\t\\tSystem.out.println(\\"不是\\"); //\\t\\t} \\t} \\tpublic static void main(String[] args) { //\\t\\tString_split(); //\\t\\tsumNumStr(); // countWord_e(); // mandomNumArraySort(); //\\t\\tgetNewYorkandParisTime(); //\\t\\tisMail(); //\\t\\tcountStrChild(); //\\t\\tcountZhEnNum(); //\\t\\tisPalindromeNumber(); \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":4.61,"words":1384},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/22-Java-编写一个程序现从命令行参数输入两个字符串类型的数值并计算输出两个数值的和XXX.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java-编写一个程序现从命令行参数输入两个字符串类型的数值并计算输出两个数值的和XXX</h1>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package MyTask;\\n\\nimport java.util.Arrays;\\nimport java.util.Date;\\nimport java.util.Random;\\nimport java.util.Scanner;\\n\\npublic class Task {\\n\\n\\tpublic Task() {\\n\\n\\t}\\n\\n\\t/**\\n\\t * 分割｜特殊符号字符串为数组的方法\\n\\t */\\n\\tpublic static void String_split() {\\n\\t\\tString souString = \\"a|n|c|d\\";\\n\\t\\tString[] reStrings = souString.split(\\"\\\\\\\\|\\");\\n\\t\\tSystem.out.println(Arrays.toString(reStrings));\\n\\t}\\n\\n\\t/*\\n\\t * 1、编写一个程序，实现从命令行参数输入两个字符串类型的数值，\\n\\t  *  并计算输出两个数值的和 暂未考虑输入的数值型字符串为字母。。\\n\\t */\\n\\tpublic static void sumNumStr() {\\n\\t\\tScanner scanner = new Scanner(System.in);\\n\\t\\tSystem.out.println(\\"请输入第一个数字\\");\\n\\t\\tint num1 = Integer.parseInt(scanner.next());\\n\\t\\tSystem.out.println(\\"请输入第二个数字\\");\\n\\t\\tint num2 = Integer.parseInt(scanner.next());\\n\\t\\tSystem.out.println(\\"两个数字之和为： \\" + (num1 + num2));\\n\\t}\\n\\n\\t/*\\n\\t * 2、编写一个程序，实现从命令行参数输入一字符串， \\n\\t  *   统计该字符串中字符“e”出现的次数。（识点：String中常用的方法）\\n\\t */\\n\\tpublic static void countWord_e() {\\n\\t\\tScanner scanner = new Scanner(System.in);\\n\\t\\tSystem.out.println(\\"请输入一串字符串\\");\\n\\t\\tString string3 = scanner.next();\\n\\t\\tString eString = \\"e\\";\\n\\t\\tint count = 0, index = 0;\\n\\t\\twhile (index &lt; string3.length()) {\\n\\t\\t\\tif (string3.indexOf(\\"e\\", index) == index) {\\n\\t\\t\\t\\tcount++;\\n\\t\\t\\t}\\n\\t\\t\\tindex++;\\n\\t\\t}\\n\\t\\tSystem.out.println(\\"字符串中字符“e”出现的次数是： \\" + count);\\n\\t}\\n\\n\\t/*\\n\\t * 3、生成十个0~100之间的随机数，放到数组中，然后排序输出。\\n\\t * \\n\\t */\\n\\tpublic static void mandomNumArraySort() {\\n\\t\\tint[] sumArray = new int[10];\\n\\t\\tRandom random = new Random();\\n\\t\\tfor (int i = 0; i &lt; sumArray.length; i++) {\\n// 将随机产生的数字存进数组 此随机数范围为 &gt;=0 &lt;101\\n\\t\\t\\tsumArray[i] = random.nextInt(101);\\n//另一种产生随机数的方法 此随机数范围为 &gt;=0 &lt;1\\n//\\t\\t\\tsumArray[i] = (int)Math.floor(Math.random() * 101);\\n              \\n\\t\\t}\\n\\t\\tArrays.sort(sumArray);// 数组排序\\n//\\t\\tfor (int i = 0; i &lt; sumArray.length - 1; i++) {\\n//\\t\\t\\tfor (int j = 0; j &lt; sumArray.length - 1 - i; j++) {\\n//\\t\\t\\t\\tif(sumArray[j] &gt; sumArray[j +1]) {\\n//\\t\\t\\t\\t\\tint temp = sumArray[j];\\n//\\t\\t\\t\\t\\tsumArray[j] = sumArray[j+1];\\n//\\t\\t\\t\\t\\tsumArray[j+1] = temp;\\n//\\t\\t\\t\\t}\\n//\\t\\t\\t}\\n//\\t\\t}//冒泡排序 \\n\\t\\tSystem.out.println(Arrays.toString(sumArray));\\n\\t}\\n\\n\\t/*\\n\\t * 4、巴黎时间比北京时间晚7个小时， 纽约时间比北京时间晚12个小时，\\n\\t  *   试编写一程序，根据输入的北京时间输出相应的巴黎和纽约时间。\\n\\t */\\n\\tpublic static void getNewYorkandParisTime() {\\n\\t\\tDate date = new Date();\\n\\t\\tSystem.out.println(\\"此刻北京时间为： \\" + date);\\n\\t\\t// 把时间相加减：操作的是 毫微秒值\\n\\t\\tDate parisTimeDate = new Date(date.getTime() - 7 * 60 * 60 * 1000);\\n\\t\\tSystem.out.println(\\"此刻的巴黎时间为： \\" + parisTimeDate);\\n\\t\\tDate newYorkTiDate = new Date(date.getTime() - 12 * 60 * 60 * 1000);\\n\\t\\tSystem.out.println(\\"此刻的纽约时间为： \\" + newYorkTiDate);\\n\\n\\t}\\n\\n\\t/*\\n\\t * 5、解析一个邮箱地址是否合法， 如果合法则打印出用户名部分和该邮箱所属的网站域名，\\n\\t  *  如果邮箱地址不合法则显示不合法的原因 [选做题]\\n\\t * 5.1提示：邮箱地址不合法的因素： \\n\\t * 5.1.1邮箱地址中不包含@或. \\n\\t * 5.1.2邮箱地址中含有多了@或. \\n\\t * 5.1.3邮箱地址中.出现在@的前面\\n\\t * 5.1.4用户名里有其他字符 5.2实现步骤：\\n\\t *  5.2.1创建一个类，类名：mailtest\\n\\t */\\n\\tpublic static void isMail() {\\n\\n\\t}\\n\\n\\t/*\\n\\t * 6、分别在控制台输入字符串和子字符串，\\n\\t  *  并计算字符串中子字符串出现的次数\\n\\t * \\n\\t */\\n\\tpublic static void countStrChild() {\\n\\t\\tScanner scanner = new Scanner(System.in);\\n\\t\\tSystem.out.println(\\"请输入一个长度大于1的字符串\\");\\n\\t\\tString string1 = scanner.next();\\n\\t\\tSystem.out.println(\\"请输入一个字符串\\");\\n\\t\\tString string2 = scanner.next();\\n\\t\\tint index = 0, // 下标值\\n\\t\\t\\t\\tcount = 0;// 统计次数\\n\\t\\twhile (index &lt; string1.length()) {\\n\\t\\t\\tif (string1.indexOf(string2, index) == index) {\\n\\t\\t\\t\\tcount++;\\n\\t\\t\\t}\\n\\t\\t\\tindex++;\\n\\t\\t}\\n\\t\\tSystem.out.println(string2 + \\"   在   \\" + string1 +\\n                 \\" 中出现的次数为：\\" + count + \\" 次\\");\\n\\t}\\n\\n\\t/*\\n\\t * 7、有一个字符串， 其中包含中文字符、英文字符和数字字符，\\n\\t  *  请统计和打印出各个字符的个数。\\n\\t */\\n\\tpublic static void countZhEnNum() {\\n\\t\\tScanner scanner = new Scanner(System.in);\\n\\t\\tSystem.out.println(\\"请输入一个包含中文、字母和数字的字符串\\");\\n\\t\\tString scString = scanner.next();\\n\\t\\tStringBuilder zhStringBuilder = new StringBuilder();\\n\\t\\tStringBuilder enStringBuilder = new StringBuilder();\\n\\t\\tStringBuilder numStringBuilder = new StringBuilder();\\n\\t\\tfor (int i = 0; i &lt; scString.length(); i++) {\\n\\t\\t\\t// 使用Character.getType()方法获取字符的类型\\n\\t\\t\\tswitch (Character.getType(scString.charAt(i))) {\\n\\t\\t\\tcase 1: // 大写字母\\n\\t\\t\\t\\tenStringBuilder.append(scString.charAt(i));\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\tcase 2: // 小写字母\\n\\t\\t\\t\\tenStringBuilder.append(scString.charAt(i));\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\tcase 5: // 中文字符\\n\\t\\t\\t\\tzhStringBuilder.append(scString.charAt(i));\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\tcase 9: // 数字\\n\\t\\t\\t\\tnumStringBuilder.append(scString.charAt(i));\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\tdefault:\\n\\t\\t\\t\\tbreak;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t\\tSystem.out.println(scString + \\n         \\"    中包含的中文字符为：\\" + \\n                   zhStringBuilder.length() +\\n              \\" 个\\\\t包含的英文字符为：\\"\\n\\t     + enStringBuilder.length() +\\n           \\" 个\\\\t包含的数字字符为\\" + \\n          numStringBuilder.length() + \\"个\\");\\n\\t}\\n\\n\\t/*\\n\\t * 8、有一种数叫回文数，正读和反读都一样， \\n\\t  * 如12321便是一个回文数。 编写一个程序，\\n\\t  * 从命令行得到一个整数，判断该数是不是回文数。\\n\\t * \\n\\t */\\n\\tpublic static void isPalindromeNumber() {\\n\\t\\tScanner scanner = new Scanner(System.in);\\n\\t\\tSystem.out.println(\\"请输入一个长度大于1的数字\\");\\n\\t\\tString numString = scanner.next();\\n\\t\\tStringBuilder stringBuilder = new StringBuilder(numString);\\n\\t\\tstringBuilder.reverse();\\n\\t\\t// stringBuilder.toString()将StringBuilder类型转换成String类型\\n\\t\\tif (Integer.parseInt(numString) == \\n            Integer.parseInt(stringBuilder.toString())) {\\n\\t\\t\\tSystem.out.println(numString + \\"是回文数\\");\\n\\t\\t} else {\\n\\t\\t\\tSystem.out.println(numString + \\"不是回文数\\");\\n\\t\\t}\\n\\t\\t/**\\n\\t\\t * 第二种方法\\n\\t\\t * 利用equals()方法判断两个对象是否相等\\n\\t\\t */\\n//\\t\\tif (numString.equals(new StringBuilder(numString).reverse().toString())) {\\n//\\t\\t\\tSystem.out.println(\\"是回文数\\");\\n//\\t\\t} else {\\n//\\t\\t\\tSystem.out.println(\\"不是\\");\\n//\\t\\t}\\n\\t}\\n\\n\\tpublic static void main(String[] args) {\\n//\\t\\tString_split();\\n//\\t\\tsumNumStr();\\n//        countWord_e(); \\n//        mandomNumArraySort();\\n//\\t\\tgetNewYorkandParisTime();\\n//\\t\\tisMail();\\n//\\t\\tcountStrChild();\\n//\\t\\tcountZhEnNum();\\n//\\t\\tisPalindromeNumber();\\n\\t}\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};