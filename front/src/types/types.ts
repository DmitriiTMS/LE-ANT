import { FieldValues, UseFormRegister, FieldError, Path } from 'react-hook-form';


export enum Roles {
  ADMIN = "ADMIN",
  PARTICIPANT = "PARTICIPANT",
  JUDGE = "JUDGE",
}


export const ROLE_OBJ = [
  {
    roleEnum: Roles.PARTICIPANT,
    roleNameServer: "PARTICIPANT",
    roleNameClient: "Участник",
  },
  {
    roleEnum: Roles.JUDGE,
    roleNameServer: "JUDGE",
    roleNameClient: "Судья",
  },
];



export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  name: string;
  instagramName: string;
  email: string;
  password: string;
  role: Roles | string;
  images: string[];
  accessAllowed: boolean;
  slug: string
}


export interface IInputForm<T extends FieldValues> {
  placeholder: string;
  type: string;
  registerName: Path<T>;
  requiredMessage?: string;
  minLengthValue?: number;
  minLengthMessage?: string;
  maxLengthValue?: number;
  maxLengthMessage?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  optionPattern?: {
    value: RegExp;
    message: string;
  };
}

