// import { BreakfastDiningOutlined } from '@mui/icons-material';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* eslint-disable */
const CONTEXT_MENU_WIDTH = 225;
const CONTEXT_MENU_HEIGHT = 380;

const CONTEXT_MENU_PADDING = 3.5;

const ELEMENT_HEIGHT_SIZE = '15px';

function ContextMenu({
  mouseXState,
  mouseYState,
  selectedItem,
  menuTypeState,
  selectedItemId,
  targetColor,
  PanRef
}) {
  const dispatch = useDispatch();

  const [annoyingPopupOpen, setAnnoyingPopupOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState('none');
  //

  const [singleMenuValue, setSingleMenuValue] = useState('');
  //

  //@ts-ignore
  const appState = useSelector((store: RootState) => store.appState);

  //@ts-ignore
  const contextParam = useSelector((store: RootState) => store.contextSlice); // this is literally just passed in on everything else, i have no idea what it does, you can look it up, but other files are literally just taking it and passing it back in.

  //let selectedItemId = useRef(-1); // dont trigger rerenders cause this shouldent change.
  // attach key listener

  // The below is for all key events

  function keyStrokeFunction(key) {
    switch (key.key) {
      case 'Enter': {
        setOpenMenu('none');
        break;
      }
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', keyStrokeFunction);
  }, [openMenu]);

  // // set the focus on focus change
  // useEffect(() => {
  //   let thing = selectedItem; // look up th dom to see when we get to an element we like (if you right click on the span element you should still count as clicking the ReactTypeComponent element)
  //   for (let i = 0; i < 5; i++) {
  //     // just things that we want to stop on...
  //     if (!thing.id || !thing.id.match(/canv/)) {
  //       thing = thing.parentElement;
  //     } else {
  //       // once were all said and done...
  //       if (thing.id.match(/^canv[0-9]/)) {
  //         MenuTypeRef.current = 'CanvasElement';
  //       } else {
  //         MenuTypeRef.current = '?'; // set this back to unknown if you click out.
  //       }

  //       selectedItemId.current = Number(thing.id.split('canv')[1]); // this code tells us what hypothetical reaactType item we are selected, not just which DOM element.
  //       break;
  //     }
  //   }

  //   dispatch({
  //     type: 'appState/changeFocus',
  //     payload: {
  //       componentId: appState.canvasFocus.componentId,
  //       childId: selectedItemId.current // no more current
  //     }
  //   });
  // }, [selectedItem]); // re trigger if the position of the context menu changes.

  // remove the keystroke listener on unmount.
  useEffect(
    // the next line is intentional, im not an idiot, do not remove.
    () => () => {
      document.removeEventListener('keydown', keyStrokeFunction); // remove old one first if we have
    },
    [openMenu]
  );
  //////////////////// the above ensures we clean up old key listeners to prevent data leak //////////////////////

  function singleMenuValueChange(
    event,
    stateTarget: string,
    stateUpdatePath: string,
    stateInnerTargetName: string
  ) {
    setSingleMenuValue(event.target.value);

    let correctChild = searchChildren(
      appState.components[appState.canvasFocus.componentId - 1].children, // -1 is because we are converting from an is (starts at 1) and an index.
      selectedItemId
    ); // helper function below

    let fullAttributes = correctChild[stateTarget];
    if (fullAttributes === undefined) fullAttributes = '';
    dispatch({
      type: `${stateUpdatePath}`,
      payload: {
        [stateTarget]: {
          ...fullAttributes,
          [stateInnerTargetName]: event.target.value // this code puts the params into the right places.
        },
        contextParam: contextParam
      }
    });
  }

  let xOff = mouseXState + 2;
  if (mouseXState > window.innerWidth - CONTEXT_MENU_WIDTH) {
    xOff -= CONTEXT_MENU_WIDTH; // move it "flip" it back
    xOff -= 4;
  }

  let yOff = mouseYState + 2;
  if (mouseYState > window.innerHeight - CONTEXT_MENU_HEIGHT) {
    yOff -= CONTEXT_MENU_HEIGHT; // bump "flip" it up
    yOff -= 4; // move it back 4px cause we moved it forward 2px;
  }

  function handleStandardFieldButtonClick(
    fieldToOpen: string,
    stateSlice,
    innerTarget
  ) {
    if (openMenu === fieldToOpen) return;
    setOpenMenu(fieldToOpen); // this one line closes other fields and opens this one

    let correctChild = searchChildren(
      appState.components[appState.canvasFocus.componentId - 1].children, // this is simply searching for the correct actual component from the dom elemnt ref (also -1 is cause of 1 indexed ids to 0 indexed arrays cause whoever made the redux store was not a programmer apparently.)
      selectedItemId
    ); // helper function below

    let displayText = correctChild[stateSlice][innerTarget];
    if (displayText === undefined) displayText = '';
    setSingleMenuValue(displayText);
  }

  return (
    // mouseX and mouseY are not use state,
    // so if they change, this will not change unless it rerenders.

    <div
      style={{
        backgroundColor: targetColor,
        zIndex: '100080',
        margin: '0px',
        padding: `${CONTEXT_MENU_PADDING}px`,
        position: 'fixed',
        left: `${xOff}px`,
        top: `${yOff}px`,
        width: `${CONTEXT_MENU_WIDTH}px`,
        height: `${CONTEXT_MENU_HEIGHT}px`
      }}
      ref={PanRef}
    >
      {menuTypeState === 'CanvasElement' && (
        <div>
          {false && (
            <div
              style={{
                backgroundColor: 'green',
                width: '500px',
                height: '500px',
                zIndex: '99999999999999999'
              }}
            >
              ANNOYING POPUP!!!!!
            </div>
          )}
          {openMenu !== 'editClassname' && (
            <button
              onClick={() => {
                handleStandardFieldButtonClick(
                  'editClassname',
                  'attributes',
                  'cssclasses'
                );
              }}
              style={{ padding: '0px', margin: '0px', width: '100%' }}
              onMouseOver={() => {
                console.log('open');
                setAnnoyingPopupOpen(true);
              }}
              onMouseOut={() => {
                console.log('close');
                setAnnoyingPopupOpen(false);
              }}
            >
              edit class list
            </button>
          )}
          {openMenu === 'editClassname' && (
            <input
              type="text"
              autoFocus
              value={singleMenuValue}
              onChange={(event) => {
                singleMenuValueChange(
                  event,
                  'attributes',
                  'appState/updateAttributes',
                  'cssclasses'
                );
              }}
              style={{
                border: 'none',
                padding: '0px',
                margin: '0px',
                marginTop: '1px',
                width: `${CONTEXT_MENU_WIDTH - CONTEXT_MENU_PADDING * 2}px`,
                height: ELEMENT_HEIGHT_SIZE,
                backgroundColor: `rgba(0, 0, 0, 0)`,
                overflow: 'hidden'
              }}
            ></input>
          )}
          <hr style={{ fontSize: '8px' }} />
          {openMenu !== 'editText' && (
            <button
              onClick={() => {
                handleStandardFieldButtonClick(
                  'editText',
                  'attributes',
                  'comptext'
                );
              }}
              style={{ padding: '0px', margin: '0px', width: '100%' }}
            >
              edit text
            </button>
          )}
          {openMenu === 'editText' && (
            <input
              type="text"
              autoFocus
              value={singleMenuValue}
              onChange={(event) => {
                singleMenuValueChange(
                  event,
                  'attributes',
                  'appState/updateAttributes',
                  'comptext'
                );
              }}
              style={{
                border: 'none',
                padding: '0px',
                margin: '0px',
                marginTop: '1px',
                width: `${CONTEXT_MENU_WIDTH - CONTEXT_MENU_PADDING * 2}px`,
                height: ELEMENT_HEIGHT_SIZE,
                backgroundColor: `rgba(0, 0, 0, 0)`,
                overflow: 'hidden'
              }}
            ></input>
          )}
          {openMenu !== 'editLink' && (
            <button
              onClick={() => {
                handleStandardFieldButtonClick(
                  'editLink',
                  'attributes',
                  'complink'
                );
              }}
              style={{ padding: '0px', margin: '0px', width: '100%' }}
            >
              edit link (?)
            </button>
          )}
          {openMenu === 'editLink' && (
            <input
              type="text"
              autoFocus
              value={singleMenuValue}
              onChange={(event) => {
                singleMenuValueChange(
                  event,
                  'attributes',
                  'appState/updateAttributes',
                  'complink'
                );
              }}
              style={{
                border: 'none',
                padding: '0px',
                margin: '0px',
                marginTop: '1px',
                width: `${CONTEXT_MENU_WIDTH - CONTEXT_MENU_PADDING * 2}px`,
                height: ELEMENT_HEIGHT_SIZE,
                backgroundColor: `rgba(0, 0, 0, 0)`,
                overflow: 'hidden'
              }}
            ></input>
          )}
          <hr style={{ fontSize: '8px' }} />
          {openMenu !== 'editBackgroundColor' && (
            <button
              onClick={() => {
                handleStandardFieldButtonClick(
                  'editBackgroundColor',
                  'style',
                  'backgroundColor'
                );
              }}
              style={{ padding: '0px', margin: '0px', width: '100%' }}
            >
              set background color
            </button>
          )}
          {openMenu === 'editBackgroundColor' && (
            <input
              type="text"
              autoFocus
              value={singleMenuValue}
              onChange={(event) => {
                singleMenuValueChange(
                  event,
                  'style',
                  'appState/updateCss',
                  'backgroundColor'
                );
              }}
              style={{
                border: 'none',
                padding: '0px',
                margin: '0px',
                marginTop: '1px',
                width: `${CONTEXT_MENU_WIDTH - CONTEXT_MENU_PADDING * 2}px`,
                height: ELEMENT_HEIGHT_SIZE,
                backgroundColor: `rgba(0, 0, 0, 0)`,
                overflow: 'hidden'
              }}
            ></input>
          )}
        </div>
      )}
    </div>
  );
}
export default ContextMenu;

function searchChildren(children, target) {
  let correctChild;
  function searchChildrenInner(children, target) {
    for (let i = 0; i < children.length; i++) {
      if (children[i].childId === target) {
        correctChild = children[i];
        break; // done, only one.
      } else if (children[i].children) {
        searchChildrenInner(children[i].children, target); // your grandson and his grandson will continue the quest!
      }
    }
  }
  searchChildrenInner(children, target);
  return correctChild;
}
