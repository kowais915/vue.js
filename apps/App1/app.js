const app = Vue.createApp({
//    template: '<h2>I am the template.</h2>'

data()
{
   return {
       title: 'Mohammad Owais Khan',
       major: 'Computer Engineering',
       school: 'Ghulam Ishaq Khan Institute of engineering sciences & Technology',
       age: 20
   }
},

methods: {
   change(){

    // // pick random student
    //     student = ['Owais', 'Ammad', 'Saad', 'Haris']

    //     for(i = 0; i<student.length; i++)
    //     {
    //         this.title = student[i];
    //     }

    var name = window.prompt("Enter the name of the studetn: ")
    var majoruser =window.prompt("Enter the major of the student: ")
    var ageuser = window.prompt("Enter the age of the student: ")



    this.title = name
    this.major = majoruser
    this.age = ageuser
      
   }



}

})

app.mount('#app')