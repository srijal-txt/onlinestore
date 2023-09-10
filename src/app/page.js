"use client";
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Productcard from './components/Productcard'

import {
  useQuery
} from '@tanstack/react-query'
import LoaderComponent from './components/LoaderComponent';

export default function Home() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://fakestoreapi.com/products').then(
        (res) => res.json(),
      ),
  })
  
  if (isLoading) return <LoaderComponent/>
  
  if (error) return 'An error has occurred: '

  return (
    <main className={styles.main}>
      <div className='container'>
        <div className='row text-center row-gap-4'>
          {data.map((a)=>(
            <Productcard a={a} key={a.id}/>
            ))}
        </div>
      </div>
    </main>
  )
}
