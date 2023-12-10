import { create } from "zustand";

interface BearState {
  selectedCafe: google.maps.places.PlaceResult | null;
  setSelectedCafe: (cafe: google.maps.places.PlaceResult | null) => void;
  latitude: number | null;
  setLatitude: (latitude: number) => void;
  longitude: number | null;
  setLongitude: (longitude: number) => void;
}

export const useCafeStore = create<BearState>()((set) => ({
  selectedCafe: null,
  setSelectedCafe: (cafe) => set(() => ({ selectedCafe: cafe })),
  latitude: null,
  setLatitude: (latitude) => set(() => ({ latitude })),
  longitude: null,
  setLongitude: (longitude) => set(() => ({ longitude })),
}));
