import "./search-box.styles.css";

export default function SearchBox({ placeholder, onSearchChange }) {
  return (
    <input
      className={`search-box`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
}
