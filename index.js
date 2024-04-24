const noble = require('noble');

// Initialize Bluetooth scanning
function initializeBluetooth(callback) {
    noble.on('stateChange', (state) => {
        if (state === 'poweredOn') {
            callback(null);
        } else {
            callback(new Error('Bluetooth not powered on'));
        }
    });
}

// Start scanning for Bluetooth devices
function startScanning(callback) {
    noble.startScanning([], true, (error) => {
        if (error) {
            callback(error);
        } else {
            callback(null);
        }
    });
}

// Stop scanning for Bluetooth devices
function stopScanning(callback) {
    noble.stopScanning(() => {
        callback(null);
    });
}

module.exports = {
    initializeBluetooth,
    startScanning,
    stopScanning
};
