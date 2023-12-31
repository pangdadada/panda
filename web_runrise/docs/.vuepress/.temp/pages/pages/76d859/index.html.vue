<template><div><h1 id="git工具-交互式暂存" tabindex="-1"><a class="header-anchor" href="#git工具-交互式暂存" aria-hidden="true">#</a> Git工具-交互式暂存</h1>
<p>本节中的几个交互式 Git 命令可以帮助你将文件的特定部分组合成提交。 当你在修改了大量文件后，希望这些改动能拆分为若干提交而不是混杂在一起成为一个提交时，这几个工具会非常有用。 通过这种方式，可以确保提交是逻辑上独立的变更集，同时也会使其他开发者在与你工作时很容易地审核。 如果运行 <code v-pre>git add</code> 时使用 <code v-pre>-i</code> 或者 <code v-pre>--interactive</code> 选项，Git 将会进入一个交互式终端模式，显示类似下面的东西：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-i</span>
           staged     unstaged path
  <span class="token number">1</span>:    unchanged        +0/-1 TODO
  <span class="token number">2</span>:    unchanged        +1/-1 index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb

*** Commands ***
  <span class="token number">1</span>: <span class="token punctuation">[</span>s<span class="token punctuation">]</span>tatus     <span class="token number">2</span>: <span class="token punctuation">[</span>u<span class="token punctuation">]</span>pdate      <span class="token number">3</span>: <span class="token punctuation">[</span>r<span class="token punctuation">]</span>evert     <span class="token number">4</span>: <span class="token punctuation">[</span>a<span class="token punctuation">]</span>dd untracked
  <span class="token number">5</span>: <span class="token punctuation">[</span>p<span class="token punctuation">]</span>atch      <span class="token number">6</span>: <span class="token punctuation">[</span>d<span class="token punctuation">]</span>iff        <span class="token number">7</span>: <span class="token punctuation">[</span>q<span class="token punctuation">]</span>uit       <span class="token number">8</span>: <span class="token punctuation">[</span>h<span class="token punctuation">]</span>elp
What now<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到这个命令以和平时非常不同的视图显示了暂存区——基本上与 <code v-pre>git status</code> 是相同的信息，但是更简明扼要一些。 它将暂存的修改列在左侧，未暂存的修改列在右侧。</p>
<p>在这块区域后是“Commands”命令区域。 在这里你可以做一些工作，包括暂存文件、取消暂存文件、暂存文件的一部分、添加未被追踪的文件、显示暂存内容的区别。</p>
<h2 id="暂存与取消暂存文件" tabindex="-1"><a class="header-anchor" href="#暂存与取消暂存文件" aria-hidden="true">#</a> 暂存与取消暂存文件</h2>
<p>如果在 <code v-pre>What now&gt;</code> 提示符后键入 <code v-pre>u</code> 或 <code v-pre>2</code>（更新），它会问你想要暂存哪个文件：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>What now<span class="token operator">></span> u
           staged     unstaged path
  <span class="token number">1</span>:    unchanged        +0/-1 TODO
  <span class="token number">2</span>:    unchanged        +1/-1 index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb
Update<span class="token operator">>></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要暂存 <code v-pre>TODO</code> 和 <code v-pre>index.html</code> 文件，可以输入数字：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Update<span class="token operator">>></span> <span class="token number">1,2</span>
           staged     unstaged path
* <span class="token number">1</span>:    unchanged        +0/-1 TODO
* <span class="token number">2</span>:    unchanged        +1/-1 index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb
Update<span class="token operator">>></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个文件前面的 <code v-pre>*</code> 意味着选中的文件将会被暂存。 如果在 <code v-pre>Update&gt;&gt;</code> 提示符后不输入任何东西并直接按回车，Git 将会暂存之前选择的文件：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Update<span class="token operator">>></span>
updated <span class="token number">2</span> paths

*** Commands ***
  <span class="token number">1</span>: <span class="token punctuation">[</span>s<span class="token punctuation">]</span>tatus     <span class="token number">2</span>: <span class="token punctuation">[</span>u<span class="token punctuation">]</span>pdate      <span class="token number">3</span>: <span class="token punctuation">[</span>r<span class="token punctuation">]</span>evert     <span class="token number">4</span>: <span class="token punctuation">[</span>a<span class="token punctuation">]</span>dd untracked
  <span class="token number">5</span>: <span class="token punctuation">[</span>p<span class="token punctuation">]</span>atch      <span class="token number">6</span>: <span class="token punctuation">[</span>d<span class="token punctuation">]</span>iff        <span class="token number">7</span>: <span class="token punctuation">[</span>q<span class="token punctuation">]</span>uit       <span class="token number">8</span>: <span class="token punctuation">[</span>h<span class="token punctuation">]</span>elp
