import{_ as i,X as l,Y as s,a1 as r,Z as e,$ as d,a2 as a,a0 as t,F as v}from"./framework-68dd73a2.js";const c="/blog/assets/TypeScript_2_1.png",u={},o=t(`<h1 id="typescript的基本数据类型" tabindex="-1"><a class="header-anchor" href="#typescript的基本数据类型" aria-hidden="true">#</a> TypeScript的基本数据类型</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Boolean
Number
String
Array
Enum //枚举
Any //不知道数据类型
Void //声明函数 可以不需要返回值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let isDone: boolean = false;
Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
String
let color: string = &quot;blue&quot;;
color = &#39;red&#39;;
Array
let list: number[] = [1, 2, 3];
let list: Array&lt;number&gt; = [1, 2, 3];
Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = [&quot;hello&quot;, 10]; // OK
// Initialize it incorrectly
x = [10, &quot;hello&quot;]; // Error
Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

alert(colorName); // Displays &#39;Green&#39; as its value is 2 above
Any
let notSure: any = 4;
notSure = &quot;maybe a string instead&quot;;
notSure = false; // okay, definitely a boolean

let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn&#39;t check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property &#39;toFixed&#39; doesn&#39;t exist on type &#39;Object&#39;.

let list: any[] = [1, true, &quot;free&quot;];

list[1] = 100;
Void

function warnUser(): void {
    alert(&quot;This is my warning message&quot;);
}

let unusable: void = undefined;
Null and Undefined
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>TypeScript的基本数据类型</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div><h3 id="扩展知识" tabindex="-1"><a class="header-anchor" href="#扩展知识" aria-hidden="true">#</a> 扩展知识</h3>`,10),m={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"};function b(p,h){const n=v("ExternalLinkIcon");return l(),s("div",null,[r(" more "),o,e("ol",null,[e("li",null,[e("a",m,[d("参考链接"),a(n)])])])])}const x=i(u,[["render",b],["__file","typescript2.html.vue"]]);export{x as default};
