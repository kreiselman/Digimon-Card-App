import { DigimonCard, ICountCard } from "@models";

export function getPlaysetAmount(card: DigimonCard): number {
    switch (card.restrictions.english) {
        case 'Restricted to 1':
        case 'Banned':
            return 1;
        case 'Unrestricted':
        default:
            return 4;
    }
}

export function getTotalCount(cardId: string, collection: ICountCard[]) {
    const foundCards = collection.filter((card) => card.id.split('_P')[0] === cardId);

    let count = 0;
    foundCards?.forEach((found) => {
        count += found.count;
    });
    return count;
}
