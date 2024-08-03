'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const numbers = [1, 2, 3, 4, 5]; // Przykładowe cyfry

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-lg  text-purple-800 lg:flex">
        franek, ...cd nastapi (●'◡'●)
      </div>
      <div className="flex w-full">
      {numbers.map((number, index) => (
        <motion.span
          key={index}
          initial={{ x: -100 }} // Początkowe przesunięcie w lewo
          animate={{ x: 500 }} // Docelowe przesunięcie w prawo
          transition={{ duration: 1, delay: index * 0.2 }} // Czas trwania i opóźnienie
        >
          {number}
        </motion.span>
      ))}
    </div>
    </main>
  );
}
