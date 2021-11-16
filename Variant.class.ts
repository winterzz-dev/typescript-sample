import {ITicketProperties, IVariant, Money, Weight, Range} from './interface'

export class Variant implements IVariant {
    private readonly rangePrice: Money
    private readonly weightPrice: Money

    private readonly age: number | undefined
    private readonly discount: number | undefined

    constructor(rangePrice: Money, weightPrice: Money, age?: number, discount?: number) {
        this.rangePrice = rangePrice
        this.weightPrice = weightPrice

        this.age = age
        this.discount = discount
    }

    private calculateBaggage(weight: Weight): Money {
        return weight * this.weightPrice
    }

    private calculateDiscount(age: number): Money {
        if(this.age) {
            if(age < this.age) {
                return this.discount
            }
            return 0
        }
        return 0
    }

    private calculateRange(range: Range): Money {
        return range * this.rangePrice
    }

    calculateSummary(dto: ITicketProperties): Money {
        const totalPrice = this.calculateBaggage(dto.weight) + this.calculateRange(dto.range)
        return totalPrice - totalPrice * this.calculateDiscount(dto.age)
    }
}