import{_ as e,X as n,Y as r,a1 as a,a0 as i}from"./framework-68dd73a2.js";const t={},s=i(`<h1 id="java-冒泡排序" tabindex="-1"><a class="header-anchor" href="#java-冒泡排序" aria-hidden="true">#</a> Java 冒泡排序</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int[] sortArray = {8,9,2,5,7,3};
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java 冒泡排序</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,7);function d(l,c){return n(),r("div",null,[a(" more "),s])}const v=e(t,[["render",d],["__file","java10.html.vue"]]);export{v as default};
