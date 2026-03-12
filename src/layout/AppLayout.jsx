import Sidebar from "./Sidebar"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import { useState } from "react"

const AppLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="p-6"><Outlet /></main>
      </div>
    </div>
  )
}

export default AppLayout