const logo = document.getElementById('logo');
let logoContent = logo.innerHTML;

const createHeader = () => {
    const headerBar = `
        <div class="logo-bar">
            <div class="left-bar"></div>
            <div class="center-bar"></div>
            <div class="logo"><h1>${logoContent}</h1></div>
            <div class="right-bar"><div>
        </div>`
    logo.insertAdjacentHTML('beforebegin', headerBar);
    logo.remove();
}

createHeader();

