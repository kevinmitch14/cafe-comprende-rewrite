import type mapboxgl from "mapbox-gl";
import { create } from "zustand";

export interface MapState {
  map: mapboxgl.Map | null;
  setMap: (map: mapboxgl.Map) => void;
}

export const useMapStore = create<MapState>()((set) => ({
  map: null,
  setMap: (map) => set(() => ({ map })),
}));
