<template>
    <show-question
    :data = question
    v-if="question" ></show-question>
</template>

<script>
import showQuestion from './showQuestion'
export default {
    components:{showQuestion},
    data(){
        return{
            question:null
        }
    },
    created(){
        axios.get(`/api/question/${this.$route.params.slug}`)
        .then(res => this.question= res.data.data)
         .catch(error=> console.log(error.response.data))
    }

}
</script>

<style>

</style>
