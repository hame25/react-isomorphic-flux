let config = {
  "host": "0.0.0.0",
  "port": 1982,

  "services": {
  	"taxonomy" : {
  		"protocol": "http",
  		"hostname": "localhost",
  		"port": 1981,
  		"pathname": "/taxonomy"
  	}, "plp" : {
      "protocol": "http",
      "hostname": "localhost",
      "port": 1981,
      "pathname": "/plp"
    }
  }
}

export default config;