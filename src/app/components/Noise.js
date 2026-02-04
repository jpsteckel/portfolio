'use client';
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const NoiseMaterial = ({ uMouse, scrollPositionNoise }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current && ref.current.uniforms) {
      ref.current.uniforms.time.value = clock.getElapsedTime();
      ref.current.uniforms.scrollPositionNoise.value = scrollPositionNoise;
    }
  });

  return (
    <shaderMaterial
      ref={ref}
      attach="material"
      args={[{
        uniforms: {
          time: { value: 0 },
          uMouse: { value: uMouse },
          scrollPositionNoise: { value: scrollPositionNoise },
        },
        vertexShader: /* glsl */ `
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform float time;
          uniform vec2 uMouse;
          uniform float scrollPositionNoise;

          vec2 random(vec2 p) {
            return fract(sin(vec2(dot(p, vec2(223.36, 480.18)), dot(p, vec2(112.87, 327.57)))) * 50567.7254 + (sin(abs(uMouse[0]+184.51)) + sin(abs(uMouse[1]+259.62)))/3.0 + time/40.0);
          }
          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            vec2 u = f * f * (3.0 - 2.0 * f);

            float a = dot(random(i), vec2(0.5));
            float b = dot(random(i + vec2(1.0, 0.0)), vec2(0.5));
            float c = dot(random(i + vec2(0.0, 1.0)), vec2(0.5));
            float d = dot(random(i + vec2(1.0, 1.0)), vec2(0.5)); 

            return mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 2.0 - 1.0;
          }

          float fbm(vec2 p) {
            float value = -.5;
            float amplitude = 0.4;
            float frequency = 0.24;
            for (int i = 0; i < 4; i++) {
              value += amplitude * noise(p * frequency);
              frequency *= 2.0;
              amplitude *= 0.5;
            }
            return value;
          }

          void main() {
            vec2 pos = gl_FragCoord.xy / vec2(1000.0, 1000.0);
            pos.x += uMouse.x * -0.1;
            pos.y += uMouse.y * -0.1 + scrollPositionNoise * -0.001;

            float noiseValue = fbm(pos * 5.0 + time * 0.5);

            vec3 color = vec3(noiseValue * 0.9 + 0.5);
            
            gl_FragColor = vec4(color, 1.0);
          }
        `,
      }]}
    />
  );
};

function FullscreenPlane({ uMouse, scrollPositionNoise }) {
  const { size } = useThree();
  const aspect = size.width / size.height;

  return (
    <mesh>
      <planeGeometry args={[10 * aspect, 10]} />
      <NoiseMaterial uMouse={uMouse} scrollPositionNoise={scrollPositionNoise} />
    </mesh>
  );
}

export default function NoiseCanvas() {
  const [mousePosition, setMousePosition] = useState(new THREE.Vector2(0, 0));
  const [scrollPositionNoise, setScrollPositionNoise] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition(new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      ));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPositionNoise(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -20,
      pointerEvents: 'none',
    }}>
      <Canvas style={{
        width: '100vw',
        height: '100vh',
        margin: '0',
        padding: '0',
        background: 'transparent',
      }}>
        <FullscreenPlane uMouse={mousePosition} scrollPositionNoise={scrollPositionNoise} />
      </Canvas>
      <div className='fixed bottom-2 left-2 text-white bg-black bg-opacity-50 p-2 rounded'>
        Mouse Position: {`(${mousePosition.x.toFixed(2)}, ${mousePosition.y.toFixed(2)})`}
        Scroll Position: {scrollPositionNoise}
      </div>
    </div>
  );
}