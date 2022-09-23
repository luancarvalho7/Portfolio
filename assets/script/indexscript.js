console.log('bob');
// ANIMATION WORKS
function worksappear() {
    const cardGraphic = document.getElementById("cardGraphic");
    const cardWeb = document.getElementById("cardWeb");
    cardGraphic.style.transition = "0.9s";
    cardWeb.style.transition = "0.9s";

    cardGraphic.style.transform = "translate(0px, 0px)";
    cardWeb.style.transform = "translate(0px, 0px)";

    const blur = document.getElementById("workcards");
    blur.style.backdropFilter = "blur(8px)";
}

function worksdisappear() {
    const cardGraphic = document.getElementById("cardGraphic");
    const cardWeb = document.getElementById("cardWeb");
    cardGraphic.style.transition = "0.4s";
    cardWeb.style.transition = "0.4s";
    cardGraphic.style.transform = "translate(0px, 800px)";
    cardWeb.style.transform = "translate(0px, 800px)";

    const blur = document.getElementById("workcards");
    blur.style.backdropFilter = "blur(0px)";
}

// RIGHT SIDE MENU 
function expandMenu() {
    const rightMenu = document.getElementById("right-menu");
    const bgBlur = document.getElementById("bgfilter-menu");
    bgBlur.className = "_enabled";
    rightMenu.style.right = "0";
    rightMenu.style.boxShadow = "-10px 0px 30px rgba(0, 0, 0, 0.25)";
}
function retractMenu() {
    const rightMenu = document.getElementById("right-menu");
    const bgBlur = document.getElementById("bgfilter-menu");
    bgBlur.style.display = "none";
    rightMenu.style.right = "-45%";
    rightMenu.style.boxShadow = "none";
}


// DARK MODE VVVV


// DARKMODE FUNCTIONS VV
function darkModeON() {

    let cssLinked = document.querySelector('#cssLink');
    darkModeStyle = 'assets/css/indexDARK_style.css';
    cssLinked.href = darkModeStyle;
    changeImages()
    changeButtons();
}

function changeImages() {
    let logoIMG = document.getElementById('logonav');
    logoIMG.src = 'assets/images/icons/White/Logo.png';
    let LinkedinIMG = document.getElementById('linkedin-ico');
    LinkedinIMG.src = 'assets/images/icons/White/linkedin.png';
    let BehanceIMG = document.getElementById('behance-ico');
    BehanceIMG.src = 'assets/images/icons/White/behance.png';
    let GitHubIMG = document.getElementById('github-ico');
    GitHubIMG.src = 'assets/images/icons/White/github.png';
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
    lightModeStyle = 'assets/css/index_style.css';
    cssLinked.href = lightModeStyle;
    restoreImages();
    restoreButtons();
}
function restoreImages() {
    let logoIMG = document.getElementById('logonav');
    logoIMG.src = 'assets/images/icons/Black/Logo.png';
    let LinkedinIMG = document.getElementById('linkedin-ico');
    LinkedinIMG.src = 'assets/images/icons/Black/linkedinBlack.png';
    let BehanceIMG = document.getElementById('behance-ico');
    BehanceIMG.src = 'assets/images/icons/Black/behanceBlack.png';
    let GitHubIMG = document.getElementById('github-ico');
    GitHubIMG.src = 'assets/images/icons/Black/gitblack.png';
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