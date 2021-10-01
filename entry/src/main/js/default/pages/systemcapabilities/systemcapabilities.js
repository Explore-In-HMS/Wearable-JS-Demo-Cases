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
        router.push({
            uri: 'pages/brightness/brightness'
        });
    },
    startVibration() {
        router.replace({
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
