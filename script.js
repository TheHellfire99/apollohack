console.log("this website was designed by shaurya srivastav");
console.log("if you have found this, you are probably trying to code or just goofing off, \n either way nice job");
console.log("shivam needs to learn how to put semi colons! also the answer to life is 42");

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}