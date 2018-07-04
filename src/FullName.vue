<template>
  <div>
    <div class="form-group">
      <label >Name:</label>
      <input :value="value.name" @input="changedName(false, $event)" type="text" class="form-control">
    </div>
    <div class="form-group">
      <label for="lastName">Last Name:</label>
      <input :value="value.lastName" @input="changedName(true, $event)" type="text" id="lastName" class="form-control">
    </div>
  </div>
</template>

<script>
  export default {
    props : ['value'],
    methods:{
      changedName(isLastname, event){

        if (isLastname)
          this.value.lastName = event.target.value;

        else
          this.value.name = event.target.value;


        this.$emit('input', this.value)
      }
    },

  }
</script>

<style scoped>
  input{
    background-color: darkslategray;
    color: #fff;
  }
</style>
