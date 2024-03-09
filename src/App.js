import { Navbar, Container, Card, Form, Button, Nav } from "react-bootstrap";

const App = () => {
  return (
    <>
    <Navbar style={{ backgroundColor: 'purple' }} className="justify-content-between">
        {" "}
        {}
        <Navbar.Brand href="#home" className="text-dark">
          FITNESS
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#home" className="text-dark">
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="text-dark">
            About
          </Nav.Link>
          <Nav.Link href="#contact" className="text-dark">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>

      <Container className="mt-3 mb-4 flex ">
        <h1 className="text-center ">
          {" "}
          {}
          Welcome to your favorite Fitness Club
        </h1>
        <br />
        <div className=" d-flex  justify-content-evenly ">
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="text-center text-primary">
                Welcome to Our Fitness Haven
              </Card.Title>
              <Card.Text>
                Join our fitness club to embark on a transformative journey
                towards a healthier you! Our welcoming environment,
                state-of-the-art facilities, and expert trainers are here to
                guide you through invigorating workouts tailored to your fitness
                goals. Experience the joy of well-being and join us on the path
                to a stronger, more vibrant life.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border="success" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="text-center text-success">
                Unleash Your Potential
              </Card.Title>
              <Card.Text>
                At our fitness club, we believe in unlocking your full
                potential. Our diverse range of classes, from heart-pounding
                cardio to soothing yoga, ensures there's something for everyone.
                With a supportive community and top-notch equipment, you'll
                discover the motivation to push your limits and achieve the
                fitness milestones you've always dreamed of.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="danger" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="text-center text-danger">
                Elevate Your Fitness Journey
              </Card.Title>
              <Card.Text>
                Elevate your fitness experience with us! Our fitness club is not
                just a gym; it's a community that inspires and empowers. Whether
                you're a fitness enthusiast or just starting your wellness
                journey, our dedicated team is here to guide you. Join us and
                elevate your fitness journey to new heights!
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br />
        <br />

        <Form>
          {" "}
          {}
          <Form.Group className="mb-3">
            <div> <h2>Subscribe by filling the infos bellow </h2></div>
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last name " />
            <Form.Label>First name </Form.Label>
            <Form.Control type="text" placeholder="Enter First name" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default App;
