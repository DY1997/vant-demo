<template>
  <div class="team-meet">
    <div v-title>{{ title }}</div>

    HELLO, WORLD
  </div>
</template>
<script>

  export default {
    name: 'test',
    components: {
    },
    data () {
      return {
        title: '拾号电商'
      }
    },
    mounted () {
    },
    created () {
    },
    methods: {
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scosped>
  .team-meet {
    min-height: 100vh;
    background: #fff;

  }
</style>
