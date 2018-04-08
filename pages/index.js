import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    {props.users.map((user) => (
      <details className="mar15 shadow-1 card" key={user.cell}>
      <summary
        title="click to open/close"
        style={{backgroundImage: `url(https://lipis.github.io/flag-icon-css/flags/4x3/${user.nat.toLowerCase()}.svg)`, backgroundSize: "cover"}}
      >
        <img
          src={user.picture.medium}
          alt="user thumbnail photo"
          className="mar15"
        />
        <div className="pad15 nameWrap">
          <div className="">
            {user.name.first[0].toUpperCase() + user.name.first.substr(1)}
          </div>
          <div className="" style={{marginLeft: '10px'}}>
            {user.name.last[0].toUpperCase() + user.name.last.substr(1)}
          </div>
        </div>
      </summary>
      <div className="subcardWrap">
        <div className="mar15 pad15 subcard">
          <h2> Contact Info </h2>
          <div className="pad15 flex">
            <div className="label"> Email: </div>
            <div className="labelInfo">
              <a href="mailto:{user.email}">
                {user.email}
              </a>
            </div>
          </div>
          <div className="pad15 flex">
            <div className="label"> Phone: </div>
            <div className="labelInfo">
              <a href="tel:{user.phone}">
                {user.phone}
              </a>
            </div>
          </div>
          <div className="pad15 flex">
            <div className="label"> Mobile: </div>
            <div className="labelInfo">
              <a href="tel:{user.cell}">
                {user.cell}
              </a>
            </div>
          </div>
        </div>

        <div className="mar15 pad15 subcard">
          <h2> Location </h2>
          <address>
            <div className="pad15">
              {user.location.street[0].toUpperCase() + user.location.street.substr(1)}
            </div>
            <div className="pad15">
              {user.location.city[0].toUpperCase() + user.location.city.substr(1)}
            </div>
            <div className="pad15">
              {user.location.state[0].toUpperCase() + user.location.state.substr(1)}
            </div>
            <div className="pad15">
              {user.location.postcode}
            </div>
          </address>
        </div>

        <div className="mar15 pad15 subcard">
          <h2> Member Info </h2>
          <div className="pad15 flex">
            <div className="label"> Member Since: </div>
            <div className="labelInfo"> {user.registered} </div>
          </div>
          <div className="pad15 flex">
            <div className="label"> Birthday: </div>
            <div style={{marginLeft: "10px", fontWeight: "bold"}}> {user.dob} </div>
          </div>
        </div>
      </div>
      </details>
    ))}
    <style  jsx>{`
      h2 { text-align: center; }
      address {
        font-weight: bold;

      }

      .card {
        background-color: #F5F5F5;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        width: 240px;
      }

      /* REMOVE DETAILS/SUMMARY CARAT/TRIANGLE */
      details > summary {
        list-style: none;
      }

      details > summary::-webkit-details-marker {
        display: none;
      }

      details[open] {
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 5px 0 0 0;
        overflow-y: auto;
      }
      summary {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        flex-direction: column;
      }
      summary:focus {
        outline: none;
      }
      summary img {
        border-radius: 100%;
        border: 1px solid;
      }
      .nameWrap {
        display: flex;
        margin-bottom: 15px;
        background-color: #F5F5F5;
        border-radius: 5px;
      }
      .subcardWrap {
        padding-top: 50px;
        display: flex;
        justify-content: space-around;
      }
      .subcard {
        border: 2px solid white;
        background-color: #E0E0E0;
      }
      .label {
        width: 115px;
        text-align: right;
      }
      .labelInfo {
        margin-left: 10px;
        font-weight: bold;
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async ({query}) => {
  console.log('query', query)

  const res = await fetch(`https://randomuser.me/api/?results=${query.num ? query.num : 3 }`)
  const json = await res.json()

  {/* console.log(json) */}


  return { users: json.results }
}

export default Index
