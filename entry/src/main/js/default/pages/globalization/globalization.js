import router from '@system.router';
import {dateFormat, numberFormat} from '../../common/constants.js';

export default {
    data: {
        date: '--',
        number: '--'
    },
    onInit() {
        // Tuesday, September 22, 2020 05:14:13 PM -> en-US
        this.date = dateFormat.format(new Date());
        // 12.345,6789 -> tr-TR
        this.number = numberFormat.format((12345.6789));

    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/systemcapabilities/systemcapabilities'
            })
        }
    }
}