What now<span class="token operator">></span> s
           staged     unstaged path
  <span class="token number">1</span>:        +0/-1      nothing TODO
  <span class="token number">2</span>:        +1/-1      nothing index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在可以看到 <code v-pre>TODO</code> 与 <code v-pre>index.html</code> 文件已经被暂存而 <code v-pre>simplegit.rb</code> 文件还未被暂存。 如果这时想要取消暂存 TODO 文件，使用 <code v-pre>r</code> 或 <code v-pre>3</code>（撤消）选项：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>*** Commands ***
  <span class="token number">1</span>: <span class="token punctuation">[</span>s<span class="token punctuation">]</span>tatus     <span class="token number">2</span>: <span class="token punctuation">[</span>u<span class="token punctuation">]</span>pdate      <span class="token number">3</span>: <span class="token punctuation">[</span>r<span class="token punctuation">]</span>evert     <span class="token number">4</span>: <span class="token punctuation">[</span>a<span class="token punctuation">]</span>dd untracked
  <span class="token number">5</span>: <span class="token punctuation">[</span>p<span class="token punctuation">]</span>atch      <span class="token number">6</span>: <span class="token punctuation">[</span>d<span class="token punctuation">]</span>iff        <span class="token number">7</span>: <span class="token punctuation">[</span>q<span class="token punctuation">]</span>uit       <span class="token number">8</span>: <span class="token punctuation">[</span>h<span class="token punctuation">]</span>elp
What now<span class="token operator">></span> r
           staged     unstaged path
  <span class="token number">1</span>:        +0/-1      nothing TODO
  <span class="token number">2</span>:        +1/-1      nothing index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb
Revert<span class="token operator">>></span> <span class="token number">1</span>
           staged     unstaged path
* <span class="token number">1</span>:        +0/-1      nothing TODO
  <span class="token number">2</span>:        +1/-1      nothing index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb
Revert<span class="token operator">>></span> <span class="token punctuation">[</span>enter<span class="token punctuation">]</span>
reverted one path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看 Git 状态，可以看到已经取消暂存 <code v-pre>TODO</code> 文件：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>*** Commands ***
  <span class="token number">1</span>: <span class="token punctuation">[</span>s<span class="token punctuation">]</span>tatus     <span class="token number">2</span>: <span class="token punctuation">[</span>u<span class="token punctuation">]</span>pdate      <span class="token number">3</span>: <span class="token punctuation">[</span>r<span class="token punctuation">]</span>evert     <span class="token number">4</span>: <span class="token punctuation">[</span>a<span class="token punctuation">]</span>dd untracked
  <span class="token number">5</span>: <span class="token punctuation">[</span>p<span class="token punctuation">]</span>atch      <span class="token number">6</span>: <span class="token punctuation">[</span>d<span class="token punctuation">]</span>iff        <span class="token number">7</span>: <span class="token punctuation">[</span>q<span class="token punctuation">]</span>uit       <span class="token number">8</span>: <span class="token punctuation">[</span>h<span class="token punctuation">]</span>elp
What now<span class="token operator">></span> s
           staged     unstaged path
  <span class="token number">1</span>:    unchanged        +0/-1 TODO
  <span class="token number">2</span>:        +1/-1      nothing index.html
  <span class="token number">3</span>:    unchanged        +5/-1 lib/simplegit.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要查看已暂存内容的区别，可以使用 <code v-pre>d</code> 或 <code v-pre>6</code>（区别）命令。 它会显示暂存文件的一个列表，可以从中选择想要查看的暂存区别。 这跟你在命令行指定 <code v-pre>git diff --cached</code> 非常相似：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>*** Commands ***
  <span class="token number">1</span>: <span class="token punctuation">[</span>s<span class="token punctuation">]</span>tatus     <span class="token number">2</span>: <span class="token punctuation">[</span>u<span class="token punctuation">]</span>pdate      <span class="token number">3</span>: <span class="token punctuation">[</span>r<span class="token punctuation">]</span>evert     <span class="token number">4</span>: <span class="token punctuation">[</span>a<span class="token punctuation">]</span>dd untracked
  <span class="token number">5</span>: <span class="token punctuation">[</span>p<span class="token punctuation">]</span>atch      <span class="token number">6</span>: <span class="token punctuation">[</span>d<span class="token punctuation">]</span>iff        <span class="token number">7</span>: <span class="token punctuation">[</span>q<span class="token punctuation">]</span>uit       <span class="token number">8</span>: <span class="token punctuation">[</span>h<span class="token punctuation">]</span>elp
What now<span class="token operator">></span> d
           staged     unstaged path
  <span class="token number">1</span>:        +1/-1      nothing index.html
Review diff<span class="token operator">>></span> <span class="token number">1</span>
<span class="token function">diff</span> <span class="token parameter variable">--git</span> a/index.html b/index.html
index 4d07108<span class="token punctuation">..</span>4335f49 <span class="token number">100644</span>
--- a/index.html
+++ b/index.html
@@ -16,7 +16,7 @@ Date Finder

 <span class="token operator">&lt;</span>p <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">"out"</span><span class="token operator">></span><span class="token punctuation">..</span>.<span class="token operator">&lt;</span>/p<span class="token operator">></span>

