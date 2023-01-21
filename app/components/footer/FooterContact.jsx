import React from "react";

const FooterContact = ({ phone, fax, email, address }) => {
  return (
    <div>
      <h3 className="footer-headline">Contact</h3>
      <div className="flex items-center space-x-3 mb-4">
        <img src="/images/phone.svg" alt="phone" />
        <div>
          <a
            href={`tel:${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white"
          >
            Phone: <span className="text-primary hover:underline">{phone}</span>
          </a>
          <a
            href={`tel:${fax}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white"
          >
            Fax: <span className="text-primary hover:underline">{fax}</span>
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-3 mb-4">
        <img src="/images/mail.svg" alt="email" />
        <div>
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white"
          >
            Email:{" "}
            <span className="text-primary hover:underline block">{email}</span>
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <img src="/images/location.svg" alt="address" />
        <div>
          <div className="block text-white">
            Our address:{" "}
            <span
              className="text-primary hover:underline block"
              dangerouslySetInnerHTML={{ __html: address }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
