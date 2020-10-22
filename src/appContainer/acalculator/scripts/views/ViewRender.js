import React from 'react';

import ThemeWrapper from "./ThemeWrapper";
import Page from "../../../Page";
import Header from "./Header";

import Calculator from './Calculator';
import GithubIcon from '../components/githubIcon';
import Styles from '../../scss/home.module.scss';

export default function () {
  return (
    <ThemeWrapper>
      <Page
        header={<Header />}
        content={
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
      />
    </ThemeWrapper>
  );
}
