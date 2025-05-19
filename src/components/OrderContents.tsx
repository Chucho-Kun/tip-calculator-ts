import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"

type OrderContendProps = {
    order: OrderItem[]
}

export default function OrderContents({ order }: OrderContendProps) {
  return (
    <div>
      <h2 className='font-black text-4xl'>CONSUMO</h2>
      <div className="space-y-3 mt-10">
        {order.length === 0 ?
            <p className="text-center">La orden está vacia</p>
        :(
            order.map( item => (
                <div
                    className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center" 
                    key={item.id}
                >
                    <div>
                        <p className="text-lg">
                            {item.name} - { formatCurrency( item.price ) }
                        </p>
                        <p className="font-black">
                            Cantidad: { item.quantity} - { formatCurrency( item.price * item.quantity ) }
                        </p>
                    </div>
                    <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black">
                        x
                    </button>
                </div>
            ))
        )}
      </div>
    </div>
  )
}
