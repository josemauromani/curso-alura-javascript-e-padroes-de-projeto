class ListaNegociacoes {
    
    constructor() {
        this._negociacoes = []
    }

    adiciona(negociacao) {
        this._negociacoes = [].concat(this._negociacoes,negociacao)
    }

    get negociacoes() {
        return [...this._negociacoes]
    }

    esvazia() {
        this._negociacoes = [];
    }

}