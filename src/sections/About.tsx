import MyPhoto from '../assets/images/IMG_3103.jpg';
const About = () => {
  return (
    <section id="about" className="scroll-m-20">
      <div className=" container mx-auto px-6 py-20 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <img src="https://placehold.co/600x400" /> */}
          <div className=" relative max-w-[300px] justify-self-center after:content-[''] after:w-full after:h-full after:top-0 after:z-[-1] after:absolute after:bg-red-400  rounded-md">
            <img
              src={MyPhoto}
              className="grayscale hover:grayscale-0 transition-all translate-6"
            />
          </div>
          <div className="about-text">
            <h2 className="text-2xl text-center font-mono">About</h2>
            <p class="">
              I'm a Computer science student currently in my second year. I'm
              passionate about creating efficient and performant software
              solutions. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque repellendus ad expedita ducimus quas ullam laboriosam.
              Ut officiis minus temporibus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
