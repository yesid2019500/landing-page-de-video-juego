const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item')


// SELECT TAB CONTENT ITEM
function selectItem(e) {
    removeBorder();
    removeShow();
        // add border to current tab
        this.classList.add('tab-border');

        // grab content item from DOM este consolo es para ver como va cambiado el tag cuANDO DAMOS CLICK
        // console.log(this.id);

        const tabContentItems = document.querySelector(`#${this.id}-content`);

        // ADD SHOW CLASS
        tabContentItems.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item=> item.classList.remove('tab-border'))
}

function removeShow(){
    tabContentItems.forEach(item=> item.classList.remove('show'));
}



// LISTEN FOR TAB CLICK
tabItems.forEach(item => item.addEventListener('click', selectItem));