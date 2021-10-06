import device from '@system.device';
import router from '@system.router';

export default {

    data: {
        brand: '--',
        product: '--',
        manufacturer: '--',
        model:'--',
        language: '--',
        region: '--',
        windowWidth: '--',
        windowHeight:'--',
        screenDensity:'--',
        screenShape:'--',
    },

    onInit() {
        let _this = this;
        device.getInfo({
            success: function(data) {
                console.log('success get device info ');
                _this.brand = data.brand;
                _this.product = data.product;
                _this.manufacturer = data.manufacturer;
                _this.model = data.model;
                _this.language = data.language;
                _this.region = data.region;
                _this.windowWidth = data.windowWidth;
                _this.windowHeight = data.windowHeight;
                _this.screenDensity = data.screenDensity;
                _this.screenShape = data.screenShape;
            },
            fail: function(data, code) {
                console.log('fail get device info code:'+ code + ', data: ' + data);
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
