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
import firebase from "firebase";



export default {
  components: {
    VueJitsiMeet: JitsiMeet,
  },
  data: () => ({
    recruiterEmail: null,
    recruiterName: null,
    randomRoomName: null,
    uidForMeeting: null,
  }),
  computed: {
    jitsiOptions() {
      return {
        roomName: this.uidForMeeting,
        width: 1365,
        height: 592,
        noSSL: false,
        userInfo: {
          email: this.recruiterEmail,
          displayName: this.recruiterName,
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

// function to generate random string for the meeting link
    randomPeerCallId(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
  },

 mounted: function () {
       // Getting the current login user
    const user = firebase.auth().currentUser;
    this.uidForMeeting = user.uid;
    this.recruiterName = user.displayName; //setting recruiters name
    this.randomRoomName = this.randomPeerCallId(10); // settign the room id with randomly generated strings
    console.log("Interview room id =>"+this.randomRoomName)
 },

};
</script>

<style scoped>
.wrap {
  margin-bottom: -10;
}
</style>
