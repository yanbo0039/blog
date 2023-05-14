import{_ as n,X as i,Y as e,a1 as t,a0 as a}from"./framework-68dd73a2.js";const s={},d=a(`<h1 id="java求整数num的阶乘" tabindex="-1"><a class="header-anchor" href="#java求整数num的阶乘" aria-hidden="true">#</a> Java求整数num的阶乘</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	/**
	 * 方法一 递归
	 * @param num
	 * @return
	 */
	public static int query(int num) {
		if(num == 1) {
			return 1;
		}
		int factorial = num * query(num - 1);
		return factorial;
		
	}
    	public static void main(String[] args) {
		System.out.println(query(5));
	}//120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	/**
	 * 方法二循环
	 * @param num
	 * @return
	 */
	public static int query(int num) {
		int factorial = 1;
		for (int i = 1; i &lt;= num; i++) {
			factorial *= i;
		}
		return factorial;
		
	}
	public static void main(String[] args) {
		System.out.println(query(5));
	}//120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,7);function l(r,v){return i(),e("div",null,[t(" more "),d])}const c=n(s,[["render",l],["__file","11-Java求整数num的阶乘.html.vue"]]);export{c as default};
