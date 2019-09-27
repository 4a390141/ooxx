<template>
  <div class="home">
    <a href="javascript:;">
      <router-link to="/leaveComments">List</router-link>
    </a>
    <!-- <font-awesome-icon :icon="['fa', 'coffee']" />
    <font-awesome-icon :icon="['fab', 'google-plus']" /> -->
  </div>
</template>
<script>
// vue
// https://paper.dropbox.com/doc/Vue-ADvo0tRHmXqoJGIfAs4N9
// firebase
// https://paper.dropbox.com/doc/Vue-Cli-pbpJGPUyjZy5xuoSFffId

// import firebase from 'firebase'

export default {
  name: 'home',
  components: {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  mounted () {
    // const self = this
  }
}
</script>
<style lang="scss">
.home {
  padding: 10px;
  width: 100%;
  overflow-x: hidden;
}
</style>
