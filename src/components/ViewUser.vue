<template>
  <section id="main">
    <div class="row">
      <div class="col-md-12">
        <h3 class="page-title">{{user.name}}'s Profile</h3>
      </div>
    </div>
    <div class="user-panels">
      <div class="row bottom-buffer">
        <div class="col-md-6 details-left">Name:</div>
        <div class="col-md-6 details-right details-name">{{user.name}}</div>
      </div>
      <div class="row bottom-buffer">
        <div class="col-md-6 details-left">Email:</div>
        <div class="col-md-6 details-right">{{user.email}}</div>
      </div>
      <div class="row bottom-buffer">
        <div class="col-md-6 details-left">Phone:</div>
        <div class="col-md-6 details-right">{{user.phone}}</div>
      </div>
    </div>
    <div class="controls">
      <router-link tag="button" :to="{name: 'edit-user'}" class="ctrl-button" @click.native="getUser" >Edit</router-link>
      <button @click.prevent="deleteUser" class="del-button">Delete</button>
    </div>
  </section>
</template>
<script>
import { store } from '../store'
export default {
  name: 'view-user',
  data(){
    return {
      user: {
        id : null,
        name: null, 
        email: null,
        phone: null,
      }
    }
  },
  created(){
    // get the user from store by userid
    this.user = store.getUser(this.$route.params.user_id);
  },
  methods:{
    deleteUser(){
      // delete from store and go back to list
      store.deleteUser(this.$route.params.user_id);
      this.$router.push('/');
    }
  }
}

</script>
