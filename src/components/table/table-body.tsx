import React from 'react';

import moment from 'moment';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import {
  CircularProgress,
  TableBody as TableBodyMui,
  TableRow,
} from '@mui/material';

import { RootState } from '../../store/store';
import { tableDataType } from '../../store/types';
import TableCell from '../table/table-cell';

function TableBody(): React.ReactElement {
    const navigate = useNavigate()
    const tableData = useSelector((state: RootState) => state.tableData.data)
    const isLoading = useSelector((state: RootState) => state.tableData.isLoading)

    return (
        <TableBodyMui>
            {isLoading && <CircularProgress />}
            {!isLoading && !!tableData.length &&
                tableData.map(({
                    id,
                    created_date,
                    order_type,
                    account,
                    created_user,
                    terminal,
                    status,
                }: tableDataType) => <TableRow key={id} onClick={() => { navigate(`/${id}`) }}>
                        <TableCell
                            text={id}
                            secondaryText={moment(created_date).format('DD.MM.yyyy HH:mm')}
                        />
                        <TableCell
                            text={order_type?.name}
                            secondaryText={`${created_user?.surname} ${created_user?.name[0]}. ${created_user?.patronymic[0]}`}
                        />
                        <TableCell
                            text={account?.name}
                            secondaryText={terminal?.name}
                        />
                        <TableCell status={status} />
                    </TableRow>)}
        </TableBodyMui>
    );
}

export default TableBody