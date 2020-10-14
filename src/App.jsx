import React from "react";

import ErrorWrapper from "./scripts/components/ErrorWrapper";
import ThemeWrapper from "./scripts/components/ThemeWrapper";
import NotifyWrapper from "./scripts/components/NotifyWrapper";

import Router from "./scripts/components/Router";

export default function App() {
  return (
    <ThemeWrapper>
      <ErrorWrapper>
        <NotifyWrapper>
          <Router />
        </NotifyWrapper>
      </ErrorWrapper>
    </ThemeWrapper>
  );
}
