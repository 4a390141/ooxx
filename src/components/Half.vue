<template>
  <div
    class="half"
    ref="half"
    @mousemove.stop.prevent="mouseMoveInWrap"
    @touchmove.stop.prevent="touchMoveInWrap"
    @touchend.stop.prevent="mouseUpInLine"
  >
    <div class="topper" ref="topper">
      <slot name="top"></slot>
    </div>
    <div
      class="liner"
      ref="liner"
      @mousedown.stop="mouseDownInLine"
      @touchstart.stop="mouseDownInLine"
    >
      <div class="top-diamond"></div>
      <div class="bottom-diamond"></div>
    </div>
    <div class="bottommer">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
<script>
// vue
// https://paper.dropbox.com/doc/Vue-ADvo0tRHmXqoJGIfAs4N9
// firebase
// https://paper.dropbox.com/doc/Vue-Cli-pbpJGPUyjZy5xuoSFffId

export default {
  name: 'half',
  components: {},
  data () {
    return {
      downStatus: false,
      mousePointXY: 0,
      originMousePointXY: 0
    }
  },
  computed: {},
  watch: {
    mousePointXY: {
      handler (status) {
        const self = this
        if (self.downStatus) {
          self.$refs.topper.style.height = self.mousePointXY.toString() + 'px'
          self.$refs.half.style.cursor = 'grabbing'
        }
      }
    },
    downStatus: {
      handler (status) {
        const self = this
        if (status) {
          self.$refs.liner.style.cursor = 'grabbing'
        } else {
          self.$refs.liner.style.cursor = 'grab'
        }
      }
    }
  },
  methods: {
    mouseDownInLine () {
      const self = this
      self.downStatus = true
    },
    mouseUpInLine () {
      const self = this
      self.downStatus = false
      self.$refs.half.style.cursor = 'unset'
    },
    mouseMoveInWrap (event) {
      const self = this
      self.mousePointXY = event.clientY - 76
    },
    touchMoveInWrap (event) {
      const self = this
      self.mousePointXY = event.touches[0].clientY - 76
    }
  },
  mounted () {
    const self = this

    document.onmouseup = () => {
      return self.mouseUpInLine()
    }
  }
}
</script>
<style lang="scss">
.half {
  height: calc(100vh - 76px);
  display: flex;
  flex-direction: column;
  div {
    width: 98%;
    margin: auto;
  }
  .liner {
    background-color: darkcyan;
    height: 10px;
    margin: 7px auto;
    flex: none;
    cursor: grab;
  }
  .top-diamond {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 10px 15px 10px;
    border-color: transparent transparent #007bff transparent;
    transform: translateY(-15px);
  }
  .bottom-diamond {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 10px 0px 10px;
    border-color: #007bff transparent transparent transparent;
    transform: translateY(-5px);
  }

  .topper {
    // height: calc(50vh - 53px);
    border: 1px solid rgb(170, 170, 170);
    height: 50%;
    overflow-y: auto;
  }
  .bottommer {
    // height: calc(50vh - 53px);
    border: 1px solid rgb(170, 170, 170);
    flex: 1;
    overflow-y: auto;
  }
}
</style>
