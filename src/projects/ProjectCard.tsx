import { Project } from "./Project";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

const ProjectCard = ({ project, onEdit }: ProjectCardProps) => {
  const formatDescription = (description: string): string =>
    description.substring(0, 60) + "...";

  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
  };

  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{project.place}</p>
        <p>{formatDescription(project.description)}</p>
        <p>Built : {project.built}</p>
        <button className=" bordered" onClick={() => handleEditClick(project)}>
          <span className="icon-edit "></span>
          Edit
        </button>
      </section>
    </div>
  );
};

export default ProjectCard;
