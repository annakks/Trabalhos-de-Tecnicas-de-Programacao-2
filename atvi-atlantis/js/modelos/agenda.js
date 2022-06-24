"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Agenda {
    constructor() {
        this.telefones = [];
    }
    clonar() {
        let agenda = new Agenda();
        agenda.telefones = this.telefones;
        return agenda;
    }
}
exports.default = Agenda;
