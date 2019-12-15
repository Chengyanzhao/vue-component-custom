const direction_types = ['top', 'right', 'bottom', 'bottom']

export default {
  name: 'CTriangle',
  props: {
    direction: {
      type: String,
      default: () => direction_types[0],
      validator(value) {
        return (typeof value === 'string' && direction_types.includes(value))
      }
    },
    size: {
      type: Number,
      default: 50,
    },
    bgColor: {
      type: String,
    }
  },
  methods: {
    onclick(e) {
      this.$emit('click', e)
    },
  },
  render() {
    const prefixCls = 'c-triangle'
    const style = { borderWidth: `${this.size}px` }
    if (this.bgColor) {
      style.backgroundColor = this.bgColor
    }
    if (this.size) {
      let borderWidth = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }
      if (typeof this.size === 'string' || typeof this.size === 'number') {
        const dis = Number.parseFloat(this.size)
        borderWidth.top = this.direction === 'top' ? 0 : dis
        borderWidth.right = this.direction === 'right' ? 0 : dis
        borderWidth.bottom = this.direction === 'bottom' ? 0 : dis
        borderWidth.left = this.direction === 'left' ? 0 : dis
      } else {
        Object.assign(borderWidth, this.size)
      }
      style.borderWidth = `${borderWidth.top}px ${borderWidth.right}px ${borderWidth.bottom}px ${borderWidth.left}px`
    }
    const props = {
      class: {
        [prefixCls]: true,
        [this.direction]: true,
      },
      style
    }
    return (
      <div {...props} onClick="this.onclick">
        {this.$slot.default}
      </div>
    )
  },
}