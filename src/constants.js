export const CREWMATE_COLORS = {
  Red:"#c51111", Blue:"#132ed1", Green:"#117f2d", Pink:"#ed54ba",
  Orange:"#ef7d0e", Yellow:"#f5f557", Black:"#8394a4", White:"#d6e0f0",
  Purple:"#6b31bc", Brown:"#71491e", Cyan:"#38fedc", Lime:"#50ef39",
  Maroon:"#6b2737", Rose:"#ff63d4", Banana:"#fff883", Coral:"#ec7578",
  Tan:"#c49c6b", Sky:"#5af0ee",
};
export const COLOR_NAMES = Object.keys(CREWMATE_COLORS);

export const T = {
  bg:     "#070b12",
  card:   "rgba(12,17,30,0.97)",
  border: "rgba(255,255,255,0.07)",
  accent: "#e8334a",
};

/** Generate a random 6-character room code like "XK92AF" */
export function generateRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}
