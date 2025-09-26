import React, { useEffect, useRef } from 'react';
import profile from "../assets/data/profile.json";
import * as THREE from 'three'
import { Link } from 'react-router';

export default function Home(){
  const threeCanvasRef = useRef();

  useEffect(() => {
    
    // --- Three.js Scene Setup ---
    let camera, scene, renderer;
    let mouseX = 0, mouseY = 0;
    let frameId;

    const initThree = () => {
      // Create the scene with a dark, futuristic background color.
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0a1a);

      // Set up the perspective camera. The position is set to move through the city.
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 2, 50);

      // Create the WebGL renderer for the 3D scene.
      renderer = new THREE.WebGLRenderer({ antialias: true, canvas: threeCanvasRef.current });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Add a wireframe grid to serve as the city's ground. The size has been increased.
      const gridHelper = new THREE.GridHelper(500, 500, 0x2563eb, 0x2563eb);
      gridHelper.position.y = 0;
      scene.add(gridHelper);

      // Function to create and add the wireframe buildings to the scene.
      const createBuildings = () => {
        const buildingGroup = new THREE.Group();
        const buildingColor = new THREE.Color(0x3b82f6);
        const edgeMaterial = new THREE.LineBasicMaterial({ color: buildingColor, linewidth: 1 });
        const buildingCount = 500; // Increased number of buildings
        const gridDimension = 100; // Increased city dimensions

        for (let i = 0; i < buildingCount; i++) {
          const height = Math.random() * 50 + 5;
          const width = Math.random() * 5 + 2;
          const depth = Math.random() * 5 + 2;
          const buildingGeometry = new THREE.BoxGeometry(width, height, depth);
          const edges = new THREE.EdgesGeometry(buildingGeometry);
          const line = new THREE.LineSegments(edges, edgeMaterial);
          const x = (Math.random() - 0.5) * gridDimension;
          const z = (Math.random() - 0.5) * gridDimension;
          line.position.set(x, height / 2, z);
          buildingGroup.add(line);
        }
        return buildingGroup;
      };

      const buildings = createBuildings();
      scene.add(buildings);

      // Add event listeners for mouse and window resize.
      document.addEventListener('mousemove', onMouseMove, false);
      window.addEventListener('resize', onWindowResize, false);
    };

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // --- Combined Animation Loop ---
    const animate = () => {
      // Three.js animation to move the camera and update rotation based on mouse.
      if (renderer) {
        // Zoom into the city
        camera.position.z -= 0.2;
        camera.rotation.y = mouseX * 0.2;
        camera.rotation.x = mouseY * 0.1;
        // Reset position when the camera has passed through the city
        if (camera.position.z < -50) {
          camera.position.z = 50;
        }
        renderer.render(scene, camera);
      }
      
      frameId = requestAnimationFrame(animate);
    };

    // Initialize and start the animation loop.
    initThree();
    animate();

    // Cleanup function to remove event listeners and dispose of the renderer
    // when the component unmounts.
    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener('mousemove', onMouseMove, false);
      window.removeEventListener('resize', onWindowResize, false);
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full h-[85vh] rounded-4xl overflow-hidden shadow-lg">
      <canvas ref={threeCanvasRef} className="absolute inset-0 z-0 w-full h-full"></canvas>
      {/* <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-8 bg-transparent text-white rounded-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
          3D Tech City
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fadeIn delay-100">
          A visual experience built with Three.js.
        </p>
      </div> */}
      <div className="absolute inset-0 z-10 p-8 text-center bg-transparent justify-center items-center text-white rounded-xl shadow-lg m-4 max-h-screen dark">
        <img
            src={profile.avatar}
            alt="Profile Avatar"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-700"
        />
        <h1 className="text-4xl font-bold text-white my-4">
            Hello, I'm {profile.firstName} {profile.lastName} <span className='animate-pulse delay-100'>👋</span>
        </h1>
        <h3 className="text-2xl font-bold text-gray-100 my-10">
            Welcome to my portfolio
        </h3>
        <div className='space-x-4 mt-10'>
          <Link to={"/profile"}>
            <button className='mx-4 text-xl font-semibold bg-blue-700 p-4 border-2 rounded-xl hover:p-5 hover:bg-blue-600'>
              Profile
            </button>
          </Link>
          <Link to={"/projects"}>
            <button className='mx-4 text-xl font-semibold bg-blue-700 p-4 border-2 rounded-xl hover:p-5 hover:bg-blue-600'>
              Projects
            </button>
          </Link>
        </div>
        
      </div>
    </section>
  );
};