import React, { useState } from "react";
import rowdata from "../../constant/rawdata";
import "./allinventory.style.css";
import FolderIcon from '@mui/icons-material/Folder';  
import GroupIcon from '@mui/icons-material/Group';

import {
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaShareAlt,
  FaTasks,
  FaPlus,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { paths } from "../../allRoutes/paths";
import IMAGES from "../../assets/Image";

export default function AllInventory() {
  const inventoryList = rowdata.inventoryList;
  const totalProducts = rowdata.inventoryList.length;
  const activeProducts = rowdata.inventoryList.filter(
    (item) => item.status === "Published"
  ).length;
  const lowStockCount = rowdata.inventoryList.filter(
    (item) => parseInt(item.in_stock) < 10
  ).length;
  const expiredCount = rowdata.inventoryList.filter(
    (item) => item.status === "Expired"
  ).length;

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = inventoryList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePageSelectChange = (e) => {
    setCurrentPage(parseInt(e.target.value));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = inventoryList.slice(startIndex, endIndex);

  const navigate = useNavigate();

  const handleNewItem = () => {
    navigate(paths.new_inventory);
  };

  const handleViewInventory = (id) => {
    const selectedProduct = inventoryList.find((product) => product.id === id);
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    navigate(paths.view_inventory);
  };

  const [selectedItems, setSelectedItems] = useState({});

  const handleCheckboxChange = (id) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleSelectAllChange = () => {
    const allSelected = currentItems.every((item) => selectedItems[item.id]);
    const newSelectedItems = {};
    currentItems.forEach((item) => {
      newSelectedItems[item.id] = !allSelected;
    });
    setSelectedItems(newSelectedItems);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="container">
        <h6 className="Inventory_dash_head">Inventory Dashboard</h6>
        <button id="add_item_btn" onClick={handleNewItem}>
          <FaPlus /> Add New Item
        </button>
      </div>
      <div className="banners">
        <div className="left_banner">
          <div className="banner_Items">
            <span style={{width:"40px", display:"flex", justifyContent:"center", alignItems:"center", height:"40px", borderRadius:"10px", backgroundColor:"#FFCC9129"}}><FolderIcon  /></span>

          </div>
          <div
            className="banner_Items"
            style={{ justifyContent: "flex-start", columnGap: "20%" }}
          >
            <div>
              <span>All Product</span>
              <span> {lowStockCount}</span>
            </div>
            <div>
              <span>Active</span>
              <span>316 86%</span>{" "}
            </div>
          </div>
        </div>
        <div
          className="right_banner"
          style={{ background: "#FFFFFF", color: "black" }}
        >
          <div className="banner_Items">
            <span style={{width:"40px", display:"flex", justifyContent:"center", alignItems:"center", height:"40px", borderRadius:"10px", backgroundColor:"#FFCC9129"}}><GroupIcon  /></span>
            <div>Active Products: {activeProducts}</div>
          </div>
          
          <div className="banner_Items">
            <div>
              <span style={{ color: "#CC5F5F" }}>Low Stock Items</span>
              <span> {lowStockCount}</span>
            </div>
            <div>
              <span style={{ color: "#8B8D97" }}>Expired Items</span>
              <span>{expiredCount}</span>{" "}
            </div>
            <div>
              <span style={{ color: "#8B8D97" }}>1 star Rating</span>
              <span> {expiredCount}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="inventory-header" style={{ marginTop: "1.2rem" }}>
        <h5 className="inventory-title">Inventory Items</h5>
        <div className="button-group">
          <button id="search">
            <FaSearch /> Search
          </button>
          <button>
            <FaFilter /> Filter
          </button>
          <button>
            <FaCalendarAlt /> Calendar
          </button>
          <button>
            <FaShareAlt /> Share
          </button>
          <button>
            <FaTasks /> Bulk Action
          </button>
        </div>
      </div>
      <table
        style={{ width: "100%", borderCollapse: "collapse", padding: "10px" }}
      >
        <thead style={{ backgroundColor: "white", padding: "50px" }}>
          <tr style={{ padding: "30px", height: "30px" }}>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAllChange}
                checked={currentItems.every((item) => selectedItems[item.id])}
              />
            </th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Unit Price</th>
            <th>In Stock</th>
            <th>Discount</th>
            <th>Total value</th>
            <th>Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr
              key={item.id}
              style={{ textAlign: "center", backgroundColor: "#fdfdfe" }}
            >
              <td style={{ padding: "10px" }}>
                <input
                  type="checkbox"
                  checked={selectedItems[item.id] || false}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              <td
                style={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "10px",
                  alignItems: "center",
                  width: "180px",
                  cursor: "pointer",
                }}
                onClick={() => handleViewInventory(item.id)}
              >
                <img
                  src={
                    item.category === "Electronics"
                      ? IMAGES.mobile
                      : IMAGES.tshert
                  }
                  alt="tshert"
                />
                {item.pro_name}
              </td>
              <td style={{ padding: "10px" }}>{item.category}</td>
              <td style={{ padding: "10px" }}>{item.unit_price}</td>
              <td style={{ padding: "10px" }}>{item.in_stock}</td>
              <td style={{ padding: "10px" }}>{item.discount}</td>
              <td style={{ padding: "10px" }}>{item.total_value}</td>
              <td style={{ padding: "10px" }}>
                <select value="Select status" className="dropdown-select">
                  <option disabled>Select status</option>
                  <option>Publish</option>
                  <option>Unpublish</option>
                </select>
              </td>
              <td style={{ padding: "10px" }}>
                <span
                  className="dropdown-select"
                  style={{
                    background:
                      item.status === "Published" ? "#FFF2E2" : "#5570F129",
                    width: "120px",
                    borderRadius: "10px",
                    padding: "4px 10px",
                  }}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-section">
        <div className="left-pagination">
          <select
            onChange={handleItemsPerPageChange}
            className="page-select"
            value={itemsPerPage}
            style={{ background: "#5E636614" }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <span>Items per page</span>

          <span>{` ${startIndex + 1} to ${Math.min(
            endIndex,
            totalItems
          )} of  ${totalItems} items`}</span>
        </div>

        <div className="right-pagination">
          <div className="page-buttons">
            <select
              className="page-select"
              value={currentPage}
              onChange={handlePageSelectChange}
              style={{ background: "#5E636614" }}
            >
              {Array.from({ length: totalPages }, (_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            <span>of {totalPages} pages</span>

            <span
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {"<"}
            </span>

            <span
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {">"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
