import React, { useState } from 'react';

import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ComponentDrag from './ComponentDrag';
import AddModule from '../left/AddModule';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import ComponentsContainer from './ComponentsContainer';
import CreateMenu from './CreateMenu';

interface ModulePanelProps {
  isThemeLight: boolean;
}

const ModulePanel: React.FC<ModulePanelProps> = ({ isThemeLight }) => {
  const state = useSelector((store: RootState) => store.appState);
  const [isCreatingModule, setIsCreatingModule] = useState(false);
  const [isEditingModule, setIsEditingModule] = useState(false);

  const customComponents = state.components.filter(
    (comp) => !state.rootComponents.includes(comp.id)
  );

  const handleClickAddModule = () => {
    setIsCreatingModule(true);
  };

  // Add an edit icon on each module ⭕️
  // When edit icon is clicked open up create tab for that module ⭕️
  // Fix alert pop-up (not showing after module creation due to state change causing re-render) ⭕️
  // May need to move alert functionality to this component & display after setIsCreatingModule is set to false - maybe useEffect ⭕️
  // Fix component creation panel design ⭕️
  // Add an x button to Module Creator panel ✅
  // Fix tooltip ⭕️
  // Open Module editor when clicking on a component ❌
  // should pass prop of the selected module ❌

  return (
    <div>
      {isCreatingModule ? (
        <AddModule
          setIsCreatingModule={setIsCreatingModule}
          isThemeLight={false}
        />
      ) : (
        <div style={{ display: 'grid', placeItems: 'center', margin: '30px' }}>
          <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            style={{
              backgroundColor: '#f88e16',
              border: 'none',
              color: 'white',
              fontSize: '12px',
              padding: '2px 15px',
              cursor: 'pointer',
              marginRight: '10px',
              marginLeft: '5px',
              borderRadius: '10px'
            }}
            onClick={handleClickAddModule}
          >
            Add Module
          </Button>
        </div>
      )}
      <ComponentDrag
        handleClickEditModule={handleClickEditModule}
        isVisible={true}
        isThemeLight={false}
      />
      <div
        style={{
          color: '#f88e16',
          textAlign: 'center',
          padding: '20px',
          border: '1px solid #101012'
        }}
      >
        Custom Modules
      </div>
      <ComponentsContainer />
    </div>
  );
};

export default ModulePanel;