-<span class="token operator">&lt;</span>div <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">"footer"</span><span class="token operator">></span>contact <span class="token builtin class-name">:</span> support@github.com<span class="token operator">&lt;</span>/div<span class="token operator">></span>
+<span class="token operator">&lt;</span>div <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token string">"footer"</span><span class="token operator">></span>contact <span class="token builtin class-name">:</span> email.support@github.com<span class="token operator">&lt;</span>/div<span class="token operator">></span>

 <span class="token operator">&lt;</span>script <span class="token assign-left variable">type</span><span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这些基本命令，可以使用交互式添加模式来轻松地处理暂存区。</p>
<h2 id="暂存补丁" tabindex="-1"><a class="header-anchor" href="#暂存补丁" aria-hidden="true">#</a> 暂存补丁</h2>
<p>Git 也可以暂存文件的特定部分。 例如，如果在 simplegit.rb 文件中做了两处修改，但只想要暂存其中的一个而不是另一个，Git 会帮你轻松地完成。 在和上一节一样的交互式提示符中，输入 <code v-pre>p</code> 或 <code v-pre>5</code>（补丁）。 Git 会询问你想要部分暂存哪些文件；然后，对已选择文件的每一个部分，它都会一个个地显示文件区别并询问你是否想要暂存它们：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">diff</span> <span class="token parameter variable">--git</span> a/lib/simplegit.rb b/lib/simplegit.rb
index dd5ecc4<span class="token punctuation">..</span>57399e0 <span class="token number">100644</span>
--- a/lib/simplegit.rb
+++ b/lib/simplegit.rb
@@ -22,7 +22,7 @@ class SimpleGit
   end

   def log<span class="token punctuation">(</span>treeish <span class="token operator">=</span> <span class="token string">'master'</span><span class="token punctuation">)</span>
-    command<span class="token punctuation">(</span><span class="token string">"git log -n 25 #{treeish}"</span><span class="token punctuation">)</span>
+    command<span class="token punctuation">(</span><span class="token string">"git log -n 30 #{treeish}"</span><span class="token punctuation">)</span>
   end

   def blame<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
Stage this hunk <span class="token punctuation">[</span>y,n,a,d,/,j,J,g,e,?<span class="token punctuation">]</span>?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时有很多选项。 输入 <code v-pre>?</code> 显示所有可以使用的命令列表：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Stage this hunk <span class="token punctuation">[</span>y,n,a,d,/,j,J,g,e,?<span class="token punctuation">]</span>? ?
y - stage this hunk
n - <span class="token keyword">do</span> not stage this hunk
a - stage this and all the remaining hunks <span class="token keyword">in</span> the <span class="token function">file</span>
d - <span class="token keyword">do</span> not stage this hunk nor any of the remaining hunks <span class="token keyword">in</span> the <span class="token function">file</span>
g - <span class="token keyword">select</span> a hunk to go to
/ - search <span class="token keyword">for</span> a hunk matching the given regex
j - leave this hunk undecided, see next undecided hunk
J - leave this hunk undecided, see next hunk
k - leave this hunk undecided, see previous undecided hunk
K - leave this hunk undecided, see previous hunk
s - <span class="token function">split</span> the current hunk into smaller hunks
e - manually edit the current hunk
? - print <span class="token builtin class-name">help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常情况下可以输入 <code v-pre>y</code> 或 <code v-pre>n</code> 来选择是否要暂存每一个区块， 当然，暂存特定文件中的所有部分或为之后的选择跳过一个区块也是非常有用的。 如果你只暂存文件的一部分，状态输出可能会像下面这样：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>What now<span class="token operator">></span> <span class="token number">1</span>
           staged     unstaged path
  <span class="token number">1</span>:    unchanged        +0/-1 TODO
  <span class="token number">2</span>:        +1/-1      nothing index.html
  <span class="token number">3</span>:        +1/-1        +4/-0 lib/simplegit.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>simplegit.rb</code> 文件的状态很有趣。 它显示出若干行被暂存与若干行未被暂存。 已经部分地暂存了这个文件。 在这时，可以退出交互式添加脚本并且运行 <code v-pre>git commit</code> 来提交部分暂存的文件。</p>
<p>也可以不必在交互式添加模式中做部分文件暂存——可以在命令行中使用 <code v-pre>git add -p</code> 或 <code v-pre>git add --patch</code> 来启动同样的脚本。</p>
<p>更进一步地，可以使用 <code v-pre>git reset --patch</code> 命令的补丁模式来部分重置文件， 通过 <code v-pre>git checkout --patch</code> 命令来部分检出文件与 <code v-pre>git stash save --patch</code> 命令来部分暂存文件。 我们将会在接触这些命令的高级使用方法时了解更多详细信息。</p>
</div></template>


