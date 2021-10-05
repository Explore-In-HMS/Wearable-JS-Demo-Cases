# **Wearable JS Demo App**

This application shows all the features provided by HarmonyOS for wearable devices in one application.
## **Sensors**

| **Sensors** | **Screenshots** |
| ------ | ------ |
| **Heart Rate:** Measures the heart rate of a user. Before measuring the user's heart rate, we check whether the wearable's wearing state with the **Body State sensor**, and if it is worn, we measure the heart rate. | ![Screenshots](screenshots/heartRate.png) |
| **Light:** Measures the ambient light intensity of the device, in the unit of lux.| ![Screenshots](screenshots/light.png) |
| **Compass:** Listens for changes of compass sensor data. If this API is called multiple times for the same application, the last call takes effect. | ![Screenshots](screenshots/compass.png) |
| **Accelerometer:** Listens for changes of acceleration sensor data. If this API is called multiple times for the same application, the last call takes effect.| ![Screenshots](screenshots/accelerometer.png) |
| **Barometer:** Listens for changes of barometer sensor data. If this API is called multiple times for the same application, the last call takes effect.| ![Screenshots](screenshots/barometer.png) |
| **Step Counter:** Listens for changes of step counter sensor data. If this API is called multiple times for the same application, the last call takes effect.| ![Screenshots](screenshots/step_counter.png) |

## **Basic Features**

| **Basic Feature** | **Screenshots** |
| ------ | ------ |
| **Animation:** Allows creating and playing animations.| ![Screenshots](screenshots/animator.gif) |

## **System Capabilities**

| **System Capability** | **Screenshots** |
| ------ | ------ |
| **Geographic Location:**<br /> -**getLocation** method obtains the geographic location.<br /> -**getLocationType** method obtains the supported location types.<br /> -**subscribe** method listens to the geographical location. If this API is called multiple times, the last call takes effect.<br /> -**unsubscribe** method cancels listening to the geographical location.<br /> -**getSupportedCoordTypes** method obtains coordinate system types supported by the device. | ![Screenshots](screenshots/geoLocation.gif) |
| **Vibration:** Allows the device to create a vibration effect. The value long indicates long vibration, and short indicates short vibration. | ![Screenshots](screenshots/vibration.png) |
| **Battery Level:** Obtains the current charging state and battery level of the device. **Charging** indicates whether the battery is being charged. **Level** indicates the current battery level, which ranges from 0.00 to 1.00.| ![Screenshots](screenshots/battery.png) |
| **Application Management:**<br /> Check if the app installed on the device using  **hasInstalled** API. | ![Screenshots](screenshots/applicationmanagement.png) |
| **Device Information:** Shows detailed information of the device. | ![Screenshots](screenshots/deviceinfo.png) |