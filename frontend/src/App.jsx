import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout.jsx'
import Index from './pages/Index.jsx'
import Login from './pages/Login.jsx'
import Registrar from './pages/Registrar.jsx'
import Eventos from './pages/Eventos.jsx'
import Area from './pages/Area.jsx'
import Hora from './pages/Hora.jsx'
import Receta from './pages/Receta.jsx'
import Detalle from './pages/DetalleReceta.jsx'
import { AuthProvider } from './layout/AuthContext.jsx'

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Esto sirve para el routing de las paginas y los diseños que estas compartiran */}
                    <Route path='/' element={<AuthLayout />}>
                        <Route index element={<Index />} />
                        <Route path='login' element={<Login />} />
                        <Route path='Registrar' element={<Registrar />} />
                        <Route path="Eventos/:eventoId" element={<Eventos />} />
                        <Route path='Area' element={<Area />} />
                        <Route path='Hora' element={<Hora />} />
                        <Route path='Receta' element={<Receta />} />
                        <Route path='Detalle' element={<Detalle />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App