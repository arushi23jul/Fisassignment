function fn() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  var baseUrl = 'https://api.coindesk.com'
//  if (!env) {
//    env = 'dev';
//  }
  var config = {
	  'baseUrl': baseUrl
  }

  return config;
}