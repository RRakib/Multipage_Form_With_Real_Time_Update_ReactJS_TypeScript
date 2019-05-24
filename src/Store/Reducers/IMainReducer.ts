export interface InitialState {
    age: string,
    lastName:  string,
    firstName:  string,
    middleName:  string,
    university:  string,
    profession :  string,
    github :  string,
    yOe :  string
}

export interface Action {
    type: string,
    payload: any
}