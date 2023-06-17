import React from "react";
import AccordionList from "./AccordionList";

const AccordionItem = () => {
  const accordionItems = [
    {
      title: "Bagaimana Cara Membuat Akun Kal Market?",
      content: (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui unde
          natus quos molestias quo nobis. Placeat quasi sint commodi suscipit
          quibusdam nemo aliquid dolor totam, hic ex, rem, dolore veritatis!
        </p>
      ),
    },
    {
      title: "Bagaimana Caranya Memesan?",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          unde provident modi. Asperiores iste debitis voluptas laudantium
          quaerat aperiam minima aliquid, eius ea vel voluptatem sequi minus ad
          perferendis tempora?
        </p>
      ),
    },
    {
      title: "Bagaimana Untuk Pengembalian Barang?",
      content: (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
          distinctio explicabo totam, reprehenderit sapiente fugit amet aperiam
          maiores sit rerum omnis aspernatur quisquam ab nobis voluptatum
          corporis eos consequuntur!
        </p>
      ),
    },
    {
      title: "Bagaimana Caranya Menggunakan Kupon?",
      content: (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus at,
          non maiores ad unde incidunt? Ipsa, aliquam, obcaecati, facilis
          perspiciatis vel dicta magni doloremque assumenda iure nemo dolorum
          illum eum.
        </p>
      ),
    },
  ];

  return (
    <div>
      <AccordionList items={accordionItems} />
    </div>
  );
};

export default AccordionItem;
