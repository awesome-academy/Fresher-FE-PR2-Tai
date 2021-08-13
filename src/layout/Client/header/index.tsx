import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { selectProductTotalCarts } from '../../../features/product/productSlice';
import logo from './../../../assets/images/logo/logo_black.png';
const menuUser = (
  <Menu>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer'>
        Information
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
        Logout
      </a>
    </Menu.Item>
  </Menu>
);
const Header = () => {
  const totalCarts = useAppSelector(selectProductTotalCarts);

  return (
    <header className='header-section d-none d-xl-block'>
      <div className='header-wrapper'>
        <div className='header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 d-flex align-items-center justify-content-between'>
                <div className='header-logo'>
                  <div className='logo'>
                    <a href='index.html'>
                      <img src={logo} alt='logo' />
                    </a>
                  </div>
                </div>
                <div className='main-menu menu-color--black menu-hover-color--golden'>
                  <nav>
                    <ul>
                      <li>
                        <a href='about-us.html'>Home</a>
                      </li>
                      <li>
                        <a href='about-us.html'>Shop</a>
                      </li>
                      <li>
                        <a href='about-us.html'>Blog</a>
                      </li>
                      <li>
                        <a href='contact-us.html'>Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <ul className='header-action-link action-color--black action-hover-color--golden'>
                  <li>
                    <a href='#offcanvas-wishlish' className='offcanvas-toggle'>
                      <HeartOutlined />
                      <span className='item-count'>3</span>
                    </a>
                  </li>
                  <li>
                    <Link to='/cart' className='offcanvas-toggle'>
                      <ShoppingCartOutlined />
                      <span className='item-count'>{totalCarts}</span>
                    </Link>
                  </li>
                  <li>
                    <a href='#search'>
                      <Dropdown overlay={menuUser} placement='bottomRight'>
                        <Avatar icon={<UserOutlined />} />
                      </Dropdown>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
