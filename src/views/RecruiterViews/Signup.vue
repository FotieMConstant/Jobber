<template>
  <div class="signup">
    <Header/>
    <Signup/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/rectruiterComponents/Signup.vue'
import Header from "@/components/rectruiterComponents/Header.vue";


export default {
  name: 'signup',
  components: {
    Signup,
    Header
  }
}
</script>
