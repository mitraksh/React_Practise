import { useState } from 'react'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import ProductsCard from './components/ProductsCard'
import data from './assets/products.json'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { width, height } = useWindowSize()
  // const productsTitle = data.products.map((products) => <p>{products.title}</p>)
  // const productsDesc = data.products.map((products) => <p>{products.description}</p>)
  // const productsImg = data.products.map((products) => <p>{products.images[0]}</p>)
  return (
    <div className="App">
      <Confetti wind={0} friction={0.99} width={1757} height={950}
      // drawShape={ctx => {
      //   ctx.beginPath()
      //   for(let i = 0; i < 33; i++) {
      //     const angle = 0.35 * i
      //     const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
      //     const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
      //     ctx.lineTo(x, y)
      //   }
      //   ctx.stroke()
      //   ctx.closePath()
      // }}
      />
      <Navbar/>
      {/* <h1>Counter App</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count - 1)}>
           -
        </button>
      </div> */}
      {data.products.map((products) => <ProductsCard title={products.title} image={products.images[0]} desc={products.description}/>)}
    
    </div>
  )
}

export default App
