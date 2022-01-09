import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";

const index = () => {
  return (
    <Layout>
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4">
                <img src="/alex-profile.png" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Alex Villanueva Soto</h1>
                <h3>Full Stack Developer</h3>
                <p>
                  Mi lenguaje principal es JavaScript, pero también tengo
                  conocimientos en Java, ADA, C# y C++. Mi zona de confort es el
                  Backend y las Bases de Datos, pero también participe en
                  proyectos en la parte del Frontend con React, Redux y
                  Bootstrap. Estoy a dos materias de terminar la carrera
                  Analista Programador en la Universidad, la cual me dio
                  conocimientos sólidos sobre las arquitecturas, bases de datos,
                  paradigmas de programación y la tan importante Ingeniería de
                  Requerimientos.
                </p>

                <button
                  type="button"
                  className="btn btn-outline-light"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Hire Me
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="false"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Hire me!
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <a
                          href="https://github.com/Chino-LexJs"
                          target="_blank"
                          className="m-2 btn btn-outline-secondary"
                        >
                          Go to Github
                        </a>
                        <a
                          href="https://www.linkedin.com/in/alex-villanueva-fullstack/"
                          target="_blank"
                          className="m-2 btn btn-outline-secondary"
                        >
                          Go to LinkedIn
                        </a>
                        <a
                          href="mailto:alex_villanuevasoto@hotmail.com"
                          target="_blank"
                          className="m-2 btn btn-outline-secondary"
                        >
                          Send me an Email
                        </a>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="row py-4">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Skills</h1>

              {skills.map((skill, index) => (
                <div className="py-3" key={index}>
                  <h5> {skill.title} </h5>
                  <div className="progress">
                    <div
                      className="progress-bar bg-secondary"
                      role="progress-bar"
                      style={{ width: `${skill.percentege}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light h-100">
            <div className="card-body pt-4">
              <h1>Experience</h1>
              <ul className="pt-2">
                {experiences.map((experience, index) => (
                  <li className="pt-2" key={index}>
                    <h3> {experience.title} </h3>
                    <h5> {`${experience.from} - ${experience.to}`} </h5>
                    <p>{experience.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center text-light">Portfolio</h1>
                </div>
                {projects.map(({ name, description, image }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        <img
                          src={`/${image}`}
                          alt=""
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href="#!">Know More</a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-md-12 mt-4">
                  <div className="text-center">
                    <Link href="/portfolio">
                      <a className="btn btn-outline-light">More Projects</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default index;
