import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { ItemTypes } from '../../constants/ItemTypes';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import makeStyles from '@mui/styles/makeStyles';
import { useDrag } from 'react-dnd';
import CodeIcon from '@mui/icons-material/Code';
import * as Icons from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import createModal from '../right/createModal';
import { addChild } from '../../redux/reducers/slice/appStateSlice';
import { emitEvent } from '../../helperFunctions/socket';
import { RootState } from '../../redux/store';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import RemoveIcon from '@mui/icons-material/Remove';

const useStyles = makeStyles({
  HTMLPanelItem: {
    height: 'auto',
    width: 'auto',
    fontSize: 'small',
    alignItems: 'left',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    cursor: 'grab'
  },
  lightThemeFontColor: {
    color: '#defaf8'
  },
  darkThemeFontColor: {
    color: '#8F8F8F'
  }
});

/**
 * Represents a draggable HTML element item in the component panel. This component allows users
 * to drag HTML element types into the canvas or delete instances of them from the project.
 * It supports interaction through dragging to add and a button to trigger a deletion modal.
 *
 * Props:
 * @param {string} name - The display name of the HTML element.
 * @param {number} id - The unique identifier for the HTML element type.
 * @param {string} icon - The name of the icon from Material-UI icons that represents the element.
 * @param {Function} handleDelete - Function to handle the deletion of all instances of the element.
 *
 * @returns {JSX.Element} The rendered HTML item component.
 */
const HTMLItem: React.FC<{
  name: string;
  id: number;
  icon: any;
  handleDelete: (id: number) => void;
}> = ({ name, id, icon, handleDelete }): JSX.Element => {
  const IconComponent = Icons[icon];

  const roomCode = useSelector((store: RootState) => store.roomSlice.roomCode); // current roomCode

  const classes = useStyles();
  const [modal, setModal] = useState(null);
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.INSTANCE,
      newInstance: true,
      instanceType: 'HTML Element',
      name,
      icon,
      instanceTypeId: id
    },
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const closeModal = () => setModal(null);
  const deleteAllInstances = (deleteID: number) => {
    const children = (
      <List className="export-preference">
        <ListItem
          id="export-modal"
          key={`clear${deleteID}`}
          onClick={() => handleDelete(deleteID)}
          style={{
            border: '1px solid #C6C6C6',
            marginBottom: '2%',
            marginTop: '5%'
          }}
        >
          <ListItemText
            primary={'Yes, delete all instances'}
            style={{ textAlign: 'center', color: 'white' }}
            onClick={closeModal}
          />
        </ListItem>
        <ListItem
          id="export-modal"
          key={`close${deleteID}`}
          onClick={closeModal}
          style={{
            border: '1px solid #C6C6C6',
            marginBottom: '2%',
            marginTop: '5%'
          }}
        >
          <ListItemText
            primary={'No, do not delete element'}
            style={{ textAlign: 'center', color: 'white' }}
            onClick={closeModal}
          />
        </ListItem>
      </List>
    );
    setModal(
      createModal({
        closeModal,
        children,
        message:
          'Deleting this element will delete all instances of this element within the application.\nDo you still wish to proceed?',
        primBtnLabel: null,
        primBtnAction: null,
        secBtnAction: null,
        secBtnLabel: null,
        open: true
      })
    );
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    const childData = {
      type: 'HTML Element',
      typeId: id,
      childId: null,
      contextParam: {
        allContext: []
      }
    };

    dispatch(addChild(childData));
    if (roomCode) {
      // Emit 'addChildAction' event to the server
      emitEvent('addChildAction', roomCode, childData);
    }
  };

  // updated the id's to reflect the new element types input and label

  return (
    <Grid item xs={5} key={`html-g${name}`} id="HTMLgrid">
      {id <= 20 && (
        <div
          ref={drag}
          style={{
            backgroundColor: 'rgb(30, 32, 36)',
            borderColor: 'rgb(30, 32, 36)',
            width: '100%'
          }}
          className={`${classes.HTMLPanelItem} ${classes.darkThemeFontColor}`}
          id="HTMLItem"
          onClick={() => {
            handleClick();
          }}
        >
          {typeof IconComponent !== 'undefined' && (
            <IconComponent fontSize="small" align-items="center" />
          )}
          {name}
        </div>
      )}

      {id > 10000 && (
        <div
          ref={drag}
          style={{
            width: '100%',
            margin: '10px 6px 6px',
            borderColor: '#a9a9a9',
            textAlign: 'center'
            // lineHeight: '1.3rem'
          }}
          className={`${classes.HTMLPanelItem} ${classes.darkThemeFontColor}`}
          id="HTMLItem"
          onClick={() => {
            handleClick();
          }}
        >
          {name}
          <button
            id="newElement"
            style={{ color: '#C6C6C6' }}
            onClick={() => deleteAllInstances(id)}
          >
            <RemoveIcon className="deleteBtn" fontSize="small" />
          </button>
        </div>
      )}
      {modal}
    </Grid>
  );
};

export default HTMLItem;
