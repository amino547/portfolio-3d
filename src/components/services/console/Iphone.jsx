import React from 'react'
import { useGLTF } from '@react-three/drei'

export function IphoneModel(props) {
  const { nodes, materials } = useGLTF('/iphone.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, 0]} position={[0, 0, 0]} scale={0.30}>
        <mesh geometry={nodes.Object_8.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.YiceMpFVTpnmoaq} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.GFNYbWjyDVGUwJd} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.CSNzlRnZuvCyxNL} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.KhJiSWFcsscOusf} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.sWxYOtHGWTcXRMx} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.IDdMwJVCyuFpUnA} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.fdfRsQCrfvPBPfQ} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.HvAGJeQTAiWbceX} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.bmOZLlCkCKhIIVe} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.KxzouvBYEgdZhMo} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.psePdsxZprlxGrw} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.jFPFAvCbiqflbQV} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.IkWzRHNnDaKQXIi} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.pBMikDFQfUOsKkr} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.fdfRsQCrfvPBPfQ} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.tfbCjiZQaZkmtHx} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.tfbCjiZQaZkmtHx} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.sWxYOtHGWTcXRMx} />
        <mesh geometry={nodes.Object_52.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.LtesZnUOMbBEAoi} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.LtesZnUOMbBEAoi} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.EJpkIDZfhPDUzel} />
        <mesh geometry={nodes.Object_62.geometry} material={materials.CSNzlRnZuvCyxNL} />
        <mesh geometry={nodes.Object_65.geometry} material={materials.FlDKBWPodPcEeGy} />
        <mesh geometry={nodes.Object_67.geometry} material={materials.LcWBQfBvCzxThpp} />
        <mesh geometry={nodes.Object_69.geometry} material={materials.LUbRMhkIhuekQRK} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.tfbCjiZQaZkmtHx} />
        <mesh geometry={nodes.Object_73.geometry} material={materials.tDZQoaroJfCIQtF} />
        <mesh geometry={nodes.Object_76.geometry} material={materials.jFPFAvCbiqflbQV} />
        <mesh geometry={nodes.Object_78.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.Object_80.geometry} material={materials.tfbCjiZQaZkmtHx} />
        <mesh geometry={nodes.Object_83.geometry} material={materials.iEhZxWeNLTDdgxm} />
        <mesh geometry={nodes.Object_85.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.Object_87.geometry} material={materials.vsSJQngPxBJTVZb} />
        <mesh geometry={nodes.Object_89.geometry} material={materials.LJBezuBxKRoHnAp} />
        <mesh geometry={nodes.Object_91.geometry} material={materials.xHgtbqndQshkTKG} />
        <mesh geometry={nodes.Object_93.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_96.geometry} material={materials.OStzgRHtVBLWwiD} />
        <mesh geometry={nodes.Object_98.geometry} material={materials.BLpVAsLWNICZYGG} />
        <mesh geometry={nodes.Object_100.geometry} material={materials.FsunUcGyajFpQmW} />
        <mesh geometry={nodes.Object_102.geometry} material={materials.nJRBoEsOhzMSqCz} />
        <mesh geometry={nodes.Object_104.geometry} material={materials.LJBezuBxKRoHnAp} />
        <mesh geometry={nodes.Object_106.geometry} material={materials.fGwijctGaiRaYJC} />
        <mesh geometry={nodes.Object_109.geometry} material={materials.qEGySvwsouNnVcn} />
        <mesh geometry={nodes.Object_112.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.Object_114.geometry} material={materials.IBtgGxCVyZhjKZM} />
        <mesh geometry={nodes.Object_116.geometry} material={materials.WqbAhnIPgrrhfXS} />
        <mesh geometry={nodes.Object_119.geometry} material={materials.LtesZnUOMbBEAoi} />
        <mesh geometry={nodes.Object_121.geometry} material={materials.KtvhjlxyToKjYkE} />
        <mesh geometry={nodes.Object_123.geometry} material={materials.IBtgGxCVyZhjKZM} />
        <mesh geometry={nodes.Object_125.geometry} material={materials.WqbAhnIPgrrhfXS} />
        <mesh geometry={nodes.Object_127.geometry} material={materials.rNCplyWedyfORFh} />
      </group>
    </group>
  )
}

useGLTF.preload('/iphone.glb')

