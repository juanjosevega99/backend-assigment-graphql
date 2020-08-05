
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface AgentDto {
    name: string;
}

export interface UserDto {
    name: string;
}

export interface IQuery {
    agents(): Agent[] | Promise<Agent[]>;
    users(): User[] | Promise<User[]>;
}

export interface IMutation {
    createAgent(args?: AgentDto): Agent | Promise<Agent>;
    createUser(args?: UserDto): User | Promise<User>;
}

export interface Agent {
    name: string;
}

export interface User {
    name: string;
}
