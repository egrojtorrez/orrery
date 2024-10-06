import { useGLTF } from "@react-three/drei";
import { useStoreSun } from "./useStoreSun";
import { useRef } from "react";
import { useEffect } from "react";
import { useCameraTarget } from "@modules/camara/hooks/useCameraTarget";
import { useState } from "react";

export const useSun = () => {
  const { sunRef, setSunRef } = useStoreSun();
  const { scene } = useGLTF("/assets/sol.glb");

  const sun = useRef();
  useEffect(() => {
    if (sun.current) {
      setSunRef(sun);
    }
  }, [sun.current]);

  return {sunRef: sun, scene};
}

export const useZoomSun = () => {
  const { sunRef } = useStoreSun();
  const {followObject, selectedObject} = useCameraTarget()

  const onClick = () => {
    followObject(sunRef);
  }

  return {onClick};
}