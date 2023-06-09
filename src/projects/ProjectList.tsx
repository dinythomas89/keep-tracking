import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

const ProjectList = ({ projects, onSave }: ProjectListProps) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const onEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };
  const onCancel = () => {
    setProjectBeingEdited({});
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {project === projectBeingEdited ? (
            <ProjectForm
              onSave={onSave}
              onCancel={onCancel}
              project={project}
            />
          ) : (
            <ProjectCard project={project} onEdit={onEdit} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
