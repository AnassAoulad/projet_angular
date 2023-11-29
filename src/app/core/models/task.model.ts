export interface Task {
    id: string,
    name: string,
    description: string,
    date_echeance: string,
    id_event: string,
    id_user: string,
    status: StatusEvent,
}

export enum StatusEvent {
    new = 'new',
    progress = 'progress',
    done = 'done'
}
