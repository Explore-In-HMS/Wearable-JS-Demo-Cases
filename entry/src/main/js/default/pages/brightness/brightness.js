import brightness from '@system.brightness';
export default {
    data: {
        brightnessValue: '--'
    },
    onInit(){
        this.getBrightness()
    },
    getBrightness(){
        var _this = this
        brightness.getValue({
            success: function(data){
                _this.brightnessValue = data.value
                console.log('success get brightness value:' + data.value);
            },
            fail: function(data, code) {
                console.log('get brightness fail, code: ' + code + ', data: ' + data);
            },
        });
    }
}
