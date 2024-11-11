import { FaWhatsapp } from "react-icons/fa";
/* import { IoMailOutline } from 'react-icons/io5'; */

export default function ContactButtons() {
  return (
    <div>
      <div className="bg-[#d31551] rounded-full ">
        <a
          href="https://wa.me/6281268644726"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} color="white" />
        </a>
      </div>
    </div>
  );
}
