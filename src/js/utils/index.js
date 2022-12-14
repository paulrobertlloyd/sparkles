const currentTime = () => Math.floor(Date.now() / 1000)

const formatDate = t => (new Date(t * 1000)).toLocaleDateString()

// https://indieauth.spec.indieweb.org/#url-canonicalization
const canonicalURL = urlString => {
	let url
	try {
		url = new URL(urlString)
	} catch (_) {
		return null
	}
	return url && ['http:', 'https:'].includes(url.protocol) ? url.href : null
}

export {
	canonicalURL,
	currentTime,
	formatDate
}