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
       v-for="(item, i) in commentsList"
       :key="item.key"
        @dragstart="dragStart(i, $event)" @dragover.prevent
        @dragend="dragEnd" @drop="dragFinish(i, $event)"
        draggable="true"
        style="cursor: move;"
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
      commentsList: [],
      dragging: -1
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
    // reload function
    reloadLeaveComments () {
      const self = this
      self.commentsListDB.on('value', function (data) {
        let tempCommentsList = {}
        tempCommentsList = data.val() ? data.val() : {}
        // 加入key值 並將物件轉成陣列
        self.commentsList = []
        Object.keys(tempCommentsList).forEach(element => {
          tempCommentsList[element].key = element
          self.commentsList.push(tempCommentsList[element])
        })
        console.log(self.commentsList)
        self.commentsList = self.ooxx.ArraySorForKey(self.commentsList, 'sort')
        self.logger.info('載入列表', self.commentsList)
      })
    },
    // insert
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
    // delete
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
    dragStart (which, ev) {
      ev.dataTransfer.setData('Text', this.id)
      ev.dataTransfer.dropEffect = 'move'
      this.dragging = which
      ev.target.style.opacity = '.7'
    },
    dragEnd (ev) {
      this.dragging = -1
      ev.target.style.opacity = '1'
    },
    dragFinish (to, ev) {
      this.moveItem(this.dragging, to)
      // ev.target.style.marginTop = '2px'
      // ev.target.style.marginBottom = '2px'
    },
    moveItem (from, to) {
      const self = this
      // self.commentsList[to]
      // from 從
      // to 到

      // console.log('to', to)
      // console.log('from', from)
      // update

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
    removeItemAt (index) {
      this.commentsList.splice(index, 1)
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
