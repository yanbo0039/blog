import{_ as e,X as r,Y as n,a1 as i,a0 as a}from"./framework-68dd73a2.js";const s={},t=a(`<h1 id="java-冒泡排序" tabindex="-1"><a class="header-anchor" href="#java-冒泡排序" aria-hidden="true">#</a> Java 冒泡排序</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int[] sortArray = {8,9,2,5,7,3};
	for (int i = 0; i &lt; sortArray.length - 1; i++) {
        for (int j = 0; j &lt; sortArray.length - 1 - i; j++) {
            if(sortArray[j] &gt; sortArray[j + 1]) {
                int temp = sortArray[j];
                sortArray[j] = sortArray[j + 1];
                sortArray[j + 1] = temp;
            }
        }
    }
System.out.println(Arrays.toString(sortArray));
结果：[2, 3, 5, 7, 8, 9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,6);function d(l,c){return r(),n("div",null,[i(" more "),t])}const v=e(s,[["render",d],["__file","index.html.vue"]]);export{v as default};
