import{_ as s,X as l,Y as d,a1 as a,Z as e,$ as n,a2 as t,a0 as o,F as r}from"./framework-68dd73a2.js";const c={},v={id:"_133-java-collections集合工具类介绍-md",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_133-java-collections集合工具类介绍-md","aria-hidden":"true"},"#",-1),m={href:"http://xn--133-Java-Collections-nv75a670bzlopv1d517jkvmady1n.md",target:"_blank",rel:"noopener noreferrer"},_=o(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><ul><li>Collections 是类</li><li>Collection 是接口（单例集合祖宗）</li></ul><p><strong>示例代码：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>List&lt;Integer&gt; list = new ArrayList&lt;Integer&gt;();//前面声明咯类型后面也要这样写，然后构造方法一组圆括号
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拓展知识点" tabindex="-1"><a class="header-anchor" href="#拓展知识点" aria-hidden="true">#</a> 拓展知识点</h3>`,5),h={href:"http://tutorials.jenkov.com/java-collections/collections.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://wenku.baidu.com/view/b03ca9d728ea81c758f578bf.html",target:"_blank",rel:"noopener noreferrer"},p=e("hr",null,null,-1),f=e("h3",{id:"分割线",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分割线","aria-hidden":"true"},"#"),n(" 分割线")],-1),g=e("hr",null,null,-1),C={class:"hint-container tip"},x=e("p",{class:"hint-container-title"},"提示",-1),k=e("em",null,"Java-Collections集合工具类介绍",-1),j={href:"https://github.com/javaobjects/demo517",target:"_blank",rel:"noopener noreferrer"};function y(q,S){const i=r("ExternalLinkIcon");return l(),d("div",null,[a(" more "),e("h1",v,[u,n(),e("a",m,[n("133-Java-Collections集合工具类介绍.md"),t(i)])]),_,e("p",null,[e("a",h,[n("Collections-API"),t(i)])]),e("p",null,[e("a",b,[n("Java中Collection和Collections的区别"),t(i)])]),p,f,g,e("div",C,[x,e("p",null,[e("strong",null,[n("以上就是我关于 "),k,n(" 知识点的整理与总结的全部内容，"),e("a",j,[n("另附源码"),t(i)])])])])])}const L=s(c,[["render",y],["__file","java133.html.vue"]]);export{L as default};
