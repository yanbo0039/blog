import{_ as n,X as i,Y as e,a1 as t,a0 as a}from"./framework-68dd73a2.js";const s={},d=a(`<h1 id="java求整数num的阶乘" tabindex="-1"><a class="header-anchor" href="#java求整数num的阶乘" aria-hidden="true">#</a> Java求整数num的阶乘</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java求整数num的阶乘</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,8);function l(r,v){return i(),e("div",null,[t(" more "),d])}const u=n(s,[["render",l],["__file","java11.html.vue"]]);export{u as default};
