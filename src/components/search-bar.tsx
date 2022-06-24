import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';
import {
  Box,
  InputBase,
  Theme,
} from '@mui/material/index';
import { makeStyles } from '@mui/styles';

import SearchIcon from '../assets/icons/search';
import { setFilterData } from '../store/reducers/tableData';

const SearchText = styled(InputBase)({
    color: 'white',
});

const useStyles = makeStyles((theme: Theme) => ({
    box: {
        width: '70%',
        height: 52,
        padding: '0 26px',
        background: '#5A5C66',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        [theme.breakpoints.down('md')]: {
            height: '30px',
        },
    },
    input: {
        width: "500px",
        '&.MuiInputBase-root': {
            [theme.breakpoints.down('md')]: {
                fontSize: '10px',
            },

            '& + svg': {
                minWidth: 10,
            }
        },
    },
}));


function Search(): React.ReactElement {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>("");


    return <Box className={classes.box}>
        <SearchText
            className={classes.input}
            placeholder='Поиск'
            onChange={(event) => setValue(event.target.value)}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    dispatch(setFilterData(value))
                }
            }}
        />
        <SearchIcon onClick={() => {
            dispatch(setFilterData(value))
        }} />
    </Box>
};

export default Search;
