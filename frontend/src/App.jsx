import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout.jsx'
import Index from './pages/Index.jsx'
import Login from './pages/Login.jsx'
import Registrar from './pages/Registrar.jsx'
import Eventos from './pages/Eventos.jsx'
import Area from './pages/Area.jsx'
import Hora from './pages/Hora.jsx'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Esto sirve para el routing de las paginas y los diseños que estas compartiran */}
                <Route path='/' element={<AuthLayout />}>
                    <Route index element={<Index />} />
                    <Route path='login' element={<Login />} />
                    <Route path='Registrar' element={<Registrar />} />
                    <Route path='Eventos' element={<Eventos />} />
                    <Route path='Area' element={<Area />} />
                    <Route path='Hora' element={<Hora />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App