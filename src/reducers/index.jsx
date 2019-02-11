import { combineReducers } from 'redux';

import { toast } from './toast';
import { list } from './list';
import { search } from './search';

export default combineReducers({
    dataToast: toast,
    dataList: list,
    dataSearch: search
});