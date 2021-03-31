module.exports = rawRequest => {
  
  const method = rawRequest.split('\n')[0].split(' ')[0];
  const path = rawRequest.split('\n')[0].split(' ')[1];
  const headerAndBody = rawRequest.split('\n');
  
  if(headerAndBody.includes('\r')) {
    return request = {
      method,
      path,
      body: headerAndBody[headerAndBody.length - 1]
    };
  } else {
    return request = {
      method,
      path
    };
  }

};
