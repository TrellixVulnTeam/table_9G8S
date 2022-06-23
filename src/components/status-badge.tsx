import React from 'react';

import { makeStyles } from '@mui/styles';

import { statusType } from '../store/types';

const useStyles = makeStyles({
    status: {
        display: 'inline-block',
        textAlign: 'center',
        color: '#ffffff',
        background: '#b6b0b0',
        padding: '4px 10px',
        borderRadius: '3px',
        minWidth: 110,
    },
    new: {
        background: '#981a1a',
    },
    assignedTo: {
        background: '#c76e1b',
    },
    completed: {
        background: '#11971c',
    },
    declined: {
        background: '#000000',
    },
    started: {
        background: '#243ece',
    }
})


function StatusBadge({ status }: { status: statusType }): React.ReactElement {
    const classes = useStyles();

    switch (status) {
        case 'new':
            return <span className={`${classes.status} ${classes.new}`}>Новый</span>
        case 'assigned_to':
            return <span className={`${classes.status} ${classes.assignedTo}`}>Назначен</span>
        case 'completed':
            return <span className={`${classes.status} ${classes.completed}`}>Выполнен</span>
        case 'declined':
            return <span className={`${classes.status} ${classes.declined}`}>Отменён</span>
        case 'started':
            return <span className={`${classes.status} ${classes.started}`}>Выполняется</span>
        default:
            return <span className={classes.status}>{status}</span>
    }
}

export default StatusBadge;