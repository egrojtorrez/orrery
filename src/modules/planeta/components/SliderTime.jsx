import {Slider} from "@nextui-org/react";
import { useStoreSlider } from "../hooks/sliderCardStore";

export function SliderTime() {
  const { setSpeed, speed } = useStoreSlider()
  
  return (
    <Slider
      label="Speed"
      color="foreground"
      step={0.01} 
      maxValue={24} 
      minValue={-24} 
      defaultValue={1}
      fillOffset={0}
      value={speed.floor}
      getValue= {(value) => `${Math.round(value)} hours/s`}
      onChange={(value) => {
        setSpeed(value)
      }}
      className="max-w-md absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1/2 rounded z-10 dark text-white"
      classNames={{
        label: 'text-white',
        filler: 'bg-zinc-800',
        thumb: 'bg-white',
      }}
    />
  )
}