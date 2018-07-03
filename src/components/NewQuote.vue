<template>
  <div class="row pt-4">
    <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
      <form>
        <div class="form-group">
          <label for="newQuote"><strong>Enter new quote</strong></label>
          <textarea v-model="quote" rows="3" class="form-control" id="newQuote"></textarea>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary" @click.prevent="createNew">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      createNew() {
        if (this.quote === '') {
          return alert('Quote can´t be empty');
        }
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      }
    }
  }
</script>

<style scoped>

</style>
