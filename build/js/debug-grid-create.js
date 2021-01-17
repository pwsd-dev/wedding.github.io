function divCreating(param) {
    var debugGrid = document.querySelector(param);
    let divCreate = document.createElement('div');
    debugGrid.appendChild(divCreate);

    let params = '.debugGrid div';
    let debugGridDivAll = document.querySelectorAll(params);
    if (debugGridDivAll.length <= 1) {
        divCreating(params);
    }

    if (debugGridDivAll.length >= 2 && debugGridDivAll.length <= 13) {
        let params = '.debugGrid div div';
        let debugGrid = document.querySelectorAll(params);
        if (debugGrid.length <= 12) {
            divCreating(params);
        }
    }
}

function debugGridCreate() {
    let debugGrid = document.querySelector('.debugGrid');
    let debugGridBtnCreate = document.querySelector('.debugGrid-btn__create');
    let debugGridBtnRemove = document.querySelector('.debugGrid-btn__remove');
    debugGridBtnCreate.classList.add("debugGrid-btn__hidden");
    debugGridBtnRemove.classList.remove("debugGrid-btn__hidden");
    debugGrid.classList.remove("debugGrid__z-index-negative");
    divCreating('.debugGrid');
}

function debugGridRemove() {
    let debugGrid = document.querySelector('.debugGrid');
    let debugGridBtnCreate = document.querySelector('.debugGrid-btn__create');
    let debugGridBtnRemove = document.querySelector('.debugGrid-btn__remove');
    debugGridBtnCreate.classList.remove("debugGrid-btn__hidden");
    debugGridBtnRemove.classList.add("debugGrid-btn__hidden");
    debugGrid.classList.add("debugGrid__z-index-negative");
    debugGrid.innerHTML = '';
}