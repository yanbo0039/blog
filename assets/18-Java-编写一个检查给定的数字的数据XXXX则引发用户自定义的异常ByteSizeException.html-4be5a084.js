const t=JSON.parse('{"key":"v-27281220","path":"/zh/programBlog/ServerSideLanguage/Java/18-Java-%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E6%A3%80%E6%9F%A5%E7%BB%99%E5%AE%9A%E7%9A%84%E6%95%B0%E5%AD%97%E7%9A%84%E6%95%B0%E6%8D%AEXXXX%E5%88%99%E5%BC%95%E5%8F%91%E7%94%A8%E6%88%B7%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E5%BC%82%E5%B8%B8ByteSizeException.html","title":"Java-编写一个检查给定的数字的数据XXXX则引发用户自定义的异常ByteSizeException","lang":"zh-CN","frontmatter":{"title":"Java-编写一个检查给定的数字的数据XXXX则引发用户自定义的异常ByteSizeException","icon":"page","order":18,"author":"涎涎","date":"2019-06-16T22:06:46.000Z","isOriginal":true,"category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-编写一个检查给定的数字的数据XXXX则引发用户自定义的异常ByteSizeException"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/18-Java-%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E6%A3%80%E6%9F%A5%E7%BB%99%E5%AE%9A%E7%9A%84%E6%95%B0%E5%AD%97%E7%9A%84%E6%95%B0%E6%8D%AEXXXX%E5%88%99%E5%BC%95%E5%8F%91%E7%94%A8%E6%88%B7%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E5%BC%82%E5%B8%B8ByteSizeException.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-编写一个检查给定的数字的数据XXXX则引发用户自定义的异常ByteSizeException"}],["meta",{"property":"og:description","content":"Java-编写一个检查给定的数字的数据XXXX则引发用户自定义的异常ByteSizeException 编写一个检查给定的数字的数据类型是否为byte的程序，如果此数字超出byte数据类型表示的数的范围，则引发用户自定义的异常ByteSizeException,并显示相应的错误信息（知识点：自定义异常） [选作题] 步骤1：创建用户自定义异常类ByteSizeException 步骤2：在main方法中编写逻辑代码 步骤3：运行并测试 import java.util.Scanner; public class TryError { \\t/* \\t * 1、编写应用程序，从命令行传入两个整型数作为除数和被除数。 要求程序中捕获NumberFormatException \\t * 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出。 \\t */ \\tpublic TryError() { \\t} \\tpublic static void main(String[] args) { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"please enter the first Number\\"); \\t\\tString string1 = scanner.next(); \\t\\tSystem.out.println(\\"please enter the second Number\\"); \\t\\tString string2 = scanner.next(); \\t\\tint num1, num2; \\t\\ttry { \\t\\t\\tnum1 = Integer.parseInt(string1); \\t\\t\\tnum2 = Integer.parseInt(string2); \\t\\t\\tSystem.out.println(num1 / num2); \\t\\t} catch (NumberFormatException | ArithmeticException e) { \\t\\t\\te.printStackTrace(); \\t\\t} finally { \\t\\t\\tSystem.out.println(\\"alaways doing ....\\"); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-21T13:47:22.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:06:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-21T13:47:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-编写一个检查给定的数字的数据XXXX则引发用户自定义的异常ByteSizeException\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:06:46.000Z\\",\\"dateModified\\":\\"2023-05-21T13:47:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java-编写一个检查给定的数字的数据XXXX则引发用户自定义的异常ByteSizeException 编写一个检查给定的数字的数据类型是否为byte的程序，如果此数字超出byte数据类型表示的数的范围，则引发用户自定义的异常ByteSizeException,并显示相应的错误信息（知识点：自定义异常） [选作题] 步骤1：创建用户自定义异常类ByteSizeException 步骤2：在main方法中编写逻辑代码 步骤3：运行并测试 import java.util.Scanner; public class TryError { \\t/* \\t * 1、编写应用程序，从命令行传入两个整型数作为除数和被除数。 要求程序中捕获NumberFormatException \\t * 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出。 \\t */ \\tpublic TryError() { \\t} \\tpublic static void main(String[] args) { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"please enter the first Number\\"); \\t\\tString string1 = scanner.next(); \\t\\tSystem.out.println(\\"please enter the second Number\\"); \\t\\tString string2 = scanner.next(); \\t\\tint num1, num2; \\t\\ttry { \\t\\t\\tnum1 = Integer.parseInt(string1); \\t\\t\\tnum2 = Integer.parseInt(string2); \\t\\t\\tSystem.out.println(num1 / num2); \\t\\t} catch (NumberFormatException | ArithmeticException e) { \\t\\t\\te.printStackTrace(); \\t\\t} finally { \\t\\t\\tSystem.out.println(\\"alaways doing ....\\"); \\t\\t} \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684145400000,"updatedTime":1684676842000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":2}]},"readingTime":{"minutes":1.44,"words":432},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/18-Java-编写一个检查给定的数字的数据XXXX则引发用户自定义的异常ByteSizeException.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java-编写一个检查给定的数字的数据XXXX则引发用户自定义的异常ByteSizeException</h1>\\n<p>编写一个检查给定的数字的数据类型是否为byte的程序，如果此数字超出byte数据类型表示的数的范围，则引发用户自定义的异常ByteSizeException,并显示相应的错误信息（知识点：自定义异常） [选作题]\\n步骤1：创建用户自定义异常类ByteSizeException\\n步骤2：在main方法中编写逻辑代码\\n步骤3：运行并测试</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>import java.util.Scanner;\\n\\npublic class TryError {\\n\\n\\t/*\\n\\t * 1、编写应用程序，从命令行传入两个整型数作为除数和被除数。 要求程序中捕获NumberFormatException\\n\\t * 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出。\\n\\t */\\n\\tpublic TryError() {\\n\\t}\\n\\n\\tpublic static void main(String[] args) {\\n\\n\\t\\tScanner scanner = new Scanner(System.in);\\n\\n\\t\\tSystem.out.println(\\"please enter the first Number\\");\\n\\n\\t\\tString string1 = scanner.next();\\n\\n\\t\\tSystem.out.println(\\"please enter the second Number\\");\\n\\n\\t\\tString string2 = scanner.next();\\n\\n\\t\\tint num1, num2;\\n\\n\\t\\ttry {\\n\\t\\t\\tnum1 = Integer.parseInt(string1);\\n\\t\\t\\tnum2 = Integer.parseInt(string2);\\n\\t\\t\\tSystem.out.println(num1 / num2);\\n\\t\\t} catch (NumberFormatException | ArithmeticException e) {\\n\\t\\t\\te.printStackTrace();\\n\\t\\t} finally {\\n\\t\\t\\tSystem.out.println(\\"alaways doing ....\\");\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
