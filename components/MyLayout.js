import Header from './Header'

const layoutStyle = {
  backgroundColor: '#FCE4EC',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header url={props.users} />
    <div className="usersArea">
      {props.children}
    </div>

    <style jsx>{`
      .usersArea {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        position: relative;
      }
    `}</style>
  </div>
)

export default Layout
