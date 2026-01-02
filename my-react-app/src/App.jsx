import { Routes, Route } from "react-router-dom"

import { routes } from './routes/Routes' 

function App() {

  

  return (
    <div>
      <Routes>
        {routes.map(({path, element}, index) => 
          <Route key={index} path={path} element={element} />
        )}  
      </Routes>  
    </div>
  )
}

export default App
