export function swapByMap<T extends { id: number }>(
    array: T[],
    mapping: { fromId: number; toId: number }[]
): T[] {
    const newArray = [...array];

    for (const { fromId, toId } of mapping) {
        const indexA = newArray.findIndex(i => i.id === fromId);
        const indexB = newArray.findIndex(i => i.id === toId);

        if (indexA === -1 || indexB === -1) continue;

        [newArray[indexA], newArray[indexB]] = [
            newArray[indexB],
            newArray[indexA],
        ];
    }

    return newArray;
}