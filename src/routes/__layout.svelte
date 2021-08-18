<main>
  <nav>
    <a class="title" href="/">Sam's Blog</a>
  </nav>
  <slot></slot>
</main>

<style>
  :global(:any-link){
    color: inherit;
    text-decoration: inherit;
  }

 main {
    margin-left: 20px;
    max-width: 750px;
  }

  nav {
    font-family: 'Comic Sans MS';
  }

  .title {
    font-weight: bold;
  }
</style>