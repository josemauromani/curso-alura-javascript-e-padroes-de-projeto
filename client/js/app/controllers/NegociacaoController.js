class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

        this._listaNegociacoes = new ListaNegociacoes()
        this._negociacoesView = new NegociacoesView($('#negociacoesViewId'))
        this._negociacoesView.update(this._listaNegociacoes)
        
        this._msg = new Mensagem()
        this._mensagemView = new MensagemView($('#mensagemViewID'))
        this._mensagemView.update(this._msg)
    }

    adiciona(event) {
        event.preventDefault()
        
        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._negociacoesView.update(this._listaNegociacoes)

        this._msg.texto='Negociação adicionada com sucesso'
        this._mensagemView.update(this._msg)        

        this._limpaFormulario()
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    _limpaFormulario() {
        this._inputData.value=''
        this._inputValor.value=1
        this._inputValor.value=0.0
        this._inputData.focus();
    }

}