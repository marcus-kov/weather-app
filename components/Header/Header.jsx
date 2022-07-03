import { useState, useContext } from "react";
import { SearchBar } from "./SearchBar";
import { ResultsList } from "./ResultsList";
import { useDebounce } from "use-debounce";
import { useQuery } from "react-query";
import { getLocation } from "../../services/api";
import AppContext from "../../AppContext";
import { TitleSubtitle } from "./TitleSubtitle";

export const Header = () => {
  const [citySearchParam, setCitySearchParam] = useState("");
  const [debouncedSearchTerm] = useDebounce(citySearchParam, 500);
  const contextValues = useContext(AppContext);

  const { setLocation } = contextValues;

  const { isLoading, error, isFetching, data } = useQuery(
    ["searchList", debouncedSearchTerm],
    () => getLocation({ query: debouncedSearchTerm }),
    {
      enabled: !!debouncedSearchTerm,
    }
  );

  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <TitleSubtitle />
      <SearchBar onUserInput={setCitySearchParam} />
      {data && !isFetching && (
        <ResultsList autoCompleteList={data.results} onSelect={setLocation} />
      )}
    </header>
  );
};
