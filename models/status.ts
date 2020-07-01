export interface IStatus {
    id?: string;
    message?: string;
    isRunning?: boolean;
    isCompleted?: boolean;
    succeed?: boolean;
    isChecked?: boolean;
}

export class Status implements IStatus {
    constructor(public id?: string,
                public isRunning?: boolean,
                public isCompleted?: boolean,
                public message?: string,
                public succeed?: boolean,
                public isChecked?: boolean) {}
}