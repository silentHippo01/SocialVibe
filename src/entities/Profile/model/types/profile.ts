import { Country, Currency } from "shared/const/common";

export interface Profile {
    first: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Country;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: ProfileSchema;
    isLoading: boolean;
    error?: string;
    readOnly: boolean;
}