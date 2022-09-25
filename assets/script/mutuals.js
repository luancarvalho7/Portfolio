//DarkModde Continuous

function storageDark(){
    localStorage.setItem('DarkON','Dark Mode was activated');
}
function storageLight(){
    localStorage.removeItem('DarkON');
}

//Right Menu Nav
function expandMenu() {
    const rightMenu = document.getElementById("right-menu");
    rightMenu.style.right = "0";
    rightMenu.style.boxShadow = "-10px 0px 30px rgba(0, 0, 0, 0.25)";
}
function retractMenu() {
    const rightMenu = document.getElementById("right-menu");
    rightMenu.style.right = "-45%";
    rightMenu.style.boxShadow = "none";
}
