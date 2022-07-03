import React from "react";

// eslint-disable-next-line react/display-name
export const SearchBar = React.memo(({ onUserInput }) => {
  return (
    <div className="mt-3">
        <input
            type="search"
            className="h-10 w-full form-control text-gray-700 bg-white border border-solid border-gray-300 rounded px-3"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            onChange={(e) => onUserInput(e.target.value)}
        />
    </div>
  );
});
