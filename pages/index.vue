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
    return this.$seo(
      this.$route.path,
      "Title",
      "Description",
      { url: "url", alt: "alt" },
      "🙂"
    );
    // accepts ( path, title, description, image, emoji )
  }
};
</script>
