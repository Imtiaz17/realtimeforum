<template>
  <v-toolbar>
    <v-toolbar-title>Realtimeforum</v-toolbar-title>
    <v-spacer></v-spacer>
    <app-notification></app-notification>
    <div class="hidden-sm-and-down">
    
      <router-link
      v-for="item in items"
      :key="item.title"
      :to="item.to"
      v-if="item.show">
        <v-btn flat>{{ item.title }}</v-btn>
      </router-link>
      
    </div>
  </v-toolbar>
</template>

<script>
import AppNotification from './AppNotification';
export default {
  components:{AppNotification},
  data(){
    return{
      items:[
        {title : 'Forum', to:'/forum', show:true},
        {title : 'Ask Question', to:'/ask', show: User.loggedin()},
        {title : 'Category', to:'/category', show: User.admin()},
        {title : 'Login', to:'/login', show: !User.loggedin()},
        {title : 'Logout', to:'/logout', show: User.loggedin()},
      ]
    }
  },
  created(){
    EventBus.$on('logout',()=>{
      User.logout()
    })
  }

}
</script>

<style>

</style>
