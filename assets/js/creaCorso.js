// classe corsi
let mail = localStorage.getItem('utente');

class Corsi {
    nome;
    argomento;
    durata;
    constructor(_nome, _argomento,  _argomento1, _argomento2, _durata) {
        this.nome = _nome;
        this.argomento = _argomento;
        this.argomento1 = _argomento1;
        this.argomento2 = _argomento2;
        this.durata = _durata;
    }

    corsoIntero() {
        return `Complimenti, <strong>${mail}</strong>! Hai creato un corso di ${this.nome}, che durerà ${this.durata} mesi e tratterà di: ${this.argomento} ${this.argomento1} ${this.argomento2}. <br>`
    }

}
$(() => {


    $('#logout').on('click', function () {
        localStorage.clear();
        location.href = 'index.html';
    });
    let materie = ['','Html', 'Css', 'Javascript', 'MySql', 'Angular', 'Php'];

    for (i = 0; i < materie.length; i++) {
        $('#materie').append(`<option value = "${i}">${materie[i]}</option>`);
        $('#materie2').append(`<option value = "${i}">${materie[i]}</option>`);
        $('#materie3').append(`<option value = "${i}">${materie[i]}</option>`);
    }

    $('#conferma').on('click', function () {

        $('#corsoCustom').val('');
        //variabili per derivare i valori degli input
        let nomeCorso = $('#nomeCorso').val();
        let durataCorso = $('#durata').val();

        let indice = $('#materie').val();
        let indice1 = $('#materie2').val();
        let indice2 = $('#materie3').val();

        let voceScelta = materie[indice];
        let voceScelta1 = materie[indice1];
        let voceScelta2 = materie[indice2];
        //condizioni
        if (nomeCorso == '') {
            $('#obbNome').removeClass('nascosto');
            $('#corsoCustom').empty();
            return;
        } else if(durataCorso == '') {
            $('#obbNome').addClass('nascosto');
            $('#obbMaterie').addClass('nascosto');
            $('#obbDurata').removeClass('nascosto');
            $('#corsoCustom').empty();
            //lo script si ferma perché la condizione è bloccante ♥
            return;
        } else if($('#materieCorsoCustom').val() == '') {
            $('#obbNome').addClass('nascosto');
            $('#obbDurata').addClass('nascosto');
            $('#obbMaterie').removeClass('nascosto');
            $('#corsoCustom').empty();
            return;
        } else {
            controllaCombo(); }

        function controllaCombo(){
        if ($('#materie2').val() == '' && $('#materie3').val() == '' ) {
            voceScelta1 = '';
            voceScelta2 = '';
            let corso1 = new Corsi(nomeCorso, voceScelta, voceScelta1, voceScelta2, durataCorso); 
            $('#corsoCustom').append(corso1.corsoIntero());
        } else if ($('#materie').val() == '') {
            voceScelta1 = '';
            let corso1 = new Corsi(nomeCorso, voceScelta, voceScelta1, voceScelta2, durataCorso); 
            $('#corsoCustom').append(corso1.corsoIntero());
        } else if ($('#materie3').val() == '') {
            voceScelta2 = '';
            let corso1 = new Corsi(nomeCorso, voceScelta, voceScelta1, voceScelta2, durataCorso); 
            $('#corsoCustom').append(corso1.corsoIntero());
        } else {
        
        let corso1 = new Corsi(nomeCorso, voceScelta, voceScelta1, voceScelta2, durataCorso); 
        $('#corsoCustom').append(corso1.corsoIntero());} }
    
        //svuoto i campi dopo il click
        svuotaCampi();

        function svuotaCampi(){
            $('#nomeCorsoCustom').val('');
            $('#durata').val('');
            $('#materie').val('');
            $('#materie2').val('');
            $('#materie3').val('');
            $('#obbNome').addClass('nascosto');
            $('#obbDurata').addClass('nascosto');
            $('#obbMaterie').addClass('nascosto');
        }

    });

});