import router from '@system.router';
import pkg from '@system.package';

export default {
    data: {
        installed: "--",
    },
    buttonClick() {
        this.checkIfAppInstalled();
    },
    checkIfAppInstalled() {
        var _this = this;
        pkg.hasInstalled({
            bundleName: "com.myapps.harmonyappjava",
            success: function (data) {
                _this.installed = data ? "Yes" : "No"
                console.log('package has installed: ' + data);
            },
            fail: function (data, code) {
                _this.installed = "Fail"
                console.log('query package fail, code: ' + code + ', data: ' + data);
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
