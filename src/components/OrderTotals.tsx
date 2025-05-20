import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals( {order , tip , placeOrder } : OrderTotalsProps ) {

    const subTotalAmount = useMemo(() => order.reduce( ( total , item ) => total + ( item.quantity * item.price ) , 0 ) , [ order ])
    const tipAmount = useMemo(() => subTotalAmount * tip , [ tip , order ] )
    const totalAmout = useMemo( () => subTotalAmount + tipAmount , [ tip , order ] )

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propinas:</h2>
            <p>Subtotal a pagar: {' '}
                <span className="font-bold">{ formatCurrency( subTotalAmount ) }</span>
            </p>
            <p>Propina: {' '}
                <span className="font-bold">{ formatCurrency( tipAmount ) }</span>
            </p>
            <p>Total a pagar: {' '}
                <span className="font-bold">{ formatCurrency( totalAmout ) }</span>
            </p>
        </div>

        <button
            className="w-full bg-black p-3 text-white uppercase font-black cursor-pointer disabled:opacity-30 disabled:cursor-default"
            disabled={totalAmout === 0}
            onClick={placeOrder}
        >Guardar Orden</button>
    </>
  )
}
