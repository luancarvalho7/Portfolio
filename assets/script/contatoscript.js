console.log('bob');
// DARK MODE VVVV
// DARKMODE FUNCTIONS VV
function darkModeON() {

    let cssLinked = document.querySelector('#cssLink');
    darkModeStyle = 'assets/css/contatoDARK_style.css';
    cssLinked.href = darkModeStyle;
    changeImages()
    changeButtons();
}

function changeImages() {
    let logoIMG = document.getElementById('logonav');
    logoIMG.src = 'assets/images/icons/White/Logo.png';
}
function changeButtons() {
    const darkM_Button = document.getElementById('nav-darkmode');
    const lightM_Button = document.getElementById('nav-lightmode');
    darkM_Button.classList.add('_disabled');
    lightM_Button.classList.remove('_disabled');
    const darkM_MobileButton = document.getElementById('darkMobileBTN');
    const lightM_MobileButton = document.getElementById('lightMobileBTN');
    darkM_MobileButton.classList.add("_disabled");
    darkM_MobileButton.classList.remove("right-menu-li");
    lightM_MobileButton.classList.add("right-menu-li");
    lightM_MobileButton.classList.remove("_disabled");
}
// DARKMODE OFF 
function darkModeOFF() {
    let cssLinked = document.querySelector('#cssLink');
    lightModeStyle = 'assets/css/contato_style.css';
    cssLinked.href = lightModeStyle;
    restoreImages();
    restoreButtons();
}
function restoreImages() {
    let logoIMG = document.getElementById('logonav');
    logoIMG.src = 'assets/images/icons/Black/Logo.png';
}
function restoreButtons() {
    const darkM_Button = document.getElementById('nav-darkmode');
    const lightM_Button = document.getElementById('nav-lightmode');
    darkM_Button.classList.remove("_disabled");
    lightM_Button.classList.add("_disabled");

    const darkM_MobileButton = document.getElementById('darkMobileBTN');
    const lightM_MobileButton = document.getElementById('lightMobileBTN');
    darkM_MobileButton.classList.remove("_disabled");
    darkM_MobileButton.classList.add("right-menu-li");
    lightM_MobileButton.classList.remove("right-menu-li");
    lightM_MobileButton.classList.add("_disabled");
}
// DARKMODE CONTINUE 
continuousDarkMode();
function continuousDarkMode(){
    if (localStorage.getItem('DarkON')) {
        darkModeON();
    }
}
// Mascara Letra maiuscula 
function firstletter() {
    let message = document.getElementById('nameI').value;
    let splited = message.split(' ');
    let arrafinalTextMain = [];
    for (let i = 0; i < splited.length; i++) {
        arrafinalTextMain.push(fletter(splited[i]));
    }
    let finalText = arrafinalTextMain.join(' ');
    document.getElementById('nameI').value = finalText;
}

function fletter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


