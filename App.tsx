import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// تایپ برای ماژول نیتیو V2Ray
interface V2RayModule {
  startV2Ray(config: string, callback: (result: string) => void): void;
  stopV2Ray(callback: (result: string) => void): void;
}

const { V2RayModule } = NativeModules as { V2RayModule: V2RayModule };

const App: React.FC = () => {
  const [config, setConfig] = useState<string>('');
  const [status, setStatus] = useState<string>('اتصال برقرار نیست');

  const saveConfig = async (): Promise<void> => {
    try {
      await AsyncStorage.setItem('v2rayConfig', config);
    } catch (error) {
      console.error('خطا در ذخیره کانفیگ:', error);
    }
  };

  const loadConfig = async (): Promise<void> => {
    try {
      const savedConfig = await AsyncStorage.getItem('v2rayConfig');
      if (savedConfig) setConfig(savedConfig);
    } catch (error) {
      console.error('خطا در بارگذاری کانفیگ:', error);
    }
  };

  const startV2Ray = (): void => {
    V2RayModule.startV2Ray(config, (result: string) => {
      setStatus(result);
      saveConfig();
    });
  };

  const stopV2Ray = (): void => {
    V2RayModule.stopV2Ray((result: string) => {
      setStatus(result);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>کلاینت V2Ray واقعی</Text>
      <TextInput
        style={styles.input}
        placeholder="کانفیگ VMess رو وارد کن (JSON)"
        value={config}
        onChangeText={setConfig}
        multiline
      />
      <Button title="شروع V2Ray" onPress={startV2Ray} />
      <Button title="توقف V2Ray" onPress={stopV2Ray} />
      <Button title="بارگذاری کانفیگ" onPress={loadConfig} />
      <Text style={styles.status}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    height: 100,
  },
  status: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;