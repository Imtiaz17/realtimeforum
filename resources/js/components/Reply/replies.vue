<template>
    <div>
        <reply v-for="reply in contents"
        :key="reply.id"
        :data="reply">
        </reply>
    </div>
</template>

<script>
import reply from './reply'
export default {
    
    props:['replies'],
    data(){
        return{
            contents:this.replies
        }
    },
    components:{reply},
    created(){
        this.listen()
    },
    methods:{
        listen(){
            EventBus.$on('newReply',(reply)=>{
                this.contents.unshift(reply)
                window.scrollTo(0,0)

            })
        }
    }

}
</script>

<style>

</style>
