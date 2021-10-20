const mybutton = document.querySelector("#scroller");

window.onscroll = function(){
    scrollWindow();
}

function scrollWindow(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener('click', function(event){
    event.preventDefault();

    BackToTop();
});
function BackToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}