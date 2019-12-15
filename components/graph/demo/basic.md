<cn>
#### 三角形
设置不同的形状和颜色。
</cn>

<us>
#### Triangle
Set different shapes and colors.
</us>

```tpl
<template>
  <div class="row">
    <div class="col">
      <c-triangle />
    </div>
    <div class="col">
      <c-triangle direction="bottom" />
    </div>
    <div class="col">
      <c-triangle direction="right" />
    </div>
    <div class="col">
      <c-triangle direction="left" />
    </div>
    <div class="col">
      <c-triangle :size="20" />
    </div>
     <div class="col">
      <c-triangle :size="{right:30, bottom:60, left: 10 }" />
    </div>
  </div>
</template>

<style>
.row {
  display: flex;
}
.col{
  margin: 0 16px;
}
</style>
```
