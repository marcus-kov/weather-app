import React from "react";

// eslint-disable-next-line react/display-name
export const ResultsList = React.memo(({ autoCompleteList, onSelect }) => {

  const NoResultsTmpl = (
      <li
          className="cursor-pointer w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 hover:bg-sky-200"
      >
        No results
      </li>
  );

  return (
    <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg rounded-t-none">
      {!autoCompleteList.length && <NoResultsTmpl />}

      {autoCompleteList.map(({ place_id, lat, lon, formatted}) => {
        return (
          <li
            className="cursor-pointer w-full px-4 py-2 border-b border-gray-200 hover:bg-sky-200"
            key={place_id}
            onClick={() => onSelect({ lat, lon })}
          >
            {formatted}
          </li>
        );
      })}
    </ul>
  );
});
