import {Variant} from './Variant.class'
import {IVariant} from './interface'
import {Company} from './Company.class'

const AeroflotEconomyVariant: IVariant = new Variant(4, 10)
const AeroflotAdvancedVariant: IVariant = new Variant(8, 12, 7, 0.3)
const AeroflotLuxVariant: IVariant = new Variant(15, 0, 16, 0.3)
const RZDEconomyVariant: IVariant = new Variant(0.5, 6, 5, 0.5)
const RZDAdvancedVariant: IVariant = new Variant(2, 8, 8, 0.3)
const RZDLuxVariant: IVariant = new Variant(4, 0, 16, 0.2)

const Aeroflot = new Company({
   advancedVariant: AeroflotAdvancedVariant,
   luxVariant: AeroflotLuxVariant,
   economyVariant: AeroflotEconomyVariant
})

const RZD = new Company({
   advancedVariant: RZDAdvancedVariant,
   luxVariant: RZDLuxVariant,
   economyVariant: RZDEconomyVariant
})

const ticketAeroflot = Aeroflot.createTicket('advanced', 200, 15, 6)
const ticketRZD = RZD.createTicket('advanced', 200, 15, 6)

console.log(ticketAeroflot)
console.log(ticketRZD)