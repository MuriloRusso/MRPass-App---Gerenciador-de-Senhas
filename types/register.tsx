import { InputProps } from "./input";

export type Register = {
    id: string;
    plataforma: string;
    link: string;
    usuario: string;
    senha: string;
    descricao?: string;
}

export type RegisterDataProps = {
    plataform: InputProps;
    link: InputProps;
    user: InputProps;
    password: InputProps;
    description: InputProps;
}