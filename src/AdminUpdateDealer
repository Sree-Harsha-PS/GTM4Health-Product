import React, { useState, useEffect } from "react";
import axios from "axios";
import { stateOptions, getCityOptionsByState } from "./cityOptions";

const EditDealerForm = ({ dealer, onUpdate, onCancel }) => {
  const [name, setName] = useState(dealer.name);
  const [city, setCity] = useState(dealer.city);
  const [dealerName, setDealerName] = useState(dealer.dealerName);
  const [role, setRole] = useState(dealer.role);
  const [mail, setMail] = useState(dealer.mail);
  const [phone, setPhone] = useState(dealer.phone);
  const [products, setProducts] = useState(dealer.products);
  const [state, setState] = useState(dealer.state);
  const [address, setAddress] = useState(dealer.address);
  const [web,setWeb] = useState(dealer.web)

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity("");
  };

  useEffect(() => {
    setName(dealer.name);
    setCity(dealer.city);
    setDealerName(dealer.docName);
    setRole(dealer.role);
    setMail(dealer.mail);
    setPhone(dealer.phone);
    setProducts(dealer.products);
    setState(dealer.state);
    setAddress(dealer.address);
    setWeb(dealer.web);
  }, [dealer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      name,
      city,
      dealerName,
      role,
      mail,
      phone,
      products,
      state,
      address,
      web,
    };
    onUpdate(dealer._id, updatedData);
  };

  const renderCityOptions = () => {
    const cities = getCityOptionsByState(state);
    if(!state)
      return     <option disabled value=''> State is Mandatory field * </option>
    return cities.map((city) => (
      <option key={city.value} value={city.value}>
        {city.label}
      </option>
    ));
  };

  const renderStateOptions = () => {
    return stateOptions.map((state) => (
      <option key={state.value} value={state.value}>
        {state.label}
      </option>
    ));
  };

  return (
    <div className="edit-form">
      <h2>Edit Dealer-Distributors</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State *</label>
          <select id="state" value={state} onChange={handleStateChange}>
            <option disabled value="">
              Select State
            </option>
            {renderStateOptions()}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City *</label>
          <select
            id="city"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option disabled hidden value="">
              Select City
            </option>
            {renderCityOptions()}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="prod">Products Managed</label>
          <textarea
            id="prod"
            value={products}
            onChange={(e) => setProducts(e.target.value)}
            placeholder="Products Managed & Services"
            className="textarea"
          ></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="addrx">Address :</label>
            <textarea
              id="addrx"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="form-outline textarea addrx"
            ></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="name">Website :</label>
            <input
              type="text"
              id="name"
              value={web}
              onChange={(e) => setWeb(e.target.value)}
              placeholder="Company Website"
              className="form-outline"
            />
        </div>
        <div className="form-group">
          <label htmlFor="dName">Contact Name</label>
          <input
            type="text"
            id="dName"
            value={dealerName}
            onChange={(e) => setDocName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dSpez">Role</label>
          <input
            type="text"
            id="dSpez"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mail">Contact Email</label>
          <input
            type="email"
            id="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Contact Number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="submit" className="btn-primary">
            Update
          </button>
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDealerForm;
