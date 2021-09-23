import sensor from '@system.sensor';
import app from '@system.app';

export default {
    data: {
        compass_transform: "rotate(0deg)",
    },
    onInit() {
        var _this = this;
        _this.loadCompass();
    },
    onDestroy() {
        sensor.unsubscribeCompass();
    },
    onBackPressed() {
        sensor.unsubscribeCompass();
    },
    loadCompass() {
        var _this = this;
        sensor.subscribeCompass({
            success: function (ret) {
                //direction value is float
                var direction = ret.direction;
                //to get compass direction, extract from 360
                var compassDirection = (360 - direction);
                //rotate compass image
                _this.compass_transform = "rotate(" + compassDirection + "deg)";
                console.log("compass: compassDirection: " + direction);
            },
            fail: function (data, code) {
                console.error('compass: subscribe compass fail, code: ' + code + ', data: ' + data);
            },
        });
    }
}
