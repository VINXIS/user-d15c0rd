import { Thing } from "./thing.js";

export interface Word extends Thing {
    date: Date;
    tags: string[];
}