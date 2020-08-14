<template>
  <div class="signup">
    <Header/>
    <Signup/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/userComponents/Signup.vue'
import Header from '@/components/userComponents/Header.vue'


export default {
  name: 'signup',
  components: {
    Signup,
    Header
  }
}
</script>
