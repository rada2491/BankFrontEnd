import React from 'react';
import { Link } from 'react-router-dom'
import './style.scss';

/*class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: this.props.item,
      site: ''
    }
  }

  render() {
    const { items } = this.state;*/
const Aside = ({ items }) => {
  //const { items } = this.props
  //<Link key={items.id} to={{ pathname: `/details/${items.id}`, state: { url: items.id } }}>{items.caption}</Link>
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <aside className="left-side sidebar-offcanvas">
            <section className="sidebar">
              <ul className="sidebar-menu">
                <li>
                  <a href="#">
                    <i className="fa fa-info"></i> <span>Dashboard</span>
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    <i className="fa fa-user-circle-o"></i> <span>Clientes</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fa fa-calendar"></i> <span>Citas</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-medkit"></i> <span>Productos</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-motorcycle"></i> <span>Servicio Domicilio</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-user"></i> <span>Usuarios</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-user-md"></i> <span>Personal</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-home"></i> <span>Página Web</span>
                  </a>
                  <Link to='/panel1'>lala</Link>
                  <Link to='/panel2'>lala</Link>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Aside;