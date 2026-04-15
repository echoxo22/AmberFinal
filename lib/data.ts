export interface Cigarette {
  id: string; brand: string; line: string; rating: number; isMenthol: boolean; region: string;
  metrics: { draw: number; body: number; harshness: number; taste: number; quality: number; packaging: number; cooling?: number; };
}
export const humidorData: Cigarette[] = [
  { id: "chunghwa-hard", brand: "Chunghwa", line: "Hard Pack", rating: 4.8, isMenthol: false, region: "China", metrics: { draw: 3.8, body: 4.9, harshness: 1.5, taste: 4.9, quality: 5.0, packaging: 4.5 } },
  { id: "marlboro-ice", brand: "Marlboro", line: "Ice Blast", rating: 4.2, isMenthol: true, region: "Japan", metrics: { draw: 4.0, body: 3.2, harshness: 3.5, taste: 3.8, quality: 3.5, packaging: 4.0, cooling: 4.9 } },
  { id: "dunhill-intl", brand: "Dunhill", line: "International", rating: 4.9, isMenthol: false, region: "UK", metrics: { draw: 4.5, body: 4.2, harshness: 1.2, taste: 4.7, quality: 4.9, packaging: 5.0 } },
  { id: "peace-nonfilter", brand: "Peace", line: "Non-Filter", rating: 4.7, isMenthol: false, region: "Japan", metrics: { draw: 3.2, body: 5.0, harshness: 2.5, taste: 5.0, quality: 4.8, packaging: 3.5 } },
];
export const userData = { username: "Ritvik", favorites: ["dunhill-intl", "chunghwa-hard", "peace-nonfilter", "marlboro-ice"], stats: { total_logs: 142, this_year: 48, lists: 12 } };