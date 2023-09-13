import{_ as s,r as i,o as d,c,a as e,b as t,d as r,w as l,e as h}from"./app-354ae9a8.js";const _={},u=e("h1",{id:"百问网韦东山《freertos快速入门》教程-基于-keil-模拟器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#百问网韦东山《freertos快速入门》教程-基于-keil-模拟器","aria-hidden":"true"},"#"),t(" 百问网韦东山《freeRTOS快速入门》教程-基于 keil 模拟器")],-1),f=e("h2",{id:"前言",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),t(" 前言")],-1),p=e("p",null,"《freeRTOS快速入门》基于 keil 模拟器编写。",-1),b=e("blockquote",null,[e("p",null,"答1：前者使用Keil自带的模拟器无需实际开发板，后者使用DshanMCU-F103开发板板套件")],-1),m=e("blockquote",null,[e("p",null,"答2：不想买板子的学习前者，负担得起板子的学习后者。")],-1),S=e("blockquote",null,[e("p",null,"答3：前者主讲FreeRTOS的使用，后者包含前者的内容，并且加入了更多的工程实践：用FreeRTOS解决实际工作难题。")],-1),T=e("ul",null,[e("li",null,"问4：入门之后该怎么进阶学习？")],-1),k=e("h3",{id:"学前知识普及",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#学前知识普及","aria-hidden":"true"},"#"),t(" 学前知识普及")],-1),R={href:"https://www.bilibili.com/video/BV11h41167iD",target:"_blank",rel:"noopener noreferrer"},g=e("iframe",{src:"//player.bilibili.com/player.html?aid=206670748&bvid=BV11h41167iD&cid=370140179&p=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ",-1),w={href:"https://www.bilibili.com/video/BV11h41167iD",target:"_blank",rel:"noopener noreferrer"},O=e("h2",{id:"《freertos快速入门》配套的视频教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#《freertos快速入门》配套的视频教程","aria-hidden":"true"},"#"),t(" 《freeRTOS快速入门》配套的视频教程")],-1),v=e("p",null,"我们为《FreeRTOS快速入门》配套的课程教程提供了两个观看地址，根据自己实际情况其中一种方式即可：",-1),x={href:"https://video.100ask.net/p/t_pc/goods_pc_detail/goods_detail/p_626b6273e4b0812e17932906",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.bilibili.com/video/BV1844y1g7ud",target:"_blank",rel:"noopener noreferrer"},B=h(`<h2 id="《freertos快速入门》配套资料获取" tabindex="-1"><a class="header-anchor" href="#《freertos快速入门》配套资料获取" aria-hidden="true">#</a> 《freeRTOS快速入门》配套资料获取</h2><p>我们提供了两种获取方式，根据自己的实际情况选择其中一种方式获取得到即可。</p><ul><li>方式1，通过百度云盘获取： https://pan.baidu.com/s/1MuQ84r10WMwTUfT7dAMevw?pwd=root 提取码：root</li><li>方式2，通过 git clone 获取：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://e.coding.net/weidongshan/livestream/doc_and_source_for_livestream.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>目录：<code>doc_and_source_for_livestream\\20210712_FreeRTOS快速入门</code></p><h2 id="技术答疑交流" tabindex="-1"><a class="header-anchor" href="#技术答疑交流" aria-hidden="true">#</a> 技术答疑交流</h2>`,6),D={href:"https://forums.100ask.net",target:"_blank",rel:"noopener noreferrer"},F=e("hr",null,null,-1);function M(C,U){const n=i("RouterLink"),o=i("ExternalLinkIcon"),a=i("center");return d(),c("div",null,[u,f,p,e("ul",null,[e("li",null,[t("问1: 《freeRTOS快速入门》和 "),r(n,{to:"/zh/freeRTOS/DShanMCU-F103/"},{default:l(()=>[t("《freeRTOS入门与工程实践》")]),_:1}),t(" 的开发板有何不同？")])]),b,e("ul",null,[e("li",null,[t("问2: 《freeRTOS快速入门》和 "),r(n,{to:"/zh/freeRTOS/DShanMCU-F103/"},{default:l(()=>[t("《freeRTOS入门与工程实践》")]),_:1}),t(" 如何选择？")])]),m,e("ul",null,[e("li",null,[t("问3: 《freeRTOS快速入门》和 "),r(n,{to:"/zh/freeRTOS/DShanMCU-F103/"},{default:l(()=>[t("《freeRTOS入门与工程实践》")]),_:1}),t(" 课程有何不同？")])]),S,T,e("blockquote",null,[e("p",null,[t("答4：阅读 "),r(n,{to:"/zh/freeRTOS/simulator/chapter14.html"},{default:l(()=>[t("【拓展】进阶学习")]),_:1}),t(" 章节，了解关于freeRTOS完整的学习路线。")])]),k,e("p",null,[t("对于RTOS初学者或者对RTOS的基础概念不太清楚的同学，请先学习"),e("a",R,[t("这个视频课程"),r(o)]),t("，在充分理解什么是RTOS之后再开始学习，对于你的学习能达到事半功倍的作用！")]),g,e("p",null,[t("视频观看地址： "),e("a",w,[t("https://www.bilibili.com/video/BV11h41167iD"),r(o)])]),O,v,e("ul",null,[e("li",null,[t("视频观看方式1，百问网官方学习中心："),e("a",x,[t("https://video.100ask.net/p/t_pc/goods_pc_detail/goods_detail/p_626b6273e4b0812e17932906"),r(o)])]),e("li",null,[t("视频观看方式2，哔哩哔哩："),e("a",V,[t("https://www.bilibili.com/video/BV1844y1g7ud"),r(o)])])]),B,e("p",null,[t("在学习中遇到任何问题，请前往我们的技术交流社区留言： "),e("a",D,[t("https://forums.100ask.net"),r(o)])]),F,r(a,null,{default:l(()=>[t("本章完")]),_:1})])}const y=s(_,[["render",M],["__file","index.html.vue"]]);export{y as default};
