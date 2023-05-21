import { SyntheticEvent, useState } from "react";
import { Project } from "./Project";

interface ProjectFormProps {
  project: Project;
  onSave: (project: Project) => void;
  onCancel: () => void;
}

const ProjectForm = ({
  project: initialProject,
  onSave,
  onCancel,
}: ProjectFormProps) => {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: "",
    place: "",
    description: "",
    built: "",
  });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(project);
  };

  const handleChange = (event: any) => {
    const value = event.target.value;
    setProject({ ...project, [event.target.name]: value });
    setErrors(() => validate(project));
  };

  function validate(project: Project) {
    let errors: any = { name: "", description: "", budget: "" };
    if (project.name.length === 0) {
      errors.name = "Name is required";
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = "Name needs to be at least 3 characters.";
    }
    if (project.place.length === 0) {
      errors.name = "Location is required";
    }
    if (project.description.length === 0) {
      errors.description = "Description is required.";
    }
    if (project.built.length === 0) {
      errors.budget = "Year is needed";
    }
    return errors;
  }

  function isValid() {
    return (
      errors.name.length === 0 &&
      errors.place.length === 0 &&
      errors.description.length === 0 &&
      errors.built.length === 0
    );
  }

  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={project.name}
        onChange={handleChange}
      />
      {errors.name.length > 0 && (
        <div className="card error">
          <p>{errors.name}</p>
        </div>
      )}
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        placeholder="enter location"
        value={project.place}
        onChange={handleChange}
      />
      {errors.place.length > 0 && (
        <div className="card error">
          <p>{errors.place}</p>
        </div>
      )}
      <label htmlFor="description">Project Description</label>
      <textarea
        name="description"
        placeholder="enter description"
        value={project.description}
        onChange={handleChange}
      ></textarea>
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}
      <label htmlFor="built">Project Budget</label>
      <input
        type="text"
        name="built"
        placeholder="enter year"
        value={project.built}
        onChange={handleChange}
      />
      {errors.built.length > 0 && (
        <div className="card error">
          <p>{errors.built}</p>
        </div>
      )}
      <div className="input-group">
        <button
          type="submit"
          className="primary bordered medium"
          onClick={()=>onSave(project)}
        >
          Save
        </button>
        <span></span>
        <button type="reset" className="bordered medium" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
