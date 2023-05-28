import{_ as s,X as t,Y as d,a1 as v,Z as i,$ as n,a2 as l,a0 as a,F as r}from"./framework-68dd73a2.js";const u={},c={id:"_90-java方法的定义及调用-md",tabindex:"-1"},m=i("a",{class:"header-anchor",href:"#_90-java方法的定义及调用-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--90-Java-0b4k722bn5skoz93svxydhes95h.md",target:"_blank",rel:"noopener noreferrer"},o=a(`<h4 id="方法的定义" tabindex="-1"><a class="header-anchor" href="#方法的定义" aria-hidden="true">#</a> 方法的定义</h4><ul><li><p>什么是方法</p><ul><li>方法是完成某个功能的一组语句，通常将常用的功能写成一个方法</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[访问控制符] [修饰符] 返回值类型 方法名(参数类型 形式参数,参数类型 形式参数,…)
{
    方法体
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>修饰符：</strong> public 、static 被称为修饰符（后续会详细讲解它们）；</p></li><li><p><strong>返回值类型：</strong> 用来说明该方法运算结果的类型。如果返回其他类型，编译就可能出错；</p></li><li><p><strong>方法名：</strong> 它作为调用时引用方法的标识；</p></li><li><p><strong>参数列表：</strong> 方法的参数个数可以是0个到多个，每个参数前面要声明参数的数据类型；每个参数要用逗号分开。也可以一个参数都没有。</p></li><li><p><strong>方法体：</strong> 它是一个语句块，执行特定的功能操作。对于有返回值类型的方法，方法体当中最后一个语句是return关键字，它的作用是把方法的执行（运算）结果返回到方法外部。</p></li><li><p><strong>return 表达式：</strong> 这里，进一步分析，return后面的表达式就是方法的返回值。需要注意表达式的类型，必须与方法头中声明的“返回类型”相匹配。</p></li><li><p>形式参数：在方法被调用时用于接受外部传入的变量</p></li><li><p>参数类型：就是该形式参数的数据类型</p></li><li><p>返回值：方法在执行完毕后返回给调用它的程序的数据</p></li><li><p>返回值类型：方法要返回的结果的数据类型</p></li></ul><h4 id="方法的分类" tabindex="-1"><a class="header-anchor" href="#方法的分类" aria-hidden="true">#</a> 方法的分类</h4><ul><li><p>根据参数个数：</p><ul><li>无参方法</li><li>有参方法</li></ul></li><li><p>根据返回值类型:</p><ul><li><p>有返回值的方法：</p><ul><li><p>基本数据类型</p></li><li><p>引用数据类型</p></li></ul></li><li><p>无返回值的方法</p><ul><li>void</li></ul></li></ul></li></ul><p>对于无返回值类型的方法，它不向本方法外部返回任何值。定义这样的方法时，声明方法返回类型的位置不能省略不写，而应该用关键字void来代替，即 “空”的意思。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class FunctionDemo {
       public int absolut(int x){
	if(x&gt;=0){
	        return x;
	}
	else{
	        return -x;
	}
       }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>该方法体有两个return 语句，但是只有一个return语句能被执行。</p></li><li><p>方法的返回类型可以是java中的任何数据类型：基本数据类型（4种整型、2种浮点型、字符型、布尔型共8种） 和引用数据类型（数组、类、接口）。</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test方法的定义 {

	public static void main(String[] args) {
		// 在main方法中定义方法的做法是错误的
		/*//定义一个方法
		public static int getCount()
		{
			
		}
		*/
		
		
	}
	
	//只要方法定义时声明了返回数据，那么方法体中return语句一定要得到执行的机会
	public int getFirst(int[] arr)
	{
		
		
		
		if(arr[0]&gt;0)
		{
			return arr[0];
		}else
		{
			return 0;
		}
	}
	
	
	/*
	 * 方法的定义
	 * 1.有返回值的方法：      访问修饰符    【static】 数据类型  方法名(参数列表...){  //方法体  }
	 * 2.没有返回值的方法：  访问修饰符    【static】 void  方法名(参数列表...){  //方法体  }
	 * 3.不需要参数：             访问修饰符    【static】 数据类型  方法名(){  //方法体  }
	 */
	
	public static void printName(String name)
	{
		System.out.println(name);
	}
	

	/*
	 * 需求：算出两个整数的和，并返回
	 */
	public static int sum(int firstNumber, int secondNumber) {
		// 方法体
		int result = firstNumber + secondNumber;

		return result;
		// return firstNumber+secondNumber;
	}

	/*
	 * 需求：接收一个整数，判断它是不是质数，并返回结果boolean类型，true表示是，false表示不是
	 */
	public static boolean isPrime(int source) {
		// 套路：如果方法有返回值，那么先在方法体的第一行声明该返回值
		boolean result = true;
		
		/*
		 * 6:  1,6   2,3
		 * 
		 * 3:  1,3
		 * 
		 * 100:   2-99
		 */
		//思路：拿着这个数从2开始除，一直除到比source小1，不管除到谁，只要余数为0，那么这个数就不是质数
		for (int i = 2; i &lt; source; i++) {
			if(source%i==0)
			{
				result=false;
				break;//循环不用继续，结束
			}
		}
		return result;
	}

	public boolean isPrime2(int source) {
		// 套路：如果方法有返回值，那么先在方法体的第一行声明该返回值
		boolean result = true;
		
		/*
		 * 6:  1,6   2,3
		 * 
		 * 3:  1,3
		 * 
		 * 100:   2-99
		 */
		//思路：拿着这个数从2开始除，一直除到比source小1，不管除到谁，只要余数为0，那么这个数就不是质数
		for (int i = 2; i &lt; source; i++) {
			if(source%i==0)
			{
				result=false;
				break;//循环不用继续，结束
			}
		}
		return result;
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法的调用" tabindex="-1"><a class="header-anchor" href="#方法的调用" aria-hidden="true">#</a> 方法的调用</h4><ul><li><p>方法只有在被调用后才生效</p></li><li><p>方法的调用方法：</p><ul><li><p>无参方法的调用</p></li><li><p>有参方法的调用</p></li></ul></li><li><p>无参方法的调用</p></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>方法名(  )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>定义方法就是编写一段有特定功能的代码，在程序中使用同样功能的地方，没有必要重复编写同样的代码，只要调用定义好的方法就可以。可以实现代码的重用。简化了程序的编写和维护工作。</p></li><li><p>所谓调用方法，其实就是给方法的入口传入一些值（参数），然后在出口得到方法执行的结果（返回值）。给方法传入参数的过程，称为“传参”。</p></li><li><p>理解“实参”、“形参”。</p></li><li><p>实际上，方法传参的过程就是把实参赋值给对应的形参的过程，并且实参和形参的数量、类型必须匹配。</p></li><li><p>使用方法时的注意问题</p><ul><li><p>形参必须注明数据类型</p></li><li><p>实参直接写，不需要类型声明</p></li><li><p>return只能返回一次</p></li><li><p>遇到return语句，方法结束执行，后续语句不执行</p></li><li><p>方法的返回值，必须与方法声明中的返回值类型匹配</p></li><li><p>方法定义，不能写在main()中</p></li><li><p>方法是不能嵌套的</p></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test方法的调用 {

	/**
	 * 方法的调用分两种情况：
	 * 
	 * 1：static修饰的方法：  类名.方法名(实际参数)
	 * 2. 非static修饰的方法：
	 * ①先把方法所在的类实例化： Test方法的定义 t=new Test方法的定义();
	 * ②然后调用：    t.isPrime2(17);//对象名.方法名(实际参数)
	 * 
	 * 3.没有返回值的方法：
	 * 
	 * 注意：方法调用完不要声明变量接收方法的返回值即可，因为没有返回值
	 * 
	 */
	
	public static void main(String[] args) {
		//1.判断213是不是质数
		
		 boolean result=Test方法的定义.isPrime(17);
		 
		 System.out.println(result);
		 
		 //2.求出23和34 的和
		 int tmp=Test方法的定义.sum(23, 34);
		 System.out.println(tmp);
		 
		 //3.判断17是不是质数，要求调用非static修饰的isPrime方法
		 Test方法的定义 t=new Test方法的定义();
		 boolean result2=t.isPrime2(17);
		 System.out.println(&quot;17是质数吗：&quot;+result2);
		 
		  //4.调用没有返回值的方法
		 Test方法的定义.printName(&quot;telangpu&quot;);
	}
	
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法的重载-overload" tabindex="-1"><a class="header-anchor" href="#方法的重载-overload" aria-hidden="true">#</a> 方法的重载（overload）</h4><ul><li><p>方法的重载就是在同一个类中允许同时存在一个以上同名的方法</p></li><li><p>方法重载的规则</p><ul><li><p>方法名称相同</p></li><li><p>方法的参数必须不同</p><ul><li><p>参数个数不同 或</p></li><li><p>参数类型不同</p></li></ul></li><li><p>方法的返回值类型可以相同，也可以不同</p></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package net.tencent.demo.test;

public class Test方法的重载 {
	/*
	 * 方法的重载就是在同一个类中允许同时存在一个以上同名的方法
	 * 这种情况的出现是有条件的：
	 * 
	 * 1.方法名相同
	 * 2.一个不同，方法的参数必须不同：参数个数不同  or 参数类型不同
	 */
	public void add(int a)
	{
		
	}
	
	public void add(double b)
	{
		
	}
	
	public void add(float f)
	{
		
	}
	
	public void add(int a,int f)
	{
		
	}
	
	public int add(int c,int d,int e)
	{
		//Arrays.to
		return 0;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),p=i("em",null,"Java数组的声明及初始化",-1),h={href:"https://github.com/javaobjects/demo513_1",target:"_blank",rel:"noopener noreferrer"},g=i("hr",null,null,-1),x=i("h3",{id:"分割线",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),_=i("hr",null,null,-1),f=i("p",null,[i("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function k(N,T){const e=r("ExternalLinkIcon");return t(),d("div",null,[v(" more "),i("h1",c,[m,n(),i("a",b,[n("90-Java方法的定义及调用.md"),l(e)])]),o,i("p",null,[i("strong",null,[n("以上就是我关于 "),p,n(" 知识点的整理与总结的全部内容，"),i("a",h,[n("另附源码"),l(e)])])]),g,x,_,f])}const y=s(u,[["render",k],["__file","index.html.vue"]]);export{y as default};
