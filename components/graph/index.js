import Traiangle from './triangle'

const Graph = {
  Traiangle,
}

/* istanbul ignore next */
Graph.install = function (Vue) {
  Vue.component(Traiangle.name, Traiangle)
}

export default Graph