export interface User {
    id: string,
    nom: string,
    prenom: string,
    email: string,
    role: Role
}

export enum Role {
    admin = 'admin',
    manager = 'manager',
    salarie = 'salarie',
    visiteur = 'visiteur'
}