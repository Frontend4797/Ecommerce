import { RouterProvider } from "react-router-dom"
import routers from "./Routes/AppRoutes"
import ErrorBoundary from "./Components/Error/ErrorBoundary"

const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={routers} />
    </ErrorBoundary>
  )
}

export default App