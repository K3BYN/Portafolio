import Container from "../components/container";
import { skills, education, h_Skills, s_Skills, projects } from "../perfil";
import Link from "next/link";
const Index = () => {
  return (
    <Container>
      {/**Header card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="perfil.jpeg"
                  alt="Kevin Hernández"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="col-md-8">
                <h1>Kevin Hernández</h1>
                <h4>FullStack Developer</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  repellendus beatae fuga unde vero excepturi dolorem sapiente,
                  consequatur ab illo numquam iusto saepe dolorum voluptatum!
                  Cum voluptatum et quia eligendi.
                </p>
                <a href="/hireme">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/** Second section */}
      <div className="row py-4">
        <div className="col md-4">
          <div className="card text-white bg-dark">
            <div className="card-body">
              <h1>Skills</h1>
              {/* Skill Progress  */}
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-4" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card text-white bg-secondary">
            <div className="card-body">
              <h1>Education</h1>
              <ul>
                {education.map(
                  ({ school, career, from, semester, schedule, to }, i) => (
                    <li className="py-2" key={i}>
                      <h2>{school}</h2>
                      <h3>
                        {career} {from} {to ? `- ${to}` : "- Current"}
                      </h3>
                      <h5>{semester}</h5>
                      <h5>{schedule}</h5>
                      <br />
                      <hr />
                    </li>
                  )
                )}
              </ul>
              <h1>Hard Skills</h1>
              <ul>
                {h_Skills.map(({ H_Name }, i) => (
                  <li key={i}>
                    <h5>{H_Name}</h5>
                  </li>
                ))}
              </ul>
              <hr />
              <h1>Soft Skills</h1>
              <ul>
                {s_Skills.map(({ S_Name }, i) => (
                  <li key={i}>
                    <h5>{S_Name}</h5>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/** Portfolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="tex-center text-light">Portfolio</h1>
              </div>
              {projects.map(({ name, description, image }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={`/${image}`} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!"> Know more</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-12">
              <div className="text-center mt-3">
                <Link href="/porfolio">
                  <a className="btn btn-outline-light">More Projects</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Index;