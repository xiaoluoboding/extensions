import { List } from "@raycast/api";
import { useState, ReactElement } from "react";
import { ChromeListItems } from "./components";
import { useBookmarkSearch } from "./hooks/useBookmarkSearch";

export default function Command(): ReactElement {
  const [searchText, setSearchText] = useState<string>();
  const { data, isLoading, errorView } = useBookmarkSearch(searchText);

  if (errorView) {
    return errorView as ReactElement;
  }

  return (
    <List onSearchTextChange={setSearchText} isLoading={isLoading} throttle={true}>
      {data?.map((e) => (
        <ChromeListItems.TabHistory entry={e} key={e.id} />
      ))}
    </List>
  );
}
