import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import DeviceInfo, { getManufacturerSync } from 'react-native-device-info';

const DeviceInfoTwo = (props) => {
    let deviceJSON = {};
    deviceJSON.manufacturer = getManufacturerSync();
    deviceJSON.buildId = DeviceInfo.getBuildIdSync();
    deviceJSON.isCameraPresent = DeviceInfo.isCameraPresentSync();
    deviceJSON.usedMemory = DeviceInfo.getUsedMemorySync();
    deviceJSON.fontScale = DeviceInfo.getFontScaleSync();
    deviceJSON.hasNotch = DeviceInfo.hasNotch();
    deviceJSON.firstInstallTime = DeviceInfo.getFirstInstallTimeSync();
    deviceJSON.lastUpdateTime = DeviceInfo.getLastUpdateTimeSync();
    deviceJSON.phoneNumber = DeviceInfo.getPhoneNumberSync();
    deviceJSON.carrier = DeviceInfo.getCarrierSync();
    deviceJSON.totalMemory = DeviceInfo.getTotalMemorySync();
    deviceJSON.totalDiskCapacity = DeviceInfo.getTotalDiskCapacitySync();
    deviceJSON.freeDiskStorage = DeviceInfo.getFreeDiskStorageSync();
    deviceJSON.batteryLevel = DeviceInfo.getBatteryLevelSync();
    deviceJSON.isLandscape = DeviceInfo.isLandscapeSync();
    deviceJSON.isAirplaneMode = DeviceInfo.isAirplaneModeSync();
    deviceJSON.isBatteryCharging = DeviceInfo.isBatteryChargingSync();
    return (
        <>
            <Text style={styles.titleStyle}>{props.title}</Text>
            <ScrollView>
                <Text style={styles.instructions}>{JSON.stringify(deviceJSON, null, '  ')}</Text>
            </ScrollView>
        </>
    );
};

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

export default DeviceInfoTwo;