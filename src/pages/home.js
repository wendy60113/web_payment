import { Row, Col } from "react-bootstrap";
import CreditCard from "../components/CreditCard";
function home() {
  return (
    <div>
      <div className="bg"></div>
      <Row>
        <Col>
          <CreditCard />
        </Col>
        <Col>123</Col>
      </Row>
    </div>
  );
}
export default home;
