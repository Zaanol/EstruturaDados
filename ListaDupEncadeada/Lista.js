function ListaDupEncadeada(value) {
    function Element(val) {
        this.key = val;
        this.next = null;
        this.previous = null;
    }
    
    this.primeiro = new Element(value);

    this.remove = function (valor) {
        var busca = this.busca(valor);
        if (busca == null) {
            return "Valor inexistente";
        } 
        else if (busca == this.primeiro) {
            if (busca.next != null) {
                var nextimo = busca.next;
                busca.key = nextimo.key;

                if (nextimo.next != null) {
                    nextimo.next.previous = busca;
                }
                busca.next = nextimo.next;
                nextimo=null;
                return "Remocao do inicio foi um sucesso";
            } else {
                this.primeiro=null;
                return "Remocao da lista concluida";
            }
        } 
        
        else if (busca.next == null)
        {
            busca.previous.next = null;
            busca = null;
            return "Remocao do fim foi um sucesso";
        } 
        
        else {
            busca.next.previous = busca.previous;
            busca.previous.next = busca.next;
            busca=null;
            return "Remocao do meio foi um sucesso";
        }
    };

    this.busca = function (valor) {
        var pointer = this.primeiro;
        do {
            if (pointer.key != valor) {
                pointer = pointer.next;
            } else {
                break;
            }
        } while (pointer != null);
        return pointer;
    };
    
    this.add = function (valor) {
        if (this.primeiro != null) {
            var pointer = this.primeiro;
            do {
                if (pointer.next == null) {
                    pointer.next = new Element(valor);
                    pointer.next.previous = pointer;
                    return "Valor " + valor + " adicionado";
                    break;
                } else {
                    pointer = pointer.next;
                }
            } while (pointer != null);
        } else {
            this.primeiro = new Element(valor);
            return "Valor " + valor + " adicionado";
        }
    };
}