<template>
  <div class="container">
    <osm-header :numberQuotes="quotes.length" :maxQuotes="maxQuotes"></osm-header>
    <osm-new-quote @quoteAdded="newQuote"></osm-new-quote>
    <osm-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></osm-quote-grid>
    <div class="row">
      <div class="col-12">
        <div class="alert alert-info text-center">
          <strong>Click a quote to delete it</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from './components/Header';
  import QuoteGrid from './components/QuoteGrid';
  import NewQuote from './components/NewQuote';

  export default {
    data() {
      return {
        quotes: ['Just a quote to see something'],
        maxQuotes: 5,
      }
    },
    methods: {
      newQuote(quote) {
        if (this.quotes.length >= this.maxQuotes)
          return alert('Cant create more than 10 quotes');

        this.quotes.push(quote);
      },
      deleteQuote(index){
        this.quotes.splice(index, 1);
      }
    },
    components: {
      osmHeader: Header,
      osmQuoteGrid: QuoteGrid,
      osmNewQuote: NewQuote,
    }
  }
</script>

<style>
</style>
