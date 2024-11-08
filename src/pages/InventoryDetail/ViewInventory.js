import React, { useState,useEffect } from 'react';
import './view.c.style.css';
import { AiOutlineDown } from 'react-icons/ai';
import { FaSearch, FaFilter, FaCalendarAlt, FaShareAlt, FaTasks } from 'react-icons/fa';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import IMAGES from '../../assets/Image';
const ViewInventory = () => {
 
  const options = ["last 1 week","last 1 month" ,"last 1 year", ];
  const [products, setProducts] = useState({}); 

  useEffect(() => {
    const storedProducts = localStorage.getItem('selectedProduct');
    
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);
  const product = {
    name: "Product A",
    dateAdded: "2024-11-01",
    imageURL: "https://via.placeholder.com/100",
    details: "This is",
    lastOrder: "2024-11-07",
    stock: 150,
    price: 200,
    totalOrders: 50,
    favorites: 120
  };
console.log(products)
  const OrderTable = () => {
    const initialOrders = [
      { id: 1, orderData: '2024-11-08', unitPrice: 50, quantity: 3, discount: '10%', orderTotal: 135, status: 'Delivered' },
      { id: 2, orderData: '2024-11-06', unitPrice: 75, quantity: 2, discount: '5%', orderTotal: 142.5, status: 'Pending' },
      { id: 3, orderData: '2024-11-04', unitPrice: 20, quantity: 10, discount: '15%', orderTotal: 170, status: 'Shipped' },
    ];

    const [orders, setOrders] = useState(initialOrders);
    const [filters, setFilters] = useState({});
    const [selectedRows, setSelectedRows] = useState([]);
    const [showFilter, setShowFilter] = useState({}); 

    const handleFilterChange = (e, field) => {
      const value = e.target.value;
      setFilters({ ...filters, [field]: value });

      const filteredOrders = initialOrders.filter((order) =>
        String(order[field]).toLowerCase().includes(value.toLowerCase())
      );
      setOrders(filteredOrders);
    };

    const handleSelectAll = (e) => {
      const checked = e.target.checked;
      if (checked) {
        setSelectedRows(orders.map((order) => order.id));
      } else {
        setSelectedRows([]);
      }
    };
    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString();

    const handleRowSelect = (id) => {
      if (selectedRows.includes(id)) {
        setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
      } else {
        setSelectedRows([...selectedRows, id]);
      }
    };

    const toggleFilter = (field) => {
      setShowFilter({
        ...showFilter,
        [field]: !showFilter[field],
      });
    };

    const FilterIcon = () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="14"
        height="14"
        className="filter-icon"
      >
        <path d="M3 6h18v2H3V6zm4 5h10v2H7v-2zm3 5h4v2h-4v-2z" fill="currentColor" />
      </svg>
    );

    return (
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRows.length === orders.length}
                />
              </th>
              {['orderData', 'unitPrice', 'quantity', 'discount', 'orderTotal', 'status'].map((field) => (
                <th key={field}>
                  <div className="header-cell">
                    {field.replace(/([A-Z])/g, ' $1')}
                    <FilterIcon
                      className="filter-icon"
                      onClick={() => toggleFilter(field)}
                    />
                    {showFilter[field] && (
                      <input
                        type="text"
                        placeholder="Filter"
                        onChange={(e) => handleFilterChange(e, field)}
                        className="filter-input"
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(order.id)}
                    onChange={() => handleRowSelect(order.id)}
                  />
                </td>
                <td>{order.orderData}</td>
                <td>{order.unitPrice}</td>
                <td>{order.quantity}</td>
                <td>{order.discount}</td>
                <td>{order.orderTotal}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div className="inventoryViewContainer">
      <div className='top_banners'>
        <div className="View_item_heading">
        <h3>{products.pro_name}</h3>
        <p><strong>Date added:</strong> {product.dateAdded}</p>
        <p><strong>Product Image URL:</strong> {product.imageURL}</p></div>
        <div className='btn_group'> <button style={{  backgroundColor: "black"}}>Edit Product   <AiOutlineDown size={14} /></button><button style={{background:"#CC5F5F"}}>Unpublish product</button></div>
      </div>

      <div className='top_banners'>
      <div className="item_detail_banner" >
          <img src={products.category === "Electronics" ? IMAGES.mobile : IMAGES.tshert} alt="Product"style={{
            height: '130px', 
            width: '130px', 
            objectFit: 'contain', 
            display: 'block',
            margin: '0 auto' 
        }}  />
        </div>
        <div className="item_detail_banner">
        <div className='top_value'>
           <span><strong>Last order</strong>{formattedDate}</span>
           <select
        className="dropdown-select"
      >
        <option disabled>Select status</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
          <div>
          
         </div>
        </div>
        <div className='top_value'>
        <div  className='item_value'><span>Price</span><span>0</span>  </div>
        <div  className='item_value'><span>In stock</span><span>0</span>  </div>
        <div>
         
         </div>
        </div>
        </div>

        <div className="item_detail_banner">
        <div className='top_value'>
           <span style={{width:"40px", display:"flex", justifyContent:"center", alignItems:"center", height:"40px", borderRadius:"10px", backgroundColor:"#5570F114"}}><DonutLargeIcon  /></span>
           <select
        className="dropdown-select"
      >
        <option disabled>Select status</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>          <div>
          
         </div>
        </div>
        <div className='top_value'>
        <div  className='item_value'><span>Total orders</span><span>0</span>  </div>
        <div>
         
         </div>
        </div>
        </div>
        <div className="item_detail_banner">
        <div className='top_value'>
        <span style={{width:"40px", display:"flex", justifyContent:"center", alignItems:"center", height:"40px", borderRadius:"10px",backgroundColor:"#FFCC9133"}}><VisibilityIcon  /></span>
        <select
        className="dropdown-select"
      >
        <option disabled>Select status</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>          <div>
          
         </div>
        </div>
        <div className='top_value'>
        <div  className='item_value'><span>View</span><span>1200</span>  </div>

        <div  className='item_value'><span>Favourite</span><span>0</span>  </div>
        <div>
         
         </div>
        </div>
        </div>

        </div>
        <div className='banners' >    
  
  <div  className='left_banner' style={{backgroundColor:"#ffff",color:"black"}}>
  <div className='banner_Items'>
          <div>  <div   style={{width:"40px", display:"flex", justifyContent:"center", alignItems:"center", height:"40px", borderRadius:"10px",backgroundColor:"#FFCC9133"}}><ShoppingBagIcon /></div> </div>
          <select
        className="dropdown-select"
      >
        <option disabled>Select status</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>      </div>
    <div className='banner_Items'>
          <div  className='item_value'><span>All orders</span><span>20</span> </div>
          <div className='item_value'><span>Pending</span><span>9</span>  </div>
          <div  className='item_value'><span>Completed</span><span>0</span>  </div>

      </div>
      </div>
      <div className='right_banner' style={{background:" #FFFFFF", color:"black"}}>
      <div className='banner_Items'>
          <div><div   style={{width:"40px", display:"flex", justifyContent:"center", alignItems:"center", height:"40px", borderRadius:"10px",backgroundColor:"#FFCC9133"}}><ShoppingBagIcon /></div></div>
          <select
        className="dropdown-select"
      >
        <option disabled>Select status</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>  
      </div>
        <div  className='banner_Items'>

          <div className='item_value'><span>Canceled</span><span></span>20 </div>
          <div  className='item_value'><span>Returned</span><span>2</span> </div>
          <div  className='item_value'><san>Damaged</san> <span>30</span></div>

        </div>
      </div>
      </div> 
      
      <div className="order-table">
      <div className="inventory-header">
                <h5 className="inventory-title">Purchases</h5>
                <div className="button-group">
                    <button id='search'><FaSearch /> Search</button>
                    <button><FaFilter /> Filter</button>
                    <button><FaCalendarAlt /> Calendar</button>
                    <button><FaShareAlt /> Share</button>
                    <button><FaTasks /> Bulk Action</button>
                </div>
            </div>
        <OrderTable />
      </div>
    </div>
  );
};

export default ViewInventory;
