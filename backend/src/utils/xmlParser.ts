import { XMLParser } from 'fast-xml-parser'
const options = {
	ignoreAttributes: false,
}
const parser = new XMLParser(options)
export default parser
