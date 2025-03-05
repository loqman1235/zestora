import {
  FaApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaGooglePay,
} from "react-icons/fa6";

export const FooterCCLogos = () => {
  return (
    <ul className="flex items-center gap-2">
      <li className="bg-background border-border flex items-center justify-center rounded-sm border px-2 py-1">
        <FaCcVisa className="size-5" />
      </li>
      <li className="bg-background border-border flex items-center justify-center rounded-sm border px-2 py-1">
        <FaCcMastercard className="size-5" />
      </li>
      <li className="bg-background border-border flex items-center justify-center rounded-sm border px-2 py-1">
        <FaCcPaypal className="size-5" />
      </li>
      <li className="bg-background border-border flex items-center justify-center rounded-sm border px-2 py-1">
        <FaApplePay className="size-5" />
      </li>
      <li className="bg-background border-border flex items-center justify-center rounded-sm border px-2 py-1">
        <FaGooglePay className="size-5" />
      </li>
    </ul>
  );
};
