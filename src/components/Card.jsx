import React from "react";

export default function Card({ title, list, backgroundColor }) {
  return (
    <div>
      <div
        className={`block rounded-lg w-96 h-80 text-white`}
        style={{ backgroundColor: backgroundColor || "#21BFF7" }}
      >
        <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 font-bold">
          <h5 className="text-center">{title}</h5>
        </div>
        <div className="mt-10">
          <ul className="mx-10">
            {list.items.map((item, itemIndex) => (
              <li key={itemIndex} className="">
                {itemIndex + 1} {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

