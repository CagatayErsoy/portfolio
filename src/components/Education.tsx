import AccordionComponent from "./AccordionComponent";
import educationData from "@/data/educationData";

const Education = () => {
  return (
    <div>
      <h3>Education</h3>
      {educationData.map((edu, index) => (
        <AccordionComponent key={index} title={edu.institution}>
          <div>
            <p className="text-sm text-gray-600">{edu.degree}</p>
            <p className="text-xs text-gray-500">{edu.period}</p>
          </div>
        </AccordionComponent>
      ))}
    </div>
  );
};

export default Education;
