import React from 'react';
import PlaceholderPage from './PlaceholderPage'; // We reuse the layout

const AboutPage = () => {
  return (
    <PlaceholderPage title="About GlamourBook">
      <div className="space-y-4">
        <p>
          Welcome to GlamourBook, your premier destination for discovering and booking beauty and wellness services. Our mission is to seamlessly connect clients with talented specialists and top-rated salons, making beauty more accessible than ever before.
        </p>
        <p>
          For our users, we offer a curated selection of the best beauty centers, complete with detailed service menus, transparent pricing, and genuine user reviews. Our intuitive search and booking system allows you to find the perfect appointment that fits your schedule, anytime, anywhere.
        </p>
        <p>
          For our business partners, GlamourBook is more than just a listing service—it's a powerful tool to manage your business. Our platform provides an elegant digital storefront, a simple service management system, and an intuitive calendar to track bookings and manage your schedule, helping you grow your client base and streamline your operations.
        </p>
        <p>
          Thank you for being a part of our community. We are passionate about beauty and technology, and we are committed to building the best possible experience for everyone.
        </p>
      </div>
    </PlaceholderPage>
  );
};

export default AboutPage;