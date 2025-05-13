
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface OrderStatus {
  status: 'processing' | 'shipped' | 'delivered' | 'not-found';
  trackingId?: string;
  estimatedDelivery?: string;
  lastUpdate?: string;
  currentLocation?: string;
}

const OrderTracking: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      toast.error("Please enter a tracking number");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // Mock data - in a real app this would come from an API
      if (trackingNumber === '123456789') {
        setOrderStatus({
          status: 'shipped',
          trackingId: trackingNumber,
          estimatedDelivery: '2025-05-18',
          lastUpdate: '2025-05-14',
          currentLocation: 'Distribution Center, Chicago IL'
        });
      } else if (trackingNumber === '987654321') {
        setOrderStatus({
          status: 'delivered',
          trackingId: trackingNumber,
          estimatedDelivery: '2025-05-10',
          lastUpdate: '2025-05-10',
          currentLocation: 'Delivered to recipient'
        });
      } else if (trackingNumber === '123123123') {
        setOrderStatus({
          status: 'processing',
          trackingId: trackingNumber,
          estimatedDelivery: '2025-05-20',
          lastUpdate: '2025-05-13',
          currentLocation: 'Warehouse'
        });
      } else {
        setOrderStatus({
          status: 'not-found'
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const renderStatusContent = () => {
    if (!orderStatus) return null;
    
    switch (orderStatus.status) {
      case 'processing':
        return (
          <div className="mt-4 space-y-4">
            <div className="bg-yellow-50 text-yellow-700 p-4 rounded-md">
              <p className="font-medium">Your order is being processed</p>
              <p className="text-sm mt-1">We're preparing your box for shipment.</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-medium">Estimated Delivery:</span> {orderStatus.estimatedDelivery}</p>
              <p><span className="font-medium">Current Status:</span> Processing</p>
              <p><span className="font-medium">Last Update:</span> {orderStatus.lastUpdate}</p>
            </div>
          </div>
        );
        
      case 'shipped':
        return (
          <div className="mt-4 space-y-4">
            <div className="bg-blue-50 text-blue-700 p-4 rounded-md">
              <p className="font-medium">Your order is on the way!</p>
              <p className="text-sm mt-1">Your subscription box has been shipped.</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-medium">Tracking ID:</span> {orderStatus.trackingId}</p>
              <p><span className="font-medium">Estimated Delivery:</span> {orderStatus.estimatedDelivery}</p>
              <p><span className="font-medium">Current Location:</span> {orderStatus.currentLocation}</p>
              <p><span className="font-medium">Last Update:</span> {orderStatus.lastUpdate}</p>
            </div>
            <div className="relative pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs">Processed</span>
                <span className="text-xs">Shipped</span>
                <span className="text-xs text-gray-400">Delivered</span>
              </div>
              <div className="h-2 bg-gray-200 rounded">
                <div className="h-full bg-blue-500 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        );
        
      case 'delivered':
        return (
          <div className="mt-4 space-y-4">
            <div className="bg-green-50 text-green-700 p-4 rounded-md">
              <p className="font-medium">Your order has been delivered!</p>
              <p className="text-sm mt-1">We hope you enjoy your box.</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-medium">Tracking ID:</span> {orderStatus.trackingId}</p>
              <p><span className="font-medium">Delivery Date:</span> {orderStatus.lastUpdate}</p>
              <p><span className="font-medium">Status:</span> Delivered</p>
            </div>
            <div className="relative pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs">Processed</span>
                <span className="text-xs">Shipped</span>
                <span className="text-xs">Delivered</span>
              </div>
              <div className="h-2 bg-gray-200 rounded">
                <div className="h-full bg-green-500 rounded w-full"></div>
              </div>
            </div>
          </div>
        );
        
      case 'not-found':
        return (
          <div className="mt-4">
            <div className="bg-red-50 text-red-700 p-4 rounded-md">
              <p className="font-medium">Order not found</p>
              <p className="text-sm mt-1">We couldn't find an order with the provided tracking number.</p>
              <p className="text-sm mt-2">Please double-check your tracking number and try again, or contact customer support if you need assistance.</p>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Track Your Order</CardTitle>
        <CardDescription>
          Enter your tracking number to check the status of your subscription box.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleTrack} className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter tracking number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Tracking..." : "Track Order"}
            </Button>
          </div>
          
          {orderStatus && (
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Order Status</h3>
              {renderStatusContent()}
            </div>
          )}
          
          <div className="mt-4 text-sm text-gray-500">
            <p className="font-medium">Need help?</p>
            <p>For testing, try these tracking numbers:</p>
            <ul className="list-disc list-inside mt-1">
              <li>123456789 - Shipped order</li>
              <li>987654321 - Delivered order</li>
              <li>123123123 - Processing order</li>
            </ul>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default OrderTracking;
