<template>
  <div class="calculator">
    <div class="display">{{number || '0'}}</div>
    <div v-on:click="clear()" class="btn clear">C</div>
    <div v-on:click="remove()" class="btn remove">Del</div>
    <div v-on:click="key('7')" class="btn">7</div>
    <div v-on:click="key('8')" class="btn">8</div>
    <div v-on:click="key('9')" class="btn">9</div>
    <div v-on:click="key('/')" class="btn operator">/</div>
    <div v-on:click="key('4')" class="btn">4</div>
    <div v-on:click="key('5')" class="btn">5</div>
    <div v-on:click="key('6')" class="btn">6</div>
    <div v-on:click="key('*')" class="btn operator">x</div>
    <div v-on:click="key('1')" class="btn">1</div>
    <div v-on:click="key('2')" class="btn">2</div>
    <div v-on:click="key('3')" class="btn">3</div>
    <div v-on:click="key('-')" class="btn operator">-</div>
    <div v-on:click="key('0')" class="btn">0</div>
    <div v-on:click="key('.')" class="btn">.</div>
    <div v-on:click="key('+')" class="btn operator">+</div>
    <div v-on:click="equal()" class="btn operator">=</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: ''
    }
  },
  methods: {
    key: function(num) {
      return this.number += num;
    },
    clear: function() {
      return this.number = '';
    },
    equal: function() {
      let equal = this.number;
      return this.number = eval(equal);
    },
    remove: function() {
      this.number = this.number.slice(0, -1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator {
  margin: 0 auto;
  width: 400px;
  display: grid;
  font-size: 40px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: #fff;
}
.btn {
  background-color: #F2F2F2;
  border: 1px solid #999;
  cursor: pointer;
}
.clear {
  grid-column: 1 / 3;
}
.remove {
  grid-column: 3 / 5;
}
.operator {
  background-color: rgb(49, 120, 148);
  color: #fff;
}
</style>
