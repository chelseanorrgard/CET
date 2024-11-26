function getImgUrl(name) {
    return new URL(`../assets/rooms/${name}`, import.meta.url)
}

export {getImgUrl}