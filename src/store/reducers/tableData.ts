import { createSlice } from '@reduxjs/toolkit';

import { tableDataType } from '../../store/types';

interface Action<P> {
    payload: P;
}

const tableDataSlice = createSlice({
    name: 'tableData',
    initialState: {
        isLoading: true,
        data: [],
        allData: [],
        filterData: [],
        pagination: {
            total: 0,
            count: 1,
        }
    },
    reducers: {
        /**
         * Функция которая записывает в store данные для таблицы.
         * @param state 
         * @param action - данные типа tableDataType[]
         * @returns 
         */
        setTableData(state, action: Action<tableDataType[]>) {
            return {
                ...state,
                allData: action.payload,
                filterData: action.payload,
                data: action.payload.slice(0, 10),
                pagination: {
                    ...state.pagination,
                    total: Math.ceil(action.payload.length / 10),
                }
            }
        },
        /**
         * Функция предназначена для фильтрации массива данных для таблицы.
         * @param state 
         * @param action - данные для фильтрации
         * @returns 
         */
        setFilterData(state, action: Action<string>) {
            const filterData = state.allData.filter((d) =>
                String(d.id).includes(action.payload)
                || String(d.order_type.name).includes(action.payload)
                || String(d.account.name).includes(action.payload)
                || String(d.terminal.name).includes(action.payload)
                || String(d.created_user.surname).includes(action.payload));
            const data = filterData.slice(0, 10);
            return {
                ...state,
                data,
                filterData,
                pagination: {
                    ...state.pagination,
                    total: Math.ceil(filterData.length / 10),
                }
            }
        },
        /**
         * Функция которая задаёт активную страницу пагинации.
         * @param state 
         * @param action - номер страницы
         * @returns 
         */
        setPaginationCount(state, action: Action<number>) {
            const startIndex = (action.payload - 1) * 10;
            return {
                ...state,
                data: state.filterData.slice(startIndex, startIndex + 10),
                pagination: {
                    ...state.pagination,
                    count: action.payload,
                }
            }
        },
        /**
         * Функция для записи состояния загрузки
         * @param state 
         * @param action - данные типа boolean
         * @returns 
         */
        setLoading(state, action: Action<boolean>) {
            return {
                ...state,
                isLoading: action.payload
            }
        },
    }
})

export const {
    setTableData,
    setPaginationCount,
    setLoading,
    setFilterData,
} = tableDataSlice.actions;
export default tableDataSlice.reducer