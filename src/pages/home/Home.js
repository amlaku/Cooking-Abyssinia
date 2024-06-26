
import { useFetch} from '../../hooks/useFetch'
// styles
import './Home.css'
 //componnents 
 import RecipeList from '../../components/RecipeList'

export default function Home() {
const { data, isPending, error } = useFetch('http://localhost:3000/recipes')

  return (
    <div className='home'>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading...</p>}
      {data && <RecipeList recipes ={data} />}
    </div>
  )
}
