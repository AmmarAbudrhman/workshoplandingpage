const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">
          صور من النظام
        </h2>

        <div className="w-28 h-1.5 bg-gradient-to-r from-primary-foreground to-secondary mx-auto rounded-full mt-4 mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary md:mt-12">
            <img
              src="/images/1.png"
              alt="Students Management"
              className="w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary md:mt-12">
            <img
              src="/images/2.png"
              alt="Students Management"
              className="w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary md:mt-12">
            <img
              src="/images/3.png"
              alt="Students Management"
              className="w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
