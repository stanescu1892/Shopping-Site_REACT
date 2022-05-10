import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
import "./ContactPage.scss";

import GoogleMap from "../../components/GoogleMap/GoogleMap";

function ContactPage() {
  return (
    <div>
      <span>
        Get in touch Our team in the UK is available between the hours of
        08:00am and 19:00pm GMT/BST, but you may find what you are looking for
        even quicker by checking out our Frequently Asked Questions. If you
        can’t you can still contact us via our webform or by calling our
        customer service team. If you chose to contact us via our webform,
        please include as much information as you can in the text box below,
        including billing address, order date, return date, return tracking
        code, product description & any other relevant info. Please allow 4
        business hours for us to respond to your enquiry and please note email
        response will be in English. If you'd like to speak to us you can call
        us on the following number: UK Customers 0344 576 6444 International
        Customers +44 344 576 6444 Calls are in English and will be charged at
        your network providers rates. Opening times may vary during UK bank
        holidays.
      </span>

      <SocialMediaIcons />
      <GoogleMap />
    </div>
  );
}

export default ContactPage;
