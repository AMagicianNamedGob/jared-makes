export default function Projects(props) {
  const projects = props.projects;
  return (
    <div className="bg-transparent">
      <div className="mx-auto py-16  ">
        <h4 className="sr-only">Products</h4>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <a key={project.id} href={project.link} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={`/images/${project.name
                    .replace(/ /g, "")
                    .toLowerCase()}.webp`}
                  alt={`screen shot of ${project.name}`}
                  className="h-full w-full object-cover object-center
                  opacity-95 group-hover:opacity-100
                  transition-all duration-500 ease-in-out"
                  loading="lazy"
                />
              </div>
              <h5
                className="mt-2 text-xl tracking-wide text-synth-blue  underline underline-offset-2
              decoration-from-font py-0.5 px-1 group-hover:text-synth-green transition-all duration-500 ease-in-out"
              >
                {project.name}
              </h5>
              <p className="mt-2 text-md tracking-wide leading-relaxed text-gray-300 group-hover:text-white transition-all duration-500 ease-in-out">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
