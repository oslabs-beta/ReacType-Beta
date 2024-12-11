/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MeetingProvider } from '@videosdk.live/react-sdk';
import makeStyles from '@mui/styles/makeStyles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import arrow from '../main/Arrow';
import { changeProjectType } from '../../redux/reducers/slice/appStateSlice';
import { RootState } from '../../redux/store';
import Chatroom from './ChatRoom';
import CustomizationPanel from '../../containers/CustomizationPanel';
import StylesEditor from './StylesEditor';
import Tree from '../../tree/TreeChart';
import ContextManager from '../ContextAPIManager/ContextManager';
import StateManager from '../StateManagement/StateManagement';

const videoSDKToken = `${import.meta.env.VITE_VIDEOSDK_TOKEN}`;

/**
 * A central navigation component that provides tabs for switching between various features and functionalities
 * in the application, such as live chat, creation panels, customization, and more. It handles dynamic tab content
 * rendering based on the selected tab and allows project type switching through a dropdown menu.
 * This component also includes integration with a video SDK for collaboration features and manages theme settings.
 *
 * @param {Object} props - Component props.
 * @param {Function} props.setBottomShow - Function to toggle the visibility of the bottom panel.
 * @param {boolean} props.isThemeLight - Indicates if the light theme is active to adjust the styling appropriately.
 *
 * Redux State Dependencies:
 * - `appState`: Contains the application state including the current project type and components for the tree chart.
 * - `contextSlice`: Used to pass additional parameters when changing the project type.
 * - `roomSlice`: Provides meeting ID and user details for video SDK configuration.
 *
 * @returns {JSX.Element} A React component that renders a tab interface with content panels corresponding to the selected tab.
 */
const BottomTabs = (props): JSX.Element => {
  const { setBottomShow, isThemeLight } = props;
  const dispatch = useDispatch();
  const state = useSelector((store: RootState) => store.appState);
  const contextParam = useSelector((store: RootState) => store.contextSlice);
  const collaborationRoom = useSelector((store: RootState) => store.roomSlice);

  const [tab, setTab] = useState(0);
  const classes = useStyles();
  const [theme, setTheme] = useState('solarized_light');

  const handleChange = (event: React.ChangeEvent, value: number) => {
    setTab(value);
  };

  const handleProjectChange = (event) => {
    const projectType = event.target.value;
    dispatch(changeProjectType({ projectType, contextParam }));
  };
  const { components } = state;

  arrow.renderArrow(state.canvasFocus?.childId);

  const showBottomPanel = () => {
    setBottomShow(true);
  };

  return (
    <MeetingProvider
      config={{
        meetingId: `${collaborationRoom.meetingId}`,
        micEnabled: false,
        webcamEnabled: false,
        name: `${collaborationRoom.userName}`,
      }}
      token={videoSDKToken}
    >
      <div
        className={`${classes.root} ${classes.rootLight}`}
        style={{
          backgroundColor: '#1E2024',
          zIndex: 1,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Tabs
            value={tab}
            onChange={handleChange}
            classes={{
              root: classes.tabsRoot,
              indicator: classes.tabsIndicator,
            }}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Live Chat"
              onClick={showBottomPanel}
              sx={{ borderTop: '2px solid #191919' }}
            />
            <Tab
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Customization"
              onClick={showBottomPanel}
              sx={{ borderTop: '2px solid #191919' }}
            />
            <Tab
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="CSS Editor"
              onClick={showBottomPanel}
              sx={{ borderTop: '2px solid #191919' }}
            />
            <Tab
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Component Tree"
              onClick={showBottomPanel}
            />
            <Tab
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Context Manager"
              onClick={showBottomPanel}
            />
            <Tab
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="State Manager"
              onClick={showBottomPanel}
            />
          </Tabs>

          <div className={classes.projectTypeWrapper}>
            <FormControl size="small">
              <Select
                variant="outlined"
                labelId="project-type-label"
                id="demo-simple-select"
                className={classes.projectSelector}
                value={state.projectType}
                onChange={handleProjectChange}
                MenuProps={{ disablePortal: true }}
                sx={{
                  color: '#131416',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#131416',
                  },
                }}
                style={{ color: '#9C9D9F' }}
              >
                <MenuItem style={{ color: 'white' }} value={'Classic React'}>
                  Classic React
                </MenuItem>
                <MenuItem style={{ color: 'white' }} value={'Gatsby.js'}>
                  Gatsby.js
                </MenuItem>
                <MenuItem style={{ color: 'white' }} value={'Next.js'}>
                  Next.js
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
        <div className="tab-content">
          {tab === 0 && <Chatroom />}
          {tab === 1 && <CustomizationPanel isThemeLight={isThemeLight} />}
          {tab === 2 && <StylesEditor theme={theme} setTheme={setTheme} />}
          {tab === 3 && <Tree data={components} />}
          {tab === 4 && <ContextManager theme={theme} setTheme={setTheme} />}
          {tab === 5 && (
            <StateManager
              theme={theme}
              setTheme={setTheme}
              isThemeLight={isThemeLight}
            />
          )}
        </div>
      </div>
    </MeetingProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
    color: '#E8E8E8',
  },
  rootLight: {
    backgroundColor: '#0671e3',
  },
  bottomHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    Width: '200px',
  },
  tabsRoot: {
    minHeight: '50%',
  },
  tabsIndicator: {
    backgroundColor: '#0671E3',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 170,
    height: 60,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: 'white',
      opacity: 1,
    },
    fontWeight: 300,
    '&$tabSelected': {
      color: 'white',
      backgroundColor: '#2D313A',
    },
    '&:focus': {
      color: 'white',
    },
  },
  tabSelected: {},
  typography: {
    padding: '24px',
  },
  padding: {
    padding: '0 16px',
  },
  switch: {
    marginRight: '10px',
    marginTop: '2px',
  },
  projectTypeWrapper: {
    marginTop: '10px',
    marginBotton: '10px',
    marginLeft: '10px',
  },
  projectSelector: {
    backgroundColor: '#131416',
    color: 'white',
    margin: '0 10px 10px 0',
  },
}));

export default BottomTabs;
