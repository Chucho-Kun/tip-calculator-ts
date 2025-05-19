import { menuItems } from './data/db'
import useOrder from './hooks/useOrder'
import MenuItem from './components/MenuItem'

function App() {

  const { addItem } = useOrder()

  return (
    <>
     <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>CALCULADORA DE PROPINAS Y CONSUMO</h1>
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
      <div>
        <h2>CONSUMO</h2>
      </div>
     </main>
    
    </>
  )
}

export default App
