import { Player, sortPlayers } from './ej4'

it('should return a sorted array of players', () => {
  const player1 = new Player(50)
  const player2 = new Player(100) // Last
  const player3 = new Player(30) // First
  const player4 = new Player(70)

  const sortedPlayers = sortPlayers([player1, player2, player3, player4], 'asc')

  expect(sortedPlayers[0].points).toBe(30)
  expect(sortedPlayers[sortedPlayers.length - 1].points).toBe(100)
})
