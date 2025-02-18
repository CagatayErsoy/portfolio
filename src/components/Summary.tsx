const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-white">{children}</span>
);

const Summary = () => {
  return (
    <div className="flex flex-col ">
      <h3 className="mb-4 font-bold lg:hidden text-2xl ml-6 ">About</h3>
      <div className="flex flex-col gap-4 indent-6 text-gray-400 leading-relaxed">
        <p>
          Once a <Highlight>civil engineer</Highlight>, I traded blueprints for
          code and never looked back—except when{" "}
          <Highlight>debugging</Highlight> feels like structural failure. Now,
          as a<Highlight> Front End Developer</Highlight>, I’m{" "}
          <Highlight>passionate</Highlight> about crafting intuitive, high-
          <Highlight>performance</Highlight> user interfaces that seamlessly
          blend design and engineering. I love learning and improving every day,
          whether it’s optimizing <Highlight>UI components</Highlight>,
          exploring <Highlight>new frameworks</Highlight>, or figuring out why a
          div refuses to stay where it should.
        </p>
        <p>
          In my last project at <Highlight>LindoFlex</Highlight>, I took on the
          responsibility of managing a development team, organizing our
          codebase, and ensuring a structured approach to front-end development.
          This experience helped me grow beyond just{" "}
          <Highlight>writing code</Highlight> — I gained valuable insights into
          the management side of development, team coordination, and scaling
          frontend architecture. Before that, I worked at a{" "}
          <Highlight>startup</Highlight>, gaining hands-on experience with
          fast-paced product development. My journey also includes{" "}
          <Highlight>freelancing</Highlight>, <Highlight>open-source</Highlight>{" "}
          contributions, and internship projects, each adding to my adaptability
          and <Highlight>problem-solving</Highlight> mindset.
        </p>
        <p>
          When I’m not deep in code, you’ll likely find me immersed in{" "}
          <Highlight>competitive gaming</Highlight>, always analyzing ways to
          improve strategy and precision. I’ve also recently picked up learning
          the <Highlight>guitar</Highlight>, adding yet another layer to my
          problem-solving <Highlight>adventures</Highlight> — turns out,
          <Highlight> debugging </Highlight> code and mastering chords share
          more in common than you’d think. Whether it’s optimizing a UI,
          refining a gameplay strategy, or nailing that elusive chord
          progression, I’m always eager to{" "}
          <Highlight>push my limits </Highlight>, take on{" "}
          <Highlight>challenges</Highlight>, and embrace{" "}
          <Highlight>creativity</Highlight> in everything I do.
        </p>
      </div>
    </div>
  );
};

export default Summary;
