import React from "react";

import ThemeWrapper from "./appContainer/ThemeWrapper";
import ErrorWrapper from "./appContainer/ErrorWrapper";
import NotifyWrapper from "./appContainer/NotifyWrapper";

import Router from "./appContainer/Router";

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
