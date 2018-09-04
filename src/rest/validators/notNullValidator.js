import err from '../helpers/error'

export default (req) => {
    const { plantName } = req.body
    
	if (!plantName) {
		return err('Please provide a valid plant name.', 'plantName')
    }
    
    return null
}
