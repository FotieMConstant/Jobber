<template>
<v-app>
  <div class="Jobs">
    <Header/>
  </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/userComponents/Header.vue'

export default {
  name: 'Jobs',
  components: {
    Header
  }
}
</script>
