export interface UserInfo {
    email: string
    username: string
}

export interface AuthC {
    isLogin: boolean
    userInfo: UserInfo | null
}
