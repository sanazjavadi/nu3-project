import QRCode from "react-qr-code";
import { IQrCode } from "./QrCode";

const QrCodeLink: React.FC<IQrCode.IProps> = ({ link }): JSX.Element => {
  return (
    <div className="bg-white p-6 ">
      <QRCode value={link} size={100} />
    </div>
  );
};

export default QrCodeLink;
