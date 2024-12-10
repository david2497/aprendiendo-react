import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {

  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      initialIsFollowing: true
    },
    {
      userName: 'cacho2497',
      name: 'David Palacios',
      initialIsFollowing: true
    },
    {
      userName: 'Horcus',
      name: 'horcus',
      initialIsFollowing: false
    },
  ]

  return (
    <section className='App'>

      {
        users.map(user => {
          const { userName, name, initialIsFollowing } = user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={initialIsFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}

export default App
