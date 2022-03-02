import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { useBatteryLevel,
    useBatteryLevelIsLow,
    usePowerState,
    useFirstInstallTime,
    useDeviceName,
    useIsEmulator,
} from 'react-native-device-info';

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
    deviceJSON.bundleId = DeviceInfo.getBundleId();
    deviceJSON.systemName = DeviceInfo.getSystemName();
    deviceJSON.systemVersion = DeviceInfo.getSystemVersion();
    deviceJSON.version = DeviceInfo.getVersion();
    deviceJSON.readableVersion = DeviceInfo.getReadableVersion();
    deviceJSON.buildNumber = DeviceInfo.getBuildNumber();
    deviceJSON.isTablet = DeviceInfo.isTablet();
    deviceJSON.appName = DeviceInfo.getApplicationName();
    deviceJSON.brand = DeviceInfo.getBrand();
    deviceJSON.model = DeviceInfo.getModel();
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
    );
};
export default DeviceInfoOne;

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