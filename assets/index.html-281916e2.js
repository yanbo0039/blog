import{_ as i,X as n,Y as e,a1 as t,a0 as l}from"./framework-68dd73a2.js";const s={},d=l(`<h1 id="java初级测试题五-方法定义及调用-4-4" tabindex="-1"><a class="header-anchor" href="#java初级测试题五-方法定义及调用-4-4" aria-hidden="true">#</a> Java初级测试题五-方法定义及调用(4-4)</h1><ol><li>编写一个方法，求整数n的阶乘，例如5的阶乘是1<em>2</em>3<em>4</em>5。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 1. 编写一个方法，求整数n的阶乘，例如5的阶乘是1*2*3*4*5。
	 * 
	 */
	public static void factorial(int n) {
		if(n &gt; 1) {
			int num = 1;
			for(int i = 1;i &lt; n + 1;i++) {
				num *= i;
			}
			System.out.println(&quot;数字  &quot; + n +&quot;的阶乘是： &quot;+num);
		}else {
			System.out.println(&quot;请输入一个大于1的数字&quot;);
		}
	}
	public static void main(String[] args) {
		factorial(6);//1
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>编写一个方法，判断该年份是平年还是闰年。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 2. 编写一个方法，判断该年份是平年还是闰年。
	 * 
	 */
	public static void isLeapYear(int year) {
	    if((((year % 100) != 0) &amp;&amp; (year % 4 == 0)) ||
                ((year % 100 == 0) &amp;&amp; (year % 400 == 0))) {
            System.out.println(year + &quot;年是闰年&quot;);
        }else {
            System.out.println(year + &quot;年不是闰年&quot;);
        }
	}
	public static void main(String[] args) {
		isLeapYear(0);//2
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>编写一个方法，输出大于200的最小的质数。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/*
* 3. 编写一个方法，输出大于200的最小的质数。
*https://blog.csdn.net/afei__/article/details/80638460
*  概念：
*      质数又称素数。一个大于1的自然数，除了1和它自身外，
*      不能被其他自然数整除的数叫做质数；否则称为合数。
*   0和1既不是质数也不是合数，最小的质数是2
*/
public static void primeNumber() {//大于200的最小的质数是： 211
	for (int i = 200;; i++) {
		boolean temp = true;//定义一个初始变量
		for (int j = 2; j &lt; i; j++) {
			if(i%j == 0) {//能够被整除是合数，则跳过此数
				System.out.println(i + &quot; 是合数能够被数值  &quot;+j + &quot;  整除&quot;);
				temp = false;
				continue;
			}
		}
		if(temp) {
			System.out.println(&quot;大于200的最小的质数是： &quot;+i);
			break;
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>写一个方法，功能：定义一个一维的int 数组，长度任意,然后将它们按从小到大的顺序输出（使用冒泡排序）（知识点：方法的定义和访问）。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 4. 写一个方法，功能：定义一个一维的int 数组，长度任意,
	 * 然后将它们按从小到大的顺序输出（使用冒泡排序）
	 * （知识点：方法的定义和访问）。
	 * 
	 */
	public static void bubbleSort(int[] arr) {
		for(int i = 0;i &lt; arr.length -1;i++) {
			for(int j = 0;j &lt; arr.length - 1 -i;j++) {
				if(arr[j] &gt; arr[j+1]) {
					int temp = arr[j];
					arr[j] = arr[j +1];
					arr[j+1] = temp;
				}
			}
		}
		System.out.println(java.util.Arrays.toString(arr));
	}
	
	public static void main(String[] args) {
		int[] arr = {5,7,9,2};//4
		bubbleSort(arr);//4
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>`,13);function a(r,v){return n(),e("div",null,[t(" more "),d])}const c=i(s,[["render",a],["__file","index.html.vue"]]);export{c as default};
