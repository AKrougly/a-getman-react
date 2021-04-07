import React from 'react';

import PageTemplate from "../../../PageTemplate";
import Header from "./Header";

import Calculator from './Calculator';
import GithubIcon from '../components/githubIcon';
import Styles from '../../scss/home.module.scss';

export default function (props) {
  return (
    <PageTemplate
      Header={<Header />}
      Content={
        <div className={Styles.home}>
          <div className={Styles.home__content}>
            <Calculator ref={(calculator) => this.calculator = calculator}
              {...this.props}
              onMouseDown={this.onMouseDown.bind(this)}
              buttonClick={this.onButtonClick.bind(this)}
              muteIconClick={this.onMuteIconClick.bind(this)} />
          </div>
          <GithubIcon />
        </div>
      }
      props={{palette: {primary: "cyan", secondary: "pink", type: "light", }}}
    />
  );
}
