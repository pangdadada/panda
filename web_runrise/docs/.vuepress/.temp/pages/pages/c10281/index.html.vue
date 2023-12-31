<template><div><h1 id="rebase分支合并" tabindex="-1"><a class="header-anchor" href="#rebase分支合并" aria-hidden="true">#</a> rebase分支合并</h1>
<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2>
<p>以下 <code v-pre>v2</code> 是某个需求的开发分支， <code v-pre>dev</code>是总的开发分支，<code v-pre>v2</code> 是基于<code v-pre>dev</code>分支签出的。</p>
<p>当完成<code v-pre>v2</code>的开发后，需要把代码合并到<code v-pre>dev</code>，我们可以使用<code v-pre>rebase</code>进行合并：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 首先将 v2 push到远程仓库</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">'xxx'</span>
<span class="token function">git</span> push origin v2

<span class="token comment"># 切换到 dev 拉取最新代码</span>
<span class="token function">git</span> checkout dev
<span class="token function">git</span> pull origin dev

<span class="token comment"># 切换到 v2</span>
<span class="token function">git</span> checkout v2
<span class="token function">git</span> rebase dev <span class="token comment"># 将 v2 的所有[commit] 变基到(应用到) dev</span>

<span class="token comment"># 切换到 dev</span>
<span class="token function">git</span> checkout dev
<span class="token function">git</span> merge v2  <span class="token comment"># 将 dev分支 快进合并 （此时 (HEAD -> dev, v2) [commit] 两个分支指向同一个提交）</span>

<span class="token comment"># 查看 原v2的[commit]记录 是否在dev分支的最前面（变基成功会把v2的提交记录应用到dev分支的最前面）</span>
<span class="token function">git</span> log

	<span class="token comment"># 如果到这一步发现有问题，尝试使用 git --abort中止变基，如果还是有问题的可以在dev分支上使用《后悔药》操作， 再到v2分支上使用《后悔药》操作，即可使两个分支都回退到 rebase变基 之前的状态</span>

<span class="token comment"># 试运行项目是否有问题</span>
<span class="token function">yarn</span> start

<span class="token function">git</span> status <span class="token comment"># 查看状态是否有问题</span>
<span class="token function">git</span> push origin dev <span class="token comment"># 推送到远程仓库的 dev</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变基要遵守的准则" tabindex="-1"><a class="header-anchor" href="#变基要遵守的准则" aria-hidden="true">#</a> 变基要遵守的准则</h3>
<p><strong>几个人同时在一个分支上进行开发和提交时，开发中途请不要私自执行变基，只有在大家都完成工作之后才可以执行变基。</strong></p>
<h3 id="变基的实质" tabindex="-1"><a class="header-anchor" href="#变基的实质" aria-hidden="true">#</a> 变基的实质</h3>
<p>变基操作的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交。
因此，<strong>变基操作过后的分支将不要再使用</strong>。</p>
<h2 id="后悔药" tabindex="-1"><a class="header-anchor" href="#后悔药" aria-hidden="true">#</a> 后悔药</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 查看HEAD指针变动记录</span>
<span class="token function">git</span> reflog
<span class="token comment"># 记录示例(当前分支是v2):</span>
07c398f <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> v2, master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>: checkout: moving from master to v2
07c398f <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> v2, master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>: rebase <span class="token punctuation">(</span>finish<span class="token punctuation">)</span>: returning to refs/heads/master
07c398f <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> v2, master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span>: rebase <span class="token punctuation">(</span>start<span class="token punctuation">)</span>: checkout v2
15a97d8 HEAD@<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>: reset: moving to 15a97d8
07c398f <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> v2, master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span>: merge v2: Fast-forward
15a97d8 HEAD@<span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span>: checkout: moving from v2 to master
07c398f <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> v2, master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span>: rebase <span class="token punctuation">(</span>finish<span class="token punctuation">)</span>: returning to refs/heads/v2
07c398f <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> v2, master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">7</span><span class="token punctuation">}</span>: rebase <span class="token punctuation">(</span>pick<span class="token punctuation">)</span>: C
15a97d8 HEAD@<span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span>: rebase <span class="token punctuation">(</span>start<span class="token punctuation">)</span>: checkout master <span class="token comment"># 首次rebase</span>
d278ecd HEAD@<span class="token punctuation">{</span><span class="token number">9</span><span class="token punctuation">}</span>: checkout: moving from master to v2 <span class="token comment"># rebase前的状态</span>
15a97d8 HEAD@<span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span>: commit: D

