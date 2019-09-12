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
            3到16字以內
          </b-form-invalid-feedback>
          <label for="feedback-msg">value</label>
          <b-input v-model="msg" :state="msg_validation" id="feedback-msg"></b-input>
          <b-form-invalid-feedback :state="msg_validation">
            100字以內唷
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
       v-for="item in commentsList"
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
      return this.name.length > 2 && this.name.length < 17
    },
    msg_validation () {
      return this.msg.length >= 0 && this.msg.length < 101
    }
  },
  methods: {
    reloadLeaveComments () {
      const self = this
      self.commentsListDB.on('value', function (data) {
        let tempCommentsList = data.val() ? data.val() : {}
        // 加入key值 並將物件轉成陣列
        self.commentsList = []
        Object.keys(tempCommentsList).forEach(element => {
          tempCommentsList[element].key = element
          self.commentsList.push(tempCommentsList[element])
        })
        self.logger.info('載入列表', self.commentsList)
      })
    },
    addComment () {
      const self = this
      let sort = self.ooxx.getMaxOfArray(self.commentsList, 'sort')
      let param = {
        name: self.name,
        msg: self.msg,
        sort: sort + 1 || 0,
        flag: 'N'
      }

      if (self.name_validation && self.msg_validation) {
        self.logger.info('送出 param', param)
        self.insertComment(param)
      } else {
        self.toast('b-toaster-top-center', 'Error', '格式不符')
        self.logger.warn('name_validation', self.name_validation)
        self.logger.warn('msg_validation', self.msg_validation)
      }
    },
    deleteComment (key) {
      const self = this
      self.commentsListDB.child(key).remove()
      self.reloadLeaveComments()
    },
    insertComment (param) {
      const self = this
      self.commentsListDB.push(param)
    },
    toast (toaster, title, content) {
      this.counter++
      this.$bvToast.toast(content, {
        title: `${title}`,
        toaster: toaster,
        solid: true,
        appendToast: false,
        variant: 'danger'
      })
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
    overflow-x: hidden;
  }
</style>
