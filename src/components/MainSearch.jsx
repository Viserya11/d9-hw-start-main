import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchJobs, saveSearchValue } from "../redux/actions";
import Job from "./Job";

const MainSearch = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.value.value);
  const jobs = useSelector((state) => state.jobs.stock);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const isError = useSelector((state) => state.jobs.isError )

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(saveSearchValue(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchJobs(query));
  };

  return (
    <Container>
      {console.log(isError)}
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Link to="./Favorites">Favorites</Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {isError ? (<Alert variant="danger">Error</Alert>) : isLoading ? (
          <Spinner animation="border" />
        ) :  (
          <Col xs={10} className="mx-auto mb-5">
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
