import Agenda from "./agenda"
import Carteira from "./Carteira"
import Endereco from "./endereco"


export default class Cliente {
    public nome: string
    public nomeSocial: string
    public dataNascimento: Date
    public dataCadastro: Date
    public agenda: Agenda
    public endereco: Endereco
    public carteira: Carteira
    public dependentes: Cliente[] = []
    public titular: Cliente

}