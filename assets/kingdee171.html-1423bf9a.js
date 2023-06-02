import{_ as n,X as a,Y as r,a1 as s,Z as e,$ as o,a2 as i,a0 as l,F as c}from"./framework-68dd73a2.js";const d={},u={id:"_171-eas中等额本金与等额本息的计算方式-md",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#_171-eas中等额本金与等额本息的计算方式-md","aria-hidden":"true"},"#",-1),h={href:"http://xn--171-EAS-jx3k4ir75mvfdiyuzneba5300db7pca12l767p83za723aea.md",target:"_blank",rel:"noopener noreferrer"},b=l(`<div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="eas普通单据取值赋值大全" tabindex="-1"><a class="header-anchor" href="#eas普通单据取值赋值大全" aria-hidden="true">#</a> EAS普通单据取值赋值大全</h3><blockquote><p>本文着重介绍了在EAS中Edit/List/后台/对页面的字段进行取值赋值的操作</p></blockquote><ul><li>Edit界面</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override
public void onload() throws Exception{
    super.onload()
    this.
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求背景" tabindex="-1"><a class="header-anchor" href="#需求背景" aria-hidden="true">#</a> 需求背景</h3><blockquote><p>最近笔者有遇到一需求，根据<strong>等额本金</strong>或<strong>等额本息</strong>生成付款计划，中间可能还有一个缓冲期限的条件，那么问题来了，如何计算<strong>等额本金</strong>与<strong>等额本息</strong>呢？</p></blockquote><h3 id="理解概念" tabindex="-1"><a class="header-anchor" href="#理解概念" aria-hidden="true">#</a> 理解概念</h3><blockquote><p>在实现需求之前我们需要先理解一下这两个概念，那么什么是<strong>等额本金</strong>，什么是<strong>等额本息</strong>呢？</p></blockquote><ul><li>等额本金</li></ul><blockquote><p>等额本金是指一种贷款的还款方式，是在还款期内把贷款数<strong>总额等分</strong>，每月偿还<strong>同等数额的本金</strong>和<strong>剩余贷款在该月所产生的利息</strong>，这样由于每月的还款<strong>本金额固定</strong>，而利息越来越少，借款人起初还款压力较大，但是随时间的推移每月还款数也越来越少。</p></blockquote><ul><li>等额本息</li></ul><blockquote><p>等额本息是指一种贷款的还款方式，指在还款期内，每月偿还同等数额的贷款(包括本金和利息)。等额本息和等额本金是不一样的概念，虽然刚开始还款时每月还款额可能会低于等额本金还款方式的额度，但是最终所还利息会高于等额本金还款方式，该方式经常被银行使用。</p></blockquote><h3 id="计算方式" tabindex="-1"><a class="header-anchor" href="#计算方式" aria-hidden="true">#</a> 计算方式</h3><ul><li>等额本金</li></ul><blockquote><p>每月还本付息金额=（本金/还款月数）+（本金-累计已还本金）×月利率</p></blockquote><blockquote><p>每月本金=总本金/还款月数</p></blockquote><blockquote><p>每月利息=（本金-累计已还本金）×月利率</p></blockquote><blockquote><p>还款总利息=（还款月数+1）×贷款额×月利率/2</p></blockquote><blockquote><p>还款总额=（还款月数+1）×贷款额×月利率/2+ 贷款额</p></blockquote><ul><li>等额本息</li></ul><blockquote><p>每月还款额=[贷款本金×月利率×（1+月利率）<sup>还款月数]÷[（1+月利率）</sup>还款月数－1]</p></blockquote><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>EAS中等额本金与等额本息的计算方式</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>`,23);function g(k,v){const t=c("ExternalLinkIcon");return a(),r("div",null,[s(" more "),e("h1",u,[p,o(),e("a",h,[o("171-EAS中等额本金与等额本息的计算方式.md"),i(t)])]),b])}const _=n(d,[["render",g],["__file","kingdee171.html.vue"]]);export{_ as default};
