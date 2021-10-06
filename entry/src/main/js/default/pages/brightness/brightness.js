import router from '@system.router';
import brightness from '@system.brightness';

export default {
    data: {
        brightnessValue: '--',
        mode : '--',
        keepScreenValue : '--'
    },
    onInit() {
        this.getBrightness()
        this.getAdjustmentMode()
    },
    getBrightness() {
        var _this = this
        brightness.getValue({
            success: function (data) {
                _this.brightnessValue = data.value
                console.log('success get brightness value:' + data.value);
            },
            fail: function (data, code) {
                console.log('get brightness fail, code: ' + code + ', data: ' + data);
            },
        });
    },
    setKeepScreen(value){
        var _this = this
        brightness.setKeepScreenOn({
            keepScreenOn: value,
            success: function () {
                _this.keepScreenValue = value ? "On" : "Off"
                console.log('handling set keep screen on success.')
            },
            fail: function (data, code) {
                console.log('handling set keep screen on fail, code:' + code + ', data: ' + data);
            },
        });
    },
    getAdjustmentMode(){
        var _this = this;
        brightness.getMode({
            success: function(data){
                _this.mode = data.mode == 1 ? "On" : "Off";
                console.log('success get mode:' + data.mode);
            },
            fail: function(data, code){
                console.log('handling get mode fail, code:' + code + ', data: ' + data);
            },
        });
    },
    setAdjustmentMode(mode){
        var _this = this;
        brightness.setMode({
            mode: mode,
            success: function(){
                _this.mode = mode == 1 ? "On" : "Off";
                console.log('handling set mode success.');
            },
            fail: function(data, code){
                console.log('handling set mode fail, code:' + code + ', data: ' + data);
            },
        });
    },
    buttonClickSetBrightness(value) {
        var _this = this
        brightness.setValue({
            value: value,
            success: function(){
                _this.brightnessValue = value
                console.log('handling set brightness success.');
            },
            fail: function(data, code){
                console.log('handling set brightness value fail, code:' + code + ', data: ' + data);
            },
        });
    },
    touchMove(e) { // Handle the swipe event.

        if (e.direction == "right") // Swipe right to exit.
        {
            router.replace({
                uri: 'pages/systemcapabilities/systemcapabilities'
            })
        }
    }
}
