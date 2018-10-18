console.log("Linked correctly");

function NavbarScroll() {
    var navbar = document.getElementById('navbar').className;
    var ypos = window.pageYOffset;

    if(ypos > 151) {
        document.navbar.style.height = "21px";
    } 
    else {
        document.navbar.style.height = "150px";
    }

    window.addEventListener("scroll", NavbarScroll);
}

