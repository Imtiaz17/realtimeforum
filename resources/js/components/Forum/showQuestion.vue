<template>
    <v-card>
        <v-container fluid>
            <v-card-title>
                <div>
                    <div class="headline">
                        {{ data.title }}
                    </div>
                <span class="grey--text">{{ data.user }} Asked {{ data.created_at }}</span>
                </div>
                <v-spacer></v-spacer>
                <v-btn color="teal" dark>{{ replycount }} Replies</v-btn>
            </v-card-title>
            <v-card-text v-html="body"></v-card-text>
            <v-card-actions v-if="own">
                <v-btn flat color="blue" @click="edit">edit</v-btn>
                <v-btn flat color="red" @click="destroy">delete</v-btn>
            </v-card-actions>  
        </v-container>

    </v-card>
    
</template>

<script>

export default {
    
    props:['data'],
    data(){
        return{
            own : User.own(this.data.user_id),
            replycount:this.data.reply_count
        }

    },
    computed:{
        body(){
            return md.parse(this.data.body)
        }

    },
    created()
    {
        EventBus.$on('newReply',()=>{
            this.replycount++
        });
        Echo.private('App.User.' + User.id())
            .notification((notification) => {
                this.replycount++
            });
        EventBus.$on('deleteReply',()=>{
            this.replycount--
        });
         Echo.channel('deleteReplyChannel')
            .listen('DeleteReplyEvent', (e) => {
                this.replycount--  
            })
    },
    methods:{
        destroy(){
            axios.delete(`/api/question/${this.data.slug}`)
            .then(res=>this.$router.push('/forum'))
            .catch(error=>console.log(error.res.data))
        },
        edit(){
            EventBus.$emit('startEdit')
        }
    }

}
</script>

<style>

</style>
