var title = document.querySelector('[name = "title"]');
var name  = document.querySelector('[name = "name"]');
var email = document.querySelector('[name = "email"]');
var message = document.querySelector('[name = "message"]');
var submit = document.querySelector('.button');


submit.addEventListener('click', function check(){

    "strict mode";
        
    if (name.value.length < 4){
        alert('Name is too short');
        return false;

    } else if (message.value.length < 20){
        alert('Message too short');
        return false;
    }
});