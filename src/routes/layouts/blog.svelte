<script>
  import { browser } from "$app/env"
  import Seo from "./seo.svelte"

  export let title;
  export let description;
  export let date;

  const dateObject = new Date(date || 0);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  const displayDate = new Intl.DateTimeFormat('en-US', dateOptions).format(dateObject)
  const isoDate = dateObject.toISOString()
</script>

{#if (browser && window?.location.href.match(/blog/))}
  <Seo { ...{title, description}} />
{/if}

<article>
  <header>
    {#if browser && window?.location.href.match(/blog/)}
      <h2>{title || "Untitled"}</h2>
      {#if date}
        <p><time datetime={isoDate}>{date ? displayDate : ""}</time></p>
      {/if}
    {/if}
  </header>
  <slot></slot>
</article>

<style>
  h2 {
    margin-bottom: .2em;
  }
  p {
    margin: 0 0 .7em;
  }
  time {
    font-weight: bold;
    text-transform: uppercase;
    font-size: .7em;
    letter-spacing: .5px;
    color: #bbb;
  }
</style>