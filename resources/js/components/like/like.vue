<template>
    <div>
        <v-btn icon @click="like">
            <v-icon :color="color">favorite</v-icon>{{ count }}
        </v-btn>
    </div>
</template>

<script>
export default {
    props:['reply'],
    data(){
        return{
            liked:this.reply.liked,
            count:this.reply.like_count,
            
        }
    },
    computed:{
        color(){
            return this.liked? 'red' : 'red lighten-4';
        }
    },
    methods:{
        like(){
            if(User.loggedin()){
                
                this.liked? this.dec() : this.inc() 
                this.liked=true
            }
        },
        inc()
        {
            axios.post(`/api/like/${this.reply.id}`)
            .then
            (this.count++)
        },
        dec()
        {
            axios.delete(`/api/like/${this.reply.id}`)
            .then
            (this.count--)
        }
    }

}
</script>

<style>

</style>
