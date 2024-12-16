import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Dio-Commerce. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-3 items-center">
          <a
            href="https://facebook.com"
            className="text-blue-500 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoFacebook className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTwitter className="w-8 h-8" />
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-500 hover:text-pink-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};
