import React, {Component} from 'react';
import {
  CSidebar,
  CButtonToolbar,
  CSidebarNav,
  CSidebarNavItem,
  CSidebarNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CBadge,
  CButton,
  CButtonGroup
} from '@coreui/react';
import {
  CIcon
} from '@coreui/icons-react';

class Inbox extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="c-email-app mb-4">
          <div className="c-body">
            <CSidebar fixed={false} colorScheme="light">
              <CSidebarNav>
                  <CSidebarNavItem custom>
                    <CButton color="success" className="d-flex m-3" href="#/apps/email/inbox"><CIcon name="cil-inbox" className="mr-3" /> New email</CButton>
                  </CSidebarNavItem>
                  <CSidebarNavItem custom>
                    <CSidebarNavLink href="#/apps/email/inbox"><CIcon name="cil-inbox" className="c-nav-icon" /> Inbox <CBadge color="danger">4</CBadge></CSidebarNavLink>
                  </CSidebarNavItem>
                  <CSidebarNavItem custom>
                    <CSidebarNavLink href="#"><CIcon name="cil-star" className="c-nav-icon" /> Stared</CSidebarNavLink>
                  </CSidebarNavItem>
                  <CSidebarNavItem custom>
                    <CSidebarNavLink href="#"><CIcon name="cil-paper-plane" className="c-nav-icon" /> Sent</CSidebarNavLink>
                  </CSidebarNavItem>
                  <CSidebarNavItem custom>
                    <CSidebarNavLink href="#"><CIcon name="cil-trash" className="c-nav-icon" /> Trash</CSidebarNavLink>
                  </CSidebarNavItem>
                  <CSidebarNavItem custom>
                    <CSidebarNavLink href="#"><CIcon name="cil-bookmark" className="c-nav-icon" /> Important<CBadge color="info">5</CBadge></CSidebarNavLink>
                  </CSidebarNavItem>
              </CSidebarNav>
            </CSidebar>

            <main className="c-main">

              <CButtonToolbar className="p-3">
                <CButtonGroup>
                  <CButton color="light"><CIcon name="cil-envelope-closed" /></CButton>
                  <CButton color="light"><CIcon name="cil-star" /></CButton>
                  <CButton color="light"><CIcon name="cil-bookmark" /></CButton>
                </CButtonGroup>
                <CButtonGroup className={'mr-1'}>
                  <CButton color="light"><CIcon name="cil-share" /></CButton>
                  <CButton color="light"><CIcon name="cil-share-all" /></CButton>
                  <CButton color="light"><CIcon name="cil-share-boxed" /></CButton>
                </CButtonGroup>
                <CButton color="light" className={'mr-1'}><CIcon name="cil-trash" /></CButton>
                <CDropdown custom show={this.state.dropdownOpen} toggle={this.toggle}>
                  <CDropdownToggle caret color="light">
                    <CIcon name="cil-tags" />
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem>add label <CBadge color="danger">Home</CBadge></CDropdownItem>
                    <CDropdownItem>add label <CBadge color="info">Job</CBadge></CDropdownItem>
                    <CDropdownItem>add label <CBadge color="success">Clients</CBadge></CDropdownItem>
                    <CDropdownItem>add label <CBadge color="warning">News</CBadge></CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CButtonGroup className="c-float-right">
                  <CButton color="light"><CIcon name="cil-chevron-left" /></CButton>
                  <CButton color="light"><CIcon name="cil-chevron-right" /></CButton>
                </CButtonGroup>
              </CButtonToolbar>

              <div className="c-messages">

                <a className="c-message" href="#/apps/email/message">
                    <div className="c-message-actions"><CIcon name="cil-star" /></div>
                    <div className="c-message-details">
                      <div className="c-message-headers">
                        <div className="c-message-headers-from">Lukasz Holeczek</div>
                        <div className="c-message-headers-date"><CIcon name="cil-paperclip" /> Today, 3:47 PM</div>
                        <div className="c-message-headers-subject">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                      </div>
                      <div className="c-message-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    </div>
                </a>

                <a className="c-message c-message-read" href="#/apps/email/message">
                    <div className="c-message-actions"><CIcon name="cil-star" /></div>
                    <div className="c-message-details">
                      <div className="c-message-headers">
                        <div className="c-message-headers-from">Lukasz Holeczek</div>
                        <div className="c-message-headers-date"><CIcon name="cil-paperclip" /> Today, 3:47 PM</div>
                        <div className="c-message-headers-subject">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                      </div>
                      <div className="c-message-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                    </div>
                </a>

              </div>

            </main>

          </div>
        </div>
      </div>
    )
  }
}

export default Inbox;
