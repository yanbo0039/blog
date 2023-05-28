import{_ as n,X as i,Y as e,a1 as t,a0 as l}from"./framework-68dd73a2.js";const s={},r=l(`<h1 id="java-编写一个方法比较两个字符串xxx会产生nullpointerexception异常xx编写一个程序捕获该异常。" tabindex="-1"><a class="header-anchor" href="#java-编写一个方法比较两个字符串xxx会产生nullpointerexception异常xx编写一个程序捕获该异常。" aria-hidden="true">#</a> Java-编写一个方法比较两个字符串XXX会产生NullPointerException异常XX编写一个程序捕获该异常。</h1><p>编写一个方法，比较两个字符串。假如其中一个字符串为空，会产生NullPointerException异常，在方法声明中通告该异常，并在适当时候触发异常，然后编写一个程序捕获该异常。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class NullPointerException extends Exception{

	public NullPointerException() {
		
	}
	
	public static void testString(String string1,String string2) {
		if(string1 == null || string2 == null)
		{
			try {
				throw new NullPointerException();
			} catch (NullPointerException e) {
				e.printStackTrace();
			}
		}
	}

	public static void main(String[] args) {
		String string1 = &quot;aaa&quot;;
		String string2 = null;
		testString(string1, string2);
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,7);function a(d,c){return i(),e("div",null,[t(" more "),r])}const u=n(s,[["render",a],["__file","index.html.vue"]]);export{u as default};
