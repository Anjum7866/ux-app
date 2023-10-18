import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div  className="nav-md">    
    <div className="container body">
      <div className="main_container">
       <Navbar/>

        <div className="top_nav">
            <div className="nav_menu">
                <div className="nav toggle">
                  <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                </div>
                <nav className="nav navbar-nav">
                <ul className=" navbar-right">
                  <li className="nav-item dropdown open" >
                    <a href="javascript:;" className="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                      <img src="images/img.jpg" alt=""/>John Doe
                    </a>
                    <div className="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item"  href="javascript:;"> Profile</a>
                        <a className="dropdown-item"  href="javascript:;">
                          <span className="badge bg-red pull-right">50%</span>
                          <span>Settings</span>
                        </a>
                    <a className="dropdown-item"  href="javascript:;">Help</a>
                      <a className="dropdown-item"  href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a>
                    </div>
                  </li>
  
                  <li role="presentation" className="nav-item dropdown open">
                    <a href="javascript:;" className="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
                      <i className="fa fa-envelope-o"></i>
                      <span className="badge bg-green">6</span>
                    </a>
                    <ul className="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
                      <li className="nav-item">
                        <a className="dropdown-item">
                          <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span className="time">3 mins ago</span>
                          </span>
                          <span className="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item">
                          <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span className="time">3 mins ago</span>
                          </span>
                          <span className="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item">
                          <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span className="time">3 mins ago</span>
                          </span>
                          <span className="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item">
                          <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span className="time">3 mins ago</span>
                          </span>
                          <span className="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <div className="text-center">
                          <a className="dropdown-item">
                            <strong>See All Alerts</strong>
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
     
        <div className="right_col" role="main">
          <div className="">

            <div className="page-title">
              <div className="title_left">
                <h3>Inbox Design <small>Some examples to get you started</small></h3>
              </div>

              <div className="title_right">
                <div className="col-md-5 col-sm-5   form-group pull-right top_search">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..."/>
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="button">Go!</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix"></div>

            <div className="row">
              <div className="col-md-12">
                <div className="x_panel">
                  <div className="x_title">
                    <h2>Inbox Design<small>User Mail</small></h2>
                    <ul className="nav navbar-right panel_toolbox">
                      <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Settings 1</a>
                            <a className="dropdown-item" href="#">Settings 2</a>
                          </div>
                      </li>
                      <li><a className="close-link"><i className="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">
                    <div className="row">
                      <div className="col-sm-3 mail_list_column">
                        <button id="compose" className="btn btn-sm btn-success btn-block" type="button">COMPOSE</button>
                        <a href="#">
                          <div className="mail_list">
                            <div className="left">
                              <i className="fa fa-circle"></i> <i className="fa fa-edit"></i>
                            </div>
                            <div className="right">
                              <h3>Dennis Mugo <small>3.00 PM</small></h3>
                              <p>Ut enim ad minim veniam, quis nostrud exercitation enim ad minim veniam, quis nostrud exercitation...</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="mail_list">
                            <div className="left">
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="right">
                              <h3>Jane Nobert <small>4.09 PM</small></h3>
                              <p><span className="badge">To</span> Ut enim ad minim veniam, quis nostrud exercitation enim ad minim veniam, quis nostrud exercitation...</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="mail_list">
                            <div className="left">
                              <i className="fa fa-circle-o"></i><i className="fa fa-paperclip"></i>
                            </div>
                            <div className="right">
                              <h3>Musimbi Anne <small>4.09 PM</small></h3>
                              <p><span className="badge">CC</span> Ut enim ad minim veniam, quis nostrud exercitation enim ad minim veniam, quis nostrud exercitation...</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="mail_list">
                            <div className="left">
                              <i className="fa fa-paperclip"></i>
                            </div>
                            <div className="right">
                              <h3>Jon Dibbs <small>4.09 PM</small></h3>
                              <p>Ut enim ad minim veniam, quis nostrud exercitation enim ad minim veniam, quis nostrud exercitation...</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="mail_list">
                            <div className="left">
                              .
                            </div>
                            <div className="right">
                              <h3>Debbis & Raymond <small>4.09 PM</small></h3>
                              <p>Ut enim ad minim veniam, quis nostrud exercitation enim ad minim veniam, quis nostrud exercitation...</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="mail_list">
                            <div className="left">
                              .
                            </div>
                            <div className="right">
                              <h3>Debbis & Raymond <small>4.09 PM</small></h3>
                              <p>Ut enim ad minim veniam, quis nostrud exercitation enim ad minim veniam, quis nostrud exercitation...</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="mail_list">
                            <div className="left">
                              <i className="fa fa-circle"></i> <i className="fa fa-edit"></i>
                            </div>
                            <div className="right">
                              <h3>Dennis Mugo <small>3.00 PM</small></h3>
                              <p>Ut enim ad minim veniam, quis nostrud exercitation enim ad minim veniam, quis nostrud exercitation...</p>
                            </div>
                          </div>
                        </a>
                        <a href="#">
                          <div className="mail_list">
                            <div className="left">
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="right">
                              <h3>Jane Nobert <small>4.09 PM</small></h3>
                              <p>Ut enim ad minim veniam, quis nostrud exercitation enim ad minim veniam, quis nostrud exercitation...</p>
                            </div>
                          </div>
                        </a>
                      </div>
                     
                      <div className="col-sm-9 mail_view">
                        <div className="inbox-body">
                          <div className="mail_heading row">
                            <div className="col-md-8">
                              <div className="btn-group">
                                <button className="btn btn-sm btn-primary" type="button"><i className="fa fa-reply"></i> Reply</button>
                                <button className="btn btn-sm btn-default" type="button"  data-placement="top" data-toggle="tooltip" data-original-title="Forward"><i className="fa fa-share"></i></button>
                                <button className="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Print"><i className="fa fa-print"></i></button>
                                <button className="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Trash"><i className="fa fa-trash-o"></i></button>
                              </div>
                            </div>
                            <div className="col-md-4 text-right">
                              <p className="date"> 8:02 PM 12 FEB 2014</p>
                            </div>
                            <div className="col-md-12">
                              <h4> Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum.</h4>
                            </div>
                          </div>
                          <div className="sender-info">
                            <div className="row">
                              <div className="col-md-12">
                                <strong>Jon Doe</strong>
                                <span>(jon.doe@gmail.com)</span> to
                                <strong>me</strong>
                                <a className="sender-dropdown"><i className="fa fa-chevron-down"></i></a>
                              </div>
                            </div>
                          </div>
                          <div className="view-mail">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            <p>Riusmod tempor incididunt ut labor erem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum.</p>
                            <p>Modesed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          </div>
                          <div className="attachment">
                            <p>
                              <span><i className="fa fa-paperclip"></i> 3 attachments — </span>
                              <a href="#">Download all attachments</a> |
                              <a href="#">View all images</a>
                            </p>
                            <ul>
                              <li>
                                <a href="#" className="atch-thumb">
                                  <img src="images/inbox.png" alt="img" />
                                </a>

                                <div className="file-name">
                                  image-name.jpg
                                </div>
                                <span>12KB</span>


                                <div className="links">
                                  <a href="#">View</a> -
                                  <a href="#">Download</a>
                                </div>
                              </li>

                              <li>
                                <a href="#" className="atch-thumb">
                                  <img src="images/inbox.png" alt="img" />
                                </a>

                                <div className="file-name">
                                  img_name.jpg
                                </div>
                                <span>40KB</span>

                                <div className="links">
                                  <a href="#">View</a> -
                                  <a href="#">Download</a>
                                </div>
                              </li>
                              <li>
                                <a href="#" className="atch-thumb">
                                  <img src="images/inbox.png" alt="img" />
                                </a>

                                <div className="file-name">
                                  img_name.jpg
                                </div>
                                <span>30KB</span>

                                <div className="links">
                                  <a href="#">View</a> -
                                  <a href="#">Download</a>
                                </div>
                              </li>

                            </ul>
                          </div>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-primary" type="button"><i className="fa fa-reply"></i> Reply</button>
                            <button className="btn btn-sm btn-default" type="button"  data-placement="top" data-toggle="tooltip" data-original-title="Forward"><i className="fa fa-share"></i></button>
                            <button className="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Print"><i className="fa fa-print"></i></button>
                            <button className="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Trash"><i className="fa fa-trash-o"></i></button>
                          </div>
                        </div>

                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <footer>
          <div className="pull-right">
            Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
          </div>
          <div className="clearfix"></div>
        </footer>
       </div>
    </div>
    </div>
  )
}

export default App
