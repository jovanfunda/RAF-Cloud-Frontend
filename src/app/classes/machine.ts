import { User } from "./user";

export class Machine {
    id: BigInt | undefined;
    name: string | undefined;
	status: string | undefined;
	createdBy: User | undefined;
	active: boolean | undefined;
}