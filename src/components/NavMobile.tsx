import { motion, AnimatePresence } from "motion/react"
import { Sling as Hamburger } from "hamburger-react"
import React, { useState } from "react"



interface NavMobileProps {
  links: string[]
}
const NavMobile: React.FC<NavMobileProps> = ({ links }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className="lg:hidden relative z-10">
        <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {
          isOpen && (
            <motion.div
              className="absolute overflow-y-hidden top-0 right-0 w-full"
              initial={{ opacity: 0, translateX: '100%' }}
              animate={{ opacity: 1, translateX: '0' }}
              exit={{ opacity: 0, translateX: '100%' }}
              transition={{ duration: 0.25 }}
            >
              <ul className="nav-links flex flex-col  bg-[#1b1b1b] h-screen text-center gap-5 justify-center lg:hidden">
                {
                  links.map(i => (
                    <li>
                      <a href={`#${i.toLocaleLowerCase()}`} onClick={() => setOpen((prev) => !prev)}>{`${i}`}</a>
                    </li>
                  ))
                }
              </ul>
            </motion.div>
          )
        }
      </AnimatePresence>
    </>
  )
}

export default NavMobile
