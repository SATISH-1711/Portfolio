import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "#ffffff",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: "#06b6d4",
          },

          links: {
            enable: true,
            color: "#06b6d4",
            distance: 150,
            opacity: 0.3,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}