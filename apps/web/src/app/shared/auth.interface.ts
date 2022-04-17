/**
 * The access token of a user.
 */
export interface Token {
    access_token: string,
    expires_in: number,
    current_time: number
}

export interface AuthResult {
    status: "success" | "failure";
    token: string | null;
}