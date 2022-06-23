import axios from 'axios';

import { tableDataType } from '../types';

const API_URL = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220623T103534Z&X-Amz-Expires=86400&X-Amz-Signature=867eb15e05dbbfcce0fdf6b721e2e10284983246376a657dc44eea4c09369d7f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22&x-id=GetObject';

export const getTableData = (): Promise<tableDataType[]> => {
    return axios.get(API_URL).then((resp) => resp.data);
}