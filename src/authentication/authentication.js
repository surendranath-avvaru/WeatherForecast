class Authentication {

    static authenticateUser(token) {
        sessionStorage.setItem('token', token)
    }

    static getAuthenticatedToken() {
        return sessionStorage.getItem('token')
    }

    static deauthenticateUser() {
        return sessionStorage.removeItem('token')
    }

    static isAuthenticatedUser() {
        return sessionStorage.getItem('token') != 'null'
    }
}

export default Authentication;