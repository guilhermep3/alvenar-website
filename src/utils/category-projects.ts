import { projects } from "@/data/projects";
import { project } from "@/types/projects";

interface CategoryGroup {
   [key: string]: project[];
}
export function projectsByCategory() {

   const categoryProject = projects.reduce((acc, project) => {
      const { category } = project;

      if (!acc[category]) {
         acc[category] = [];
      }
      acc[category].push(project);
      return acc
   }, {} as CategoryGroup)
   return categoryProject;
};

export const architectureProjects = projectsByCategory().Residencial;
export const interiorProjects = projectsByCategory().Interior;
export const comercialProjects = projectsByCategory().Comercial;
