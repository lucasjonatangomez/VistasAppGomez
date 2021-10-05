import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState }  from 'react';

import { BarCodeScanner } from 'expo-barcode-scanner';

const OrdersScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.containerBarCode]}
      />
     
        <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused}>
          <View
            style={{
              borderBottomColor: 'rgba(200, 0, 0, .6)',
              borderRightWidth: 1,
              flex: 1
            }}
          />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
          <View
            style={{
              borderBottomColor: 'rgba(200, 0, 0, .6)',
              borderLeftWidth: 1,
              flex: 1
            }}
          />
          </View>
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />

    </View>
  )
};

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  containerBarCode: {

    height: "108%",
    width: "115%"
  },
  layerTop: {
    flex: 0,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 3.5,
    backgroundColor: opacity
  },
  focused: {
    flex: 10,
    flexDirection: 'row'
  },
  layerRight: {
    flex: 3.5,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 0,
    backgroundColor: opacity
  },
});

export default OrdersScreen;