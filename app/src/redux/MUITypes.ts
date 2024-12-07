import { MUIType } from '../interfaces/Interfaces';

/* INPUTS
21. Autocomplete
//separator id: 1000 (first index)
22. Button
23. Button Group
24. Checkbox
25. Floating Action Button
26. Radio Group
27. Rating
28. Select
29. Slider
30. Switch
31. Text Field
32. Transfer List // displays but checkboxes are not clickable
33. Toggle Button

DATA DISPLAY
34. Avatar
35. Badge
36. Chip
37. Divider
38. Icons
39. Material Icons
40. List
41. Table
42. Tooltip
43. Typography

FEEDBACK
44. Alert
45. Backdrop
46. Dialog
47. Progress
48. Skeleton
49. Snackbar

SURFACES
50. Accordion
51. App Bar
52. Card
53. Paper

NAVIGATION
54. Bottom Navigation
55. Breadcrumbs
56. Drawer
57. Link
58. Menu
59. Pagination
60. Speed Dial
61. Stepper
62. Tabs

LAYOUT
63. Box
64. Container
65. Grid - not included
66. Grid v2
68. Stack
69. Image List
70. Hidden - deprecated

UTILS
71. Click-Away Listener - not included
72. CSS Baseline - not included
73. Modal
74. No SSR - not included
75. Popover
76. Popper
77. Portal - not included
78. Textarea Autosize - not included
79. Transitions
80. useMediaQuery - not included */

