import React from "react";

import PageTemplate from "../PageTemplate";
import Header from "./Header";
import Content from "./Content";

export default function AboutView() {
  return (
    <PageTemplate
      Header={<Header />}
      Content={<Content />}
      props={{palette: {primary: "teal", secondary: "pink", type: "light", }}}
    />
  );
}
