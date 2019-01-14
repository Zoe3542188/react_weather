import React from "react";
import { Tab, Tabs } from 'react-bootstrap';
import './components.css';


class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 2
    };
  }

  handleSelect = (key) =>{
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

export default ControlledTabs;