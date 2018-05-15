class Authentication {

    static authenticateUser(token) {
        sessionStorage.setItem("token", token);
    }

    static getAuthenticatedToken() {
        return sessionStorage.getItem("token");
    }

    static deauthenticateUser() {
        sessionStorage.clear();
    }

    static isAuthenticatedUser() {
        return sessionStorage.getItem("token") != null;
    }

    static setSuperUserRole(is_superuser) {
        sessionStorage.setItem("is_superuser", is_superuser);
    }

    static isSuperUserRole() {
        return sessionStorage.getItem("is_superuser");
    }
}

export default Authentication;