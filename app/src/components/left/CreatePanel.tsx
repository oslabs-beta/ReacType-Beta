/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { emitEvent } from '../../helperFunctions/socket';
import { deleteElement } from '../../redux/reducers/slice/appStateSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import MUIItem from './MUIItem';
import HTMLItem from './HTMLItem';
import HTMLPanel from './HTMLPanel';
import ComponentDrag from './ComponentDrag';
import HeaderButton from './HeaderButton';

/**
 * Provides a user interface for managing HTMLitems & MUIItems in the application. It features accordions for different categories
 * of MUI components like Inputs, Data Display, Feedback, etc. Each category can be expanded to show respective MUI components
 * that can be dragged onto a canvas or deleted. It uses the `MUIItem` component to render each item and supports deleting items through a centralized method.
 *
 * @component
 * @param {Object} props - Component props, currently unused in the component's body and may be intended for future features or extensions.
 *
 * @returns {JSX.Element} The MUIDragDropPanel component, which renders an interactive list of MUI components categorized by function.
 */

const CreatePanel = (props): JSX.Element => {
  const dispatch = useDispatch();
  const state = useSelector((store: RootState) => store.appState);
  const contextParam = useSelector((store: RootState) => store.contextSlice);
  const roomCode = useSelector((store: RootState) => store.roomSlice.roomCode);
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null
  );

  const [MUIMode, setMUIMode] = useState(false);

  const handleDelete = (id: number): void => {
    dispatch(deleteElement({ id: id, contextParam: contextParam }));
    if (roomCode) {
      emitEvent('deleteElementAction', roomCode, {
        id,
        contextParam
      });
    }
  };

  const handleClickAdd = () => {
    setCreateModule(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClickAdd();
    }
  };
  // create a function to which you can pass in an array of strings, search
  // both state.HTMLTypes and state.MUITypes to see if any of their type.names match
  // an item in the array and return the item if so, depending on which list it originates from.
  const findTypes = function (array) {
    if (MUIMode === true)
      return state.HTMLTypes.filter((type) => array.includes(type.name))
        .map((option) => (
          <HTMLItem
            name={option.name}
            key={`html-${option.name}${option.id}`}
            id={option.id}
            icon={option.icon}
            handleDelete={handleDelete}
          />
        ))
        .concat(
          state.MUITypes.filter((type) => array.includes(type.name)).map(
            (option) => (
              <MUIItem
                name={option.name}
                key={`mui-${option.name}${option.id}`}
                id={option.id}
                icon={option.icon}
                handleDelete={handleDelete}
              />
            )
          )
        );
    else
      return state.HTMLTypes.filter((type) => array.includes(type.name)).map(
        (option) => (
          <HTMLItem
            name={option.name}
            key={`html-${option.name}${option.id}`}
            id={option.id}
            icon={option.icon}
            handleDelete={handleDelete}
          />
        )
      );
  };
  const HTMLElements = findTypes([
    'Img',
    'Paragraph',
    'Header 1',
    'Header 2',
    'Span',
    'Label',
    'Link'
  ]);

  const InputElements = findTypes(['Input', 'Form', 'Button']);
  const visualComponents = findTypes([
    'Image List',
    'Icon',
    'Avatar',
    'Badge',
    'Img'
  ]);

  const textComponents = findTypes([
    'Paragraph',
    'Header 1',
    'Header 2',
    'Span',
    'Label',
    'Link'
  ]);

  // create containers - box/container/stack

  const containers = findTypes([
    'Div',
    'Box',
    'Container',
    'Stack',
    'Dividers'
  ]);

  // create buttons -- button/floating button/chips

  const buttons = findTypes(['Button', 'Fab', 'Chip']);

  // create inputs -- textfield, checkbox, switch, rating, sliders

  const inputs = findTypes([
    'Input',
    'Form',
    'TextField',
    'Checkbox',
    'Switch',
    'Rating',
    'Slider'
  ]);

  // create lists - OL, UL, LI, TransferList

  const lists = findTypes(['Ordered List', 'List', 'Unordered List']);
  //create forms -- Form, ButtonGroup, ToggleButtonGroup, Select, AutoComplete
  const HTMLlists = findTypes([
    'Ordered List',
    'List',
    'Unordered List',
    'Menu'
  ]);
  const forms = findTypes([
    'Form',
    'ButtonGroup',
    'ToggleButtonGroup',
    'Select',
    'AutoComplete'
  ]);
  // create displays --- Modal, POpover, Popper, Transition
  const displays = findTypes(['Modal', 'Popover', 'Popper', 'Transition']);
  // create layouts -- table, accordion, appbar, tabs
  const layouts = findTypes([
    'Table',
    'Grid',
    'Accordion',
    'AppBar',
    'Tabs',
    'Card',
    'Paper'
  ]);
  // create navigation -- menu, bottomnav, breadcrumbs, drawer, stepper, tabs, speeddial
  const navComponents = findTypes([
    'Menu',
    'Bottom Navigation',
    'Breadcrumbs',
    'Drawer',
    'Stepper',
    'Speed Dial'
  ]);

  const makeMenuCategory = (typeArray, name, idx, infoText) =>
    name ? (
      <>
        <Box
          sx={{
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '6px'
          }}
        >
          <Button component="label" id={name + '-button'} key={name + idx}>
            {name}
          </Button>
        </Box>
        <Grid container spacing={2} key={name + idx}>
          {typeArray}
        </Grid>
      </>
    ) : (
      <>
        <Grid container spacing={2}>
          {typeArray}
        </Grid>
      </>
    );

  return (
    <div className={'MUIItems'}>
      <Button
        component="label"
        aria-label="Custom Elements"
        id="customElements"
        key="customElements-header"
        sx={{ textAlign: 'center' }}
      >
        Custom Elements
      </Button>
      <HTMLPanel isThemeLight={props.isThemeLight} />
      {makeMenuCategory([
        state.HTMLTypes.filter((type) => type.id > 10000).map(
          (option, index) => (
            <HTMLItem
              name={option.name}
              key={`custom-${option.name}${option.id}${index}`}
              id={option.id}
              icon={option.icon}
              handleDelete={handleDelete}
            />
          )
        )
      ])}
      <FormGroup>
        <Box display="flex" alignItems="center" justifyContent="center">
          <p className="smallerText" id="HTML-switch">
            HTML
          </p>
          <Switch
            checked={MUIMode}
            onChange={() => setMUIMode(!MUIMode)}
            inputProps={{ 'aria-label': 'HTML + MUI switch' }}
            sx={{ margin: '0 10px' }} // Adjust spacing between text and switch
          />

          <HeaderButton
            headerName="HTML + MUI"
            infoText="Material UI (or MUI) is a customizable library of React components. Toggle this switch on to see both HTML elements and MUI components that you can drag onto your canvas. For more about MUI, ee https://mui.com for more details."
          />
        </Box>
      </FormGroup>
      {MUIMode
        ? [
            [visualComponents, 'visual'],
            [containers, 'containers'],
            [buttons, 'buttons'],
            [textComponents, 'text'],
            [lists, 'lists'],
            [displays, 'displays'],
            [layouts, 'layouts'],
            [forms, 'forms'],
            [navComponents, 'navigation']
          ].map((item, idx) => makeMenuCategory(item[0], item[1], idx))
        : [
            [HTMLElements, 'Text and Visual'],
            [InputElements, 'Forms and Inputs'],
            [HTMLlists, 'lists']
          ].map((item, idx) => makeMenuCategory(item[0], item[1], idx))}
    </div>
  );
};

export default CreatePanel;
