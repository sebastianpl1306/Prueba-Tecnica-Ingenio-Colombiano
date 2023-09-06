type propsAppLayout = {
  children: JSX.Element
}

export const AppLayout = ({ children }: propsAppLayout) => {
  return (
    <div className="main-container-app">
      {children}
    </div>
  )
}