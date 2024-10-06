import { LayoutSolarSystem } from './modules/core/Layout'
import {NextUIProvider} from "@nextui-org/react";

function App() {

  return (
    <>
      <NextUIProvider>
        <LayoutSolarSystem/>
      </NextUIProvider>
    </>
  )
}

export default App