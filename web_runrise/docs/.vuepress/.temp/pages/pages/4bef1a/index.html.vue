<template><div><h1 id="git分支-分支原理" tabindex="-1"><a class="header-anchor" href="#git分支-分支原理" aria-hidden="true">#</a> Git分支-分支原理</h1>
<p>Git 处理分支的方式可谓是难以置信的轻量，创建新分支这一操作几乎能在瞬间完成，并且在不同分支之间的切换操作也是一样便捷。 与许多其它版本控制系统不同，Git 鼓励在工作流程中频繁地使用分支与合并，哪怕一天之内进行许多次。</p>
<h3 id="首次提交" tabindex="-1"><a class="header-anchor" href="#首次提交" aria-hidden="true">#</a> 首次提交</h3>
<p>在进行提交操作时，Git 会保存一个提交对象（commit object）。</p>
<p>假设现在有一个工作目录，里面包含了三个将要被暂存和提交的文件。 暂存操作会为每一个文件计算校验和（使用 SHA-1 哈希算法），然后会把当前版本的文件快照保存到 Git 仓库中 （Git 使用 <em>blob</em> 对象来保存它们），最终将校验和加入到暂存区域等待提交：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> README test.rb LICENSE
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">'The initial commit of my project'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用 <code v-pre>git commit</code> 进行提交操作时，Git 会先计算每一个子目录（本例中只有项目根目录）的校验和， 然后在 Git 仓库中这些校验和保存为树对象。随后，Git 便会创建一个提交对象， 它除了包含上面提到的那些信息外，还包含指向这个树对象（项目根目录）的指针。 如此一来，Git 就可以在需要的时候重现此次保存的快照。</p>
<p>现在，Git 仓库中有五个对象：三个 <strong><em>blob</em> 对象</strong>（保存着文件快照）、一个 <strong>树对象</strong> （记录着目录结构和 blob 对象索引）以及一个 <strong>提交对象</strong>（包含着指向前述树对象的指针和所有提交信息）。</p>
<p><img src="https://cdn.staticaly.com/gh/xugaoyi/image_store/blog/20200906145443.jpg" alt=""></p>
<p align='center'>图1. 首次提交对象及其树结构 ▲</p>
<h4 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结：</h4>
<ol>
<li>
<p><code v-pre>git add</code> 加入暂存操作，会为每个文件创建计算校验和，以及每个文件对应的<strong>文件快照（blob对象</strong>）。</p>
</li>
<li>
<p><code v-pre>git commit</code> 提交操作，计算子目录或跟目录的校验和 保存为<strong>树对象</strong>。随后，创建一个<strong>提交对象</strong>，包含着指向树对象的指针和所有提交信息。</p>
</li>
</ol>
<h3 id="再次提交" tabindex="-1"><a class="header-anchor" href="#再次提交" aria-hidden="true">#</a> 再次提交</h3>
<p>做些修改后再次提交，那么这次产生的提交对象会包含一个指向上次提交对象（父对象）的指针。</p>
<p><img src="https://cdn.staticaly.com/gh/xugaoyi/image_store/blog/20200906152315.jpg" alt=""></p>
<p align='center'>图2. 提交对象及其父对象 ▲</p>
<h3 id="git-的分支" tabindex="-1"><a class="header-anchor" href="#git-的分支" aria-hidden="true">#</a> Git 的分支</h3>
<p><strong>Git 的分支，其实本质上仅仅是指向提交对象的可变指针</strong>。 Git 的默认分支名字是 <code v-pre>master</code>。 在多次提交操作之后，你其实已经有一个指向最后那个提交对象的 <code v-pre>master</code> 分支。 <strong><code v-pre>master</code> 分支指针会在每次提交时自动向前移动</strong>。</p>
<blockquote>
<p>Git 的 <code v-pre>master</code> 分支并不是一个特殊分支。 它就跟其它分支完全没有区别。</p>
</blockquote>
<p><img src="https://cdn.staticaly.com/gh/xugaoyi/image_store/blog/20200906154109.jpg" alt=""></p>
<p align='center'>图3. 分支及其提交历史 ▲</p>
<h3 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支" aria-hidden="true">#</a> 创建分支</h3>
<p>Git 是怎么创建新分支的呢？ 很简单，它<strong>只是为你创建了一个可以移动的新的指针</strong>。 比如，创建一个 testing 分支， 你需要使用 <code v-pre>git branch</code> 命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> branch testing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这会在当前所在的提交对象上创建一个指针。</p>
<p><img src="https://cdn.staticaly.com/gh/xugaoyi/image_store/blog/20200906154330.png" alt=""></p>
<p align='center'>图4. 两个指向相同提交历史的分支 ▲</p>
<h3 id="当前分支的指针" tabindex="-1"><a class="header-anchor" href="#当前分支的指针" aria-hidden="true">#</a> 当前分支的指针</h3>
<p>Git 是怎么知道当前在哪一个分支上呢？ 很简单，它有一个<strong>名为 <code v-pre>HEAD</code> 的特殊指针</strong>，<strong>指向当前所在的本地分支</strong>（译注：<strong>将 <code v-pre>HEAD</code> 想象为当前分支的别名</strong>）。 在本例中，你仍然在 <code v-pre>master</code> 分支上。 因为 <code v-pre>git branch</code> 命令仅仅 <strong>创建</strong> 一个新分支，并不会自动切换到新分支中去。</p>
<p><img src="https://cdn.staticaly.com/gh/xugaoyi/image_store/blog/20200906205325.png" alt=""></p>
<p align='center'>图5. HEAD 指向当前所在的分支 ▲</p>
<h3 id="查看当前所在分支" tabindex="-1"><a class="header-anchor" href="#查看当前所在分支" aria-hidden="true">#</a> 查看当前所在分支</h3>
<p>你可以简单地使用 <code v-pre>git log</code> 命令查看各个分支当前所指的对象。 提供这一功能的参数是 <code v-pre>--decorate</code>。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--decorate</span>
f30ab <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> master, testing<span class="token punctuation">)</span> <span class="token function">add</span> feature <span class="token comment"># f30ab提交对象 (HEAD当前所在分支 -> master分支，testing 分支)</span>
34ac2 Fixed bug <span class="token comment"># 34ac2 提交对象</span>
98ca9 The initial commit of my project <span class="token comment"># 98ca9 提交对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正如你所见，当前 <code v-pre>master</code> 和 <code v-pre>testing</code> 分支均指向校验和以 <code v-pre>f30ab</code> 开头的提交对象。</p>
<h3 id="分支切换" tabindex="-1"><a class="header-anchor" href="#分支切换" aria-hidden="true">#</a> 分支切换</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> checkout testing  <span class="token comment"># git checkout &lt;分支名></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样 <code v-pre>HEAD</code> 就指向 <code v-pre>testing</code> 分支了。</p>
<p><img src="https://cdn.staticaly.com/gh/xugaoyi/image_store/blog/20200906205917.png" alt=""></p>
<p align='center'>图6. HEAD 指向当前所在的分支 ▲</p>
<p>那么，这样的实现方式会给我们带来什么好处呢？ 现在不妨再提交一次：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">vim</span> test.rb
$ <span class="token function">git</span> commit <span class="token parameter variable">-a</span> <span class="token parameter variable">-m</span> <span class="token string">'made a change'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.staticaly.com/gh/xugaoyi/image_store/blog/20200906210338.png" alt=""></p>
<p align='center'>图7. HEAD 分支随着提交操作自动向前移动 ▲</p>
<p>如图所示，你的 <code v-pre>testing</code> 分支向前移动了，但是 <code v-pre>master</code> 分支却没有，它仍然指向运行 <code v-pre>git checkout</code> 时所指的对象。 这就有意思了，现在我们切换回 <code v-pre>master</code> 分支看看：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://cdn.staticaly.com/gh/xugaoyi/image_store/blog/20200906210810.png" alt=""></p>
<p align='center'>图8. 检出时 HEAD 随之移动 ▲</p>
<p>这条命令<strong>做了两件事</strong>。 <strong>一是使 HEAD 指回 <code v-pre>master</code> 分支，二是将工作目录恢复成 <code v-pre>master</code> 分支所指向的快照内容</strong>。 也就是说，你现在做修改的话，项目将始于一个较旧的版本。 本质上来讲，这就是忽略 <code v-pre>testing</code> 分支所做的修改，以便于向另一个方向进行开发。</p>
<p>我们不妨再稍微做些修改并提交：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">vim</span> test.rb
$ <span class="token function">git</span> commit <span class="token parameter variable">-a</span> <span class="token parameter variable">-m</span> <span class="token string">'made other changes'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，这个项目的提交历史已经产生了分叉（参见 <a href="https://git-scm.com/book/zh/v2/ch00/divergent_history" target="_blank" rel="noopener noreferrer">项目分叉历史<ExternalLinkIcon/></a>）。 因为刚才你创建了一个新分支，并切换过去进行了一些工作，随后又切换回 master 分支进行了另外一些工作。 上述两次改动针对的是不同分支：你可以在不同分支间不断地来回切换和工作，并在时机成熟时将它们合并起来。 而所有这些工作，你需要的命令只有 <code v-pre>branch</code>、<code v-pre>checkout</code> 和 <code v-pre>commit</code>。</p>
<p><img src="https://cdn.staticaly.com/gh/xugaoyi/image_store/blog/20200906211331.png" alt=""></p>
<p align='center'>图9. 项目分叉历史 ▲</p>
<p>你可以简单地使用 <code v-pre>git log</code> 命令查看分叉历史。 运行 <code v-pre>git log --oneline --decorate --graph --all</code> ，它会输出你的提交历史、各个分支的指向以及项目的分支分叉情况。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> log <span class="token parameter variable">--oneline</span> <span class="token parameter variable">--decorate</span> <span class="token parameter variable">--graph</span> <span class="token parameter variable">--all</span>
* c2b9e <span class="token punctuation">(</span>HEAD, master<span class="token punctuation">)</span> made other changes
<span class="token operator">|</span> * 87ab2 <span class="token punctuation">(</span>testing<span class="token punctuation">)</span> made a change
<span class="token operator">|</span>/
* f30ab <span class="token function">add</span> feature
* 34ac2 fixed bug
* 98ca9 initial commit of my project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 Git 的分支实质上仅是包含所指对象校验和（长度为 40 的 SHA-1 值字符串）的文件，所以它的创建和销毁都异常高效。 创建一个新分支就相当于往一个文件中写入 41 个字节（40 个字符和 1 个换行符），如此的简单能不快吗？</p>
<p>这与过去大多数版本控制系统形成了鲜明的对比，它们在创建分支时，将所有的项目文件都复制一遍，并保存到一个特定的目录。 完成这样繁琐的过程通常需要好几秒钟，有时甚至需要好几分钟。所需时间的长短，完全取决于项目的规模。 而在 Git 中，任何规模的项目都能在瞬间创建新分支。 同时，由于每次提交都会记录父对象，所以寻找恰当的合并基础（译注：即共同祖先）也是同样的简单和高效。 这些高效的特性使得 Git 鼓励开发人员频繁地创建和使用分支。</p>
<h3 id="创建分支同时切换" tabindex="-1"><a class="header-anchor" href="#创建分支同时切换" aria-hidden="true">#</a> 创建分支同时切换</h3>
<p>通常我们会在创建一个新分支后立即切换过去，可以使用如下命令：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>newbranchname<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


