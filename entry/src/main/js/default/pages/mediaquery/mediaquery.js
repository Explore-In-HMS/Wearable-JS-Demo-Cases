import mediaquery from '@system.mediaquery';
import router from '@system.router';

export default {
    data: {
        matched: "--"
    },
    onInit() {
        var mMediaQueryList = mediaquery.matchMedia('(max-width: 460)');
        var _this = this;
        function maxWidthMatch(e) {
            if (e.matches) {
                _this.matched = "yes";
                console.log('Media query is matched successfully.');
            } else {
                _this.matched = "no"
                console.log('Media query is not matched.');
            }
        }

        mMediaQueryList.addListener(maxWidthMatch);
    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/systemcapabilities/systemcapabilities'
            })
        }
    },
}
