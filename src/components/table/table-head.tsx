import React from 'react';

import {
  TableCell,
  TableHead as TableHeadMui,
  TableRow,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    head: {
        backgroundColor: '#474955',
    },

    row: {
        borderStyle: 'none',
        background: '#474955',

        '& .MuiTableCell-head': {
            color: 'white',
            background: '#474955',
        },
    },

    column: {
        maxWidth: '250px',
    },

});

function TableHead(): React.ReactElement {
    const classes = useStyles();

    return (
        <TableHeadMui className={classes.head}>
            <TableRow className={classes.row}>
                <TableCell className={classes.column}>
                    Номер / Дата
                </TableCell>
                <TableCell className={classes.column}>
                    Тип задания / Автор
                </TableCell>
                <TableCell className={classes.column}>
                    Аккаунт / Терминал
                </TableCell>
                <TableCell className={classes.column}>
                    Статус
                </TableCell>
            </TableRow>
        </TableHeadMui >
    );
}

export default TableHead;