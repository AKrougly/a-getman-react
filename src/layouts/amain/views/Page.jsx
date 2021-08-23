import React, { useState } from "react";

import PageTemplate from "../../PageTemplate";
import Header from "./Header";
import Content from "./Content";
import Drawer from "./Drawer";

export default function Page(props) {

  const [open, setOpen] = useState(false);

  return (
    <PageTemplate
      Header={<Header props={props} onOpen={() => setOpen(true)} />}
      Drawer={
        <Drawer
          {...props}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        />
      }
      Content={<Content {...props} />}
      props={props}
    />
  );
}
