export const cardType = (data) =>{
	return data.name ? 'character': data.comics && data.title ? 'series': 'comic'
}
