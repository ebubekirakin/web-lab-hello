// Kategori tipleri (Senin projelerine göre güncellendi)
export type Category = 
  | "frontend" 
  | "data-science" 
  | "hardware" 
  | "security";

// Sıralama seçenekleri
export type SortField = "year" | "title";
export type SortOrder = "asc" | "desc"; // asc: Artan (A-Z), desc: Azalan (Z-A)

// Proje veri modeli (Bizim JSON dosyasındaki yapının aynısı)
export interface Project {
  readonly id: number;
  title: string;
  description: string;
  tech: string[];
  year: number;
  category: Category;
  featured: boolean;
  image: string;
  demoUrl?: string;     // Opsiyonel (Canlı site linki)
  sourceUrl?: string;   // Opsiyonel (GitHub linki)
}

// Filtre durumu (Kullanıcının yapacağı arama ve filtreleme tercihleri)
export interface FilterState {
  search: string;
  category: Category | "all"; 
  sortField: SortField;
  sortOrder: SortOrder;
}