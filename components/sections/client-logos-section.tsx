"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
  { name: "Akitutes", file: "Akitutes 1.png" },
  { name: "Micomedicina", file: "micomedicina.png" },
  { name: "Fungi", file: "Fungi.png" },
  { name: "Valstark", file: "Valstark.png" },
  { name: "Xexeu", file: "Xexeu.png" },
]

export function ClientLogosSection() {
  return (
    <section className="bg-muted/50 px-6 py-10 md:px-10 lg:px-16">
      <motion.div
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10 pb-2 sm:gap-14 lg:flex-nowrap lg:justify-between"
        aria-label="Logos de clientes Tryum"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 } },
        }}
      >
        {logos.map((client) => (
          <motion.div
            key={client.name}
            className="flex shrink-0 items-center justify-center grayscale transition hover:grayscale-0"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={`/clientes/${encodeURIComponent(client.file)}`}
              alt={`Logo de ${client.name}`}
              width={168}
              height={52}
              className="h-10 w-auto md:h-12"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
