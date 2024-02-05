import { View, Text, SafeAreaView } from 'react-native';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber/native';
import Model from '../components/Model';

export default function ScanQRPage({}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <Canvas gl={{ physicallyCorrectLights: true }} camera={{ position: [-4, 0, 16], fov: 36 }} onCreated={(state) => { const _gl = state.gl.getContext(); const pixelStorei = _gl.pixelStorei.bind(_gl); _gl.pixelStorei = function(...args) { const [parameter] = args; switch(parameter) { case _gl.UNPACK_FLIP_Y_WEBGL: return pixelStorei(...args); } } }}>
        <Suspense fallback={null}>
        <directionalLight position={[1, 0, 0]} args={['white', 5]} />
        <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
        <directionalLight position={[0, 1, 0]} args={['white', 5]} />
        <directionalLight position={[0, -1, 0]} args={['white', 5]} />
        <directionalLight position={[0, 0, 1]} args={['white', 5]} />
        <directionalLight position={[0, 0, -1]} args={['white', 5]} />
          <Model />
        </Suspense>
      </Canvas>
      </View>
    </SafeAreaView>
  );
}