const MUITypes: MUIType[] = [
  {
    id: 21,
    tag: 'autocomplete',
    name: 'Autocomplete',
    style: {},
    placeHolderShort: 'autocomplete',
    placeHolderLong: 'Material UI Autocomplete Component',
    icon: 'EditAttributes',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import TextField from '@mui/material/TextField';",
      "import Autocomplete from '@mui/material/Autocomplete';",
      '\nconst top100Films = [',
      "\t{ label: 'The Shawshank Redemption', year: 1994 },",
      "\t{ label: 'The Godfather', year: 1972 },",
      "\t{ label: 'The Godfather: Part II', year: 1974 },",
      "\t{ label: 'The Dark Knight', year: 2008 },",
      "\t{ label: '12 Angry Men', year: 1957 },",
      '];'
    ],
    stateAndEventHandlers: [],
    defaultProps: [
      "disablePortal options={top100Films} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label='Movie' />}"
    ],
    propOptions: [
      'options',
      'renderInput',
      'autoComplete',
      'autoHighlight',
      'autoSelect',
      'blurOnSelect',
      'ChipProps',
      'classes',
      'clearIcon',
      'clearOnBlur',
      'clearOnEscape',
      'clearText',
      'closeText',
      'componentsProps',
      'defaultValue',
      'disableClearable',
      'disableCloseOnSelect',
      'disabled',
      'disabledItemsFocusable',
      'disableListWrap',
      'disablePortal',
      'filterOptions',
      'filterSelectedOptions',
      'forcePopupIcon',
      'freeSolo',
      'fullWidth',
      'getLimitTagsText',
      'getOptionDisabled',
      'getOptionKey',
      'getOptionLabel',
      'groupBy',
      'handleHomeEndKeys',
      'id',
      'includeInputInList',
      'inputValue',
      'isOptionEqualToValue',
      'limitTags',
      'ListboxComponent',
      'ListboxProps',
      'loading',
      'loadingText',
      'multiple',
      'noOptionsText',
      'onChange',
      'onClose',
      'onHighlightChange',
      'onInputChange',
      'onOpen',
      'open',
      'openOnFocus',
      'openText',
      'PaperComponent',
      'PopperComponent',
      'popupIcon',
      'readOnly',
      'renderGroup',
      'renderOption',
      'renderTags',
      'selectOnFocus',
      'size',
      'slotProps',
      'sx',
      'value'
    ],
    jsx: ['<Autocomplete id="combo-box-demo"/>'],
    componentData: {
      type: 'Autocomplete',
      props: {
        disablePortal: true,
        id: 'combo-box-demo',
        options: 'top100Films',
        sx: { width: 300, m: 1 },
        renderInput: "params => <TextField {...params} label='Movie' />"
      },
      children: []
    },
    children: []
  },
  // do not move this separator element out of index 1 in this array
  // in componentReducer.ts, separator is referenced as 'initialState.HTMLTypes[1]
  {
    id: 1000,
    tag: 'separator',
    name: 'separator',
    style: { border: 'none' },
    placeHolderShort: '',
    placeHolderLong: '',
    icon: null,
    framework: '',
    nestable: true,
    imports: [],
    stateAndEventHandlers: [],
    propOptions: [],
    defaultProps: [],
    jsx: [],
    componentData: {},
    children: []
  },
  {
    id: 22,
    tag: 'mui button',
    name: 'Button',
    style: {},
    placeHolderShort: 'mui button',
    placeHolderLong: 'Material UI Button Component',
    icon: 'EditAttributes',
    framework: 'reactClassic',
    nestable: true,
    imports: ["import Button from '@mui/material/Button';"],
    stateAndEventHandlers: [],
    defaultProps: ['variant="contained"'],
    propOptions: [
      'children',
      'classes',
      'color',
      'component',
      'disabled',
      'disableElevation',
      'disableFocusRipple',
      'disableRipple',
      'endIcon',
      'fullWidth',
      'href',
      'size',
      'startIcon',
      'sx',
      'variant'
    ],
    jsx: ['<Button >Click Me</Button>'],
    componentData: {
      type: 'Button',
      props: {
        variant: 'contained',
        color: 'primary',
        sx: { m: 1 }
      },
      children: 'Click Me'
    },
    children: []
  },
  {
    id: 23,
    tag: 'btn group',
    name: 'ButtonGroup',
    style: {},
    placeHolderShort: 'btn group',
    placeHolderLong: 'Material UI ButtonGroup Component',
    icon: 'TableRows',
    framework: 'reactClassic',
    nestable: true,
    imports: [
      "import Button from '@mui/material/Button';",
      "import ButtonGroup from '@mui/material/ButtonGroup';"
    ],
    stateAndEventHandlers: [],
    defaultProps: ['variant="contained"'],
    propOptions: [
      'children',
      'classes',
      'color',
      'component',
      'disabled',
      'disableElevation',
      'disableFocusRipple',
      'disableRipple',
      'fullWidth',
      'orientation',
      'size',
      'sx',
      'variant'
    ],
    jsx: [
      '<ButtonGroup aria-label="Basic button group">',
      '  <Button>One</Button>',
      '  <Button>Two</Button>',
      '  <Button>Three</Button>',
      '</ButtonGroup>'
    ],
    componentData: {
      type: 'ButtonGroup',
      props: {
        variant: 'contained',
        'aria-label': 'Basic button group',
        sx: { m: 1 }
      },
      children: [
        { type: 'Button', children: 'One' },
        { type: 'Button', children: 'Two' },
        { type: 'Button', children: 'Three' }
      ]
    },
    children: []
  },
  {
    id: 24,
    tag: 'checkbox',
    name: 'Checkbox',
    style: {},
    placeHolderShort: 'checkbox',
    placeHolderLong: 'Material UI Checkbox Component',
    icon: 'CheckBoxOutlineBlank',
    framework: 'reactClassic',
    nestable: false,
    imports: ["import Checkbox from '@mui/material/Checkbox';"],
    stateAndEventHandlers: [],
    defaultProps: ['defaultChecked'],
    propOptions: [
      'checked',
      'checkedIcon',
      'classes',
      'color',
      'defaultChecked',
      'disabled',
      'disableRipple',
      'icon',
      'id',
      'indeterminate',
      'indeterminateIcon',
      'inputProps',
      'inputRef',
      'onChange',
      'required',
      'size',
      'sx',
      'value'
    ],
    jsx: [
      '<div>',
      "  <Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }} />",
      '</div>'
    ],
    componentData: {
      type: 'div',
      props: { sx: { m: 1 } },
      children: [
        {
          type: 'Checkbox',
          props: {
            inputProps: { 'aria-label': 'Checkbox demo' },
            defaultChecked: true
          }
        }
      ]
    },
    children: []
  },
  {
    id: 25,
    tag: 'fab',
    name: 'Fab',
    style: {},
    placeHolderShort: 'fab',
    placeHolderLong: 'Material UI Floating Action Button Component',
    icon: 'Add',
    framework: 'reactClassic',
    nestable: true,
    imports: [
      "import Box from '@mui/material/Box';",
      "import Fab from '@mui/material/Fab';",
      "import AddIcon from '@mui/icons-material/Add';"
    ],
    stateAndEventHandlers: [],
    defaultProps: ['color="primary" variant="circular"'],
    propOptions: [
      'children',
      'classes',
      'color',
      'component',
      'disabled',
      'disableFocusRipple',
      'disableRipple',
      'href',
      'size',
      'sx',
      'variant'
    ],
    jsx: [
      "<Box sx={{ '& > :not(style)': { m: 1 } }}>",
      '  <Fab aria-label="add">',
      '    <AddIcon />',
      '  </Fab>',
      '</Box>'
    ],
    componentData: {
      type: 'Box',
      props: {
        sx: { m: 1, '& > :not(style)': { m: 1 } }
      },
      children: [
        {
          type: 'Fab',
          props: {
            color: 'primary',
            'aria-label': 'add',
            sx: { fontSize: 24 }
          },
          children: '+'
        }
      ]
    },
    children: []
  },
  {
    id: 26,
    tag: 'radio group',
    name: 'RadioGroup',
    style: {},
    placeHolderShort: 'radio group',
    placeHolderLong: 'Material UI Radio Buttons Group Component',
    icon: 'RadioButtonChecked',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Radio from '@mui/material/Radio';",
      "import RadioGroup from '@mui/material/RadioGroup';",
      "import FormControlLabel from '@mui/material/FormControlLabel';",
      "import FormControl from '@mui/material/FormControl';",
      "import FormLabel from '@mui/material/FormLabel';"
    ],
    stateAndEventHandlers: [],
    defaultProps: ['defaultValue="female" name="radio-buttons-group"'],
    propOptions: ['children', 'defaultValue', 'name', 'onChange', 'value'],
    jsx: [
      '<FormControl>',
      '  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>',
      '  <RadioGroup aria-labelledby="demo-radio-buttons-group-label" >',
      '    <FormControlLabel value="female" control={<Radio />} label="Female" />',
      '    <FormControlLabel value="male" control={<Radio />} label="Male" />',
      '    <FormControlLabel value="other" control={<Radio />} label="Other" />',
      '  </RadioGroup>',
      '</FormControl>'
    ],
    componentData: {
      type: 'FormControl',
      props: { sx: { m: 1 } },
      children: [
        {
          type: 'FormLabel',
          props: {
            id: 'demo-radio-buttons-group-label'
          },
          children: 'Gender'
        },
        {
          type: 'RadioGroup',
          props: {
            'aria-labelledby': 'demo-radio-buttons-group-label',
            defaultValue: 'female',
            name: 'radio-buttons-group'
          },
          children: [
            {
              type: 'FormControlLabel',
              props: {
                value: 'female',
                control: { type: 'Radio' },
                label: 'Female'
              }
            },
            {
              type: 'FormControlLabel',
              props: {
                value: 'male',
                control: { type: 'Radio' },
                label: 'Male'
              }
            },
            {
              type: 'FormControlLabel',
              props: {
                value: 'other',
                control: { type: 'Radio' },
                label: 'Other'
              }
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 27,
    tag: 'rating',
    name: 'Rating',
    style: {},
    placeHolderShort: 'rating',
    placeHolderLong: 'Material UI Rating Component',
    icon: 'StarBorder',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Box from '@mui/material/Box';",
      "import Rating from '@mui/material/Rating';",
      "import Typography from '@mui/material/Typography';"
    ],
    stateAndEventHandlers: [
      'const [ratingValue, setRatingValue] = React.useState(2);\n'
    ],
    defaultProps: [
      'name="simple-controlled" value={ratingValue} onChange={(event, newValue) => { setRatingValue(newValue); }}'
    ],
    propOptions: [
      'defaultValue',
      'disabled',
      'emptyIcon',
      'emptyLabelText',
      'getLabelText',
      'highlightSelectedOnly',
      'icon',
      'IconContainerComponent',
      'max',
      'name',
      'onChange',
      'onChangeActive',
      'precision',
      'readOnly',
      'size',
      'sx',
      'value'
    ],
    jsx: [
      "<Box sx={{ '& > legend': { mt: 2 } }}>",
      '  <Typography component="legend">Controlled</Typography>',
      '  <Rating />',
      '</Box>'
    ],
    componentData: {
      type: 'Box',
      props: {
        sx: { m: 1, '& > legend': { mt: 2 } }
      },
      children: [
        {
          type: 'Typography',
          props: {
            component: 'legend'
          },
          children: 'Controlled'
        },
        {
          type: 'Rating',
          props: {
            name: 'simple-controlled',
            value: 2,
            onChange: 'setRatingValue(newValue)'
          }
        }
      ]
    },
    children: []
  },
  {
    id: 28,
    tag: 'select',
    name: 'Select',
    style: {},
    placeHolderShort: 'select',
    placeHolderLong: 'Material UI Select Component',
    icon: 'ExpandMore',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Box from '@mui/material/Box';",
      "import InputLabel from '@mui/material/InputLabel';",
      "import MenuItem from '@mui/material/MenuItem';",
      "import FormControl from '@mui/material/FormControl';",
      "import Select from '@mui/material/Select';"
    ],
    stateAndEventHandlers: [],
    defaultProps: [],
    propOptions: [
      'autoWidth',
      'children',
      'classes',
      'defaultOpen',
      'defaultValue',
      'displayEmpty',
      'IconComponent',
      'id',
      'input',
      'inputProps',
      'label',
      'labelId',
      'MenuProps',
      'multiple',
      'native',
      'onChange',
      'onClose',
      'onOpen',
      'open',
      'renderValue',
      'SelectDisplayProps',
      'sx',
      'value',
      'variant'
    ],
    jsx: [
      '<Box sx={{ minWidth: 120 }}>',
      '  <FormControl fullWidth>',
      '    <InputLabel id="demo-simple-select-label">Age</InputLabel>',
      '    <Select labelId="demo-simple-select-label" id="demo-simple-selec" value={age} label="Age" onChange={handleChange}>',
      '      <MenuItem value={10}>Ten</MenuItem>',
      '      <MenuItem value={20}>Twenty</MenuItem>',
      '      <MenuItem value={30}>Thirty</MenuItem>',
      '    </Select>',
      '  </FormControl>',
      '</Box>'
    ],
    componentData: {
      type: 'Box',
      props: {
        sx: { width: 250, m: 1, mt: 2, mb: 2 }
      },
      children: [
        {
          type: 'FormControl',
          props: {
            sx: { width: 250 }
          },
          children: [
            {
              type: 'InputLabel',
              props: {
                id: 'demo-simple-select-label'
              },
              children: 'Age'
            },
            {
              type: 'Select',
              props: {
                labelId: 'demo-simple-select-label',
                id: 'demo-simple-select',
                value: '{age}',
                label: 'Age',
                onChange: '{handleChange}'
              },
              children: [
                {
                  type: 'MenuItem',
                  props: {
                    value: 10
                  },
                  children: 'Ten'
                },
                {
                  type: 'MenuItem',
                  props: {
                    value: 20
                  },
                  children: 'Twenty'
                },
                {
                  type: 'MenuItem',
                  props: {
                    value: 30
                  },
                  children: 'Thirty'
                }
              ]
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 29,
    tag: 'slider',
    name: 'Slider',
    style: {},
    placeHolderShort: 'slider',
    placeHolderLong: 'Material UI Slider Component',
    icon: 'Tune',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Box from '@mui/material/Box';",
      "import Slider from '@mui/material/Slider';",
      '\nconst initialSliderValue = 30;'
    ],
    stateAndEventHandlers: [
      'const [sliderValue, setSliderValue] = React.useState(30);',
      '\nconst handleChange = (event, newValue) => {',
      '  setSliderValue(newValue);',
      '};\n'
    ],
    defaultProps: [
      "defaultValue={initialSliderValue} sx={{ width: 200 }} aria-label='slider'"
    ],
    propOptions: [
      'aria-label',
      'aria-labelledby',
      'aria-valuetext',
      'classes',
      'color',
      'components',
      'componentsProps',
      'defaultValue',
      'disabled',
      'disableSwap',
      'getAriaLabel',
      'getAriaValueText',
      'marks',
      'max',
      'min',
      'name',
      'onChange',
      'onChangeCommitted',
      'orientation',
      'scale',
      'shiftStep',
      'size',
      'slotProps',
      'slots',
      'step',
      'sx',
      'tabIndex',
      'track',
      'value',
      'valueLabelDisplay',
      'valueLabelFormat'
    ],
    jsx: ['<Box sx={{ width: 200 }}>', '  <Slider />', '</Box>'],
    componentData: {
      type: 'Box',
      props: {
        sx: { width: 200, m: 1 }
      },
      children: [
        {
          type: 'Slider',
          props: {
            defaultValue: 33
          }
        }
      ]
    },
    children: []
  },
  {
    id: 30,
    tag: 'switch',
    name: 'Switch',
    style: {},
    placeHolderShort: 'switch',
    placeHolderLong: 'Material UI Switch Component',
    icon: 'ToggleOn',
    framework: 'reactClassic',
    nestable: false,
    imports: ["import Switch from '@mui/material/Switch';"],
    stateAndEventHandlers: [],
    defaultProps: [
      "inputProps={{ 'aria-label': 'Switch demo' }} defaultChecked"
    ],
    propOptions: [
      'checked',
      'checkedIcon',
      'color',
      'defaultChecked',
      'disabled',
      'disableRipple',
      'edge',
      'icon',
      'id',
      'inputProps',
      'onChange',
      'required',
      'size',
      'sx',
      'value'
    ],
    jsx: ['<div >', '  <Switch />', '</div>'],
    componentData: {
      type: 'div',
      props: {},
      children: [
        {
          type: 'Switch',
          props: {
            inputProps: { 'aria-label': 'Switch demo' },
            defaultChecked: true
          }
        }
      ]
    },
    children: []
  },
  {
    id: 31,
    tag: 'textfield',
    name: 'TextField',
    style: {},
    placeHolderShort: 'textfield',
    placeHolderLong: 'Material UI TextField Component',
    icon: 'Input',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Box from '@mui/material/Box';",
      "import TextField from '@mui/material/TextField';"
    ],
    stateAndEventHandlers: [],
    defaultProps: ['variant="outlined"'],
    propOptions: [
      'autoComplete',
      'autoFocus',
      'classes',
      'color',
      'defaultValue',
      'disabled',
      'error',
      'FormHelperTextProps',
      'fullWidth',
      'helperText',
      'id',
      'InputLabelProps',
      'inputProps',
      'InputProps',
      'inputRef',
      'label',
      'margin',
      'maxRows',
      'minRows',
      'multiline',
      'name',
      'onChange',
      'placeholder',
      'required',
      'rows',
      'select',
      'SelectProps',
      'size',
      'sx',
      'type',
      'value',
      'variant'
    ],
    jsx: [
      '<Box component="form" sx={{\'& > :not(style)\': { m: 1, width: \'25ch\' }}} noValidate autoComplete="off">',
      '  <TextField id="outlined-basic" label="Outlined" />',
      '</Box>'
    ],
    componentData: {
      type: 'TextField',
      props: {
        variant: 'outlined',
        label: 'Enter Text',
        helperText: 'Please enter your text here',
        fullWidth: false,
        sx: { m: 1 }
      },
      children: []
    },
    children: []
  },
  {
    id: 33,
    tag: 'toggle-button',
    name: 'ToggleButtonGroup',
    style: {},
    placeHolderShort: 'toggle button',
    placeHolderLong: 'Material UI Toggle Button Component',
    icon: 'TableView',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import ToggleButton from '@mui/material/ToggleButton';",
      "import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';"
    ],
    stateAndEventHandlers: [
      'const [alignment, setAlignment] = React.useState("web");\n'
    ],
    defaultProps: [
      'value={alignment} exclusive onChange={(event, newAlignment) => setAlignment(newAlignment)} aria-label="Platform"'
    ],
    propOptions: [
      'children',
      'classes',
      'color',
      'disabled',
      'exclusive',
      'fullWidth',
      'onChange',
      'orientation',
      'size',
      'sx',
      'value'
    ],
    jsx: [
      '<ToggleButtonGroup >',
      '  <ToggleButton value="web">Web</ToggleButton>',
      '  <ToggleButton value="android">Android</ToggleButton>',
      '  <ToggleButton value="ios">iOS</ToggleButton>',
      '</ToggleButtonGroup>'
    ],
    componentData: {
      type: 'ToggleButtonGroup',
      props: {
        sx: { m: 1, backgroundColor: '#1976D2' },
        color: 'primary',
        value: '{alignment}',
        exclusive: true,
        onChange: 'handleChange',
        'aria-label': 'Platform'
      },
      children: [
        {
          type: 'ToggleButton',
          props: { value: 'web', sx: { color: 'white' } },
          children: 'Web'
        },
        {
          type: 'ToggleButton',
          props: { value: 'android', sx: { color: 'white' } },
          children: 'Android'
        },
        {
          type: 'ToggleButton',
          props: { value: 'ios', sx: { color: 'white' } },
          children: 'iOS'
        }
      ]
    },
    children: []
  },
  {
    id: 32,
    tag: 'transfer-list',
    name: 'TransferList',
    style: {},
    placeHolderShort: 'transfer-list',
    placeHolderLong: 'Material UI Transfer List Component',
    icon: 'SwapHoriz',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Grid from '@mui/material/Grid';",
      "import List from '@mui/material/List';",
      "import ListItemButton from '@mui/material/ListItemButton';",
      "import ListItemIcon from '@mui/material/ListItemIcon';",
      "import ListItemText from '@mui/material/ListItemText';",
      "import Checkbox from '@mui/material/Checkbox';",
      "import Button from '@mui/material/Button';",
      "import Paper from '@mui/material/Paper';",
      '\nfunction not(a, b) {',
      '  return a.filter((value) => b.indexOf(value) === -1);\n};',
      '\nfunction intersection(a, b) {',
      '   return a.filter((value) => b.indexOf(value) !== -1);\n};'
    ],
    stateAndEventHandlers: [
      'const [checked, setChecked] = React.useState([]);',
      'const [left, setLeft] = React.useState([0, 1, 2, 3]);',
      'const [right, setRight] = React.useState([4, 5, 6, 7]);',
      '\nconst leftChecked = intersection(checked, left);',
      'const rightChecked = intersection(checked, right);',
      '\nconst handleToggle = (value) => () => {',
      '  const currentIndex = checked.indexOf(value);',
      '  const newChecked = [...checked];',
      '  if (currentIndex === -1) {',
      '    newChecked.push(value);',
      '  } else {',
      '    newChecked.splice(currentIndex, 1);',
      '  }',
      '  setChecked(newChecked);',
      '};',
      '\nconst handleAllRight = () => {',
      '  setRight(right.concat(left));',
      '  setLeft([]);\n};',
      '\nconst handleCheckedRight = () => {',
      '  setRight(right.concat(left.filter(item => checked.includes(item))));',
      '  setLeft(left.filter(item => !checked.includes(item)));',
      '  setChecked(checked.filter(item => !left.includes(item)));\n};',
      '\nconst handleCheckedLeft = () => {',
      '  setLeft(left.concat(right.filter(item => checked.includes(item))));',
      '  setRight(right.filter(item => !checked.includes(item)));',
      '  setChecked(checked.filter(item => !right.includes(item)));\n};',
      '\nconst handleAllLeft = () => {',
      '  setLeft(left.concat(right));',
      '  setRight([]);\n};',
      '\nconst customList = (items) => (',
      '  <Paper sx={{ width: 200, height: 230, overflow: "auto" }}>',
      '    <List dense component="div" role="list">',
      '      {items.map((value) => {',
      '        const labelId = `transfer-list-item-${value}-label`;',
      '        return (',
      '          <ListItemButton key={value} role="listitem" onClick={handleToggle(value)}>',
      '            <ListItemIcon>',
      '              <Checkbox checked={checked.indexOf(value) !== -1} tabIndex={-1} disableRipple inputProps={{ "aria-labelledby": labelId }} />',
      '            </ListItemIcon>',
      '            <ListItemText id={labelId} primary={`List item ${value + 1}`} />',
      '          </ListItemButton>',
      '        );',
      '      })}',
      '    </List>',
      '  </Paper>',
      ');\n'
    ],
    defaultProps: ['sx={{ width: 200, height: 230, overflow: "auto" }}'],
    propOptions: [
      'children',
      'classes',
      'component',
      'dense',
      'disablePadding',
      'subheader',
      'sx'
    ],
    jsx: [
      '<Grid container spacing={2} justifyContent="center" alignItems="center">',
      '  <Grid item>{customList(left)}</Grid>',
      '  <Grid item>',
      '    <Grid container direction="column" alignItems="center">',
      '      <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleAllRight} disabled={left.length === 0} aria-label="move all right">≫</Button>', // Moves all items from left to right
      '      <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleCheckedRight} disabled={left.filter(item => checked.includes(item)).length === 0} aria-label="move selected right">&gt;</Button>', // Moves selected items from left to right
      '      <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleCheckedLeft} disabled={right.filter(item => checked.includes(item)).length === 0} aria-label="move selected left">&lt;</Button>', // Moves selected items from right to left
      '      <Button sx={{ my: 0.5 }} variant="outlined" size="small" onClick={handleAllLeft} disabled={right.length === 0} aria-label="move all left">≪</Button>', // Moves all items from right to left
      '    </Grid>',
      '  </Grid>',
      '  <Grid item>{customList(right)}</Grid>',
      '</Grid>'
    ],
    componentData: {
      type: 'Grid',
      props: {
        container: true,
        spacing: 2,
        justifyContent: 'center',
        alignItems: 'center'
      },
      children: [
        {
          type: 'Grid',
          props: { item: true },
          children: {
            type: 'customList',
            props: { items: 'left' },
            children: null // No children for customList
          }
        },
        {
          type: 'Grid',
          props: { item: true },
          children: {
            type: 'Grid',
            props: {
              container: true,
              direction: 'column',
              alignItems: 'center'
            },
            children: [
              {
                type: 'Button',
                props: {
                  sx: { my: 0.5 },
                  variant: 'outlined',
                  size: 'small',
                  onClick: '{handleAllRight}',
                  disabled: '{left.length === 0}',
                  'aria-label': 'move all right',
                  role: 'rightAll'
                },
                children: '≫' // Moves all items from left to right
              },
              {
                type: 'Button',
                props: {
                  sx: { my: 0.5 },
                  variant: 'outlined',
                  size: 'small',
                  onClick: '{handleCheckedRight}',
                  disabled:
                    '{left.filter(item => checked.includes(item)).length === 0}',
                  'aria-label': 'move selected right',
                  role: 'right'
                },
                children: '>' // Moves selected items from left to right
              },
              {
                type: 'Button',
                props: {
                  sx: { my: 0.5 },
                  variant: 'outlined',
                  size: 'small',
                  onClick: '{handleCheckedLeft}',
                  disabled:
                    '{right.filter(item => checked.includes(item)).length === 0}',
                  'aria-label': 'move selected left',
                  role: 'left'
                },
                children: '<' // Moves selected items from right to left
              },
              {
                type: 'Button',
                props: {
                  sx: { my: 0.5 },
                  variant: 'outlined',
                  size: 'small',
                  onClick: '{handleAllLeft}',
                  disabled: '{right.length === 0}',
                  'aria-label': 'move all left',
                  role: 'leftAll'
                },
                children: '≪' // Moves all items from right to left
              }
            ]
          }
        },
        {
          type: 'Grid',
          props: { item: true },
          children: {
            type: 'customList',
            props: { items: 'right' },
            children: null // No children for customList
          }
        }
      ]
    },
    children: []
  },
  {
    id: 34,
    tag: 'avatar',
    name: 'Avatar',
    style: {},
    placeHolderShort: 'avatar',
    placeHolderLong: 'Material UI Avatar Component',
    icon: 'Person',
    framework: 'reactClassic',
    nestable: false,
    imports: ["import Avatar from '@mui/material/Avatar';"],
    stateAndEventHandlers: [],
    defaultProps: [
      'src={imageUrl} alt="User Profile" sx={{ width: 56, height: 56 }}'
    ],
    propOptions: [
      'alt',
      'children',
      'classes',
      'component',
      'imgProps',
      'sizes',
      'slotProps',
      'slots',
      'src',
      'srcSet',
      'sx',
      'variant'
    ],
    jsx: ['<Avatar />'],
    componentData: {
      type: 'Avatar',
      props: {
        alt: 'User Profile',
        src: 'https://images.paramount.tech/uri/mgid:arc:imageassetref:bet.com:211ff3c2-4857-11e7-a442-0e40cf2fc285?format=webp&width=1200',
        sx: {
          m: 1,
          width: 56,
          height: 56,
          border: '2px solid #000', // 1px border
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow
          borderRadius: '50%' // Rounded corners for circular Avatar
        }
      },
      children: []
    },
    children: []
  },
  {
    id: 35,
    tag: 'badge',
    name: 'Badge',
    style: {},
    placeHolderShort: 'badge',
    placeHolderLong: 'Material UI Badge Component',
    icon: 'Notifications',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Badge from '@mui/material/Badge';",
      "import MailIcon from '@mui/icons-material/Mail';"
    ],
    stateAndEventHandlers: [],
    defaultProps: ['badgeContent={4} color="primary"'],
    propOptions: [
      'anchorOrigin',
      'badgeContent',
      'children',
      'classes',
      'color',
      'component',
      'components',
      'componentsProps',
      'invisible',
      'max',
      'overlap',
      'showZero',
      'slotProps',
      'slots',
      'sx',
      'variant'
    ],
    jsx: ['<Badge >', '  <MailIcon color="action" />', '</Badge >'],
    componentData: {
      type: 'Badge',
      props: {
        badgeContent: 4,
        color: 'primary',
        sx: { m: 1 }
      },
      children: [
        {
          type: 'SpeedDialIcon',
          props: {
            color: 'action'
          },
          children: []
        }
      ]
    },
    children: []
  },
  {
    id: 36,
    tag: 'chip',
    name: 'Chip',
    style: {},
    placeHolderShort: 'chip',
    placeHolderLong: 'Material UI Chip Component',
    icon: 'Dashboard',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Chip from '@mui/material/Chip';",
      "import Stack from '@mui/material/Stack';"
    ],
    stateAndEventHandlers: [],
    defaultProps: ['label="Chip Filled" color="primary"'],
    propOptions: [
      'avatar',
      'children',
      'classes',
      'clickable',
      'color',
      'component',
      'deleteIcon',
      'disabled',
      'icon',
      'label',
      'onDelete',
      'size',
      'skipFocusWhenDisabled',
      'sx',
      'variant'
    ],
    jsx: ['<Stack direction="row" spacing = {1} >', '  <Chip />', '</Stack>'],
    componentData: {
      type: 'Chip',
      props: {
        label: 'Chip Filled',
        color: 'primary',
        sx: { m: 1 }
      },
      children: [],
      variant: 'filled'
    },
    children: []
  },
  {
    id: 37,
    tag: 'divider',
    name: 'Divider',
    style: {},
    placeHolderShort: 'divider',
    placeHolderLong: 'Material UI Divider Component',
    icon: 'Description',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Card from '@mui/material/Card';",
      "import Box from '@mui/material/Box';",
      "import Chip from '@mui/material/Chip';",
      "import Stack from '@mui/material/Stack';",
      "import Divider from '@mui/material/Divider';",
      "import Typography from '@mui/material/Typography';"
    ],
    stateAndEventHandlers: [],
    defaultProps: [],
    propOptions: [
      'absolute',
      'children',
      'classes',
      'component',
      'flexItem',
      'light',
      'orientation',
      'sx',
      'textAlign',
      'variant'
    ],
    jsx: [
      '<Card variant="outlined" sx={{ maxWidth: 360 }}>',
      '  <Box sx={{ p: 2 }}>',
      '    <Stack direction="row" justifyContent="space-between" alignItems="center">',
      '      <Typography gutterBottom variant="h5" component="div">',
      '        Toothbrush',
      '      </Typography>',
      '      <Typography gutterBottom variant="h6" component="div">',
      '        $4.50',
      '      </Typography>',
      '    </Stack>',
      '    <Typography color="text.secondary" variant="body2">',
      '      Pinstriped cornflower blue cotton blouse takes you on a walk to the park or',
      '      just down the hall.',
      '    </Typography>',
      '  </Box>',
      '  <Divider />',
      '  <Box sx={{ p: 2 }}>',
      '    <Typography gutterBottom variant="body2">',
      '      Select type',
      '    </Typography>',
      '    <Stack direction="row" spacing={1}>',
      '      <Chip color="primary" label="Soft" size="small" />',
      '      <Chip label="Medium" size="small" />',
      '      <Chip label="Hard" size="small" />',
      '    </Stack>',
      '  </Box>',
      '</Card>'
    ],
    componentData: {
      type: 'Card',
      props: {
        variant: 'outlined',
        sx: { maxWidth: 360, m: 1 }
      },
      children: [
        {
          type: 'Box',
          props: {
            sx: { p: 2 }
          },
          children: [
            {
              type: 'Stack',
              props: {
                direction: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              },
              children: [
                {
                  type: 'Typography',
                  props: {
                    gutterBottom: true,
                    variant: 'h5',
                    component: 'div'
                  },
                  children: 'Toothbrush'
                },
                {
                  type: 'Typography',
                  props: {
                    gutterBottom: true,
                    variant: 'h6',
                    component: 'div'
                  },
                  children: '$4.50'
                }
              ]
            },
            {
              type: 'Typography',
              props: {
                color: 'text.secondary',
                variant: 'body2'
              },
              children:
                'Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.'
            }
          ]
        },
        {
          type: 'Divider'
        },
        {
          type: 'Box',
          props: {
            sx: { p: 2 }
          },
          children: [
            {
              type: 'Typography',
              props: {
                gutterBottom: true,
                variant: 'body2'
              },
              children: 'Select type'
            },
            {
              type: 'Stack',
              props: {
                direction: 'row',
                spacing: 1
              },
              children: [
                {
                  type: 'Chip',
                  props: {
                    color: 'primary',
                    label: 'Soft',
                    size: 'small'
                  }
                },
                {
                  type: 'Chip',
                  props: {
                    label: 'Medium',
                    size: 'small'
                  }
                },
                {
                  type: 'Chip',
                  props: {
                    label: 'Hard',
                    size: 'small'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 40,
    tag: 'list',
    name: 'List',
    style: {},
    placeHolderShort: 'list',
    placeHolderLong: 'Material UI List Component',
    icon: 'FormatListBulleted',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Box from '@mui/material/Box';",
      "import List from '@mui/material/List';",
      "import ListItem from '@mui/material/ListItem';",
      "import ListItemButton from '@mui/material/ListItemButton';",
      "import ListItemIcon from '@mui/material/ListItemIcon';",
      "import ListItemText from '@mui/material/ListItemText';",
      "import Divider from '@mui/material/Divider';",
      "import InboxIcon from '@mui/icons-material/Inbox';",
      "import DraftsIcon from '@mui/icons-material/Drafts';"
    ],
    stateAndEventHandlers: [],
    defaultProps: [],
    propOptions: [
      'children',
      'classes',
      'component',
      'dense',
      'disablePadding',
      'subheader',
      'sx'
    ],
    jsx: [
      "<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',  border: '1px #e0e0e0 solid' }}>",
      '  <nav aria-label="main mailbox folders">',
      '    <List>',
      '      <ListItem disablePadding>',
      '        <ListItemButton>',
      '          <ListItemIcon>',
      '            <InboxIcon />',
      '          </ListItemIcon>',
      '          <ListItemText primary="Inbox" />',
      '        </ListItemButton>',
      '      </ListItem>',
      '      <ListItem disablePadding>',
      '        <ListItemButton>',
      '          <ListItemIcon>',
      '            <DraftsIcon />',
      '          </ListItemIcon>',
      '          <ListItemText primary="Drafts" />',
      '        </ListItemButton>',
      '      </ListItem>',
      '    </List>',
      '  </nav>',
      '  <Divider />',
      '  <nav aria-label="secondary mailbox folders">',
      '    <List>',
      '      <ListItem disablePadding>',
      '        <ListItemButton>',
      '          <ListItemText primary="Trash" />',
      '        </ListItemButton>',
      '      </ListItem>',
      '      <ListItem disablePadding>',
      '        <ListItemButton component="a" href="#simple-list">',
      '          <ListItemText primary="Spam" />',
      '        </ListItemButton>',
      '      </ListItem>',
      '    </List>',
      '  </nav>',
      '</Box>'
    ],
    componentData: {
      type: 'Box',
      props: {
        sx: {
          width: '100%',
          maxWidth: 360,
          m: 1,
          bgcolor: 'background.paper',
          border: '1px #e0e0e0 solid'
        }
      },
      children: [
        {
          type: 'nav',
          props: { 'aria-label': 'main mailbox folders' },
          children: {
            type: 'List',
            children: [
              {
                type: 'ListItem',
                props: { disablePadding: true },
                children: {
                  type: 'ListItemButton',
                  children: [
                    { type: 'SpeedDialIcon', children: { type: 'InboxIcon' } },
                    { type: 'ListItemText', props: { primary: 'Inbox' } }
                  ]
                }
              },
              {
                type: 'ListItem',
                props: { disablePadding: true },
                children: {
                  type: 'ListItemButton',
                  children: [
                    { type: 'SpeedDialIcon', children: { type: 'DraftsIcon' } },
                    { type: 'ListItemText', props: { primary: 'Drafts' } }
                  ]
                }
              }
            ]
          }
        },
        { type: 'Divider' },
        {
          type: 'nav',
          props: { 'aria-label': 'secondary mailbox folders' },
          children: {
            type: 'List',
            children: [
              {
                type: 'ListItem',
                props: { disablePadding: true },
                children: {
                  type: 'ListItemButton',
                  children: [
                    { type: 'ListItemText', props: { primary: 'Trash' } }
                  ]
                }
              },
              {
                type: 'ListItem',
                props: { disablePadding: true },
                children: {
                  type: 'ListItemButton',
                  props: {},
                  children: [
                    { type: 'ListItemText', props: { primary: 'Spam' } }
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    children: []
  },
  {
    id: 41,
    tag: 'table',
    name: 'Table',
    style: {},
    placeHolderShort: 'table',
    placeHolderLong: 'Material UI Table Component',
    icon: 'TableChart',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Table from '@mui/material/Table';",
      "import TableBody from '@mui/material/TableBody';",
      "import TableCell from '@mui/material/TableCell';",
      "import TableContainer from '@mui/material/TableContainer';",
      "import TableHead from '@mui/material/TableHead';",
      "import TableRow from '@mui/material/TableRow';",
      "import Paper from '@mui/material/Paper';",
      '\nfunction createData(name, calories, fat, carbs, protein) {',
      'return { name, calories, fat, carbs, protein };',
      '};',
      '\nconst rows = [',
      "  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),",
      "  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),",
      "  createData('Eclair', 262, 16.0, 24, 6.0),",
      "  createData('Cupcake', 305, 3.7, 67, 4.3),",
      "  createData('Gingerbread', 356, 16.0, 49, 3.9)",
      '];'
    ],
    stateAndEventHandlers: [],
    defaultProps: [],
    propOptions: [
      'children',
      'classes',
      'component',
      'padding',
      'size',
      'stickyHeader',
      'sx'
    ],
    jsx: [
      '<TableContainer component={Paper}>',
      '  <Table sx={{ minWidth: 650 }} aria-label="simple table">',
      '    <TableHead>',
      '      <TableRow>',
      '        <TableCell>Dessert (100g serving)</TableCell>',
      '        <TableCell align="right">Calories</TableCell>',
      '        <TableCell align="right">Fat&nbsp;(g)</TableCell>',
      '        <TableCell align="right">Carbs&nbsp;(g)</TableCell>',
      '        <TableCell align="right">Protein&nbsp;(g)</TableCell>',
      '      </TableRow>',
      '    </TableHead>',
      '    <TableBody>',
      '      {rows.map((row) => (',
      '        <TableRow',
      '          key={row.name}',
      "          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>",
      '          <TableCell component="th" scope="row">',
      '            {row.name}',
      '          </TableCell>',
      '          <TableCell align="right">{row.calories}</TableCell>',
      '          <TableCell align="right">{row.fat}</TableCell>',
      '          <TableCell align="right">{row.carbs}</TableCell>',
      '          <TableCell align="right">{row.protein}</TableCell>',
      '        </TableRow>',
      '      ))}',
      '    </TableBody>',
      '  </Table>',
      '</TableContainer>'
    ],
    componentData: {
      type: 'TableContainer',
      props: {
        component: 'Paper'
      },
      children: [
        {
          type: 'Table',
          props: {
            sx: {
              minWidth: 650
            },
            'aria-label': 'simple table'
          },
          children: [
            {
              type: 'TableHead',
              children: [
                {
                  type: 'TableRow',
                  children: [
                    { type: 'TableCell', children: 'Dessert (100g serving)' },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: 'Calories'
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: 'Fat (g)'
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: 'Carbs (g)'
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: 'Protein (g)'
                    }
                  ]
                }
              ]
            },
            {
              type: 'TableBody',
              children: [
                {
                  type: 'TableRow',
                  props: { key: 'Frozen yoghurt' },
                  children: [
                    {
                      type: 'TableCell',
                      props: { component: 'th', scope: 'row' },
                      children: 'Frozen yoghurt'
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['159']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['6']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['24']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['4']
                    }
                  ]
                },
                {
                  type: 'TableRow',
                  props: { key: 'Ice cream sandwich' },
                  children: [
                    {
                      type: 'TableCell',
                      props: { component: 'th', scope: 'row' },
                      children: 'Ice cream sandwich'
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['237']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['9']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['37']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['4.3']
                    }
                  ]
                },
                {
                  type: 'TableRow',
                  props: { key: 'Eclair' },
                  children: [
                    {
                      type: 'TableCell',
                      props: { component: 'th', scope: 'row' },
                      children: 'Eclair'
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['262']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['16']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['24']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['6']
                    }
                  ]
                },
                {
                  type: 'TableRow',
                  props: { key: 'Cupcake' },
                  children: [
                    {
                      type: 'TableCell',
                      props: { component: 'th', scope: 'row' },
                      children: 'Cupcake'
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['305']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['3.7']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['67']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['4.3']
                    }
                  ]
                },
                {
                  type: 'TableRow',
                  props: { key: 'Gingerbread' },
                  children: [
                    {
                      type: 'TableCell',
                      props: { component: 'th', scope: 'row' },
                      children: 'Gingerbread'
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['356']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['16']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['49']
                    },
                    {
                      type: 'TableCell',
                      props: { align: 'right' },
                      children: ['3.9']
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 42,
    tag: 'tooltip',
    name: 'Tooltip',
    style: {},
    placeHolderShort: 'tooltip',
    placeHolderLong: 'Material UI Tooltip Component',
    icon: 'Help',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Button from '@mui/material/Button';",
      "import Tooltip from '@mui/material/Tooltip';"
    ],
    stateAndEventHandlers: [],
    defaultProps: ['title="Add" arrow'],
    propOptions: [
      'arrow',
      'children',
      'classes',
      'components',
      'componentsProps',
      'describeChild',
      'disableFocusListener',
      'disableHoverListener',
      'disableInteractive',
      'disableTouchListener',
      'enterDelay',
      'enterNextDelay',
      'enterTouchDelay',
      'followCursor',
      'id',
      'leaveDelay',
      'leaveTouchDelay',
      'onClose',
      'onOpen',
      'open',
      'placement',
      'PopperComponent',
      'PopperProps',
      'slotProps',
      'slots',
      'sx',
      'title',
      'TransitionComponent',
      'TransitionProps'
    ],
    jsx: ['<Tooltip>', '  <Button>Arrow</Button>', '</Tooltip>'],
    componentData: {
      type: 'Tooltip',
      props: {
        title: 'Add',
        arrow: true,
        sx: { m: 1 }
      },
      children: [
        {
          type: 'Button',
          props: {
            sx: {
              backgroundColor: 'primary.main', // This sets the background color to the primary color
              color: 'white', // This sets the text color to white
              m: 1
            }
          },
          children: 'Arrow'
        }
      ]
    },
    children: []
  },
  {
    id: 43,
    tag: 'typography',
    name: 'Typography',
    style: {},
    placeHolderShort: 'typography',
    placeHolderLong: 'Material UI Typography Component',
    icon: 'TextFields',
    framework: 'reactClassic',
    nestable: true,
    imports: ["import Typography from '@mui/material/Typography';"],
    stateAndEventHandlers: [],
    defaultProps: ['variant="h3"'],
    propOptions: [
      'align',
      'children',
      'classes',
      'component',
      'gutterBottom',
      'noWrap',
      'paragraph',
      'sx',
      'variant',
      'variantMapping'
    ],
    jsx: ['<Typography gutterBottom> h3. Heading </Typography>'],
    componentData: {
      type: 'Typography',
      props: {
        variant: 'h3',
        gutterBottom: true,
        sx: { m: 1 }
      },
      children: 'h3. Heading'
    },
    children: []
  },
  {
    id: 44,
    tag: 'alert',
    name: 'Alert',
    style: {},
    placeHolderShort: 'alert',
    placeHolderLong: 'Material UI Alert Component',
    icon: 'Error',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Alert from '@mui/material/Alert';",
      "import CheckIcon from '@mui/icons-material/Check';"
    ],
    stateAndEventHandlers: [],
    defaultProps: ['severity="success"'],
    propOptions: [
      'action',
      'children',
      'classes',
      'closeText',
      'color',
      'components',
      'componentsProps',
      'icon',
      'iconMapping',
      'onClose',
      'role',
      'severity',
      'slotProps',
      'slots',
      'sx',
      'variant'
    ],
    jsx: [
      '<Alert icon={<CheckIcon fontSize="inherit" />} severity="success">',
      '  Here is a gentle confirmation that your action was successful.',
      '</Alert>'
    ],
    componentData: {
      type: 'Alert',
      props: {
        icon: '<CheckIcon/>',
        severity: 'success',
        sx: { m: 1 }
      },
      children: 'Here is a gentle confirmation that your action was successful.'
    },
    children: []
  },
  {
    id: 45,
    tag: 'backdrop',
    name: 'Backdrop',
    style: {},
    placeHolderShort: 'backdrop',
    placeHolderLong: 'Material UI Backdrop Component',
    icon: 'Layers',
    framework: 'reactClassic',
    nestable: true,
    imports: [
      "import Backdrop from '@mui/material/Backdrop';",
      "import CircularProgress from '@mui/material/CircularProgress';",
      "import Button from '@mui/material/Button';"
    ],
    stateAndEventHandlers: [
      'const [open, setOpen] = React.useState(false);',
      '\nconst handleClose = () => {',
      '  setOpen(false);',
      '};',
      '\nconst handleOpen = () => {',
      '  setOpen(true);',
      '};\n'
    ],
    defaultProps: [
      'sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}'
    ],
    propOptions: [
      'children',
      'classes',
      'component',
      'components',
      'componentsProps',
      'invisible',
      'slotProps',
      'slots',
      'sx',
      'TransitionComponent',
      'transitionDuration'
    ],
    jsx: [
      '<div>',
      '  <Button onClick={handleOpen}>Show backdrop</Button>',
      '  <Backdrop >',
      '    <CircularProgress color="inherit" />',
      '  </Backdrop>',
      '</div>'
    ],

    componentData: {
      type: 'div',
      props: { sx: { m: 1 } },
      children: [
        {
          type: 'Button',
          props: { onClick: '{handleOpen}', role: 'modalTrigger' }, // used 'modalTrigger' here because it is requires the same handleOpen function already created
          children: 'Show backdrop'
        },
        {
          type: 'Backdrop',
          props: {
            sx: { color: '#fff', zIndex: '(theme) => theme.zIndex.drawer + 1' },
            open: '{open}',
            onClick: '{handleClose}',
            role: 'backDrop'
          },
          children: {
            type: 'CircularProgress',
            props: { color: 'inherit' },
            children: []
          }
        }
      ]
    },
    children: []
  },
  {
    id: 46,
    tag: 'dialog',
    name: 'Dialog',
    style: {},
    placeHolderShort: 'dialog',
    placeHolderLong: 'Material UI Dialog Component',
    icon: 'Message',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Button from '@mui/material/Button';",
      "import Dialog from '@mui/material/Dialog';",
      "import DialogActions from '@mui/material/DialogActions';",
      "import DialogContent from '@mui/material/DialogContent';",
      "import DialogContentText from '@mui/material/DialogContentText';",
      "import DialogTitle from '@mui/material/DialogTitle';"
    ],
    stateAndEventHandlers: [
      'const [open, setOpen] = React.useState(false);',
      '\nconst handleClickOpen = () => {',
      '  setOpen(true);',
      '};',
      '\nconst handleClose = () => {',
      '  setOpen(false);',
      '};\n'
    ],
    defaultProps: [
      'open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"'
    ],
    propOptions: [
      'aria-describedby',
      'aria-labelledby',
      'BackdropComponent',
      'children',
      'classes',
      'disableEscapeKeyDown',
      'fullScreen',
      'fullWidth',
      'maxWidth',
      'onBackdropClick',
      'onClose',
      'PaperComponent',
      'PaperProps',
      'scroll',
      'sx',
      'TransitionComponent',
      'transitionDuration',
      'TransitionProps'
    ],
    jsx: [
      '<React.Fragment>',
      '  <Button variant="outlined" onClick={handleClickOpen}>',
      '    Open alert dialog',
      '  </Button>',
      '  <Dialog >',
      '    <DialogTitle id="alert-dialog-title">',
      '      {"Use Google\'s location service?"}',
      '    </DialogTitle>',
      '    <DialogContent>',
      '      <DialogContentText id="alert-dialog-description">',
      '        Let Google help apps determine location. This means sending anonymous',
      '        location data to Google, even when no apps are running.',
      '      </DialogContentText>',
      '    </DialogContent>',
      '    <DialogActions>',
      '      <Button onClick={handleClose}>Disagree</Button>',
      '      <Button onClick={handleClose} autoFocus>',
      '        Agree',
      '      </Button>',
      '    </DialogActions>',
      '  </Dialog>',
      '</React.Fragment>'
    ],

    componentData: {
      type: 'React.Fragment',
      props: {},
      children: [
        {
          type: 'Button',
          props: {
            sx: { m: 1 },
            variant: 'outlined',
            onClick: '{handleClickOpen}',
            role: 'modalTrigger' // used 'modalTrigger' here because it is requires the same handleOpen function already created
          },
          children: 'Open alert dialog'
        },
        {
          type: 'Dialog',
          props: {
            open: '{open}',
            onClose: '{handleClose}',
            'aria-labelledby': '"alert-dialog-title"',
            'aria-describedby': '"alert-dialog-description"',
            role: 'dialog'
          },
          children: [
            {
              type: 'DialogTitle',
              props: { id: '"alert-dialog-title"' },
              children: '"Use Google\'s location service?"'
            },
            {
              type: 'DialogContent',
              props: {},
              children: [
                {
                  type: 'DialogContentText',
                  props: { id: '"alert-dialog-description"' },
                  children:
                    'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
                }
              ]
            },
            {
              type: 'DialogActions',
              props: {},
              children: [
                {
                  type: 'Button',
                  props: { onClick: '{handleClose}', role: 'dialog' },
                  children: 'Disagree'
                },
                {
                  type: 'Button',
                  props: {
                    onClick: '{handleClose}',
                    autoFocus: true,
                    role: 'dialog'
                  },
                  children: 'Agree'
                }
              ]
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 47,
    tag: 'progress',
    name: 'Progress',
    style: {},
    placeHolderShort: 'progress',
    placeHolderLong: 'Material UI Circular Progress With Label Component',
    icon: 'HourglassFull',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import CircularProgress from '@mui/material/CircularProgress';",
      "import Box from '@mui/material/Box';"
    ],
    stateAndEventHandlers: [],
    defaultProps: [],
    propOptions: [
      'classes',
      'color',
      'disableShrink',
      'size',
      'sx',
      'thickness',
      'value',
      'variant'
    ],
    jsx: ['<Box sx={{ display: "flex" }}>', '  <CircularProgress />', '</Box>'],
    componentData: {
      type: 'Box',
      props: { sx: { display: 'flex', m: 1 } },
      children: [
        {
          type: 'CircularProgress',
          props: {}
        }
      ]
    },
    children: []
  },
  {
    id: 48,
    tag: 'skeleton',
    name: 'Skeleton',
    style: {},
    placeHolderShort: 'skeleton',
    placeHolderLong: 'Material UI Skeleton Component',
    icon: 'NotificationImportant',
    framework: 'reactClassic',
    nestable: true,
    imports: [
      "import Skeleton from '@mui/material/Skeleton';",
      "import Stack from '@mui/material/Stack';"
    ],
    stateAndEventHandlers: [],
    defaultProps: ['loading'],
    propOptions: [
      'animation',
      'children',
      'classes',
      'component',
      'height',
      'sx',
      'variant',
      'width'
    ],
    jsx: [
      '<Stack spacing={1}>',
      '  {/* For variant="text", adjust the height via font-size */}',
      '  <Skeleton variant="text" sx={{ fontSize: \'1rem\' }} />',
      '  {/* For other variants, adjust the size with `width` and `height` */}',
      '  <Skeleton variant="circular" width={40} height={40} />',
      '  <Skeleton variant="rectangular" width={210} height={60} />',
      '  <Skeleton variant="rounded" width={210} height={60} />',
      '</Stack>'
    ],
    componentData: {
      type: 'SkeletonTypography',
      props: {},
      children: [
        {
          type: 'Stack',
          props: { spacing: 1, m: 1 },
          children: [
            {
              type: 'Skeleton',
              props: { variant: 'text', sx: { fontSize: '1rem' } }
            },
            {
              type: 'Skeleton',
              props: { variant: 'circular', width: 40, height: 40 }
            },
            {
              type: 'Skeleton',
              props: { variant: 'rectangular', width: 210, height: 60 }
            },
            {
              type: 'Skeleton',
              props: { variant: 'rounded', width: 210, height: 60 }
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 49,
    tag: 'snackbar',
    name: 'Snackbar',
    style: {},
    placeHolderShort: 'snackbar',
    placeHolderLong: 'Material UI Simple Snackbar Component',
    icon: 'ViewSidebar',
    framework: 'reactClassic',
    nestable: true,
    imports: [
      "import Button from '@mui/material/Button';",
      "import Snackbar from '@mui/material/Snackbar';",
      "import IconButton from '@mui/material/IconButton';",
      "import CloseIcon from '@mui/icons-material/Close';"
    ],
    stateAndEventHandlers: [
      'const [open, setOpen] = React.useState(false);',
      '\nconst handleClick = () => {',
      '  setOpen(true);',
      '};',
      '\nconst handleClose = (event, reason) => {',
      "  if (reason === 'clickaway') {",
      '    return;',
      '  }',
      '  setOpen(false);',
      '};',
      '\nconst action = (',
      '    <React.Fragment>',
      '      <Button color="secondary" size="small" onClick={handleClose}>',
      '        UNDO',
      '      </Button>',
      '      <IconButton',
      '        size="small"',
      '        aria-label="close"',
      '        color="inherit"',
      '        onClick={handleClose}',
      '      >',
      '        <CloseIcon fontSize="small" />',
      '      </IconButton>',
      '    </React.Fragment>',
      '  );\n'
    ],
    defaultProps: [
      'open={open} autoHideDuration={6000} onClose={handleClose} message="Note archived" action={action}'
    ],
    propOptions: [
      'action',
      'anchorOrigin',
      'autoHideDuration',
      'children',
      'classes',
      'ClickAwayListenerProps',
      'ContentProps',
      'disableWindowBlurListener',
      'key',
      'message',
      'onClose',
      'open',
      'resumeHideDuration',
      'sx',
      'TransitionComponent',
      'transitionDuration',
      'TransitionProps'
    ],
    jsx: [
      '<div>',
      '  <Button onClick={handleClick}>Open Snackbar</Button>',
      '  <Snackbar />',
      '</div>'
    ],
    componentData: {
      type: 'SimpleSnackbar',
      props: { sx: { m: 1 } },
      children: [
        {
          type: 'Button',
          props: { onClick: '{handleClick}', role: 'modalTrigger' },
          children: 'Open Snackbar'
        },
        {
          type: 'Snackbar',
          props: {
            open: '{open}',
            autoHideDuration: 6000,
            onClose: '{handleClose}',
            message: 'Note archived',
            action: '{action}'
          }
        }
      ]
    },
    children: []
  },
  {
    id: 50,
    tag: 'accordion',
    name: 'Accordion',
    style: {},
    placeHolderShort: 'accordion',
    placeHolderLong: 'Material UI Accordion Component',
    icon: 'ExpandMore',
    framework: 'reactClassic',
    nestable: true,
    imports: [
      "import Accordion from '@mui/material/Accordion';",
      "import AccordionActions from '@mui/material/AccordionActions';",
      "import AccordionSummary from '@mui/material/AccordionSummary';",
      "import AccordionDetails from '@mui/material/AccordionDetails';",
      "import ExpandMoreIcon from '@mui/icons-material/ExpandMore';",
      "import Button from '@mui/material/Button';"
    ],
    stateAndEventHandlers: [],
    defaultProps: [],
    propOptions: [
      'children',
      'classes',
      'defaultExpanded',
      'disabled',
      'disableGutters',
      'expanded',
      'onChange',
      'slotProps',
      'slots',
      'square',
      'sx',
      'TransitionComponent',
      'TransitionProps'
    ],
    jsx: [
      '<Accordion>',
      "  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>",
      '    Accordion 1',
      '  </AccordionSummary>',
      '  <AccordionDetails>',
      '    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
      '  </AccordionDetails>',
      '  <AccordionActions>',
      '    <Button>Cancel</Button>',
      '    <Button>Agree</Button>',
      '  </AccordionActions>',
      '</Accordion>'
    ],
    componentData: {
      type: 'Accordion',
      props: { sx: { m: 1 } },
      children: [
        {
          type: 'AccordionSummary',
          props: {
            expandIcon: '<ExpandMoreIcon />',
            'aria-controls': 'panel1-content',
            id: 'panel1-header'
          },
          children: 'Accordion 1'
        },
        {
          type: 'AccordionDetails',
          children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
          type: 'AccordionActions',
          children: [
            {
              type: 'Button',
              children: 'Cancel'
            },
            {
              type: 'Button',
              children: 'Agree'
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 51,
    tag: 'appbar',
    name: 'AppBar',
    style: {},
    placeHolderShort: 'appbar',
    placeHolderLong: 'Material UI AppBar Component',
    icon: 'Menu',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import AppBar from '@mui/material/AppBar';",
      "import Box from '@mui/material/Box';",
      "import Toolbar from '@mui/material/Toolbar';",
      "import Typography from '@mui/material/Typography';",
      "import Button from '@mui/material/Button';",
      "import IconButton from '@mui/material/IconButton';",
      "import MenuIcon from '@mui/icons-material/Menu';"
    ],
    stateAndEventHandlers: [],
    defaultProps: ['position="static"'],
    propOptions: [
      'children',
      'classes',
      'color',
      'enableColorOnDark',
      'position',
      'sx'
    ],
    jsx: [
      '<Box sx={{ flexGrow: 1 }}>',
      '  <AppBar >',
      '    <Toolbar>',
      "      <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>",
      '        <MenuIcon />',
      '      </IconButton>',
      "      <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>",
      '        News',
      '      </Typography>',
      "      <Button color='inherit'>Login</Button>",
      '    </Toolbar>',
      '  </AppBar>',
      '</Box>'
    ],
    componentData: {
      type: 'Box',
      props: {
        sx: { flexGrow: 1, m: 1 }
      },
      children: [
        {
          type: 'AppBar',
          props: {
            position: 'static'
          },
          children: [
            {
              type: 'Toolbar',
              children: [
                {
                  type: 'IconButton',
                  props: {
                    size: 'large',
                    edge: 'start',
                    color: 'inherit',
                    'aria-label': 'menu',
                    sx: { mr: 2 }
                  },
                  children: '<MenuIcon />'
                },
                {
                  type: 'Typography',
                  props: {
                    variant: 'h6',
                    component: 'div',
                    sx: { flexGrow: 1 }
                  },
                  children: 'News'
                },
                {
                  type: 'Button',
                  props: {
                    color: 'inherit'
                  },
                  children: 'Login'
                }
              ]
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 52,
    tag: 'card',
    name: 'Card',
    style: {},
    placeHolderShort: 'card',
    placeHolderLong: 'Material UI Card Component',
    icon: 'CardTravel',
    framework: 'reactClassic',
    nestable: true,
    imports: [
      "import Box from '@mui/material/Box';",
      "import Card from '@mui/material/Card';",
      "import CardActions from '@mui/material/CardActions';",
      "import CardContent from '@mui/material/CardContent';",
      "import Button from '@mui/material/Button';",
      "import Typography from '@mui/material/Typography';"
    ],
    stateAndEventHandlers: [],
    defaultProps: ['sx={{ minWidth: 275 }}'],
    propOptions: ['children', 'classes', 'raised', 'sx'],
    jsx: [
      '<Card >',
      '  <CardContent>',
      '    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>',
      '      Word of the Day',
      '    </Typography>',
      '    <Typography variant="h5" component="div">',
      '      benevolent',
      '    </Typography>',
      '    <Typography sx={{ mb: 1.5 }} color="text.secondary">',
      '      adjective',
      '    </Typography>',
      '    <Typography variant="body2">',
      '      well meaning and kindly.',
      '      <br />',
      '      {\'"a benevolent smile"\'}',
      '    </Typography>',
      '  </CardContent>',
      '  <CardActions>',
      '    <Button size="small">Learn More</Button>',
      '  </CardActions>',
      '</Card>'
    ],
    componentData: {
      type: 'Card',
      props: { sx: { m: 1 } },
      children: [
        {
          type: 'CardContent',
          props: {},
          children: [
            {
              type: 'Typography',
              props: {
                sx: { fontSize: 14 },
                color: 'text.secondary',
                gutterBottom: true
              },
              children: 'Word of the Day'
            },
            {
              type: 'Typography',
              props: { variant: 'h5', component: 'div' },
              children: 'benevolent'
            },
            {
              type: 'Typography',
              props: { sx: { mb: 1.5 }, color: 'text.secondary' },
              children: 'adjective'
            },
            {
              type: 'Typography',
              props: { variant: 'body2' },
              children: ['well meaning and kindly.', '"a benevolent smile"']
            }
          ]
        },
        {
          type: 'CardActions',
          props: {},
          children: [
            {
              type: 'Button',
              props: {
                size: 'small'
              },
              children: 'Learn More'
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 53,
    tag: 'paper',
    name: 'Paper',
    style: {},
    placeHolderShort: 'paper',
    placeHolderLong: 'Material UI Paper Component',
    icon: 'Layers',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Box from '@mui/material/Box';",
      "import Paper from '@mui/material/Paper';"
    ],
    stateAndEventHandlers: [],
    defaultProps: [],
    propOptions: [
      'children',
      'classes',
      'component',
      'elevation',
      'square',
      'sx',
      'variant'
    ],
    jsx: [
      "<Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: 128, height: 128 } }}>",
      '  <Paper elevation={0} />',
      '  <Paper />',
      '  <Paper elevation={3} />',
      '</Box>'
    ],
    componentData: {
      type: 'Box',
      props: {
        sx: {
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128
          }
        }
      },
      children: [
        {
          type: 'Paper',
          props: {
            elevation: 0,
            sx: { backgroundColor: '#121212' }
          }
        },
        {
          type: 'Paper',
          props: {
            sx: { backgroundColor: '#1E1E1E' }
          }
        },
        {
          type: 'Paper',
          props: {
            elevation: 3,
            sx: { backgroundColor: '#252525' }
          }
        }
      ]
    },
    children: []
  },
  {
    id: 54,
    tag: 'bottomNavigation',
    name: 'Bottom Navigation',
    style: {},
    placeHolderShort: 'bottomNavigation',
    placeHolderLong: 'Material UI Bottom Navigation Component',
    icon: 'Navigation',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Box from '@mui/material/Box';",
      "import BottomNavigation from '@mui/material/BottomNavigation';",
      "import BottomNavigationAction from '@mui/material/BottomNavigationAction';",
      "import FolderIcon from '@mui/icons-material/Folder';",
      "import RestoreIcon from '@mui/icons-material/Restore';",
      "import FavoriteIcon from '@mui/icons-material/Favorite';",
      "import LocationOnIcon from '@mui/icons-material/LocationOn';"
    ],
    stateAndEventHandlers: ['const [value, setValue] = React.useState(0);\n'],
    defaultProps: [],
    propOptions: [
      'children',
      'classes',
      'component',
      'onChange',
      'showLabels',
      'sx',
      'value'
    ],
    jsx: [
      '<Box sx={{ width: 500 }}>',
      '  <BottomNavigation showLabels value={value} onChange={(event, newValue) => {setValue(newValue)}}>',
      "    <BottomNavigationAction label='Recents' value='recents' icon={<RestoreIcon />} />",
      "    <BottomNavigationAction label='Favorites' value='favorites' icon={<FavoriteIcon />} />",
      "    <BottomNavigationAction label='Nearby' value='nearby' icon={<LocationOnIcon />} />",
      "    <BottomNavigationAction label='Folder' value='folder' icon={<FolderIcon />} />",
      '  </BottomNavigation>',
      '</Box>'
    ],
    componentData: {
      type: 'Box',
      props: {
        sx: { width: 500, m: 1 }
      },
      children: [
        {
          type: 'BottomNavigation',
          props: {
            value: '{value}',
            onChange: '{(event, newValue) => setValue(newValue)}',
            showLabels: true,
            sx: { backgroundColor: '#0671E3' }
          },
          children: [
            {
              type: 'BottomNavigationAction',
              props: {
                label: 'Recents',
                icon: '<RestoreIcon />',
                sx: { backgroundColor: '#0671E3', color: 'white' }
              }
            },
            {
              type: 'BottomNavigationAction',
              props: {
                label: 'Favorites',
                icon: '<FavoriteIcon />',
                sx: { backgroundColor: '#0671E3', color: 'white' }
              }
            },
            {
              type: 'BottomNavigationAction',
              props: {
                label: 'Nearby',
                icon: '<LocationOnIcon />',
                sx: { backgroundColor: '#0671E3', color: 'white' }
              }
            },
            {
              type: 'BottomNavigationAction',
              props: {
                label: 'Folder',
                icon: '<FolderIcon />',
                sx: { backgroundColor: '#0671E3', color: 'white' }
              }
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 55,
    tag: 'breadcrumbs',
    name: 'Breadcrumbs',
    style: {},
    placeHolderShort: 'breadcrumbs',
    placeHolderLong: 'Material UI Breadcrumbs Component',
    icon: 'BakeryDining',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Breadcrumbs from '@mui/material/Breadcrumbs';",
      "import Link from '@mui/material/Link';",
      "import Typography from '@mui/material/Typography';"
    ],
    stateAndEventHandlers: [
      '\nfunction handleClick(event) {',
      '  event.preventDefault();',
      '  console.info("You clicked a breadcrumb.");',
      '}; \n'
    ],
    defaultProps: ['aria-label="breadcrumb"'],
    propOptions: [
      'children',
      'classes',
      'component',
      'expandText',
      'itemsAfterCollapse',
      'itemsBeforeCollapse',
      'maxItems',
      'separator',
      'slotProps',
      'slots',
      'sx'
    ],
    jsx: [
      "<div role='presentation' onClick={handleClick}>",
      '  <Breadcrumbs >',
      "    <Link underline='hover' color='inherit' href='#'>MUI</Link>",
      "    <Link underline='hover' color='inherit' href='#'>Core</Link>",
      "    <Typography color='text.primary'>Breadcrumbs</Typography>",
      '  </Breadcrumbs>',
      '</div>'
    ],
    componentData: {
      type: 'div',
      props: {
        role: 'presentation',
        onClick: '{handleClick}',
        s: { m: 1 }
      },
      children: [
        {
          type: 'Breadcrumbs',
          props: {
            'aria-label': 'breadcrumb'
          },
          children: [
            {
              type: 'Link',
              props: {
                underline: 'hover',
                color: 'inherit',
                onClick: 'event => event.preventDefault()'
              },
              children: 'MUI'
            },
            {
              type: 'Link',
              props: {
                underline: 'hover',
                color: 'inherit',
                onClick: 'event => event.preventDefault()'
              },
              children: 'Core'
            },
            {
              type: 'Link',
              props: {
                underline: 'hover',
                color: 'text.primary',
                onClick: 'event => event.preventDefault()',
                'aria-current': 'page'
              },
              children: 'Breadcrumbs'
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 56,
    tag: 'drawer',
    name: 'Drawer',
    style: {},
    placeHolderShort: 'drawer',
    placeHolderLong: 'Material UI Drawer Component',
    icon: 'DynamicFeed',
    framework: 'reactClassic',
    nestable: true,
    imports: [
      "import Box from '@mui/material/Box';",
      "import Drawer from '@mui/material/Drawer';",
      "import Button from '@mui/material/Button';",
      "import List from '@mui/material/List';",
      "import Divider from '@mui/material/Divider';",
      "import ListItem from '@mui/material/ListItem';",
      "import ListItemButton from '@mui/material/ListItemButton';",
      "import ListItemIcon from '@mui/material/ListItemIcon';",
      "import ListItemText from '@mui/material/ListItemText';",
      "import InboxIcon from '@mui/icons-material/MoveToInbox';",
      "import MailIcon from '@mui/icons-material/Mail';"
    ],
    stateAndEventHandlers: [
      // Ensuring every snippet is unique by appending unique details
      'const [open, setOpen] = React.useState(false); // uniqueKey-001',
      'const toggleDrawer = (newOpen) => () => { // uniqueKey-002',
      '  setOpen(newOpen); // uniqueKey-003',
      '}; // uniqueKey-004',
      'const DrawerList = ( // uniqueKey-005',
      '  <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}> // uniqueKey-006',
      '    <List> // uniqueKey-007',
      "      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( // uniqueKey-008",
      '        <ListItem key={text} disablePadding> // uniqueKey-009',
      '          <ListItemButton> // uniqueKey-010',
      '            <ListItemIcon> // uniqueKey-011',
      '              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} // uniqueKey-012',
      '            </ListItemIcon> // uniqueKey-013',
      '            <ListItemText primary={text} /> // uniqueKey-014',
      '          </ListItemButton> // uniqueKey-015',
      '        </ListItem> // uniqueKey-016',
      '      ))} // uniqueKey-017',
      '    </List> // uniqueKey-018',
      '    <Divider /> // uniqueKey-019',
      '    <List> // uniqueKey-020',
      "      {['All mail', 'Trash', 'Spam'].map((text, index) => ( // uniqueKey-021",
      '        <ListItem key={text} disablePadding> // uniqueKey-022',
      '          <ListItemButton> // uniqueKey-023',
      '            <ListItemIcon> // uniqueKey-024',
      '              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} // uniqueKey-025',
      '            </ListItemIcon> // uniqueKey-026',
      '            <ListItemText primary={text} /> // uniqueKey-027',
      '          </ListItemButton> // uniqueKey-028',
      '        </ListItem> // uniqueKey-029',
      '      ))} // uniqueKey-030',
      '    </List> // uniqueKey-031',
      '  </Box> // uniqueKey-032',
      '); // uniqueKey-033',
      ''
    ],
    defaultProps: ['open={open} onClose={toggleDrawer(false)}'],
    propOptions: [
      'anchor',
      'children',
      'classes',
      'elevation',
      'hideBackdrop',
      'ModalProps',
      'onClose',
      'open',
      'PaperProps',
      'SlideProps',
      'sx',
      'transitionDuration',
      'variant'
    ],
    jsx: [
      '<div>',
      '  <Button onClick={toggleDrawer(true)}>Open drawer</Button>',
      '  <Drawer >',
      '    {DrawerList}',
      '  </Drawer>',
      '</div>'
    ],
    componentData: {
      type: 'Box',
      props: {},
      children: [
        {
          type: 'Button',
          props: {
            onClick: 'toggleDrawer(true)',
            role: 'drawer'
          },
          children: 'Open drawer'
        },
        {
          type: 'Drawer',
          props: {
            open: 'open',
            onClose: 'toggleDrawer(false)'
          },
          children: {
            type: 'DrawerList',
            props: {},
            children: ''
          }
        }
      ]
    },
    children: []
  },
  {
    id: 57,
    tag: 'link',
    name: 'Link',
    style: {},
    placeHolderShort: 'link',
    placeHolderLong: 'Material UI Link Component Examples',
    icon: 'Link',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Box from '@mui/material/Box';",
      "import Link from '@mui/material/Link';"
    ],
    stateAndEventHandlers: [],
    defaultProps: ['onClick={preventDefault}'],
    propOptions: [
      'children',
      'classes',
      'component',
      'sx',
      'color',
      'TypographyClasses',
      'underline',
      'variant'
    ],
    jsx: [
      "<Box sx={{ typography: 'body1', '& > :not(style) ~ :not(style)': { ml: 2 } }} onClick={preventDefault}>",
      "  <Link href='#' >Link</Link>",
      "  <Link href='#' color='inherit'>{'color=\"inherit\"'}</Link>",
      "  <Link href='#' variant='body2'>{'variant=\"body2\"'}</Link>",
      '</Box>'
    ],
    componentData: {
      type: 'Box',
      props: {
        sx: {
          typography: 'body1',
          '& > :not(style) ~ :not(style)': {
            ml: 2
          },
          m: 1
        },
        onClick: 'preventDefault'
      },
      children: [
        {
          type: 'Link',
          props: {},
          children: 'Link'
        },
        {
          type: 'Link',
          props: {
            color: 'inherit'
          },
          children: 'color="inherit"'
        },
        {
          type: 'Link',
          props: {
            variant: 'body2'
          },
          children: 'variant="body2"'
        }
      ]
    },
    children: []
  },
  {
    id: 58,
    tag: 'menu',
    name: 'Menu',
    style: {},
    placeHolderShort: 'menu',
    placeHolderLong: 'Material UI Menu Component',
    icon: 'Menu',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Button from '@mui/material/Button';",
      "import Menu from '@mui/material/Menu';",
      "import MenuItem from '@mui/material/MenuItem';"
    ],
    stateAndEventHandlers: [
      'const [anchorEl, setAnchorEl] = React.useState(null);',
      'const open = Boolean(anchorEl);',
      'const handleClick = (event) => setAnchorEl(event.currentTarget);',
      'const handleClose = () => setAnchorEl(null);\n'
    ],
    defaultProps: [
      "anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button'}}"
    ],
    propOptions: [
      'anchorEl',
      'autoFocus',
      'children',
      'classes',
      'color',
      'component',
      'disableAutoFocusItem',
      'MenuListProps',
      'onClose',
      'open',
      'PopoverClasses',
      'slotProps',
      'slots',
      'sx',
      'transitionDuration',
      'TransitionProps',
      'variant'
    ],
    jsx: [
      '<div>',
      "  <Button id='basic-button' aria-controls={open ? 'basic-menu' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined} onClick={handleClick}>",
      '    Dashboard',
      '  </Button>',
      "  <Menu id='basic-menu' >",
      '    <MenuItem onClick={handleClose}>Profile</MenuItem>',
      '    <MenuItem onClick={handleClose}>My account</MenuItem>',
      '    <MenuItem onClick={handleClose}>Logout</MenuItem>',
      '  </Menu>',
      '</div>'
    ],
    componentData: {
      type: 'div',
      children: [
        {
          type: 'Button',
          props: {
            id: 'basic-button',
            'aria-controls': "{open ? 'basic-menu' : undefined}",
            'aria-haspopup': 'true',
            'aria-expanded': "{open ? 'true' : undefined}",
            onClick: 'handleClick',
            sx: { m: 1 },
            role: 'menu'
          },
          children: 'Dashboard'
        },
        {
          type: 'Menu',
          props: {
            id: 'basic-menu',
            anchorEl: '{anchorEl}',
            open: '{open}',
            onClose: 'handleClose',
            MenuListProps: {
              'aria-labelledby': 'basic-button'
            }
          },
          children: [
            {
              type: 'MenuItem',
              props: {
                onClick: 'handleClose'
              },
              children: 'Profile'
            },
            {
              type: 'MenuItem',
              props: {
                onClick: 'handleClose'
              },
              children: 'My account'
            },
            {
              type: 'MenuItem',
              props: {
                onClick: 'handleClose'
              },
              children: 'Logout'
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 59,
    tag: 'pagination',
    name: 'Pagination',
    style: {},
    placeHolderShort: 'pagination',
    placeHolderLong: 'Material UI Pagination Component',
    icon: 'LastPage',
    framework: 'reactClassic',
    nestable: false,
    imports: ["import Pagination from '@mui/material/Pagination';"],
    stateAndEventHandlers: [],
    defaultProps: ["count={10} color='secondary'"],
    propOptions: [
      'boundaryCount',
      'classes',
      'color',
      'count',
      'defaultPage',
      'disabled',
      'getItemAriaLabel',
      'hideNextButton',
      'hidePrevButton',
      'onChange',
      'page',
      'renderItem',
      'shape',
      'showFirstButton',
      'showLastButton',
      'siblingCount',
      'size',
      'sx',
      'transitionDuration',
      'TransitionProps',
      'variant'
    ],
    jsx: ['<Pagination />'],
    componentData: {
      type: 'Stack',
      props: {
        direction: 'row',
        spacing: 2,
        sx: { m: 1 }
      },
      children: [
        {
          type: 'Pagination',
          props: {
            count: 10,
            color: 'secondary'
          }
        }
      ]
    },
    children: []
  },
  {
    id: 60,
    tag: 'speedDial',
    name: 'Speed Dial',
    style: {},
    placeHolderShort: 'speedDial',
    placeHolderLong: 'Material UI Speed Dial Component',
    icon: 'Speed',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Box from '@mui/material/Box';",
      "import SpeedDial from '@mui/material/SpeedDial';",
      "import SpeedDialIcon from '@mui/material/SpeedDialIcon';",
      "import SpeedDialAction from '@mui/material/SpeedDialAction';",
      "import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';",
      "import SaveIcon from '@mui/icons-material/Save';",
      "import PrintIcon from '@mui/icons-material/Print';",
      "import ShareIcon from '@mui/icons-material/Share';",
      '\nconst actions = [',
      "  { icon: <FileCopyIcon />, name: 'Copy' },",
      "  { icon: <SaveIcon />, name: 'Save' },",
      "  { icon: <PrintIcon />, name: 'Print' },",
      "  { icon: <ShareIcon />, name: 'Share' },",
      '];'
    ],
    stateAndEventHandlers: [],
    defaultProps: [
      'ariaLabel="SpeedDial basic example" sx={{ position: "absolute", bottom: 16, right: 16 }} icon={<SpeedDialIcon />}'
    ],
    propOptions: [
      'ariaLabel',
      'children',
      'classes',
      'direction',
      'FabProps',
      'hidden',
      'icon',
      'onClose',
      'onOpen',
      'open',
      'openIcon',
      'sx',
      'TransitionComponent',
      'transitionDuration',
      'TransitionProps',
      'variant'
    ],
    jsx: [
      "<Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>",
      '  <SpeedDial >',
      '    {actions.map((action) => (<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name}/>))}',
      '  </SpeedDial>',
      '</Box>'
    ],
    componentData: {
      type: 'Box',
      props: {
        sx: {
          height: 320,
          transform: 'translateZ(0px)',
          flexGrow: 1
        }
      },
      children: [
        {
          type: 'SpeedDial',
          props: {
            ariaLabel: 'SpeedDial basic example',
            sx: { position: 'absolute', bottom: 16, right: 16 },
            icon: '<SpeedDialIcon />'
          },
          children: [
            {
              type: 'SpeedDialAction',
              props: {
                icon: '<FileCopyIcon />',
                name: 'Copy'
              }
            },
            {
              type: 'SpeedDialAction',
              props: {
                icon: '<SaveIcon />',
                name: 'Save'
              }
            },
            {
              type: 'SpeedDialAction',
              props: {
                icon: '<PrintIcon />',
                name: 'Print'
              }
            },
            {
              type: 'SpeedDialAction',
              props: {
                icon: '<ShareIcon />',
                name: 'Share'
              }
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 61,
    tag: 'stepper',
    name: 'Stepper',
    style: {},
    placeHolderShort: 'stepper',
    placeHolderLong: 'Material UI Stepper Component',
    icon: 'ClearAll',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Box from '@mui/material/Box';",
      "import Stepper from '@mui/material/Stepper';",
      "import Step from '@mui/material/Step';",
      "import StepLabel from '@mui/material/StepLabel';",
      "import StepContent from '@mui/material/StepContent';",
      "import Button from '@mui/material/Button';",
      "import Paper from '@mui/material/Paper';",
      "import Typography from '@mui/material/Typography';",
      '\nconst steps = [',
      "  { label: 'Select campaign settings', description: `For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.` },",
      "  { label: 'Create an ad group', description: 'An ad group contains one or more ads which target a shared set of keywords.' },",
      "  { label: 'Create an ad', description: `Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.` }",
      '];'
    ],
    stateAndEventHandlers: [
      'const [activeStep, setActiveStep] = React.useState(0);',
      '\nconst handleNext = () => {',
      '  setActiveStep((prevActiveStep) => prevActiveStep + 1);',
      '};',
      '\nconst handleBack = () => {',
      '  setActiveStep((prevActiveStep) => prevActiveStep - 1);\n};',
      '\nconst handleReset = () => {',
      'setActiveStep(0);\n};\n'
    ],
    defaultProps: ['activeStep={activeStep} orientation="vertical"'],
    propOptions: [
      'activeStep',
      'alternativeLabel',
      'children',
      'classes',
      'component',
      'connector',
      'nonLinear',
      'orientation',
      'sx',
      'TransitionComponent',
      'transitionDuration',
      'TransitionProps'
    ],
    jsx: [
      '<Box sx={{ maxWidth: 400 }}>',
      '  <Stepper >',
      '    {steps.map((step, index) => (',
      '      <Step key={step.label}>',
      "        <StepLabel optional={index === 2 ? <Typography variant='caption'>Last step</Typography> : null}>{step.label}</StepLabel>",
      '        <StepContent>',
      '          <Typography>{step.description}</Typography>',
      '          <Box sx={{ mb: 2 }}>',
      '            <div>',
      "              <Button variant='contained' onClick={handleNext} sx={{ mt: 1, mr: 1 }}>{index === steps.length - 1 ? 'Finish' : 'Continue'}</Button>",
      '              <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>Back</Button>',
      '            </div>',
      '          </Box>',
      '        </StepContent>',
      '      </Step>',
      '    ))}',
      '  </Stepper>',
      '  {activeStep === steps.length && (',
      '    <Paper square elevation={0} sx={{ p: 3 }}>',
      "      <Typography>All steps completed - you're finished</Typography>",
      '      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>Reset</Button>',
      '    </Paper>',
      '  )}',
      '</Box>'
    ],
    componentData: {
      type: 'Box',
      props: {
        sx: {
          maxWidth: '400'
        }
      },
      children: [
        {
          type: 'Stepper',
          props: {
            activeStep: '{activeStep}',
            orientation: 'vertical'
          },
          children: [
            {
              type: 'Step',
              props: {
                key: '{step.label}'
              },
              children: [
                {
                  type: 'StepLabel',
                  props: {
                    optional:
                      '{index === 2 ? \'<Typography variant="caption">Last step</Typography>\' : null}'
                  },
                  children: '{step.label}'
                },
                {
                  type: 'StepContent',
                  children: [
                    {
                      type: 'Typography',
                      children: '{step.description}'
                    },
                    {
                      type: 'Box',
                      props: {
                        sx: {
                          mb: '2'
                        }
                      },
                      children: [
                        {
                          type: 'div',
                          children: [
                            {
                              type: 'Button',
                              props: {
                                variant: 'contained',
                                onClick: '{handleNext}',
                                sx: {
                                  mt: '1',
                                  mr: '1'
                                }
                              },
                              children:
                                "{index === steps.length - 1 ? 'Finish' : 'Continue'}"
                            },
                            {
                              type: 'Button',
                              props: {
                                disabled: '{index === 0}',
                                onClick: '{handleBack}',
                                sx: {
                                  mt: '1',
                                  mr: '1'
                                }
                              },
                              children: 'Back'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 62,
    tag: 'tabs',
    name: 'Tabs',
    style: {},
    placeHolderShort: 'tabs',
    placeHolderLong: 'Material UI Tabs Component',
    icon: 'Tab',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import PropTypes from 'prop-types';",
      "import Tabs from '@mui/material/Tabs';",
      "import Tab from '@mui/material/Tab';",
      "import Typography from '@mui/material/Typography';",
      "import Box from '@mui/material/Box';",
      '\nfunction CustomTabPanel(props) {',
      '  const { children, value, index, ...other } = props;',
      '  return (',
      '    <div',
      "      role='tabpanel'",
      '      hidden={value !== index}',
      '      id={`simple-tabpanel-${index}`}',
      '      aria-labelledby={`simple-tab-${index}`}',
      '      {...other}',
      '    >',
      '      {value === index && (',
      '        <Box sx={{ p: 3 }}>',
      '          <Typography>{children}</Typography>',
      '        </Box>',
      '      )}',
      '    </div>',
      '  );',
      '}',
      '\nCustomTabPanel.propTypes = {',
      '  children: PropTypes.node,',
      '  index: PropTypes.number.isRequired,',
      '  value: PropTypes.number.isRequired',
      '};',
      '\nfunction a11yProps(index) {',
      '  return {',
      '    id: `simple-tab-${index}`,',
      "    'aria-controls': `simple-tabpanel-${index}`",
      '  };',
      '}'
    ],
    stateAndEventHandlers: [
      'const [value, setValue] = React.useState(0);',
      '\nconst handleChange = (event, newValue) => setValue(newValue);\n'
    ],
    defaultProps: [
      'value={value} onChange={handleChange} aria-label="basic tabs example"'
    ],
    propOptions: [
      'children',
      'classes',
      'component',
      'disabled',
      'disableFocusRipple',
      'disableRipple',
      'icon',
      'iconPosition',
      'label',
      'sx',
      'value',
      'wrapped'
    ],
    jsx: [
      "<Box sx={{ width: '100%' }}>",
      "  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>",
      '    <Tabs >',
      "      <Tab label='Item One' {...a11yProps(0)} />",
      "      <Tab label='Item Two' {...a11yProps(1)} />",
      "      <Tab label='Item Three' {...a11yProps(2)} />",
      '    </Tabs>',
      '  </Box>',
      '  <CustomTabPanel value={value} index={0}>',
      '    Item One',
      '  </CustomTabPanel>',
      '  <CustomTabPanel value={value} index={1}>',
      '    Item Two',
      '  </CustomTabPanel>',
      '  <CustomTabPanel value={value} index={2}>',
      '    Item Three',
      '  </CustomTabPanel>',
      '</Box>'
    ],
    componentData: {
      type: 'Box',
      props: {
        sx: { width: '100%' }
      },
      children: [
        {
          type: 'Box',
          props: {
            sx: { borderBottom: 1, borderColor: 'divider' }
          },
          children: [
            {
              type: 'Tabs',
              props: {
                value: '{value}',
                onChange: 'handleChange',
                'aria-label': 'basic tabs example'
              },
              children: [
                {
                  type: 'Tab',
                  props: {
                    label: 'Item One',
                    index: 0
                  }
                },
                {
                  type: 'Tab',
                  props: {
                    label: 'Item Two',
                    index: 1
                  }
                },
                {
                  type: 'Tab',
                  props: {
                    label: 'Item Three',
                    index: 2
                  }
                }
              ]
            }
          ]
        },
        {
          type: 'CustomTabPanel',
          props: {
            value: '{value}',
            index: 0
          },
          children: 'Item One'
        },
        {
          type: 'CustomTabPanel',
          props: {
            value: '{value}',
            index: 1
          },
          children: 'Item Two'
        },
        {
          type: 'CustomTabPanel',
          props: {
            value: '{value}',
            index: 2
          },
          children: 'Item Three'
        }
      ]
    },
    children: []
  },
  {
    id: 63,
    tag: 'box',
    name: 'Box',
    style: {},
    placeHolderShort: 'box',
    placeHolderLong: 'Material UI Box Component',
    icon: 'CheckBoxOutlineBlank',
    framework: 'reactClassic',
    nestable: true,
    imports: ["import Box from '@mui/material/Box';"],
    stateAndEventHandlers: [],
    defaultProps: [
      'component="section" sx={{ p: 2, border: "1px dashed grey" }}'
    ],
    propOptions: ['component', 'sx'],
    jsx: ['<Box>This Box renders as an HTML section element.</Box>'],
    componentData: {
      type: 'Box',
      props: {
        component: 'section',
        sx: { p: 2, border: '1px dashed grey', m: 1 }
      },
      children: ['This Box renders as an HTML section element.']
    },
    children: []
  },
  {
    id: 64,
    tag: 'container',
    name: 'Container',
    style: {},
    placeHolderShort: 'container',
    placeHolderLong: 'Material UI Container Component',
    icon: 'Storage',
    framework: 'reactClassic',
    nestable: true,
    imports: [
      "import CssBaseline from '@mui/material/CssBaseline';",
      "import Box from '@mui/material/Box';",
      "import Container from '@mui/material/Container';"
    ],
    stateAndEventHandlers: [],
    defaultProps: ['maxWidth="sm"'],
    propOptions: [
      'classes',
      'component',
      'disableGutters',
      'fixed',
      'maxWidth',
      'sx'
    ],
    jsx: [
      '<React.Fragment>',
      '  <CssBaseline />',
      '  <Container >',
      "    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />",
      '  </Container>',
      '</React.Fragment>'
    ],
    componentData: {
      type: 'Container',
      props: { maxWidth: 'sm' },
      children: [
        {
          type: 'Box',
          props: { sx: { bgcolor: '#cfe8fc', height: '100vh' } }
        }
      ]
    },
    children: []
  },
  {
    id: 65,
    tag: 'grid',
    name: 'Grid',
    style: {},
    placeHolderShort: 'grid',
    placeHolderLong: 'Material UI Grid Component',
    icon: 'GridOn', // Using 'GridOn' icon to represent grid
    framework: 'reactClassic',
    nestable: true,
    imports: [
      "import { styled } from '@mui/material/styles';",
      "import Box from '@mui/material/Box';",
      "import Paper from '@mui/material/Paper';",
      "import Grid from '@mui/material/Grid';",
      '\nconst Item = styled(Paper)(({ theme }) => ({',
      '  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",',
      '  ...theme.typography.body2,',
      '  padding: theme.spacing(1),',
      '  textAlign: "center",',
      ' color: theme.palette.text.secondary,',
      '}));'
    ],
    stateAndEventHandlers: [],
    defaultProps: ['container spacing={2}'],
    propOptions: [
      'children',
      'classes',
      'columns',
      'columnSpacing',
      'component',
      'container',
      'direction',
      'item',
      'lg',
      'md',
      'rowSpacing',
      'sm',
      'spacing',
      'sx',
      'wrap',
      'xl',
      'xs',
      'zeroMinWidth'
    ],
    jsx: [
      '<Box sx={{ flexGrow: 1 }}>',
      '  <Grid >',
      '    <Grid item xs={8}>',
      '      <Item>xs=8</Item>',
      '    </Grid>',
      '    <Grid item xs={4}>',
      '      <Item>xs=4</Item>',
      '    </Grid>',
      '    <Grid item xs={4}>',
      '      <Item>xs=4</Item>',
      '    </Grid>',
      '    <Grid item xs={8}>',
      '      <Item>xs=8</Item>',
      '    </Grid>',
      '  </Grid>',
      '</Box>'
    ],
    componentData: {
      type: 'Box',
      props: { sx: { flexGrow: 1, m: 1 } },
      children: [
        {
          type: 'Grid',
          props: { container: true },
          children: [
            {
              type: 'Grid',
              props: { item: true, xs: 7, sx: { m: 1 } },
              children: [
                {
                  type: 'Item',
                  props: { backgroundColor: '#1A2027', textColor: '#FFFFFF' },
                  children: 'xs=7'
                }
              ]
            },
            {
              type: 'Grid',
              props: { item: true, xs: 4, role: 'grid-item', sx: { m: 1 } },
              children: [
                {
                  type: 'Item',
                  props: { backgroundColor: '#1A2027', textColor: '#FFFFFF' },
                  children: 'xs=4'
                }
              ]
            },
            {
              type: 'Grid',
              props: { item: true, xs: 4, role: 'grid-item', sx: { m: 1 } },
              children: [
                {
                  type: 'Item',
                  props: { backgroundColor: '#1A2027', textColor: '#FFFFFF' },
                  children: 'xs=4'
                }
              ]
            },
            {
              type: 'Grid',
              props: { item: true, xs: 7, role: 'grid-item', sx: { m: 1 } },
              children: [
                {
                  type: 'Item',
                  props: { backgroundColor: '#1A2027', textColor: '#FFFFFF' },
                  children: 'xs=7'
                }
              ]
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 68,
    tag: 'stack',
    name: 'Stack',
    style: {},
    placeHolderShort: 'stack',
    placeHolderLong: 'Material UI Stack Component',
    icon: 'ViewArray',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Box from '@mui/material/Box';",
      "import Paper from '@mui/material/Paper';",
      "import Stack from '@mui/material/Stack';",
      "import { styled } from '@mui/material/styles';",
      '\nconst Item = styled(Paper)(({ theme }) => ({',
      '  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",',
      '  ...theme.typography.body2,',
      '  padding: theme.spacing(1),',
      '  textAlign: "center",',
      ' color: theme.palette.text.secondary,',
      '}));'
    ],
    stateAndEventHandlers: [],
    defaultProps: ['spacing={2}'],
    propOptions: [
      'children',
      'component',
      'direction',
      'divider',
      'spacing',
      'sx',
      'useFlexGap'
    ],
    jsx: [
      '<Box sx={{ width: "100%" }}>',
      '  <Stack ',
      '    <Item>Item 1</Item>',
      '    <Item>Item 2</Item>',
      '    <Item>Item 3</Item>',
      '  </Stack>',
      '</Box>'
    ],
    componentData: {
      type: 'Stack',
      props: { spacing: 2, sx: { mt: 1, mb: 1 } },
      children: [
        { type: 'Item', props: {}, children: 'Item 1' },
        { type: 'Item', props: {}, children: 'Item 2' },
        { type: 'Item', props: {}, children: 'Item 3' }
      ]
    },
    children: []
  },
  {
    id: 69,
    tag: 'imageList',
    name: 'Image List',
    style: {},
    placeHolderShort: 'imageList',
    placeHolderLong: 'Material UI Image List Component',
    icon: 'ArtTrack',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import ImageList from '@mui/material/ImageList';",
      "import ImageListItem from '@mui/material/ImageListItem';", // Make sure to close the quotes correctly.
      '\nconst itemData = [',
      '  {',
      "    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',",
      "    title: 'Breakfast',",
      '  },',
      '  {',
      "    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',",
      "    title: 'Burger',",
      '  },',
      '  {',
      "    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',",
      "    title: 'Camera',",
      '  },',
      '  {',
      "    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',",
      "    title: 'Coffee',",
      '  },',
      '  {',
      "    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',",
      "    title: 'Hats',",
      '  },',
      '  {',
      "    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',",
      "    title: 'Honey',",
      '  },',
      '  {',
      "    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',",
      "    title: 'Basketball',",
      '  },',
      '  {',
      "    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',",
      "    title: 'Fern',",
      '  },',
      '  {',
      "    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',",
      "    title: 'Mushrooms',",
      '  },',
      '  {',
      "    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',",
      "    title: 'Tomato basil',",
      '  },',
      '  {',
      "    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',",
      "    title: 'Sea star',",
      '  },',
      '  {',
      "    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',",
      "    title: 'Bike',",
      '  }',
      '];'
    ],
    stateAndEventHandlers: [],
    defaultProps: ['sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}'],
    propOptions: [
      'children',
      'classes',
      'cols',
      'component',
      'gap',
      'rowHeight',
      'sx',
      'variant'
    ],
    jsx: [
      '<ImageList >',
      '  {itemData.map((item) => (',
      '    <ImageListItem key={item.img}>',
      '      <img',
      '        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}',
      '        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}',
      '        alt={item.title}',
      '        loading="lazy"',
      '      />',
      '    </ImageListItem>',
      '  ))}',
      '</ImageList>'
    ],
    componentData: {
      type: 'ImageList',
      props: { sx: { m: 1 } },
      children: []
    },
    children: []
  },
  {
    id: 73,
    tag: 'modal',
    name: 'Modal',
    style: {},
    placeHolderShort: 'modal',
    placeHolderLong: 'Material UI Modal Component',
    icon: 'ZoomOutMap',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Box from '@mui/material/Box';",
      "import Button from '@mui/material/Button';",
      "import Typography from '@mui/material/Typography';",
      "import Modal from '@mui/material/Modal';",
      '\nconst style = {',
      "  position: 'absolute',",
      "  top: '50%',",
      "  left: '50%',",
      "  transform: 'translate(-50%, -50%)',",
      '  width: 400,',
      "  bgcolor: 'background.paper',",
      "  border: '2px solid #000',",
      '  boxShadow: 24,',
      '  p: 4,',
      '};'
    ],
    stateAndEventHandlers: [
      'const [open, setOpen] = React.useState(false);',
      'const handleOpen = () => setOpen(true);',
      'const handleClose = () => setOpen(false);\n'
    ],
    defaultProps: [
      'open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"'
    ],
    propOptions: [
      'children',
      'open',
      'BackdropComponent',
      'BackdropProps',
      'closeAfterTransition',
      'component',
      'components',
      'componentsProps',
      'container',
      'disableAutoFocus',
      'disableEnforceFocus',
      'disableEscapeKeyDown',
      'disablePortal',
      'disableRestoreFocus',
      'disableScrollLock',
      'hideBackdrop',
      'keepMounted',
      'onBackdropClick',
      'onClose',
      'onTransitionEnter',
      'onTransitionExited',
      'slotProps',
      'slots',
      'sx'
    ],
    jsx: [
      '<div>',
      '  <Button onClick={handleOpen}>Open modal</Button>',
      '  <Modal >',
      '    <Box sx={style}>',
      '      <Typography id="modal-modal-title" variant="h6" component="h2">',
      '        Text in a modal',
      '      </Typography>',
      '      <Typography id="modal-modal-description" sx={{ mt: 2 }}>',
      '        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
      '      </Typography>',
      '    </Box>',
      '  </Modal>',
      '</div>'
    ],
    componentData: {
      type: 'div',
      props: { sx: { m: 1 } },
      children: [
        {
          type: 'Button',
          props: {
            onClick: 'handleOpen',
            role: 'modalTrigger'
          },
          children: 'Open modal'
        },
        {
          type: 'Modal',
          props: {
            open: '{open}',
            onClose: 'handleClose',
            'aria-labelledby': 'modal-modal-title',
            'aria-describedby': 'modal-modal-description'
          },
          children: [
            {
              type: 'Box',
              props: {
                sx: '{style}',
                role: 'modalTrigger'
              },
              children: [
                {
                  type: 'Typography',
                  props: {
                    id: 'modal-modal-title',
                    variant: 'h6',
                    component: 'h2'
                  },
                  children: 'Text in a modal'
                },
                {
                  type: 'Typography',
                  props: {
                    id: 'modal-modal-description',
                    sx: '{mt: 2}'
                  },
                  children:
                    'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
                }
              ]
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 75,
    tag: 'popover',
    name: 'Popover',
    style: {},
    placeHolderShort: 'popover',
    placeHolderLong: 'Material UI Popover Component',
    icon: 'Layers',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Popover from '@mui/material/Popover';",
      "import Typography from '@mui/material/Typography';",
      "import Button from '@mui/material/Button';"
    ],
    stateAndEventHandlers: [
      'const [anchorEl, setAnchorEl] = React.useState(null);',
      'const handleClick = (event) => setAnchorEl(event.currentTarget);',
      'const handleClose = () => setAnchorEl(null);',
      'const open = Boolean(anchorEl);',
      "const id = open ? 'simple-popover' : undefined;\n"
    ],
    defaultProps: [
      "id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}"
    ],
    propOptions: [
      'open',
      'anchorEl',
      'anchorOrigin',
      'anchorPosition',
      'anchorReference',
      'children',
      'classes',
      'container',
      'disableScrollLock',
      'elevation',
      'marginThreshold',
      'onClose',
      'PaperProps',
      'slotProps',
      'slots',
      'sx',
      'transformOrigin',
      'TransitionComponent',
      'transitionDuration',
      'TransitionProps'
    ],
    jsx: [
      '<div>',
      "  <Button aria-describedby={id} variant='contained' onClick={handleClick}>",
      '    Open Popover',
      '  </Button>',
      '  <Popover >',
      '    <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>',
      '  </Popover>',
      '</div>'
    ],
    componentData: {
      type: 'div',
      props: { sx: { m: 1 } },
      children: [
        {
          type: 'Button',
          props: {
            'aria-describedby': '{id}',
            role: 'popoverTrigger', // added to differentiate from other buttons
            variant: 'contained',
            onClick: 'handleClick'
          },
          children: 'Open Popover'
        },
        {
          type: 'Popover',
          props: {
            id: '{id}',
            open: '{open}',
            anchorEl: '{anchorEl}',
            onClose: 'handleClose',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left'
            }
          },
          children: [
            {
              type: 'Typography',
              props: {
                sx: { p: 2 }
              },
              children: 'The content of the Popover.'
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 76,
    tag: 'popper',
    name: 'Popper',
    style: {},
    placeHolderShort: 'popper',
    placeHolderLong: 'Material UI Popper Component',
    icon: 'ViewArray',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Box from '@mui/material/Box';",
      "import Popper from '@mui/material/Popper';"
    ],
    stateAndEventHandlers: [
      'const [anchorEl, setAnchorEl] = React.useState(null);',
      '\nconst handleClick = (event) => {',
      '  setAnchorEl(anchorEl ? null : event.currentTarget);',
      '};',
      '\nconst open = Boolean(anchorEl);',
      '\nconst id = open ? "simple-popper" : undefined;\n'
    ],
    defaultProps: ['id={id} open={open} anchorEl={anchorEl}'],
    propOptions: [
      'open',
      'anchorEl',
      'children',
      'component',
      'components',
      'componentsProps',
      'container',
      'disablePortal',
      'keepMounted',
      'modifiers',
      'placement',
      'popperOptions',
      'popperRef',
      'slotProps',
      'slots',
      'sx',
      'transition'
    ],
    jsx: [
      '<div>',
      '  <button aria-describedby={id} type="button" onClick={handleClick}>',
      '    Toggle Popper',
      '  </button>',
      '  <Popper >',
      "    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>",
      '      The content of the Popper.',
      '    </Box>',
      '  </Popper>',
      '</div>'
    ],
    componentData: {
      type: 'div',
      props: { sx: { m: 1 } },
      children: [
        {
          type: 'Button',
          props: {
            'aria-describedby': '{id}',
            type: 'button',
            onClick: '{handleClick}',
            role: 'popperTrigger'
          },
          children: 'Toggle Popper'
        },
        {
          type: 'Popper',
          children: [
            {
              type: 'Box',
              props: {
                sx: { border: 1, p: 1, bgcolor: 'background.paper' }
              },
              children: 'The content of the Popper.'
            }
          ]
        }
      ]
    },
    children: []
  },
  {
    id: 79,
    tag: 'transition',
    name: 'Transition',
    style: {},
    placeHolderShort: 'transition',
    placeHolderLong: 'Material UI Transition Component',
    icon: 'Transform',
    framework: 'reactClassic',
    nestable: false,
    imports: [
      "import Collapse from '@mui/material/Collapse';",
      "import FormControlLabel from '@mui/material/FormControlLabel';",
      "import Box from '@mui/material/Box';",
      "import Switch from '@mui/material/Switch';",
      "import Paper from '@mui/material/Paper';",
      '\nconst icon = (',
      '  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>',
      '   <svg>',
      '      <Box',
      '        component="polygon"',
      '        points="0,100 50,00, 100,100"',
      '        sx={{',
      '          fill: (theme) => theme.palette.common.white,',
      '          stroke: (theme) => theme.palette.divider,',
      '          strokeWidth: 1,',
      '        }}',
      '      />',
      '    </svg>',
      '  </Paper>',
      ');'
    ],
    stateAndEventHandlers: [
      'const [checked, setChecked] = React.useState(false);',
      '\nconst handleChange = () => {',
      '  setChecked((prev) => !prev);',
      '};\n'
    ],
    defaultProps: [],
    propOptions: [
      'addEndListener',
      'children',
      'classes',
      'collapsedSize',
      'component',
      'easing',
      'in',
      'orientation',
      'sx',
      'timeout'
    ],
    jsx: [
      '<Box sx={{ height: 300 }}>',
      '  <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show" />',
      '  <Box sx={{',
      '      "& > :not(style)": {',
      '        display: "flex",',
      '        justifyContent: "space-around",',
      '        height: 120,',
      '        width: 250,',
      '      },',
      '    }}>',
      '    <div>',
      '      <Collapse in={checked}>{icon}</Collapse>',
      '      <Collapse in={checked} collapsedSize={40}>',
      '        {icon}',
      '      </Collapse>',
      '    </div>',
      '    <div>',
      '      <Box sx={{ width: "50%" }}>',
      '        <Collapse orientation="horizontal" in={checked}>',
      '          {icon}',
      '        </Collapse>',
      '      </Box>',
      '      <Box sx={{ width: "50%" }}>',
      '        <Collapse orientation="horizontal" in={checked} collapsedSize={40}>',
      '          {icon}',
      '        </Collapse>',
      '      </Box>',
      '    </div>',
      '  </Box>',
      '</Box>'
    ],
    componentData: {
      type: 'Box',
      props: {
        sx: { height: 300 }
      },
      children: [
        {
          type: 'FormControlLabel',
          props: {
            control: {
              type: 'Switch',
              props: {},
              children: []
            },
            label: 'Show',
            role: 'transition'
          }
        },
        {
          type: 'Box',
          props: {
            sx: {
              '& > :not(style)': {
                display: 'flex',
                justifyContent: 'space-around',
                height: 120,
                width: 250
              }
            },
            role: 'collapseBox'
          },
          children: [
            {
              type: 'div',
              children: [
                {
                  type: 'Collapse',
                  props: {
                    in: '{checked}',
                    role: 'collapse'
                  },
                  children: 'icon'
                },
                {
                  type: 'Collapse',
                  props: {
                    in: '{checked}',
                    collapsedSize: 40,
                    role: 'collapse'
                  },
                  children: 'icon'
                }
              ]
            },
            {
              type: 'div',
              children: [
                {
                  type: 'Box',
                  props: { sx: { width: '50%' } },
                  children: {
                    type: 'Collapse',
                    props: {
                      orientation: 'horizontal',
                      in: '{checked}',
                      role: 'collapse'
                    },
                    children: 'icon'
                  }
                },
                {
                  type: 'Box',
                  props: { sx: { width: '50%' } },
                  children: {
                    type: 'Collapse',
                    props: {
                      orientation: 'horizontal',
                      in: '{checked}',
                      collapsedSize: 40,
                      role: 'collapse'
                    },
                    children: 'icon'
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    children: []
  }
];

export default MUITypes;
