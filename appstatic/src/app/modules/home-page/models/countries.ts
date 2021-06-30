export interface Country {
    uid: string;
    value: string;
    name: string;
    states: State[];
}

export interface State {
    uid: string;
    value: string;
    name: string;
}