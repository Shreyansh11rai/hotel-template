import { getWhatsAppUrl } from "../lib/whatsapp";

export default function WhatsAppLink({
  children,
  message,
  className = "",
  ...props
}) {
  return (
    <a
      className={className}
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
