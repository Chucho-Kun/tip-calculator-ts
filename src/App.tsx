import { menuItems } from './data/db'
import useOrder from './hooks/useOrder'
import MenuItem from './components/MenuItem'
import OrderContents from './components/OrderContents'
import TipPercentageForm from './components/TipPercentageForm'
import OrderTotals from './components/OrderTotals'

function App() {

  const { order , addItem , removeItem , tip , setTip , placeOrder } = useOrder()

  return (
    <>
     <header className='bg-blue-900 py-5'>
        <h1 className='text-center text-4xl text-white font-black'>CALCULADORA DE PROPINAS Y CONSUMO</h1>
     </header>

     <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
      <div className='p-5'>
        <h2 className='text-4xl font-black'>MENÚ</h2>

        <div className='space-y-3 mt-10'>
        {menuItems.map(item =>(
          <MenuItem 
            key={item.id}
            item={item}
            addItem={addItem}
          />
        ))}
        </div>
      </div>

      <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
        { order.length ? (
          <>
            <OrderContents
                order={order}
                removeItem={removeItem}
              />
              <TipPercentageForm 
                setTip={setTip}
                tip={tip}
              />
              <OrderTotals 
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />  
          </>
        ) : (
          <p className="text-center">La orden está vacia</p>
        )}
        
      </div>
     </main>
    
    </>
  )
}

export default App
