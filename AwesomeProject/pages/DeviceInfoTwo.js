import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import DeviceInfo, { getManufacturerSync } from 'react-native-device-info';

const DeviceInfoTwo = (props) => {
    let deviceJSON = {};
    deviceJSON.manufacturer = getManufacturerSync();
    deviceJSON.buildId = DeviceInfo.getBuildIdSync();
    deviceJSON.isCameraPresent = DeviceInfo.isCameraPresentSync();
    deviceJSON.deviceName = DeviceInfo.getDeviceNameSync();
    deviceJSON.usedMemory = DeviceInfo.getUsedMemorySync();
    deviceJSON.instanceId = DeviceInfo.getInstanceIdSync();
    deviceJSON.installReferrer = DeviceInfo.getInstallReferrerSync();
    deviceJSON.installerPackageName =
        DeviceInfo.getInstallerPackageNameSync();
    deviceJSON.isEmulator = DeviceInfo.isEmulatorSync();
    deviceJSON.fontScale = DeviceInfo.getFontScaleSync();
    deviceJSON.hasNotch = DeviceInfo.hasNotch();
    deviceJSON.firstInstallTime =
        DeviceInfo.getFirstInstallTimeSync();
    deviceJSON.lastUpdateTime = DeviceInfo.getLastUpdateTimeSync();
    deviceJSON.serialNumber = DeviceInfo.getSerialNumberSync();
    deviceJSON.androidId = DeviceInfo.getAndroidIdSync();
    deviceJSON.IpAddress = DeviceInfo.getIpAddressSync();
    deviceJSON.phoneNumber = DeviceInfo.getPhoneNumberSync();
    deviceJSON.ApiLevel = DeviceInfo.getApiLevelSync();
    deviceJSON.carrier = DeviceInfo.getCarrierSync();
    deviceJSON.totalMemory = DeviceInfo.getTotalMemorySync();
    deviceJSON.maxMemory = DeviceInfo.getMaxMemorySync();
    deviceJSON.totalDiskCapacity =
        DeviceInfo.getTotalDiskCapacitySync();
    deviceJSON.totalDiskCapacityOld =
        DeviceInfo.getTotalDiskCapacityOldSync();
    deviceJSON.freeDiskStorage = DeviceInfo.getFreeDiskStorageSync();
    deviceJSON.freeDiskStorageOld =
        DeviceInfo.getFreeDiskStorageOldSync();
    deviceJSON.batteryLevel = DeviceInfo.getBatteryLevelSync();
    deviceJSON.isLandscape = DeviceInfo.isLandscapeSync();
    deviceJSON.isAirplaneMode = DeviceInfo.isAirplaneModeSync();
    deviceJSON.isBatteryCharging = DeviceInfo.isBatteryChargingSync();
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
export default DeviceInfoTwo;

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