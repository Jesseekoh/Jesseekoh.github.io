import { useEffect, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
const Hero = () => {
  const [emoji, setEmoji] = useState('')

  useEffect(() => {
    setInterval(() => {
      const emojiList = [
        ..."😮😀😁😐😑😬😎"
      ]
      const now = new Date()
      setEmoji(emojiList[Math.floor(now.getTime() / 200) % 7])
    }, 200)

  }, [])

  return (
    <section className="hero py-40 min-h-svh grid place-content-center">
      <div className="hero-text px-4">
        <h1 className="text-2xl font-[Montserrat] font-extrabold pb-2">
          <span className="font-mono inline-block pb-3">
            Hi
            <img src="https://em-content.zobj.net/source/microsoft-teams/363/waving-hand_1f44b.png" alt="waving hand emoji" className="inline pb-4" width={40} />

            , I'm
          </span>
          <br />
          <span className="text-3xl font-black tracking-tighter">{`Jesse Ekoh-Ordan ${emoji}`}
          </span></h1>


        <p className="pb-2">
          <span className="text-2xl">👨🏾‍💻</span>
          FullStack Software Engineer
        </p>
        <a href="#" className="btn cta bg-[#d5693f] px-4 rounded-md py-2 inline-flex gap-2">Reach out
          <PaperAirplaneIcon width={25} />
        </a>
      </div>
    </section >
  )
}

export default Hero
