function CardList({profiles}) {
    return (
      <div>
        {profiles.map(profile => <Card key={profile.id} profile={profile}/>)}
      </div>
    );
  }
  
  function Card({profile}) {
      return (
      <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
  
  function Form({updateProfiles}) {
    const [username, setUsername] = useState("");
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await axios.get(`https://api.github.com/users/${username}`);
      updateProfiles(response.data);
      setUsername("");
    };
    
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="GitHub username" 
          value={username}
          onChange = {(event) => setUsername(event.target.value)}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
  
  function App({title}) {
    const [profiles, setProfiles] = useState([]);
    
    const addNewProfile = (profileData) => {
      setProfiles([...profiles, profileData]);
    };
    
      return (
      <div>
        <div className="header">{title}</div>
        <Form updateProfiles={addNewProfile} />
        <CardList profiles={profiles}/>
      </div>
    );
  }
  
  ReactDOM.render(
      <App title="The GitHub Cards App" />,
    mountNode,
  );
  
  // *** The React 18 way:
  // root.render(
  //   <App title="The GitHub Cards App" />,
  // );