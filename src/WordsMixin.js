export const WordsMixin = {
  computed: {
    reverseTextComputed() {
      if (!this.text) return '';
      let value = this.text.toString();
      return value.split("").reverse().join("");
    },
    lengthWordComputed() {

      let value = this.text.toString();
      return value + '(' + value.split("").length + ')';
    },
  },

};
