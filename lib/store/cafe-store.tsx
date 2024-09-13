import { create } from "zustand";
import type { GetCafes } from "../getCafes";

export type RatedCafe = GetCafes[number] & { type: "rated" };
export type GoogleCafe = google.maps.places.PlaceResult & { type: "google" };

export interface BearState {
  selectedCafe: GoogleCafe | RatedCafe | null;
  setSelectedCafe: (cafe: RatedCafe | GoogleCafe | null) => void;
}

export const useCafeStore = create<BearState>()((set) => ({
  selectedCafe: null,
  setSelectedCafe: (cafe) => set(() => ({ selectedCafe: cafe })),
}));
