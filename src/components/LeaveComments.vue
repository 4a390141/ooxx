<template>
  <div class="leave-comments">
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
            <!-- 3到30字以內 -->
          </b-form-invalid-feedback>
          <label for="feedback-msg">value</label>
          <b-input v-model="msg" :state="msg_validation" id="feedback-msg"></b-input>
          <b-form-invalid-feedback :state="msg_validation">
            <!-- 100字以內唷 -->
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
       v-for="(item, i) in commentsList"
       :key="item.key"
        @dragstart="dragStart(i, $event)" @dragover.prevent
        @dragend="dragEnd" @drop="dragFinish(i, $event)"
        draggable="true"
        style="cursor: move; margin: 5px 0;"
        @click.stop.prevent="ooxx.copyText(item.name)"
      >
        <b-card-text @click.stop.prevent="ooxx.copyText(item.msg)">
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
      commentsList: [],
      dragging: -1
    }
  },
  computed: {
    name_validation () {
      return this.name.length > 2 && this.name.length < 31
    },
    msg_validation () {
      return this.msg.length >= 0 && this.msg.length < 101
    }
  },
  methods: {
    // reload
    reloadLeaveComments () {
      const self = this
      self.msg = ''
      self.name = ''
      let tempCommentsList = {}
      self.commentsListDB.on('value', function (data) {
        tempCommentsList = data.val() ? data.val() : {}
        // 加入key值 並將物件轉成陣列
        self.commentsList = []
        Object.keys(tempCommentsList).forEach(element => {
          tempCommentsList[element].key = element
          self.commentsList.push(tempCommentsList[element])
        })
        self.commentsList = self.ooxx.ArraySorForKey(self.commentsList, 'sort')
        self.logger.info('載入列表', self.commentsList)
      })
    },
    // delete api
    deleteComment (key) {
      const self = this
      self.commentsListDB.child(key).remove()
      self.reloadLeaveComments()
    },
    // insert api
    insertComment (param) {
      const self = this
      self.commentsListDB.push(param)
    },
    // drag start to dataTransfer
    dragStart (index, event) {
      const self = this
      event.dataTransfer.setData('Text', this.id)
      event.dataTransfer.dropEffect = 'move'
      self.dragging = index
      event.target.style.opacity = '.7'
    },
    dragEnd (event) {
      const self = this
      self.dragging = -1
      event.target.style.opacity = '1'
    },
    // drop and move
    dragFinish (to, event) {
      const self = this
      self.moveItem(self.dragging, to)
      // ev.target.style.marginTop = '2px'
      // ev.target.style.marginBottom = '2px'
    },
    // update api for move
    moveItem (from, to) {
      const self = this
      // self.commentsList[to]
      // from 從
      // to 到

      let paramTo = self.commentsList[to]
      let paramFrom = self.commentsList[from]
      let temp = paramTo['sort']
      paramTo['sort'] = paramFrom['sort']
      paramFrom['sort'] = temp

      let dbTo = firebase.database().ref('/commentsList/' + self.commentsList[to].key.toString())
      let dbFrom = firebase.database().ref('/commentsList/' + self.commentsList[from].key.toString())
      dbTo.set(paramTo)
      dbFrom.set(paramFrom)
      // self.reloadLeaveComments()
      // if (to === -1) {
      //   this.removeItemAt(from)
      // } else {
      //   this.commentsList.splice(to, 0, this.commentsList.splice(from, 1)[0])
      // }
    },
    // param
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
    // toast
    toast (toaster, title, content) {
      this.counter++
      this.$bvToast.toast(content, {
        title: `${title}`,
        toaster: toaster,
        solid: true,
        appendToast: false,
        variant: 'danger'
      })
    },
    removeItemAt (index) {
      const self = this
      self.commentsList.splice(index, 1)
    }
  },
  mounted () {
    const self = this
    self.reloadLeaveComments()
  }
}
</script>
<style lang="scss">
  .leave-comments{
    padding: 10px;
    width: 100%;
    overflow-x: hidden;
  }
</style>
