import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const fibonaci = () => {
    const router = useRouter();
    const { num } = router.query;
    let sucesion = [0, 1];

    const fibonaci = () => {
        let fin = 0;
        let inicio = 0
        if (num == undefined) {
            fin = 50;
        } else if (num.length == 1) {
            fin = num[0];
        } else if (num.length == 2) {
            fin = num[1];
            inicio = num[0];
        }

        for (let i = 2; i < fin; i++) {
            sucesion[i] = sucesion[i - 2] + sucesion[i - 1];
        }

        if (inicio != 0) {
            sucesion.splice(0, inicio);
        }
    }

    return (
        <div className='container mt-5 pt-5 w-25' onLoad={fibonaci()}>
            <div className='row'>
                <Link href='/' className='col ml-3'>
                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </Link>
                <h1 className='ml-5 pl-5 col'>Fibonaci</h1>
            </div>
            <ul className='list-group mt-3'>
                <li className='list-group-item text-center'>{sucesion.map((num) => {
                    return (<span>{num}, </span>);
                })}...</li>
            </ul>
        </div>
    )
}

export default fibonaci;