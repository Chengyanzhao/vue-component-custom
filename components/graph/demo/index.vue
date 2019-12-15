<script> 
import Basic from './basic'
import CN from '../index.zh-CN.md'
import US from '../index.en-US.md'
const mdOpt = {
  cn: `# Graph 图形
使用css绘制的二维图形。
## 何时使用
当需要使用特殊形状的按钮时使用。
## 代码演示`,
  us: `# Graph
2d graphics drawn using CSS.
## When To Use
Use when special shaped buttons are needed.
## Examples `,
}

export default {
  category: 'Components',
  subtitle: 'graph',
  zhType: '图形',
  type: 'Data Display',
  title: 'Graph',
  render() {
    return (
      <div id="test">
        <md cn={mdOpt.cn} us={mdOpt.us} />
        <Basic />
        <api>
          <CN slot="cn" />
          <US />
        </api>
      </div>
    )
  },
}
</script>
