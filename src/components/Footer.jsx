import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around pt-6 pb-40 mt-16" style={{ background: '#1e1e1e', color: '#fff', borderTop: '1px solid #555' }}>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Explore</h2>
        <p>Home</p>
        <p>Shop</p>
        <p>Account</p>
        <p>Profile</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Categories</h2>
        <p>Handbags</p>
        <p>Wallets</p>
        <p>Backpacks</p>
        <p>Travel Bags</p>
        <p>Accessories</p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Customer Care</h2>
        <p>Shipping</p>
        <p>Returns</p>
        <p>FAQs</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Connect</h2>
        <p>Subscribe to Newsletter</p>
        <p>Follow Us on Instagram</p>
        <p>Customer Reviews</p>
        <p>Blog</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Footer;
