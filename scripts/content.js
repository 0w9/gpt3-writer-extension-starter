import swal from 'sweetalert';

const insert = (content) => {
    swal("Hello world!");
    const elements = document.getElementsByClassName('droid');

    if (elements.length === 0) {
    return;
    }

    const element = elements[0];

    const p = document.createElement('p');
    p.textContent = "e";
    element.appendChild(p);

  // 13
    // Grab the first p tag so we can replace it with our injection
    const pToRemove = element.childNodes[0];
    pToRemove.remove();
  
    // Split content by \n
    const splitContent = content.split('\n');
  
    splitContent.forEach((content) => {
        const p = document.createElement('p');
      
        if (content === '') {
          const br = document.createElement('br');
          p.appendChild(br);
        } else {
          p.textContent = content;
        }
      
        // Insert into HTML one at a time
        element.appendChild(p);
      });
  
    // On success return true
    return true;
  };


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'inject') {
      const { content } = request;
  
      console.log(content);
      insert(content)
  
      sendResponse({ status: 'success' });
    }
});