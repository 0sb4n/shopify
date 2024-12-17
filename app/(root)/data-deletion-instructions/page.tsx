import React from 'react';

const page = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Data Deletion Instructions</h1>
      <p>
        If you would like to delete your data from our app, please follow the instructions below. We are committed to protecting your privacy and ensuring that you have control over your personal information.
      </p>

      <h2>Steps to Delete Your Data</h2>
      <ol>
        <li>
          Open the app and navigate to the <strong>Account Settings</strong> section.
        </li>
        <li>
          Locate the <strong>Delete Account</strong> option under the Privacy settings.
        </li>
        <li>
          Click on <strong>Delete Account</strong> and confirm your action. This will permanently delete your account and all associated data from our servers.
        </li>
        <li>
          If you encounter any issues or need further assistance, please contact us at <strong>support@example.com</strong>.
        </li>
      </ol>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about the data deletion process, feel free to reach out:
        <br />
        <strong>Email:</strong> support@example.com
        <br />
        <strong>Phone:</strong> +1 (555) 123-4567
      </p>

      <h2>Important Notes</h2>
      <p>
        - Once your data is deleted, it cannot be recovered. Please ensure you have backed up any important information before proceeding.<br />
        - If you used third-party login (e.g., Google or Facebook), you may need to revoke app access from their respective platforms.
      </p>
    </div>
  );
};

export default page;