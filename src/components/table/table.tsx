import React, { useEffect } from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  Pagination,
  Table as TableMui,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { getTableData } from '../../store/api/table';
import {
  setLoading,
  setPaginationCount,
  setTableData,
} from '../../store/reducers/tableData';
import { RootState } from '../../store/store';
import EmptyTable from './empty-table';
import TableBody from './table-body';
import TableHead from './table-head';

const useStyles = makeStyles({
    paggination: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
    },
});


function Table(): React.ReactElement {
    const classes = useStyles();
    const dispatch = useDispatch();

    const pagination = useSelector((state: RootState) => state.tableData.pagination)
    const tableData = useSelector((state: RootState) => state.tableData.data)
    const isLoading = useSelector((state: RootState) => state.tableData.isLoading)

    useEffect(() => {
        getTableData()
            .then((resp) => {
                dispatch(setTableData(resp))
            })
            .then(() => {
                dispatch(setLoading(false));
            });
    }, []);


    return (
        <>
            <TableMui>
                <TableHead />
                <TableBody />
            </TableMui>
            {!isLoading && !tableData.length && <EmptyTable />}
            {!!pagination.total && <Pagination
                className={classes.paggination}
                count={pagination.total}
                page={pagination.count}
                boundaryCount={2}
                onChange={(_, val) => dispatch(setPaginationCount(Number(val)))}
            />}
        </>
    );
}

export default Table;