/**
 * Represents a user who can reset their password.
 */
export type CodeVerifier = {
    code: string;
    email: string;
    userName: string;
}