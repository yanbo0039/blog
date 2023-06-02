import{_ as i,X as n,Y as t,a1 as e,a0 as s}from"./framework-68dd73a2.js";const l="/blog/assets/Java_25_1.png",d={},a=s(`<h1 id="java初级测试题四-数组-9-9" tabindex="-1"><a class="header-anchor" href="#java初级测试题四-数组-9-9" aria-hidden="true">#</a> Java初级测试题四- 数组(9-9)</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ol><li>编写一个简单程序，要求数组长度为5，分别赋值10，20，30，40，50，在控制台输出该数组的值。（知识点：数组定义和创建、一维数组初始化）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 1. 编写一个简单程序，要求数组长度为5
	 * ，分别赋值10，20，30，40，50，在控制台输出该数组的值。
	 * （知识点：数组定义和创建、一维数组初始化）
	 * 
	 */
	public static void crearArray() {
		int[] myList = new int[5];
		for(int i = 0;i &lt; 5;i++) {
			myList[i] = (i + 1) * 10;
		}
		System.out.println(java.util.Arrays.toString(myList));
	}
	public static void main(String[] args) {
		crearArray();//1
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>将一个字符数组的值（neusofteducation）拷贝到另一个字符数组中。（知识点：数组复制）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 2. 将一个字符数组的值（neusofteducation）
	 * 拷贝到另一个字符数组中。（知识点：数组复制）
	 */
	public static void copyArray()
	{
		int[] neusofteducation = new int[]{6,9,2,0,1};
		int[] copyedneusofteducation = new int[5];
		System.arraycopy(neusofteducation,0,
               copyedneusofteducation,0,5);
		System.out.println(&quot;neusofteducation: &quot; + 
                java.util.Arrays.toString(neusofteducation));
		System.out.println(&quot;copyedneusofteducation: &quot; + 
               java.util.Arrays.toString(copyedneusofteducation));
	}
	public static void main(String[] args) {
		copyArray();//2
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>给定一个有9个整数（1,6,2,3,9,4,5,7,8）的数组，先排序，然后输出排序后的数组的值。（知识点：Arrays.sort排序、冒泡排序）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 3. 给定一个有9个整数（1,6,2,3,9,4,5,7,8）的数组，先排序，
	 * 然后输出排序后的数组的值。（知识点：Arrays.sort排序、冒泡排序）
	 */
	public static void sortArray()
	{
		int[] myList = new int[] {1,6,2,3,9,4,5,7,8};
		java.util.Arrays.sort(myList);
		System.out.println(java.util.Arrays.toString(myList));
	}
	public static void bubbleSortArray()
	{
		int[] myList = new int[] {1,6,2,3,9,4,5,7,8};
		for(int i = 0;i &lt; myList.length -1; i++) {
			for(int j = 0;j &lt; myList.length - 1 -i;j++) {
				if(myList[j] &gt; myList[j + 1]) {
					int temp = myList[j];
					myList[j] = myList[j +1];
					myList[j + 1] = temp;
				}
			}
		}
		System.out.println(java.util.Arrays.toString(myList));
	}
	public static void main(String[] args) {
		sortArray();//3
		bubbleSortArray();//3

	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>有2个多维数组分别是</li></ol><table><thead><tr><th>A</th><th>B</th></tr></thead><tbody><tr><td>2 3 4</td><td>1 5 2 8</td></tr><tr><td>4 6 8</td><td>5 9 10 3</td></tr><tr><td></td><td>2 7 -5 -18</td></tr><tr><td>按照如下方式进行运算。生成一个2行4列的数组。此数组的第1行1列是2<em>1+3</em>5+4<em>2第1行2列是2</em>5+3<em>9+4</em>7 第2行1列是4<em>1+6</em>5+8*2 依次类推。（知识点：多维数组定义和创建、数组遍历、数组元素访问）</td><td></td></tr></tbody></table><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static void arraySum() {
	int[][] arr1 = {{2,3,4},{4,6,8}};
	int[][] arr2 = {{1,5,2,8},{5,9,10,3},{2,7,-5,-18}};
	
	for (int i = 0; i &lt; arr1.length; i++) {
		for (int j = 0; j &lt; arr2[0].length; j++) {
			int sum = 0;
			String tempStr = &quot;&quot;;
			for (int j2 = 0; j2 &lt; arr2.length; j2++) {
				sum += arr1[i][j2] * arr2[j2][j];
				if(j2 == arr2.length-1) {
					tempStr += arr1[i][j2] + &quot;*&quot; + arr2[j2][j];
				}else {
					tempStr += arr1[i][j2] + &quot;*&quot; + arr2[j2][j] + &quot;+&quot;;
				}
			}
			System.out.print(tempStr +&quot;=&quot;+sum+&quot; &quot;);
		
		}
		System.out.println();
	}
}
//2*1+3*5+4*2=25 2*5+3*9+4*7=65 2*2+3*10+4*-5=14 2*8+3*3+4*-18=-47 
//4*1+6*5+8*2=50 4*5+6*9+8*7=130 4*2+6*10+8*-5=28 4*8+6*3+8*-18=-94 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>输出一个double型二维数组（长度分别为5、4，值自己设定）的值。（知识点：数组定义和创建、多维数组初始化、数组遍历）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 5. 输出一个double型二维数组（长度分别为5、4，值自己设定）的值。
	 * （知识点：数组定义和创建、多维数组初始化、数组遍历）
	 */
	public static void creatTwoDimensionalArray()
	{
		double myList[][] = new double[5][4];
		//为这个二维数组赋值
		for(int i = 0 ;i &lt; 5;i++) {
			for(int j = 0;j &lt; 4;j++)
			{
				myList[i][j] = Integer.parseInt(i + &quot;&quot; +j);
				System.out.print(myList[i][j] +&quot; &quot;);
			}
			System.out.println();
		}
		//二维或多维数组是不能像一维数组一样通过toString给打印输出的。。
		System.out.println(java.util.Arrays.toString(myList));
	}
	public static void main(String[] args) {
		creatTwoDimensionalArray();//5

	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>在一个有8个整数（18，25，7，36，13，2，89，63）的数组中找出其中最大的数及其下标。（知识点：数组遍历、数组元素访问）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 6. 在一个有8个整数（18，25，7，36，13，2，89，63）
	 * 的数组中找出其中最大的数及其下标。
	 * （知识点：数组遍历、数组元素访问）
	 */
	public static void maxNumAndIndex() {
		int[] myList = new int[] {18,25,7,36,13,2,89,63};
		int maxNum = 0,
			maxNumIndex = 0;
		for(int i = 0;i &lt; myList.length;i++) {
			if(maxNum &lt; myList[i]) {
				maxNum = myList[i];
				maxNumIndex = i;
			}
		}
		System.out.println(&quot;数组中最大数是：&quot;+maxNum +
         &quot; 其在数组中的下标是：&quot; + maxNumIndex);
	}
	public static void main(String[] args) {
		maxNumAndIndex();
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>将一个数组中的元素逆序存放（知识点：数组遍历、数组元素访问）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 7. 将一个数组中的元素逆序存放（知识点：数组遍历、数组元素访问）
	 */
	public static void outPutEleByDesc() {
		java.util.Scanner scanner = new java.util.Scanner(System.in);
		int myList[] = new int[20];
		System.out.println(&quot;请输入多个正整数并以空格隔开(输入-1表示结束)&quot;);
		int index = 0;
		do {
			myList[index] = scanner.nextInt();
			index++;
		}while(myList[index - 1] != -1);
		System.out.println(&quot;你输入的数组为：&quot;);
		for(int i = 0;i &lt; index -1;i++) {
			System.out.print(myList[i] +&quot; &quot;);
		}
		System.out.println();
		System.out.println(&quot;你输入的数组逆序输出为：&quot;);
		for(int i = index - 2;i &gt;= 0;i--) {
			System.out.print(myList[i] + &quot; &quot;);
		}
	}
	public static void main(String[] args) {
		outPutEleByDesc();//7
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>将一个数组中的重复元素保留一个其他的清零。（知识点：数组遍历、数组元素访问）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Task {
	/*
	 * 8. 将一个数组中的重复元素保留一个其他的清零。
	 * （知识点：数组遍历、数组元素访问）
	 * 此题的限定条件是该数组中不能有元素为0的元素。。这是前提条件
	 */
	public static void toRpeatEle() {
		int[] myList = new int[] {18,25,7,18,36,13,2,89,63};
		for(int i = 0;i &lt; myList.length -1; i++) {
			for(int j = i + 1;j &lt; myList.length;j++) {
				System.out.println(myList[i] + &quot;   &quot; + myList[j]);
				if(myList[i] == myList[j]) {
					myList[i] = 0;
				}
			}
		}
		System.out.println(java.util.Arrays.toString(myList));
	}
	
	public static void main(String[] args) {
		toRpeatEle();//8
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li>给定一维数组{ -10，2，3，246，-100，0，5} ，计算出数组中的平均值、最大值、最小值。（知识点：数组遍历、数组元素访问）</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	public static void calcArray() {
		int[] arr = {-10,2,3,246,-100,0,5};
		Arrays.sort(arr);
		System.out.println(&quot;数组arr中的最大值是： &quot;+arr[arr.length-1]);
		System.out.println(&quot;数组arr中的最小值是： &quot;+arr[0]);
		double sum = 0.0;
		for (int i = 0; i &lt; arr.length; i++) {
			sum += arr[i];
		}
		System.out.println(sum);
		System.out.println(&quot;数组arr的平均值是： &quot;+sum/arr.length);
		
//		 int[] arr ;
//	        arr = new int[]{-10,2,3,246,-100,0,5};
//
//	        int sum = 0;
//	        double avg;
//	        int max = 0;
//	        int min = 0;
//
//	        for(int i = 0 ;i&lt;arr.length - 1;i++){
//	            sum = sum +arr[i];
//	            if(arr[i]&gt;max){
//	                max = arr[i];
//	            }if(arr[i]&lt;min){
//	                min = arr[i];
//	            }
//	        }
//	        avg = sum/arr.length;
//	        System.out.println(&quot;数组中最大的数为：&quot;+max+&quot;\\n数组中最小的数为：&quot;+min+&quot;\\n数组中平均数为：&quot;+avg);
	}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Java初级测试题四- 数组(9-9)</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,26);function r(v,u){return n(),t("div",null,[e(" more "),a])}const c=i(d,[["render",r],["__file","java25.html.vue"]]);export{c as default};
