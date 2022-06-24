import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import Agenda from "../modelos/agenda"
import Documento from "../modelos/Carteira";
import { TipoDocumento } from "../enumeracoes/tipoDocumento";
import Carteira from "../modelos/Carteira";

let titular = new Cliente();
titular.nome = `Pedro de Alcântara João Carlos Leopoldo Salvador`;
titular.nomeSocial = `Dom Pedro II`;
titular.dataCadastro = new Date(1840, 6, 23);
titular.dataNascimento = new Date(1825, 11, 2);
titular.agenda = new Agenda();
titular.endereco = new Endereco();
titular.carteira = new Carteira();
titular.dependentes;

let telefone = new Telefone();
telefone.ddd = `12`;
telefone.numero = `996379940`;

let agenda = new Agenda();
agenda.telefones.push(telefone);
titular.agenda = agenda;

let endereco = new Endereco();
endereco.rua = `R. do Catete`;
endereco.bairro = `Copacabana`;
endereco.cidade = `Rio de Janeiro`;
endereco.estado = `Rio de Janeiro`;
endereco.pais = `Brasil`;
endereco.codigoPostal = `22220-000`;

let documentos= new Documento();
documentos.numero = `12345678-9`;
documentos.tipo = TipoDocumento.RG;
documentos.dataExpedicao = new Date(1835, 11, 2);

let carteira = new Carteira();
carteira.documentos.push(documentos);
titular.carteira = carteira;

let dependente = new Cliente();
dependente.nome = `Isabel Cristina Leopoldina Augusta Micaela`;
dependente.nomeSocial = `Princesa Isabel`;
dependente.dataCadastro = new Date(1921, 10, 14);
dependente.dataNascimento = new Date(1846, 6, 29);
dependente.agenda = titular.agenda.clonar() as Agenda;
dependente.titular = titular;
titular.dependentes.push(dependente);

console.log(titular);
console.log(dependente);
console.log(agenda);
console.log(endereco);
console.log(carteira);
