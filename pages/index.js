import Head from 'next/head'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Routing Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='container mt-5'>
          <h1>Tabla multiplicar</h1>
          <ul className='list-group mt-3 mb-3'>
            <li className='list-group-item'>
              <Link href='/calculo/1'>Tabla multiplicar de 1</Link>
            </li>
            <li className='list-group-item'>
              <Link href='/calculo/2'>Tabla multiplicar de 2</Link>
            </li>
            <li className='list-group-item'>
              <Link href='/calculo/3'>Tabla multiplicar de 3</Link>
            </li>
            <li className='list-group-item'>
              <Link href='/calculo/4'>Tabla multiplicar de 4</Link>
            </li>
            <li className='list-group-item'>
              <Link href='/calculo/5'>Tabla multiplicar de 5</Link>
            </li>
          </ul>

          <h1>Calcular</h1>
          <ul className='list-group mt-3 mb-3'>
            <li className='list-group-item'>
              <Link href='/calculo/4?por=3'>4 x 3</Link>
            </li>
            <li className='list-group-item'>
              <Link href='/calculo/12?entre=2'>12 / 2</Link>
            </li>
          </ul>

          <h1>Sumatorio</h1>
          <ul className='list-group mt-3 mb-3'>
            <li className='list-group-item'>
              <Link href='/calculo/1/2/4/6/4/7'>1 + 2 + 4 + 6 + 4 + 7</Link>
            </li>

            <li className='list-group-item'>
              <Link href='/calculo/3/5/8/9/2/5'>3 + 5 + 8 + 9 + 2 + 5</Link>
            </li>
          </ul>

          <h1>Fibonaci</h1>
          <ul className='list-group mt-3'>
            <li className='list-group-item'>
              <Link href='/fibonaci'>Sucesión de fibonaci</Link>
            </li>
            <li className='list-group-item'>
              <Link href='/fibonaci/30'>Sucesión de fibonaci hasta el dígito 30</Link>
            </li>
            <li className='list-group-item'>
              <Link href='/fibonaci/5/20'>Sucesión de fibonaci desde el dígito 5 al 20</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
