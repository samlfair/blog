<script>
  import globToArray from '$lib/globToArray'
  const modules = import.meta.globEager('./blog/*.md')
  const posts = globToArray(modules)
</script>

# Sam's Blog

{#each posts as post}

## [{post.metadata.title}]({post.path})

{post.metadata.description || ""}

{/each}
