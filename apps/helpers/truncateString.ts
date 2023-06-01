const truncateString = (character: string, limit: number = 15) => {
    if (character.length <= limit) {
        return character
    }
    return character.slice(0, limit) + "..."
}

export default truncateString