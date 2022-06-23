export type statusType = "new" | "completed" | "assigned_to" | "started" | "declined";


export interface tableDataType {
    id: number;
    name: string;
    created_date: number;
    status: statusType;
    order_type: {
        name: string;
    };
    created_user: {
        surname: string;
        name: string;
        patronymic: string
    }
    account: {
        name: string;
    }
    terminal: {
        name: string;
    }

}