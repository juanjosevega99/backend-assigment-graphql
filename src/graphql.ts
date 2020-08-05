
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface AgentDto {
    name: string;
}

export interface ProblemDto {
    description: string;
    solved?: boolean;
    userId?: string;
    agentId?: string;
    createdAt?: string;
}

export interface UserDto {
    name: string;
}

export interface IQuery {
    agents(): Agent[] | Promise<Agent[]>;
    problems(): Problem[] | Promise<Problem[]>;
    users(): User[] | Promise<User[]>;
}

export interface IMutation {
    createAgent(args?: AgentDto): Agent | Promise<Agent>;
    createProblem(args?: ProblemDto): Problem | Promise<Problem>;
    createUser(args?: UserDto): User | Promise<User>;
}

export interface Agent {
    id?: string;
    name: string;
}

export interface Problem {
    description?: string;
    solved?: boolean;
    userId?: string;
    agentId?: string;
}

export interface User {
    id?: string;
    name: string;
}
