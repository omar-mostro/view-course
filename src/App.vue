<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <div class="form-group">
          <label>Reverse String</label>
          <input v-model="text" type="text" class="form-control">
          <p><strong>reverse Text: </strong>{{text | reverseText}}</p>
        </div>
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

        <div class="form-group">
          <label>Length of a word</label>
          <input v-model="text" type="text" class="form-control">
          <p><strong>reverse Text: </strong>{{text | lengthWord}}</p>
        </div>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

        <div class="form-group">
          <label>Reverse String Computed</label>
          <input v-model="text" type="text" class="form-control">
          <p><strong>reverse Text: </strong>{{reverseTextComputed}}</p>
        </div>

        <div class="form-group">
          <label>Length of a word Computed</label>
          <input v-model="text" type="text" class="form-control">
          <p><strong>reverse Text: </strong>{{lengthWordComputed}}</p>
        </div>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->


      </div>
    </div>
  </div>
</template>

<script>
  import {WordsMixin} from './WordsMixin';
  export default {
    mixins: [WordsMixin],
    data() {
      return {
        text: 'hola'
      }
    },
    /*computed: {
      reverseTextComputed(){
        if (!this.text) return '';
        let value  = this.text.toString();
        return value.split("").reverse().join("");
      },
      lengthWordComputed(){

        let value = this.text.toString();
        return value+'('+ value.split("").length +')';
      },
    },*/
    filters: {
      reverseText(value) {
        value = value.toString();

        return value.split("").reverse().join("");
      }
    }
  }
</script>

<style>
</style>
