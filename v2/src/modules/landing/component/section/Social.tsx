import React from "react";

const Social = () => {
  return (
    <section className="section">
      <span className="section_title">Social Media</span>
      <a
        className="media_wrapper"
        href="https://www.linkedin.com/in/thanhphong2506/"
        target="_blank"
      >
        <i className="fa-brands fa-linkedin" />
        <span>Thanh Phong</span>
      </a>
      <a
        className="media_wrapper"
        href="https://github.com/xWyvernPx"
        target="_blank"
      >
        <i className="fa-brands fa-github" />
        <span>xWyvernPx</span>
      </a>
      <a
        className="media_wrapper"
        href="https://fb.me/xWyvernPx"
        target="_blank"
      >
        <i className="fa-brands fa-facebook" />
        <span>Thanh Phong</span>
      </a>
      <a
        className="media_wrapper"
        href="https://www.instagram.com/wyvernp.js__/"
        target="_blank"
      >
        <i className="fa-brands fa-instagram" />
        <span>@wyvernp.js__</span>
      </a>

      <a
        className="media_wrapper"
        href="https://discord.gg/xPzUyqX9Tx"
        target="_blank"
      >
        <i className="fa-brands fa-discord" />
        <span>Flame Foxes</span>
      </a>
    </section>
  );
};

export default Social;
