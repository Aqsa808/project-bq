let balancedMenu = document.querySelector('#balanced_menu');
let officeMenu = document.querySelector('#office_menu');
let image = document.querySelector('.img3');

function picChange() {
    image.setAttribute('src', '03_menu_balanced.jpg');
}

balancedMenu.onclick = picChange;
