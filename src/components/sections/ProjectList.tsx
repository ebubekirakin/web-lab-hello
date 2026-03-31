import { useState, useEffect, useMemo } from "react";
import type { Project, Category, SortField, SortOrder } from "../../types/project";
import { fetchProjects } from "../../services/projectService";
import { applyFilters } from "../../utils/projectHelpers";
import ProjectFilter from "../forms/ProjectFilter";
import Card from "../ui/Card";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen hata oluştu");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = useMemo(
    () => applyFilters(projects, search, category, sortField, sortOrder),
    [projects, search, category, sortField, sortOrder]
  );

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projelerim
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Üzerinde çalıştığım ve geliştirmeye devam ettiğim güncel projeleri aşağıdan inceleyebilir, teknolojilere göre filtreleyebilirsiniz.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg">
            <p className="text-red-800 font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <ProjectFilter
            search={search} onSearchChange={setSearch}
            category={category} onCategoryChange={setCategory}
            sortField={sortField} onSortFieldChange={setSortField}
            sortOrder={sortOrder} onSortOrderChange={setSortOrder}
            resultCount={filtered.length} totalCount={projects.length}
          />
        )}

        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <p className="text-center text-gray-500 py-16 bg-white dark:bg-gray-900 rounded-2xl border dark:border-gray-800 text-lg">
            Arama kriterlerinize uygun proje bulunamadı.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
             <Card 
               key={project.id} 
               variant="elevated" 
               title={project.title} 
               image={project.image} 
               imageAlt={`${project.title} ekran görüntüsü`}
             >
               <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-10 line-clamp-2">
                 {project.description}
               </p>
               
               <div className="flex flex-wrap gap-2 mb-4">
                 {project.tech.map((t) => (
                   <span key={t} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-semibold px-2.5 py-1 rounded-md">
                     {t}
                   </span>
                 ))}
               </div>
 
               <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 font-mono border-t dark:border-gray-800 pt-4">
                 <span className="font-bold">{project.year}</span>
                 <span className="uppercase tracking-wider font-semibold">{project.category}</span>
               </div>
             </Card>
          ))}
        </div>
      </div>
    </section>
  );
}