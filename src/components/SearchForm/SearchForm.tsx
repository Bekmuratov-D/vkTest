import { useGroups } from "../../hooks/groups";
import { useFilter } from "../../hooks/filter";

export default function SearchForm() {

    const { groups } = useGroups();
    const { setSelectedPrivacy } = useFilter();

    return (
        <div>
            Тип приватности:
            <select onChange={(e) => setSelectedPrivacy(e.target.value)}>
                <option value="all">All</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
            </select>
            По цвету:
            <select>
                <option value="all">All</option>
                {groups.map(group => group.avatar_color && (
                    <option key={group.id} value={group.avatar_color}>{group.avatar_color}</option>
                ))}
            </select>
            Show only groups with friends:
            {/* <input type="checkbox" checked={showFriends} onChange={() => setShowFriends(showFriends ? null : groups[0].id)} /> */}
        </div>
    );
}