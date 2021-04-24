<template>
  <div class="calculator">
      <Display :value="displayValue" />
      <Button id="AC" label="AC" triple @onClick="clearMemory"/>
      <Button id="/" label="/" operation @onClick="setOperation"/>
      <Button id="7" label="7" @onClick="addDigit"/>
      <Button id="8" label="8" @onClick="addDigit"/>
      <Button ref="number_nine" label="9" @onClick="addDigit"/>
      <Button ref="multiplicate_operation" label="*" operation @onClick="setOperation"/>
      <Button id="4" label="4" @onClick="addDigit"/>
      <Button id="5" label="5" @onClick="addDigit"/>
      <Button id="6" label="6" @onClick="addDigit"/>
      <Button id="-" label="-" operation @onClick="setOperation"/>
      <Button id="1" label="1" @onClick="addDigit"/>
      <Button id="2" label="2" @onClick="addDigit"/>
      <Button id="3" label="3" @onClick="addDigit"/>
      <Button id="+" label="+" operation @onClick="setOperation"/>
      <Button id="0" label="0" double @onClick="addDigit"/>
      <Button id="." label="." @onClick="addDigit"/>
      <Button ref="equal" label="=" operation @onClick="setOperation"/>
  </div>
</template>

<script>
import Display from '../components/Display'
import Button from '../components/Button'
export default {

    data(){
        return{
            displayValue: '0',
            clearDisplay: false,
            operation: null,
            values: [0,0],
            current: 0,
            teste: 0
        }
    },
    
    components: {
        Display,
        Button
    },
    methods: {
        clearMemory(){
            Object.assign(this.$data, this.$options.data());
        },
        addDigit(number){
            if(number === "." && this.displayValue.includes(".")) return;

            const clearDisplay = this.displayValue === "0" || this.clearDisplay;
            const currentValue = clearDisplay ? "" : this.displayValue;
            const displayValue = currentValue + number;

            this.displayValue = displayValue;

            if (number !== '.'){
                const i = this.current
                const newValue = parseFloat(displayValue);
                this.values[i] = newValue;
            }
        },
        setOperation(operation){
            if (this.current === 0){
                this.operation = operation;
                this.current = 1;
                this.clearDisplay = true;
            }else{
                 const equals = operation === '=';
                 const currentOperation = this.operation;

                 try{
                     this.values[0] = eval(`${this.values[0]} ${currentOperation} ${this.values[1]}`);

                 }catch(err){
                     this.$emit('onError', err);
                 }

                 this.values[1] = 0;
                 this.displayValue = this.values[0];
                 this.operation = equals ? null : operation;
                 this.current = equals ? 0 : 1
                 this.clearDisplay = !equals;


            }
        },
        sum(){
            console.log('passou')
            this.teste = 4;
        }
    },
    

}
</script>

<style>
.calculator{
    height: 320px;
    width: 325px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}

</style>