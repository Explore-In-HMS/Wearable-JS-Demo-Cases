import router from '@system.router';

export default {
    startHeartRate() {
        router.replace({
            uri: 'pages/heartrate/heartrate'
        });
    },
    startLight() {
        router.replace({
            uri: 'pages/light/light'
        });
    },
    startBarometer() {
        router.replace({
            uri: 'pages/barometer/barometer'
        });
    },
    startCompass() {
        router.replace({
            uri: 'pages/compass/compass'
        });
    },
    startStep() {
        router.replace({
            uri: 'pages/stepcounter/stepcounter'
        });
    },
    startDeviceOrientation() {
        router.replace({
            uri: 'pages/deviceorientation/deviceorientation'
        });
    },
    startAccelerometer() {
        router.replace({
            uri: 'pages/accelerometer/accelerometer'
        });
    },
    startGyroscope() {
        router.replace({
            uri: 'pages/gyroscope/gyroscope'
        });
    }
}
