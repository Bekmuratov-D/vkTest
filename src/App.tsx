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






// import React, { useState, useEffect } from 'react';
// import groupsData from './groups.json';
// import { GetGroupsResponse, Group, User } from 'modeles.ts';

// const App = () => {
//   const [groups, setGroups] = useState([]);
//   const [filteredGroups, setFilteredGroups] = useState([]);
//   const [selectedPrivacy, setSelectedPrivacy] = useState('all');
//   const [selectedColor, setSelectedColor] = useState('all');
//   const [showFriends, setShowFriends] = useState(null);

//   useEffect(() => {
//     // Simulating backend API call with 1 second delay
//     setTimeout(() => {
//       setGroups(groupsData || []);
//     }, 1000);
//   }, []);

//   useEffect(() => {
//     filterGroups();
//   }, [groups, selectedPrivacy, selectedColor, showFriends]);

//   const toggleFriends = (group) => {
//     if (showFriends === group.id) {
//       setShowFriends(null);
//     } else {
//       setShowFriends(group.id);
//     }
//   }

//   const filterGroups = () => {
//     let filtered = groups;

//     if (selectedPrivacy !== 'all') {
//       filtered = filtered.filter(group => group.closed === (selectedPrivacy === 'closed'));
//     }

//     if (selectedColor !== 'all') {
//       filtered = filtered.filter(group => group.avatar_color === selectedColor);
//     }

//     if (showFriends) {
//       filtered = filtered.map(group => {
//         if (group.id === showFriends) {
//           return {
//             ...group,
//             showFriends: true
//           };
//         }
//         return group;
//       });
//     }

//     setFilteredGroups(filtered);
//   }

//   return (
//     <div>
//       <div>
//         Filter by Privacy:
//         <select onChange={(e) => setSelectedPrivacy(e.target.value)}>
//           <option value="all">All</option>
//           <option value="open">Open</option>
//           <option value="closed">Closed</option>
//         </select>
//         Filter by Color:
//         <select onChange={(e) => setSelectedColor(e.target.value)}>
//           <option value="all">All</option>
//           {groups.map(group => group.avatar_color && (
//             <option key={group.avatar_color} value={group.avatar_color}>{group.avatar_color}</option>
//           ))}
//         </select>
//         Show only groups with friends:
//         <input type="checkbox" checked={showFriends} onChange={() => setShowFriends(showFriends ? null : groups[0].id)} />
//       </div>

//       <div>
//         {filteredGroups.map(group => (
//           <div key={group.id}>
//             <div>{group.name}</div>
//             {group.avatar_color &&
//               <div style={{ width: '100px', height: '100px', backgroundColor: group.avatar_color, borderRadius: '50%' }}></div>
//             }
//             <div>{group.closed ? 'Closed' : 'Open'}</div>
//             <div>Members: {group.members_count}</div>
//             {group.friends &&
//               <div>Friends: {group.friends.length} <button onClick={() => toggleFriends(group)}>Show Friends</button></div>
//             }
//             {showFriends === group.id && group.friends && group.friends.map(friend => (
//               <div key={`${friend.first_name}-${friend.last_name}`}>{friend.first_name} {friend.last_name}</div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
