function copiarParaAreaTransferencia() {
    
    var elementoParaCopiar = document.getElementById("essasenha");

    var selecionador = window.getSelection();
    selecionador.selectAllChildren(elementoParaCopiar);
    document.execCommand("copy");
    selecionador.removeAllRanges();
    
}