

export const toastMessage = () => ({
    elemRef : 'snackbar',
    show: function (message = '') {
        const elem = document.getElementById(this.elemRef);
        elem.innerHTML = message;
        elem.className = 'show';
        setTimeout(function () { elem.className = elem.className.replace("show", ""); }, 3000);
    }
})