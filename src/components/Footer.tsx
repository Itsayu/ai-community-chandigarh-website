import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faInstagram, 
  faYoutube, 
  faFacebookF, 
  faLinkedinIn,
  faXTwitter // Import the X (Twitter) icon
} from "@fortawesome/free-brands-svg-icons";


export function Footer() {
  return (
    <footer className="bg-white border-t py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700">
        <div className="mb-2 md:mb-0">
          ML Chandigarh
        </div>

        <div className="flex items-center gap-2">
          <span>Follow Us:</span>
          
          {/* Instagram - Updated Link */}
          <Link href="https://www.instagram.com/mlchandigarh" target="_blank" aria-label="Instagram" className="hover:text-pink-600">
            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
          </Link>

          {/* X (Twitter) - New Link Added */}
          <Link href="https://x.com/TFUGChandigarh" target="_blank" aria-label="X (Twitter)" className="hover:text-gray-900">
            <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
          </Link>
          
          {/* YouTube - Updated Link */}
          <Link href="https://www.youtube.com/@MLChandigarh" target="_blank" aria-label="YouTube" className="hover:text-red-600">
            <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
          </Link>
          
          {/* Facebook */}
          {/* <Link href="https://facebook.com/mlchandigarh" target="_blank" aria-label="Facebook" className="hover:text-blue-800">
            <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />
          </Link> */}
          
          {/* LinkedIn - Link Updated */}
          <Link href="https://in.linkedin.com/company/ml-chandigarh" target="_blank" aria-label="LinkedIn" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" />
          </Link>
          
        </div>
      </div>
    </footer>
  );
}