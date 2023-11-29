export interface Prestataire{
    id: string,
    name: string,
    adresse: string,
    email: string,
    phone: string,
    type_service: ServiceType,
    description: string,
}

export enum ServiceType {
    dj = 'dj',
    traiteur = 'traiteur',
    photo = 'photo'
}