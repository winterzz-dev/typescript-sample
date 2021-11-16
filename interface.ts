import {ITicket} from './Ticket.class'

export type Range = number
export type Money = number
export type Weight = number

export type TicketType = 'economy' | 'advanced' | 'lux'

export interface ITicketProperties {
    range: Range
    weight: Weight
    age: number
}

export interface IVariant {
    calculateSummary: (dto: ITicketProperties) => Money
}

export interface IVariants {
    advancedVariant: IVariant
    economyVariant: IVariant
    luxVariant: IVariant
}

export interface ICompany {
    createTicket: (ticketType: TicketType, range: Range, weight: Weight, age: number) => ITicket
}