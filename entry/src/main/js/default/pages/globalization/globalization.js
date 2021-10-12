import {dateFormat,numberFormat} from '../../common/constants.js';
export default {
    data: {
        date: '--',
        number : '--'
    },
    onInit(){
        // Tuesday, September 22, 2020 05:14:13 PM
        this.date = dateFormat.format(new Date());
        //12,345.6789
        this.number = numberFormat.format((12345.6789));

    }


}
