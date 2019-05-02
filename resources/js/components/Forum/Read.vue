<template>
   <div v-if="question">
       <edit-question 
       v-if="editing" 
       :data=question>
       </edit-question>
        <show-question v-else
        :data = question>
        </show-question>
        <v-container>
        <replies :question="question"></replies>
        <new-reply :questionslug="question.slug"></new-reply>
        </v-container>
        
   </div>
</template>

<script>
import showQuestion from './showQuestion'
import editQuestion from './editQuestion'
import replies from '../Reply/replies'
import newReply from '../Reply/newReply'
export default {
    components:{showQuestion,editQuestion,replies,newReply},
    data(){
        return{
            question:null,
            editing:false
        }
    },
    created(){
       this.getQuestion(),
       this.listen()
    },
    methods:{
        listen(){
            EventBus.$on('startEdit',()=>{
                this.editing=true
            })
            EventBus.$on('cancelEditing',()=>{
                this.editing=false
            })
        },
        getQuestion(){
             axios.get(`/api/question/${this.$route.params.slug}`)
             .then(res => this.question= res.data.data)
                .catch(error=> console.log(error.response.data))
        }
    }

}
</script>

<style>

</style>
