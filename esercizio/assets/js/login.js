$(() => {
    const regex1 = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/;
    const regex2 = /(?=.*?[0-9])/;
    localStorage.clear();
    $('#entra').on('click', function () {
        let utente = $('#utente').val();
        let password = $('#password').val();
        if (utente == '' || password == '') {
            alert('Inserisci nome utente e password')
        } else if (password.length < 6) {
            alert('La password deve contenere almeno 6 caratteri!')
        } else if (!regex2.test(password)) {
            alert('La password deve contenere almeno un numero!')
        } else if (!regex1.test(utente)) {
            alert('Inserisci caratteri validi per la mail!')
        } else {
            localStorage.setItem('utente', utente);
            partenza();
        }
    });
    partenza();
    function partenza() {
        let progressBar = $('#bar');
        let larghezza = 1;
        let intervallo = setInterval(cresci, 25);
        function cresci() {
            if (larghezza > 500) {
                clearInterval(intervallo);
                location.href = './corsi.html'
            } else {
                larghezza++
                progressBar.css('width', larghezza + 'px');
            }
        }
    }
});