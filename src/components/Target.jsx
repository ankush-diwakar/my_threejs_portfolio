import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    if (!targetRef.current) {
      return;
    }

    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group
      {...props}
      ref={targetRef}
      rotation={[0, Math.PI / 4, 0]}
      scale={1.8}
    >
      <mesh position={[0, -0.95, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 1.9, 24]} />
        <meshStandardMaterial color="#9ca3af" roughness={0.6} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.1, 32]} />
        <meshStandardMaterial
          color="#111827"
          roughness={0.75}
          metalness={0.05}
        />
      </mesh>
      <mesh position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 0.12, 32]} />
        <meshStandardMaterial
          color="#f97316"
          roughness={0.55}
          metalness={0.08}
        />
      </mesh>
      <mesh position={[0, 0.29, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.12, 32]} />
        <meshStandardMaterial
          color="#fde68a"
          roughness={0.45}
          metalness={0.05}
        />
      </mesh>
      <mesh position={[0, 0.42, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.14, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.35}
          metalness={0.02}
        />
      </mesh>
      <mesh position={[-0.28, -0.36, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 1.15, 16]} />
        <meshStandardMaterial
          color="#6b7280"
          roughness={0.65}
          metalness={0.15}
        />
      </mesh>
      <mesh position={[0.28, -0.36, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.06, 0.06, 1.15, 16]} />
        <meshStandardMaterial
          color="#6b7280"
          roughness={0.65}
          metalness={0.15}
        />
      </mesh>
      <mesh position={[0, -1.45, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.08, 1.1, 16]} />
        <meshStandardMaterial color="#4b5563" roughness={0.8} metalness={0.1} />
      </mesh>
      <mesh position={[0, -1.62, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 1.3, 16]} />
        <meshStandardMaterial
          color="#374151"
          roughness={0.85}
          metalness={0.08}
        />
      </mesh>
    </group>
  );
};

export default Target;
