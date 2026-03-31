import type { Category, SortField, SortOrder } from "../../types/project";

interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category | "all";
  onCategoryChange: (value: Category | "all") => void;
  sortField: SortField;
  onSortFieldChange: (value: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "Tümü" },
  { value: "frontend", label: "Frontend" },
  { value: "data-science", label: "Veri Bilimi" },
  { value: "hardware", label: "Donanım" },
  { value: "security", label: "Siber Güvenlik" },
];

export default function ProjectFilter({
  search, onSearchChange, category, onCategoryChange,
  sortField, onSortFieldChange, sortOrder, onSortOrderChange,
  resultCount, totalCount,
}: ProjectFilterProps) {
  
  return (
    <div className="space-y-4 mb-8 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
      {/* Arama */}
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Proje ara (örnek: React, Python, Arduino)..."
          className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 pl-10 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        {/* Kategori Butonları */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                category === cat.value
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sıralama */}
        <div className="flex gap-2 w-full md:w-auto">
          <select
            value={sortField}
            onChange={(e) => onSortFieldChange(e.target.value as SortField)}
            className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="year">Yıla Göre</option>
            <option value="title">Başlığa Göre</option>
          </select>
          <button
            onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white transition-colors"
          >
            {sortOrder === "asc" ? "↑ Artan" : "↓ Azalan"}
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium pt-2 border-t border-gray-100 dark:border-gray-800">
        Toplam {totalCount} projeden {resultCount} tanesi listeleniyor.
      </p>
    </div>
  );
}