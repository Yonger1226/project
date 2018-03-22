<template>
    <div class="index">
       {{txt}}
    </div>
</template>
<script>
    export default{
        data(){
            return{
                txt:''
            }
        },
        created(){
            process.env.NODE_ENV == 'development' ? this.txt = 'dev': this.txt = 'test';
        }
    }
</script>