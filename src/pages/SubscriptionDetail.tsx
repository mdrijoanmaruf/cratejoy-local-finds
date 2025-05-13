
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { subscriptions } from "../data/subscriptions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "../contexts/AuthContext";
import { Separator } from "@/components/ui/separator";
import { StarIcon } from "lucide-react";
import { toast } from "sonner";

// Title component for dynamic page title
const Title = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  
  return null;
};

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

const SubscriptionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { currentUser } = useAuth();
  const subscription = subscriptions.find(sub => sub.id === id);
  
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(5);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedImage, setSelectedImage] = useState(subscription?.images[0] || "");
  
  useEffect(() => {
    if (subscription) {
      setReviews(subscription.reviews);
      setSelectedImage(subscription.images[0]);
    }
  }, [subscription]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!subscription) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Subscription Not Found</h2>
        <p className="mb-6">Sorry, the subscription box you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    );
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReview.trim()) {
      toast.error("Please enter a review comment");
      return;
    }
    
    const newReviewObj: Review = {
      id: `new-${Math.random().toString(36).substr(2, 9)}`,
      name: currentUser?.displayName || "Anonymous User",
      rating,
      comment: newReview,
      date: new Date().toISOString().split('T')[0],
      avatar: currentUser?.photoURL || undefined
    };
    
    setReviews([newReviewObj, ...reviews]);
    setNewReview("");
    setRating(5);
    toast.success("Review submitted successfully!");
  };

  const renderRatingStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setRating(i + 1)}
          className={`text-xl ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </button>
      ));
  };

  return (
    <>
      <Title title={`${subscription.name} - BoxWave`} />
      
      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="mb-6">
            <Link to="/" className="text-primary hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Subscriptions
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white rounded-lg overflow-hidden border">
                <img 
                  src={selectedImage}
                  alt={subscription.name}
                  className="w-full h-80 object-cover"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {subscription.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`border rounded overflow-hidden ${selectedImage === image ? 'ring-2 ring-primary' : ''}`}
                  >
                    <img 
                      src={image}
                      alt={`${subscription.name} thumbnail ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <span className="bg-secondary text-secondary-foreground text-sm font-medium px-2 py-1 rounded">
                  {subscription.category}
                </span>
                
                <h1 className="text-3xl font-bold mt-2">{subscription.name}</h1>
                
                <div className="mt-4 text-2xl font-semibold">
                  ${subscription.price.toFixed(2)} <span className="text-gray-500 text-base font-normal">/ {subscription.frequency.toLowerCase()}</span>
                </div>
                
                <p className="mt-4 text-gray-600">
                  {subscription.description}
                </p>
                
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Features:</h3>
                  <ul className="space-y-2">
                    {subscription.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Button size="lg" className="w-full mb-4">
                    Subscribe Now
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {subscription.details}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Reviews & Ratings</CardTitle>
                <CardDescription>
                  Share your thoughts about this subscription box
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
                  <form onSubmit={handleReviewSubmit}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rating
                      </label>
                      <div className="flex">
                        {renderRatingStars(rating)}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Review
                      </label>
                      <textarea
                        id="review"
                        rows={4}
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm p-2 border"
                        placeholder="Share your experience with this subscription box..."
                      ></textarea>
                    </div>
                    <Button type="submit">
                      Submit Review
                    </Button>
                  </form>
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  
                  {reviews.length > 0 ? (
                    reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                        <div className="flex items-start">
                          <div className="mr-4">
                            {review.avatar ? (
                              <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full" />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                                {review.name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h4 className="font-semibold">{review.name}</h4>
                              <span className="mx-2 text-gray-400">•</span>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                            <div className="flex text-yellow-400 mt-1">
                              {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                  <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>
                                    ★
                                  </span>
                                ))}
                            </div>
                            <p className="mt-2 text-gray-600">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No reviews yet. Be the first to leave a review!</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionDetail;
