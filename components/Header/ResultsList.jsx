export const ResultsList = ({ autoCompleteList, onSelect }) => {
  return (
    <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {autoCompleteList.map((item) => {
        return (
          <li
            className="cursor-pointer w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 hover:bg-sky-200"
            key={item.place_id}
            onClick={() => onSelect({ lat: item.lat, lon: item.lon })}
          >
            {item.formatted}
          </li>
        );
      })}
    </ul>
  );
};
