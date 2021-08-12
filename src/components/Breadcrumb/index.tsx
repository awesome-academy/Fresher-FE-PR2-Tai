const Breadcrumb = () => {
  return (
    <div className='breadcrumb-section breadcrumb-bg-color--golden'>
      <div className='breadcrumb-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='breadcrumb-title'>Cart</h3>
              <div className='breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden'>
                <nav aria-label='breadcrumb'>
                  <ul>
                    <li>
                      <a href='index.html'>Home</a>
                    </li>
                    <li>
                      <a href='shop-grid-sidebar-left.html'>Shop</a>
                    </li>
                    <li className='active' aria-current='page'>
                      Cart
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
