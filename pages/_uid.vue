<template>
  <div class="container">
    <slice-zone :uid="$route.params.uid" type="page" />
  </div>
</template>

<script>
import SliceZone from "vue-slicezone";

export default {
  name: "Page",
  components: {
    SliceZone
  },
  async asyncData({ params, $prismic, error }) {
    const document = await $prismic.api.getByUID("page", params.uid);
    return { document };
  }
};
</script>
