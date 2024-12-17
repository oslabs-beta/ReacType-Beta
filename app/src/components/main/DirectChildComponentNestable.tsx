/* eslint-disable max-len */
import React from 'react';
import { Component, ChildElement } from '../../interfaces/Interfaces';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { ItemTypes } from '../../constants/ItemTypes';
import DeleteButton from './DeleteButton';
import { combineStyles } from '../../helperFunctions/combineStyles';
import globalDefaultStyle from '../../public/styles/globalDefaultStyles';
import { useDispatch, useSelector } from 'react-redux';
import { changeFocus } from '../../redux/reducers/slice/appStateSlice';
import { RootState } from '../../redux/store';
import { emitEvent } from '../../helperFunctions/socket';
import renderChildren from '../../helperFunctions/renderChildren';
import validateNewParent from '../../helperFunctions/changePositionValidation';
import componentNest from '../../helperFunctions/componentNestValidation';
/**
 * Renders a direct child component within the canvas, allowing for user interaction such as dragging and focusing.
 * The component displays the name and includes a delete button for removing the component from the canvas.
 *
 * @param {Object} props - Component props.
 * @param {number} props.childId - Unique identifier for the child component.
 * @param {string} props.type - The type of the component (e.g., HTML element, custom component).
 * @param {number} props.typeId - The type identifier which corresponds to a specific instance or class of components.
 * @param {string} props.name - The display name of the component.
 * @returns {JSX.Element} A draggable and clickable area representing the component with its name and a delete button.
 */
function DirectChildComponentNestable({
  childId,
  type,
  typeId,
  style,
  children,
  name,
  attributes
}: ChildElement): JSX.Element {
  const state = useSelector((store: RootState) => store.appState);
  const roomCode = useSelector((store: RootState) => store.roomSlice.roomCode);
  const contextParam = useSelector((store: RootState) => store.contextSlice);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const snapShotFunc = () => {
    // makes a deep clone of state
    const deepCopiedState = JSON.parse(JSON.stringify(state));
    const focusIndex = state.canvasFocus.componentId - 1;
    // pushes the last user action on the canvas into the past array of Component
    dispatch(
      snapShotAction({
        focusIndex: focusIndex,
        deepCopiedState: deepCopiedState
      })
    );
  };
  // find the top-level component corresponding to this instance of the component
  // find the current component to render on the canvas
  const referencedComponent: Component = state.components.find(
    (elem: Component) => elem.id === typeId
  );

  const [{ isDragging }, drag] = useDrag({
    // setting item attributes to be referenced when updating state with new instance of dragged item
    item: {
      type: ItemTypes.INSTANCE,
      newInstance: false,
      childId: childId,
      instanceType: type,
      instanceTypeId: typeId,
      name: name
    },

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });
  const changeFocusFunction = (componentId: number, childId: number | null) => {
    dispatch(changeFocus({ componentId, childId }));
    if (roomCode) {
      emitEvent('changeFocusAction', roomCode, {
        componentId: componentId,
        childId: childId
      });
    }
  };

  // onClickHandler is responsible for changing the focused component and child component
  function onClickHandler(event) {
    event.stopPropagation();
    changeFocusFunction(state.canvasFocus.componentId, childId);
  }
  // combine all styles so that higher priority style specifications overrule lower priority style specifications
  // priority order is 1) style directly set for this child (style), 2) style of the referenced component, and 3) default styling
  const interactiveStyle = {
    border:
      state.canvasFocus.childId === childId
        ? '3px solid #0671e3'
        : '1px Solid grey',
    boxShadow:
      state.canvasFocus.childId === childId ? '1px 1px 3px #a7cced' : ''
  };

  const combinedStyle = combineStyles(
    combineStyles(globalDefaultStyle, referencedComponent.style),
    interactiveStyle
  );
  // Renders name and not children of subcomponents to clean up Canvas view when dragging components
  // into the main canvas.  To render html elements on canvas, import and invoke renderChildren
  return (
    <div onClick={onClickHandler} style={combinedStyle} ref={drag}>
      <span>
        {/* render name and delete button X */}
        <strong style={{ color: 'white' }}>{name}</strong>
        <DeleteButton id={childId} name={name} />
      </span>
    </div>
  );
}

export default DirectChildComponent;
