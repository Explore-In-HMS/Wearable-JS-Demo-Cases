import router from '@system.router';

export default {

    startAppManagement() {
        router.replace({
            uri: 'pages/applicationmanagement/applicationmanagement'
        });
    },
    startDeviceInfo() {
        router.push({
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
        router.push({
            uri: 'pages/brightness/brightness'
        });
    },
    startVibration() {
        router.push({
            uri: 'pages/vibration/vibration'
        });
    },
    startNetworkState() {
        router.push({
            uri: 'pages/networkState/networkState'
        });
    },
    startNotificationMessage() {
        router.push({
            uri: 'pages/notification/notification'
        });
    },
    startGloabalization(){
     router.push({
            uri: 'pages/globalization/globalization'
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
