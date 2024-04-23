const Project = ({
  title,
  description,
  githubLink,
  deployedLink,
  image,
  isDeployed,
}) => {
  const linkClass = isDeployed ? 'deployed-link' : 'not-deployed-link';
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} className="project-image" />
      <div className="project-links">
        <a href={githubLink}>GitHub Repository</a>
        <a href={deployedLink} className={linkClass}>
          Deployed Link
        </a>
      </div>
    </div>
  );
};

export default Project;
