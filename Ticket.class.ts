import {Range, TicketType, Weight} from './interface'

export interface ITicket {
    type: TicketType
    range: Range
    weight: Weight
    age: number
    price: number
}

export class Ticket {
    readonly type: TicketType
    readonly range: Range
    readonly weight: Weight
    readonly age: number
    readonly price: number

    constructor(model: ITicket) {
        this.type = model.type
        this.range = model.range
        this.weight = model.weight
        this.age = model.age
        this.price = model.price
    }
}