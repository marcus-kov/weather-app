import {useState, useContext, useCallback} from "react";
import { SearchBar, ResultsList } from "../SearchBar";
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

  const { error, isFetching, data } = useQuery(
    ["searchList", debouncedSearchTerm],
    () => getLocation({ query: debouncedSearchTerm }),
    {
      enabled: !!debouncedSearchTerm,
    }
  );

  const onItemClick = useCallback((value) => {
      setCitySearchParam('');
      setLocation(value);
  }, [setLocation]);

  return (
    <header className="max-w-7xl mx-auto px-4 sm:p-3 lg:px-8">
      <TitleSubtitle />
      <SearchBar onUserInput={setCitySearchParam} />
      {citySearchParam && data && !isFetching && (
        <ResultsList autoCompleteList={data.results} onSelect={onItemClick} />
      )}
    </header>
  );
};
