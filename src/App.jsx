/* eslint-disable react/prop-types */
import { useState, useEffect, useReducer, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

// destructuring array

const [firstCity, secondCity, thirdCity] = ['Lagos', 'Ajah', 'Ojoh'];

console.log(firstCity);

const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}
`;

const opts = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query }),
};

// custom hooks
function useInput(initVal) {
  const [val, setVal] = useState(initVal);
  return [
    { val, onChange: (e) => setVal(e.target.value) },
    () => setVal(initVal),
  ];
}

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <img height={150} src={avatar} alt="Ayobami" />
      <h3>{name}</h3>
      <h3>{location}</h3>
    </div>
  );
}

export function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>This is Lift</h1>
      <h1>{name}</h1>
      <p>{elevationGain}</p>
      <p>{status}</p>
    </div>
  );
}

const taheoPeaks = [
  { name: 'Freel', elevation: 10891 },
  { name: 'Monument', elevation: 10067 },
  { name: 'Pyramid', elevation: 9983 },
  { name: 'Tallac', elevation: 9735 },
];
const List = ({ data, renderItem, renderEmpty }) => {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};
export const Hello = () => {
  return (
    <div>
      <List
        data={taheoPeaks}
        renderEmpty={<p>This is Empty</p>}
        renderItem={(item) => (
          <>
            {item.name} - {item.elevation} ft.
          </>
        )}
      />
    </div>
  );
};

// fetching data from external api
export function Github() {
  const [data, setData] = useState(null);
  // handling api response state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const url = `https://api.github.com/users/Ayobami6`;
    const graphQlApiUrl = `https://snowtooth.moonhighway.com/`;
    async function getGithubData(url, opts = null) {
      try {
        const res = await fetch(url, opts);
        if (!res.ok) {
          setLoading(false);
          throw new Error('Some thing went wrong! Try again');
        }
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    // getGithubData(url);
    getGithubData(graphQlApiUrl, opts);
  }, []);
  const parsedData = JSON.stringify(data, null, 2);
  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (data) {
    console.log(data.data.allLifts[0]);
    return (
      <>
        {/* <GithubUser
          name={data.name}
          location={data.location}
          avatar={data.avatar_url}
        /> */}
        <div>
          {data.data.allLifts.map((lift, i) => (
            <Lift
              key={i}
              name={lift.name}
              elevationGain={lift.elevationGain}
              status={lift.status}
            />
          ))}
        </div>
        {/* <Lift name={ data.data.allLifts[0].name} /> */}
      </>
    );
  }
  return (
    <>
      <h1>Data</h1>
      {/* <p>{ parsedData }</p> */}
      {/* <p>{ data.location }</p> */}
    </>
  );
}

// App component
{
  /*Using destructuring instead of props*/
}
export function App({ random, library, dishes }) {
  let smiles = '😀';
  let em = '🥰';
  const [emotion, setEmotion] = useState('happy');
  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion]);
  {
    /* Dependecies array*/
  }

  const [checked, setChecked] = useState(false);

  const [marked, setMarked] = useReducer((marked) => !marked, false);

  // uncontrolled component
  const txtTitle = useRef();
  const hexColor = useRef();
  {
    /*Reahes out to UI element like form input element and get its value*/
  }

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    // alert(`${title} ${color}`)
    txtTitle.current.value = '';
    hexColor.current.value = '#000000';
    document.getElementById('submit').innerHTML = 'Form Submitted!';
  };

  return (
    <>
      {' '}
      {/*React fragment*/}
      {/*adding props value*/}
      <img
        height={200}
        alt="A restaurant"
        src="https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=600"
      ></img>
      <Header name="Ayo" />
      <h1>
        Getting Started! {random} {library}
      </h1>
      <h3>Current Emotion is {emotion}</h3>
      {/* button for change emotion */}
      <button onClick={() => setEmotion('sad')}>Change Emotion</button>
      <ul>
        <li>Monday {smiles}</li>
        <li>Tuesday {em}</li>
        <li>Wednesday</li>
        <li>Wednesday</li>
      </ul>
      <div>
        <input
          type="checkbox"
          value={checked}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor="">{checked ? 'checked' : 'not checked'}</label>
      </div>
      <div>
        <input type="checkbox" value={marked} onChange={setMarked} />
        <label htmlFor="">{marked ? 'marked' : 'unmarked'}</label>
      </div>
      <div>
        <form action="" onSubmit={submit}>
          <input type="text" ref={txtTitle} placeholder="color title..." />
          <input type="color" ref={hexColor} />
          <button type="submit">Add</button>
        </form>
      </div>
      <p id="submit"></p>
      <ul>
        {dishes.map((dish, i) => (
          <li key={i}>{dish}</li>
        ))}
      </ul>
      <Footer year={new Date().getFullYear()} />
    </>
  );
}
