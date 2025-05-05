import { InputProps } from "./input";

export type Folder = {
    id: string;
    nome: string;
    descricao?: string;
    extensao?: string;
    file?: string;
}

 export type FolderDataProps = {
    name: InputProps;
    description: InputProps;
}
