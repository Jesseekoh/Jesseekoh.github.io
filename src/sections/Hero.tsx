import { useEffect, useState } from 'react';
import { Linkedin, Github } from 'lucide-react';
const Hero = () => {
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    setInterval(() => {
      const emojiList = [...'😮😀😁😐😑😬😎'];
      const now = new Date();
      setEmoji(emojiList[Math.floor(now.getTime() / 200) % 7]);
    }, 200);
  }, []);

  return (
    <section id="hero">
      <div className="container mx-auto h-svh max-h-[800px] grid place-content-center">
        <div className="hero-text px-4">
          <h1 className="text-2xl font-extrabold pb-2">
            <span className="font-mono inline-block pb-3">
              Hi, there
              <img
                src="https://em-content.zobj.net/source/microsoft-teams/363/waving-hand_1f44b.png"
                alt="waving hand emoji"
                className="inline pb-4"
                width={40}
              />
            </span>
            <br />
            <span className="ml-8 text-7xl font-black tracking-tighter bg-cyan-600/90">
              {`Jesse Ekoh-Ordan ${emoji}`}
            </span>
          </h1>
          <p className="text-7xl text-center">Software Engineer</p>
          {/* <p className="pb-2 text-lg leading-[1.3] tracking-wide">
          <span className="text-2xl">👨🏾‍💻</span>
          FullStack Software Engineer Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti facere inventore, hic, dolorum ipsa a
          asperiores ut minus fugit, esse repellendus nemo. Et voluptatibus ab
          nostrum consequuntur cum voluptate tenetur dolor nisi, optio debitis,
          nam non nesciunt iste neque? Quidem expedita dolore culpa aperiam quia
          quis? Ipsam laboriosam obcaecati facere!
        </p> */}

          <ul className="flex gap-4 justify-center items-center">
            <li>
              <a href="https://github.com/jesseekoh" target="_blank">
                <Github className="size-8" />
              </a>
            </li>
            <li>
              <a href="https://github.com/jesseekoh" target="_blank">
                <Linkedin className="size-8" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
