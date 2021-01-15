import React, { ReactElement } from 'react';
import { ComponentOne } from '../component-one/component.one';
import { useStylesApp } from './app.styles';

export function App(): ReactElement {
  const classes = useStylesApp();

  return (
    <div className={classes.app}>
      <div className={classes.scale}>hello</div>
      <div className={classes.mainWrap}>
        <div className={classes.main}>
          <ComponentOne text="world" />
        </div>
      </div>
    </div>
  );
}
