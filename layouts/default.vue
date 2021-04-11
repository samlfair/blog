<template>
  <div class="layout-default-outer">
    <div class="layout-default-inner">
      <Nuxt />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-default-outer {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 18px;
  display: flex;
  width: 100vw;
  justify-content: center;
}

.layout-default-inner {
  width: 100%;
  max-width: 700px;
  padding: 20px 10px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

::v-deep {
  // Style slices in here

  .slice-post-feed {
    .post {
      border: 1px solid black;
      padding: 1.5rem 1.5rem 0.6rem;
      margin: 1rem 0;
    }
  }
  .slice-text-block {
    & p,
    & ul,
    & ol {
      padding-bottom: 1rem;
      font-size: 19px;
      line-height: 1.4211;
      font-weight: 400;
      letter-spacing: 0.012em;
      margin-top: 0;
    }
  }

  .slice-image-row {
    .slice-image-row-caption {
      & > * {
        margin: 1rem 0 1rem;
      }
      text-align: center;
      color: grey;
      font-style: oblique;
      font-weight: 200;
      font-size: 0.9rem;
    }
    .image {
      background: lightgrey;
    }
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
