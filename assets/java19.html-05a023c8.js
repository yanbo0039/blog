const t=JSON.parse('{"key":"v-24042b2e","path":"/zh/programBlog/ServerSideLanguage/Java/java19.html","title":"Java-编写应用程序从命令行传入两个整型XXX要求程序中捕获NumberFormatException异常和ArithmeticException","lang":"zh-CN","frontmatter":{"title":"Java-编写应用程序从命令行传入两个整型XXX要求程序中捕获NumberFormatException异常和ArithmeticException","icon":"page","order":19,"author":"涎涎","date":"2019-06-16T22:07:13.000Z","isOriginal":true,"permalinkPattern":"programBlog/ServerSideLanguage/Java/java19.html","category":["Java"],"tag":["Java"],"head":[["meta",{"name":"keywords","content":"Java-编写应用程序从命令行传入两个整型XXX要求程序中捕获NumberFormatException异常和ArithmeticException"}],["meta",{"property":"og:url","content":"https://yanbo0039.github.io/blog/blog/zh/programBlog/ServerSideLanguage/Java/java19.html"}],["meta",{"property":"og:site_name","content":"涎涎的博客"}],["meta",{"property":"og:title","content":"Java-编写应用程序从命令行传入两个整型XXX要求程序中捕获NumberFormatException异常和ArithmeticException"}],["meta",{"property":"og:description","content":"Java-编写应用程序从命令行传入两个整型XXX要求程序中捕获NumberFormatException异常和ArithmeticException 编写应用程序，从命令行传入两个整型数作为除数和被除数。要求程序中捕获NumberFormatException 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出 import java.util.Scanner; public class TryError { \\t/* \\t * 1、编写应用程序，从命令行传入两个整型数作为除数和被除数。 要求程序中捕获NumberFormatException \\t * 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出。 \\t */ \\tpublic TryError() { \\t} \\tpublic static void main(String[] args) { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"please enter the first Number\\"); \\t\\tString string1 = scanner.next(); \\t\\tSystem.out.println(\\"please enter the second Number\\"); \\t\\tString string2 = scanner.next(); \\t\\tint num1, num2; \\t\\ttry { \\t\\t\\tnum1 = Integer.parseInt(string1); \\t\\t\\tnum2 = Integer.parseInt(string2); \\t\\t\\tSystem.out.println(num1 / num2); \\t\\t} catch (NumberFormatException | ArithmeticException e) { \\t\\t\\te.printStackTrace(); \\t\\t} finally { \\t\\t\\tSystem.out.println(\\"alaways doing ....\\"); \\t\\t} \\t} }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-28T07:02:16.000Z"}],["meta",{"property":"article:author","content":"涎涎"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2019-06-16T22:07:13.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-28T07:02:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java-编写应用程序从命令行传入两个整型XXX要求程序中捕获NumberFormatException异常和ArithmeticException\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-16T22:07:13.000Z\\",\\"dateModified\\":\\"2023-05-28T07:02:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"涎涎\\"}]}"]],"description":"Java-编写应用程序从命令行传入两个整型XXX要求程序中捕获NumberFormatException异常和ArithmeticException 编写应用程序，从命令行传入两个整型数作为除数和被除数。要求程序中捕获NumberFormatException 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出 import java.util.Scanner; public class TryError { \\t/* \\t * 1、编写应用程序，从命令行传入两个整型数作为除数和被除数。 要求程序中捕获NumberFormatException \\t * 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出。 \\t */ \\tpublic TryError() { \\t} \\tpublic static void main(String[] args) { \\t\\tScanner scanner = new Scanner(System.in); \\t\\tSystem.out.println(\\"please enter the first Number\\"); \\t\\tString string1 = scanner.next(); \\t\\tSystem.out.println(\\"please enter the second Number\\"); \\t\\tString string2 = scanner.next(); \\t\\tint num1, num2; \\t\\ttry { \\t\\t\\tnum1 = Integer.parseInt(string1); \\t\\t\\tnum2 = Integer.parseInt(string2); \\t\\t\\tSystem.out.println(num1 / num2); \\t\\t} catch (NumberFormatException | ArithmeticException e) { \\t\\t\\te.printStackTrace(); \\t\\t} finally { \\t\\t\\tSystem.out.println(\\"alaways doing ....\\"); \\t\\t} \\t} }"},"headers":[{"level":3,"title":"分割线","slug":"分割线","link":"#分割线","children":[]}],"git":{"createdTime":1684701424000,"updatedTime":1685257336000,"contributors":[{"name":"涎涎","email":"yanbo0039@yeah.net","commits":3}]},"readingTime":{"minutes":1.31,"words":394},"filePathRelative":"zh/programBlog/ServerSideLanguage/Java/19-Java-编写应用程序从命令行传入两个整型XXX要求程序中捕获NumberFormatException异常和ArithmeticException.md","localizedDate":"2019年6月16日","excerpt":"<!-- more -->\\n<h1> Java-编写应用程序从命令行传入两个整型XXX要求程序中捕获NumberFormatException异常和ArithmeticException</h1>\\n<p>编写应用程序，从命令行传入两个整型数作为除数和被除数。要求程序中捕获NumberFormatException 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>\\nimport java.util.Scanner;\\n\\npublic class TryError {\\n\\n\\t/*\\n\\t * 1、编写应用程序，从命令行传入两个整型数作为除数和被除数。 要求程序中捕获NumberFormatException\\n\\t * 异常和ArithmeticException 异常，而且无论在哪种情况下，“总是被执行”这句话都会在控制台输出。\\n\\t */\\n\\tpublic TryError() {\\n\\t}\\n\\n\\tpublic static void main(String[] args) {\\n\\n\\t\\tScanner scanner = new Scanner(System.in);\\n\\n\\t\\tSystem.out.println(\\"please enter the first Number\\");\\n\\n\\t\\tString string1 = scanner.next();\\n\\n\\t\\tSystem.out.println(\\"please enter the second Number\\");\\n\\n\\t\\tString string2 = scanner.next();\\n\\n\\t\\tint num1, num2;\\n\\n\\t\\ttry {\\n\\t\\t\\tnum1 = Integer.parseInt(string1);\\n\\t\\t\\tnum2 = Integer.parseInt(string2);\\n\\t\\t\\tSystem.out.println(num1 / num2);\\n\\t\\t} catch (NumberFormatException | ArithmeticException e) {\\n\\t\\t\\te.printStackTrace();\\n\\t\\t} finally {\\n\\t\\t\\tSystem.out.println(\\"alaways doing ....\\");\\n\\t\\t}\\n\\t}\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};