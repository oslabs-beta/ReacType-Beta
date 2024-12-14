import Grid from '@mui/material/Grid';
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ComponentPanelItem from '../right/ComponentPanelItem';

/**
 * Displays a panel of reusable components that are not root components.
 * This panel lists components that can be reused across different parts of the application.
 * Each component item in the list is capable of being focused, which is visually indicated.
 * @params
 * @returns {JSX.Element} A container that holds a list of `ComponentPanelItem` elements,
 * each representing a non-root component from the application state. These components are not
 * designated as top-level pages or structures but are reusable UI elements.
 */
const ComponentsContainer = ({ handleClickEditModule }): JSX.Element => {
  const classes = useStyles();
  const state = useSelector((store: RootState) => store.appState);

  const isFocus = (targetId: number) => (state.canvasFocus.componentId === targetId);
  return (
    <div>
      <div className={classes.panelWrapper}>
        <div className={classes.panelWrapperList}>
          {/* <h4 className={classes.darkThemeFontColor}>Reusable Components</h4> */}
          <Grid container direction="column" alignContent={'center'}>
            {state.components
              .filter((comp) => !state.rootComponents.includes(comp.id))
              .map((comp) => (
                  <ComponentPanelItem
                    isFocus={isFocus(comp.id)}
                    key={`comp-${comp.id}`}
                    name={comp.name}
                    id={comp.id}
                    root={false}
                    isThemeLight={false}
                    handleClickEditModule = {handleClickEditModule}
                  />
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  panelWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1
    // overflow: 'auto',
  },
  panelWrapperList: {
    minHeight: 'auto'
  },
  lightThemeFontColor: {
    color: '#fff'
  },
  darkThemeFontColor: {
    color: '#fff'
  }
});

export default ComponentsContainer;
