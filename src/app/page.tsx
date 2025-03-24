import SearchBar from "./components/searchBar";
import AirportList from "./components/list";

export default async function Home() {
  return (
    <div className="w-10/11 p-10 animate-in fade-in duration-700">
      <SearchBar />
      <AirportList />
    </div>
  );
}
