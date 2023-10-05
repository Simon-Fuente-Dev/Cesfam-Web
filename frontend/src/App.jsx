import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout.jsx'
import Index from './paginas/Index.jsx'
import Login from './paginas/Login.jsx'
import Registrar from './paginas/Registrar.jsx'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Esto sirve para el routing de las paginas y los diseños que estas compartiran */}
                <Route path='/' element={<AuthLayout />}>
                    <Route index element={<Index />} />
                    <Route path='login' element={<Login />} />
                    <Route path='Registrar' element={<Registrar />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App