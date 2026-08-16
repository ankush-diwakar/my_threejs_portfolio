
import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function HackerRoom(props) {
  const { nodes, materials } = useGLTF('models/gaming/gamingsetup.gltf')

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[122.305, 15.348, -54.246]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={1598.61}>
          <group position={[-0.004, 0.008, 0.008]} rotation={[Math.PI / 2, 0, 0]} scale={0.018}>
            <mesh geometry={nodes.MouseThermaltakeBlack015_Material001_0.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.MouseThermaltakeBlack015_Material002_0.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.MouseThermaltakeBlack015_Material003_0.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.MouseThermaltakeBlack015_Material004_0.geometry} material={materials['Material.004']} />
          </group>
        </group>
        <group position={[-102.115, 15.357, -155.393]} rotation={[-Math.PI / 2, 0, 1.214]} scale={872.783}>
          <group position={[-0.006, 0.018, 0.031]} rotation={[0.02, 0, 0]}>
            <mesh geometry={nodes.main_controler_E_red001_0.geometry} material={materials['E_red.001']} />
            <mesh geometry={nodes.main_controler_Black001_0.geometry} material={materials['Black.001']} />
            <mesh geometry={nodes.main_controler_black_plastik001_0.geometry} material={materials['black_plastik.001']} />
            <mesh geometry={nodes.main_controler_ps_logo001_0.geometry} material={materials['ps_logo.001']} />
          </group>
        </group>
        <group position={[90.263, 120.02, 578.126]} rotation={[-Math.PI / 2, 0.746, 1.564]} scale={845.02}>
          <mesh geometry={nodes.Cube011_outline_body001_0.geometry} material={materials['outline_body.001']} />
          <mesh geometry={nodes.Cube011_outline_body001_0_1.geometry} material={materials['outline_body.001']} />
          <mesh geometry={nodes.Cube011_outline_body001_0_2.geometry} material={materials['outline_body.001']} />
          <mesh geometry={nodes.Cube011_dark_blue_shiny001_0.geometry} material={materials['dark_blue_shiny.001']} />
          <mesh geometry={nodes.Cube011_body001_0.geometry} material={materials['body.001']} />
          <mesh geometry={nodes.Cube011_screen001_0.geometry} material={materials['screen.001']} />
          <mesh geometry={nodes.Cube011_apple_logo001_0.geometry} material={materials['apple_logo.001']} />
          <mesh geometry={nodes.Cube011_apple_logo001_0_1.geometry} material={materials['apple_logo.001']} />
          <mesh geometry={nodes.Cube011_apple_logo001_0_2.geometry} material={materials['apple_logo.001']} />
          <mesh geometry={nodes.Cube011_speaker001_0.geometry} material={materials['speaker.001']} />
        </group>
        <group position={[0, -10.643, 0]} rotation={[Math.PI, 0, 0]} scale={100}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group position={[-61.024, -156.09, -0.556]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-368.949, 25.976, 731.636]}>
              <mesh geometry={nodes.Cube_Material_0_Material005_0.geometry} material={materials['Material.005']} position={[0, -0.8, 0]} scale={[0.841, 0.337, 0.841]} />
            </group>
            <group position={[95.467, -219.01, 34.605]} rotation={[-Math.PI, -0.09, -Math.PI / 2]} scale={91.415}>
              <mesh geometry={nodes.Object_520_Tasten_0_Material074_39001_0.geometry} material={materials['Material.074_39.001']} />
              <mesh geometry={nodes.Object_520_Tasten_0_Material006_0.geometry} material={materials['Material.006']} />
              <mesh geometry={nodes.Object_520_Tasten_0_Material074_32001_0.geometry} material={materials['Material.074_32.001']} />
              <mesh geometry={nodes.Object_520_Tasten_0_Material074_33001_0.geometry} material={materials['Material.074_33.001']} />
              <mesh geometry={nodes.Object_520_Tasten_0_Material074_34001_0.geometry} material={materials['Material.074_34.001']} />
              <mesh geometry={nodes.Object_520_Tasten_0_Material074_35001_0.geometry} material={materials['Material.074_35.001']} />
              <mesh geometry={nodes.Object_520_Tasten_0_Material074_37001_0.geometry} material={materials['Material.074_37.001']} />
              <mesh geometry={nodes.Object_520_Tasten_0_Material074_38001_0.geometry} material={materials['Material.074_38.001']} />
              <mesh geometry={nodes.Object_520_Tasten_0_Material007_0.geometry} material={materials['Material.007']} />
            </group>
            <group position={[-204.573, 218.006, 444.965]} rotation={[-1.72, -1.081, -0.132]} scale={[325.342, 31.034, 4.051]}>
              <mesh geometry={nodes.Cube003_Material001_0_Material006_0.geometry} material={materials['Material.006']} />
              <mesh geometry={nodes.Cube003_Material001_0_Material074_30001_0.geometry} material={materials['Material.074_30.001']} />
              <mesh geometry={nodes.Cube003_Material001_0_Material008_0.geometry} material={materials['Material.008']} />
              <mesh geometry={nodes.Cube003_Material001_0_Material009_0.geometry} material={materials['Material.009']} />
            </group>
            <group position={[117.182, 29.165, 29.407]} rotation={[-Math.PI / 2, 0, 0]} scale={[124.427, 119.911, 154.111]}>
              <mesh geometry={nodes.Plane_Material053_0_Material074_21001_0.geometry} material={materials['Material.074_21.001']} position={[0.032, 0, 0.224]} scale={0.771} />
            </group>
          </group>
        </group>
        <group position={[-176.076, 84.63, 272.661]} rotation={[-Math.PI / 2, -1.299, Math.PI / 2]} scale={[1181.122, 1181.123, 1181.123]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0.1, 0.017]}>
              <mesh geometry={nodes.Object_6_Gray001_0.geometry} material={materials['Gray.001']} />
              <mesh geometry={nodes.Object_6_Texture001_0.geometry} material={materials['Texture.001']} />
              <mesh geometry={nodes.Object_6_Screen001_0.geometry} material={materials['Screen.001']} />
              <mesh geometry={nodes.Object_6_Shiny001_0.geometry} material={materials['Shiny.001']} />
              <mesh geometry={nodes.Object_6_Black002_0.geometry} material={materials['Black.002']} />
              <mesh geometry={nodes.Object_6_Keyboard001_0.geometry} material={materials['Keyboard.001']} />
              <mesh geometry={nodes.Object_6_Light001_0.geometry} material={materials['Light.001']} />
              <mesh geometry={nodes.Object_6_Orange001_0.geometry} material={materials['Orange.001']} />
              <mesh geometry={nodes.Object_6_White001_0.geometry} material={materials['White.001']} />
              <mesh geometry={nodes.Object_6_Metal001_0.geometry} material={materials['Metal.001']} />
            </group>
          </group>
        </group>
        <group position={[-242.187, 48.964, 274.85]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={11.726}>
          <mesh geometry={nodes.Cooling_stand_9metalBlack001_0.geometry} material={materials['9metalBlack.001']} />
          <mesh geometry={nodes.Cooling_stand_6chashki001_0.geometry} material={materials['6chashki.001']} />
        </group>
        <group position={[93.418, 108.202, 579.276]} rotation={[-Math.PI / 2, 0.742, -Math.PI]} scale={[-58.593, 33.2, 58.593]}>
          <mesh geometry={nodes.Mobile_Stand_Black002_0.geometry} material={materials['Black.002']} />
          <mesh geometry={nodes.Mobile_Stand_10Chrome001_0.geometry} material={materials['10Chrome.001']} />
        </group>
        <group position={[-116.173, 443.675, -340.258]} rotation={[Math.PI, -1.213, 0]} scale={189.698}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-0.032, 0.418, 0.018]} rotation={[2.909, -1.519, 1.223]} scale={[1.026, 1.026, 0.866]}>
              <group scale={[1, 1, 0.494]}>
                <mesh geometry={nodes.Object_90_Material010_0.geometry} material={materials['Material.010']} />
                <mesh geometry={nodes.Object_90_Material011_0.geometry} material={materials['Material.011']} />
                <mesh geometry={nodes.Object_90_Material004_0.geometry} material={materials['Material.004']} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/gaming/gamingsetup.gltf')
