import router from '@system.router'
import battery from '@system.battery';

export default {
    data: {
        charging: '--',
        level: '--',
    },
    onInit(){
        var _this = this;
        battery.getStatus({
            success: function(data) {
                console.log('success get battery level:' + data.level);
                _this.charging = data.charging;
                _this.level = data.level;
            },
            fail: function(data, code) {
                console.log('fail to get battery level code:' + code + ', data: ' + data);
            },
        });
    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/systemcapabilities/systemcapabilities'
            });
        }
    },
}
