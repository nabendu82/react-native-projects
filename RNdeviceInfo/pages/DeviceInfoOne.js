import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import { useBatteryLevel,
    useBatteryLevelIsLow,
    usePowerState,
    useFirstInstallTime,
    useDeviceName,
    useIsEmulator } from 'react-native-device-info';
import DeviceInfo from 'react-native-device-info';

const DeviceInfoOne = (props) => {
    let deviceJSON = {};
    deviceJSON.batteryLevel = useBatteryLevel();
    deviceJSON.batteryLevelIsLow = useBatteryLevelIsLow();
    deviceJSON.powerState = usePowerState();
    deviceJSON.firstInstallTime = useFirstInstallTime();
    deviceJSON.deviceName = useDeviceName();
    deviceJSON.isEmulator = useIsEmulator();
    deviceJSON.uniqueId = DeviceInfo.getUniqueId();
    deviceJSON.deviceId = DeviceInfo.getDeviceId();
    deviceJSON.systemName = DeviceInfo.getSystemName();
    deviceJSON.systemVersion = DeviceInfo.getSystemVersion();
    deviceJSON.version = DeviceInfo.getVersion();
    deviceJSON.buildNumber = DeviceInfo.getBuildNumber();
    deviceJSON.isTablet = DeviceInfo.isTablet();
    deviceJSON.appName = DeviceInfo.getApplicationName();
    deviceJSON.brand = DeviceInfo.getBrand();
    deviceJSON.deviceType = DeviceInfo.getDeviceType();

    return (
        <>
            <Text style={styles.titleStyle}>{props.title}</Text>
            <ScrollView>
                <Text style={styles.instructions}>
                    {JSON.stringify(deviceJSON, null, '  ')}
                </Text>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'left',
        color: '#333333',
        margin: 5,
    },
});

export default DeviceInfoOne
