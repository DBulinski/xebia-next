"use client";
import itemsCss from "./items.module.css";
import { useState } from "react";

const page = new Array(5000).fill("");

export default function Items() {
  const [lastItemSelected, setLastItemSelected] = useState<number | null>(null);

  return (
    <>
      {lastItemSelected !== null && (
        <strong>Last item selected: {lastItemSelected + 1}</strong>
      )}
      <div className={itemsCss["items-container"]}>
        {page.map((_, index) => (
          <div className={itemsCss["item"]} key={index}>
            <button
              disabled={lastItemSelected === index}
              onClick={() => setLastItemSelected(index)}
            >
              Item {index + 1}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
