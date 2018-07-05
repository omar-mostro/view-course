<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="">User name</label>
          <input type="text" class="form-control" v-model="user.userName">
        </div>
        <div class="form-group">
          <label for="">Mail</label>
          <input type="email" class="form-control" v-model="user.email">
        </div>

        <div class="form-group">
          <label for="">end URL</label>
          <input type="email" class="form-control" v-model="node">
        </div>

        <div class="form-group">
          <button @click="submit" class="btn btn-primary">Submit</button>
        </div>


        <div class="form-group">
          <button @click="fetchData" class="btn btn-primary">Get Data</button>
        </div>

        <ul class="list-group">
          <li class="list-group-item" v-for="userReturned in users">
            <p>Nombre : {{userReturned.userName}}</p>
            <p>Email : {{userReturned.email}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          userName: '',
          email: ''
        },
        users: [],
        resource: {},
        node: 'data'
      }
    },
    methods: {
      submit() {
        /* this.$http.post('data.json', this.user)
           .then(response => {
               console.log(response)
             },
             error => {
               console.log(error)
             });*/

        this.resource.saveAlt({}, this.user)
      },
      fetchData() {
        /* this.$http.get('data.json')
           .then(response => {
             return response.json()
           })
           .then(data => {
             let resultArray = [];
             for (let key in data){
               resultArray.push(data[key])
             }

             this.users = resultArray;
           });*/

        this.resource.getData({node: this.node})
          .then(response => {
            return response.json()
          })
          .then(data => {
            let resultArray = [];
            for (let key in data){
              resultArray.push(data[key])
            }

            this.users = resultArray;
          });

      }
    },
    created() {
      const customActions = {
        saveAlt: {method: 'POST', url: 'alternative.json'},
        getData: {method: 'GET', url: 'alternative.json'},

      };
      this.resource = this.$resource('{node}.json', {}, customActions);
    }
  }
</script>

<style>
</style>
