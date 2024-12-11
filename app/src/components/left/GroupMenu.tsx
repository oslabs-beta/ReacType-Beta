import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';

interface GroupMenuProps {
  groupName: string;
  elements: { name: string; id: number }[];
  handleDelete: (id: number) => void;
}

const GroupMenu: React.FC<GroupMenuProps> = ({ groupName, elements, handleDelete }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleElementClick = (element: { name: string; id: number }) => {
    console.log(`Selected: ${element.name} with ID: ${element.id}`);
    handleCloseMenu();
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpenMenu}
        style={{ textTransform: 'capitalize', marginBottom: '8px' }}
      >
        {groupName}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        {elements.map((element) => (
          <MenuItem
            key={element.id}
            onClick={() => handleElementClick(element)}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            {element.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default GroupMenu;
