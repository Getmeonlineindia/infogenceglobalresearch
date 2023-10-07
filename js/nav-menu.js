const navMenu = document.querySelectorAll('.nav-menu');
console.log(navMenu);

for(let i= 0; i<navMenu.length; i++) {
    navMenu[i].addEventListener('click', () => {
        // const currMenu = document.getElementsByClassName('active');
        // currMenu[i].className = currMenu[i].className.replace(' active', '');
        // this.className += ' active';

        // navMenu[0].classList.remove('active')

        // navMenu[i].classList.add('active');
    });
}



// var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }