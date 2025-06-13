import MyPhoto from '../assets/images/IMG_3103.jpg';
const About = () => {
  return (
    <section id="about" className="scroll-m-20 bg-[#FFEAD0]">
      <div className=" container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <img src="https://placehold.co/600x400" /> */}
          <div className=" relative max-w-[300px] justify-self-center after:content-[''] after:w-full after:h-full after:top-0 after:z-[-1] after:absolute z-1 after:bg-red-400  rounded-md">
            <img
              src={MyPhoto}
              className="grayscale hover:grayscale-0 transition-all translate-6"
            />
          </div>
          <div className="about-text text-black">
            <h2 className="text-2xl text-center font-mono">About</h2>
            <p class="text-lg">
              I'm a Computer science student currently in my second year. I'm
              passionate about creating efficient and performant software
              solutions. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Neque repellendus ad expedita ducimus quas ullam laboriosam.
              Ut officiis minus temporibus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus ipsa porro eligendi iste
              odit enim facere, maxime eaque dolores, excepturi ducimus
              inventore sed quae, labore provident quo illo maiores rem modi
              officiis neque exercitationem aspernatur. Aut deserunt magni
              voluptatum rerum labore pariatur obcaecati perspiciatis unde
              itaque! Delectus, officiis reprehenderit hic aperiam vitae cum,
              quibusdam ullam enim possimus sit blanditiis eligendi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
