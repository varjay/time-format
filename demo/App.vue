<template>
  <div id="app">
    传入日期：2018-07-17 14:26<br>
    详细模式：{{test('detail', '2018-07-17 14:26')}}<br>
    简短模式：{{test('short', '2018-07-17 14:26')}}
    <br>
    <br>
    传入时间戳：{{now}}(当前时间)
    <br>
    简短模式：{{test('short', now)}}
    <br>
    详细模式：{{test('detail', now)}}
    <br>
    <br>
    传入时间戳：1546275661000（2019年01月01日 01时01分01秒）
    <br>
    简短模式：{{test('short', 1546275661000)}}
    <br>
    详细模式：{{test('detail', 1546275661000)}}
  </div>
</template>

<script>
import TimeFormat from '../src/index'
window.TimeFormat = TimeFormat
export default {
  data() {
    return {
      now: new Date().getTime(),
    }
  },
  methods: {
    test (type, timestamp) {
      return TimeFormat(type, timestamp)
    }
  }
}
</script>
