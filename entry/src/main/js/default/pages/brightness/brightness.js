import router from '@system.router';
import prompt from '@system.prompt';
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
    },
    setBrightness(value){
        brightness.setValue(value)
    },
    onTextChange(e){
        prompt.showToast({
            message: "value: " + e.value,
            duration: 3000,
        });
        this.setBrightness(e.value)
    },
    buttonClick(e){
        this.$element("input").showError({
            error: 'error text'
        });
        if (this.packageNameText != null) {
            this.checkIfAppInstalled(this.packageNameText)
        }
    },
    touchMove(e) {  // Handle the swipe event.

        if(e.direction == "right")  // Swipe right to exit.
        {
            router.replace({
                uri: 'pages/systemcapabilities/systemcapabilities'
            })
        }
    }
}
