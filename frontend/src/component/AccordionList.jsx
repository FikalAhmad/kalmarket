import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-md shadow-md mb-2">
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <span className="text-gray-600">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="px-4 py-3">{content}</div>}
    </div>
  );
};

const AccordionList = ({ items }) => {
  const accordionItems = items.map((item, index) => (
    <Accordion key={index} title={item.title} content={item.content} />
  ));

  return (
    <>
      <div className="">
        <div className="p-4">{accordionItems}</div>
      </div>
    </>
  );
};

export default AccordionList;
