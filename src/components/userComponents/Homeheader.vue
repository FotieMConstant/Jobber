<template>
  <v-card elevation="4" max-width="100%">
    <v-system-bar lights-out></v-system-bar>
    <v-carousel
      :continuous="true"
      :cycle="true"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="300"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <div class="mt-16 display-3">Welcome to Jobber</div>
        <div height="100%" tile class="mt-16">
          <v-row class="fill-height mt-16" align="center" justify="center">
            <div class="display-1">{{ item.title }}</div>
          </v-row>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://png.pngtree.com/thumb_back/fw800/background/20190828/pngtree-dark-vector-abstract-background-image_302715.jpg",
          title: "Find your dream job!",
        },
        {
          src:
            "https://png.pngtree.com/thumb_back/fw800/background/20190823/pngtree-banner-3d-glass-abstract-background-image_303778.jpg",
          title: "Track your applications",
        },
        {
          src:
            "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-texture-geometric-black-metal-gradient-image_17809.jpg",
          title: "Get noticed by recruiters",
        },
        {
          src:
            "https://i.pinimg.com/originals/f3/8c/22/f38c22bbe8f5e749c7a99bce6a3f7349.jpg",
          title: "All in one place!",
        },
      ],
    };
  },
};
</script>