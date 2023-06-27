import React from "react";
import "./stylos.css";

const Dasboard = () => {
    
    return (
        <div className="wrapper">
          <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#">
                  <i className="fas fa-bars"></i>
                </a>
              </li>
            </ul>
          </nav>
    
          <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="#" className="brand-link">
              <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>
    
            <div className="sidebar">
              <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-tachometer-alt"></i>
                      <p>
                        Dashboard
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-th"></i>
                      <p>
                        Widgets
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="nav-icon fas fa-copy"></i>
                      <p>
                        Layout Options
                      </p>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
    
          <div className="content-wrapper">
            <section className="content-header">
              <h1>
                Dashboard
              </h1>
            </section>
    
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>John</td>
                          <td>Doe</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jane</td>
                          <td>Smith</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Mike</td>
                          <td>Johnson</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>
    
          <footer className="main-footer">
            <strong>Footer text</strong>
          </footer>
        </div>
      );
    };
    
  
  export default Dasboard;