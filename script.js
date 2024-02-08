// Make form interactive 
// Validate takes email as input and checks if it is correct 

function ValidateEmail(input){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // This is the regular expression for an email adress sam[local]@ [domain]gmail.com the local part and after the @ the domain part 
    return regex.test(input) // test the regex expression aganist the current email

}





document.addEventListener('DOMContentLoaded',function(){   // script uses event listner to wait for the doc to be fully loaded 
    const form = document.getElementById('myForm'); // then runds anonymous function and holds element of form 
    
    // listen to events in the form for the submit event 
    form.addEventListener('submit',function(e){
        e.preventDefault(); // prevents default form behavior which typically reloads the page 

        const email = document.getElementById('email').value; // retrive value of input element with id email and store it 
        console.log(email);

        // checks if email is valid
        if(ValidateEmail(email)){
            console.log("True")
            const mainCard = document.getElementById('main-card'); // creates var and holds the main card 
            const successCard = document.getElementById('success'); 

            mainCard.classList.add("hide");
            successCard.classList.remove("hide");
            
            const emailConfirmation = document.getElementById('email-place');

            emailConfirmation.innerHTML = email;

        }else{
            console.log("False")
            const textBox = document.getElementById('email'); // grabs textBox element in html
            textBox.classList.add('invalid-input'); // adds class to textBox

            const errorMessage = document.getElementById('error'); 
            errorMessage.classList.remove('hide'); // Remove hide class from error message to show 


        }


    })
})




document.addEventListener('DOMContentLoaded', function(){

const dismissButton = document.getElementById('dismiss'); // store dismiss button element 

dismissButton.addEventListener('click',function(){ // listen for click event on button 
    console.log("I was clicked!")

    const mainCard = document.getElementById('main-card'); // creates var and holds the main card 
    const successCard = document.getElementById('success'); 

    mainCard.classList.remove("hide");
    successCard.classList.add("hide");

});

});
