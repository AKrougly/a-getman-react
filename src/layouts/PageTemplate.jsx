import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Print, NoPrint } from "./Print";
import TopFab from "./TopFab";

export default function PageTemplate({
  Header = null,
  Drawer = null,
  Content = null,
  print = null,
  topFab = true,
  props
}) {
  return (
    <Fragment>
      <NoPrint>
        {topFab && <TopFab />}
        {!!Drawer && Drawer}
        {!!Header && Header}
        {!!Content && Content}
      </NoPrint>
      <Print>{!!print && print}</Print>
    </Fragment>
  );
}

PageTemplate.propTypes = {
  topFab: PropTypes.bool,
  content: PropTypes.element,
  drawer: PropTypes.element,
  header: PropTypes.element,
  print: PropTypes.element
};
