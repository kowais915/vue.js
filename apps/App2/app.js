const app = Vue.createApp({

data(){

return{

    show: true,
    firstName: 'user',
    lastName: 'user',
    age: 0


}

},

methods: {

edit(){
    var fname = window.prompt("Enter Your First Name: ")
    var lName = window.prompt("Enter your last name: ")
    var userage = window.prompt("How old are you? ")


    this.firstName = fname
    this.lastName = lName
    this.age = userage





  },



  showData(){
      this.show = true
    


  },

hideData(){
    this.show = false



}




 }



})


app.mount('#app')