<template>
    <div class="navbar">
        <nav class="deep-purple darken-1">
            <div class="container">
                <router-link :to="{ name: 'GMap'}" class="brand-logo left">Code of the South</router-link>
                <ul class="right">
                    <li><router-link :to="{ name: 'Signup'}" v-if="!user">Signup</router-link></li>
                    <li><router-link :to="{ name: 'Login'}" v-if="!user">Login</router-link></li>
                    <li v-if="user" :v-model="user"><a>{{ user.email }}</a></li>
                    <li v-if="user"><a @click="logout">Logout</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

import firebase from 'firebase'

export default {
    name: 'Navbar',
    data() {
        return {
            user: null
        }
    },
    methods: {
        logout(){
            firebase.auth().signOut().then(() => {
                this.$router.push({ name: 'Login'})
            })
        },
    },
    created(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.user = user
            } else {
                this.user = null
            }
        })
    }
}
</script>

<style>

</style>
