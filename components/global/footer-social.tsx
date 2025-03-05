import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

export const FooterSocial = () => {
  return (
    <ul className="mt-4 flex justify-center gap-2 md:justify-start">
      <li>
        <a
          className="bg-background border-border flex size-7 items-center justify-center rounded-full border"
          href="#"
          target="_blank"
        >
          <FaXTwitter />
        </a>
      </li>
      <li>
        <a
          className="bg-background border-border flex size-7 items-center justify-center rounded-full border"
          href="#"
          target="_blank"
        >
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a
          className="bg-background border-border flex size-7 items-center justify-center rounded-full border"
          href="#"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </li>
      <li>
        <a
          className="bg-background border-border flex size-7 items-center justify-center rounded-full border"
          href="#"
          target="_blank"
        >
          <FaGithub />
        </a>
      </li>
    </ul>
  );
};