<span class="token comment"># 可见，示例中最初的 rebase 操作是 HEAD@{8}，想回退到变基前的状态需让指针指向 HEAD@{9}</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> d278ecd  <span class="token comment"># 重置当前分支的HEAD为指定[commit]，同时重置暂存区和工作区，与指定[commit]一致</span>

<span class="token comment"># 此时打印 log 查看是否回到之前的状态</span>
<span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：此操作只能回退当前的分支，如其他分支也要回退，需要切换到该分支并执行上面操作。</strong></p>
<h2 id="开发期间的rebase操作" tabindex="-1"><a class="header-anchor" href="#开发期间的rebase操作" aria-hidden="true">#</a> 开发期间的rebase操作</h2>
<h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3>
<p>有两个分支：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>dev
*v2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>v2</code> 是基于<code v-pre>dev</code>切出来的。</p>
<p>提交记录如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>		dev
a - b - c
		v2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开发期间，两个分支同时有新的commit ：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>				dev
a - b - c - d - e
		\ - f - g
				v2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前你正在<code v-pre>v2</code>进行开发，<code v-pre>dev</code>也同时进行开发，并有重大的改变，你需要把<code v-pre>dev</code>的提交同步到<code v-pre>v2</code>。</p>
<p><strong>需求： 把<code v-pre>dev</code>中新的提交同步到<code v-pre>v2</code>，且不能影响<code v-pre>dev</code>分支。</strong></p>
<h3 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h3>
<ol>
<li>
<p>基于最新的 <code v-pre>dev</code> 切一个新的分支 <code v-pre>dev-copy</code></p>
<blockquote>
<p><code v-pre>dev-copy</code> 和 <code v-pre>dev</code>  两者的 commit ID 一致。</p>
</blockquote>
</li>
<li>
<p>在<code v-pre>dev-copy</code>中执行rebase，将 <code v-pre>dev-copy</code> 的提交变基到 <code v-pre>v2</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> rebase v2 <span class="token comment"># 将 dev-copy 的提交[commit] 变基到(应用到) v2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>删除原<code v-pre>v2</code>分支，将<code v-pre>dev-copy</code>分支名改为<code v-pre>v2</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 当前在 dev-copy 分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> v2 <span class="token comment"># 删除分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> dev-copy v2 <span class="token comment"># 重命名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="git-cherry-pick" tabindex="-1"><a class="header-anchor" href="#git-cherry-pick" aria-hidden="true">#</a> git cherry-pick</h2>
<p>来源：<a href="http://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html" target="_blank" rel="noopener noreferrer">《git cherry-pick 教程》<ExternalLinkIcon/></a></p>
<p>用于将单个或几个<code v-pre>[commit]</code>复制到另一个分支。</p>
<h3 id="基本应用" tabindex="-1"><a class="header-anchor" href="#基本应用" aria-hidden="true">#</a> 基本应用</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>commitHash<span class="token operator">></span> <span class="token comment"># 将commitHash应用于当前分支</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令就会将指定的提交<code v-pre>commitHash</code>，应用于当前分支。这会在当前分支产生一个新的提交，当然它们的<strong>哈希值会不一样</strong>。</p>
<p>git cherry-pick命令的参数，不一定是提交的哈希值，分支名也是可以的，表示转移该分支的最新提交。</p>
<h3 id="转移多个提交" tabindex="-1"><a class="header-anchor" href="#转移多个提交" aria-hidden="true">#</a> 转移多个提交</h3>
<p>Cherry pick 支持一次转移多个提交。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> cherry-pick <span class="token operator">&lt;</span>HashA<span class="token operator">></span> <span class="token operator">&lt;</span>HashB<span class="token operator">></span> <span class="token comment"># A和B提交</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令将 A 和 B 两个提交应用到当前分支。这会在当前分支生成两个对应的新提交。</p>
<p>如果想要转移一系列的连续提交，可以使用下面的简便语法。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> cherry-pick A<span class="token punctuation">..</span>B <span class="token comment"># A到B提交，不包含A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令可以转移从 A 到 B 的所有提交。它们必须按照正确的顺序放置：提交 A 必须早于提交 B，否则命令将失败，但不会报错。</p>
<p><strong>注意，使用上面的命令，提交 A 将不会包含在 Cherry pick 中。如果要包含提交 A，可以使用下面的语法。</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> cherry-pick A^<span class="token punctuation">..</span>B <span class="token comment"># A到B提交，包含A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


