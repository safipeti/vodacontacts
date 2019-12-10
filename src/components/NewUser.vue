<template>
  <div class="container">
    <section id="main"> 
      <div class="row">
        <div class="col-md-12">
          <h3 class="page-title">Add New Contact</h3>
        </div>
      </div>
      <div class="user-panels">
        <div class="row">
          <div class="col-md-12">
            <form @submit.prevent="checkForm">
              <div class="form-group">
                <label for="user-name">Name</label>
                <input type="text" class="form-control" id="user-name" placeholder="Enter name" v-model="name">
                <span v-if="errors.name" class="error" role="alert">{{this.errors.name}}</span>
              </div>
              <div class="form-group">
                <label for="user-email">Email</label>
                <input v-model="email" type="email" class="form-control" id="user-email" placeholder="Enter email">
                <span v-if="errors.email" class="error" role="alert">{{this.errors.email}}</span>
              </div>
              <div class="form-group">
                <label for="user-phone">Phone</label>
                <input v-model="phone" type="text" class="form-control" id="user-phone" placeholder="Enter phone">
                <span v-if="errors.phone" class="error" role="alert">{{this.errors.phone}}</span>
              </div>
             <div class="controls">
                <button type="submit" class="btn ctrl-button">Add Contact</button>
             </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
//import router from '../router'
import uuid from 'uuid';
import { store } from '../store'
export default {
  name: 'new-user',
  data(){
    return {
      id: uuid.v4(),
      name: null,
      email: null,
      phone: null,
      errors: {}
    }
  },
  methods:{
    // validate form before submission. Little bit hardcodede but works
    checkForm(){
      this.errors = {};

      // set all potential errors to null
      this.errors.name = this.errors.phone = this.errors.email = null;

      // set corresponding error messages
      if(!this.name){
        this.errors.name =  'Please fill name';
      }
      if(!this.email){
        this.errors.email = 'Please give a valid email';
      }
      if(!this.phone){
        this.errors.phone = 'Please fill phone';
      }

      // if no error applies, save user 
      if(!this.errors.name && !this.errors.phone && !this.errors.email){
        this.saveUser();
      }
    },
    saveUser(){
      // add user (save) to list, and...
      store.addUser({id: this.id, name: this.name, email: this.email, phone: this.phone });
      // go back to main page
      this.$router.push('/');
    }
  }
}
</script>
