$(document).ready(function(){
    document.getElementById('menu').addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    });
})