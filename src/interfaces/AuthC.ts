export interface UserInfo {
    email: string
    username: string
}

export interface AuthC {
    isLogin: boolean
    userInfo: UserInfo | null
    Login: ( userInfo: UserInfo ) => void
    Logout: () => void
}
