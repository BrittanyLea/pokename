var pokename = function(str) {
  console.log(str)
	var rootName = '',
	    prefix = [],
	    suffix = ['saur', 'mander', 'izard', 'apod', 'attata', 'ticate', 'achu', 'oran', 'orina', 'oking', 'oqueen', 'ypuff', 'ytuff', 'bat', 'lett', 'dabra', 'kazam', 'nemite', 'netron', 'aunter', 'engar', 'owak', 'monlee', 'monchan', 'itung', 'ansey', 'yu', 'mar', 'abuzz', 'ygon', 'eon', 'icuno', 'tini', 'onair', 'onite', 'orita', 'nium', 'aquil'];
    return str + suffix[Math.round(Math.random() * suffix.length)]

}

pokename();