function mostrarConteudo(nome) {
    $.get(nome + ".html", function(data) {

        var jsconteudo = document.getElementById('jsConteudo');

        if (jsconteudo) {
            jsconteudo.parentNode.removeChild(jsconteudo);
        }

        loadjscssfile('jsConteudo', "./js/" +
            nome + ".js", 'js');
        var conteudo = $('#conteudo');
        conteudo.html(data);
    });
}

function loadjscssfile(id, filename, filetype) {
    if (filetype == "js") { // if filename is a external JavaScript file
        var fileref = document.createElement('script');
        fileref.setAttribute("id", id);
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
    }
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
    return fileref;
}

function mostraOpcaoAcomodacao(eu) {
    var acomodacao = eu.innerHTML;
    alert(acomodacao);
}

mostrarConteudo("home")