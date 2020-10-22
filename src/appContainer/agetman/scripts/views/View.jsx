import React, { useState } from "react";

import ThemeWrapper from "./ThemeWrapper";
import Page from "../../../Page";
import Header from "./Header";
import Content from "./Content";
import Drawer from "./Drawer";

export default function View(props) {
  
  const [open, setOpen] = useState(false);

  return (
    <ThemeWrapper>
      <Page
        header={<Header onOpen={() => setOpen(true)} />}
        content={<Content {...props} />}
        drawer={
          <Drawer
            {...props}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          />
        }
      />
    </ThemeWrapper>
  );
}
