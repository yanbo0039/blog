import{_ as i,X as e,Y as l,a1 as a,a0 as t}from"./framework-68dd73a2.js";const r={},h=t('<h1 id="vue-hope博客项目总结" tabindex="-1"><a class="header-anchor" href="#vue-hope博客项目总结" aria-hidden="true">#</a> Vue-hope博客项目总结</h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>本博文仅供学术研究和交流参考，严禁将其用于商业用途。如因违规使用产生的任何法律问题，使用者需自行负责。</p></div><h3 id="前期调研" tabindex="-1"><a class="header-anchor" href="#前期调研" aria-hidden="true">#</a> 前期调研</h3><ul><li>其实我早在2019左右就有一个想法，想建一个属于自己的博客，但迫于形式加上当时依附于其它博客平台，</li><li>写得也是顺风顺水，醉大的访问量还曾做到了四万加的访问量，四年过去了我一直不清楚自己博客的需求，</li><li>这才是造成我迟迟没有搭建属于自己博客的源头，直到上个月发现了vuepress这个框架，外加reco以及</li><li>hope两大主题的吸引，真正的时间也用了一个月左右，之前用了reco后面又换成了现在的hope，我想没人</li><li>能够拒绝hope这个主题吧</li></ul><h3 id="项目中的难点" tabindex="-1"><a class="header-anchor" href="#项目中的难点" aria-hidden="true">#</a> 项目中的难点</h3><ul><li>项目中其实没有啥难点，都是套壳，但我却在一些点上面踩了坑，总结了一下可能要在以下几个方面做提升了</li></ul><ol><li>留言评论功能</li></ol><ul><li>官网的API阅读理解能力</li><li>有时候看到API就有一种烦燥感，导致阅读理解往往不深，弄得走了很多冤枉路</li><li>比如留言与评论功能，就是典型的浪费了大量的时间,弄了多次依然是有问题，</li><li>醉后我不得不重新申请一个github以及重新申请一个vercel账号等等试错N次</li><li>历时几天时间才终于完成了这个功能，</li></ul><ol start="2"><li><p>github action 这个也花费了不少时间，主要是网上找到的别人的博客坑了我还得是去找官网才行</p></li><li><p>打包优化</p></li></ol><ul><li>因为图片的缘故，打包长长达到了恐怖的半小时至一小时，后面发现vite每次都是将图片读到了</li><li>assets文件夹内，所以后来我就将所有的图片全扔这个文件夹内了，当然前提是将这些图片按一定</li><li>规律重命名，以保证它们不会重名</li></ul><ol start="4"><li>批量处理文件格式</li></ol><ul><li>包括md头部的格式以及READ.MD内容的生成这些都需要写Java方法批量的去处理它们</li></ul><hr><h3 id="分割线" tabindex="-1"><a class="header-anchor" href="#分割线" aria-hidden="true">#</a> 分割线</h3><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p><strong>以上就是我关于 <em>Vue-hope博客项目总结</em> 知识点的整理与总结的全部内容，希望对你有帮助。。。。。。。</strong></p></div>',16);function n(o,s){return e(),l("div",null,[a(" more "),h])}const d=i(r,[["render",n],["__file","vue13.html.vue"]]);export{d as default};
