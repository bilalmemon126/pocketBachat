const Header = () => {
    return (
      <header className="bg-white border-b px-6 py-4 flex justify-between">
        <input
          placeholder="Search bills..."
          className="border rounded-lg px-4 py-2 w-80"
        />
        <div className="font-medium">👤 Bilal</div>
      </header>
    )
  }
  
  export default Header
  