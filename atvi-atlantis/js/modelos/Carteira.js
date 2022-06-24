"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Documento_1 = __importDefault(require("./Documento"));
class Carteira extends Documento_1.default {
    constructor() {
        super(...arguments);
        this.documentos = [];
    }
    clonar() {
        let carteira = new Carteira();
        carteira.documentos = this.documentos;
        return carteira;
    }
}
exports.default = Carteira;
