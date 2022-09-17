import React from "react";
import Skills from "./Skills";
import CarouselNew from "./CarouselNew";
import Container from "react-bootstrap/Container";

const inskill = [
  {
    id: 1,
    icon: "table",
    item: "Data Analysis",
  },
  {
    id: 2,
    icon: "chart-line",
    item: "Data Science",
  },
  {
    id: 3,
    icon: "globe",
    item: "Web Development",
  },
  {
    id: 4,
    icon: "database",
    item: "RDBMS",
  },
  {
    id: 5,
    icon: "laptop-code",
    item: "Programming",
  },
  {
    id: 6,
    icon: "chart-pie",
    item: "Data Visualization",
  },
];
class Home extends React.Component {
  render() {
    return (
      <Container>
        <div class="newsec">
          <p className="tops">
            A highly motivated and hard-working individual with a strong
            understanding of key business concepts.I have a strong belief in how
            data and technology can help us work together better, innovate and
            solve urgent problems. I look foward to joining a like-minded team
            and create value together.
          </p>

          <Skills name={"paps"} inskill={inskill} />

          <CarouselNew />
        </div>
      </Container>
    );
  }
}
export default Home;
