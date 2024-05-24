$(document).ready(function(){
    document.getElementById('menu').addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    });

    function checkOrientation() {
        if (window.innerHeight > window.innerWidth) {
            document.getElementById('content').style.display = 'block';
        } else {
            document.getElementById('content').style.display = 'none';
            alert("Por favor, gira tu dispositivo a modo vertical.");
        }
    }
    
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('load', checkOrientation);
    
})