import app from '@system.app';
import router from '@system.router'

export default {
    startDeviceInfo() {
        router.replace({
            uri: 'pages/deviceinfo/deviceinfo'
        });
    },
    startSensors() {
        router.push({
            uri: 'pages/sensors/sensors'
        });
    },
    startGeographicLocation() {
        router.replace({
            uri: 'pages/geographiclocation/geographiclocation'
        });
    },
    startBattery() {
        router.replace({
            uri: 'pages/battery/battery'
        });
    },
    startBrightness() {
        router.replace({
            uri: 'pages/brightness/brightness'
        });
    },
    startVibration() {
        router.replace({
            uri: 'pages/vibration/vibration'
        });
    },
    touchMove(e){  // Handle the swipe event.
        if(e.direction == "right") { // Swipe right to exit.
            this.appExit();
        }
    },
    appExit(){  // Exit the application.
        app.terminate();
    }
}

