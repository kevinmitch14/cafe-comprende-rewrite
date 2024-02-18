import { create } from "zustand";
import { GetCafes } from "@/components/cafe-list";

export type RatedCafe = GetCafes & { type: "rated" };
export type GoogleCafe = google.maps.places.PlaceResult & { type: "google" };

export interface BearState {
  selectedCafe: GoogleCafe | RatedCafe | null;
  setSelectedCafe: (cafe: RatedCafe | GoogleCafe | null) => void;
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
