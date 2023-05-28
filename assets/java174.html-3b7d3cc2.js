import{_ as e,X as s,Y as a,a1 as i,Z as n,$ as l,a0 as d}from"./framework-68dd73a2.js";const v="/blog/assets/Java_174_1.png",r={},t=n("h1",{id:"_174-java习题-一-md",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_174-java习题-一-md","aria-hidden":"true"},"#"),l(" 174-Java习题(一).md")],-1),u=d(`<ol><li><p>在么是继承，什么是多态，方法的重载和覆盖有何区别(10分)</p></li><li><p>定义类A和类B如下：（10分）</p></li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    class A{
        int a=1；
        doubled=2.0；
        void show（）{
            System.out.print1n（&quot;ClassA:a=&quot;+a+&quot;\\td=&quot;+d）；
        }
    }
    Class Bextends A{
        float a=3.0f；
        String d=&quot;Javaprogram.&quot;；
        void show（）{
            super.show（）；
            System.out.printIn（&quot;ClassB:a=&quot;+a+&quot;\\td=&quot;+d）；
        }
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（1）若在应用程序的main方法中有以下语句：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>
A a=newA（）；
a.show（）；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则输出的结果如何？</p><p>（2）若在应用程序的main方法中定义类B的对象b：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>A b=newB（）；
b.show（）；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>则输出的结果如何？</p><ol start="3"><li>请输出下面主函数的值。（10分）</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Function{
    public static void funl（int i）{
        i=1；
    }
    public static void fun2（Integer i）{
        i=new Integer（2）；
    }
    public static void fun3（String s）{
        s=&quot;3&quot;；
    }
    public static void fun4（StringBuffer s）{
        s.append（&quot;4&quot;）；
    }
        
    public static void main（String[]args）{
        int il=0；
        Integer i2=new Integer（0）；
        String s=&quot;&quot;；
        StringBuffer sb=new StringBuffer（）；
        fun1（i1）；
        System.out.println（i1）：
        fun2（i2）；
        System.out.println（i2）； 
        fun3（s）；
        Systen.out.println（s）；
        fun4（sb）；
        System.out.print1n（sb）；
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>给出一串数字如下。（15分）</li></ol><p>0 1 1 2 3 5 8 ？ 21 ？ 55</p><p>1）请问？可能的数字。</p><p>2）根据上面数列的排列规律写出求前N项和的程序。（只需列出核心代码) 思路：每次求出第N项，每次累加得出当前的和。</p><ol start="5"><li><p>简述在JAVA中的String类各个方法的功能。（10分）</p></li><li><p>指出下面程序中的错误（多处）。（10分）</p></li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class A 
{
    final static int num；
    public void doSomeThing（String s）{
    if（s==“Print”）{
        Systen.out.println（“Priint..…”）
    }else if（s=“Quit”）{
        System.out.println（“Quit.…”）
    }
    num++；
}
    public static void main（String[]args）{
    System.out.println（“Start…”）：
    doSomeThing（“Priint”）：
    doSomeThing（“Quit”）；
    System.out.pirntln（“total do num:”+num）：
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li><p>用JAVA实现冒泡排序。(15分)</p></li><li><p>数据库题目，有3张表(20分)</p></li></ol><p>Student 学生表 (学号、姓名、性别、年龄、组织部门）</p><p>Course课程表（编号、课程名称）</p><p>Sc选课表（学号、课程编号、成绩）</p><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>1、写一个SQL语句，查询选修了&quot;计算机原理&quot;的学生学号和姓名(5分)</p><p>2、写一个SQL语句，查询&quot;周星驰&quot;同学选修了的课程名称(5分)</p><p>3、写一个SQL语句，查询选修了至少3门课程以上的学生学号和姓名(10分)</p><p><strong>以上就是我关于 <em>Java习题(一)</em> 知识点整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><p><strong>博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。</strong></p>',29);function c(m,o){return s(),a("div",null,[i(" more "),t,i(" 凯通"),u])}const p=e(r,[["render",c],["__file","java174.html.vue"]]);export{p as default};
