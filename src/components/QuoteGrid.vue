<template>
  <div class="row mt-4">
    <osm-quote @click.native="deleteQuote(index)" v-for="(quote, index) in quotes" :key="quote.id">
      {{quote}}
    </osm-quote>
  </div>
</template>

<script>
  import Quote from './Quote';

  export default {
    props: ['quotes'],
    components:{
      osmQuote : Quote,
    },
    methods:{
      deleteQuote(index){
        this.$emit('quoteDeleted', index)
      }
    }
  }
</script>

<style scoped>

</style>
