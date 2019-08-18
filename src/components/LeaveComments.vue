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
          <label for="feedback-name">姓名</label>
          <b-input v-model="name" :state="name_validation" id="feedback-name"></b-input>
          <b-form-invalid-feedback :state="name_validation">
            Your user ID must be 3-12 characters long.
          </b-form-invalid-feedback>
          <label for="feedback-msg">留言</label>
          <b-input v-model="msg" :state="msg_validation" id="feedback-msg"></b-input>
          <b-form-invalid-feedback :state="msg_validation">
            Your user ID must be 3-12 characters long.
          </b-form-invalid-feedback>
          <b-button block variant="primary" @click="addComment">Block Level Button</b-button>
      </b-form>
      </b-card>
    </b-card-group>
    <div>
      <b-card bg-variant="dark" text-variant="white" title="Card Title">
        <b-card-text>
          With supporting text below as a natural lead-in to additional content.
        </b-card-text>
      </b-card>
    </div>
</div>
</template>
<script>
// @ is an alias to /src
import firebase from 'firebase'
export default {
  name: 'leaveComments',
  components: {
  },
  data () {
    return {
      commentsList: firebase.database().ref('/commentsList/'),
      name: '',
      msg: '',
      leaveCommentsList: []
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
    addComment () {
      const self = this
      let param = {
        name: self.name,
        msg: self.msg,
        sort: self.leaveCommentsList.length || 0,
        flag: 'N'
      }
      self.insertComment(param)
    },
    insertComment (data) {
      const self = this
      self.commentsList.push(data)
    }
  }
}
</script>
<style lang="scss">
  .leaveComments{
    padding: 10px;
    width: 100%;
  }
</style>
