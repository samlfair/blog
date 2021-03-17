<template>
  <div class="container">
    <slice-zone uid="home" type="page" />
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  name: "Home",
  components: {
    SliceZone
  },
  async asyncData({ params, $prismic, error }) {
    const config = await $prismic.api.getSingle("config");
    return { config };
  },
  head() {
    if (this.config.site_title) {
      return this.$seo(
        this.$route.path,
        this.config.site_title,
        this.config.site_description,
        { url: "url", alt: "alt" },
        this.config.emoji_favicon
      );
    }
    // accepts ( path, title, description, image, emoji )
  }
};
</script>
