const bluetooth = require('./index');

// Initialize Bluetooth
bluetooth.initializeBluetooth((error) => {
    if (error) {
        console.error('Error initializing Bluetooth:', error);
        return;
    }

    console.log('Bluetooth initialized successfully');

    // Start scanning for devices
    bluetooth.startScanning((scanError) => {
        if (scanError) {
            console.error('Error starting Bluetooth scan:', scanError);
            return;
        }

        console.log('Scanning for Bluetooth devices...');

        // Stop scanning after 10 seconds
        setTimeout(() => {
            bluetooth.stopScanning((stopError) => {
                if (stopError) {
                    console.error('Error stopping Bluetooth scan:', stopError);
                } else {
                    console.log('Bluetooth scan stopped');
                }
            });
        }, 10000); // 10 seconds
    });
});
