import GroupItem from "./components/Groups/Group";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import { useFilter } from "./hooks/filter";

const App = () => {

  const { filteredGroups } = useFilter();

  return (
    <div>
      <Header />
      <div className="group-list">
        <div className="group-container">
          <SearchForm />
        </div>

        <div className="group-container">
          {filteredGroups.map(group => <GroupItem group={group} key={group.id} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
