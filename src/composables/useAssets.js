export function useAssets(asset) {
    const assets = import.meta.glob('/src/assets/**', { eager: true })

    if (assets[asset]) {
        return assets[asset].default
    }
}