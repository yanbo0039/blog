import{_ as o,X as a,Y as i,a1 as r,Z as e,$ as t,a2 as s,a0 as c,F as l}from"./framework-68dd73a2.js";const g="/blog/assets/Kingdee_166_1.png",d="/blog/assets/Kingdee_166_2.png",_="/blog/assets/Kingdee_166_3.png",p="/blog/assets/Kingdee_166_4.png",u="/blog/assets/Kingdee_166_5.png",f={},m={id:"_166-eas报表案例二-md",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#_166-eas报表案例二-md","aria-hidden":"true"},"#",-1),b={href:"http://xn--166-EAS-cr4k57eeu5fs7mw34g.md",target:"_blank",rel:"noopener noreferrer"},k=c('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h3><blockquote><p>如下图所示，为笔者所接到的需求</p></blockquote><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="理解需求" tabindex="-1"><a class="header-anchor" href="#理解需求" aria-hidden="true">#</a> 理解需求</h3><blockquote><p>经过询问以及自己查找后得知，其实现大概如下</p></blockquote><ul><li>XXX子公司</li></ul><blockquote><p>查询公司表 <strong>T_ORG_Company</strong>里的<strong>FName</strong>字段</p></blockquote><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>票据到期本金</li></ul><blockquote><p>查询应付票据 <strong>T_NT_PayableBill</strong> 表的 票据金额 <strong>FAmount</strong> 字段 fbillmakerid 付款人全称</p></blockquote><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>融资租赁应付租金</li></ul><blockquote><p>查询 融资租赁 <strong>CT_LEA_LeaseConBill</strong> 表的 租金合计 <strong>cftotalrent</strong> 字段 cfficompanyid 财务组织字段</p></blockquote><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>流贷/固贷到期本息</li></ul><blockquote><p>查询借款 <strong>T_FIN_Loan</strong> 融资品种 <strong>ftypeid</strong> 枚举值 为：固定资产贷款/流动性贷款时的 umYAAABTeAbCXtep/umYAAAABNRrCXtep <strong>T_FIN_FinancingProducts</strong> 分录 还款计划 <strong>T_FIN_LoanEntry</strong> 里的 预计还本金额 <strong>famount</strong> 的值 fcompanyid 公司</p></blockquote><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤" aria-hidden="true">#</a> 实现步骤</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>EAS报表案例二</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',20);function x(A,q){const n=l("ExternalLinkIcon");return a(),i("div",null,[r(" more "),e("h1",m,[h,t(),e("a",b,[t("166-EAS报表案例二.md"),s(n)])]),k])}const N=o(f,[["render",x],["__file","kingdee166.html.vue"]]);export{N as default};
