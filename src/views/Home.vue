<template>
  <div class="home">
    <span role="image" aria-label="🎲" id="logo">🎲</span>
    <Hello msg="Here you can donate some money"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'

export default {
  name: 'Home',
  components: {
    Hello
  }
}
</script>
