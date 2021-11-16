import {ICompany, IVariant, IVariants, Range, TicketType, Weight} from './interface'
import {ITicket, Ticket} from './Ticket.class'

export class Company implements ICompany {
    private readonly advancedVariant: IVariant
    private readonly economyVariant: IVariant
    private readonly luxVariant: IVariant

    constructor({advancedVariant, economyVariant, luxVariant}: IVariants) {
        this.advancedVariant = advancedVariant
        this.economyVariant = economyVariant
        this.luxVariant = luxVariant
    }

    createTicket(ticketType: TicketType, range: Range, weight: Weight, age: number): ITicket {
        switch (ticketType) {
            case 'economy':
                const economyPrice = this.economyVariant.calculateSummary({
                    range,
                    weight,
                    age
                })
                return new Ticket({
                    type: 'economy',
                    price: economyPrice,
                    range,
                    weight,
                    age
                })
            case 'advanced':
                const advancedPrice = this.advancedVariant.calculateSummary({
                    range,
                    weight,
                    age
                })
                return new Ticket({
                    type: 'advanced',
                    price: advancedPrice,
                    range,
                    weight,
                    age
                })
            case 'lux':
                const luxPrice = this.luxVariant.calculateSummary({
                    range,
                    weight,
                    age
                })
                return new Ticket({
                    type: 'lux',
                    price: luxPrice,
                    range,
                    weight,
                    age
                })
        }
    }
}