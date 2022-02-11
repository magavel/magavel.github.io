import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './components/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container fluid >
        <Header/>
        <About/>
        <Footer/>
    </Container>
  )
}

export default App
