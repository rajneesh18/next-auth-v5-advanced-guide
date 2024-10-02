const AuthLayout = ({ children }: any) => {
  return (
    <div>
      <nav className="bg-red-500 text-white">
        nav bar without auth
      </nav>
      {children}
    </div>
  )
}

export default AuthLayout