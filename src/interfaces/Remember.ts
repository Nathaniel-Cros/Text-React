export interface DataRemember {
    email: string
    password: string
}

export interface Remember {
    remember: boolean;
    data: DataRemember
}
