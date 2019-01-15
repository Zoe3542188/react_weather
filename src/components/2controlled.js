import React, {useState} from "react";
import { Tab, Tabs } from 'react-bootstrap';
import './components.css';

export default function ControlledTabs(props) {
  const [key, setKey] = useState(2);

  function handleSelect(key){
    setKey(key);
  }

    return (
     <Tabs className="Tab-list" activeKey={key} onSelect={handleSelect}>
        <Tab eventKey={1} title="Historical"></Tab>
        <Tab eventKey={2} title=" Current "></Tab>
        <Tab eventKey={3} title=" Forecast "></Tab>
      </Tabs>
    );
}

/* non hooks version
class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 2
    };
  }

  handleSelect = (key) =>{
    alert(key);
    this.setState({ key });
  }

  render() {
    return (
     <Tabs className="Tab-list" activeKey={this.state.key} onSelect={this.handleSelect}>
        <Tab eventKey={1} title="Historical"></Tab>
        <Tab eventKey={2} title=" Current "></Tab>
        <Tab eventKey={3} title=" Forecast "></Tab>
      </Tabs>
    );
  }
}

export default ControlledTabs;*/

