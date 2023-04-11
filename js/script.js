const {createApp} = Vue;

createApp({
    data(){
        return {
            basePath: 'https://flynn.boolean.careers/exercises/api/',
            emails: []
        }
    },
    methods: {
        getEmails(){
            this.emails = [];
            for (let i = 0; i < 10; i++){
                axios.get(`${this.basePath}random/mail`).then((result) => {
                    console.log(result.data.response);
                    this.emails.push(result.data.response);
                })
            }
        }
        
    },
    mounted(){

    }
}).mount('#app');

//https://flynn.boolean.careers/exercises/api/random/mail