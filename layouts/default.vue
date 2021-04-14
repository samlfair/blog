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
      border: 1px solid rgba(0, 0, 0, 0.3);
      background: rgba(0, 0, 0, 0.02);
      transition: all 0.4s;
      border-radius: 2px;
      box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1),
        inset 0px 0px 2px rgba(0, 0, 0, 0.15);
      padding: 0.5rem 1.5rem 1rem;
      margin: 1rem 0;
      a {
        text-decoration: none;
      }
      .date {
        display: block;
        font-size: 0.9rem;
        color: rgba(0, 0, 0, 0.5);
        line-height: 3rem;
      }
      .tag {
        display: inline-block;
        font-size: 0.7rem;
        background: white;
        color: rgba(0, 0, 0, 0.5);
        padding: 0.4rem 0.7rem 0.5rem;
        margin-bottom: 0.3rem;
        border-radius: 1rem;
        border: 1px solid rgba(0, 0, 0, 0.3);
      }
      &:hover {
        background: rgba(0, 0, 0, 0.03);
      }
    }
  }
  .slice-text-block {
    & p,
    & ul,
    & ol {
      padding-bottom: 1rem;
      font-size: 1.15rem;
      line-height: 1.4211;
      font-weight: 400;
      letter-spacing: 0.012em;
      margin-top: 0;
    }
    a {
      text-decoration: none;
      color: rgba(94, 94, 255, 0.7);
      &:hover {
        color: rgba(94, 94, 255, 0.9);
      }
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
      // background: lightgrey;
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
