import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/5492612515756"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center border-2 border-volt bg-ink-950 text-volt shadow-volt"
      aria-label="Escribinos por WhatsApp"
    >
      <span className="absolute inset-0 animate-ping border-2 border-volt opacity-20" />
      <MessageCircle size={24} />
    </motion.a>
  )
}
