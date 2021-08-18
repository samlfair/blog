<script>
  export let title;
  export let description;
  export let date;

  const dateObject = new Date(date || 0);
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const displayDate = new Intl.DateTimeFormat('en-US', dateOptions).format(dateObject)
  const isoDate = dateObject.toISOString()
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<article>
  <header>
    <h2>{title || "Untitled"}</h2>
    {#if date}
      <p><time datetime={isoDate}>{date ? displayDate : ""}</time></p>
    {/if}
    {#if description}
      <p class="description">{description}</p>
    {/if}
  </header>
  <slot></slot>
</article>

<style>
  p {
    margin: 0 0 .7em;
  }
  time {
    opacity: 50%;
    text-transform: uppercase;
    font-size: .7em;
    letter-spacing: .5px;
  }

  .description {
    opacity: 60%;
    font-size: 1.2em;
  }
</style>