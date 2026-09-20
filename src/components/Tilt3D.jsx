import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Tilt3D({
  children,
  className = '',
  innerClassName = '',
  maxTilt = 10,
  scale = 1.02,
  perspective = 1200,
}) {
  const ref = useRef(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const springCfg = { stiffness: 200, damping: 22, mass: 0.6 }
  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), springCfg)
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), springCfg)

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective }}
      className={className}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className={`h-full w-full ${innerClassName}`}
      >
        {children}
      </motion.div>
    </div>
  )
}
