import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const tabla = () => {
    const router = useRouter();
    const { num } = router.query;
    let resultado = 0;

    const sumatorio = () => {
        console.log('Numeros: ' + num.length);
        num.forEach(n => {
            resultado += parseInt(n);
        });
    }

    return (
        <div className='container mt-5 pt-5 w-25' onLoad={sumatorio()}>
            <div className='row'>
                <Link href='/' className='col ml-3'>
                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </Link>
                <h1 className='ml-5 pl-5 col'>Sumatorio</h1>
            </div>
            <ul className='list-group mt-3'>
                <li className='list-group-item text-center' key={resultado}>{resultado}</li>
            </ul>
        </div>
    )
}

export default tabla;