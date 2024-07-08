"use client";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

interface Uniforms {
  uTime: THREE.IUniform<number>;
  uWaveHeight: THREE.IUniform<number>;
  uTexture: THREE.IUniform<THREE.Texture | null>;
}

const Wave: React.FC = () => {
  const mount = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<THREE.Mesh>();
  const clock = useRef<THREE.Clock>(new THREE.Clock());
  const renderer = useRef<THREE.WebGLRenderer>();
  const scene = useRef<THREE.Scene>(new THREE.Scene());
  const camera = useRef<THREE.PerspectiveCamera>(
    new THREE.PerspectiveCamera(45, 1, 1, 5)
  );
  const animId = useRef<number>();
  const uniforms = useRef<Uniforms>({
    uTime: { value: 0 },
    uWaveHeight: { value: 0 },
    uTexture: { value: null },
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const animate = (isIncreasing: boolean) => {
    if (
      !clock.current ||
      !renderer.current ||
      !scene.current ||
      !camera.current
    )
      return;

    const time = clock.current.getElapsedTime() * 4;
    uniforms.current.uTime.value = time;

    if (isIncreasing) {
      if (uniforms.current.uWaveHeight.value < 0.1) {
        uniforms.current.uWaveHeight.value += 0.01; // Adjust speed of increase as needed
      }
    } else {
      if (uniforms.current.uWaveHeight.value > 0) {
        uniforms.current.uWaveHeight.value -= 0.002; // Adjust speed of decrease as needed
      } else if (animId.current !== undefined) {
        cancelAnimationFrame(animId.current);
        animId.current = undefined;
        return;
      }
    }

    renderer.current.render(scene.current, camera.current);
    animId.current = requestAnimationFrame(() => animate(isIncreasing));
  };

  const handleMouseEnter = () => {
    if (animId.current === undefined) {
      animate(true); // Start animation increasing wave height
    }
  };

  const handleMouseLeave = () => {
    if (animId.current !== undefined) {
      cancelAnimationFrame(animId.current);
      animId.current = undefined;
      animate(false); // Start animation decreasing wave height
    }
  };
  useEffect(() => {
    const init = () => {
      if (!mount.current) return;
      renderer.current = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.current.setSize(400, 400); // Adjust as needed

      mount.current.appendChild(renderer.current.domElement);

      const geometry = new THREE.PlaneGeometry(1, 1, 35, 25);
      const loader = new THREE.TextureLoader();

      loader.load("/waves.svg", (texture) => {
        uniforms.current.uTexture.value = texture;

        const shaderMat = new THREE.ShaderMaterial({
          uniforms: uniforms.current as any,
          vertexShader: `
              uniform float uTime;
              uniform float uWaveHeight;
              varying vec2 vUv;
    
              void main() {
                vUv = uv;
                float calc = uWaveHeight * sin(position.x * 10.0 + uTime);
                vec3 newPosition = position;
                newPosition.z = position.z + calc;
    
                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
              }
            `,
          fragmentShader: `
              uniform sampler2D uTexture;
              varying vec2 vUv;
    
              void main() {
                vec3 color = texture2D(uTexture, vUv).rgb;
                gl_FragColor = vec4(color, 1.0);
              }
            `,
        });

        const cube = new THREE.Mesh(geometry, shaderMat);
        cubeRef.current = cube;
        scene.current.add(cube);
        camera.current.position.z = 1.3;
        renderer?.current?.render(scene.current, camera.current);
        setIsLoaded(true);
      });
    };
    init();

    return () => {
      if (animId.current !== undefined) {
        cancelAnimationFrame(animId.current);
      }
    };
  }, []);
//   if (!isLoaded) {
//     // Show loading or placeholder image while Three.js scene is loading
//     return (
//       <div className="absolute right-0 top-0 translate -translate-x-[80%] translate-y-[40%] z-0">
//         Loading...
//       </div>
//     );
//   }

  return (
    <div
      className="absolute right-0 bottom-0 translate translate-x-[36%] translate-y-[40%] z-0"
      ref={mount}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
};

export default Wave;
