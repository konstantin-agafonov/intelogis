import ShippingRequestsTable from "./components/shipping-requests-table.component";
import {Row,Col} from "antd";

function App() {
  return (
    <div className="wrapper">
      <Row>
        <Col md={24} lg={12}>
          <ShippingRequestsTable/>
        </Col>
        <Col md={24} lg={12}>
            col 2
        </Col>
      </Row>
    </div>
  );
}

export default App;
