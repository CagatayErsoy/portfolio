const Title = () => {
  return (
    <header className="lg:text-left text-center mb-6 flex flex-col gap-3 ">
      {/* Name Title */}
      <h1 className="text-5xl font-bold text-white">Cagatay Ersoy</h1>

      {/* Role - Red Accent */}
      <h3 className="text-foreground text-2xl font-semibold">
        Front End Developer
      </h3>

      {/* Quote / Description */}
      <p className="text-gray-400 text-lg italic lg:w-1/2">
        "I turn ideas into sleek, engaging web interfaces—one pixel at a time."
      </p>

      {/* Subtle Accent Line (Optional for UI Separation) */}
      <div className="lg:w-20 border-b-2 border-secondary mt-2"></div>
    </header>
  );
};

export default Title;
