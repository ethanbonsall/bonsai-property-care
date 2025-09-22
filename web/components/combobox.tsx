import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const categories = [
  "Landscaping",
  "Driveway Sealing",
  "Pressure Washing",
  "General Home Care",
];

export default function CategoryComboBox({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setQuery(value);
    onSelect(value);
    setIsOpen(false);
  };

  const queryLower = query.toLowerCase();
  const hasExactMatch = categories.some(
    (cat) => cat.toLowerCase() === queryLower
  );

  return (
    <div className="relative w-full">
      <div className="flex items-center border rounded shadow-sm focus-within:ring-2 focus-within:ring-primary bg-background hover:bg-background-100 text-text px-3 py-2">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 100)}
          className="w-full outline-none text-base bg-transparent"
        />
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          tabIndex={-1}
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-text" />
          ) : (
            <ChevronDown className="w-5 h-5 text-text" />
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-background border rounded shadow max-h-60 overflow-auto">
          {categories.map((option, idx) => (
            <li
              key={idx}
              onMouseDown={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-background-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
          {query && !hasExactMatch && (
            <li
              onMouseDown={() => handleSelect(query)}
              className="px-4 py-2 hover:bg-background-100 cursor-pointer border-t"
            >
              Other: <strong>{query}</strong>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
