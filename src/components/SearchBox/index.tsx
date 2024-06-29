import "./search-box.styles.css";
import { ChangeEventHandler } from "react";

type SearchBoxProps = {
  placeholder?: string;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
};

export default function SearchBox({
  placeholder,
  onSearchChange,
}: SearchBoxProps) {
  return (
    <input
      className={`search-box`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
}
