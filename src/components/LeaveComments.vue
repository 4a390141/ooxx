<template>
  <div class="leaveComments">
    <b-card-group deck>
      <b-card
        border-variant="primary"
        header="輸入"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
      >
        <b-form  @submit.stop.prevent>
          <label for="feedback-name">title</label>
          <b-input v-model="name" :state="name_validation" id="feedback-name"></b-input>
          <b-form-invalid-feedback :state="name_validation">
            Your user ID must be 3-12 characters long.
          </b-form-invalid-feedback>
          <label for="feedback-msg">value</label>
          <b-input v-model="msg" :state="msg_validation" id="feedback-msg"></b-input>
          <b-form-invalid-feedback :state="msg_validation">
            Your user ID must be 3-12 characters long.
          </b-form-invalid-feedback>
          <b-button block variant="primary" @click="addComment">insert</b-button>
      </b-form>
      </b-card>
    </b-card-group>
    <div>
      <b-card
       bg-variant="dark"
       text-variant="white"
       :title="item.name"
       v-for="item of commentsList"
       :key="item.key"
      >
        <b-card-text>
          {{ item.msg }}
        </b-card-text>
        <b-button variant="danger" @click="deleteComment(item.key)">delete</b-button>
      </b-card>
    </div>
</div>
</template>
<script>
// vue
// https://paper.dropbox.com/doc/Vue-ADvo0tRHmXqoJGIfAs4N9
// firebase
// https://paper.dropbox.com/doc/Vue-Cli-pbpJGPUyjZy5xuoSFffId

import firebase from 'firebase'
export default {
  name: 'leaveComments',
  components: {
  },
  data () {
    return {
      commentsListDB: firebase.database().ref('/commentsList/'),
      name: '',
      msg: '',
      commentsList: []
    }
  },
  computed: {
    name_validation () {
      return this.name.length > 2 && this.name.length < 13
    },
    msg_validation () {
      return this.msg.length > 2 && this.msg.length < 13
    }
  },
  methods: {
    reloadLeaveComments () {
      const self = this
      self.commentsListDB.on('value', function (data) {
        self.commentsList = data.val() ? data.val() : {}
        Object.keys(self.commentsList).forEach(element => {
          self.commentsList[element].key = element
        })
        console.log('commentsList', self.commentsList)
      })
    },
    addComment () {
      const self = this
      let param = {
        name: self.name,
        msg: self.msg,
        sort: self.commentsList.length || 0,
        flag: 'N'
      }
      self.insertComment(param)
    },
    deleteComment (key) {
      const self = this
      self.commentsListDB.child(key).remove()
    },
    insertComment (data) {
      const self = this
      self.commentsListDB.push(data)
    }
  },
  mounted () {
    const self = this
    self.reloadLeaveComments()
  }
}
</script>
<style lang="scss">
  .leaveComments{
    padding: 10px;
    width: 100%;
  }
</style>
