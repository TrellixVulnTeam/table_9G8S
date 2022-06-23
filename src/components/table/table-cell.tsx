import React from 'react';

import {
  TableCell as TableCellMui,
  Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { statusType } from '../../store/types';
import StatusBadge from '../status-badge';

const useStyles = makeStyles((theme: Theme) => ({
    table_cell: {
        border: '1px solid #E3E6EC',
        maxWidth: '250px',
        cursor: 'pointer',

        [theme.breakpoints.down('md')]: {
            maxWidth: '150px',
        },
    },

    first_text: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },

    secondary_text: {
        color: '#908f8f',
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
}));

interface TableCellProps {
    text?: string | number;
    secondaryText?: string;
    status?: statusType;
}

function TableCell({ text, secondaryText, status }: TableCellProps): React.ReactElement {
    const classes = useStyles();


    return <TableCellMui className={classes.table_cell}>
        {text && <p className={classes.first_text}>{text}</p>}
        {secondaryText && <p className={classes.secondary_text}>{secondaryText}</p>}
        {status && <StatusBadge status={status} />}
    </TableCellMui>
}

export default TableCell