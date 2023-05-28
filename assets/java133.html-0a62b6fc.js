import{_ as s,X as t,Y as d,a1 as a,Z as e,$ as n,a2 as l,a0 as o,F as r}from"./framework-68dd73a2.js";const c={},v={id:"_133-java-collections集合工具类介绍-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_133-java-collections集合工具类介绍-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--133-Java-Collections-nv75a670bzlopv1d517jkvmady1n.md",target:"_blank",rel:"noopener noreferrer"},_=o(`<ul><li>Collections 是类</li><li>Collection 是接口（单例集合祖宗）</li></ul><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>List&lt;Integer&gt; list = new ArrayList&lt;Integer&gt;();//前面声明咯类型后面也要这样写，然后构造方法一组圆括号
    list.add(123);
//		list.add(null);
    list.add(234);
    list.add(123);
    list.add(678);
    
    Collections.sort(list);
    System.out.println(&quot;Collections.sort(list): &quot; + list.toString());
    
    
    Collections.shuffle(list);
    System.out.println(&quot;Collections.shuffle(list): &quot; + list.toString());//打乱顺序
    
    List&lt;Integer&gt; dest_list = new ArrayList&lt;&gt;(10);
    dest_list.add(1);
    dest_list.add(1);
    dest_list.add(1);
    dest_list.add(1);
    dest_list.add(1);
    dest_list.add(1);
    dest_list.add(1);
    dest_list.add(1);
    dest_list.add(1);
    dest_list.add(1);
    Collections.copy(dest_list,list);
    System.out.println(&quot;dest_list: &quot; + dest_list);
    
    
    for (int i = 0; i &lt; list.size(); i++) {
        System.out.println(list.get(i));
    }
    System.out.println(&quot;list.contains(123): &quot; + list.contains(123));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="拓展知识点" tabindex="-1"><a class="header-anchor" href="#拓展知识点" aria-hidden="true">#</a> 拓展知识点</h4>`,4),b={href:"http://tutorials.jenkov.com/java-collections/collections.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://wenku.baidu.com/view/b03ca9d728ea81c758f578bf.html",target:"_blank",rel:"noopener noreferrer"},p=e("em",null,"Java-Collections集合工具类介绍",-1),f={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"},g=e("hr",null,null,-1),C=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),x=e("hr",null,null,-1),k=e("p",null,[e("strong",null,"博主为咯学编程：父母不同意学编程，现已断绝关系;恋人不同意学编程，现已分手;亲戚不同意学编程，现已断绝来往;老板不同意学编程,现已失业三十年。。。。。。如果此博文有帮到你欢迎打赏，金额不限。。。")],-1);function j(y,q){const i=r("ExternalLinkIcon");return t(),d("div",null,[a(" more "),e("h1",v,[u,n(),e("a",m,[n("133-Java-Collections集合工具类介绍.md"),l(i)])]),_,e("p",null,[e("a",b,[n("Collections-API"),l(i)])]),e("p",null,[e("a",h,[n("Java中Collection和Collections的区别"),l(i)])]),e("p",null,[e("strong",null,[n("以上就是我关于 "),p,n(" 知识点的整理与总结的全部内容，"),e("a",f,[n("另附源码"),l(i)])])]),g,C,x,k])}const I=s(c,[["render",j],["__file","java133.html.vue"]]);export{I as default};
