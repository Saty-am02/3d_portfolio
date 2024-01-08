import { useState,Suspense,useEffect,useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/island'
import  {Sky}  from '../models/Sky'
import {Bird} from '../models/Bird'
import { Plane } from '../models/Plane'
import Homeinfo from '../components/Homeinfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'
import hand from "../assets/icons/hand.png";



const Home = () => {

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
 
  const[currentStage,setCurrentStage]=useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isplayingMusic,setIsplayingMusic]=useState(false);

  useEffect(() => {
    if (isplayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isplayingMusic]);


  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition,rotation;
    if (window.innerWidth < 768) {
      screenScale = [0.1, 0.1, 0.1 ];
      screenPosition = [0,-6.8, -43.4];
      rotation= [0.2, 4.77 ,0];
    } else {
      screenScale = [0.1,.1, .1];
      screenPosition = [0, -6.8, -43.4];
      rotation= [0.2, 4.77 ,0];
    }

    return [screenScale, screenPosition,rotation];
  };

 const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition,rotation;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [.4, .4, .4];
      screenPosition = [0, -0.26, 3.5];
      rotation= [0,20.1,0];

    } else {
      screenScale = [.5, .5, .5];
      screenPosition = [0, -0.26, 3.5];
      rotation= [0,20.1,0];
    }

    return [screenScale, screenPosition,rotation];
  };


  const [islandScale, islandPosition,islandRotation] = adjustIslandForScreenSize();
  const [biplaneScale, biplanePosition,biplaneRotation] = adjustBiplaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 justify-center items-center flex'>
        {currentStage && <Homeinfo currentStage = {currentStage } />}
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab' }`}
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}  />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <Bird/>
          <Sky/>
          <Island
            postion={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane 
            isRotating={isRotating}
            position={biplanePosition}
            rotation={biplaneRotation}
            scale={biplaneScale}
          />
          
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isplayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsplayingMusic(!isplayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  )
}

export default Home
