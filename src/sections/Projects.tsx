import AttendanceAppImage from '../assets/images/Screenshot 2025-06-13 090628.png';
const Projects = () => {
  return (
    <section id="projects" class="">
      <div className="container min-h-screen mx-auto px-6">
        <div className="project-content">
          <h2 className="text-2xl text-center font-mono">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <div className="card bg-base-100 shadow-sm group">
              <figure>
                <img
                  src={AttendanceAppImage}
                  alt="Shoes"
                  className="object-cover group-hover:scale-[1.1] transition-all"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Attendance App</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
