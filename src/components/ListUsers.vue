<template>
  <section id="user-list">
    <div class="row">
      <div class="col-md-12">
        <h3 class="page-title">Contacts</h3>
      </div>
    </div>
      <div class="user-panels">
        <div class="row">
          <div class="col-md-4" v-for="user in filteredUsers" :key="user.id">
              <div class = "panel panel-default">
                <div class = "panel-heading">
                    <router-link :to="{name: 'view-user', params: {user_id: user.id}}" @click.native="getUser(user)">{{user.name}}</router-link>
                </div>
                <div class = "panel-body">
                    <p>{{user.email}}</p>
                    <p>{{user.phone}}</p>
                </div>
              </div>
          </div>
      </div>
    </div>
    <router-link  :to="{name: 'new-user'}" class="add-button" ><i class="fa fa-plus-circle"></i></router-link>
  </section>
</template>
<script>
import { eventBus } from '../main'
import { store } from '../store'
export default {
  name: 'listusers',
  data(){
    return {
      // populate user array from store
      users: store.state.users,

      // user input 
      search: '',
      //initials: [],
      selectedInitial: ''
    }
  },
  computed:{
    // check if search input match any username
    filteredUsers: function ()  {
      return this.users.filter((user) => {
        return user.name.toLowerCase().match(this.search.toLowerCase());
      });
    }
  },
  created(){
    // listen keyup search event from Search component set search result
    eventBus.$on('filter-users', (data) => {this.search = data });
  }
}
</script>
