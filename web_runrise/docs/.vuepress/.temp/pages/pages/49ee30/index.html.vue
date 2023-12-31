<template><div><h1 id="git分支开发工作流" tabindex="-1"><a class="header-anchor" href="#git分支开发工作流" aria-hidden="true">#</a> Git分支开发工作流</h1>
<p>文档：<a href="https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E5%BC%80%E5%8F%91%E5%B7%A5%E4%BD%9C%E6%B5%81" target="_blank" rel="noopener noreferrer">Git分支开发工作流<ExternalLinkIcon/></a></p>
<h3 id="长期分支" tabindex="-1"><a class="header-anchor" href="#长期分支" aria-hidden="true">#</a> 长期分支</h3>
<p>因为 Git 使用简单的三方合并，所以就算在一段较长的时间内，反复把一个分支合并入另一个分支，也不是什么难事。 也就是说，在整个项目开发周期的不同阶段，你可以同时拥有多个开放的分支；你可以定期地把某些主题分支合并入其他分支中。</p>
<p>许多使用 Git 的开发者都喜欢使用这种方式来工作，比如<strong>只在 <code v-pre>master</code> 分支上保留完全稳定的代码</strong>，开发过程在<code v-pre>dev</code>分支，开发完成后并入<code v-pre>test</code>分支进行测试，通过测试的稳定代码才并入<code v-pre>master</code>分支中。</p>
<p><code v-pre>dev</code>和<code v-pre>test</code>分支不需要保持绝对稳定，但在<code v-pre>test</code>通过测试达到稳定状态，就可以被合并入<code v-pre>master</code>分支。</p>
<p>事实上我们刚才讨论的，是随着你的提交而不断右移的指针。 稳定分支(<code v-pre>master</code>)的指针总是在提交历史中落后一大截，而前沿分支(<code v-pre>dev</code>或<code v-pre>test</code>)的指针往往比较靠前。</p>
<p>你可以用这种方法维护不同层次的稳定性。 一些大型项目还有一个 <code v-pre>proposed</code>（建议） 或 <code v-pre>pu: proposed updates</code>（建议更新）分支，它可能因包含一些不成熟的内容而不能进入<code v-pre>master</code> 分支。 这么做的目的是使你的分支具有不同级别的稳定性；当它们具有一定程度的稳定性后，再把它们合并入具有更高级别稳定性的分支中。 再次强调一下，使用多个长期分支的方法并非必要，但是这么做通常很有帮助，尤其是当你在一个非常庞大或者复杂的项目中工作时。</p>
<h3 id="主题分支-短期分支" tabindex="-1"><a class="header-anchor" href="#主题分支-短期分支" aria-hidden="true">#</a> 主题分支 (短期分支)</h3>
<p><strong>主题分支对任何规模的项目都适用</strong>。 主题分支是一种<strong>短期分支</strong>，它被<strong>用来实现单一特性或其相关工作</strong>。</p>
<p>你已经在上一节中你创建的 <code v-pre>iss53</code> 和 <code v-pre>hotfix</code> 主题分支中看到过这种用法。 你在上一节用到的主题分支（<code v-pre>iss53</code> 和 <code v-pre>hotfix</code> 分支）中提交了一些更新，并且在它们合并入主干分支之后，你又删除了它们。 这项技术能使你快速并且完整地进行上下文切换（context-switch）——因为你的工作被分散到不同的流水线中，在不同的流水线中<strong>每个分支都仅与其目标特性相关</strong>，因此，<strong>在做代码审查之类的工作的时候就能更加容易地看出你做了哪些改动</strong>。 你可以把做出的改动在主题分支中保留几分钟、几天甚至几个月，等它们成熟之后再合并，而不用在乎它们建立的顺序或工作进度。</p>
<p>考虑这样一个例子，你在 <code v-pre>master</code> 分支上工作到 <code v-pre>C1</code>，这时为了解决一个问题而新建 <code v-pre>iss91</code> 分支，在 <code v-pre>iss91</code> 分支上工作到 <code v-pre>C4</code>，然而对于那个问题你又有了新的想法，于是你再新建一个 <code v-pre>iss91v2</code> 分支试图用另一种方法解决那个问题，接着你回到 <code v-pre>master</code> 分支工作了一会儿，你又冒出了一个不太确定的想法，你便在 <code v-pre>C10</code> 的时候新建一个 <code v-pre>dumbidea</code> 分支，并在上面做些实验。 你的提交历史看起来像下面这个样子：</p>
<p><img src="https://git-scm.com/book/en/v2/images/topic-branches-1.png" alt="拥有多个主题分支的提交历史。"></p>
<p align="center">图1. 拥有多个主题分支的提交历史 ▲</p>
<p>现在，我们假设两件事情：你决定使用第二个方案来解决那个问题，即使用在 <code v-pre>iss91v2</code> 分支中方案。 另外，你将 <code v-pre>dumbidea</code> 分支拿给你的同事看过之后，结果发现这是个惊人之举。 这时你可以<strong>抛弃 <code v-pre>iss91</code> 分支（即丢弃 <code v-pre>C5</code> 和 <code v-pre>C6</code> 提交）</strong>，然后把另外两个分支合并入主干分支。 最终你的提交历史看起来像下面这个样子：</p>
<p><img src="https://git-scm.com/book/en/v2/images/topic-branches-2.png" alt="合并了  和  分支之后的提交历史。"></p>
<p align="center">图2. 合并了 dumbidea 和 iss91v2 分支之后的提交历史 ▲</p>
<p>我们将会在 <a href="https://git-scm.com/book/zh/v2/ch00/ch05-distributed-git" target="_blank" rel="noopener noreferrer">分布式 Git<ExternalLinkIcon/></a> 中向你揭示更多有关分支工作流的细节， 因此，请确保你阅读完那个章节之后，再来决定你的下个项目要使用什么样的分支策略（branching scheme）。</p>
<p>请牢记，当你做这么多操作的时候，这些分支全部都存于本地。 当你新建和合并分支的时候，所有这一切都只发生在你本地的 Git 版本库中 —— 没有与服务器发生交互。</p>
</div></template>


