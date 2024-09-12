import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'

const DeveloperModelAnimated = ({ animationName = 'idle', ...props }) => {
    const group = useRef();
    //loading all animations files
    const { animations: idle_Animation} = useFBX('/models/animations/idle.fbx');
    const { animations: salute_Animation} = useFBX('/models/animations/salute.fbx');
    const { animations: clapping_Animation} = useFBX('/models/animations/clapping.fbx');
    const { animations: victory_Animation} = useFBX('/models/animations/victory.fbx');

    idle_Animation[0].name = 'idle';
    salute_Animation[0].name = 'salute';
    clapping_Animation[0].name = 'clapping';
    victory_Animation[0].name = 'victory';

    const { actions } = useAnimations([idle_Animation[0],salute_Animation[0],clapping_Animation[0],victory_Animation[0]], group);

    useEffect(() => {
        actions[animationName].reset().fadeIn(0.5).play();

        return () => {
            actions[animationName].fadeOut(0.5);
        }
    }, [animationName])

    const { nodes, materials } = useGLTF('/models/devmodel/modeldev.glb')
    return (
        <group {...props} dispose={null} ref={group}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="Wolf3D_Avatar"
                geometry={nodes.Wolf3D_Avatar.geometry}
                material={materials.Wolf3D_Avatar}
                skeleton={nodes.Wolf3D_Avatar.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
            />
        </group>
    )
}

useGLTF.preload('/models/devmodel/modeldev.glb')


export default DeveloperModelAnimated
