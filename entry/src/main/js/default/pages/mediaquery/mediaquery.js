import mediaquery from '@system.mediaquery';
import router from '@system.router';

export default {
    data: {
        matched: "--"
    },
    onInit() {
        var mMediaQueryList = mediaquery.matchMedia('(max-width: 466)');

        function maxWidthMatch(e) {
            var _this = this;
            if (e.matches == '(max-width: 466)') {
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
