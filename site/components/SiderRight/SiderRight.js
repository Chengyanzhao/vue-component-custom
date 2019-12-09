import './style'
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
  },
  render() {
    const siderBarProps = {
      class: {
        'sider-bar': true,
        ...this.barClass
      },
      style: {
        ...this.barStyle
      }
    }
    const siderContentProps = {
      class: {
        'sider-content': true,
        ...this.contentClass
      },
      style: {
        ...this.contentStyle
      }
    }
    return (
      <div class="sider-right">
        <div class="wrapper">
          <div {...siderBarProps} onClick={this.onSiderBarClick}>
            <div class="sider-bar-top"></div>
            <div class="sider-bar-center">
              <span class="icon">{this.visible ? '》' : '《'}</span>
            </div>
            <div class="sider-bar-bottom"></div>
          </div>
          <div {...siderContentProps} ref="siderContent" >
            {this.$slots.default}
          </div>
        </div >
      </div >
    )
  }
  // render(h) {
  //   return h('div', {
  //     class: 'sider-right'
  //   }, [
  //     h('div', {
  //       class: 'wrapper'
  //     }, [
  //       h('div', {
  //         class: {
  //           'sider-bar': true,
  //           ...this.barClass
  //         },
  //         style: {
  //           ...this.barStyle
  //         },
  //         on: {
  //           click: this.onSiderBarClick
  //         }
  //       }, [
  //         h()
  //       ]),
  //       h('div', {
  //         class: 'sider-content'
  //       })
  //     ])
  //   ])
  // }
}
