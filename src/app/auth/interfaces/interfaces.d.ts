declare interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?: string;
    token?: string;
    msg?: string;
}

declare interface IUsuario {
    uid: string,
    name: string
}