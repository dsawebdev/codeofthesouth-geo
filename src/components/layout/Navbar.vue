<template>
    <div class="navbar">
        <nav class="deep-purple darken-1">
            <div class="container">
                <router-link :to="{ name: 'GMap'}" class="brand-logo left">Code of the South</router-link>
                <ul class="right">
<<<<<<< HEAD
                    <li v-if="!user"><router-link :to="{ name: 'Signup'}">Signup</router-link></li>
                    <li v-if="!user"><router-link :to="{ name: 'Login'}">Login</router-link></li>
                    <li v-if="user"><a>{{user.email}}</a></li>
=======
                    <li><router-link :to="{ name: 'Signup'}" v-if="!user">Signup</router-link></li>
                    <li><router-link :to="{ name: 'Login'}" v-if="!user">Login</router-link></li>
                    <li v-if="user" :v-model="user"><a>{{ user.email }}</a></li>
>>>>>>> 521c9daf88a983e598ad458c9dd44b6749f360af
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
<<<<<<< HEAD
    created() {
        //let user = firebase.auth().currentUser
=======
    created(){
>>>>>>> 521c9daf88a983e598ad458c9dd44b6749f360af
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.user = user
            } else {
                this.user = null
            }
        })
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 521c9daf88a983e598ad458c9dd44b6749f360af
}
</script>

<style>

</style>
