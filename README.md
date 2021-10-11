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
| **Animation:**<br />Allows creating and playing animations.| ![Screenshots](screenshots/compassanimator.gif) |
| **Timer:**<br /> -**setTimeout** method sets a timer for the system to call a function after the timer goes off.<br /> -**clearTimeout** method cancels the timer created via setTimeout().<br /> -**setInterval** method sets a repeating timer for the system to repeatedly call a function at a fixed interval.<br /> -**clearInterval** method cancels the repeating timer set via setInterval(). | ![Screenshots](screenshots/timer.gif) |
| **Application Configuration:**<br /> -**getLocale** Obtains the current locale of the application, which is the same as the system locale. | ![Screenshots](screenshots/applicationconfiguration.png) |
| **Pop-up Window:**<br /> Allows displaying the toast message box and the dialog message box.| ![Screenshots](screenshots/popupWindow.gif) |

## **System Capabilities**

| **System Capability** | **Screenshots** |
| ------ | ------ |
| **Geographic Location:**<br /> -**getLocation** method obtains the geographic location.<br /> -**getLocationType** method obtains the supported location types.<br /> -**subscribe** method listens to the geographical location. If this API is called multiple times, the last call takes effect.<br /> -**unsubscribe** method cancels listening to the geographical location.<br /> -**getSupportedCoordTypes** method obtains coordinate system types supported by the device. | ![Screenshots](screenshots/geoLocation.gif) |
| **Vibration:**<br /> Allows the device to create a vibration effect. The value long indicates long vibration, and short indicates short vibration. | ![Screenshots](screenshots/vibration.png) |
| **Battery Level:**<br /> Obtains the current charging state and battery level of the device. **Charging** indicates whether the battery is being charged. **Level** indicates the current battery level, which ranges from 0.00 to 1.00.| ![Screenshots](screenshots/battery.png) |
| **Application Management:**<br /> Check if the app installed on the device using  **hasInstalled** API. | ![Screenshots](screenshots/applicationmanagement.png) |
| **Device Information:**<br /> Shows detailed information of the device. | ![Screenshots](screenshots/deviceinfo.png) |
| **Screen Brightness:** <br> **- setValue:** Changes the screen brightness with given value.<br> **- getValue:** Gets the current brightness of screen as an integer value.<br> **- setMode:** Sets the screen brightness adjustment mode. (The value can be 0 or 1. <br> **0:** The screen brightness is manually adjusted.<br> **1:** The screen brightness is automatically adjusted.)<br> **- keepScreenOn:** Sets whether to always keep the screen on.| ![Screenshots](screenshots/screenbrightness.gif) |
| **Network State:**<br /> -**getType** method obtains the network type.<br /> -**subscribe** method listens to the network connection state. If this method is called multiple times, the last call takes effect.<br /> -**unsubscribe** method cancels listening to the network connection state.<br /> | ![Screenshots](screenshots/networkState.png) |