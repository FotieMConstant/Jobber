<template>
  <span>
    <div class="mt-16"></div>
    <div class="mt-16"></div>
    <vue-jitsi-meet
      class="mt-16 mb-n16 wrap"
      ref="jitsiRef"
      domain="meet.jit.si"
      :options="jitsiOptions"
    ></vue-jitsi-meet>
  </span>
</template>

<script>
import { JitsiMeet } from "@mycure/vue-jitsi-meet";
export default {
  components: {
    VueJitsiMeet: JitsiMeet,
  },
  computed: {
    jitsiOptions() {
      return {
        roomName: "DevTestRoom",
        width: 1300,
        height: 625,
        noSSL: false,
        userInfo: {
          email: "user@email.com",
          displayName: "Fotie",
        },
        configOverwrite: {
          enableNoisyMicDetection: false,
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_CHROME_EXTENSION_BANNER: false,
        },
        onload: this.onIFrameLoad,
      };
    },
  },
  methods: {
    onIFrameLoad() {
      // do stuff
    },
  },
};
</script>

<style scoped>
.wrap {
  margin-bottom: -10;
}
</style>
