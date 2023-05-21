import { useState } from "react";

function FruitListItem(props) {
  const handleClick = () => {
    console.log("clicked");
  };
  return <li onClick={handleClick}>{props.fruit.name}</li>;
}

function FruitList(props) {
  const fruitListItems = props.fruits.map((fruit) => (
    <FruitListItem key={fruit.id} fruit={fruit} />
  ));
  return <ul>{fruitListItems}</ul>;
}

const data = [
  { id: 1, name: "apple" },
  { id: 2, name: "orange" },
  { id: 3, name: "blueberry" },
  { id: 4, name: "banana" },
  { id: 5, name: "kiwi" },
];

export const Example = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password, department);
  };

  return (
    <div>
      <FruitList fruits={data} />
      <button onClick={(e) => setCount(count + 1)}>click</button>
      <p>{count}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <select
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="hr">Human Resources</option>
          <option value="pr">Public Relations</option>
          <option value="support">Support</option>
        </select>
        <input
          type="checkbox"
          name="agreedToTerms"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
