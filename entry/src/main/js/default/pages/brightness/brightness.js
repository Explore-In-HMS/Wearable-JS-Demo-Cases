import router from '@system.router';
import brightness from '@system.brightness';

export default {
    data: {
        brightnessValue: '--'
    },
    onInit() {
        this.getBrightness()
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
    buttonClickTwenty() {
        var _this = this
        brightness.setValue({
            value: 20,
            success: function(){
                _this.brightnessValue = 20
                console.log('handling set brightness success.');
            },
            fail: function(data, code){
                console.log('handling set brightness value fail, code:' + code + ', data: ' + data);
            },
        });
    },
    buttonClickFifty() {
        var _this = this
        brightness.setValue({
            value: 50,
            success: function(){
                _this.brightnessValue = 50
                console.log('handling set brightness success.');
            },
            fail: function(data, code){
                console.log('handling set brightness value fail, code:' + code + ', data: ' + data);
            },
        });
    },
    buttonClickEighty(e) {
        var _this = this
        brightness.setValue({
            value: 80,
            success: function(){
                _this.brightnessValue = 80
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
