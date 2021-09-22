---
title: Sam's Blog
description: This is Sam's blog.
---

<script>
  import { globToArray } from '$lib/utilities'
  const modules = import.meta.globEager(`./blog/**/*.md`)
  const posts = globToArray(modules)
</script>

{#each posts as post}

<article>
<svelte:component this={post.default} />
<a svelte:prefetch class="read-more" href={post.path}>➜</a>
</article>

{/each}

<style>
  article {
    border: 1px solid #ccc;
    padding: 0px 20px 20px;
    margin: 20px 0px;
  }

  .read-more {
    display: block;
    text-align: right;
  }
</style>
