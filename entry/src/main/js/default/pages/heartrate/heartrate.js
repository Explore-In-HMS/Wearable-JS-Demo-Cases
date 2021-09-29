// @ts-nocheck
import sensor from '@system.sensor';
import router from '@system.router';

export default {
    data: {
        heartRate: '--',
        bodyStateValue: '--',
    },
    onInit() {
        this.getHeartRate();
        var _this = this;
        sensor.subscribeOnBodyState({
            success: function (ret) {
                console.log('get on-body state value:' + ret.bodyStateValue);
                if (ret.bodyStateValue === true) {
                    _this.getHeartBeatRate();
                }
            },
            fail: function (data, code) {
                console.log('fail to get on body state, code:' + code + ', data: ' + data);
            },
        });
    },
    getHeartRate() {
        var _this = this;
        sensor.subscribeHeartRate({
            success: function (ret) {
                console.log('get heartRate value:' + ret.heartRate);
                _this.heartRate = "HeartRate: " + ret.heartRate + " bpm";
            },
            fail: function (data, code) {
                console.log('subscribe heart rate fail, code: ' + code + ', data: ' + data);
                _this.heartRate = "HeartRate failed";
            },
        });
    },
    touchMove(e) {
        if (e.direction == "right") {
            router.replace({
                uri: 'pages/sensors/sensors'
            })
        }
    },
    onDestroy() {
        this.unsubscribeHeartRate();
        this.unsubscribeOnBodyState();
    }
}
