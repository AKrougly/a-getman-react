import React from "react";

import PageTemplate from "../../PageTemplate";
import Header from "./Header";
import Content from "./Content";

class Page extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.setOpen = this.setOpen.bind(this);
  }
  
  setOpen(open) {
    this.setState({ ...this.state, isOpen: open });
  }

  render () {
    return (
      <PageTemplate
        Header={ <Header open={this.state.isOpen} /> }
        Drawer={ null }
        Content={ <Content {...this.props} /> }
      />
    );
  }
}

export default Page;
