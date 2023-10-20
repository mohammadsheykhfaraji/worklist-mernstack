

function Menu() {
    return (
      <div >
         <nav className="nav container">
          <h2 className="nav_logo"><a href="#">CodingNepal</a></h2>

          <ul className="menu_items">
            <img src="images/times.svg" alt="timesicon" id="menu_toggle" />
            <li><link  className="nav_link">Home</link></li>
            
          </ul>
          <img src="./images/bars.svg" alt="timesicon" id="menu_toggle" />
        </nav>
      </div>
    );
  }
  
  export default Menu;
  