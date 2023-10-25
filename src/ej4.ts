interface Comparable<T> {
  compareTo: (anotherObj: T) => number // (-) if smaller than, (0) if equal, (+) if greather than
}

export class Player implements Comparable<Player> {
  points: number

  constructor(points: number) {
    this.points = points
  }

  compareTo(anotherPlayer: Player): number {
    return this.points - anotherPlayer.points // (-) if smaller than, (0) if equal, (+) if greather than
  }
}

export function sortPlayers(
  players: Player[],
  order: 'asc' | 'desc'
): Player[] {
  return players.sort((p1, p2) =>
    order === 'asc' ? p1.compareTo(p2) : p2.compareTo(p1)
  )
}

const player1 = new Player(50)
const player2 = new Player(100)
const player3 = new Player(30)
const player4 = new Player(70)

const sortedPlayers = sortPlayers([player1, player2, player3, player4], 'asc')

console.log(sortedPlayers)
