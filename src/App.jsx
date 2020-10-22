import React from "react";

import ErrorWrapper from "./appContainer/ErrorWrapper";
import NotifyWrapper from "./appContainer/NotifyWrapper";

import Router from "./appContainer/Router";

export default function App() {
  return (
		<ErrorWrapper>
			<NotifyWrapper>
			  <Router />
			</NotifyWrapper>
		</ErrorWrapper>
  );
}
