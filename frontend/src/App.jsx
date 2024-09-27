import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { Container } from './components/ui'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useAuth } from './context/AuthContext'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TasksPage from './pages/TasksPage'
import TaskFormPage from './pages/TaskFormPage'
import ProfilePage from './pages/ProfilePage'
import NotFound from './pages/NotFound'

function App() {

    const { isAuth } = useAuth()

    return (
        <>
            <Navbar />

            <Container className="py-5">
                <Routes>
                    <Route
                        element={<ProtectedRoute isAllowed={!isAuth} redirectTo="/tasks" />}
                    >
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Route>

                    <Route
                        element={<ProtectedRoute isAllowed={isAuth} redirectTo="/login" />}
                    >
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/tasks" element={<TasksPage />} />
                        <Route path="/tasks/new" element={<TaskFormPage />} />
                        <Route path="/tasks/1/edit" element={<TaskFormPage />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </>
    )
}

export default App