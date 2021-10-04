import router from '@system.router';
export default {

    startAppManagement() {
        router.replace({
            uri: 'pages/applicationmanagement/applicationmanagement'
        });
    },
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
        router.push({
            uri: 'pages/geographiclocation/geographiclocation'
        });
    },
    startBattery() {
        router.push({
            uri: 'pages/battery/battery'
        });
    },
    startBrightness() {
        router.replace({
            uri: 'pages/brightness/brightness'
        });
    },
    startVibration() {
        router.push({
            uri: 'pages/vibration/vibration'
        });
    },
    touchMove(e) { // Handle the swipe event.

        if (e.direction == "right") // Swipe right to exit.
        {
            router.replace({
                uri: 'pages/index/index'
            })
        }
    }
}
