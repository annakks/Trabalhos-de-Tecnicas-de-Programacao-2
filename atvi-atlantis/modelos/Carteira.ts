import Prototipo from "../interfaces/prototipo";
import Documento from "./Documento";

export default class Carteira extends Documento{
    public documentos: Documento[] = [];

    public clonar(): Prototipo {
        let carteira = new Carteira();
        carteira.documentos = this.documentos;
        return carteira;
    }
}