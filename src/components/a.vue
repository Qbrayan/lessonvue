<template>
  <span>{{ msg }}</span>
</template>

<script>
export default {
  name: 'header',
  data: function () {
    return {
      msg: 'Hello Brian!'
    }
  },
  created () {
    this.msg = 'I want to see you!'
  }
}
</script>
