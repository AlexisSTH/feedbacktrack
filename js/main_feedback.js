var notifications = document.getElementsByClassName("notification");
notifications[0].addEventListener("mouseenter", onclicknotification);

var content_choices = document.getElementsByClassName("content-choice");

var choice_notifs = document.getElementsByClassName("choice-notif");
Array.from(choice_notifs).forEach((choise_notif) => choise_notif.addEventListener("click", onclickChoise));


// evenement de click sur la notification
function onclicknotification(){
    console.log("click");
    content_choices[0].classList.remove("hidden");
}

// evenement de click sur la notification
function onclickChoise(){
    console.log("click choise");
}