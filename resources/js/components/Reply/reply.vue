<template>
    <div class=mt-3>
        <v-card>
            <v-card-title>
                <div class="headline">{{ data.user }}</div>
                <div class="ml-2">{{ data.created_at }}</div>
                <v-spacer></v-spacer>
                <like :reply="data"></like>
            </v-card-title>
            <v-divider></v-divider>

            <edit-reply
                    v-if="editing"
                    :reply=data>
            </edit-reply>
            <v-card-text v-else v-html="reply"></v-card-text>
            <div v-if="!editing">
                <v-card-actions v-if="own">
                    <v-btn icon small>
                        <v-icon color="blue" @click="edit">edit</v-icon>
                    </v-btn>
                    <v-btn icon small>
                        <v-icon color="red" @click="destroy">delete</v-icon>
                    </v-btn>

                </v-card-actions>
            </div>
        </v-card>
    </div>
</template>

<script>
    import EditReply from './editReply'
    import like from '../like/like'

    export default {
        props: ['data', 'index'],
        components: {EditReply, like},
        data() {
            return {
                editing: false,
                 own : User.own(this.data.user_id)
            }
        },
        computed: {
            
            reply() {
                return md.parse(this.data.reply)
            }
        },
        created() {
            this.listen()
        },
        methods: {
            destroy() {
                EventBus.$emit('deleteReply', this.index)

            },
            edit() {
                this.editing = true
            },
            listen() {
                EventBus.$on('cancelEditing', () => {
                    this.editing = false
                })
            }
        }

    }
</script>

<style>

</style>
