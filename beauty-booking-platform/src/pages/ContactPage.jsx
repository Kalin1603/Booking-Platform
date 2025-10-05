import React from 'react';
import PlaceholderPage from './PlaceholderPage';

const ContactPage = () => {
  return (
    <PlaceholderPage title="Contact Us">
      <div className="space-y-4">
        <p>If you have any questions, feedback, or need support, please don't hesitate to reach out to us.</p>
        <p>
          <strong>For Customer Support:</strong> <a href="mailto:support@glamourbook.com" className="text-primary">support@glamourbook.com</a>
        </p>
        <p>
          <strong>For Business Inquiries:</strong> <a href="mailto:partners@glamourbook.com" className="text-primary">partners@glamourbook.com</a>
        </p>
      </div>
    </PlaceholderPage>
  );
};

export default ContactPage;