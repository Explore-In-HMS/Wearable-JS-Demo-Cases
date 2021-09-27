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
        router.push({
            uri: 'pages/barometer/barometer'
        });
    },
    startCompass() {
        router.push ({
            uri:'pages/compassanimator/compassanimator'
        })
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
        router.push ({
            uri: 'pages/accelerometer/accelerometer'
        });
    },
    startGyroscope() {
        router.replace({
            uri: 'pages/gyroscope/gyroscope'
        });
    }
}
