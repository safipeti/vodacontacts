<template>
<section id="main">
  <div class="row">
    <div class="col-md-12">
      <h3 class="page-title">Edit {{user.name}}'s Profile</h3>
    </div>
  </div>
  <div class="user-panels">
    <form @submit.prevent="checkForm">
      <div class="row bottom-buffer">
        <div class="col-md-6 details-left">Name:</div>
        <div class="col-md-6 details-right details-name">
          <span v-if="errors.name" class="error" role="alert">{{this.errors.name}}</span>
          <input type="text" class="form-control" v-model="user.name" >
        </div>
      </div>
      <div class="row bottom-buffer">
        <div class="col-md-6 details-left">Email:</div>
        <div class="col-md-6 details-right">
          <span v-if="errors.email" class="error" role="alert">{{this.errors.email}}</span>
          <input v-model="user.email" type="text" class="form-control" >
        </div>
      </div>
      <div class="row bottom-buffer">
        <div class="col-md-6 details-left">Phone:</div>
        <div class="col-md-6 details-right">
          <span v-if="errors.phone" class="error" role="alert">{{this.errors.phone}}</span>
          <input v-model="user.phone" type="text" class="form-control" >
        </div>
      </div>
      <div class="controls">
        <button type="submit" class="btn ctrl-button">Save</button>
      </div>
    </form>
  </div>
</section>
</template>
<script>
import { store } from '../store'
export default {
  name: 'edit-user',
  data(){
    return {
      user: {
        id : null,
        name: null, 
        email: null,
        phone: null,
      },
      errors: {}
    }
  },
  created(){
    // get user from storage based on its id
    this.user = store.getUser(this.$route.params.user_id);
  },
  methods:{

    checkForm(){
      this.errors = {};

      this.errors.name = this.errors.phone = this.errors.email = null;

      if(!this.user.name){
        this.errors.name =  'Please fill name';
      }
      if(!this.user.email){
        this.errors.email = 'Please give a valid email';
      }
      if(!this.user.phone){
        this.errors.phone = 'Please fill phone';
      }

      if(!this.errors.name && !this.errors.phone && !this.errors.email){
        this.updateUser();
      }
    },

    // get data from form and update user 
    updateUser(){
      store.updateUser({
        id: this.$route.params.user_id, 
        name: this.user.name, 
        email: this.user.email, 
        phone: this.user.phone
      });
      this.$router.push('/');
    }
  }
}
</script>
