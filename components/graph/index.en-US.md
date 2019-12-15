
## API

| Property  | Description                                                                   | Type                              | Default |
| --------- | ----------------------------------------------------------------------------- | --------------------------------- | ------- |
| direction | directions of vertex angle, which can be one of `top` `right` `bottom` `left` | string                            | top     |
| bgColor   | background color of graph                                                     | string                            | -       |
| size      | The distance from the vertex to the sides                                     | number \| {top,right,bottom,left} | 50      |

### events
| Events Name | Description                             | Arguments       |
| ----------- | --------------------------------------- | --------------- |
| click       | set the handler to handle `click` event | (event) => void |
