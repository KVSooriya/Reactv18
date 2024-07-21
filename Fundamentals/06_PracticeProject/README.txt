1. Building the static app: List of Friends
   export default function App() {
   return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
      </div>
    </div>
   );
   }

   function FriendsList() {
   const friends = initialFriends;
   return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
   );
   }

   function Friend({ friend }) {
   return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <button className="button">Select</button>
    </li>
   );
   }

2. Building the static app: Forms
   export default function App() {
   return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>

      <FormSplitBill />
    </div>
   );
   }

   function Button({ children }) {
   return <button className="button">{children}</button>;
   }

   function FormAddFriend() {
   return (
    <form className="form-add-friend">
      <label>Friend name</label>
      <input type="text" />

      <label>Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
   );
   }

   function FormSplitBill() {
   return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>Bill value</label>
      <input type="text" />

      <label>Your expense</label>
      <input type="text" />

      <label>X's expense</label>
      <input type="text" disabled />

      <label>Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
   );
   }

3. Displaying the new friend form
   function Button({ children, handleClick }) {
   return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
   );
   }

   export default function App() {
   const [showAddFriend, setShowAddFriend] = useState(false);

   function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
   }

   return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />

        // Render Add Friend form only when the condition is true
        {showAddFriend && <FormAddFriend />}

        // Conditionally displaying the text inside the button
        <Button handleClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
   );
   }

   function FormAddFriend() {
   return (
    <form className="form-add-friend">
      <label>Friend name</label>
      <input type="text" />

      <label>Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
   );
   }

4. Adding a new friend
   export default function App() {
   const [showAddFriend, setShowAddFriend] = useState(false);
   const [friends, setFriends] = useState(initialFriends);

   function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
   }

   function handleAddNewFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
   }

   return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onAddNewFriend={handleAddNewFriend} />}
        <Button handleClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
   );
   }

   function FriendsList({ friends }) {
   return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
   );
   }

   function FormAddFriend({ onAddNewFriend }) {
   const [name, setName] = useState("");
   const [image, setImage] = useState("https://i.pravatar.cc/48");

   function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };
    onAddNewFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
   }
   return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
   );
   }

5. Selecting a friend
   export default function App() {
   const [showAddFriend, setShowAddFriend] = useState(false);
   const [friends, setFriends] = useState(initialFriends);
   const [selectedFriend, setSelectedFriend] = useState(null);

   function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
   }

   function handleAddNewFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
   }

   function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      friend.id === selected?.id ? null : friend
    );
    setShowAddFriend(false);
   }

   return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddNewFriend={handleAddNewFriend} />}
        <Button handleClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
   );
   }

   function FriendsList({ friends, onSelectFriend, selectedFriend }) {
   return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
   );
   }

   function Friend({ friend, onSelectFriend, selectedFriend }) {
   const isSelected = selectedFriend?.id === friend.id;
   return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button handleClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
   );
   }

   function FormSplitBill({ selectedFriend }) {
   return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>Bill value</label>
      <input type="text" />

      <label>Your expense</label>
      <input type="text" />

      <label>{selectedFriend.name}'s expense</label>
      <input type="text" disabled />

      <label>Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
   );
   }

6. Creating Controlled elements
   function FormSplitBill({ selectedFriend }) {
   const [bill, setBill] = useState("");
   const [userExpense, setUserExpense] = useState("");
   const friendExpense = bill ? bill - userExpense : "";
   const [whoIsPaying, setWhoIsPaying] = useState("user");

   return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > bill ? userExpense : Number(e.target.value)
          )
        }
      />

      <label>{selectedFriend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />

      <label>Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
   );
   }

7. Splitting a bill
   export default function App() {
   const [showAddFriend, setShowAddFriend] = useState(false);
   const [friends, setFriends] = useState(initialFriends);
   const [selectedFriend, setSelectedFriend] = useState(null);

   function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
   }

   function handleAddNewFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
   }

   function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      friend.id === selected?.id ? null : friend
    );
    setShowAddFriend(false);
  }

   function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
   }

   return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectFriend={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddNewFriend={handleAddNewFriend} />}
        <Button handleClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
   );
   }

   function FormSplitBill({ selectedFriend, onSplitBill }) {
   const [bill, setBill] = useState("");
   const [userExpense, setUserExpense] = useState("");
   const friendExpense = bill ? bill - userExpense : "";
   const [whoIsPaying, setWhoIsPaying] = useState("user");

   function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userExpense) return;

    onSplitBill(whoIsPaying === "user" ? friendExpense : -userExpense);
   }

   return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > bill ? userExpense : Number(e.target.value)
          )
        }
      />

      <label>{selectedFriend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />

      <label>Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
   );
   }