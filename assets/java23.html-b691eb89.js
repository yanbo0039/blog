import{_ as i,X as n,Y as e,a1 as s,a0 as l}from"./framework-68dd73a2.js";const t={},a=l(`<h1 id="java初级测试题二-变量和运算符-4-4" tabindex="-1"><a class="header-anchor" href="#java初级测试题二-变量和运算符-4-4" aria-hidden="true">#</a> Java初级测试题二-变量和运算符(4-4)</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li>已知a,b均是整型变量，写出将a,b两个变量中的值互换的程序。（知识点：变量和运算符综合应用）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {

	public Task() {
		
	}
	/*
	 * 1、已知a,b均是整型变量，写出将a,b两个变量中的值互换的程序。
	 * （知识点：变量和运算符综合应用)
	 */	
	public static void variableInterchange(int a,int b) {
		int temp;
		//进行数据交换
		temp = a;
		a = b;
		b = temp;
		System.out.println(&quot;交换后的a值为：&quot; + a + &quot;交换后的b值为： &quot; + b);
	}
	//第二种方法
	public static void variableInterchange2(int a,int b) {
		a = a + b;//用a获得总和
		b = a - b;//将旧的a的值赋值给b
		a = a - b;//将旧的b的值赋值给a
		System.out.println(&quot;交换后a的值为：&quot; + a + &quot; 交换后的b值为：&quot; + b);
	}
	public static void main(String[] args) {
  		variableInterchange(5,7);
        variableInterchange2(15,5);
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>给定一个0～1000的整数，求各位数的和，例如345的结果是3+4+5＝12注：分解数字既可以先除后模也可以先模后除（知识点：变量和运算符综合应用）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.util.Random;

public class Task {

	public Task() {
		
	}
	/*
	 * 2、给定一个0～1000的整数，求各位数的和，例如345的结果是3+4+5＝12注：
	 * 分解数字既可以先除后模也可以先模后除（知识点：变量和运算符综合应用）
	 * 
	 */
	public static void sumNumevery() {
		Random random = new Random();
		int num = random.nextInt(1001),
				num_k = num / 1000,
				num_b = (num % 1000)/100,
				num_s = (num % 100)/10,
				num_g = num % 10;
		System.out.println(num +&quot;  各个位数的和是 ：&quot; 
				+(num_k + num_b + num_s + num_g));
	}
	public static void main(String[] args) {
		sumNumevery();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>华氏温度和摄氏温度互相转换，从华氏度变成摄氏度你只要减去32，乘以5再除以9就行了，将摄氏度转成华氏度，直接乘以9，除以5，再加上32即行。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {

	public Task() {
		
	}
	/*
	 * 3、华氏温度和摄氏温度互相转换，从华氏度变成摄氏度你只要减去32，
	 * 乘以5再除以9就行了，将摄氏度转成华氏度，直接乘以9，除以5，再加上32即行。
	 * 
	 */
	public static void temperatureInterchange(float num)
	{
		float cTemp = (num -32) * 5 / 9,
			fTemp = num * 9 / 5 + 32;
		System.out.println(num +&quot;如果是华氏度那么转成摄氏度是: &quot; + cTemp);
		System.out.println(num +&quot;如果是摄氏度那么转成华氏度是: &quot; + fTemp);
	}
	public static void main(String[] args) {
 		temperatureInterchange(50);
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>给定一个任意的大写字母A~Z，转换为小写字母。 （知识点：变量和运算符）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {

	public Task() {
		
	}
	/*
	 * 4、给定一个任意的大写字母A~Z，
	 *  转换为小写字母。 （知识点：变量和运算符）
	 */
	public static void toLowerCase(char word)
	{
		System.out.println(word + &quot; 小写为：&quot; + (char)(word + 32));
	}
	public static void main(String[] args) {
		toLowerCase(&#39;B&#39;);

	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container info"><p class="hint-container-title">相关信息</p><p><strong>以上就是我关于 <em>Java初级测试题二-变量和运算符(4-4)</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,14);function d(v,r){return n(),e("div",null,[s(" more "),a])}const c=i(t,[["render",d],["__file","java23.html.vue"]]);export{c as default};
