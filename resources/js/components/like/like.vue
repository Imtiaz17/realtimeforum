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
    created(){
        Echo.channel('likeChannel')
        .listen('LikeEvent', (e) => {
        if(this.reply.id==e.id){
                e.type==1? this.count++ : this.count--
            }
    });
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
            .then(res=>this.count++)
        },
        dec()
        {
            axios.delete(`/api/like/${this.reply.id}`)
            .then(res=>this.count--)
        }
    }

}
</script>

<style>

</style>
