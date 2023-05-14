import{_ as s,X as l,Y as a,a1 as d,Z as i,$ as n,a2 as e,a0 as r,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/Java_189_1.png",u="/blog/assets/Java_189_2.png",m="/blog/assets/Java_189_3.png",b="/blog/assets/Java_189_4.png",o="/blog/assets/Java_189_5.png",g="/blog/assets/Java_189_6.png",p="/blog/assets/Java_189_7.png",y="/blog/assets/Java_189_8.png",_="/blog/assets/Java_189_9.png",f="/blog/assets/Java_189_10.png",h="/blog/assets/Java_189_11.png",A="/blog/assets/Java_189_12.png",S="/blog/assets/Java_189_13.png",q="/blog/assets/Java_189_14.png",x="/blog/assets/Java_189_15.png",w="/blog/assets/Java_189_16.png",J="/blog/assets/Java_189_17.png",j="/blog/assets/Java_189_18.png",z="/blog/assets/Java_189_19.png",k="/blog/assets/Java_189_20.png",N={},E={id:"_189-java数组-md",tabindex:"-1"},R=i("a",{class:"header-anchor",href:"#_189-java数组-md","aria-hidden":"true"},"#",-1),T={href:"http://xn--189-Java-233qi04r.md",target:"_blank",rel:"noopener noreferrer"},D=r('<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+J+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+j+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><ul><li>一维数组</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04;
/**
 * &lt;p&gt;Title: _01YiWeiArray&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 *    一维数组：一种引用类型的数据
 	
 		特点：1.指定数据类型    2.指定长度
 		
 		声明：
 			数据类型      数组名[];
 			数据类型[] 数组名;
 			
 		创建：
 			数组名 = new 数据类型[N];
 		
 		声明的同时创建：
 			数据类型    数组名[] = new 数据类型[N];
 		
 		声明的同时完成初始化：
 		            数据类型    数组名[] = new 数据类型[]{元素1，元素2，元素3.....};
 		            数据类型    数组名[] = {元素1，元素2，元素3.....};
 		            
 		赋值：
 			数组名[索引] = 值;
 		
 		取值：
 			数组名[索引];
 			
 		属性：
 			获取数组的元素个数（长度）：length
 		
 		遍历：
 			for 或者 forEach
 		
 		----------------------------------------------------------------------------------
 		
 		数组下标越界异常  java.lang.ArrayIndexOutOfBoundsException
 		
 		----------------------------------------------------------------------------------
 		
 		stack(栈)：由系统分配，大小限制，先进后出
 		                             一般用于保存基本数据类型的局部变量 与 引用类型的地址值
 		                             
 		heap(堆)：由程序员控制，当使用new关键字时，开辟heap(堆)内存空间，用于保存引用对象的元素的值，先进先出
 		                            一般用于保存引用对象的属性值 或 数组的元素值
 			     
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class _01YiWeiArray {
	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 * &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
		//1.声明
				int[] intArray = null;                     //开辟stack(栈)内存空间，用于保存引用对象的地址值
				String strArray[];
				
				//System.out.println(intArray.toString());//null 不能使用对象中的任何方法，此时地址为null，空指针异常  java.lang.NullPointerException
				//2.创建
				intArray = new int[5];				    //使用new关键字时，开辟heap(堆)内存空间，用于保存引用对象的元素的值
				System.out.println(intArray.toString());//[I@689d6d87 
				
				//3.声明的同时创建
				int[] intArray2 = new int[4];           //动态初始化：使用new创建数组后，所有元素其实已经被初始化，元素都是默认值
				
				//4.声明的同时完成初始化
				int[] intArray3 = new int[]{1,2,3,4,5};
				String[] strArray2 = {&quot;a&quot;,&quot;b&quot;,&quot;c&quot;,&quot;d&quot;}; //静态初始化：不使用new，而是在声明数组的同时就完成创建和初始化工作
				
				//5.赋值
				int[] intArray4 = new int[4]; 
				intArray4[0] = 11;
				intArray4[1] = 22;
				intArray4[2] = 33;
				intArray4[3] = 44;
				
				//6.取值
				System.out.println(intArray4[0]);
				System.out.println(intArray4[1]);
				System.out.println(intArray4[2]);
				System.out.println(intArray4[3]);
				//System.out.println(intArray4[4]);//数组下标越界异常  java.lang.ArrayIndexOutOfBoundsException: 4，因为数组的长度为4，下标为0-3之间
				
				//7.属性
				System.out.println(intArray4.length);//4
				
				//8.遍历
				//使用for循环遍历
				for (int i = 0; i &lt; intArray4.length; i++) {
					
					int element = intArray4[i];
					
					System.out.println(&quot;数组元素：&quot; + element);
				}
				
				//使用forEach遍历
				for (int element : intArray4) {
					System.out.println(&quot;foreach的数组元素：&quot; + element);
				}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>二维数组</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04;
/**
 * &lt;p&gt;Title: _02ErWeiArray&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class _02ErWeiArray {
	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
 *    二维数组：在数组中保存数组元素
		
			声明：
				数组类型[][] 数组名;
				数组类型    数组名[][];
				数组类型[] 数组名[];
			
			创建：
				数组名  = new 数组类型[R][C];
				数组名  = new 数组类型[R][];
				数组名  = new 数组类型[][C];----错误
				
			
			声明的同时创建：
				数组类型[][] 数组名 = new 数组类型[R][C];
				数组类型[][] 数组名 = new 数组类型[R][];
			
			声明的同时完成初始化：
				数组类型[][] 数组名 = new 数组类型[][]{
												{元素1，元素2，元素3},	
												{元素4，元素5，元素6},	
												{元素7，元素8，元素9},	
											  };
											  
				数组类型[][] 数组名 = {
									{元素1},	
									{元素4，元素5，元素6},	
									{元素7，元素8},	
								  };
	 * &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
		//1.声明
		int[][] intArray;
		String  strArray[][];
		double[] doubleArray[];
		
		//2.创建
		intArray = new int[3][3];  //三行三列
		strArray = new String[3][];//三行N列
		//doubleArray = new double[][6];//三行N列 --------错误
		
		//3.声明的同时创建
		int[][] intArray2 = new int[4][3];//{  {0,0,0},
										  //   {0,0,0},
										  //   {0,0,0},
										  //   {0,0,0}
										  //}
		//4.声明的同时完成初始化
		int[][] intArray3 = new int[][]{
											{1,2,3},
											{4,5,6},
											{7,8,9}
									   };
									  
	    int[][] intArray4 =  {
								{11},
								{44,55,66},
								{77,88}
						     };
	   
	    //5.赋值
	    int[][] intArray5 = new int[3][4];
	    //第一行
	    int[] oneRow = new int[]{1,2,3,4};
	    intArray5[0] = oneRow;
	    //第二行
	    int[] twoRow = new int[]{5,6,7,8};
	    intArray5[1] = twoRow;
	    //第三行
	    int[] threeRow = new int[]{9,10,11,12};
	    intArray5[2] = threeRow;
	    
	    int[][] intArray6 = new int[3][4];
	    //第一行
	    intArray6[0][0] = 1;
	    intArray6[0][1] = 2;
	    intArray6[0][2] = 3;
	    intArray6[0][3] = 4;
	    //第二行
	    intArray6[1][0] = 5;
	    intArray6[1][1] = 6;
	    intArray6[1][2] = 7;
	    intArray6[1][3] = 8;
	    //第三行
	    intArray6[2][0] = 9;
	    intArray6[2][1] = 10;
	    intArray6[2][2] = 11;
	    intArray6[2][3] = 12;
	    
	    //6.取值
	    System.out.println(intArray6[2][3]);//12
	    
	    //7.遍历
	    //方式一
	    for (int i = 0; i &lt; intArray6.length; i++) {
	    	//每一行的元素
			int[] row = intArray6[i];//{1,2,3,4}
			//遍历获取每一行的每一列值
			for (int j = 0; j &lt; row.length; j++) {
				int column = row[j];
				System.out.println(&quot;第&quot; + i + &quot;行第 &quot; + j + &quot;列的值：&quot; + column);
			}
		}
	    
	    //方式二
	    for (int i = 0; i &lt; intArray6.length; i++) {
			//遍历获取每一行的每一列值
			for (int j = 0; j &lt; intArray6[i].length; j++) {
				
				int column = intArray6[i][j];
				
				System.out.println(&quot;第&quot; + i + &quot;行第 &quot; + j + &quot;列的值：&quot; + column);
			}
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数组的复制与排序</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04;

import java.util.Arrays;

/**
 * &lt;p&gt;Title: _03ArrayCopyAndSort&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class _03ArrayCopyAndSort {
	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 * &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
		/**
		 * 数组的复制:System.arraycopy(src, 0, dest, 0, src.length)
		 * 	src:   源数组（source）
		 *  srcPos:从源数组开始复制的下标（source position）
		 *  
		 *  dest:  目标数组（destination）
		 *  destPos：从指定的下标开始放置复制的元素（destination position）
		 *  
		 *  length:复制的元素的个数
		 *  
		 *  
		 *  Arrays.toString(数组)：将数组按指定格式的字符串输出所有的元素
		 *  Arrays.sort(数组)：将数组根据升序排序
		 */
		int[] src = new int[]{1,2,3,4,5};
		int[] dest = new int[]{6,7,8,9,10,11,12,13,14};
		
		System.out.println(&quot;复制前src:&quot; + Arrays.toString(src));  //[1, 2, 3, 4, 5]
		System.out.println(&quot;复制前dest:&quot; + Arrays.toString(dest));//[6, 7, 8, 9, 10, 11, 12, 13, 14]
		
		//System.arraycopy(src, 0, dest, 0, src.length);
		
		System.out.println(&quot;复制后src:&quot; + Arrays.toString(src));  //[1, 2, 3, 4, 5]
		System.out.println(&quot;复制后dest:&quot; + Arrays.toString(dest));//[1, 2, 3, 4, 5, 11, 12, 13, 14]
		
		/**
		 * 合并两个数组
		 */
		//0.定义新的数组，长度为src的长度+dest的长度
		int[] merge = new int[src.length + dest.length];
		
		//1.复制src数组
		System.arraycopy(src, 0, merge, 0, src.length);
		System.out.println(&quot;复制src之后的merge数组：&quot; + Arrays.toString(merge));//[1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		
		//2.复制dest数组
		System.arraycopy(dest, 0, merge, src.length, dest.length);
		System.out.println(&quot;复制dest之后的merge数组：&quot; + Arrays.toString(merge));//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
		
		/**
		 * Arrays.sort(array) ： 数组的排序
		 */
		int[] array = new int[]{46,65,1,88,12,6,100};
		
		System.out.println(&quot;排序前：&quot; + Arrays.toString(array));//[46, 65, 1, 88, 12, 6, 100]
		Arrays.sort(array);//排序,默认升序排序
		System.out.println(&quot;排序后：&quot; + Arrays.toString(array));//[1, 6, 12, 46, 65, 88, 100]
		
		//降序
		for (int i = array.length-1; i &gt;= 0; i--) {
			System.out.print(array[i] + &quot;  \\t&quot;);
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>冒泡排序</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>package com.tencent.chapter04;

import java.util.Arrays;

/**
 * &lt;p&gt;Title: _04MaoPaoSort&lt;/p&gt;  
 * &lt;p&gt;
 *    Description: 
 * &lt;/p&gt;  
 * @author xianxian 
 * @date 2023年1月3日
 */
public class _04MaoPaoSort {
	/**
	 * &lt;p&gt;Title: main&lt;/p&gt;  
	 * &lt;p&gt;
	 *    Description: 
	 * &lt;/p&gt;  
	 * @param args
	 */
	public static void main(String[] args) {
int[] array = new int[]{5,4,3,2,1};
		
		/*
		 * 总共N个数组，比较N-1轮
		 * 	
		 * 		第 1轮比较：[4, 3, 2, 1, 5] 比较4次
				第 2轮比较：[3, 2, 1, 4, 5] 比较3次
				第 3轮比较：[2, 1, 3, 4, 5] 比较2次
				第 4轮比较：[1, 2, 3, 4, 5] 比较1次

		 */
		//升序排序
		for(int i=1 ; i&lt; array.length;i++)
		{
			for(int j=0; j&lt;array.length-i;j++)
			{
				if(array[j] &gt; array[j+1])
				{
					int temp = array[j];
					array[j] = array[j+1];
					array[j+1] = temp;
				}
			}
			System.out.println(&quot;第 &quot; + i + &quot;轮比较：&quot; + Arrays.toString(array));
		}
		
		System.out.println(&quot;---------------------------------------&quot;);
		
		//降序排序
		for(int i = 1 ; i&lt; array.length;i++)
		{
			for(int j = 0; j&lt;array.length - i;j++)
			{
				if(array[j] &lt; array[j+1])
				{
					int temp = array[j];
					array[j] = array[j+1];
					array[j+1] = temp;
				}
			}
			System.out.println(&quot;第 &quot; + i + &quot;轮比较：&quot; + Arrays.toString(array));
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>以上就是我关于 <em>Java数组</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h4 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h4><hr><h4 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h4>`,35),C={href:"https://www.cnblogs.com/onepixel/articles/7674659.html",target:"_blank",rel:"noopener noreferrer"},B=i("hr",null,null,-1),I=i("p",null,"分割线",-1),P=i("hr",null,null,-1),V=i("p",null,[i("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function O(W,Y){const t=v("ExternalLinkIcon");return l(),a("div",null,[d(" more "),i("h1",E,[R,n(),i("a",T,[n("189-Java数组.md"),e(t)])]),D,i("ol",null,[i("li",null,[i("a",C,[n("十大经典排序算法"),e(t)])])]),B,I,P,V])}const M=s(N,[["render",O],["__file","189-Java数组.html.vue"]]);export{M as default};
