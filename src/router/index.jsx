import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../pages/homePage/HomePage'
import { Profiler } from 'react'
import ProfilePage from '../pages/profilePage/ProfilePage'

const router = createBrowserRouter([
    { path: '/', element: <App />, children: [
        { index: true, element: <HomePage /> },
        { path: '/profile/:id', element: <ProfilePage /> },
    ]}
])

export default router