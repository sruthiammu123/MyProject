<template>
  <div class="calculator">
    <div class="display">{{number || '0'}}</div>
    <div @click="clear" class="btn clear">C</div>
    <div @click="remove" class="btn remove">Del</div>
    <div @click="append('7')" class="btn">7</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('9')" class="btn">9</div>
    <div @click="divide" class="btn operator">/</div>
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div @click="mutliply" class="btn operator">x</div>
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div @click="minus" class="btn operator">-</div>
    <div @click="append('0')" class="btn">0</div>
    <div @click="dot" class="btn">.</div>
    <div @click="add" class="btn operator">+</div>
    <div @click="equal" class="btn operator">=</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prevNum: null,
      number: '',
      operator: null,
      operatorClicked: false
    }
  },
  methods: {
    clear() {
      this.number = '';
    },
    append(num) {
      if(this.operatorClicked) {
        this.number = '',
        this.operatorClicked = false
      }
      this.number = this.number + num;
    },
    remove() {
      this.number = this.number.slice(0, -1);
    },
    dot() {
      if(this.number.indexOf('.') === -1){
        this.append('.');
      }
    },
    setPrevNum() {
      this.prevNum = this.number;
      this.operatorClicked = true;
    },
    add() {
      this.number = (a, b) => a + b;
      this.setPrevNum();
    },
    minus() {
      this.number = (a, b) => a - b;
      this.setPrevNum();
    },
    multiply() {
      this.number = (a, b) => a * b;
      this.setPrevNum();
    },
    divide() {
      this.number = (a, b) => a / b;
      this.setPrevNum();
    },
    equal() {
      this.number = `${this.operator(
        parseFloat(this.number),
        parseFloat(this.prevNum)
      )}`;
      this.prevNum = null;
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
