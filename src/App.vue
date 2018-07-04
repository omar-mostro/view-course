<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <osm-full-name :email="email" v-model="fullName"></osm-full-name>

          <div class="form-group">
            <label for="email">Email address:</label>
            <input v-model="email" type="text" id="email" class="form-control">
          </div>
          <div class="form-group">
            <label for="Password">Password:</label>
            <input required v-model="password" type="text" id="Password" class="form-control">
          </div>
          <div class="form-group">
            <label>Store Data?:</label>
            <div class="radio">
              <label>
                <input :selected="store === 'yes'" v-model="store" value="Yes" type="radio">
                Yes
              </label>
            </div>
            <div class="radio">
              <label>
                <input v-model="store" value="No" type="radio">
                No
              </label>
            </div>

            <!-- Exercise 2 -->
            <!-- Only display the Form if it has NOT been submitted -->
            <!-- Display the Data Summary ONCE the Form HAS been submitted -->

            <div class="form-group text-center">
              <button class="btn btn-success" type="submit" @click.prevent="show = true">Submit</button>
            </div>

          </div>


          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p> Name: {{fullName.name}}</p>
            <p>LastName: {{fullName.lastName}}</p>
            <p>Mail: {{email}}</p>
            <p>Password: {{password}}</p>
            <p>Store in Database?: {{store}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FullName from './FullName';
  export default {
    data() {
      return {
        fullName: {
          name: 'Omar',
          lastName: 'Sánchez',
        },
        email: 'email',
        password: '',
        store: 'yes',
        show: false

      }
    },
    components: {
      osmFullName : FullName
    }
  }
</script>

<style>
</style>
