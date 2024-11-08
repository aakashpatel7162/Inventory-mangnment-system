import React, { useState } from "react";
import "./new.inventory.style.css";
import { AiOutlineDown } from 'react-icons/ai';

export default function Inventory() {
  const [productData, setProductData] = useState({
    productName: "",
    category: "",
    costPrice: "",
    sellingPrice: "",
    quantity: "",
    orderType: "",
    enableDiscount: false,
    discountType: "",
    discountValue: "",
    enableExpiration: false,
    expirationDate: "",
    shortDescription: "",
    longDescription: "",
    returnPolicy: false,
    dateAdded: "",
    date: '',
    timeTaken: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  console.log(productData, "productData");
  function applyBold() {
    document.execCommand('bold');
  }
  
  function applyItalic() {
    document.execCommand('italic');
  }
  
  function applyUnderline() {
    document.execCommand('underline');
  }
  
  function applySpace() {
    let textarea = document.querySelector('.description-textarea');
    let cursorPos = textarea.selectionStart;
    let text = textarea.value;
    textarea.value = text.slice(0, cursorPos) + ' ' + text.slice(cursorPos);
    textarea.setSelectionRange(cursorPos + 1, cursorPos + 1);
  }
  

  return (
    <div className="inventory-container">
      <div className="new_inventory_detail"><span>New inventory item</span> <div> <button style={{  backgroundColor: "black", display:"flex", alignItems:"center", columnGap:"5%", justifyContent:"center"}}>Save as draft   <AiOutlineDown size={14} /></button><button>Save & public</button></div></div>
      <div className="left-section">
         <div className="input-fields-section">
          <form>
            <input
              type="text"
              name="productName"
              value={productData.productName}
              onChange={handleChange}
              placeholder="Product Name"
            />
            <select
              name="category"
              value={productData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
            </select>
            <input
              type="number"
              name="costPrice"
              value={productData.costPrice}
              onChange={handleChange}
              placeholder="Cost Price"
            />
            <input
              type="number"
              name="sellingPrice"
              value={productData.sellingPrice}
              onChange={handleChange}
              placeholder="Selling Price"
            />
            <input
              type="number"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              placeholder="Quantity in Stock"
            />
            <select
              name="orderType"
              value={productData.orderType}
              onChange={handleChange}
            >
              <option value="">Select Order Type</option>
              <option value="pre-order">Pre-order</option>
              <option value="in-stock">In Stock</option>
            </select>

            <div className="toggle-section">
                <div>Enable Discount  <label className="switch">
                <input
                  type="checkbox"
                  name="enableDiscount"
                  checked={productData.enableDiscount}
                  onChange={handleChange}
                />
                <span className="slider"></span>
              </label></div>
             
              {productData.enableDiscount && (
                <div className="discount-fields">
                  <input
                    type="text"
                    name="discountType"
                    value={productData.discountType}
                    onChange={handleChange}
                    placeholder="Discount Type"
                  />
                  <input
                    type="number"
                    name="discountValue"
                    value={productData.discountValue}
                    onChange={handleChange}
                    placeholder="Discount Value"
                  />
                </div>
              )}
            </div>

            <div className="toggle-section" >
                <div >Enable Expiration Date  <label className="switch">
                <input
                  type="checkbox"
                  name="enableExpiration"
                  checked={productData.enableExpiration}
                  onChange={handleChange}
                />
                <span className="slider"></span>
              </label></div>
             
              {productData.enableExpiration && (
                <input
                  type="date"
                  name="expirationDate"
                  value={productData.expirationDate}
                  onChange={handleChange}
                  style={{width:"94%"}}
                />
              )}
            </div>
          </form>
          <div className="descriptions-section">
          <textarea
            name="shortDescription"
            value={productData.shortDescription}
            onChange={handleChange}
            placeholder="Short Description"
          ></textarea>









<div class="description-container">
  <div class="text-options">
    <button class="format-btn" onClick="applyBold">
      <i class="fa fa-bold"></i>
    </button>
    <button class="format-btn" onClick="applyItalic">
      <i class="fa fa-italic"></i>
    </button>
    <button class="format-btn" onClick="applyUnderline">
      <i class="fa fa-underline"></i>
    </button>
    <button class="format-btn" onClick="applySpace">
      <i class="fa fa-space-shuttle"></i>
    </button>
  </div>

  <div
    contenteditable="true"
    class="description-textarea"
    placeholder="Long Description"
  ></div>
</div>




















<div className="toggle-section">
  <div>Return policy  
    <label className="switch">
      <input
        type="checkbox"
        name="returnPolicy"  
        checked={productData.returnPolicy}
        onChange={handleChange}
      />
      <span className="slider"></span>
    </label>
  </div>
  
  {productData.returnPolicy && (
    <div className="discount-fields">
      <input
        type="text"
        name="returnPolicy"
        value={productData.returnPolicy}  
        onChange={handleChange}
        placeholder="Return Policy Details"
      />
      <input
        type="number"
        name="returnPolicy"
        value={productData.returnPolicy} 
        onChange={handleChange}
        placeholder="Return Policy Value"
      />
    </div>
  )}
</div>

         
<div className="discount-fields">
      <div className="input-container">
        <input
          type="date"
          name="date"
          value={productData.date}
          onChange={handleChange}
          placeholder="Select Date"
        />
      </div>

      <div className="input-container">
        <input
          type="time"
          name="timeTaken"
          value={productData.timeTaken}
          onChange={handleChange}
        />
      </div>
    </div>
        </div>
        </div>

        <div className="image-section">

        <div className="main-upload-box">
          <div className="upload-icon">
            <i className="fa fa-cloud-upload-alt"></i>
          </div>
          <button className="upload-button">Upload Image</button>
          <p className="upload-instructions">
            Upload a cover image for your product.
          </p>
          <p className="file-format">
            File Format: jpeg, jpg | Recommended Size: 600×600 (1:1)
          </p>
          <input type="file" accept="image/*" className="file-input" />
        </div>
        <h5 style={{textAlign:"left", width:"100%"}}>Additional Images</h5>

        <div className="additional-images">
          <div className="additional-image-box">
            <div className="upload-icon">
              <i className="fa fa-cloud-upload-alt"></i>
            </div>
            <button className="upload-button">Upload Image</button>
            <input type="file" accept="image/*" className="file-input" />
          </div>
          <div className="additional-image-box empty-box"></div>
        </div>
      </div>
      </div>

      
    </div>
  );
}
