import {Row,Col} from "antd";
import ShippingRequestsTable from "./components/shippingRequestsTable.component";
import ShippingMap from "./components/shippingMap.component";

function App() {
  return (
    <div className="wrapper">
      <Row>
        <Col md={24} lg={12}>
          <ShippingRequestsTable/>
        </Col>
        <Col md={24} lg={12}>
          <ShippingMap/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
