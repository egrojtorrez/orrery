import {Slider} from "@nextui-org/react";
import { useStoreSlider } from "../hooks/sliderCardStore";

export function SliderTime() {
  const { setSpeed, speed } = useStoreSlider()
  return (
    <Slider
      label="Velocidad" 
      color="foreground "
      step={0.001} 
      maxValue={40} 
      minValue={-40} 
      hideValue={true}
      value={speed}
      onChange={(value) => {
        setSpeed(value)
      }}
      className="max-w-md absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/2 rounded z-10 dark"
      classNames={{
        label: 'text-white',
        filler: 'bg-zinc-800',
        thumb: 'bg-white',
      }}
    />
  )
}