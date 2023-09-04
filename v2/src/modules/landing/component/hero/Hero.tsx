import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model } from './Portfolio'
import { styled } from "styled-components"
const Span = styled.span`
    text-align: left;
`
const Hero = () => {
  return (
    <>
     <Canvas shadows camera={{ position: [0, 0.75, 1.95], fov: 75 }}>
        <ambientLight intensity={0.65} color={0xffffff} position={[0,4,-5]}/>
        <spotLight intensity={12} angle={70} distance={3.25} penumbra={1} position={[0, 2.65, 0]} color={0xffffff} />
        <Model position={[0,-0.75,0]} scale={[1.2,1.2,1.2]}/>
        {/* <Plane args={[10, 10, 5, 5]} rotation-x={Math.PI / 2} position={[0, 0, 0.75]} receiveShadow>
      <meshStandardMaterial attach="material" color="#20202300" side={2} />
    </Plane> */}
        {/* <Environment preset="city" /> */}
        {/* <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} /> */}
        <OrbitControls  enableZoom={true} enablePan={true} autoRotate />
      </Canvas>
      <span className="hello_label" >
        Hello, I'm Phong - a web developer and a codeholic :)
      </span>
      <div className="block_wrapper">
        <div className="intro_content">
          <Span>Le Thanh Phong</Span>
          <Span>Digital Nomad (Web Developer)</Span>
        </div>
        <div className="avatar_wrapper">
          <img src="https://ik.imagekit.io/flamefoxeswyvernp/65C9A4B1-88BC-4EDE-8320-D7272DC1E202_cDN5k-uWN.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1663986362929" />
        </div>
      </div>
    </>
  )
}

export default Hero