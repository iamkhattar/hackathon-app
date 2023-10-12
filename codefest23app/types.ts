export type User = {
    email: string;
    first_name: string;
    last_name: string;
    type: "worker" | "manager"
    jwt: string;
}