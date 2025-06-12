const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzpsyhp1Es1k_3RDpLBnzzf_j7CO8WGqYWPFYXTnEbrio6qsXihDDUFn7S5K5ielHnEDA/exec';

/**
 * Submits form data to Google Sheets via a hidden form submission
 * This approach avoids CORS issues that arise with direct AJAX calls
 */
export const pushToGoogleSheets = async (data: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      console.log('Attempting to push data to Google Sheets via Apps Script:', data);
      
      // Create a hidden iframe to handle the response
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hidden-iframe';
      document.body.appendChild(iframe);
      
      // Create a form inside the iframe
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = APPS_SCRIPT_URL;
      form.target = 'hidden-iframe'; // Submit to the hidden iframe
      
      // Add each field to the form
      Object.entries(data).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value as string;
        form.appendChild(input);      });
      
      // Set up iframe load event to handle completion
      iframe.onload = () => {
        console.log('Form submitted successfully to Google Sheets');
        // Clean up after successful submission
        setTimeout(() => {
          document.body.removeChild(form);
          document.body.removeChild(iframe);
        }, 500);
        resolve({ success: true, message: 'Form submitted successfully' });
      };
      
      // Submit the form
      document.body.appendChild(form);
      form.submit();
      
      // Set a timeout in case the iframe doesn't load
      setTimeout(() => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
        resolve({ success: true, message: 'Form submission timeout - assumed successful' });
      }, 5000);
    }catch (error) {
      console.error('Error pushing data to Google Sheets via Apps Script:', error);
      
      // Clean up if there was an error
      const forms = document.querySelectorAll('form[target="hidden-iframe"]');
      forms.forEach(form => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
      });
      
      const iframes = document.querySelectorAll('iframe[name="hidden-iframe"]');
      iframes.forEach(frame => {
        if (document.body.contains(frame)) {
          document.body.removeChild(frame);
        }
      });
      
      reject(error);
    }
  });
};

// Also export as default for easier importing
const googleSheetsApi = { pushToGoogleSheets };
export default googleSheetsApi;
