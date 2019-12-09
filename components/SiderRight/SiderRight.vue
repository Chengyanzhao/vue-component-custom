<template>
  <div class="sider-right">
    <div class="wrapper">
      <div class="sider-bar"
           :class="barClass"
           :style="barStyle"
           @click="onSiderBarClick">
        <div class="sider-bar-top"></div>
        <div class="sider-bar-center">
          <span class="icon">
            {{visible?'》':'《'}}
          </span>
        </div>
        <div class="sider-bar-bottom"></div>
      </div>
      <div class="sider-content"
           :class="contentClass"
           :style="contentStyle"
           ref="siderContent">
        <slot ref="box"></slot>
      </div>
    </div>
  </div>
</template>

<script>
const barPositionValues = ['top', 'center', 'bottom']

export default {
  name: 'SiderRight',
  data() {
    return {
      visible: true,
      contentWidth: 0
    }
  },
  props: {
    width: {
      type: String
    },
    barPosition: {
      type: [String, Object],
      default: 'center',
      validator(value) {
        if (typeof value === 'string') {
          return barPositionValues.includes(value)
        }
        return typeof value === 'object'
      }
    }
  },
  watch: {
    width: {
      immediate: true,
      handler(value) {
        this.contentWidth = value
      }
    }
  },
  computed: {
    barClass() {
      if (typeof this.barPosition === 'string') {
        return { [this.barPosition]: true }
      }
      return {}
    },
    barStyle() {
      if (typeof this.barPosition === 'object') {
        return this.barPosition
      } else {
        return {}
      }
    },
    contentStyle() {
      return { width: this.visible ? this.contentWidth + 'px' : 0 }
    },
    contentClass() {
      return { hidden: !this.visible }
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.width) {
        this.contentWidth = this.getContentWidth()
      }
    })
  },
  methods: {
    getContentWidth() {
      return this.$refs.siderContent.offsetWidth
    },
    onSiderBarClick() {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.sider-right {
  display: inline-block;
  .wrapper {
    position: relative;
    .sider-content {
      visibility: initial;
      transform-origin: center right;
      transition: all 0.3s ease-in-out;
      overflow: hidden;
      &.hidden {
        opacity: 0;
        visibility: hidden;
      }
    }
    .sider-bar {
      width: 16px;
      position: absolute;
      left: -16px;
      cursor: pointer;
      user-select: none;
      &.top {
        top: 0;
      }
      &.center {
        top: 50%;
        transform: translateY(-50%);
      }
      &.bottom {
        bottom: 0;
      }
      .sider-bar-top {
        border-color: transparent #bd372f #bd372f transparent;
        border-width: 8px;
        border-style: solid;
      }
      .sider-bar-center {
        display: -webkit-flex; // 设置居中
        align-items: center; // 垂直居中
        justify-content: center; // 水平居中
        height: 50px;
        background-color: #bd372f;
        .icon {
          line-height: 50px;
        }
      }
      .sider-bar-bottom {
        border-color: #bd372f #bd372f transparent transparent;
        border-width: 8px;
        border-style: solid;
      }
    }
  }
}
</style>
