/**
 * The access token of a user.
 */
export interface Token {
    access_token: string;
}

export interface AuthResult {
    status: "success" | "failure";
    token: string | null;
}