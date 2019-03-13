<template>
<<<<<<< HEAD
    <div class="view-profile container">
        <div class="card" v-if="profile">
            <h2 class="deep-purple-text center">{{ profile.alias }} Wall</h2>
            <ul class="comments collection">
                <li>Comment</li>
            </ul>
            <form @submit.prevent="addComment">
                <div class="field">
                    <label for="comment">Add a comment</label>
                    <input type="text" name="comment" v-model="newComment">
                    <p v-if="feedback" class="red-text">{{feedback}}</p>
                </div>
            </form>
        </div>
    </div>
=======
  <div class="view-profile container">
    <div class="card" v-if="profile">
      <h2 class="deep-purple-text center">{{ profile.alias }}'s Backboard</h2>
    </div>
  </div>
>>>>>>> 521c9daf88a983e598ad458c9dd44b6749f360af
</template>

<script>
import db from '@/firebase/init'
<<<<<<< HEAD
import firebase from 'firebase'

export default {
    data() {
        return {
            profile: null,
            newComment: null,
            feedback: null,
            user: null
        }
    },
    methods: {
        addComment(){
            if(this.newComment){
                this.feedback = null
                db.collecton('comments').add({
                    to: this.$route.params.id,
                    from: this.user.id,
                    content: this.newComment,
                    time: Date.now()
                }).then(() => {
                    this.newComment = null
                })
            } else {
                this.feedback = 'You must enter a comment to add it'
            }
        }
    },
    created(){
        let ref = db.collection('users')

        //get current user
        ref.where('user_id', '==', firebase.auth().currentUser.uid).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                this.user = doc.data(),
                this.user.id = doc.id
            });
        })
        ref.doc(this.$route.params.id).get()
        .then(user => {
            this.profile = user.data()
        })
    }
}
</script>
=======
export default {
  name: 'ViewProfile',
  data() {
    return {
      profile: null
    }
  },
  created() {
    let ref = db.collection('users')
    ref.doc(this.$route.params.id).get()
    .then(user => {
      this.profile = user.data()
      console.log(this.profile)
    })
  },
}
</script>

<style>

</style>
>>>>>>> 521c9daf88a983e598ad458c9dd44b6749f360af
