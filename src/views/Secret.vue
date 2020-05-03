<template>
  <div class="component">
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Beware the eastereggs!'
    }
  }
}
</script>

<style scoped>
.component {
  background: #e8e8e8;
  min-height: 400px;
}
</style>
