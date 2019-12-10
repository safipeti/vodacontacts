<template>
<div class="container">
  <header id="header" >
    <div class="row">
      <div class="col-md-6">
        <router-link  :to="{name: 'list-users'}" ><img  class="logo" src="@/assets/vodafone_logo.svg" /></router-link>
      </div>
      <div class="col-md-6">
        <div id="search">
          <form class="navbar-form navbar-right searchbox" role="search">
            <div class="form-group">
              <input type="text" v-model="search" @keyup="filterUsers" class="form-control" placeholder="Search user...">
            </div>
          </form>
        </div>
      </div>
  </div>
  </header>
</div>
</template>
<script>
//import Search from '../components/Search'
import { eventBus } from '../main'
export default{
  name: 'header',
data(){
    return {
      search: ''
    }
  },
  methods: {
    filterUsers(){
      eventBus.$emit('filter-users', this.search);
    }
  }
}
</script>