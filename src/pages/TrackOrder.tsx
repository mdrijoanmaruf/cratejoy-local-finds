
import { useEffect } from "react";
import OrderTracking from "../components/OrderTracking";

const TrackOrder = () => {
  useEffect(() => {
    document.title = "Track Your Order - BoxWave";
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>
        
        <div className="max-w-3xl mx-auto">
          <OrderTracking />
        </div>
        
        <div className="mt-16 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium">How long does shipping take?</h3>
              <p className="text-gray-600 mt-2">
                Standard shipping typically takes 3-5 business days after your subscription box ships. Premium subscribers receive expedited 2-day shipping at no additional cost.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">When will my subscription box ship?</h3>
              <p className="text-gray-600 mt-2">
                Subscription boxes ship on the 15th of each month. New subscribers who sign up after the 10th of the month will receive their first box the following month.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">Can I change my shipping address?</h3>
              <p className="text-gray-600 mt-2">
                Yes, you can update your shipping address in your account profile. Changes made after the 10th of the month will apply to the following month's shipment.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">What should I do if my box arrives damaged?</h3>
              <p className="text-gray-600 mt-2">
                We're sorry to hear that! Please contact our customer support team within 7 days of delivery, and provide photos of the damaged package. We'll send a replacement promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
